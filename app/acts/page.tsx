import { Metadata } from 'next';
import ActsClientPage from './ActsClientPage';

export const metadata: Metadata = {
  title: "Acts & Compliance Areas Support | Triyodish Consultancy",
  description: "Understand the major statutory, labour, factory, GST, and HR compliance requirements your business may need to manage. Get professional compliance support.",
  keywords: "labour law consultant, EPF Act compliance, ESIC Act compliance, Factories Act licence, Contract Labour Licence, GST compliance, HR compliance services, statutory compliance consultant",
};

export default function ActsPage() {
  return <ActsClientPage />;
}
