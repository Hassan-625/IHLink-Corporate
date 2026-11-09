import { useMemo } from "react";
import { ArrowRight, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { ModulePage } from "@/components/ModulePage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { useAccountSections } from "./accountShared";
import { openPlatformWithHandoff } from "@/lib/platformHandoff";
import type { PlatformKey } from "@/lib/platformUrls";

const products = [
  { key:"datasub", name:"IHLink DataSub", destination:"/datasub/dashboard" },
  { key:"consult", name:"IHLink Consult", destination:"/consult/portal" },
  { key:"host", name:"IHLink Host", destination:"/host/dashboard" },
  { key:"engineering", name:"IHLink Engineering", destination:"/engineering/dashboard" },
  { key:"business_centre", name:"Business & Innovation Centre", destination:"/business-centre/workspace" },
  { key:"print", name:"Print & Branding", destination:"/print/order" },
  { key:"fabrication", name:"3D & Fabrication Lab", destination:"/fabrication" },
  { key:"compute", name:"AI & Compute", destination:"/compute" },
  { key:"academy", name:"IHLink Academy", destination:"/academy" },
  { key:"digital_business", name:"Digital Business Centre", destination:"/business-centre/digital-services" },
] as const;

export function ResponsibilitiesPage() {
  const sections = useAccountSections();
  const { user, profile, adminAccess, serviceAccess } = useAuth();
  const rows = useMemo(() => products.flatMap(product => {
    const admin = adminAccess.find(item => item.product === product.key);
    const service = serviceAccess.find(item => item.product === product.key);
    if (!admin && !service) return [];
    const permissions = admin ? [
      admin.can_view && "View",
      admin.can_edit && "Edit",
      admin.can_approve && "Approve",
      admin.can_delete && "Delete",
      admin.can_manage && "Manage",
      admin.can_use_website_builder && "Website builder",
      admin.can_use_command_center && "Command centre",
    ].filter(Boolean) as string[] : [];
    return [{ ...product, admin, service, permissions, active: Boolean(admin?.can_view || service?.status === "active"), role: admin ? "Platform administrator" : "Customer" }];
  }), [adminAccess, serviceAccess]);
  const primary = rows.find(row => row.admin?.can_manage) || rows.find(row => row.admin?.can_view) || rows.find(row => row.service?.status === "active");
  const name = profile ? [profile.first_name, profile.last_name].filter(Boolean).join(" ") || profile.email : user?.email || "IHLink account";
  const roleLabels: Record<string,string> = { super_admin:"Super Administrator", platform_admin:"Platform Administrator", content_admin:"Content Administrator", support:"Support", finance:"Finance", customer:"Customer" };
  const role = roleLabels[String(profile?.role || "")] || "Account role";
  return <ModulePage product="corporate" sections={sections} title="My Responsibilities" eyebrow="IHLink account workspace" description="A single view of the IHLink products where this account has an assigned administrator permission or customer service access. Each destination still verifies access independently." userName={name} userRole={role} primaryAction={primary ? "Open primary responsibility" : "View account"} onPrimaryAction={primary ? () => void openPlatformWithHandoff(primary.key as PlatformKey, primary.destination) : undefined} metrics={[{label:"Assigned products",value:String(rows.length)},{label:"Administrator assignments",value:String(rows.filter(row=>row.admin?.can_view).length)},{label:"Active customer services",value:String(rows.filter(row=>row.service?.status==="active").length)}]}>
    <Card><div className="flex items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-royal-600"/><div><h3 className="font-bold">Access follows your existing assignments</h3><p className="mt-1 text-sm text-muted">This page only reads your existing platform permissions and service-access records. It cannot grant, modify or elevate access. IHLink SchoolPro is intentionally excluded from this cross-product navigation.</p></div></div></Card>
    {rows.length === 0 ? <Card><div className="flex items-center gap-3"><BriefcaseBusiness className="h-6 w-6 text-muted"/><div><h3 className="font-bold">No other product responsibilities found</h3><p className="mt-1 text-sm text-muted">No administrator assignment or active customer service access was returned for this account. Contact IHLink support if you believe an assignment is missing.</p></div></div></Card> :
      <div className="grid gap-4 md:grid-cols-2">{rows.map(row=><Card key={row.key} className="flex flex-col"><div className="flex items-start justify-between gap-3"><div><h3 className="font-bold">{row.name}</h3><p className="mt-1 text-xs text-muted">{row.role}</p></div><span className={"rounded-full px-2.5 py-1 text-xs font-bold " + (row.active ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700")}>{row.active?"Available":"Pending / limited"}</span></div>{row.admin&&<div className="mt-4"><p className="text-xs font-bold uppercase tracking-wide text-muted">Administrator permissions</p><div className="mt-2 flex flex-wrap gap-2">{row.permissions.length?row.permissions.map(permission=><span key={permission} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{permission}</span>):<span className="text-sm text-muted">No view permission currently assigned</span>}</div></div>}{row.service&&<div className="mt-4"><p className="text-xs font-bold uppercase tracking-wide text-muted">Customer service access</p><p className="mt-1 text-sm">{row.service.status}{row.service.plan_name ? " · " + row.service.plan_name : ""}</p></div>}<div className="mt-auto pt-5"><Button fullWidth disabled={!row.active} onClick={()=>void openPlatformWithHandoff(row.key as PlatformKey,row.destination)}>Open responsibility <ArrowRight className="ml-2 h-4 w-4"/></Button></div></Card>)}</div>}
  </ModulePage>;
}
