import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18),
});

export type User = z.infer<typeof userSchema>;
