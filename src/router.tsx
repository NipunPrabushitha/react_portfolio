import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AnimatePresence mode="wait">
                <Layout />
            </AnimatePresence>
        ),
        children: [
            { index: true, element: <HomePage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <ContactPage /> },
        ]
    }
]);

export default router;