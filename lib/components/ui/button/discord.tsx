import React from "react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

const DiscordButton = () => {
    return (
        <a href="https://gezel.io/discord" className="btn bg-[#5765F2] border-0 p-10 content-center">
            <DiscordLogoIcon className="text-white h-14 w-14" />
        </a>
    );
};

export default DiscordButton;
