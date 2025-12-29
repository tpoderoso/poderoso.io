import { Download, FolderDown, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function NavBar() {
  return (
    <nav className="flex justify-between gap-3 w-full">
      <div>
        <p className="text-purple-400 font-extrabold">Poderoso.IO</p>
      </div>
      <ul className="flex items-center gap-6">
        <li>Artigos</li>
        <li>Dicas</li>
        <li>Sobre</li>
        <li>
          <FolderDown
            size={20}
            className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
          />
        </li>
        <li>
          <SiLinkedin
            size={18}
            className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
          />
        </li>
        <li>
          <SiGithub
            size={20}
            className="hover:text-purple-400 transition-colors duration-300 text-gray-300 cursor-pointer"
          />
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
