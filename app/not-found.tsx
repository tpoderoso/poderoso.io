import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-extrabold mb-4">Nada encontrado aqui!</h1>
      <Image src="/404.png" alt="404" width={300} height={300} />
    </div>
  );
}
