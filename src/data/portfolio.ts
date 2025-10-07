import { Project, Experience, Certificate, Education, Skill } from '../types';

export const personalInfo = {
  name: "Ahmad  Saad",
  title: "QA Engineer | Software Developer",
  location: "Nablus",
  email: "ahmad_saad0@yahoo.com",
  phone: "+970 595 822 120",
  linkedin: "https://linkedin.com/in/ahmadsaad7",
  github: "https://github.com/ahmadsaad2",
  about: "I’m a Software Engineer specializing in QA testing, with a Bachelor’s degree in Computer Engineering from An-Najah National University. I have experience in manual and automated testing for API, mobile, and web applications. My background in software development, data analysis, and customer support helps me test with a developer’s mindset, ensuring functionality and user experience. Detail-oriented and analytical, I’m always learning new tools to improve testing efficiency and product quality.",

};
export const projects: Project[] = [
  {
    id: "rentitout-api",
    title: "RentItOut API",
    category: "backend",
    shortDescription: "Peer-to-peer rental platform backend with advanced API features.",
    description: "Built a backend API for RentItOut — a platform for users to rent or list items like tools, electronics, and sports gear. Focused on user authentication, rental management, and automated API documentation with Swagger. Used AWS RDS for database hosting and Docker for deployment.",
    techStack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "AWS",
      "Docker",
      "Swagger",
      "JWT",
      "Nodemailer",
      "Winston",
      "REST API"
    ],
    image: "https://mostaql.hsoubcdn.com/uploads/thumbnails/4145722/686d16515c983/A3C61A01-B422-42BC-A786-DCD14D5A3FE3.png",
    githubUrl: "https://github.com/ahmadsaad2/RentItOut"
  },
  {
    id: "sakancom-system",
    title: "Sakancom System",
    category: "qa",
    shortDescription: "Java-based housing rental management system with CI/CD testing and analysis.",
    description: "Developed 'Sakancom', a Java application for managing housing rentals with tenant, owner, and admin features. Implemented BDD with Gherkin and Cucumber, unit testing using JUnit, and integrated CI/CD pipelines through Jenkins and SonarCloud for quality assurance and code optimization.",
    techStack: [
      "Java",
      "JUnit",
      "BDD",
      "Cucumber",
      "Gherkin",
      "SonarCloud",
      "Jenkins",
      "Agile Testing"
    ],
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com/ahmadSaadOrg/Sakancom-App"
  },
  {
    id: "kfc-management",
    title: "KFC Management System",
    category: "web",
    shortDescription: "Full-stack restaurant management system using JavaFX and Oracle Database.",
    description: "Built a restaurant management system to handle employees, orders, and inventory. Implemented database integration with Oracle and created GUI using JavaFX. Included reporting with Jasper Reports for data analysis and management tracking.",
    techStack: [
      "Java",
      "JavaFX",
      "SQL",
      "Oracle Database",
      "CSS",
      "Jasper Reports"
    ],
    image: "https://private-user-images.githubusercontent.com/137313539/297651221-c640420b-5271-4081-9880-73a5e0dbedbe.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk4NjExNzAsIm5iZiI6MTc1OTg2MDg3MCwicGF0aCI6Ii8xMzczMTM1MzkvMjk3NjUxMjIxLWM2NDA0MjBiLTUyNzEtNDA4MS05ODgwLTczYTVlMGRiZWRiZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAwN1QxODE0MzBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMWRhM2M3NmEzZjBiNWVlYmRmNmI4NDk3NjRkODZhMDk5ZmExNzBhZjIyZDQ0OGVlZjcxMzMxY2VkMmMzNDJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.65bqOU4wdB4Ldu3kLfw4k5JGG95zIeP-QN-lX-381xs",
    githubUrl: "https://github.com/ahmadsaad2/Java-FX-Project-Restaurant-System"
  },
  {
    id: "flight-booking-testing",
    title: "Flight Booking Application QA",
    category: "qa",
    shortDescription: "End-to-end manual testing of an online flight booking application.",
    description: "Performed full QA process on an online flight booking site using Jira Scrum and Zephyr Scale. Created 40+ test cases, tracked bugs, and managed test cycles. Reported major issue where a return date before departure was accepted, improving system reliability.",
    techStack: [
      "Manual Testing",
      "Jira Scrum",
      "Zephyr Scale",
      "Bug Tracking",
      "Test Cycle Management"
    ],
    image: "https://testus.eu/TestUS/img/AgileTravel_2.png",
    githubUrl: "https://github.com/ahmadsaad2/flight-booking-testing"
  },
  {
    id: "todolist-crud-testing",
    title: "To-Do List App – CRUD Testing & Defect Reporting",
    category: "qa",
    shortDescription: "Manual QA testing and defect tracking for a web-based to-do list app.",
    description: "Created 46 test cases to validate CRUD operations on a to-do list web app. Logged and tracked defects in Trello, including layout bugs and incorrect scroll behavior. Ensured functional and UI consistency across test cycles.",
    techStack: [
      "Manual Testing",
      "Trello",
      "Bug Reporting",
      "CRUD Testing"
    ],
    image: "https://user-images.githubusercontent.com/101473782/221053330-8fd30dc3-3cc0-42df-a598-7bad7f6c009f.PNG",
    githubUrl: "https://github.com/ahmadsaad2/todolist-crud-testing"
  },
  {
    id: "trello-api-testing",
    title: "Trello API – CRUD Testing & Automation",
    category: "qa",
    shortDescription: "Automated API testing for Trello boards, lists, and cards.",
    description: "Developed 18 automated Postman scripts for CRUD operations on Trello APIs. Implemented assertions, error handling, and validation. Designed a tracking system in Excel to monitor API runs and workflow efficiency.",
    techStack: [
      "API Testing",
      "Postman",
      "JavaScript",
      "Automation",
      "Excel",
      "CRUD Testing"
    ],
    image: "https://images.ctfassets.net/rz1oowkt5gyp/7lpUSxVqNRggpqzCNcnfo1/04cf35d0a0ef60e18c6575eb9a0374e4/inbox-slider.png",
    githubUrl: "https://github.com/ahmadsaad2/Trello-REST-API-Full-CRUD-Collection"
  },
  {
    id: "prosper-loan-analysis",
    title: "Prosper Loan Data Analysis",
    category: "data",
    shortDescription: "Comprehensive data analysis and visualization using Python.",
    description: "Analyzed over 110,000 loans from Prosper to identify financial trends and risk factors. Used Python, pandas, and Matplotlib to explore relationships between loan terms, borrower income, and interest rates. Delivered clear visual reports and insights.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Visualization"
    ],
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com/ahmadsaad2/Loan-Data-Analysis-and-Insights"
  },
  {
    id: "mental-health-analysis",
    title: "Mental Health Analysis – Students and Tech Employees",
    category: "data",
    shortDescription: "Analyzed mental health data and created visual insights.",
    description: "Processed and cleaned datasets related to student and tech employee mental health. Used Python libraries for data wrangling and visualized key trends about stress, productivity, and work-life balance.",
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Data Wrangling",
      "Data Visualization"
    ],
    image: "https://thejournal.com/-/media/EDU/THEJournal/2023/20230624graph4.gif",
    githubUrl: "https://github.com/ahmadsaad2/Mental-Health-Analysis-Students-Tech-Employees"
  },
  {
    id: "tmdb-movies-analysis",
    title: "Investigate TMDb Movies Dataset",
    category: "data",
    shortDescription: "Exploratory analysis of 10,000+ movies using Python.",
    description: "Analyzed The Movie Database (TMDb) dataset to find patterns in user ratings, revenue, and genres. Applied Python, NumPy, and pandas for cleaning, statistical analysis, and visualization, producing insights about popular genres and box office trends.",
    techStack: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Statistical Analysis"
    ],
    image: "https://miro.medium.com/max/400/1*Y9-6_bh5a00rJWWoQ28NMQ.jpeg",
    githubUrl: "https://github.com/ahmadsaad2/Investigate-a-TMDb-Dataset-Movies"
  },
  {
    id: "project-management-system",
    title: "Project Management System",
    category: "web",
    shortDescription: "Full-stack dashboard for managing students, tasks, and projects.",
    description:
      "Developed a full-stack web application for managing educational projects and student progress. The system includes role-based dashboards for admins and students, real-time charts, and responsive UI. Implemented secure authentication using React Context API and Node.js backend. Data stored in MySQL (via XAMPP) with RESTful APIs for efficient communication.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
      "React Context API",
      "REST API"
    ],
    image:
      "https://miro.medium.com/1*0ZESgG9lfXEM6gEI_fcj7A.jpeg",
    githubUrl: "https://github.com/ahmadsaad2/project-management-"
  },
  {
    id: "sayyarati",
    title: "Sayyarati – On-Demand Car Services Platform",
    category: "mobile",
    shortDescription: "Mobile and web app for car maintenance and emergency services.",
    description:
      "Sayyarati connects car owners with service providers for quick repairs, fuel delivery, towing, and more. It features chat communication, AI-powered diagnostics, and part purchasing. Built with Flutter and Node.js, integrated with Google Maps, Firebase notifications, and Cloudinary for media handling. Authentication is managed using JWT for secure sessions.",
    techStack: [
      "Flutter",
      "Node.js",
      "Express.js",
      "MySQL",
      "Google Maps API",
      "Firebase",
      "Cloudinary",
      "JWT",
      "Postman"
    ],
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQFQUCEPueFj8Q/feedshare-shrink_1280/B4DZTsNGu9HwAo-/0/1739129646510?e=1762992000&v=beta&t=_Us8mqH71o7qBSBt2pp_0xvzX8GghnpGiZjyVuvlnkU",
    githubUrl: "https://github.com/ahmadsaad2/sayyarti_project"
  },
  {
    id: "palindrome-checker",
    title: "Palindrome Checker",
    category: "web",
    shortDescription: "Simple web app to check if a word or number is a palindrome.",
    description:
      "A small web project that checks whether the entered text or number is a palindrome. Built with HTML, CSS, and JavaScript, the app ignores punctuation, spaces, and letter case to provide accurate results. This project demonstrates DOM manipulation, string handling, and basic frontend logic.",
    techStack: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    image:
      "https://private-user-images.githubusercontent.com/137313539/306743678-582055bf-1e60-4bbf-ad8e-621a877f5610.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk4NjE1MTMsIm5iZiI6MTc1OTg2MTIxMywicGF0aCI6Ii8xMzczMTM1MzkvMzA2NzQzNjc4LTU4MjA1NWJmLTFlNjAtNGJiZi1hZDhlLTYyMWE4NzdmNTYxMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAwN1QxODIwMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNTcwMjQ2MzVlNTE5Y2YyMjNkMTU4MjVkM2IwNDJhZTNkYzNjNTA5MTcxNDQwODU0ZmEwYmQ0MzVjYzRmNmY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.cqYFtWG8d6S3rVq3jERi9MTsAautmvIBgg79VthrOCM",
    githubUrl: "https://github.com/ahmadsaad2/Palindrome-Checker-js-1"
  },



  {
    id: "kfc-restaurant-website",
    title: "KFC Restaurant Website",
    category: "web", 
    shortDescription: "Dynamic restaurant website built using HTML, CSS, PHP, and JavaScript.",
    description:
      "Created a dynamic restaurant website for KFC using PHP for backend logic, JSON for menu data, and JavaScript for interactivity. Designed a fully responsive layout with HTML and CSS, providing a smooth user experience for managing orders and displaying menu items. This project improved my backend and front-end integration skills.",
    techStack: ["PHP", "HTML", "CSS", "JavaScript", "JSON"],
    image: "https://api.imghippo.com/files/lsIg6375eQg.png",
    githubUrl: "https://github.com/ahmadsaad2/KFC-restaurant-WebSite"
  },

  {
    id: "image-processing-techniques",
    title: "Image Processing Techniques App",
    category: "Other", 
    shortDescription: "Python desktop app to apply and visualize different image filters.",
    description:
      "Developed a Python GUI app that allows users to apply various image filters like grayscale, edge detection, and adaptive thresholding. Built with Tkinter and OpenCV, it helps visualize effects such as Prewitt, Laplacian, and Gaussian filters in real time. The tool also supports user-defined filters and image saving options.",
    techStack: ["Python", "Tkinter", "NumPy", "OpenCV"],
    image: "https://private-user-images.githubusercontent.com/137313539/293092481-b3a6d8e5-25ba-4abb-91e1-1bd1bcba6552.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk4NjI0MTEsIm5iZiI6MTc1OTg2MjExMSwicGF0aCI6Ii8xMzczMTM1MzkvMjkzMDkyNDgxLWIzYTZkOGU1LTI1YmEtNGFiYi05MWUxLTFiZDFiY2JhNjU1Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAwN1QxODM1MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MzRkNGQxYzg2NWNlNzFjNDFhNjJiODllOTU4ZjM5NDNlZGY5ODc4NjgwYTY1NjVmNWM4ZTI3YjMwMzIyOGM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AMxmzIml59B9qbW0VsqBmKDP_vVc7guaUAJNaTTZBrc",
    githubUrl: "https://github.com/ahmadsaad2/Image-processing-techniques"
  },

  {
    id: "snake-game",
    title: "Snake Game",
    category: "Other", 
    shortDescription: "Classic Snake game recreated using HTML, CSS, and JavaScript.",
    description:
      "A fun web-based Snake game where the player controls a snake to eat food and grow longer. Built with HTML, CSS, and JavaScript, featuring responsive design and score tracking using local storage. Simple controls with arrow keys and smooth gameplay logic for all screen sizes.",
    techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
    image: "https://private-user-images.githubusercontent.com/137313539/306591007-578badc8-4744-41bf-89dd-18a1811ac744.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk4NjI0MzcsIm5iZiI6MTc1OTg2MjEzNywicGF0aCI6Ii8xMzczMTM1MzkvMzA2NTkxMDA3LTU3OGJhZGM4LTQ3NDQtNDFiZi04OWRkLTE4YTE4MTFhYzc0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAwN1QxODM1MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYzhjMWFlNzkzNTQ4MWE0OGU0OGI2MTBkYWM4MDVlNmZiNDkwYTNlZDcwNzg5MDQxOTg4Y2Q1MTk4OWMxYTBkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.qW1vL7-G6cefMYMvfb0aWzhuCbat1akYBncRI6ID1BQ",
    githubUrl: "https://github.com/ahmadsaad2/Snake-game-Js-2"
  }
];









export const experiences: Experience[] = [
  {
    id: "microworks",
    company: "MicroWorks for Computer",
    position: "Technical & Sales Support",
    duration: "2017 - 2021",
    description: "Helped customers troubleshoot software and hardware issues. Provided training on new systems and technologies. Maintained high customer satisfaction rates through effective problem-solving and communication."
  },
  {
    id: "udacity",
    company: "Udacity (Remote)",
    position: "Data Analyst Intern",
    duration: "2022-2023",
    description: "Cleaned and preprocessed large datasets using Python. Built predictive models and prepared comprehensive reports. Gained experience in data visualization and statistical analysis."
  },
   {
    id: "yummy-app",
    company: "Yummy App",
    position: "Data Entry Specialist",
    duration: "2023 ",
    description: "Maintained accurate restaurant and menu data in SQL databases. Ensured data quality and consistency across multiple platforms. Processed high volumes of data with attention to detail."
  },
  {
    id: "oppotrain",
    company: "OppoTrain Academy",
    position: "Software Engineering Intern",
    duration: "2025",
    description: "Worked on ASP.NET backend development and system design. Gained hands-on experience with Agile methodologies and version control using Git. Collaborated on multiple projects in a team environment."
  },
  {
  id: "nezamacademy",
  company: "Nezam  Academy",
  position: "Software Testing Bootcamp",
  duration: "2025",
  description: "Completed a comprehensive software testing bootcamp covering manual and automated testing for API, mobile, and web applications. Gained hands-on experience with tools like JIRA, Postman, Selenium, Katalon Studio, Playwright, and SQL. Learned Agile testing, performance testing, test automation, and freelance testing practices."
}
,
{
  id: "datacamp_ai",
  company: "DataCamp",
  position: "Associate AI Engineer for Data Scientists (Bootcamp)",
  duration: "Sep 2025 – Present",
  description: "Completed a hands-on bootcamp focused on AI and machine learning for data scientists. Gained practical experience in building and deploying AI models, data preprocessing, and applying machine learning techniques to real-world datasets."
}

  
];

export const education: Education[] = [
 {
  id: "najah-university",
  degree: "B.Sc. in Computer Engineering",
  institution: "An-Najah National University",
  duration: "2020 – 2025",
  description: "Studied computer hardware and software together-from building circuits and systems to programming apps and networks. Learned how computers work inside and out through labs, projects, and real-world problem solving."
},
  {
  id: "nablus-industrial-secondary-school",
  degree: "Secondary School Diploma in Computer Science",
  institution: "Nablus Industrial Secondary School",
  duration: "2018 – 2020",
  description: "Completed a two-year specialized secondary education program with a focus on computer science."
},
  {
    id: "amideast",
    degree: "General & Business English",
    institution: "Amideast Education Abroad",
    duration: "2024",
    description: "120-hour intensive program focusing on business communication and professional English skills."
  }
];

export const certificates: Certificate[] = [
  
  {
    id: "software-testing",
    title: "Software Testing Bootcamp",
    provider: "Udemy",
    year: "2025",
    image: "https://api.imghippo.com/files/rxQ9046zc.jpg",
    credentialUrl: "https://api.imghippo.com/files/rxQ9046zc.jpg"
  },
  {
  id: "agile-project-management",
  title: "Agile Project Management: Agile, Scrum, Kanban & XP",
  provider: "Udemy",
  year: "2025",
  image: "https://api.imghippo.com/files/Pg7507no.jpg",
  credentialUrl: "https://api.imghippo.com/files/Pg7507no.jpg"
},
{
  id: "data-analyst-nanodegree",
  title: "Data Analyst Nanodegree Program Completion",
  provider: "Udacity",
  year: "2024",
  image: "https://api.imghippo.com/files/plO5420I.jpg",
  credentialUrl: "https://api.imghippo.com/files/plO5420I.jpg"
}
,
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    year: "2024",
    image: "https://api.imghippo.com/files/gKnu3679wRE.PNG",
    credentialUrl: "https://api.imghippo.com/files/gKnu3679wRE.PNG"
  },
  {
    id: "javascript-algorithms",
    title: "JavaScript Algorithms & Data Structures",
    provider: "freeCodeCamp",
    year: "2024",
    image: "https://api.imghippo.com/files/DNgC1009qM.png",
    credentialUrl: "https://api.imghippo.com/files/DNgC1009qM.png"
  },
  {
    id: "nxl-youth-empowerment",
    title: "NxL Youth Empowerment Program",
    provider: "L’Oréal MENA & Nestlé MENA",
    year: "2023",
    image: "https://api.imghippo.com/files/wfx7064KVE.jpeg",
    credentialUrl: "https://api.imghippo.com/files/wfx7064KVE.jpeg"
  },
  {
  id: "american-english-scholarship",
  title: "American English Scholarship Program Completion",
  provider: "Amideast",
  year: "2024",
  image: "https://api.imghippo.com/files/vIo8996ukQ.jpg",
  credentialUrl: "https://api.imghippo.com/files/vIo8996ukQ.jpg"
},
  {
    id: "startups-without-borders-meta",
    title: "Training Program with Startups Without Borders & Partnership with Meta",
    provider: "Startups Without Borders",
    year: "2022",
    image: "https://api.imghippo.com/files/QM6646uIs.png",
    credentialUrl: "https://api.imghippo.com/files/QM6646uIs.png", 
  },
  {
    id: "digital-analytics",
    title: "Digital Analytics & SEO",
    provider: "Edraak",
    year: "2023",
    image: "https://api.imghippo.com/files/ea1179o.png",
    credentialUrl: "https://api.imghippo.com/files/ea1179o.png"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Fundamentals",
    provider: "Google",
    year: "2023",
    image: "https://api.imghippo.com/files/yU5067fT.JPG",
    credentialUrl: "https://api.imghippo.com/files/yU5067fT.JPG"
  },
  {
    id: "project-management",
    title: "Project Management Foundations",
    provider: "LinkedIn Learning",
    year: "2023",
    image: "https://api.imghippo.com/files/boYq9574xHA.png",
    credentialUrl: "https://api.imghippo.com/files/boYq9574xHA.png"
   
  }
];



export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      "React",
      "Python",
      "Java",
      "JavaScript",
      "C++",
      "PHP",
      "Flutter",
      "Dart",
      "HTML",
      "CSS"
    ]
  },
  
  {
    category: "Testing Types & Techniques",
    items: [
      "Manual Testing",
      "Automation Testing",
      "API Testing",
      "Performance Testing",
      "Mobile App Testing",
      "Black Box Testing",
      "White Box Testing",
      "Regression Testing",
      "Smoke & Sanity Testing",
      "Agile Testing",
      "Bug Reporting & Tracking"
    ]
  },
  {
    category: "Testing & QA Tools",
    items: [
      "Jira",
      "Trello",
      "Qase.io",
      "Zephyr Scale",
      "Postman",
      "Selenium WebDriver",
      "Selenium IDE",
      "Katalon Studio",
      "TestNG",
      "JMeter",
      "BlazeMeter",
      "Playwright"
    ]
  },
  {
    category: "Development & Collaboration Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Node.js",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Agile & Scrum Methodologies"
    ]
  },
   {
    category: "Databases",
    items: [
      "SQL",
      "MySQL",
      "Oracle Database",
      "MongoDB",
      "Excel"
    ]
  },
  {
    category: "Other Skills",
    items: [
      "Troubleshooting",
      "Documentation",
      "Reporting",
      "Problem Solving",
      "Customer Support",
      "Data Analysis",
      "Team Collaboration",
      "Time Management"
    ]
  }
];