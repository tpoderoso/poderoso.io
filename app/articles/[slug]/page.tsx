import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

async function getArticle(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "articles",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return { content, frontmatter: data };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, frontmatter } = await getArticle(slug);

  return (
    <article className="mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">{frontmatter.title as string}</h1>
      <div className="text-sm opacity-60 mb-8">
        {frontmatter.date as string} • {frontmatter.author as string}
      </div>
      <div className="prose prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-code:text-foreground max-w-none prose-p:mb-6 prose-headings:mb-5">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
