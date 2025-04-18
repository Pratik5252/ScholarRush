import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-sky-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              Discover Scholarships, <span className="text-primary">Fund Your Future</span>
            </h1>
            <p className="max-w-[600px] text-gray-700 md:text-lg">
              ScholarRush connects students with educational funding opportunities through an intelligent, real-time platform powered by advanced technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/scholarships">
                <Button size="lg" className="bg-primary hover:bg-primary-600">
                  Find Scholarships
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline">
                  Create Account
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Quick Application</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Automated Matching</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Real-time Updates</span>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -z-10 h-full w-full rounded-full bg-gradient-to-b from-blue-100 to-sky-100 blur-3xl"></div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">Evaluation Criteria</h3>
                  <span className="text-xs font-medium text-primary">Learn More</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center p-3 rounded-lg border bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Academic Performance</p>
                      <p className="text-xs text-gray-500">GPA, Achievements, Research</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg border bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Financial Assessment</p>
                      <p className="text-xs text-gray-500">Income, Need Analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg border bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Merit & Achievements</p>
                      <p className="text-xs text-gray-500">Activities & Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Powered by</span>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 px-3 py-1 rounded font-medium">Base</div>
                  <div className="bg-gray-100 px-3 py-1 rounded font-medium">Groq</div>
                  <div className="bg-gray-100 px-3 py-1 rounded font-medium">Stellar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;