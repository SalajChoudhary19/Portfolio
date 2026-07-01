"use client";

import { PortfolioHeroBackground } from "@/components/backgrounds/PortfolioHeroBackground";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0, perspective: 1000 },
    visible: {
      opacity: 1,
      perspective: 1000,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], // Custom ease out
      },
    },
  };

  const highlightClass = "text-white font-medium transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] cursor-pointer inline-block";

  return (
    <main className="min-h-screen bg-black">
      <PortfolioHeroBackground>
        <div className="flex flex-col items-center justify-center min-h-screen p-6 py-24 relative z-30">
          <motion.div 
            className="max-w-4xl w-full mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-12 text-center tracking-tight drop-shadow-2xl"
            >
              About Me
            </motion.h1>
            
            <div className="text-lg md:text-xl text-white/70 space-y-4 text-left leading-relaxed font-light">
              {[
                `I'm <strong class="${highlightClass}">Salaj Choudhary</strong>, a passionate Information Technology undergraduate at <strong class="${highlightClass}">SRM Institute of Science and Technology, Trichy</strong>, currently pursuing my B.Tech with a strong academic record and a deep interest in building impactful software solutions. I am driven by curiosity, continuous learning, and the challenge of transforming complex ideas into practical and scalable applications.`,
                `My technical expertise spans across multiple domains of software development, including <strong class="${highlightClass}">full-stack web development, mobile application development, database management, cloud technologies, and machine learning</strong>. I enjoy working on both the frontend and backend, enabling me to design complete end-to-end solutions that are efficient, user-friendly, and scalable.`,
                `I have experience working with programming languages such as <strong class="${highlightClass}">Java, Python, JavaScript, C, and C++</strong>, and I regularly use modern development frameworks and technologies including <strong class="${highlightClass}">React.js, React Native, Node.js, Spring Boot, HTML, CSS, Tailwind CSS, and Bootstrap</strong>. On the data side, I work with <strong class="${highlightClass}">MySQL, MongoDB, and Firebase Realtime Database</strong>, allowing me to build robust applications capable of handling real-time and large-scale data requirements.`,
                `Beyond application development, I have explored the field of <strong class="${highlightClass}">Machine Learning</strong> using tools such as <strong class="${highlightClass}">scikit-learn, Pandas, and NumPy</strong>, applying data-driven approaches to solve practical problems and uncover meaningful insights. My interest in technology extends to cloud platforms and development tools, where I actively utilize <strong class="${highlightClass}">AWS, Git, GitHub, Expo, and Vite</strong> to streamline development workflows and deploy scalable solutions.`,
                `I believe that great software is not just about writing code—it is about understanding problems, designing thoughtful solutions, and delivering experiences that create real value for users. Whether I am developing a web application, optimizing system performance, working with databases, or exploring emerging technologies, I strive to maintain high standards of quality, efficiency, and innovation in everything I build.`,
                `As a developer, I am constantly seeking opportunities to learn, collaborate, and push my boundaries. I enjoy taking on challenging projects that expand my technical knowledge, strengthen my problem-solving abilities, and help me grow into a well-rounded software engineer capable of contributing to impactful and meaningful technological solutions.`
              ].map((text, idx) => (
                <motion.p 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-5 rounded-2xl border border-transparent hover:border-white/10 cursor-default transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </PortfolioHeroBackground>
    </main>
  );
}
