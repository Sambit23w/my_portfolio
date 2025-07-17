// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
import cozentus_logo from './assets/company_logo/cozentus_logo.png';
import growexx_logo from './assets/company_logo/growexx_logo.png';

// Education Section Logo's
import silicon_logo from './assets/education_logo/silicon_logo.png';
import rgda_clg from './assets/education_logo/rgda_clg.png';
import lps_logo from './assets/education_logo/lps_logo.png';
import kv_logo from './assets/education_logo/kv_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GitHub Desktop', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: growexx_logo,
      role: "Frontend Developer",
      company: "GrowExx",
      date: "October 2022 - Present",
      desc: "At Growexx, I worked as a frontend developer for our client Park Street Companies, where I designed and developed over 15 reusable UI components using SCSS and Angular Material, streamlining the development process and reducing delivery time by 30%. By enhancing modularity and responsiveness, I improved mobile performance by 45% across multiple projects. I built dynamic dashboards integrated with real-time APIs, significantly improving data accuracy and enabling faster decision-making. I implemented NgRx state management in complex modules, which led to a 25% reduction in bugs. Additionally, by optimizing the DOM and applying lazy loading techniques, I enhanced cross-device performance and reduced UI load times by 40%. Collaborating closely with cross-functional Agile teams, I contributed to the successful launch of more than five enterprise-level features within tight sprint deadlines, ensuring both technical excellence and timely delivery.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "TypeScript",
        "SCSS",
        "Angular Material",
        "NgRx",
        "AngularJS",
        "RxJS"
      ],
    },
    {
      id: 1,
      img: cozentus_logo,
      role: "Frontend Developer",
      company: "Cozentus Technologies",
      date: "July 2021 - September 2022",
      desc: "At Cozentus Technologies, I worked as a Frontend Developer for BDP International, a leading 3PL shipment-based company, where I developed and maintained user interfaces for logistics platforms such as BL Manager, Smart Classify, and DMS, improving overall UI usability by 35%. I built real-time data dashboards using Highcharts for enhanced shipment tracking and visibility. My role involved close collaboration with backend and QA teams to deliver over 10 successful production releases with zero critical bugs. I also ensured seamless mobile responsiveness across devices by leveraging Bootstrap and custom media queries, enhancing accessibility and user experience across platforms.",
      skills: [
        "ReactJS",
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "TypeScript",
        "SCSS",
        "Angular Material",
        "NgRx",
        "RxJS"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: silicon_logo,
      school: "Silicon Institute of Technology | Bhubaneswar",
      date: "Aug 2018 - June 2021",
      grade: "7.47 CGPA",
      desc: "During my Master's program, I gained in-depth knowledge and practical experience in various aspects of computer science, including software development, web technologies, databases, and algorithms. I focused on developing a strong foundation in programming languages and web development frameworks like Angular and React. My coursework, combined with hands-on projects, helped me build skills in software design, problem-solving, and database management.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: rgda_clg,
      school: "Rayagada Autonomous College, Rayagada",
      date: "Aug 2015 - April 2018",
      grade: "6.67 CGPA",
      desc: "I completed my Bachelor's degree in Physics, where I developed a deep understanding of fundamental scientific principles, analytical thinking, and problem-solving skills. My studies included both theoretical and practical aspects of physics, with an emphasis on experimentation and data interpretation.",
      degree: "Bachelor of Science - BSc, Physics",
    },
    {
      id: 2,
      img: lps_logo,
      school: "Lakshmipat Singhania Public School, Jaykaypur, Odisha",
      date: "Apr 2017 - March 2018",
      grade: "58%",
      desc: "I completed my class 12 education from Lakshmipat Singhania Public School, Jaykaypur, Odisha, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: kv_logo,
      school: "Kendriya Vidyalaya, Rayagada, Odisha",
      date: "Apr 2015 - March 2016",
      grade: "7.70 CGPA",
      desc: "I completed my class 10 education from Kendriya Vidyalaya, Rayagada, Odisha, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];  