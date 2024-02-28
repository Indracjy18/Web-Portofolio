import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Indra, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am enthusiastic about becoming a proficient Front End Developer.
              Although I am still in the learning phase, I have a strong desire
              to continually improve my skills and knowledge in this field. I
              believe that the world of technology is constantly evolving, and I
              am committed to staying updated with the latest developments and
              mastering various relevant technologies and tools. While I do not
              yet have significant professional experience, I have undertaken
              various online courses and trainings to learn the fundamentals of
              web programming, including HTML, CSS, and JavaScript. I am also
              active in developer communities and frequently participate in
              forums, seminars, and workshops to broaden my knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
