import { z } from 'zod';

export const projectSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full name is required" }),

  phone: z
    .string()
    .min(10, { message: "Phone must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone must contain digits only" })
    .transform(val => val.replace(/[^0-9]/g, '')),

  whatsapp: z
    .union([
      z
        .string()
        .min(10, { message: "WhatsApp must be at least 10 digits" })
        .regex(/^\d+$/, { message: "WhatsApp must contain digits only" }),
      z.literal(""),    // allow empty string
      z.undefined(),
      z.null()
    ])
    .transform((val) => {
      // convert empty string or null to undefined
      if (val === "" || val === null) return undefined;

      // clean digits if it's a string
      if (typeof val === "string") {
        const digits = val.replace(/[^0-9]/g, "");
        return digits.length ? digits : undefined;
      }

      return val;
    })
    .optional(),

  address: z
    .string()
    .min(1, { message: "Address is required" }),

  stories: z
    .coerce
    .number()
    .int()
    .min(1, { message: "Stories must be at least 1" }),

  roofType: z
    .string()
    .optional(),

  gutterLength: z
    .coerce
    .number()
    .int()
    .nonnegative(),

  downspouts: z
    .string()
    .optional(),

  notes: z
    .string()
    .optional(),
});

