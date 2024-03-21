import {FormAuthCredentialsSchema, UserCredentialsSchema, UserSchema} from '@/libs/zod-schemas';
import {z} from 'zod';

export type MenuItemType = {
  id: number,
  name: string,
  url: string
}

export type PostType = {
  id: number,
  title: string,
  date: string,
  category: string,
  summary: string,
  url: string,
}

export type WorkType = {
  id: number,
  title: string,
  year: string,
  category: string,
  img: string,
  summary: string,
  url: string,
}

export type UserType = z.infer<typeof UserSchema>
export type UserCredentialsType = z.infer<typeof UserCredentialsSchema>
export type FormAuthCredentialsType = z.infer<typeof FormAuthCredentialsSchema>
