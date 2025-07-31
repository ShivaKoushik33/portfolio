
import Polychat from "../assets/image.png";
import outing from "../assets/outing.png";
import pcos from "../assets/pcos.png";
import cal from "../assets/cal.png";
import stock from "../assets/stock.png";
export const projectsData = {
  webApps: [
    {
      title: "PolyChat",
      description: "Language exchange platform where users create profiles with native/learning languages,send friend requests, and connect via instant messaging, voice, and video calls.",
      github: "https://github.com/ShivaKoushik33/PolyChat",
      live: "https://polychat-jczd.onrender.com/",
      image: Polychat,
      technologies: ["React", "Node.js", "MongoDB","Streamify","Tanstack","DaisyUI"]
    },
    // Add more web applications...
    {
        title: "Campus Outing System",
        description: "Outing request portal with role-based access control and organizational email authentication, allowing students to submit and track real-time outing requests.",
        github: "https://github.com/ShivaKoushik33/Outing-Portal-Backend.git",
        live: "https://outing-portal-frontend.vercel.app/",
        image: outing,
        technologies: ["React", "Node.js", "MongoDB","Express"]
      },
      {
        title: "Stock Data ANalysis",
        description: "A MERN-based stock analyzer that calculates technical indicators like SMA, EMA,RSI,MACD indicators and provide insights on stock trends.",
        github: "https://github.com/ShivaKoushik33/Real-Time-Stock-Data-Analyze.git",
        image: stock,
        technologies: ["React", "Node.js", "Express","YFinance"]
      }
  ],
  
  mlProjects: [
    {
      title: "PCOS Risk Analysiss",
      description: "A web-based PCOS prediction app using a questionnaire-driven ML model to calculate probability based on user inputs and symptoms",
      github: "https://github.com/ShivaKoushik33/PCOS_Backend",
      notebook: "https://pcos.vercel.app",
       image: pcos,
      technologies: ["Python", "React", "Node.js","Express"]
    },
    {
        title: "Food Recognition System",
        description: "Indian cuisine recognizer using YOLO, trained on 35,000+ images to detect dishes and estimate calories.",
        github: "https://github.com/ShivaKoushik33/Calorie-tracker",
        image: cal,
        technologies: ["Python", "Yolo","React", "Node.js", "MongoDB","Express"]
      },
      
    // Add more ML projects...
  ]
};
