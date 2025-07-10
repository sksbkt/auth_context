import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: "شماره تلفن الزامی است." })
    .regex(/^09[0-9]{9}$/, {
      message: "فرمت شماره تلفن صحیح نیست (مثال: 09123456789).",
    }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
