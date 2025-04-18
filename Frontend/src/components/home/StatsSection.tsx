const StatsSection = () => {
    return (
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display">
              Making Education Accessible
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              We're committed to breaking down financial barriers to education through our innovative scholarship platform.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary">$25M+</div>
              <p className="text-sm md:text-base text-gray-500 mt-2">Scholarship Funds</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary">5,000+</div>
              <p className="text-sm md:text-base text-gray-500 mt-2">Scholarships Listed</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary">10,000+</div>
              <p className="text-sm md:text-base text-gray-500 mt-2">Students Funded</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary">92%</div>
              <p className="text-sm md:text-base text-gray-500 mt-2">Graduation Rate</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  