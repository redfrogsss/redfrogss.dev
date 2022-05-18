import RedstreamPic from "../img/redstream.png"

export default function RedStream() {
    return (
        <>
            <div class="grid grid-cols-2 bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div class="pl-2">
                    <h1 className="text-xl font-bold">RedStream</h1>
                    <p>
                        <text className="text-lg pt-4 pr-4">
                            a Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.
                            <ul class="list-disc pl-8">
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
                        </text>
                    </p>
                    <button type="button" class="rounded-full bg-blue-600 px-4 py-4 my-4">Github</button>
                </div>
                <div>
                    <img class="object-cover w-[100%]" src={RedstreamPic}></img>
                </div>
            </div>
        </>
    );
}