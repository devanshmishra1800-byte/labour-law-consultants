"use client";

import { motion } from 'motion/react';
import { ShieldCheck, FileText, Factory, HardHat, Award, BadgeCent, FileSignature, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const licenses = [
    {
      title: "EPF Certificate",
      description: "Secure your Employee Provident Fund registration certificate easily to ensure statutory compliance and build employee trust.",
      icon: <ShieldCheck className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "ESIC Certificate",
      description: "Obtain your Employees' State Insurance Corporation registration to provide health and medical benefits to your workforce.",
      icon: <FileText className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Labour Licence",
      description: "Get your state-specific labour licence for shops and establishments to operate legally and avoid regulatory penalties.",
      icon: <HardHat className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Factories Act Licence",
      description: "Comprehensive support for factory plan approval and licensing under the Factories Act for manufacturing units.",
      icon: <Factory className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "ISO Certificate",
      description: "Achieve globally recognized ISO certification to demonstrate quality management and gain a competitive business edge.",
      icon: <Award className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "GST Certificate",
      description: "Seamless Goods and Services Tax registration for your business, ensuring you are ready to file returns and claim technical benefits.",
      icon: <BadgeCent className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Contract Labour Licence",
      description: "Procure the necessary licences under the Contract Labour (Regulation and Abolition) Act for contractors and principal employers.",
      icon: <FileSignature className="w-8 h-8 text-[#eab308]" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[#0a1526] text-white pt-20 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive compliance, statutory support, and premier licensing for businesses across India. We manage the paperwork so you can manage your growth.
          </p>
        </motion.div>
      </section>

      {/* Page Navigation */}
      <div className="bg-[#0a1526] border-t border-white/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 py-4 overflow-x-auto no-scrollbar">
            <a href="#core-services" className="text-sm font-medium text-gray-300 hover:text-white whitespace-nowrap transition-colors">Core Compliance Services</a>
            <div className="w-1 h-1 rounded-full bg-white/20"></div>
            <a href="#licenses" className="text-sm font-medium text-gray-300 hover:text-white whitespace-nowrap transition-colors">Licenses & Certificates</a>
          </div>
        </div>
      </div>

      {/* Services List */}
      <section id="core-services" className="py-20 bg-slate-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1526] mb-4">Core Compliance Services</h2>
            <p className="text-slate-600">End-to-end management for all your statutory and regulatory needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <ServiceCard 
              index={0}
              title="EPF / EPFO Compliance"
              description="End-to-end management of Employee Provident Fund obligations."
              features={[
                "Employer Registration & Setup",
                "Monthly Contribution Filings (ECR)",
                "Employee KYC Updation",
                "Transfer & Withdrawal Claim Support",
                "Digital Signature (DSC) Approval",
                "Resolution of PF Disputes"
              ]}
            />

            <ServiceCard 
              index={1}
              title="ESIC Registration & Compliance"
              description="Complete support for Employee State Insurance Corporation requirements."
              features={[
                "New Establishment Registration",
                "Generation of Sub-codes",
                "Monthly Contribution Filings",
                "Employee Registration & Pehchan Card",
                "Accident / Claim Support",
                "Maternity Benefit Processing"
              ]}
            />

            <ServiceCard 
              index={2}
              title="GST Services"
              description="Expert handling of Goods and Services Tax compliance."
              features={[
                "Fresh GST Registration",
                "Monthly / Quarterly Return Filings",
                "GST Amendments",
                "Cancellation & Revocation",
                "LUT Processing",
                "GST Notice Replies & Advisory"
              ]}
            />

            <ServiceCard 
              index={3}
              title="Factories Act Compliance"
              description="Statutory support for manufacturing units and factories."
              features={[
                "Factory License Registration & Renewal",
                "Building Plan Approval",
                "Safety & Health Compliance",
                "Maintenance of Statutory Registers",
                "Filing of Half-Yearly / Annual Returns",
                "Support during Factory Inspections"
              ]}
            />

            <ServiceCard 
              index={4}
              title="Labour Law Advisory"
              description="Protect your business with expert labour law guidance."
              features={[
                "Shops & Establishments Registration",
                "Contract Labour (R&A) License",
                "Minimum Wages Act Compliance",
                "Bonus & Gratuity Act Compliance",
                "Standing Orders Formulation",
                "Dispute Resolution & Conciliation"
              ]}
            />

            <ServiceCard 
              index={5}
              title="HR & Payroll Support"
              description="Streamline your workforce management with compliant HR practices."
              features={[
                "Salary Restructuring & Tax Planning",
                "Payroll Processing & Payslips",
                "Employment Contracts & NDAs",
                "HR Policy Formulation",
                "Full & Final Settlement",
                "Statutory Deductions Management"
              ]}
            />

          </div>
        </div>
      </section>

      {/* Licenses & Certificates Section */}
      <section id="licenses" className="py-20 bg-white border-t border-slate-100 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1526] mb-4">Licenses & Certificates</h2>
            <p className="text-slate-600">Procure genuine registrations and licenses swiftly to empower your business operations seamlessly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenses.map((license, i) => (
              <LicenseCard 
                key={i}
                index={i}
                title={license.title}
                description={license.description}
                icon={license.icon}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function ServiceCard({ title, description, features, index }: { title: string, description: string, features: string[], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
    >
      <h2 className="text-2xl font-serif font-bold text-[#0a1526] mb-3">{title}</h2>
      <p className="text-slate-600 mb-6">{description}</p>
      
      <div className="space-y-3 flex-grow">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 0.05}s`}}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#eab308] mt-2 shrink-0"></span>
            <span className="text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-slate-100">
        <Link href="/inquiry" className="text-[#0a1526] font-semibold text-sm hover:text-[#eab308] transition-colors flex items-center gap-2 group/link">
          Enquire Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

function LicenseCard({ title, description, icon, index }: { title: string, description: string, icon: React.ReactNode, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-50 border border-slate-200 p-8 rounded-xl hover:bg-[#0a1526] hover:border-[#0a1526] transition-all duration-300 group flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-[#0a1526] mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 mb-8 flex-grow group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
        {description}
      </p>
      <Link 
        href="/inquiry" 
        className="w-full py-3 px-4 border text-center text-sm font-semibold rounded transition-all duration-300 
                   border-slate-200 bg-white text-[#0a1526] hover:bg-slate-50 
                   group-hover:border-[#eab308] group-hover:bg-[#eab308] group-hover:text-[#0a1526]"
      >
        Request Service
      </Link>
    </motion.div>
  );
}
