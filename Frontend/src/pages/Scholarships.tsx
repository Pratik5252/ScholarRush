import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, ChevronDown } from "lucide-react";

// Mock data for scholarships
const mockScholarships = [
  {
    id: "1",
    title: "Future Tech Leaders Scholarship",
    organization: "TechForward Foundation",
    amount: "$5,000 - $10,000",
    category: "STEM",
    deadline: "May 15, 2025",
    isNew: true,
  },
  {
    id: "2",
    title: "Global Citizenship Award",
    organization: "International Education Society",
    amount: "$7,500",
    category: "Social Sciences",
    deadline: "June 1, 2025",
  },
  {
    id: "3",
    title: "Healthcare Professionals Grant",
    organization: "Medical Futures Association",
    amount: "$12,000",
    category: "Healthcare",
    deadline: "Apr 30, 2025",
    isNew: true,
  },
  {
    id: "4",
    title: "Renewable Energy Research Scholarship",
    organization: "Green Planet Initiative",
    amount: "$15,000",
    category: "Engineering",
    deadline: "May 22, 2025",
  },
  {
    id: "5",
    title: "First Generation College Student Award",
    organization: "Educational Access Foundation",
    amount: "$8,000",
    category: "General",
    deadline: "June 15, 2025",
  },
  {
    id: "6",
    title: "Creative Arts Excellence Scholarship",
    organization: "Arts & Culture Trust",
    amount: "$5,000",
    category: "Arts",
    deadline: "May 10, 2025",
  },
  {
    id: "7",
    title: "Women in Technology Scholarship",
    organization: "WomenTech Network",
    amount: "$10,000",
    category: "Technology",
    deadline: "Apr 25, 2025",
    isNew: true,
  },
  {
    id: "8",
    title: "Community Leadership Scholarship",
    organization: "Community Development Fund",
    amount: "$6,500",
    category: "Leadership",
    deadline: "May 30, 2025",
  },
  {
    id: "9",
    title: "Environmental Studies Grant",
    organization: "Eco Research Institute",
    amount: "$9,000",
    category: "Environmental Science",
    deadline: "June 5, 2025",
  },
];

const Scholarships = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              Find Your Perfect Scholarship
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Browse thousands of scholarships matched to your profile and goals.
            </p>
          </div>

          <div className="flex w-full max-w-2xl mx-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search scholarships..."
                className="w-full pl-9 py-6 rounded-lg border-gray-200"
              />
            </div>
            <Button
              variant="outline"
              className="flex gap-2 items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 mb-8 bg-white shadow-sm border rounded-lg">
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="stem">STEM</SelectItem>
                  <SelectItem value="arts">Arts & Humanities</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="social">Social Sciences</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Amount</label>
              <div className="px-2">
                <Slider defaultValue={[5000]} max={50000} step={1000} />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>$0</span>
                  <span>$50,000+</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Deadline</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any Deadline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Deadline</SelectItem>
                  <SelectItem value="week">Next 7 Days</SelectItem>
                  <SelectItem value="month">Next 30 Days</SelectItem>
                  <SelectItem value="quarter">Next 3 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Sort By</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Most Relevant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevant">Most Relevant</SelectItem>
                  <SelectItem value="deadline">Deadline (Soonest)</SelectItem>
                  <SelectItem value="amount">Amount (Highest)</SelectItem>
                  <SelectItem value="recent">Recently Added</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Available Scholarships</h2>
          <span className="text-sm text-gray-500">Showing {mockScholarships.length} results</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} {...scholarship} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="mr-2">Previous</Button>
          <Button variant="outline" className="mr-2">1</Button>
          <Button className="mr-2">2</Button>
          <Button variant="outline" className="mr-2">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Scholarships;
