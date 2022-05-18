import RedstreamPic from "../img/redstream.png"

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
            <div class="grid grid-cols-1 lg:grid-cols-2 bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div class="flex lg:hidden">
                    <img class="object-cover w-[100%]" src={RedstreamPic} alt="Screenshot of RedStream"></img>
                </div>
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
                    <button type="button" class="rounded-full bg-blue-600 px-4 py-4 my-4" onClick={()=>{ButtonOnClickHandler("Github")}}>Github</button>
                </div>
                <div class="hidden lg:flex">
                    <img class="object-cover w-[100%]" src={RedstreamPic} alt="Screenshot of RedStream"></img>
                </div>
            </div>
        </>
    );
}