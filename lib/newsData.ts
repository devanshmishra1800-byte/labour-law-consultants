export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  importance: 'Urgent' | 'High' | 'Medium';
  summary: string;
  whyItMatters: string;
  actionRequired: string;
  fullDetail: string;
  whoItAffects: string;
  whatChanged: string;
  nextSteps: string;
}

export const newsData: NewsItem[] = [
  {
    slug: 'epf-higher-pension-deadline',
    title: 'Supreme Court Extends Deadline for Higher EPS Pension Opt-in',
    date: 'March 15, 2024',
    category: 'EPFO Compliance',
    importance: 'Urgent',
    summary: 'The deadline for eligible employees to opt for higher pension under the Employees Pension Scheme (EPS) has been extended following the latest Supreme Court directive.',
    whyItMatters: 'Failure to file joint declarations on time may result in employees losing out on higher pension benefits, leading to grievances and potential HR disputes.',
    actionRequired: 'Employers must proactively inform eligible staff and facilitate the filing of joint option forms on the EPFO portal before the deadline.',
    fullDetail: 'Following the landmark Supreme Court judgement, the Employees\' Provident Fund Organisation (EPFO) has issued new guidelines and extended the timeline for eligible members to opt for a pension based on higher actual salary. This applies to employees who were members of EPS prior to September 1, 2014, and continued to be members on or after that date. The window provides a critical opportunity for enhanced post-retirement benefits.',
    whoItAffects: 'All employers registered with EPFO and employees who were EPS members before Sept 1, 2014.',
    whatChanged: 'The strict timeline previously enforced has been extended, and the online facility for submitting the joint option form has been updated to accommodate late filings. Clarifications on calculation methodology for arrears have also been released.',
    nextSteps: '1. Identify eligible employees.\n2. Circulate internal communication regarding the extended deadline.\n3. Validate employee data (UAN, Aadhaar).\n4. Approve joint declarations submitted by employees on the employer portal promptly.'
  },
  {
    slug: 'gst-e-invoicing-threshold-lowered',
    title: 'Mandatory GST e-Invoicing Threshold Lowered to ₹5 Cr',
    date: 'February 28, 2024',
    category: 'GST Updates',
    importance: 'High',
    summary: 'The CBIC has announced a reduction in the aggregate turnover threshold for mandatory generation of e-Invoices from ₹10 Crore to ₹5 Crore.',
    whyItMatters: 'Non-compliance will result in invalid tax invoices, disrupting the Input Tax Credit (ITC) chain for your B2B customers and attracting severe penalties under GST laws.',
    actionRequired: 'Assess aggregate turnover across all PAN-India registrations. If it exceeds ₹5 Cr in any preceding financial year since 2017-18, integrate your billing systems with the Invoice Registration Portal (IRP).',
    fullDetail: 'In a move to further digitalize the economy and plug tax evasion, the Central Board of Indirect Taxes and Customs (CBIC) has expanded the mandate for e-invoicing. Any registered person whose aggregate turnover in any preceding financial year from 2017-18 onwards exceeds ₹5 Crores must now generate an Invoice Reference Number (IRN) and QR code for all B2B supplies and exports. A standard invoice without an IRN will not be considered a valid document.',
    whoItAffects: 'All GST registered businesses with an annual aggregate turnover between ₹5 Cr and ₹10 Cr.',
    whatChanged: 'The turnover limit for mandatory B2B e-invoicing has been slashed from ₹10 Crores to ₹5 Crores. Exemptions still apply for SEZ units, insurers, banking companies, and goods transport agencies.',
    nextSteps: '1. Verify turnover calculation.\n2. Upgrade ERP or billing software for IRP integration.\n3. Train the finance and dispatch teams on handling IRN failures or cancellations.\n4. Avoid dispatching goods without a valid e-invoice.'
  },
  {
    slug: 'esic-wage-limit-revision-proposal',
    title: 'Proposed Revision of ESIC Wage Limit to ₹25,000',
    date: 'Jan 10, 2024',
    category: 'ESIC Compliance',
    importance: 'Medium',
    summary: 'The Ministry of Labour and Employment is reviewing a proposal to increase the ESIC wage threshold from the current ₹21,000 to ₹25,000 per month.',
    whyItMatters: 'An increase in the threshold will bring a significant number of additional employees under the ESI scheme, increasing the monthly employer contribution expenditure.',
    actionRequired: 'HR and Payroll departments should forecast the financial impact of this proposed change on the annual CTC budget and prepare for data migration.',
    fullDetail: 'To combat inflation and extend social security benefits to a larger segment of the workforce, the ESIC Corporation is actively discussing raising the statutory wage limit. The threshold was last revised in 2017 (from ₹15,000 to ₹21,000). The current proposal looks at a ₹25,000 limit, which would mean that any employee earning gross wages up to this amount would be mandatorily covered under the scheme for medical and cash benefits.',
    whoItAffects: 'All factories and establishments covered under the ESI Act, 1948, and their employees earning between ₹21,001 and ₹25,000.',
    whatChanged: 'This is a pending notification. Once approved, the statutory definition of "employee" under the ESI Act will expand, requiring new registrations and increased compliance overhead.',
    nextSteps: '1. Conduct a payroll audit to identify employees in the ₹21k-₹25k bracket.\n2. Estimate the additional 3.25% employer contribution cost.\n3. Keep required KYC documents ready for new ESI registrations once the notification is gazetted.'
  },
  {
    slug: 'new-labour-codes-implementation-update',
    title: 'State Readiness for the 4 New Labour Codes Implementation',
    date: 'Dec 05, 2023',
    category: 'Labour Law',
    importance: 'High',
    summary: 'Several states have finalized draft rules for the Occupational Safety, Health and Working Conditions Code, signaling a nearing implementation date.',
    whyItMatters: 'The consolidation of 29 central labour laws into 4 codes will fundamentally alter wage definitions, working hours, leave policies, and contract labour regulations.',
    actionRequired: 'Initiate a complete audit of existing HR policies, employment contracts, and wage structures to align with the new statutory definition of "Wages".',
    fullDetail: 'While the Central Government laid down the four Labour Codes (Wages, Social Security, Industrial Relations, and OSH&WC) to modernize Indian employment laws, implementation relies on State governments notifying the rules. With major industrial states actively finalizing these drafts, the transition is imminent. The most significant shift will be the uniform definition of "Wages", which mandates that basic salary must theoretically constitute at least 50% of total remuneration, impacting PF/Gratuity calculations.',
    whoItAffects: 'Every employer, principal employer, contractor, and HR professional across all industries.',
    whatChanged: 'Move from fragmented multiple laws to unified codes. Key anticipated changes include flexibility in working hours (e.g., 4-day work week potential), mandatory widening of the PF wage base, and stricter licensing requirements for contractors spanning multiple states.',
    nextSteps: '1. Review salary structures and allowances.\n2. Redraft employment agreements and HR manuals.\n3. Re-evaluate contractor compliance frameworks.\n4. Consult a labour law expert for a transition roadmap.'
  }
];
