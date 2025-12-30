import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Data = {
  title?: string;
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
    articles.push({ title: information.title, slug });
  });

  return articles;
}

export default async function Articles() {
  const articles = await getArticles();

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      <h1>Artigos</h1>
      <ul className="list-disc list-outside marker:text-purple-300 mb-3">
        {articles.map((article) => (
          <li key={article.title}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
