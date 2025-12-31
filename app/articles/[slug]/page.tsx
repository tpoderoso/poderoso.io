import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

type TypeData = {
  content: string;
  informations: {
    title?: string;
    date?: string;
    description?: string;
    author?: string;
  };
};

async function getArticle(slug: string): Promise<TypeData> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "articles",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return { content, informations: data };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, informations } = await getArticle(slug);

  return (
    <article className="mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-secondary">
        {informations.title as string}
      </h1>
      <div className="text-sm opacity-60 mb-8">
        {informations.date as string} • {informations.author as string}
      </div>
      <div className="prose prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-code:text-foreground max-w-none prose-p:mb-6 prose-headings:mb-5">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
