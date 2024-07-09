const page = () => {
  return (
    <main>
      <h1 className="text-2xl font-normal">Research interests</h1>
      <p className="mt-3 ">
        Theory, applications (primarily in management) and algorithms in
        operations research and reinforcement learning.
      </p>
      <p>
        More broadly, I am excited by research at the intersection of computer
        science, mathematics, statistics and their applications in management
        science.
      </p>
      <h1 className="mt-6 text-2xl font-normal">Education</h1>

      <ul className="mx-6 mt-4 list-decimal">
        <li>
          IIT Bombay. (2009 - 2016) <br />
          Msc-PhD dual degree, Industrial Engineering and Operations Research
          (IEOR). <br />
          Primary Field: Stochastic systems. <br /> Thesis Supervisors: Prof. N.
          Hemachandra, Prof. V. Kavitha and Prof. J. Venkateswaran
        </li>
      </ul>

      <h1 className="mt-6 text-2xl font-normal"> Work experience</h1>
      <ul className="mx-5 mt-4 list-decimal space-y-3 text-justify" >
        <li>
          Assistant Professor (July 2020 - present) <br /> Department of
          Management Studies, IIT Roorkee, India. <br />
          Research Domain: Operations Management.
        </li>
        <li>
          Scientist (August 2019 - July 2020) <br /> Data and decision sciences,
          TCS Hyderabad, India. <br /> Research Domain: Machine learning
          techniques for dynamic pricing. Mentor: Dr. S. Bhat
        </li>
        <li>
          CIMI Research Fellow (August 2017 - July 2019) Institut de Recherche
          en Informatique de Toulouse (IRIT), Toulouse, France. Research Domain:
          Restless bandits. Mentors: Prof. U. Ayesta and Prof. I. M. Verloop
        </li>
        <li>
          Postdoctoral Research Appointment (August 2016 - July 2017)
          Engineering Systems and Design, SUTD, Singapore. Research Domain: Game
          theorertic approaches for operations management. Mentors: Prof. S.
          Sharma and Prof. Y. Xu
        </li>
      </ul>
    </main>
  );
};
export default page;
