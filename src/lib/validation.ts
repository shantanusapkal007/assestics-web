import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please provide a valid work email address")
    .max(120, "Email is too long"),
  company: z.string().max(100, "Company name is too long").optional(),
  service: z.string().min(1, "Please select an area of focus"),
  message: z
    .string()
    .min(10, "Please describe your project in at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
