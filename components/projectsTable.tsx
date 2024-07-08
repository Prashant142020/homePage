import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PTable = () => {
  return (
    <section className="">
      <h1 className="text-2xl mb-3">Research/Consultancy Projects</h1>
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
              Reinforcement learning as a Decision Support Tool in Nonstationary
              Environment
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
  );
};
export default PTable;
