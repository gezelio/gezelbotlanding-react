import React from "react";
import DiscordButton from "@/lib/components/ui/button/discord";

const Landing = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">GezelBot</h1>
                    <h2 className="font-bold text-xl">Is offline for the time being</h2>
                    <p className="py-6">We&apos;re hard at work rebuilding the bot from the ground up and improving our features.</p>
                    <p className="py-6">To stay up to date, we invite you to join our Discord server</p>
                    <DiscordButton />
                </div>
            </div>
        </div>
    );
};

export default Landing;
