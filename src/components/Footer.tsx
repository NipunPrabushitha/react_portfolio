import { Link } from "react-router-dom";

const Footer = () => {
    const socialLinks = [
        { name: "GitHub", icon: "fab fa-github", url: "https://github.com/NipunPrabushitha" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/nipun-prabushitha" },
        { name: "Facebook", icon: "fab fa-facebook-f", url: "https://facebook.com/nipun.prabushitha" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/nipun.prabushitha" }
    ];

    return (
        <footer className="bg-black text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Nipun Prabushitha</h3>
                        <p className="text-gray-400">
                            Full Stack Developer creating digital experiences through clean code and thoughtful design.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 text-xl transition-colors duration-300"
                                    aria-label={social.name}
                                >
                                    <i className={`${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/NipunPrabushitha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    My Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start">
                                <i className="fas fa-envelope mt-1 mr-3"></i>
                                <a href="mailto:nprabushitha@example.com" className="hover:text-cyan-400 transition-colors duration-300">
                                    nprabushitha@example.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                                <a href="tel:+94786054430" className="hover:text-cyan-400 transition-colors duration-300">
                                    +94 78 605 4430
                                </a>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                                <span>Gampaha, Sri Lanka</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe to get updates on my latest projects and articles.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 py-2 rounded-r transition-colors duration-300"
                                aria-label="Subscribe"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Nipun Prabushitha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;