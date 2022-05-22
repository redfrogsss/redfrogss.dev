import RedStream from "./RedStream";
import SelfRemind from "./SelfRemind";
import AttendanceSystem from "./AttendanceSystem";

export default function Projects() {
    return (
        <div className="px-8 md:px-16 lg:px-32 content-center">
            <h1 className="text-5xl font-bold font-mono py-16">Projects</h1>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-mono leading-none text-gray-400 dark:text-gray-500">January 2022 ~ Now</time>
                    <div class="m-4">
                        <SelfRemind />
                    </div>
                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-mono leading-none text-gray-400 dark:text-gray-500">April ~ May 2021</time>
                    <div class="m-4">
                        <AttendanceSystem />
                    </div>
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-mono leading-none text-gray-400 dark:text-gray-500">January 2021 ~ April 2021</time>
                    <div class="m-4">
                        <RedStream />
                    </div>
                </li>
            </ol>
        </div>
    );

}