import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Technology Partners
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display">
            Powered by Leading Technology
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            ScholarHub leverages cutting-edge technology partners to create a seamless scholarship experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-xl border bg-white p-6 text-center shadow-sm">
            <div className="rounded-full bg-blue-50 p-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Base</h3>
            <p className="text-gray-600">
              Streamlined applicant onboarding and profile management. Base technology enables secure identity verification and document management.
            </p>
            <div className="mt-2 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Applicant Onboarding
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4 rounded-xl border bg-white p-6 text-center shadow-sm">
            <div className="rounded-full bg-purple-50 p-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Groq</h3>
            <p className="text-gray-600">
              Intelligent application evaluation powered by Groq's advanced AI. Our system ensures fair and comprehensive assessment of all applications.
            </p>
            <div className="mt-2 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                Application Evaluation
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4 rounded-xl border bg-white p-6 text-center shadow-sm">
            <div className="rounded-full bg-green-50 p-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Stellar</h3>
            <p className="text-gray-600">
              Secure and transparent fund disbursement through Stellar's blockchain technology. Track where every dollar goes with complete transparency.
            </p>
            <div className="mt-2 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                Fund Disbursement
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link to="/how-it-works">
            <Button className="bg-primary hover:bg-primary-600">
              Learn How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
