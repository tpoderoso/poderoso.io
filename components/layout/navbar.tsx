import { FolderDown, Mail } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export default function NavBar() {
  return (
    <nav className="flex justify-between gap-3 w-full">
      <div>
        <div className="text-purple-400 font-extrabold">
          <Link href={"/"}>Thiago Poderoso</Link>
        </div>
      </div>
      <ul className="flex items-center gap-6">
        <li className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer">
          <Link href={"/articles"}>Artigos</Link>
        </li>
        <li className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer">
          <Link href={"/tips"}>Dicas</Link>
        </li>
        <li className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer">
          <Link href={"/about"}>Sobre</Link>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/downloads"}>
                <FolderDown
                  size={20}
                  className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Downloads</TooltipContent>
          </Tooltip>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tpoderoso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin
              size={18}
              className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/tpoderoso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub
              size={20}
              className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
            />
          </a>
        </li>
        <li>
          <Mail
            size={20}
            className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
          />
        </li>
      </ul>
    </nav>
  );
}
