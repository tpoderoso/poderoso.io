import { CodeXml } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <ul className="flex justify-between">
        <li className="text-sm text-pink-400 font-extralight">Versão 0.0.1</li>
        <li>
          <CodeXml
            size={20}
            className="hover:text-purple-400 transition-colors duration-300 text-gray-300"
          />
        </li>
      </ul>
    </footer>
  );
}
