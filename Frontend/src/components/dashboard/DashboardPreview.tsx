import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar, CheckCircle, Clock, FileText, User } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Platform Overview
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-display">
            Powerful, User-Friendly Dashboard
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            Track applications, manage documents, and monitor disbursements all from one intuitive interface.
          </p>
        </div>
        
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <div className="border-b px-6 py-4 flex items-center justify-between">
            <h3 className="font-medium text-lg">Student Dashboard</h3>
            <div className="flex items-center gap-3">
              <button className="rounded-full p-2 hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-500" />
              </button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Jessica Chen</span>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="applications" className="p-6">
            <TabsList className="mb-6">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="disbursements">Disbursements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-base font-medium">Applications Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">5</div>
                        <div className="text-xs text-gray-500">Submitted</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-500">3</div>
                        <div className="text-xs text-gray-500">In Review</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-500">2</div>
                        <div className="text-xs text-gray-500">Awarded</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-base font-medium">Upcoming Deadlines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm">STEM Excellence</span>
                        </div>
                        <span className="text-xs text-red-500">2 days left</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm">Future Leaders</span>
                        </div>
                        <span className="text-xs text-amber-500">5 days left</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-base font-medium">Application Completion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Tech Innovation Scholarship</span>
                          <span className="font-medium">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Global Citizen Award</span>
                          <span className="font-medium">40%</span>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base font-medium">Recent Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Future Tech Leaders Scholarship", date: "Apr 12, 2025", status: "In Review", icon: Clock, statusColor: "text-amber-500" },
                      { name: "Women in STEM Grant", date: "Apr 5, 2025", status: "Submitted", icon: FileText, statusColor: "text-blue-500" },
                      { name: "Community Service Scholarship", date: "Mar 28, 2025", status: "Awarded", icon: CheckCircle, statusColor: "text-green-500" },
                    ].map((app, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <app.icon className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">{app.name}</p>
                            <p className="text-xs text-gray-500">Applied on {app.date}</p>
                          </div>
                        </div>
                        <div className={`text-sm font-medium ${app.statusColor}`}>
                          {app.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="scholarships">
              <div className="h-[300px] flex items-center justify-center border rounded-lg">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2">Scholarships Content</h3>
                  <p className="text-gray-500">Custom scholarship matching and recommendation system powered by Groq</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="documents">
              <div className="h-[300px] flex items-center justify-center border rounded-lg">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2">Document Management</h3>
                  <p className="text-gray-500">Secure document storage and verification system powered by Base</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="disbursements">
              <div className="h-[300px] flex items-center justify-center border rounded-lg">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2">Fund Disbursement</h3>
                  <p className="text-gray-500">Transparent and secure fund tracking system powered by Stellar</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This is a preview of the student dashboard interface. The actual dashboard will include real-time data and functionality.</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;