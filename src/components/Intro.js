import DanceCanvas from './DanceCanvas';
import { SocialIcon } from 'react-social-icons';
import FadeIn from 'react-fade-in';

export default function Intro() {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 px-8 md:px-16 lg:px-32 content-center h-[100vh]">
            <div class="hidden lg:flex justify-center items-center h-screen">
                <DanceCanvas />
            </div>
            <div class="flex justify-center items-center h-screen">
                <center>
                    <h1 className="text-5xl font-bold font-mono">
                        Jacky FAN
                    </h1>
                    <p className="text-lg font-mono pt-8">
                        A PolyU student studying Computing.
                    </p>
                    <span class="inline-grid grid-cols-3 gap-4 py-8">
                        <span>
                            <SocialIcon url="https://github.com/redfrogsss" bgColor='#f3f4f6' />
                        </span>
                        <span>
                            <SocialIcon url="https://twitter.com/redfrogss" />
                        </span>
                        <span>
                            <SocialIcon url="mailto:hello@redfrogss.dev" bgColor='#f3f4f6' />
                        </span>
                    </span>
                </center>
            </div>
        </div>
    );
}