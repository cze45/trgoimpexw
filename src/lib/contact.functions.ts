import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Unesite ime i prezime (bar 2 slova).")
    .max(100, "Ime je predugačko — skratite ga na 100 znakova."),
  phone: z.string().trim().max(50).optional().default(""),
  email: z
    .string()
    .trim()
    .email("Proverite email adresu, npr. ime@primer.rs.")
    .max(255, "Email adresa je predugačka."),
  project: z.string().trim().max(150).optional().default(""),
  message: z
    .string()
    .trim()
    .min(5, "Poruka je prekratka — napišite bar 5 znakova.")
    .max(2000, "Poruka je predugačka — skratite je na 2000 znakova."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      // Posetiocu prikazujemo samo prvu poruku, ne ceo spisak grešaka
      throw new Error(result.error.issues[0]?.message ?? "Proverite unete podatke.");
    }
    return result.data;
  })
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
