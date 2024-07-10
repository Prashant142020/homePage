import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl">BMN-534: Supply Chain Management</h1>
      <Image alt="image" src="/course/scm.png" height={300} width={300}></Image>
      <div className="mt-4 text-lg">
        <p className=" ">Welcome to the course BMN-534!</p>
        <p className="mt-4">Instructor</p>
      </div>
      <div className="mt-2 space-y-2 text-lg">
        <Link className="text-blue-500 hover:text-blue-700" href="/">
          Manu K. Gupta
        </Link>
        <p>Office: 117, Management Studies</p>
        <p>Phone: 4947</p>
        <p> E-mail: manu.gupta@ms.iitr.ac.in</p>
        <p>Schedule</p>
        <p>
          Please register for the course in{" "}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://www.coursera.org/learn/foundations-supply-chain-management-iitr-oc/"
          >
            coursera
          </a>{" "}
          to access the course content.
        </p>
      </div>
    </div>
  );
};
export default page;
