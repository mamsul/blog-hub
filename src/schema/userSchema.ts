import z from 'zod';

export const userSchema = z.object({
  name: z
    .string({ required_error: 'Name must not be empty!' })
    .min(5, { message: 'Please provide at least 5 character!' }),
  email: z.string({ required_error: 'Email must not be empty!' }).email(),
  gender: z.string({ required_error: 'Gender must be selected!' }),
  status: z.string({ required_error: 'Status must be selected!' }),
});

export type User = z.infer<typeof userSchema>;
