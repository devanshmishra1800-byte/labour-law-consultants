"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  FileCheck, Shield, Briefcase, Building2, Landmark, 
  FileSignature, Users, Award, Store, ArrowRight, 
  ChevronDown, AlertTriangle, FileText, CheckCircle2, 
  HelpCircle, Scale
} from 'lucide-react';

const actsData = [
  {
    id: "epf-compliance",
    title: "EPF Act / EPFO Compliance",
    icon: <FileCheck className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Mandatory retirement savings scheme to secure employee futures.",
    appliesTo: "Generally required for establishments with 20 or more employees.",
    commonRisk: "Heavy damages and penal interest for delayed remittance or non-registration.",
    details: {
      covers: "The Employees' Provident Funds and Miscellaneous Provisions Act, 1952 provides provident fund, pension, and insurance to industrial and other workers.",
      whoNeeds: "Any business, factory, or establishment employing 20 or more persons. Voluntary registration is also possible.",
      keyRequirements: [
        "Monthly PF calculation and ECR filing",
        "Timely deposit of PF contributions",
        "UAN generation and KYC linking",
        "Employee nomination and joint declarations"
      ],
      documentsNeeded: [
        "PAN, GST Certificate, and Incorporation documents",
        "Employee details (Aadhaar, Bank Account, Mobile)",
        "Digital Signature Certificate (DSC) of Authorized Signatory"
      ],
      commonMistakes: [
        "Delaying monthly PF payments beyond the due date",
        "Mismatch in employee Aadhaar and PF records",
        "Failing to register eligible contract workers"
      ],
      howWeHelp: "We handle new registrations, monthly ECR generation, KYC updates, grievance resolution, and manage PF claim processing for your workforce."
    }
  },
  {
    id: "esic-compliance",
    title: "ESIC Act / ESIC Compliance",
    icon: <Shield className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Social security and health insurance program for Indian workers.",
    appliesTo: "Factories/establishments with 10 or more employees (subject to state rules).",
    commonRisk: "Penalties for non-contribution and denial of employee medical benefits.",
    details: {
      covers: "The Employees' State Insurance Act, 1948 protects employees against the impact of sickness, maternity, disablement, and death due to employment injury.",
      whoNeeds: "Establishments employing 10 or more persons (20 in some states) whose monthly wages do not exceed the statutory limit (currently ₹21,000).",
      keyRequirements: [
        "Monthly ESIC challan generation and payment",
        "Registration of new employees (Pehchan Card)",
        "Accident report filing when necessary",
        "Half-yearly return filing"
      ],
      documentsNeeded: [
        "Establishment registration certificates",
        "List of employees and their family details",
        "Bank statements and attendance registers"
      ],
      commonMistakes: [
        "Ignoring ESIC coverage for temporary or contract staff",
        "Late filing of accident reports",
        "Incorrect wage calculations for contribution"
      ],
      howWeHelp: "We manage end-to-end ESIC monthly compliances, handle employee benefit claims, and prepare your records for ESIC inspections."
    }
  },
  {
    id: "labour-law",
    title: "Labour Law Compliance",
    icon: <Scale className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Management of minimum wages, bonus, gratuity, and basic employment laws.",
    appliesTo: "All businesses with hired employees or contract workers.",
    commonRisk: "Legal disputes, formal notices from the Labour Department, and operational disruption.",
    details: {
      covers: "Minimum Wages Act, Payment of Wages Act, Payment of Bonus Act, Payment of Gratuity Act, and readiness for the upcoming Labour Codes.",
      whoNeeds: "Every employer operating in India must comply with applicable central and state labour legislations.",
      keyRequirements: [
        "Adhering to state-specific minimum wage notifications",
        "Maintaining statutory registers and muster rolls",
        "Timely payment of wages, statutory bonus, and gratuity",
        "Filing annual/half-yearly labour returns"
      ],
      documentsNeeded: [
        "Wage registers and attendance records",
        "Appointment letters and employment contracts",
        "Payment proofs"
      ],
      commonMistakes: [
        "Paying basic wages below the notified minimum wage",
        "Not maintaining required registers at the workplace",
        "Ignoring statutory bonus liabilities"
      ],
      howWeHelp: "We conduct payroll audits, maintain mandatory statutory registers, draft compliant HR policies, and ensure seamless yearly return filings."
    }
  },
  {
    id: "factories-act",
    title: "Factories Act Compliance",
    icon: <Building2 className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Ensures safety, health, and welfare of workers in manufacturing units.",
    appliesTo: "Manufacturing units meeting the worker threshold (with/without power).",
    commonRisk: "Factory closure notices, inspection hurdles, and heavy safety fines.",
    details: {
      covers: "The Factories Act, 1948 protects workers employed in factories against industrial and occupational hazards.",
      whoNeeds: "Premises where manufacturing processes occur employing 10+ workers (with power) or 20+ workers (without power). Note: State thresholds may vary.",
      keyRequirements: [
        "Getting factory building plan approved",
        "Obtaining and renewing the Factory Licence",
        "Ensuring workplace safety, ventilation, and sanitation",
        "Filing annual returns with the Directorate of Industrial Safety"
      ],
      documentsNeeded: [
        "Approved site plans and stability certificates",
        "NOC from Fire and Pollution Control Boards",
        "List of machinery and power load details"
      ],
      commonMistakes: [
        "Expanding facilities without renewing the building plan",
        "Failing to renew the licence before expiry",
        "Not providing adequate safety gear to floor workers"
      ],
      howWeHelp: "We handle the complex paperwork for factory licensing, renewals, and assist during inspections by safety officers."
    }
  },
  {
    id: "contract-labour",
    title: "Contract Labour Licence",
    icon: <Briefcase className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Registration & licensing for engaging contract workers.",
    appliesTo: "Principal employers and contractors engaging 20 or more contract workers.",
    commonRisk: "Principal employer held liable for contractor defaults; ban on engaging workers.",
    details: {
      covers: "The Contract Labour (Regulation and Abolition) Act, 1970 prevents exploitation of contract labour and regulates their working conditions.",
      whoNeeds: "Principal Employers who hire 20+ contract workers, and Contractors who supply 20+ workers to an establishment.",
      keyRequirements: [
        "Registration Certificate for Principal Employer",
        "Valid Labour Licence for the Contractor",
        "Ensuring minimum wages and PF/ESIC for contract staff",
        "Maintaining contractor registers"
      ],
      documentsNeeded: [
        "Form I (Principal Employer) / Form IV (Contractor)",
        "Agreement between Principal Employer and Contractor",
        "Work order details"
      ],
      commonMistakes: [
        "Principal employers failing to verify if the contractor has a valid licence",
        "Not ensuring PF/ESIC compliances are met by the contractor",
        "Operating without the mandatory Registration Certificate"
      ],
      howWeHelp: "We assist both contractors in obtaining their licences and principal employers in getting registered and conducting contractor compliance audits."
    }
  },
  {
    id: "gst-compliance",
    title: "GST Compliance",
    icon: <Landmark className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Registration, monthly filing, and reconciliation of Goods & Services Tax.",
    appliesTo: "Businesses crossing the turnover threshold or making inter-state supplies.",
    commonRisk: "Blocked Input Tax Credit (ITC), reverse charge issues, and GST notices.",
    details: {
      covers: "Comprehensive advisory, registration, return filing, and audit support under the Goods and Services Tax framework.",
      whoNeeds: "Any business with an aggregate turnover exceeding ₹40 Lakhs (Goods) or ₹20 Lakhs (Services), or as mandated by specific interstate or e-commerce rules.",
      keyRequirements: [
        "Filing GSTR-1 and GSTR-3B on time",
        "Generating e-Way Bills and e-Invoices (if applicable)",
        "Reconciling GSTR-2A/2B for accurate Input Tax Credit",
        "Filing Annual Return (GSTR-9)"
      ],
      documentsNeeded: [
        "Sales and purchase invoices",
        "Bank statements",
        "Digital Signature (DSC)"
      ],
      commonMistakes: [
        "Claiming ineligible Input Tax Credit",
        "Delaying return filings attracting late fees and interest",
        "Misclassification of HSN/SAC codes"
      ],
      howWeHelp: "We ensure precise reconciliation, timely monthly/quarterly return filings, and expertly handle departmental notices or audits."
    }
  },
  {
    id: "shop-establishment",
    title: "Shops & Establishment Compliance",
    icon: <Store className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Basic registration required for commercial shops and offices.",
    appliesTo: "Every shop, commercial establishment, or office starting operations.",
    commonRisk: "Fines during local inspections and trouble opening current bank accounts.",
    details: {
      covers: "State-specific Acts governing working hours, rest intervals, opening/closing hours, and holidays for employees in commercial locations.",
      whoNeeds: "Almost all physical retail stores, corporate offices, warehouses, and commercial entities operating within a state's jurisdiction.",
      keyRequirements: [
        "Applying for registration within 30 days of commencement",
        "Displaying the certificate prominently at the premises",
        "Adhering to local rules on national holidays and working hours",
        "Periodic renewals based on state rules"
      ],
      documentsNeeded: [
        "Address proof of the establishment",
        "ID proof of the proprietor/directors",
        "Details of employees"
      ],
      commonMistakes: [
        "Ignoring registration for small corporate or IT offices",
        "Failing to renew the certificate before the expiry date",
        "Not displaying the certificate at the entrance"
      ],
      howWeHelp: "We process swift online/offline registrations and renewals across various Indian states, ensuring you remain locally compliant."
    }
  },
  {
    id: "hr-payroll",
    title: "HR & Payroll Compliance",
    icon: <Users className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "End-to-end payroll processing adhering to tax and labour regulations.",
    appliesTo: "Growing businesses seeking accurate payload execution and tax deductions.",
    commonRisk: "TDS defaults, incorrect salary payouts, and disgruntled employees.",
    details: {
      covers: "Tax Deducted at Source (TDS), Professional Tax (PT), Labour Welfare Fund (LWF), and accurate calculation of take-home salaries.",
      whoNeeds: "Any organization looking to outsource their payroll calculation to ensure 100% accuracy and statutory adherence.",
      keyRequirements: [
        "Proper structuring of CTC (Basic, HRA, Allowances)",
        "Deducting and remitting TDS, PT, and LWF accurately",
        "Generating compliant payslips",
        "Filing quarterly TDS returns and issuing Form 16"
      ],
      documentsNeeded: [
        "Employee CTC structures",
        "Investment declarations for TDS",
        "Attendance and leave data"
      ],
      commonMistakes: [
        "Incorrect drafting of salary structures leading to higher tax liability",
        "Failing to deduct Professional Tax where applicable",
        "Missing TDS deposit deadlines"
      ],
      howWeHelp: "We act as your virtual payroll department, standardizing structures, processing monthly salaries, and managing all related remittances."
    }
  },
  {
    id: "iso-certification",
    title: "ISO Certification Support",
    icon: <Award className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Guidance on securing international quality and security standards.",
    appliesTo: "Businesses aiming for corporate tenders, exports, or quality branding.",
    commonRisk: "Losing major contracts or tenders due to lack of standard certifications.",
    details: {
      covers: "ISO 9001 (Quality), ISO 14001 (Environment), ISO 27001 (Information Security), and other relevant management systems.",
      whoNeeds: "Organizations looking to improve internal processes, build customer trust, or qualify for specific government/corporate empanelment.",
      keyRequirements: [
        "Establishing internal Standard Operating Procedures (SOPs)",
        "Conducting internal audits and management reviews",
        "Selecting an accredited certification body",
        "Undergoing Stage 1 and Stage 2 external audits"
      ],
      documentsNeeded: [
        "Quality Manuals and SOP documentation",
        "Company legal proofs",
        "Process flowcharts"
      ],
      commonMistakes: [
        "Opting for non-accredited or 'fake' ISO certificates",
        "Failing to implement the procedures documented in the manual",
        "Missing annual surveillance audits"
      ],
      howWeHelp: "We guide you through the documentation process, help implement required systems, and facilitate smooth certification via accredited bodies."
    }
  },
  {
    id: "dsc-support",
    title: "DSC / Digital Signature Support",
    icon: <FileSignature className="w-8 h-8 text-[#eab308]" />,
    shortExplanation: "Quick issuance of Class 3 Digital Signature Certificates.",
    appliesTo: "Directors, partners, and authorized signatories for online filings.",
    commonRisk: "Inability to file MCA returns, GST returns, or EPF documents online.",
    details: {
      covers: "Issuance, renewal, and management of Class 3 Digital Signature Certificates required for digital authentication in India.",
      whoNeeds: "Company Directors (for MCA filings), Proprietors (for GST/Income Tax), and HR Heads (for EPFO portals).",
      keyRequirements: [
        "Submitting KYC video and identity proofs online",
        "Procuring a secure USB crypto token",
        "Registering the DSC on relevant government portals"
      ],
      documentsNeeded: [
        "PAN Card and Aadhaar Card",
        "Passport size photograph",
        "Email and Mobile linked to Aadhaar"
      ],
      commonMistakes: [
        "Losing the physical USB token",
        "Forgetting the DSC token password, resulting in lockouts",
        "Letting the DSC expire right before a critical filing deadline"
      ],
      howWeHelp: "We provide hassle-free, same-day remote approval for Class 3 DSCs with secure physical token delivery and installation support."
    }
  }
];

export default function ActsClientPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0a1526] text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#eab308]/30 bg-[#eab308]/10 mb-8 mt-4">
              <Scale className="w-4 h-4 text-[#eab308]" />
              <span className="text-sm font-bold tracking-wider uppercase text-[#eab308]">Compliance Knowledge Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Acts & Compliance Areas We Support</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Understand the major statutory, labour, factory, GST, and HR compliance requirements your business may need to manage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/inquiry" className="w-full sm:w-auto px-8 py-4 bg-[#eab308] text-[#0a1526] font-semibold rounded hover:bg-[#d97706] transition-colors flex items-center justify-center gap-2 text-lg">
                Get Compliance Audit
              </Link>
              <a href="https://wa.me/916387972500" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-lg">
                Talk to Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: List of Acts (2/3 width on large) */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#0a1526] mb-8">Detailed Compliance Guide</h2>
            
            {actsData.map((act) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                key={act.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Collapsed Card View */}
                <div 
                  className={`p-6 sm:p-8 cursor-pointer transition-colors ${expandedId === act.id ? 'bg-slate-50 border-b border-slate-200' : 'hover:bg-slate-50'}`}
                  onClick={() => toggleAccordion(act.id)}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0a1526] flex items-center justify-center shrink-0 shadow-lg">
                      {act.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-serif font-bold text-[#0a1526] leading-tight group-hover:text-amber-600 transition-colors">
                          {act.title}
                        </h3>
                        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${expandedId === act.id ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-slate-600 mt-2 font-medium">{act.shortExplanation}</p>
                      
                      {/* Quick Meta if not expanded */}
                      <AnimatePresence>
                        {expandedId !== act.id && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-slate-100 grid sm:grid-cols-2 gap-4"
                          >
                            <div>
                               <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Applies To</span>
                               <p className="text-sm text-slate-700">{act.appliesTo}</p>
                            </div>
                            <div>
                               <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">Common Business Risk</span>
                               <p className="text-sm text-red-700 line-clamp-2">{act.commonRisk}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedId === act.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 pt-0 bg-slate-50">
                        <div className="mt-6 mb-8">
                           <h4 className="flex items-center gap-2 text-[#0a1526] font-bold mb-3"><FileText className="w-5 h-5 text-[#eab308]" /> What it covers</h4>
                           <p className="text-slate-700 leading-relaxed">{act.details.covers}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="flex items-center gap-2 text-[#0a1526] font-bold mb-3"><Users className="w-5 h-5 text-blue-500" /> Who Needs It?</h4>
                            <p className="text-slate-700 text-sm">{act.details.whoNeeds}</p>
                          </div>
                          <div>
                            <h4 className="flex items-center gap-2 text-[#0a1526] font-bold mb-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Key Requirements</h4>
                            <ul className="text-sm text-slate-700 space-y-1.5 list-disc pl-4 marker:text-green-500">
                              {act.details.keyRequirements.map((req, i) => <li key={i}>{req}</li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8 pt-6 border-t border-slate-200">
                          <div>
                            <h4 className="flex items-center gap-2 text-[#0a1526] font-bold mb-3"><Briefcase className="w-5 h-5 text-slate-500" /> Documents Needed</h4>
                            <ul className="text-sm text-slate-700 space-y-1.5 list-disc pl-4 marker:text-slate-400">
                              {act.details.documentsNeeded.map((doc, i) => <li key={i}>{doc}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h4 className="flex items-center gap-2 text-red-800 font-bold mb-3"><AlertTriangle className="w-5 h-5 text-red-500" /> Common Mistakes</h4>
                            <ul className="text-sm text-red-700 space-y-1.5 list-disc pl-4 marker:text-red-400">
                              {act.details.commonMistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm">
                           <h4 className="text-amber-800 font-bold mb-2">How Triyodish Consultancy Helps</h4>
                           <p className="text-slate-700 mb-6">{act.details.howWeHelp}</p>
                           <Link 
                             href={`/inquiry?service=${act.id}`}
                             className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a1526] text-white font-semibold rounded-lg hover:bg-[#eab308] hover:text-[#0a1526] transition-colors text-sm"
                           >
                             Get Help with {act.title.split('/')[0].trim()} <ArrowRight className="w-4 h-4" />
                           </Link>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1 space-y-8">
             <div className="sticky top-24">
               
               {/* Process Section */}
               <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] -z-10"></div>
                  <h3 className="text-xl font-bold text-[#0a1526] mb-6">Our Support Process</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-slate-800">Business Assessment</h4>
                        <p className="text-sm text-slate-500">We analyze your operations to identify applicable laws.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-slate-800">Document Review</h4>
                        <p className="text-sm text-slate-500">Thorough verification of KYC and business records.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-slate-800">Registration & Compliance</h4>
                        <p className="text-sm text-slate-500">Procuring licences and establishing periodic filing systems.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center shrink-0">4</div>
                      <div>
                        <h4 className="font-bold text-slate-800">Ongoing Guidance</h4>
                        <p className="text-sm text-slate-500">Continuous updates on regulatory changes and advisory.</p>
                      </div>
                    </div>
                  </div>
               </div>

               {/* Risk & Penalty Notice */}
               <div className="bg-[#0a1526] rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 text-white/5">
                    <Scale className="w-40 h-40" />
                  </div>
                  <h3 className="text-xl font-bold text-[#eab308] mb-4 flex items-center gap-2 relative z-10">
                    <AlertTriangle className="w-5 h-5" /> Why Compliance Matters
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                    Statutory authorities implement strict penal provisions for non-compliance. Ignoring these mandates may lead to:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2 mb-6 relative z-10 list-disc pl-4 marker:text-red-400">
                    <li>Heavy financial penalties & interest</li>
                    <li>Official notices and inspections</li>
                    <li>Suspension of licences or registrations</li>
                    <li>Operational and reputational disruption</li>
                  </ul>
                  <p className="text-xs text-gray-400 font-serif italic relative z-10">
                    &quot;Prevention is better than litigation. Let experts manage your compliance.&quot;
                  </p>
               </div>

             </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-50/50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <HelpCircle className="w-16 h-16 text-[#eab308] mx-auto mb-6" />
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1526] mb-4">Not sure which Act applies to your business?</h2>
           <p className="text-lg text-slate-600 mb-10">
             Compliance requirements depend on your industry, employee strength, and location. Contact our experts for a clear, no-obligation assessment.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/inquiry" className="w-full sm:w-auto px-8 py-4 bg-[#0a1526] text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                Book Free Compliance Audit
              </Link>
              <a href="https://wa.me/916387972500" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-[#0a1526] border border-slate-200 font-bold rounded-lg hover:border-[#eab308] transition-colors shadow-sm">
                WhatsApp Expert
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
