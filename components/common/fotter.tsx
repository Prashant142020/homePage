// components/common/Fotter.tsx

import { Github } from "lucide-react";
import Link from "next/link";

const Fotter = () => {
  return (
    <footer className="footer mt-auto">
      <div className="mt-10 bg-muted py-3">
        <div className="flex flex-row items-center justify-center gap-3">
          FOLLOW: <Github />{" "}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/manugupta-or"
          >
            GITHUB
          </a>
        </div>
        <div className="mt-1 text-center">
          © 2024 Manu K. Gupta. If you find something useful here,
          <Link
            className="text-blue-500 hover:peer-hover:text-blue-700"
            href="/reading"
          >
            {" "}
            buy me a book!
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
