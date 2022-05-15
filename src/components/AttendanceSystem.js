export default function AttendanceSystem() {
    return (
        <>
            <div class="grid grid-cols-2 bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div class="pl-2">
                    <h1 className="text-xl font-bold font-mono">Students Attendance System</h1>
                    <p>
                        <text className="text-bg font-mono pt-4 pr-4">
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
                    <button type="button" class="rounded-full bg-blue-600 px-4 py-4 my-4">Github</button>
                    <button type="button" class="rounded-full bg-blue-600 px-4 py-4 my-4">Github</button>
                </div>
                <div>
                    <img class="object-cover w-[100%]" src="/img/sans.png"></img>
                </div>
            </div>
        </>
    );
}