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
    zurich,
    three,
    threejs,
    blood,
    whimsy,
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
      title: "Software Development Intern",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
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
      title: "Software Development Intern",
      company_name: "Zurich Canada",
      icon: zurich,
      iconBg: "#383E56",
      date: "May 2025 - Present",
      points: [
        "Developed and maintained internal monitoring dashboards using Datadog to track batch job performance, email notification statuses, and log metrics across ClaimCenter systems.",
        "Worked on backend services built with Java and React, contributing to feature development and debugging efforts within the Guidewire-based Claims platform.",
        "Collaborated with cross-functional teams across Canada and the US, assisting with code reviews and system maintenance to ensure stability of Guidewire ClaimCenter operations.",
      ],
    },
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
      name: " PulseChain – Blood Donation Platform 💉",
      description:
        "Created a donation management system connecting blood donors and recipients through a clean, intuitive UI and real-time push notification reminders. Integrated OpenAI to build an AI chatbot assistant that answers questions and guides users through the donation process. Developed a secure backend using PostgreSQL and Express, with cross-platform support via React and React Native for both web and mobile users.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
      ],
      image: blood,
      source_code_link: "https://github.com/PulseChain-org",
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
      name: "Whimsy – Mood-Based Social App 📱",
      description:
        "Developed a modern social media platform using Android Studio and Java, focused on emotional expression through short-form mood posts. Integrated Firebase for authentication and storage, enabling user features like follow/following, tagging, profile editing, and search. Leveraged DALL·E and OpenAI to generate images and responses based on moods using special hashtags like #generate-image and #generate-response, creating a more interactive and expressive user experience.",
      tags: [
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "DALL·E",
          color: "green-text-gradient",
        },
      ],
      image: whimsy,
      source_code_link: "https://github.com/cmput301-w25/project-bugoff",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };