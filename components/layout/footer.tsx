import { CodeXml } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <ul className="flex justify-between">
        <li className="text-sm text-pink-400 font-extralight">Versão 0.0.1</li>
        <li>
          <a
            href="https://www.github.com/tpoderoso/poderoso.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeXml
              size={20}
              className="hover:text-purple-400 transition-colors duration-300 text-gray-300"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
