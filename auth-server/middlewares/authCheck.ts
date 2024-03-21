import {NextFunction, Request, Response} from 'express';
import {decrypt} from '../libs/auth';

export const authCheck = async (req: Request, res: Response, next: NextFunction) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  if (token) {
    try {
      req.body.session = await decrypt(token);
      next();
    } catch (error) {
      return res.json({message: 'Forbidden', error});
    }
  } else {
    return res.json({message: 'Forbidden'});
  }
};
