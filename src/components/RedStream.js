import RedstreamPic from "../img/redstream.png"
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
                    <img class="object-cover w-[100%]" src={RedstreamPic} alt="Screenshot of RedStream"></img>
                </div>
            </div>
        </>
    );
}