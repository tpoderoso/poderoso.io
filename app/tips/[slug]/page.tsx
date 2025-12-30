import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

type TypeData = {
  content: string;
  informations: {
    title?: string;
    date?: string;
    description?: string;
    author?: string;
  };
};

async function getTips(slug: string): Promise<TypeData> {
  const filePath = path.join(process.cwd(), "content", "tips", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return { content: content, informations: data };
}

export default async function TipsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, informations } = await getTips(slug);
  return (
    <article className="mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">
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
