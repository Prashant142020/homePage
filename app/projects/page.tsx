import PTable from "@/components/projectsTable";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <main>
      <PTable />
      <Separator className="mt-5" />

      <h1 className="mb-3 mt-5 text-2xl">AAAI lab</h1>
      <p className="text-xl">
        Apart from printer and a few desktops, funds from the above sponsored
        projects are utilized to develop a computational server facility. The
        server has 192 GB RAM and 48 cores with Intel(R) Xeon(R) Gold 6248R CPU
        @ 3.00GHz.
      </p>
      <p className="mt-3 text-xl">
        This server is available to students and faculty for their research and
        other academic activities.
      </p>
      <div>
        <h1 className="mt-7 text-2xl">Administrative Positions</h1>
        <ul className="ml-5 list-disc space-y-2">
          <li className="mt-3">
            Faculty Coordinator, Tinkering and Mentoring Lab, MFS of data
            science and AI, IITR (2023-present).
          </li>
          <li>
            Member, Department Administrative Committee (DAC), DoMS IITR
            (2022-present).
          </li>
          <li>
            Faculty-in-charge, Department Time Table, DoMS IITR (2022-present).
          </li>
          <li>
            Member, Department Academic Program Committee (DAPC), DoMS IITR
            (2021-present).
          </li>
          <li>
            Chairman, Department Web Management Committee (DWMC), DoMS IITR
            (2022-present).
          </li>
          <li>
            Member, School Faculty Search Committee (SFSC), MFS of data science
            and AI, IITR (2021-present).
          </li>
          <li>
            Member, School Academic Program Committee (SAPC), MFS of data
            science and AI, IITR (2021-present).
          </li>
        </ul>
      </div>
      <div>
        <p className="mt-6 text-2xl">Professional Societies and Activities</p>
        <h1 className="mt-2 text-xl">Memberships</h1>
        <ul className="ml-5 list-disc space-y-2">
          <li className="mt-2">
            Life - Operational Research Society of India (ORSI)
          </li>
          <li>Life - Society of Operations Management (SOM)</li>
          <li>
            Annual- Institute for Operations Research and the Management
            Sciences (INFORMS)
          </li>
          <li>Annual - INFORMS College on Artificial Intelligence (CAI)</li>
          <li>
            Annual - Association for the Advancement of Artificial Intelligence
            (AAAI)
          </li>
        </ul>
        <div className="space-y-2 text-lg mt-4">
          <p>
            Reviewer for journals: Annals of Operations Research, Computers and
            Operations Research, Probability in Engineering and Information
            Sciences, Computers and Industrial Engineering, Mathematical Methods
            of Operations Research.
          </p>
          <p>
            Conference/Workshop Organized: Co-chair for Young European Queueing
            Theorists (YEQT) workshop 2018, Convenor for the conference on
            Sustainable Business Management (SBM) 2023, Organizing Committee
            member for a workshop on large scale optimization (LSO) 2024.
          </p>
          <p>
            Technical programs: Technical Program Committee member for several
            conferences including Valuetools 2022.
          </p>
        </div>
      </div>
    </main>
  );
};
export default page;
