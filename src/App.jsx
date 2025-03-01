import { 
  FaGithub, FaLinkedin, FaTwitter, FaUser, FaCode, 
  FaProjectDiagram, FaLink, FaEnvelope, FaReact, 
  FaNodeJs, FaDatabase, FaCss3Alt
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiNotion 
} from 'react-icons/si';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import './index.css';
import { 
   FaXTwitter, FaWhatsapp, FaChevronRight, FaChevronLeft 
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import resume from './assets/shiva.pdf';
import { projectsData } from './data/projects';
import fontBlack from './assets/fontblack.png';  // Add at top with other imports
import fontWhite from './assets/fontwhite.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // For showing success/error messages
  const form = useRef();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm(
      'service_vgt8osc', // Replace with your EmailJS service ID
      'template_t9ogd2n', // Replace with your EmailJS template ID
      form.current,
      'uYP_mQwZ-YB8N9LmO' // Replace with your EmailJS public key
    )
      .then((result) => {
        setFormStatus('success');
        form.current.reset();
        setTimeout(() => setFormStatus(''), 5000); // Clear status after 5 seconds
      }, (error) => {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      });
  };

  const ScrollContainer = ({ children }) => {
    return (
      <div
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 px-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
        <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 
              className="text-4xl md:text-5xl "
            >
              PSK
            </h1>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={toggleDarkMode}
            className="ml-4 px-4 py-2 rounded-full bg-opacity-10 dark:bg-opacity-10 border transition-all duration-300 hover:bg-opacity-20
              dark:border-white dark:border-opacity-10 dark:bg-black
              border-black border-opacity-20 bg-white"
          >
            {darkMode ? 'Light' : 'Dark'}
          </motion.button>
        </header>

        <nav className="fixed bottom-0 left-0 right-0 flex justify-center items-center py-6 z-50 ">
          <div className="glass flex justify-around items-center w-[300px] px-8 py-4 mx-auto">
            <motion.a 
              href="#me" 
              className="text-lg nav-icon" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser />
            </motion.a>
            <motion.a 
              href="#technologies" 
              className="text-lg nav-icon" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-lg nav-icon" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaProjectDiagram />
            </motion.a>
            <motion.a 
              href="#social-links" 
              className="text-lg nav-icon" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLink />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-lg nav-icon" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </nav>

        <main className="p-4 pt-24 md:pt-20">
          {/* About Me Section */}
          <section id="me" className="my-14 relative ">
            <motion.h2 
              className="text-2xl font-thin uppercase tracking-wider mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="glassmorphism p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg font-thin leading-relaxed text-center">
              I’m Shiva Koushik, a Full Stack Developer currently pursuing a B.Tech in Computer Science with a strong focus on development. Passionate about building secure and scalable applications, I specialize in both front-end and back-end development using modern technologies. Always eager to learn, I enjoy solving complex problems and exploring new challenges in tech.


              </p>
            </motion.div>
          </section>

          <section className="my-16 relative">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a
                href={resume}
                className="group relative glassmorphism px-8 py-4 flex items-center gap-3 hover:bg-white/5 dark:hover:bg-black/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download="ShivaKoushik_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                <span className="font-thin">Download CV</span>
              </motion.a>
            </motion.div>
          </section>

          {/* Projects Section */}
<section id="projects" className="my-16 relative px-4 md:px-8">
  <motion.h2 
    className="text-2xl font-thin uppercase tracking-wider mb-12 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Projects
  </motion.h2>

  {/* Extensions Category */}
  <div className="mb-16">
    <motion.h3 
      className="text-xl font-thin mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Browser Extensions
    </motion.h3>
    <p className="text-sm font-thin mb-8 opacity-75">
      Custom browser extensions that enhance web browsing experience and productivity.
    </p>
    <ScrollContainer>
      {projectsData.extensions.map((project, index) => (
        <motion.div
          key={`extension-${index}`}
          className="project-card rounded-xl overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-black/10 dark:border-white/10 min-w-[300px] snap-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-6">
            <h4 className="text-lg font-medium mb-2">{project.title}</h4>
            <p className="text-sm font-thin mb-4 opacity-75">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 dark:bg-black/10">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a 
                href={project.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-thin hover:opacity-75 flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
              <a 
                href={project.live}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-thin hover:opacity-75 flex items-center gap-2"
              >
                <FaLink /> Install
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </ScrollContainer>
  </div>

  {/* Web Apps Category */}
  <div className="mb-16">
    <motion.h3 
      className="text-xl font-thin mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Web Applications
    </motion.h3>
    <p className="text-sm font-thin mb-8 opacity-75">
      Full-stack web applications built with modern technologies and best practices.
    </p>
    <ScrollContainer>
      {projectsData.webApps.map((project, index) => (
        <motion.div
          key={`webapp-${index}`}
          className="project-card rounded-xl overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-black/10 dark:border-white/10 min-w-[300px] snap-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={`/project-${index + 1}.jpg`}
            alt={`Project ${index + 1} Preview`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h4 className="text-lg font-medium mb-2">{project.title}</h4>
            <p className="text-sm font-thin mb-4 opacity-75">
              {project.description} 
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 dark:bg-black/10">React</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 dark:bg-black/10">Node.js</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 dark:bg-black/10">MongoDB</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/username/repo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-thin hover:opacity-75 flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
              <a 
                href="https://demo-link.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-thin hover:opacity-75 flex items-center gap-2"
              >
                <FaLink /> Demo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </ScrollContainer>
  </div>

  {/* ML Projects Category */}
  <div className="mb-16">
    <motion.h3 
      className="text-xl font-thin mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Machine Learning Projects
    </motion.h3>
    <p className="text-sm font-thin mb-8 opacity-75">
      Data science and machine learning projects exploring various algorithms and applications.
    </p>
    <ScrollContainer>
      {projectsData.mlProjects.map((project,index) => (
        <motion.div
          key={`ml-${index}`}
          className="project-card rounded-xl overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-black/10 dark:border-white/10 min-w-[300px] snap-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-6">
            <h4 className="text-lg font-medium mb-2">{project.title}</h4>
            <p className="text-sm font-thin mb-4 opacity-75">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 dark:bg-black/10">Python</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 dark:bg-black/10">TensorFlow</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 dark:bg-black/10">Scikit-learn</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/username/repo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-thin hover:opacity-75 flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
              <a 
                href="https://colab.research.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-thin hover:opacity-75 flex items-center gap-2"
              >
                <FaLink /> Notebook
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </ScrollContainer>
  </div>
</section>

          {/* Technologies Section Next */}
          <section id="technologies" className="my-16 relative">
            <motion.h2 
              className="text-2xl font-thin uppercase tracking-wider mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Technologies
            </motion.h2>
            
            <motion.div 
              className="tech-grid grid sm:grid-cols-2 md:grid-cols-4 gap-8 p-8 glassmorphism"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { icon: <FaReact />, name: 'React', color: '#61DAFB' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiExpress />, name: 'Express', color: '#000000' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
                { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
                { icon: <SiNotion />, name: 'Notion', color: '#000000' },
                { icon: <FaDatabase />, name: 'SQL', color: '#336791' },
                { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-card relative flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-sm border border-transparent transition-all duration-300"
                  style={{
                    background: `rgba(255, 255, 255, 0.05)`,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    border: `1px solid ${tech.color}`,
                    boxShadow: `0 0 20px ${tech.color}33`,
                    background: `linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))`
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="icon-wrapper text-5xl mb-4 transition-colors duration-300"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="font-thin tracking-wide uppercase text-sm">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          

          {/* Social Links Section */}
          <section id="social-links" className="my-16 relative">
            <motion.h2 
              className="text-2xl font-thin uppercase tracking-wider mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Connect With Me
            </motion.h2>
            <motion.div 
              className="glassmorphism p-8 flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a 
                href="https://github.com/ShivaKoushik33" 
                className="tech-card p-4 flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-4xl mb-2" />
                <span className="font-thin text-sm">GitHub</span>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/shiva-koushik
                // " 
                className="tech-card p-4 flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-4xl mb-2 text-[#0A66C2]" />
                <span className="font-thin text-sm">LinkedIn</span>
              </motion.a>

              <motion.a 
                href="https://leetcode.com/u/ShivaKoushik/" 
                className="tech-card p-4 flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="text-4xl mb-2 text-[#FFA116]" />
                <span className="font-thin text-sm">LeetCode</span>
              </motion.a>

              <motion.a 
                href="https://x.com/UserFound_11" 
                className="tech-card p-4 flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-4xl mb-2" />
                <span className="font-thin text-sm">X (Twitter)</span>
              </motion.a>

              <motion.a 
                href="https://wa.link/w0s9za" 
                className="tech-card p-4 flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-4xl mb-2 text-[#25D366]" />
                <span className="font-thin text-sm">WhatsApp</span>
              </motion.a>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="my-16 relative">
            <motion.h2 
              className="text-2xl font-thin uppercase tracking-wider mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.h2>
            <motion.div 
              className="glassmorphism p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="user_name"
                    placeholder="Name" 
                    required
                    className="w-full bg-transparent border border-white border-opacity-20 rounded-lg p-3 font-thin focus:outline-none focus:border-opacity-50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="Email" 
                    required
                    className="w-full bg-transparent border border-white border-opacity-20 rounded-lg p-3 font-thin focus:outline-none focus:border-opacity-50"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Message" 
                    rows="4" 
                    required
                    className="w-full bg-transparent border border-white border-opacity-20 rounded-lg p-3 font-thin focus:outline-none focus:border-opacity-50"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="w-full tech-card p-3 font-thin uppercase tracking-wider hover:bg-opacity-10 transition-all duration-300 disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-500 text-center font-thin">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-500 text-center font-thin">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </section>

          {/* Copyright Section */}
          <footer className="mt-24 mb-32 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-thin text-sm opacity-60"
            >
              <p>© {new Date().getFullYear()} Shiva Koushik. All rights reserved.</p>
              <p className="mt-2">Built with React & Tailwind CSS</p>
            </motion.div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
