import SelfRemindPic1 from "../img/selfremind1.png"
import SelfRemindPic2 from "../img/selfremind2.png"
import GithubButton from "./GithubButton";

export default function SelfRemind() {

    const ButtonOnClickHandler = (target = "") => {
        var path = "";

        switch (target) {
            case "Github":
                path = "https://github.com/redfrogsss/selfremind";
                break;
            default:
                break;
        }

        window.location.href = path;
    }

    const Carousel = () => {
        return (
            <div className="w-[100%]">
                <div id="default-carousel" class="relative" data-carousel="static">
                    <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                        {/* <!-- Item 1 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                            <img src={SelfRemindPic1} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={SelfRemindPic2} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-slate-800 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="hidden">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-slate-800 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="hidden">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div class="grid grid-cols-1 lg:grid-cols-2 p-6 bg-slate-800 rounded-lg border border-slate-400 shadow-md">
                <div class="flex lg:hidden">
                    <img class="object-cover w-[100%]" src={SelfRemindPic1} alt="Screenshot of SelfRemind"></img>
                </div>
                <div class="pl-2 px-8">
                    <h1 className="text-2xl font-bold font-mono">SelfRemind</h1>
                    <div className="my-2.5">
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium font-mono text-blue-500 dark:text-white">Development Progress</span>
                            <span class="text-sm font-medium font-mono text-blue-500 dark:text-white">30%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full w-[30%]"></div>
                        </div>
                    </div>
                    <p>
                        <text className="text-lg pt-4 font-mono">
                            a selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.
                            <ul class="list-disc pl-8">
                                <li>
                                    Easy to Use
                                </li>
                                <li>
                                    Beautiful Interface
                                </li>
                                <li>
                                    Selfhosted
                                </li>
                            </ul>
                        </text>
                    </p>
                    <GithubButton onClick={() => { ButtonOnClickHandler("Github") }}>Github Repo</GithubButton>
                </div>
                <div class="hidden lg:flex px-8">
                    {/* <img class="object-cover w-[100%]" src={SelfRemindPic} alt="Screenshot of SelfRemind"></img> */}
                    <Carousel />
                </div>
            </div>
        </>
    );
}