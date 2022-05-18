import SelfRemindPic from "../img/selfremind.png"

export default function SelfRemind() {
    return (
        <>
            <div class="grid grid-cols-2 bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
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
                    <button type="button" class="rounded-full bg-blue-600 px-4 py-4 my-4">Github</button>
                </div>
                <div>
                    <img class="object-cover w-[100%]" src={SelfRemindPic}></img>
                </div>
            </div>
        </>
    );
}