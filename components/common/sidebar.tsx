import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  BookOpen,
  Github,
  Linkedin,
  Mail,
  MapIcon,
  MapPin,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hidden sm:block">
      <aside className="">
        <div className="flex flex-col items-center">
          <Avatar className="h-[163px] w-[163px]">
            <AvatarImage src="/image/me.png" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-semibold">Manu K. Gupta</h2>
          <p className="text-sm text-gray-500">PhD, Operations Research</p>
          <div className="mt-4 flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Roorkee, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-orange-500" />
              <a href="mailto:manu.gupta@ms.iitr.ac.in" className="">
                Email
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="h-4 w-4 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/manu-gupta-649a2b19"
                className=""
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="h-4 w-4 text-gray-500" />
              <a href="https://github.com/manugupta-or" className="">
                Github
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4 text-yellow-300" />
              <a
                href="https://scholar.google.co.in/citations?user=qg_A4VoAAAAJ&hl=en"
                className=""
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </aside>
      {/* <main className="w-full p-4 md:w-3/4">
        <h1 className="text-2xl font-bold">About me</h1>
        <p className="mt-2">
          I am an assistant professor in{" "}
          <a href="#" className="text-blue-600">
            Management Studies
          </a>{" "}
          at{" "}
          <a href="#" className="text-blue-600">
            IIT Roorkee
          </a>
          . I am also a joint faculty in{" "}
          <a href="#" className="text-blue-600">
            MFS of Artificial Intelligence and Data Sciences
          </a>{" "}
          at IIT Roorkee.
        </p>
        <p className="mt-2">
          My research interests are broadly in decision making under
          uncertainty. In the past, I have worked on areas such as machine
          learning, optimization, game theory and queuing systems.
        </p>
        <p className="mt-2">
          On these pages you will be able to find a lot about my technical
          interests. I hope you enjoy them and find them helpful to what
          interests you. I believe that a curious mind along with good knowledge
          of techniques can systematically approach several challenging
          problems.
        </p>
        <p className="mt-2">
          If you are interested in the areas that I work on/would like to
          provide suggestions/have discussions on any topic mentioned in this
          site, please drop me a mail.
        </p>
        <h2 className="mt-6 text-xl font-bold">News</h2>
        <ul className="mt-2 space-y-2">
          <li>
            <span className="font-semibold">21-25 January, 2024.</span> PhD
            student Anirban Mitra attended a workshop on{" "}
            <a href="#" className="text-blue-600">
              Combinatorial Games
            </a>
            .
          </li>
          <li>
            <span className="font-semibold">18 January, 2024.</span> A talk on
            "Strategic interaction between service providers and the user-set in
            <a href="#" className="text-blue-600">
              Conference
            </a>
            based on joint work with N. Hemachandra and A. Mitra.
          </li>
          <li>
            <span className="font-semibold">15-25 January, 2024.</span> PhD
            student Gopal Saha attended a GIAN Course on Advances in{" "}
            <a href="#" className="text-blue-600">
              Mixed Integer Nonlinear Optimization
            </a>
            .
          </li>
          <li>
            <span className="font-semibold">13 January, 2024.</span> Submitted a
            paper titled Multi-Objective Fixed-Cost Transportation Problem: A
            Cooperative Game Theory Approach with Gopal Saha.
          </li>
          <li>
            <span className="font-semibold">02 January, 2024.</span>{" "}
            Notification of acceptance of a proposal on Sustainability and
            Social Welfare of National Logistic Policy. Thank you
            <a href="#" className="text-blue-600">
              ICSSR
            </a>
            .
          </li>
          <li>
            <span className="font-semibold">
              31 December, 2023 and older news.
            </span>{" "}
            <a href="#" className="text-blue-600">
              Click here
            </a>
          </li>
        </ul>
      </main> */}
    </div>
  );
}
