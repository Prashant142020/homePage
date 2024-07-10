import Link from "next/link";

const page = () => {
  return (
    <div>
      <p className="text-2xl">Courses Taught at IIT Roorkee:</p>

      <ul className="ml-5 mt-3 list-disc space-y-2">
        <li>
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/dses"
          >
            Decision support and expert system
          </Link>{" "}
          in Spring 2021.
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/qms"
          >
            Queuing systems and simulation
          </Link>{" "}
          in Spring 2021-24 (Term IV).
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/or"
          >
            Operations Research
          </Link>{" "}
          in Autumn 2021-23 (Term I).
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/eaim"
          >
            Essential AI for Managers
          </Link>{" "}
          in Autumn 2021-23 (Term V).
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/aaim"
          >
            Advanced AI for Managers
          </Link>{" "}
          in Autumn 2021-23 (Term VI).
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/aotm"
          >
            Advanced Optimization for Managers
          </Link>{" "}
          in Spring 2022-24 (Term VII).
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/rl"
          >
            Reinforcement Learning
          </Link>{" "}
          in Spring 2022-24 (Elective for M.Tech program).
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/scm"
          >
            Supply Chain Management
          </Link>{" "}
          in Autumn 2023 (With Prof. Tarun) for executive MBA program.
        </li>
        <li>
          {" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/teaching/aotm"
          >
            Advanced Optimization for Managers
          </Link>{" "}
          in Spring 2024 (With Prof. Tarun) for executive MBA.
        </li>
      </ul>
      <p className="mt-4">
        Click{" "}
        <Link
          className="text-blue-500 hover:text-blue-700"
          href="teaching/feedback"
        >
          here{" "}
        </Link>
        for teaching feedback. I have developed the following courses at IIT
        Roorkee:
      </p>
      <ul className="ml-5 mt-3 list-disc space-y-2">
        <li>Queuing systems and simulation.</li>
        <li>Essential AI for Managers.</li>
        <li>Advanced AI for Managers.</li>
        <li>Reinforcement Learning.</li>
      </ul>
    </div>
  );
};
export default page;
