import { 
    CheckCircle, 
    Star, 
    Zap, 
    Shield, 
    GraduationCap, 
    DollarSign, 
    Clock, 
    Database 
  } from "lucide-react";
  
  const FeaturesSection = () => {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Our Platform
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              Comprehensive Scholarship Evaluation
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              ScholarRush utilizes cutting-edge technology to evaluate applications based on both academic merit and financial need.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Academic Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of academic performance, including GPA, coursework, and achievements.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Financial Need Analysis</h3>
              <p className="text-gray-600">
                Thorough assessment of financial circumstances to ensure fair distribution of resources.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Base Integration</h3>
              <p className="text-gray-600">
                Seamless applicant onboarding through Base technology, ensuring a smooth and user-friendly experience.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Groq Evaluation</h3>
              <p className="text-gray-600">
                Advanced AI-powered evaluation system using Groq technology to fairly assess scholarship applications.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Stellar Disbursement</h3>
              <p className="text-gray-600">
                Secure and transparent fund disbursement through Stellar, ensuring funds reach recipients efficiently.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure System</h3>
              <p className="text-gray-600">
                End-to-end encryption and advanced security protocols to protect sensitive applicant and institutional data.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Real-time Updates</h3>
              <p className="text-gray-600">
                Instantaneous application status updates and notifications to keep applicants informed throughout the process.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary/10 p-3">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Comprehensive Analytics</h3>
              <p className="text-gray-600">
                Detailed reporting and analytics tools for scholarship providers to track and optimize their programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  