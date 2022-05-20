import SansPic from "../img/sans.png"

export default function AttendanceSystem() {

    const ButtonOnClickHandler = (target = "") => {
        var path = "";

        switch (target) {
            case "Express":
                path = "https://github.com/redfrogsss/attendance-system-nodejs";
                break;
            case "Java":
                path = "https://github.com/redfrogsss/attendance-system-java";
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
                    <img class="object-cover w-[100%]" src={SansPic} alt="Screenshot of Student Attendance Management System"></img>
                </div>
                <div class="pl-2">
                    <h1 className="text-2xl font-bold">Students Attendance System</h1>
                    <p>
                        <text className="text-lg pt-4 pr-4">
                            a Student Attendance Management System built with ExpressJS / Java GlassFish, Bootstrap, JQuery and MySQL.
                            <ul class="list-disc pl-8">
                                <li>
                                    Easy Attendance Management
                                </li>
                                <li>
                                    Beautiful Interface
                                </li>
                                <li>
                                    Teacher / Student Login
                                </li>
                            </ul>
                        </text>
                    </p>
                    <span class="inline-grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                        <span>
                            <button type="button" class="rounded-full bg-blue-600 px-4 py-4 mb-2" onClick={() => { ButtonOnClickHandler("Express") }}>Github for ExpressJS version</button>
                        </span>
                        <span>
                            <button type="button" class="rounded-full bg-blue-600 px-4 py-4 mb-2" onClick={() => { ButtonOnClickHandler("Java") }}>Github for Java version</button>
                        </span>
                    </span>
                </div>
                <div class="hidden lg:flex">
                    <img class="object-cover w-[100%]" src={SansPic} alt="Screenshot of Student Attendance Management System"></img>
                </div>
            </div>
        </>
    );
}