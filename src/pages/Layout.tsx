import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar.tsx';
import Footer from '../components/Footer.tsx';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <NavBar />
            <motion.main
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Outlet />
            </motion.main>
            <Footer />
        </>
    );
};

export default Layout;