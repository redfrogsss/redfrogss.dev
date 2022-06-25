import { motion } from "framer-motion";

const Loading = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const delay = 3;

    return (
        <div className="fixed w-screen h-screen flex justify-center items-center bg-gray-900">
            <motion.div
                initial="visible"
                animate="hidden"
                variants={variants}
                transition={{ delay: delay }}
            >
                <h2>Hello World</h2>
            </motion.div>
        </div>
    )
}

export default Loading;