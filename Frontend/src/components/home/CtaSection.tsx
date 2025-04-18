import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-16 md:py-24 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display max-w-[800px]">
            Ready to Start Your Scholarship Journey?
          </h2>
          <p className="max-w-[600px] text-gray-200 md:text-lg">
            Join thousands of students who have found and secured funding for their education through ScholarHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Create Free Account
              </Button>
            </Link>
            <Link to="/scholarships">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Browse Scholarships
              </Button>
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold">3 Min</p>
              <p className="text-sm text-gray-200">Average Sign-up Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-gray-200">Free for Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm text-gray-200">Application Access</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-gray-200">New Scholarships Weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
