
const profile = {
    name: "Gullipalli Nagabhushan",
    title: "Python Developer Intern",
    summary: "A dedicated and passionate Computer Science student with a strong foundation in programming and web development. I have practical experience as a Python Developer Intern at Infosys Springboard, where I successfully implemented an OCR-based check processing system. My skills include Python, Django, and database management, complemented by a proven record of enhancing user experience through various projects. I am eager to leverage my technical abilities in a challenging role.",
    location: "Vizianagaram, India",
    email: "gullipallinagabhushan@gmail.com",
    phone: "+91 8019300342",
    github: "https://github.com/gullipalli-nagabhushan",
    linkedin: "https://www.linkedin.com/in/gullipalli-nagabhushan/",
    hackerrank: "https://www.hackerrank.com/profile/Naga_bhushan",
    avatar: "https://raw.githubusercontent.com/Codermvgr/Portfolio/main/profile.jpg",
    resumeImage: "https://drive.google.com/file/d/1lwiLyEGabSgBBs_8YL7fwXIIcLhzBwaZ/view",
  }
const skills =  [
    {
      id: "1",
      name: "Python",
      category: "Programming Languages",
      level: 5,
      icon: "code",
    },
    {
      id: "2",
      name: "Django",
      category: "Web Frameworks",
      level: 4,
      icon: "server",
    },
    {
      id: "3",
      name: "HTML/CSS",
      category: "Web Development",
      level: 4,
      icon: "layout",
    },
    {
      id: "4",
      name: "JavaScript",
      category: "Programming Languages",
      level: 3,
      icon: "code",
    },
    {
      id: "5",
      name: "SQL",
      category: "Databases",
      level: 3,
      icon: "database",
    },
    {
      id: "6",
      name: "OpenCV",
      category: "Computer Vision",
      level: 4,
      icon: "eye",
    },
    {
      id: "7",
      name: "Git & GitHub",
      category: "Version Control",
      level: 4,
      icon: "git-branch",
    },
    {
      id: "8",
      name: "Bootstrap",
      category: "Web Development",
      level: 4,
      icon: "layout",
    },
    {
      id: "9",
      name: "Google APIs",
      category: "APIs",
      level: 3,
      icon: "globe",
    },
    {
      id: "10",
      name: "Data Structures",
      category: "Computer Science",
      level: 4,
      icon: "database",
    },
    {
      id: "11",
      name: "Streamlit",
      category: "Web Development",
      level: 3,
      icon: "layout",
    },
    {
      id: "12",
      name: "Java",
      category: "Programming Languages",
      level: 3,
      icon: "code",
    },
  ]

const  experiences = [
    {
      id: "1",
      company: "Infosys Springboard",
      position: "Python Developer Intern",
      startDate: "2023-11",
      endDate: "2025-01",
      description: "Working as a Python Developer Intern at Infosys Springboard, a premier technology services company focused on delivering digital services. Developed an OCR-based check processing system using Python, OpenCV, and Tesseract OCR to automate bank check validation. Integrated Google Vision API for enhanced text recognition and improved accuracy in extracting handwritten and printed text. Built an interactive Streamlit web app to provide a user-friendly interface for uploading, processing, and reviewing extracted check details.",
      technologies: ["Python", "OpenCV", "Tesseract OCR", "Google Vision API", "Streamlit"],
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    }
  ]
const education = [
    {
      id: "1",
      institution: "Maharaj Vijayaram Gajapati Raj College of Engineering",
      degree: "B.Tech",
      field: "Computer Science and Engineering",
      startDate: "2022-11",
      endDate: "2026-04",
      description: "Currently pursuing a Bachelor's degree in Computer Science and Engineering, focusing on building a strong foundation in programming, algorithms, and software development.",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      location: "Chintalavalasa, Vizianagaram"
    },
    {
      id: "2",
      institution: "Sri Lakshmi Ganapathi Junior College",
      degree: "Intermediate",
      field: "M.P.C (Mathematics, Physics, Chemistry)",
      startDate: "2021-01",
      endDate: "2022-05",
      description: "Completed intermediate education with a focus on Mathematics, Physics, and Chemistry, which provided a strong foundation for engineering studies.",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      location: "K.L.Puram, Vizianagaram"
    },
  ]

const certificates =[
    {
      id: "1",
      name: "NPTEL Discipline Star",
      issuer: "NPTEL",
      date: "2023-05",
      credentialId: "NPTEL-DS-2023",
      description: "Recognized as an NPTEL Discipline Star for excellence in multiple NPTEL courses.",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      url: "https://drive.google.com/file/d/1h0-ZciLTDBcJ_1wEp8mQwlCxBuyXHNGy/view?usp=sharing",
    }
  ]
const  achievements = [
    {
      id: "1",
      title: "NPTEL Discipline Star",
      date: "2023-05",
      description: "Recognized as an NPTEL Discipline Star for excellence in multiple NPTEL courses, demonstrating commitment to continuous learning and academic excellence.",
      icon: "award",
    },
    {
      id: "2",
      title: "OCR Check Processing System",
      date: "2023-08",
      description: "Developed an OCR-based check processing system that reduced manual processing time by 40% by optimizing the check verification workflow.",
      icon: "code",
    }
  ]
const projects = [
    {
      id: "1",
      title: "Food N Table",
      description: "A restaurant table booking and online food ordering platform using Django for backend and Bootstrap for UI. Features include Razorpay integration for secure payments, user authentication, order tracking, and Google Maps API integration for restaurant location services and navigation.",
      technologies: ["Django", "Bootstrap", "Razorpay", "Google Maps API", "Python"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      link: "https://github.com/gullipalli-nagabhushan/foodNtable",
      liveDemo: "https://foodntable.pythonanywhere.com/",
    },
    {
      id: "2",
      title: "OCR Check Processing System",
      description: "Developed an OCR-based check processing system using Python, OpenCV, and Tesseract OCR. Integrated Google Vision API for enhanced text recognition and built a user-friendly Streamlit web app for uploading, processing, and reviewing extracted check details.",
      technologies: ["Python", "OpenCV", "Tesseract OCR", "Google Vision API", "Streamlit"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      link: "https://github.com/gullipalli-nagabhushan/check-extraction",
      liveDemo: "https://bank-check-extraction.streamlit.app/",
    }
  ]

export  { profile, experiences, skills, education, certificates, achievements, projects };