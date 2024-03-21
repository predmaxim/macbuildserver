import {Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import users from '../mocks/users.json';
import {encrypt} from '../libs/auth';

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body.session.user;
    if (!email || !password) {
      return res.status(404).json({isLogged: false, message: 'Incorrect email or password'});
    }

    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({isLogged: false, message: 'User not found'});
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).json({isLogged: false, message: 'Incorrect password'});
    }

    const tokenMaxAge = (req.body.session.exp - req.body.session.iat) * 1000;
    const session = await encrypt({
      email,
      expires: new Date(Date.now() + tokenMaxAge)
    });

    if (req.body.session.remember) {
      res.cookie(
        'session',
        session,
        {
          maxAge: tokenMaxAge,
          httpOnly: true
        }
      );
    }

    res.status(200).json({email, session, isLogged: true});

  } catch (error) {
    res.status(403).json({isLogged: false, message: 'Auth error', error});
  }
};


// in dev
export const register = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body;

    const emailIsUsed = users.find((user) => user.email === email);
    if (emailIsUsed) {
      return res.status(400).json({isRegistered: false, message: 'This user email is already busy'});
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = {email, password: hash};

  } catch (error) {
    res.status(500).json({isRegistered: false, message: 'An error when creating a user', error});
  }
};

// in dev
export const getMe = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body;
    const user = users.find((user) =>
      user.email === req.query.email);

    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }

  } catch (error) {
    res.status(403).json({message: 'Forbidden', error});
  }
};
