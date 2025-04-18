import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold font-display">Create Your Account</h1>
            <p className="text-gray-600">Join thousands of students and scholarship providers on ScholarHub</p>
          </div>

          <div className="w-full max-w-md">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="provider">Scholarship Provider</TabsTrigger>
              </TabsList>
              
              <TabsContent value="student" className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm border p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                      <p className="text-xs text-gray-500">
                        Must be at least 8 characters and include a number and a special character.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="education-level">Education Level</Label>
                      <Select>
                        <SelectTrigger id="education-level">
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm text-gray-500">
                        I agree to the{" "}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Create Student Account
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or sign up with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z" fill="currentColor"/>
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.479C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
                      </svg>
                      GitHub
                    </Button>
                  </div>
                </div>
                
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-primary hover:underline">
                    Sign in
                  </Link>
                </div>
                
                <div className="text-center text-xs text-gray-500 mt-4">
                  <p>
                    By creating an account, you're eligible for{" "}
                    <span className="font-medium">Base-powered identity verification</span>{" "}
                    and{" "}
                    <span className="font-medium">Stellar disbursements</span>.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="provider" className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm border p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="org-name">Organization Name</Label>
                      <Input id="org-name" placeholder="Scholarship Foundation" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contact Name</Label>
                        <Input id="contact-name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" placeholder="Program Director" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="provider-email">Email</Label>
                      <Input
                        id="provider-email"
                        placeholder="contact@organization.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="provider-password">Password</Label>
                      <Input id="provider-password" type="password" />
                      <p className="text-xs text-gray-500">
                        Must be at least 8 characters and include a number and a special character.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="org-type">Organization Type</Label>
                      <Select>
                        <SelectTrigger id="org-type">
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nonprofit">Non-profit Organization</SelectItem>
                          <SelectItem value="foundation">Foundation</SelectItem>
                          <SelectItem value="education">Educational Institution</SelectItem>
                          <SelectItem value="corporate">Corporate Entity</SelectItem>
                          <SelectItem value="government">Government Agency</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="provider-terms" />
                      <label htmlFor="provider-terms" className="text-sm text-gray-500">
                        I agree to the{" "}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Create Provider Account
                  </Button>
                </div>
                
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-primary hover:underline">
                    Sign in
                  </Link>
                </div>
                
                <div className="text-center text-xs text-gray-500 mt-4">
                  <p>
                    By creating a provider account, you can use{" "}
                    <span className="font-medium">Groq-powered evaluation</span>{" "}
                    and{" "}
                    <span className="font-medium">Stellar disbursements</span>{" "}
                    for your scholarship programs.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
