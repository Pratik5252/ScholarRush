import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "ScholarHub helped me find and apply for scholarships I never would have discovered otherwise. The process was simple and I received funding for my entire undergraduate degree.",
    name: "Alex Johnson",
    role: "Engineering Student",
    avatar: "AJ",
  },
  {
    quote: "As a scholarship provider, the automated evaluation through Groq has saved us countless hours and improved the fairness of our selection process.",
    name: "Maria Rodriguez",
    role: "Foundation Director",
    avatar: "MR",
  },
  {
    quote: "The transparency of fund disbursement through Stellar has been a game-changer for our university. We can track every dollar and ensure it reaches the right students.",
    name: "Dr. Thomas Chen",
    role: "University Administrator",
    avatar: "TC",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display">
            What Our Users Say
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            Hear from students, scholarship providers, and educational institutions using our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col h-full justify-between gap-4">
                  <div>
                    <svg
                      className="h-8 w-8 text-primary/40 mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M11.28 2.86c-3.9.05-8.49 1.42-8.49 7.98v4.17h4.2v-4.09c0-4.86 4.2-4.73 4.2-4.73v-3.33h.09zm10.46 0c-3.9.05-8.49 1.42-8.49 7.98v4.17h4.2v-4.09c0-4.86 4.2-4.73 4.2-4.73v-3.33h.09z" />
                    </svg>
                    <p className="mb-6 text-gray-700">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
