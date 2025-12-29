import { FolderDown, Mail } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function NavBar() {
  return (
    <nav className="flex justify-between gap-3 w-full">
      <div>
        <p className="text-purple-400 font-extrabold">
          <Link href={"/"}>Thiago Poderoso</Link>{" "}
        </p>
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
          <Link href={"/downloads"}>
            <FolderDown
              size={20}
              className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
            />
          </Link>
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
