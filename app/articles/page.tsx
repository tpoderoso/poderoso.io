import RowDocument from "@/components/ui/rowDocument";
import { getDocuments } from "@/lib/api";
import { DocumentType } from "@/lib/enums";

export default async function Articles() {
  const articles = await getDocuments(DocumentType.Article);

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
