import { FileText } from "lucide-react";
import Link from "next/link";
import { DocumentType } from "@/lib/enums";

type Information = {
  title?: string;
  slug?: string;
  description?: string;
};

type Row = {
  information: Information;
  type?: DocumentType;
};

export default function Row({ information, type = DocumentType.Article }: Row) {
  return (
    <article>
      <div className="flex gap-1">
        <FileText width={12} />
        <Link className="hover:underline" href={`${type}/${information.slug}`}>
          {information.title}
        </Link>
      </div>
      <p className="pl-4 text-sm text-muted-foreground">
        {information.description}
      </p>
    </article>
  );
}
