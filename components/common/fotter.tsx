// components/common/Fotter.tsx

import { Github } from "lucide-react";
import Link from "next/link";

const Fotter = () => {
  return (
    <footer className="footer    mt-auto ">
      <div className="py-5 bg-muted  mt-10">
        <div className="flex flex-row items-center justify-center gap-2">
          FOLLOW: <Github /> GITHUB
        </div>
        <div className="mt-4 text-center">
          © 2024 Manu K. Gupta. If you find something useful here,
          <Link
            className="text-blue-500 hover:peer-hover:text-blue-700"
            href="/reading"
          >
            buy me a book!
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
