import DanceCanvas from './DanceCanvas';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

export default function Intro() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const delay = 5;

    const BlogButton = () => {

        return (
            <a
                href="https://blog.redfrogss.dev"
                type="button"
                className="px-5 py-5 w-[100%] font-mono text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-center"
            >
                Visit my blog
            </a>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-8 md:px-16 lg:px-32 content-center h-[100vh]">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: delay }}
            >
                <div className="hidden lg:flex justify-center items-center h-screen">
                    <DanceCanvas />
                </div>
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ delay: delay }}
                    layout="position"
                >
                    <div className="item-center text-center">
                        <h1 className="text-5xl font-bold font-mono">
                            Jacky FAN
                        </h1>
                        <p className="text-lg font-mono pt-8">
                            A PolyU student studying Computing.
                        </p>
                        <span className="inline-grid grid-cols-4 gap-4 py-8">
                            <span>
                                <SocialIcon url="https://github.com/redfrogsss" bgColor='#f3f4f6' />
                            </span>
                            <span>
                                <SocialIcon url="https://twitter.com/redfrogss" />
                            </span>
                            <span>
                                <SocialIcon url="https://www.linkedin.com/in/jacky-fan-682516190/" />
                            </span>
                            <span>
                                <SocialIcon url="mailto:hello@redfrogss.dev" bgColor='#f3f4f6' />
                            </span>
                            <span className="col-span-4">
                                <BlogButton />
                            </span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}