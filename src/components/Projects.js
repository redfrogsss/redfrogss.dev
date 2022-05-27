import RedStream from "./RedStream";
import SelfRemind from "./SelfRemind";
import AttendanceSystem from "./AttendanceSystem";
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div className="px-4 md:px-16 content-center">
            <h1 className="text-5xl font-bold font-mono py-16">Projects</h1>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-2.5 md:ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-mono leading-none text-gray-400 dark:text-gray-500">January 2022 ~ Now</time>
                    <div class="m-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <SelfRemind />
                        </motion.div>
                    </div>
                </li>
                <li class="ml-2.5 md:ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-mono leading-none text-gray-400 dark:text-gray-500">April ~ May 2021</time>
                    <div class="m-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <AttendanceSystem />
                        </motion.div>
                    </div>
                </li>
                <li class="mb-10 ml-2.5 md:ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-mono leading-none text-gray-400 dark:text-gray-500">January 2021 ~ April 2021</time>
                    <div class="m-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <RedStream />
                        </motion.div>
                    </div>
                </li>
            </ol>
        </div>
    );

}