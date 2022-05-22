import SelfRemindPic from "../img/selfremind.png"
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

    return (
        <>
            <div class="grid grid-cols-1 lg:grid-cols-2 p-6 bg-slate-800 rounded-lg border border-slate-400 shadow-md">
                <div class="flex lg:hidden">
                    <img class="object-cover w-[100%]" src={SelfRemindPic} alt="Screenshot of SelfRemind"></img>
                </div>
                <div class="pl-2">
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
                <div class="hidden lg:flex">
                    <img class="object-cover w-[100%]" src={SelfRemindPic} alt="Screenshot of SelfRemind"></img>
                </div>
            </div>
        </>
    );
}