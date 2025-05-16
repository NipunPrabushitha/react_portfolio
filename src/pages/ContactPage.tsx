import {AnimatePresence, motion} from "framer-motion";
import PageLoader from "../components/PageLoader.tsx";

const ContactPage = () => {
    const socialLinks = [
        { name: "GitHub", icon: "fab fa-github", url: "https://github.com/NipunPrabushitha" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/nipun-prabushitha" },
        { name: "Facebook", icon: "fab fa-facebook-f", url: "https://facebook.com/nipun.prabushitha" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/nipun.prabushitha" }
    ];

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

    return (
        <PageLoader>
        <AnimatePresence>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
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
                        Let's <motion.span
                        className="text-cyan-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Connect
                    </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-medium mb-8 text-gray-300"
                    >
                        Have a project in mind or want to collaborate? Get in touch!
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                            Send Me a Message
                        </h2>
                        <motion.form
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <motion.div variants={item}>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter your name"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={item}>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email Address
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter your email"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={item}>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Subject
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="What's this about?"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={item}>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    id="message"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </motion.div>

                            <motion.div variants={item}>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition duration-300"
                                >
                                    Send Message
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                                Contact Information
                            </h2>
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <motion.div variants={item} className="flex items-start">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex-shrink-0 mt-1 mr-4 text-cyan-500"
                                    >
                                        <i className="fas fa-envelope text-xl"></i>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Email</h3>
                                        <a href="mailto:nprabushitha@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors">
                                            nprabushitha@gmail.com
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={item} className="flex items-start">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex-shrink-0 mt-1 mr-4 text-cyan-500"
                                    >
                                        <i className="fas fa-phone-alt text-xl"></i>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Phone</h3>
                                        <a href="tel:+94786054430" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors">
                                            +94 78 605 4430
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={item} className="flex items-start">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex-shrink-0 mt-1 mr-4 text-cyan-500"
                                    >
                                        <i className="fas fa-map-marker-alt text-xl"></i>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Gampaha, Sri Lanka
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                                Follow Me
                            </h2>
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex space-x-4"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        variants={item}
                                        custom={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white transition-colors duration-300"
                                        aria-label={social.name}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <i className={`${social.icon} text-xl`} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
        </AnimatePresence>
        </PageLoader>
    );
};

export default ContactPage;