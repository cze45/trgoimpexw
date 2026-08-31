import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Unesite ime i prezime").max(100),
  phone: z.string().trim().max(50).optional().default(""),
  email: z.string().trim().email("Neispravna email adresa").max(255),
  project: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(5, "Poruka je prekratka").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("contact_messages")
      .insert({
        name: data.name,
        phone: data.phone || null,
        email: data.email,
        project: data.project || null,
        message: data.message,
      })
      .select("id")
      .single();

    if (error) {
      console.error("contact insert failed", error.message);
      throw new Error("Slanje nije uspelo. Pokušajte ponovo.");
    }

    return { ok: true, id: row.id };
  });
