import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <div>
      <h1 className="mb-3 text-2xl">Teaching Feedback</h1>
      <p>All courses, IIT Roorkee, 2024</p>
      <div className="mt-4">
        <Table className="w-auto">
          <TableCaption>Last updated on Jan 29 2024.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">COURSE CODE</TableHead>
              <TableHead className="">COURSE NAME</TableHead>
              <TableHead className="">Year</TableHead>
              <TableHead className="text-right">Instructor</TableHead>
              <TableHead className="text-right">Course</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">BM 656</TableCell>
              <TableCell> Decision Support and Expert Systems</TableCell>
              <TableCell>Spring 2021</TableCell>
              <TableCell className="text-right">4.15</TableCell>
              <TableCell className="text-right">4.26</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 659</TableCell>
              <TableCell>Queueing Models and Simulation</TableCell>
              <TableCell>Spring 2021 (Term 4)</TableCell>
              <TableCell className="text-right">4.67</TableCell>
              <TableCell className="text-right">4.69</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 503</TableCell>
              <TableCell>Operations Research</TableCell>
              <TableCell>Autumn 2021 (Term 1)</TableCell>
              <TableCell className="text-right">4.13</TableCell>
              <TableCell className="text-right">4.46</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 655</TableCell>
              <TableCell>Essential AI for Managers</TableCell>
              <TableCell>Autumn 2021 (Term 5)</TableCell>
              <TableCell className="text-right">3.73</TableCell>
              <TableCell className="text-right">3.94</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 656</TableCell>
              <TableCell>Advanced AI for Managers</TableCell>
              <TableCell>Autumn 2021 (Term 6)</TableCell>
              <TableCell className="text-right">4.43</TableCell>
              <TableCell className="text-right">4.54</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 616</TableCell>
              <TableCell>Advanced Optimization for Managers</TableCell>
              <TableCell>Spring 2022 (Term 7)</TableCell>
              <TableCell className="text-right">4.70</TableCell>
              <TableCell className="text-right">4.68</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AID 554</TableCell>
              <TableCell>Reinforcement Learning</TableCell>
              <TableCell>Spring 2022</TableCell>
              <TableCell className="text-right">4.40</TableCell>
              <TableCell className="text-right">4.58</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 659</TableCell>
              <TableCell>Queueing Models and Simulation</TableCell>
              <TableCell>Spring 2022 (Term 4)</TableCell>
              <TableCell className="text-right">4.33</TableCell>
              <TableCell className="text-right">4.38</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 503</TableCell>
              <TableCell>Operations Research</TableCell>
              <TableCell>Autumn 2022 (Term 1)</TableCell>
              <TableCell className="text-right">4.28</TableCell>
              <TableCell className="text-right">4.41</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 655</TableCell>
              <TableCell>Essential AI for Managers</TableCell>
              <TableCell>Autumn 2022 (Term 5)</TableCell>
              <TableCell className="text-right">4.09</TableCell>
              <TableCell className="text-right">4.35</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 656</TableCell>
              <TableCell>Advanced AI for Managers</TableCell>
              <TableCell>Autumn 2022 (Term 6)</TableCell>
              <TableCell className="text-right">4.55</TableCell>
              <TableCell className="text-right">4.38</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 616</TableCell>
              <TableCell>Advanced Optimization for Managers</TableCell>
              <TableCell>Spring 2023 (Term 7)</TableCell>
              <TableCell className="text-right">4.42</TableCell>
              <TableCell className="text-right">4.32</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AID 554</TableCell>
              <TableCell>Reinforcement Learning</TableCell>
              <TableCell>Spring 2023</TableCell>
              <TableCell className="text-right">4.88</TableCell>
              <TableCell className="text-right">4.95</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 659</TableCell>
              <TableCell>Queueing Models and Simulation</TableCell>
              <TableCell>Spring 2023 (Term 4)</TableCell>
              <TableCell className="text-right">4.57</TableCell>
              <TableCell className="text-right">4.54</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 503</TableCell>
              <TableCell>Operations Research</TableCell>
              <TableCell>Autumn 2023 (Term 1)</TableCell>
              <TableCell className="text-right">4.58</TableCell>
              <TableCell className="text-right">4.46</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 655</TableCell>
              <TableCell>Essential AI for Managers</TableCell>
              <TableCell>Autumn 2023 (Term 5)</TableCell>
              <TableCell className="text-right">4.86</TableCell>
              <TableCell className="text-right">4.83</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BMN 656</TableCell>
              <TableCell>Advanced AI for Managers</TableCell>
              <TableCell>Autumn 2023 (Term 6)</TableCell>
              <TableCell className="text-right">4.87</TableCell>
              <TableCell className="text-right">4.45</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">4.45</TableCell>
              <TableCell className="text-right">4.48</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default page;
