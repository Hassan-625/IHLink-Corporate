import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./dist/", import.meta.url));
const port = Number(process.env.PORT || 10000);
const upstream = process.env.BILLSTACK_WEBHOOK_UPSTREAM ||
  "https://lnqsroyiybutkfngbyge.supabase.co/functions/v1/billstack-webhook";

const mime = {
  ".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",
  ".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",
  ".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",
  ".webp":"image/webp",".ico":"image/x-icon",".woff":"font/woff",".woff2":"font/woff2"
};

function headers(res) {
  res.setHeader("X-Content-Type-Options","nosniff");
  res.setHeader("Referrer-Policy","strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy","camera=(), microphone=(), geolocation=()");
  res.setHeader("X-Frame-Options","SAMEORIGIN");
}

async function webhook(req, res) {
  if (req.method === "GET" || req.method === "HEAD") {
    res.writeHead(200, {"content-type":"application/json; charset=utf-8","cache-control":"no-store"});
    return res.end(req.method === "HEAD" ? undefined : JSON.stringify({ok:true,endpoint:"billstack-webhook"}));
  }
  if (req.method !== "POST") {
    res.writeHead(405, {"content-type":"application/json; charset=utf-8","allow":"GET, HEAD, POST"});
    return res.end(JSON.stringify({error:"Method not allowed"}));
  }

  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 1024 * 1024) {
      res.writeHead(413, {"content-type":"application/json; charset=utf-8"});
      return res.end(JSON.stringify({error:"Payload too large"}));
    }
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks);
  const forwardHeaders = {};
  for (const name of ["content-type","x-wiaxy-signature-256","x-wiaxy-timestamp","user-agent"]) {
    const value = req.headers[name];
    if (value) forwardHeaders[name] = Array.isArray(value) ? value.join(",") : value;
  }

  try {
    const response = await fetch(upstream, {method:"POST",headers:forwardHeaders,body,redirect:"manual"});
    const responseBody = Buffer.from(await response.arrayBuffer());
    res.writeHead(response.status, {
      "content-type": response.headers.get("content-type") || "application/json; charset=utf-8",
      "cache-control":"no-store"
    });
    res.end(responseBody);
  } catch (error) {
    console.error("BillStack webhook proxy failed", error);
    res.writeHead(502, {"content-type":"application/json; charset=utf-8","cache-control":"no-store"});
    res.end(JSON.stringify({error:"Webhook upstream unavailable"}));
  }
}

const server = http.createServer(async (req,res) => {
  headers(res);
  const url = new URL(req.url || "/", "http://localhost");
  if (url.pathname === "/webhook/billstack") return webhook(req,res);

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, {"content-type":"text/plain; charset=utf-8"});
    return res.end("Method not allowed");
  }

  let pathname;
  try { pathname = decodeURIComponent(url.pathname); }
  catch { res.writeHead(400); return res.end("Bad request"); }

  const relative = normalize(pathname).replace(/^([/\\])+/, "");
  let file = join(root, relative);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end("Forbidden"); }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file,"index.html");
  if (!existsSync(file) || !statSync(file).isFile()) file = join(root,"index.html");

  res.setHeader("content-type", mime[extname(file).toLowerCase()] || "application/octet-stream");
  if (file.endsWith("index.html")) res.setHeader("cache-control","no-cache");
  else res.setHeader("cache-control","public, max-age=31536000, immutable");
  res.writeHead(200);
  if (req.method === "HEAD") return res.end();
  createReadStream(file).pipe(res);
});

server.listen(port, "0.0.0.0", () => console.log(`IHLink Corporate listening on ${port}`));
