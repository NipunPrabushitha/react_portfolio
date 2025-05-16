import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PageLoader = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={isLoading ? {} : { opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {!isLoading && children}
        </motion.div>
    );
};

export default PageLoader;