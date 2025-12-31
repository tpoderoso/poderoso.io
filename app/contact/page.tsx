import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/actions";

export default function ContactPage() {
  return (
    <main>
      <form>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">* E-mail</FieldLabel>
              <Input id="email" type="text" required />
              <FieldDescription>
                Informe seu e-mail para que eu possa lhe responder
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="message">Mensagem</FieldLabel>
              <Textarea
                id="message"
                placeholder="Digite sua mensagem aqui"
                rows={5}
                className="resize-none h-32"
                required
              />
              <FieldDescription>
                Entre em contato comigo, responderei assim que possível!
              </FieldDescription>
            </Field>
          </FieldGroup>
          <div className="flex justify-end">
            <Button className="bg-primary text-black">Enviar</Button>
          </div>
        </FieldSet>
      </form>
    </main>
  );
}
