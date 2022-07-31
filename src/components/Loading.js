import { motion } from "framer-motion";

const Loading = ({ delayMs = 5000 }) => {

    // varients for motion.
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    // delay in seconds
    const delay = (delayMs / 1000) - 1;

    return (
        <div className="fixed w-screen h-screen flex justify-center items-center bg-gray-900">
            <motion.div
                initial="visible"
                animate="hidden"
                variants={variants}
                transition={{ delay: delay }}
            >
                <div className="flex items-center justify-center space-x-2 animate-pulse">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
                <div className="mt-2 animate-pulse font-mono">Loading...</div>
            </motion.div>
        </div>
    )
}

export default Loading;