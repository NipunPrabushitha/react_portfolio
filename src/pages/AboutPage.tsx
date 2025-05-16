import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from "../components/PageLoader.tsx";

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

const AboutPage = () => {
    const location = useLocation();
    const skills = [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "Database", level: 80 },
        { name: "UI/UX", level: 85 }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <PageLoader>
        <AnimatePresence>
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden"
            >
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden">
                    {/* Animated background elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-cyan-400 mix-blend-overlay"
                    />

                    <div className="max-w-7xl mx-auto text-center relative">
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            About <motion.span
                            className="text-cyan-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Me
                        </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl font-medium mb-8 text-gray-300"
                        >
                            Developer | Student | Tech Enthusiast
                        </motion.p>
                    </div>
                </section>

                {/* About Content */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        {/* Personal Info */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                                    Who I Am
                                </h2>
                                <div className="flex items-start mb-6">
                                    <div className="flex-shrink-0 mr-6">
                                        <motion.div
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500"
                                        >
                                            <img
                                                src="https://avatars.githubusercontent.com/u/156079918?v=4"
                                                alt="Nipun Prabushitha"
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Nipun Prabushitha</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-2">Software Development Student</p>
                                        <p className="text-gray-600 dark:text-gray-400">Colombo, Sri Lanka</p>
                                    </div>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 dark:text-gray-300"
                                >
                                    I'm currently pursuing my Higher Diploma in Software Engineering at IJSE (Institute of Java and Software Engineering) from 2023-2025.
                                    Passionate about building innovative solutions and expanding my knowledge in modern technologies.
                                </motion.p>
                            </motion.div>

                            {/* Skills */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                                    My Skills
                                </h2>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={item}
                                            className="group"
                                        >
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                                <motion.div
                                                    className="bg-cyan-500 h-2.5 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: index * 0.1 }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Education */}
                        <div className="space-y-8">
                            {/* School Education */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                                    Education
                                </h2>

                                {/* IJSE */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="border-l-2 border-cyan-500 pl-6 relative mb-8"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        Higher Diploma in Software Engineering
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                                        Institute of Java and Software Engineering (IJSE) • 2023 - 2025
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Specializing in Java, Python, Database Systems, and Web Technologies.
                                    </p>
                                </motion.div>

                                {/* Secondary School */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="border-l-2 border-cyan-500 pl-6 relative mb-8"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        Secondary Education
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                                        Bandaranayake Central College, Veyangoda
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Completed GCE Advanced Level in Mathematics Stream.
                                    </p>
                                </motion.div>

                                {/* Primary School */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="border-l-2 border-cyan-500 pl-6 relative"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        Primary Education
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                                        Horagasmulla Primary School
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Foundation of my educational journey.
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Contact CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                                    Want to know more?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Feel free to reach out for academic collaborations or projects.
                                </p>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to="/contact"
                                        className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition duration-300"
                                    >
                                        Contact Me
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </AnimatePresence>
        </PageLoader>
    );
};

export default AboutPage;