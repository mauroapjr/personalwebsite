import * as React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

export const SocialButton = ({ icon, link }) => {
  const Icon = ({ iconName }) => {
    switch (icon) {
      case "GitHub":
        return <FaGithub />;
      case "LinkedIn":
        return <FaLinkedin />;
      default:
        <FaGithub />;
        break;
    }
  };

  return (
    <a
      className="bg-gray-200 p-2 border-2 border-gray-600 text-gray-600 rounded-md text-[20px]"
      href={link}
    >
      <Icon iconName={icon} />
    </a>
  );
};
