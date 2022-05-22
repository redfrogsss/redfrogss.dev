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
                    <h1 className="text-2xl font-bold">SelfRemind</h1>
                    <p>
                        <text className="text-lg pt-4">
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
                    <GithubButton onClick={()=>{ButtonOnClickHandler("Github")}}>Github Repo</GithubButton>
                </div>
                <div class="hidden lg:flex">
                    <img class="object-cover w-[100%]" src={SelfRemindPic} alt="Screenshot of SelfRemind"></img>
                </div>
            </div>
        </>
    );
}