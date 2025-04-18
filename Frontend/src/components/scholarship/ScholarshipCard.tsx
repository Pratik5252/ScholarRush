import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Landmark, Award } from "lucide-react";

interface ScholarshipCardProps {
  id: string;
  title: string;
  organization: string;
  amount: string;
  category: string;
  deadline: string;
  isNew?: boolean;
}

const ScholarshipCard = ({
  id,
  title,
  organization,
  amount,
  category,
  deadline,
  isNew = false,
}: ScholarshipCardProps) => {
  return (
    <Link to={`/scholarships/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardContent className="p-6">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-lg font-medium line-clamp-2">{title}</h3>
            {isNew && (
              <Badge className="bg-secondary-teal-500">New</Badge>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2">{organization}</p>
          <div className="flex items-center mt-4 text-sm text-gray-700">
            <Award className="h-4 w-4 mr-1 text-primary" />
            <span className="font-semibold text-primary-800">{amount}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex items-center text-sm text-gray-700">
              <Landmark className="h-4 w-4 mr-1 text-gray-500" />
              <span>{category}</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Calendar className="h-4 w-4 mr-1 text-gray-500" />
              <span>{deadline}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 py-3 bg-gray-50 border-t">
          <span className="text-xs font-medium text-primary">View Details</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ScholarshipCard;