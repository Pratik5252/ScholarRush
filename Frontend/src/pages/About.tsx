
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              About ScholarHub
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Our mission is to make education more accessible through innovative scholarship management.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ScholarHub was founded with a simple yet powerful vision: to transform how educational funding is discovered, distributed, and managed. We recognized that the traditional scholarship process was fragmented, inefficient, and often inaccessible to those who needed it most.
                </p>
                <p>
                  By leveraging cutting-edge technology - Base for applicant onboarding, Groq for intelligent evaluation, and Stellar for transparent fund disbursement - we've created a platform that benefits all stakeholders in the educational ecosystem.
                </p>
                <p>
                  Since our launch, we've helped thousands of students access life-changing funding opportunities and have partnered with hundreds of scholarship providers to streamline their operations and maximize their impact.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-secondary-teal-100 to-secondary-teal-200 rounded-lg mt-8"></div>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mt-4"></div>
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display mb-4">
              Our Values
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600">
              These core principles guide everything we do at ScholarHub.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe educational opportunities should be accessible to all, regardless of background or circumstance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We're committed to clear, open processes in all aspects of our platform, from evaluation to disbursement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology to continuously improve and simplify the scholarship process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Equity</h3>
              <p className="text-gray-600">
                We design our systems to provide fair and equal opportunities for all students seeking educational funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display mb-4">
              Our Technology Partners
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600">
              We collaborate with industry leaders to deliver a seamless scholarship experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border text-center">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Base</h3>
              <p className="text-gray-600 mb-4">
                Provides secure and streamlined applicant onboarding, identity verification, and document management.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">Learn More</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl border text-center">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-purple-50 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Groq</h3>
              <p className="text-gray-600 mb-4">
                Powers our intelligent application evaluation and matching system with advanced AI technology.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">Learn More</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl border text-center">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Stellar</h3>
              <p className="text-gray-600 mb-4">
                Ensures transparent and secure scholarship fund disbursement through blockchain technology.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display">
              Join the ScholarHub Community
            </h2>
            <p className="max-w-[700px] text-gray-200 md:text-lg">
              Be part of our mission to transform educational funding and create more opportunities for students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                  Create Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;