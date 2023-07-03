import React from "react";
import * as FaIcons from 'react-icons/fa';

const DiscordButton = () => {
    return (
        <a href="https://gezel.io/discord" className="btn bg-[#5765F2] border-0 p-10 content-center">
            <FaIcons.FaDiscord className="text-white h-14 w-14" />
        </a>
    );
};

export default DiscordButton;
