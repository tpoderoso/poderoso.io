import path from "path";
import fs from "fs";
import matter from "gray-matter";
import RowDocument from "@/components/ui/rowDocument";
import { DocumentType } from "@/lib/enums";

type Data = {
  title?: string;
  description?: string;
  slug?: string;
};

async function getTips(): Promise<Array<Data>> {
  const tipsPath = path.join(process.cwd(), "content", "tips");
  const files = await fs.promises.readdir(tipsPath);
  const tips: Data[] = [];

  files.forEach((tip) => {
    const filePath = path.join(tipsPath, tip);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: information } = matter(fileContent);
    const slug = tip.replace(".mdx", "");
    tips.push({
      title: information.title,
      description: information.description,
      slug: slug,
    });
  });

  return tips;
}

export default async function Tips() {
  const tips = await getTips();

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      {tips.map((tip) => (
        <RowDocument
          key={tip.slug}
          information={tip}
          type={DocumentType.Tips}
        />
      ))}
    </div>
  );
}
