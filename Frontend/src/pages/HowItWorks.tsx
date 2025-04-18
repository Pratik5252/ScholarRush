import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              How ScholarHub Works
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Our innovative platform combines cutting-edge technologies to streamline the scholarship process from application to disbursement.
            </p>
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display mb-4">
              The ScholarHub Process
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600">
              A seamless end-to-end scholarship management system powered by Base, Groq, and Stellar.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Step 1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Applicant Onboarding with Base</h3>
                    <p className="text-gray-600 mb-4">
                      ScholarHub leverages Base technology to create a seamless and secure onboarding experience:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Secure identity verification and authentication",
                        "Encrypted document submission and storage",
                        "Streamlined profile creation with data validation",
                        "Simplified eligibility verification against scholarship requirements",
                        "Personalized scholarship matching based on applicant profiles"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative bg-white p-6 rounded-xl shadow-sm border max-w-sm">
                    <div className="aspect-video flex items-center justify-center bg-blue-50 rounded-lg mb-4">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <path d="M7 7h10" />
                        <path d="M7 12h10" />
                        <path d="M7 17h10" />
                      </svg>
                    </div>
                    <h4 className="font-bold mb-2 text-center">Base Integration</h4>
                    <p className="text-sm text-gray-600 text-center">
                      Our Base integration handles all aspects of user onboarding, identity verification, and document management.
                    </p>
                    <div className="absolute top-1/2 -left-4 md:left-auto md:-right-4 h-8 w-8 bg-white rounded-full border flex items-center justify-center text-primary">
                      <ArrowRight className="h-4 w-4 md:rotate-0 -rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="relative bg-white p-6 rounded-xl shadow-sm border max-w-sm">
                    <div className="aspect-video flex items-center justify-center bg-purple-50 rounded-lg mb-4">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold mb-2 text-center">Groq Evaluation</h4>
                    <p className="text-sm text-gray-600 text-center">
                      Groq's advanced AI technology powers our intelligent application evaluation and matching system.
                    </p>
                    <div className="absolute top-1/2 -right-4 h-8 w-8 bg-white rounded-full border flex items-center justify-center text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">Step 2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Application Evaluation with Groq</h3>
                    <p className="text-gray-600 mb-4">
                      Groq's state-of-the-art AI technology powers our scholarship evaluation system:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Intelligent scoring of applications based on multiple criteria",
                        "Automated essay assessment with qualitative feedback",
                        "Bias-free evaluation to ensure fair consideration",
                        "Pattern recognition to identify strong candidates",
                        "Automated verification of eligibility requirements"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">Step 3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Fund Disbursement with Stellar</h3>
                    <p className="text-gray-600 mb-4">
                      Stellar's blockchain technology enables transparent and secure fund disbursement:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Secure and transparent transaction ledger",
                        "Real-time tracking of fund disbursements",
                        "Automated payment scheduling",
                        "Multi-currency support for international scholarships",
                        "Complete audit trail for compliance and verification"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative bg-white p-6 rounded-xl shadow-sm border max-w-sm">
                    <div className="aspect-video flex items-center justify-center bg-green-50 rounded-lg mb-4">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M12 2v20"></path>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold mb-2 text-center">Stellar Integration</h4>
                    <p className="text-sm text-gray-600 text-center">
                      Our Stellar integration ensures that scholarship funds are distributed securely and transparently.
                    </p>
                    <div className="absolute top-1/2 -left-4 md:left-auto md:-right-4 h-8 w-8 bg-white rounded-full border flex items-center justify-center text-primary">
                      <ArrowRight className="h-4 w-4 md:rotate-0 -rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display">
              Benefits for All Stakeholders
            </h2>
            <p className="max-w-[700px] text-gray-600">
              Our platform creates value for students, institutions, and scholarship providers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-4">For Students</h3>
              <ul className="space-y-3">
                {[
                  "One-time application for multiple scholarships",
                  "Personalized scholarship matches",
                  "Secure document storage and management",
                  "Real-time application status updates",
                  "Transparent fund disbursement",
                  "Simplified financial reporting"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-4">For Educational Institutions</h3>
              <ul className="space-y-3">
                {[
                  "Centralized scholarship management",
                  "Reduced administrative burden",
                  "Enhanced compliance tracking",
                  "Improved student financial support",
                  "Detailed analytics and reporting",
                  "Integration with existing systems"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-4">For Scholarship Providers</h3>
              <ul className="space-y-3">
                {[
                  "Wider applicant pool with better matching",
                  "Automated application processing",
                  "AI-powered application evaluation",
                  "Transparent fund disbursement",
                  "Impact measurement and tracking",
                  "Reduced operational costs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-display mb-4">
              Ready to Experience the Future of Scholarships?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students, institutions, and scholarship providers using ScholarHub to streamline the scholarship process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/scholarships">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Scholarships
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;