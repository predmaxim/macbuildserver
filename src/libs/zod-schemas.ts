import {z} from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string()
});
export const FormAuthCredentialsSchema = UserSchema.omit({id: true})
  .merge(z.object({remember: z.boolean()}));
export const UserCredentialsSchema = z.object({
  email: z.string(),
  session: z.string(),
  isLogged: z.boolean()
});
