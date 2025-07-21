import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    su,
    city,
    ai,
    sky,
    uofa,
    three,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Teaching Assistant",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant",
      company_name: "University of Alberta",
      icon: uofa,
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Teaching Assistant (TA) for Computer Organisation and Architecture, assisting a class of approximately 60 students with labs, quizzes, and assignments, enhancing their understanding of course concepts.",
        "Conduct lab interviews to assess student comprehension and performance, offering tailored feedback.",
        "Supported students by addressing individual questions and clarifying complex topics related to computer organization and architecture.",
      ],
    },
    {
      title: "Tutor",
      company_name: "University of Alberta Student Union",
      icon: su,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Participating in code reviews and providing constructive feedback to other student developers.",
        "Provide hands-on tutoring in statistics and computer science, focusing on practical applications and real-world problem-solving.",
        "Utilize interactive teaching methods and practical exercises to enhance students' understanding and retention of complex concepts."
      ],
    },
    {
      title: "Event Security Guard",
      company_name: "City of Edmonton",
      icon: city,
      iconBg: "#383E56",
      date: "April 2024 - Present",
      points: [
        "Maintain crowd control, monitor for suspicious activities, and assist guests to ensure a secure environment during Edmonton Elks games and large concerts.",
        "Stay vigilant and maintain a visible presence to help create a safe and enjoyable atmosphere for all attendees.",
      ],
    },
    {
      title: "Team lead",
      company_name: "University of Alberta Student Union",
      icon: su,
      iconBg: "#E6DEDD",
      date: "August 2024 - September 2024",
      points: [
        "Led orientation activities for new students, providing guidance on university resources, campus life, and academic support, ensuring a smooth transition into university culture.",
        "Fostered a welcoming environment by organizing group activities and one-on-one interactions, promoting a sense of community and belonging among first-year students."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "His expertise in computer architecture helped me navigate complex concepts during lab sessions. His guidance made assignments much easier to tackle.",
      name: "Bhavjot Singh",
      designation: "Student, CMPUT 229",
      company: "University of Alberta",
    },
    {
      testimonial:
        "His technical skills are impressive, but their ability to break down difficult problems into manageable steps made all the difference for me during the course.",
      name: "Chris Brown",
      designation: "Student, Computer Science",
      company: "Student Union",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "His leadership and clear communication ensured our team was always on the same page, which greatly contributed to maintaining a safe and secure environment at the stadium.",
      name: "Kevin Heard",
      designation: "Security Supervisor",
      company: "Commonwealth Stadium",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SkyByte",
      description:
        "Developed SkyByte, a professional storage management platform inspired by Google Drive and Dropbox. Implemented advanced file management, secure OTP-based authentication using shadcn, and backend integration with Appwrite. Designed global search and sorting features for improved usability and organized file categorization. Check it out here: https://skybyte-liard.vercel.app",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Shadcn",
          color: "pink-text-gradient",
        },
        {
          name: "Appwrite",
          color: "blue-text-gradient",
        },
      ],
      image: sky,
      source_code_link: "https://github.com/Sky-Bytee/Skybyte",
    },
    {
      name: "AI t-shirt Customiser",
      description:
        "Developed an interactive t-shirt customization platform using React (frontend) and Node.js (backend), deployed on Vercel and Render. Integrated the OpenAI API for AI-driven logo generation and photo application, boosting user engagement. Implemented dynamic features such as file uploads, color changes, and toggleable design options to provide a seamless and creative user experience. Check it out here: https://ai-tshirt.vercel.app",
      tags: [
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/Gunkirat15/AI-tshirt",
    },
    {
      name: "MapReduce library",
      description:
        "Designed and implemented a MapReduce framework in C, utilizing thread pools for efficient job scheduling based on Shortest Job First (SJF) order. Integrated robust synchronization mechanisms using POSIX mutex locks and condition variables to manage concurrent data access. Applied the framework in a distributed word count application, optimizing the processing of large datasets across multiple threads.",
      tags: [
        {
          name: "C",
          color: "green-text-gradient",
        },
        {
          name: "Job Scheduling",
          color: "blue-text-gradient",
        },
        {
          name: "POSIX threads",
          color: "pink-text-gradient",
        },
        {
          name: "Multi-threading",
          color: "blue-text-gradient",
        },
        {
          name: "Distributed Systems",
          color: "green-text-gradient",
        },
      ],
      image: three,
      source_code_link: "https://github.com/uoa-cmput379/assignment2-mapreduce-library-Gunkirat15",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };