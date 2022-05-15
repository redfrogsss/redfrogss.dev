import RedStream from "./RedStream";
import SelfRemind from "./SelfRemind";
import AttendanceSystem from "./AttendanceSystem";

export default function Projects() {
    return (
        <div className="px-64 content-center h-[100vh]">
            <h1 className="text-5xl font-bold font-mono py-16">Projects</h1>
            <div class="pb-4">
                <SelfRemind />
            </div>
            <div class="py-4">
                <RedStream />
            </div>
            <div class="py-4">
                <AttendanceSystem />
            </div>
        </div>
    );

}