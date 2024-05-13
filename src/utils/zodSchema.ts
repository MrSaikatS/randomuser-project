import { z } from "zod";

export const schema = z.object({
  userNumber: z.coerce
    .number()
    .gte(3, { message: "Minimum 3" })
    .lte(30, { message: "Maximum 30" })
    .multipleOf(3, { message: "Multiple Of 3" }),
});

export type SchemaType = z.infer<typeof schema>;
