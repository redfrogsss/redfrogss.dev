import RedstreamPic from "../img/redstream.png"
import RedstreamPic1 from "../img/redstream1.png"
import RedstreamPic2 from "../img/redstream2.png"
import RedstreamPic3 from "../img/redstream3.png"
import RedstreamPic4 from "../img/redstream4.png"
import RedstreamPic5 from "../img/redstream5.png"
import RedstreamPic6 from "../img/redstream6.png"
import GithubButton from "./GithubButton";

export default function RedStream() {

    const ButtonOnClickHandler = (target = "") => {
        var path = "";

        switch (target) {
            case "Github":
                path = "https://github.com/redfrogsss/RedStream";
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
                            <img src={RedstreamPic1} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={RedstreamPic2} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={RedstreamPic3} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 4 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={RedstreamPic4} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 5 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={RedstreamPic5} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 6 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={RedstreamPic6} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="2"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="3"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="4"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="5"></button>
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
                    <img class="object-cover w-[100%]" src={RedstreamPic} alt="Screenshot of RedStream"></img>
                </div>
                <div class="pl-2 text-lg px-8">
                    <h1 className="text-2xl font-bold font-mono">RedStream</h1>
                    <div className="my-2.5">
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium font-mono text-blue-500 dark:text-white">Development Progress</span>
                            <span class="text-sm font-medium font-mono text-blue-500 dark:text-white">100%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full w-[100%]"></div>
                        </div>
                    </div>
                    <text className="pt-4 pr-4 font-mono">
                        a Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.
                    </text>
                    <ul class="list-disc pl-8 font-mono">
                        <li>
                            Movie Streaming
                        </li>
                        <li>
                            Subscription Membership
                        </li>
                        <li>
                            Comment Section
                        </li>
                    </ul>
                    <GithubButton onClick={() => { ButtonOnClickHandler("Github") }}>Github</GithubButton>
                </div>
                <div class="hidden lg:flex px-8">
                    {/* <img class="object-cover w-[100%]" src={RedstreamPic} alt="Screenshot of RedStream"></img> */}
                    <Carousel />
                </div>
            </div>
        </>
    );
}