import { Link } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const HomePage = () => {
    const socialLinks = [
        { name: "GitHub", icon: "fab fa-github", url: "https://github.com/NipunPrabushitha" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/nipun-prabushitha" },
        { name: "Facebook", icon: "fab fa-facebook-f", url: "https://facebook.com/nipun.prabushitha" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/nipun.prabushitha" }
    ];

    return (
        <AnimatePresence>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-cyan-400 mix-blend-overlay"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-cyan-400 mix-blend-overlay"
                />

                <div className="max-w-7xl mx-auto text-center relative">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Hi, I'm <span className="text-cyan-400">Nipun Prabushitha</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-medium mb-8 text-gray-300"
                    >
                        Full Stack Developer • UI/UX Specialist
                    </motion.h2>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center space-x-6 mb-10"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 text-2xl transition-colors duration-300"
                                aria-label={social.name}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className={`${social.icon}`} />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.a
                            href="https://github.com/NipunPrabushitha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-medium transition duration-300"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services/Expertise Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    >
                        What I Do
                    </motion.h2>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: '💻',
                                title: 'Web Development',
                                description: 'Building responsive, modern websites with React, Next.js and Tailwind CSS.'
                            },
                            {
                                icon: '📱',
                                title: 'Mobile Apps',
                                description: 'Creating cross-platform mobile applications using React Native.'
                            },
                            {
                                icon: '🎨',
                                title: 'UI/UX Design',
                                description: 'Designing intuitive user interfaces with Figma and Adobe XD.'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {[1, 2].map((project) => (
                            <motion.div
                                key={project}
                                variants={item}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-64 bg-gray-300 dark:bg-gray-700 overflow-hidden">
                                    <motion.img
                                        src={`https://source.unsplash.com/random/600x400/?project=${project}`}
                                        alt="Project"
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        to={`/project/${project}`}
                                        className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-medium transition duration-300"
                                    >
                                        View Project
                                    </Link>
                                </div>
                                <div className="p-6 bg-white dark:bg-gray-700">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Project {project} Title</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Brief description of the project and technologies used.</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center mt-10"
                    >
                        <a
                            href="https://github.com/NipunPrabushitha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 rounded-lg transition duration-300 group"
                        >
                            View All Projects
                            <svg
                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    >
                        What Clients Say
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                    >
                        <p className="text-xl italic text-gray-600 dark:text-gray-300 mb-6">
                            "Working with Nipun was an absolute pleasure. His attention to detail and technical expertise resulted in a website that exceeded our expectations."
                        </p>
                        <div className="flex items-center justify-center">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="h-12 w-12 rounded-full overflow-hidden border-2 border-cyan-500 mr-4"
                            >
                                <img
                                    src="https://avatars.githubusercontent.com/u/123934004?v=4"
                                    alt="Nipun Prabushitha"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="text-left">
                                <h4 className="font-medium text-gray-800 dark:text-white">Nipun Nirmal</h4>
                                <p className="text-gray-500 dark:text-gray-400">CEO, Solve Tech</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
        </AnimatePresence>
    );
};

export default HomePage;