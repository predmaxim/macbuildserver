import {jwtVerify, SignJWT} from 'jose';
import {JWT_EXPIRES, KEY} from '@/libs/constants';

export const encrypt = async (payload: any) => await new SignJWT(payload)
  .setProtectedHeader({alg: 'HS256'})
  .setIssuedAt()
  .setExpirationTime(`${JWT_EXPIRES}m`)
  .sign(KEY);

export const decrypt = async (input: string): Promise<any> => {
  const {payload} = await jwtVerify(input, KEY, {
    algorithms: ['HS256']
  });
  return payload;
};
