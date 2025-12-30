import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import RowDocument from "@/components/ui/rowDocument";

type Data = {
  title?: string;
  description?: string;
  slug?: string;
};

async function getArticles(): Promise<Array<Data>> {
  const articlesPath = path.join(process.cwd(), "content", "articles");
  const files = await fs.promises.readdir(articlesPath);
  const articles: Data[] = [];

  files.forEach((article) => {
    const filePath = path.join(articlesPath, article);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: information } = matter(fileContent);
    const slug = article.replace(".mdx", "");
    articles.push({
      title: information.title,
      description: information.description,
      slug,
    });
  });

  return articles;
}

export default async function Articles() {
  const articles = await getArticles();

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      <ul className="list-disc list-outside marker:text-purple-300 mb-3">
        {articles.map((article) => (
          <RowDocument key={article.slug} information={article} />
        ))}
      </ul>
    </div>
  );
}
