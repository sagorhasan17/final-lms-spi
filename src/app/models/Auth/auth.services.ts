import jwt from 'jsonwebtoken';
import { UserModel } from '../User/user.model.js';
import { comparePassword } from '../../../utils/bcrypt.js';

const CreateAuthService = async (payLoad: {
  uId: string;
  password: string;
}) => {
  const { uId, password } = payLoad;

  //User exists?
  const user = await UserModel.findOne({
    uId,
    isDeleted: false,
  }).select('+password');

  if (!user) {
    throw new Error('User does not exist');
  }

  //Password match using bcrypt
  const isPasswordMatched = await comparePassword(password, user.password);

  if (!isPasswordMatched) {
    throw new Error('Password is incorrect');
  }

  // JWT generate
  const token = jwt.sign(
    {
      _id: user._id,
      uId: user.uId,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '3d' }
  );

  //Return response
  return {
    token,
    user: {
      uId: user.uId,
      role: user.role,
    },
  };
};

export const AuthService = {
  CreateAuthService,
};
