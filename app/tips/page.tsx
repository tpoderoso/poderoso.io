import RowDocument from "@/components/ui/rowDocument";
import { DocumentType } from "@/lib/enums";
import { getDocuments } from "@/lib/api";

export default async function Tips() {
  const tips = await getDocuments(DocumentType.Tips);

  return (
    <div>
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
