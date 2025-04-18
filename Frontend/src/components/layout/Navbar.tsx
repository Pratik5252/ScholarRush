import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5"/>
              </svg>
            </span>
            <span className="text-xl font-display font-semibold">ScholarRush</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/scholarships" className="text-sm font-medium hover:text-primary transition-colors">
              Scholarships
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm">
              Register
            </Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/scholarships" className="text-base font-medium hover:text-primary transition-colors">
                Scholarships
              </Link>
              <Link to="/how-it-works" className="text-base font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/about" className="text-base font-medium hover:text-primary transition-colors">
                About
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;