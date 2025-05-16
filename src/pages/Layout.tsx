import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        // Force reflow to ensure animations trigger
        document.body.getBoundingClientRect();
    }, [location.key]);

    return (
        <>
            <NavBar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
            <Footer />
        </>
    );
};

export default Layout;