import { BookOpen, FolderDown, Lightbulb, Mail, Sparkle } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export default function NavBar() {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between gap-4 w-full">
      <div>
        <div className="text-primary font-extrabold">
          <Link href={"/"}>Thiago Poderoso</Link>
        </div>
      </div>
      <ul className="flex items-center gap-6">
        <li className="hover:text-primary transition-colors duration-300 text-gray-300 cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/articles"}>
                <BookOpen size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Artigos</TooltipContent>
          </Tooltip>
        </li>
        <li className="hover:text-primary transition-colors duration-300 text-gray-300 cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/tips"}>
                <Lightbulb size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Dicas</TooltipContent>
          </Tooltip>
        </li>
        {/* <li>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/downloads"}>
                <FolderDown
                  size={20}
                  className="hover:text-primary transition-colors duration-300 text-gray-300 cursor-pointer"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Downloads</TooltipContent>
          </Tooltip>
        </li> */}
        <li>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://www.linkedin.com/in/tpoderoso/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin
                  size={18}
                  className="hover:text-primary transition-colors duration-300 text-gray-300 cursor-pointer"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">LinkedIn</TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://www.github.com/tpoderoso/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub
                  size={20}
                  className="hover:text-primary transition-colors duration-300 text-gray-300 cursor-pointer"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">GitHub</TooltipContent>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}
