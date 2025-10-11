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
        "Built and deployed over 5 Datadog dashboards and automated alerting pipelines to monitor email notifications, batch jobs, and claim integrations, reducing manual log reviews by 40% and improving issue response time by 30%.",
        "Developed a Retrieval-Augmented Generation (RAG) system using Confluence APIs, ChromaDB, and local embeddings, allowing IT teams to query 1,000+ pages of internal documentation in seconds.",
        "Created an AI-powered requirements analysis tool that extracts requirements from meeting transcripts, compares them with Jira and Confluence records, and automatically generates user stories and epics for direct Jira integration.",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "University of Alberta",
      icon: uofa,
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Mentored 60+ Computer Science students in Computer Organisation and Architecture (CMPUT 229), transforming abstract concepts like CPU design and memory hierarchies into practical, hands-on learning experiences.",
        "Designed and conducted comprehensive lab assessments, providing personalized feedback that improved student performance and confidence in low-level programming concepts.",
        "Developed innovative teaching approaches to demystify complex topics including assembly language, processor architecture, and system-level programming for diverse learning styles.",
      ],
    },
    {
      title: "Tutor",
      company_name: "University of Alberta Student Union",
      icon: su,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Delivered targeted tutoring sessions in statistics and computer science fundamentals, helping students bridge theoretical knowledge with practical programming applications.",
        "Created custom learning strategies for individual students, resulting in measurable improvements in their academic performance and coding confidence.",
        "Facilitated peer learning through collaborative problem-solving sessions, fostering a supportive academic community within the Student Union."
      ],
    },
    {
      title: "Team lead",
      company_name: "University of Alberta Student Union",
      icon: su,
      iconBg: "#E6DEDD",
      date: "August 2024 - September 2024",
      points: [
        "Orchestrated comprehensive orientation programs for incoming students, designing activities that seamlessly introduced university resources, academic expectations, and campus culture to 100+ new students.",
        "Built lasting connections through strategic group facilitation and personalized mentorship, creating an inclusive environment that reduced first-year anxiety and improved student retention."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Gunkirat has this rare ability to break down assembly language concepts that seemed impossible to understand. His lab sessions turned my biggest academic struggle into manageable, logical steps. I went from failing quizzes to actually enjoying computer architecture.",
      name: "Bhavjot Singh",
      designation: "Student, CMPUT 229",
      company: "University of Alberta",
    },
    {
      testimonial:
        "What sets Gunkirat apart isn't just his coding expertise, it's how he makes complex statistical concepts click. His tutoring sessions transformed my approach to data analysis, and I actually started looking forward to our problem-solving discussions.",
      name: "Chris Brown",
      designation: "Student, Computer Science",
      company: "Student Union",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "During high-pressure events at Commonwealth Stadium, Gunkirat's leadership kept our security operations running smoothly. His clear communication and proactive problem-solving approach made him someone you could always count on when things got hectic.",
      name: "Kevin Heard",
      designation: "Security Supervisor",
      company: "Commonwealth Stadium",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PulseChain – Blood Donation Platform 💉",
      description:
        "Every 2 seconds, someone needs blood. PulseChain tackles this critical challenge by creating seamless connections between donors and recipients. Built an intelligent donation ecosystem featuring real-time notifications, AI-powered chatbot assistance, and cross-platform accessibility. The platform's secure PostgreSQL backend ensures HIPAA-compliant data handling while React/React Native delivers consistent experiences across web and mobile devices.",
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
      name: "AI T-Shirt Customiser",
      description:
        "Fashion meets artificial intelligence in this innovative customization platform. Users can generate unique designs through OpenAI's API, upload personal images, and experiment with dynamic color schemes, all in real-time. The React frontend delivers smooth interactions while the Node.js backend handles AI processing efficiently. Deployed on modern cloud infrastructure for global accessibility. Experience it live: https://ai-tshirt.vercel.app",
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
        "What if social media reflected our inner world? Whimsy transforms emotional expression into digital art through mood-driven posts and AI-generated visuals. Users share feelings through intuitive hashtags like #generate-image and #generate-response, triggering DALL·E and OpenAI to create personalized content. Built with Android Studio and powered by Firebase, it's social networking reimagined for authentic human connection.",
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