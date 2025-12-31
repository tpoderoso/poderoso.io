"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { DocumentType } from "./enums";

export type DocumentData = {
  title?: string;
  description?: string;
  slug?: string;
  date?: string;
  author?: string;
};

export async function getDocuments(
  type: DocumentType,
  limit?: number
): Promise<DocumentData[]> {
  const docPath = path.join(process.cwd(), "content", type);
  const files = await fs.promises.readdir(docPath);
  const documents: DocumentData[] = [];

  files.forEach((file) => {
    const fileContent = fs.readFileSync(path.join(docPath, file), "utf-8");
    const { data: information } = matter(fileContent);
    const slug = file.replace(".mdx", "");
    documents.push({
      title: information.title,
      description: information.description,
      slug,
      date: information.date,
      author: information.author,
    });
  });

  return limit ? documents.slice(0, limit) : documents;
}
