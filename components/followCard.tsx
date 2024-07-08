import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookOpen, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Card = () => {
  return (
    <main>
      <div className="sm:hidden">
        <div className="mb-10 mt-1 block flex items-center justify-between">
          <div>
            <Avatar className="h-10 w-10">
              <AvatarImage src="/image/me.png" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1>Manu K. Gupta</h1>
            <p>PhD, Operations Research</p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>Follow</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span>Roorkee, India</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <a href="mailto:youremail@example.com" className="">
                      Email
                    </a>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center space-x-2">
                    <Linkedin className="h-4 w-4 text-blue-400" />
                    <a href="https://www.linkedin.com/" className="">
                      LinkedIn
                    </a>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <div className="flex items-center space-x-2">
                    <Github className="h-4 w-4 text-gray-500" />
                    <a href="https://github.com/" className="">
                      Github
                    </a>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-yellow-300" />
                    <a href="https://scholar.google.com/" className="">
                      Google Scholar
                    </a>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Card;
