import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { CorporateHome } from '@/pages/corporate/CorporateHome';
import { AboutPage } from '@/pages/corporate/AboutPage';
import { ServicesPage } from '@/pages/corporate/ServicesPage';
import { OnboardingPage } from '@/pages/corporate/OnboardingPage';
import { ContactPage } from '@/pages/corporate/ContactPage';
import { PortfolioPage } from '@/pages/corporate/PortfolioPage';
import { CaseStudiesPage } from '@/pages/corporate/CaseStudiesPage';
import { TestimonialsPage } from '@/pages/corporate/TestimonialsPage';
import { BlogPage } from '@/pages/corporate/BlogPage';
import { BlogArticlePage } from '@/pages/corporate/BlogArticlePage';
import { CareersPage } from '@/pages/corporate/CareersPage';
import { PartnersPage } from '@/pages/corporate/PartnersPage';
import { FAQPage } from '@/pages/corporate/FAQPage';
import { PrivacyPage } from '@/pages/corporate/PrivacyPage';
import { TermsPage } from '@/pages/corporate/TermsPage';
import { SupportPage } from '@/pages/corporate/SupportPage';
import { SignInPage } from '@/pages/auth/SignInPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { ResetPasswordPage } from '@/pages/auth/ResetPasswordPage';
import { UpdatePasswordPage } from '@/pages/auth/UpdatePasswordPage';
import { VerifyEmailPage } from '@/pages/auth/VerifyEmailPage';
import { AuthHandoffPage } from '@/pages/auth/AuthHandoffPage';
import { AccountPage } from '@/pages/account/AccountPage';
import { NotificationsPage } from '@/pages/account/NotificationsPage';
import { BillingPage } from '@/pages/account/BillingPage';
import { AccountSupportPage } from '@/pages/account/AccountSupportPage';
import { AccountSecurityPage } from '@/pages/account/AccountSecurityPage';
import { ProfilePage } from '@/pages/account/ProfilePage';
export default function App(){return <Routes>
  <Route path="/" element={<CorporateHome/>}/>
  <Route path="/about" element={<AboutPage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/onboarding" element={<OnboardingPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/portfolio" element={<PortfolioPage/>}/><Route path="/case-studies" element={<CaseStudiesPage/>}/><Route path="/testimonials" element={<TestimonialsPage/>}/><Route path="/blog" element={<BlogPage/>}/><Route path="/blog/article" element={<BlogArticlePage/>}/><Route path="/careers" element={<CareersPage/>}/><Route path="/partners" element={<PartnersPage/>}/><Route path="/faq" element={<FAQPage/>}/><Route path="/privacy" element={<PrivacyPage/>}/><Route path="/terms" element={<TermsPage/>}/><Route path="/support" element={<SupportPage/>}/>
  <Route path="/signin" element={<SignInPage/>}/><Route path="/register" element={<RegisterPage/>}/><Route path="/reset-password" element={<ResetPasswordPage/>}/><Route path="/auth/update-password" element={<UpdatePasswordPage/>}/><Route path="/verify-email" element={<VerifyEmailPage/>}/><Route path="/auth/handoff" element={<AuthHandoffPage/>}/>
  <Route path="/dashboard" element={<Navigate to="/account" replace/>}/>
  <Route path="/account" element={<ProtectedRoute><AccountPage/></ProtectedRoute>}/>
  <Route path="/account/notifications" element={<ProtectedRoute><NotificationsPage/></ProtectedRoute>}/>
  <Route path="/account/billing" element={<ProtectedRoute><BillingPage/></ProtectedRoute>}/>
  <Route path="/account/support" element={<ProtectedRoute><AccountSupportPage/></ProtectedRoute>}/>
  <Route path="/account/security" element={<ProtectedRoute><AccountSecurityPage/></ProtectedRoute>}/>
  <Route path="/account/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
</Routes>}
