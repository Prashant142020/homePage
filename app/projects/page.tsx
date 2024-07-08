import PTable from "@/components/projectsTable";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <main>
      <section className="">
        <h1 className="mb-3 text-2xl">Research/Consultancy Projects</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">TOPIC</TableHead>
              <TableHead>START DATE</TableHead>
              <TableHead>FIELD</TableHead>
              <TableHead className=""> FINANCIAL OUTLAY</TableHead>
              <TableHead className=""> FUNDING AGENCY</TableHead>
              <TableHead className=""> OTHER OFFICERS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Reinforcement learning as a Decision Support Tool in
                Nonstationary Environment
              </TableCell>
              <TableCell>04 Oct 2021</TableCell>
              <TableCell>AI in Operations Management</TableCell>
              <TableCell className="text-right">20 Lacs</TableCell>
              <TableCell>
                Sponsored Research and Industrial Consultancy, IITR
              </TableCell>
              <TableCell className="text-right">Nil</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                AI-driven trading platform
              </TableCell>
              <TableCell>07 Dec 2022</TableCell>
              <TableCell> Applied AI</TableCell>
              <TableCell className="text-right"> 27 Lacs</TableCell>
              <TableCell>SmartAlpha Inc., Hyderabad</TableCell>
              <TableCell className="text-right">R. Balasubramanian</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                AI for restless bandits and its Applications (AIRBA)
              </TableCell>
              <TableCell>12 June 2023</TableCell>
              <TableCell>AI for Sequential Decision Making</TableCell>
              <TableCell className="text-right">35 Lacs + Euro 21K</TableCell>
              <TableCell>DST-INRIA</TableCell>
              <TableCell className="text-right"> Nicolas Gast</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                Sustainability and Social Welfare of National Logistic Policy
              </TableCell>
              <TableCell>15 Jan 2024</TableCell>
              <TableCell>Game Theory for Transportation</TableCell>
              <TableCell className="text-right">10 Lacs</TableCell>
              <TableCell> ICSSR</TableCell>
              <TableCell className="text-right">Sumit Kumar Yadav</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <Separator className="mt-5" />

      <h1 className="mb-3 mt-5 text-2xl">AAAI lab</h1>
      <p className="">
        Apart from printer and a few desktops, funds from the above sponsored
        projects are utilized to develop a computational server facility. The
        server has 192 GB RAM and 48 cores with Intel(R) Xeon(R) Gold 6248R CPU
        @ 3.00GHz.
      </p>
      <p className="mt-3">
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
        <ul className="mx-5 mt-2 list-disc space-y-3">
          {" "}
          <li className="">Memberships</li>
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
              Annual - Association for the Advancement of Artificial
              Intelligence (AAAI)
            </li>
          </ul>
          <div className="space-y-3">
            <li>
              Reviewer for journals: Annals of Operations Research, Computers
              and Operations Research, Probability in Engineering and
              Information Sciences, Computers and Industrial Engineering,
              Mathematical Methods of Operations Research.
            </li>
            <li>
              Conference/Workshop Organized: Co-chair for Young European
              Queueing Theorists (YEQT) workshop 2018, Convenor for the
              conference on Sustainable Business Management (SBM) 2023,
              Organizing Committee member for a workshop on large scale
              optimization (LSO) 2024.
            </li>
            <li>
              Technical programs: Technical Program Committee member for several
              conferences including Valuetools 2022.
            </li>
          </div>
        </ul>
      </div>
    </main>
  );
};
export default page;
