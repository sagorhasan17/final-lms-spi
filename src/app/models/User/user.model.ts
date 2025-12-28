import { model, Schema } from 'mongoose';
import type { IUser } from './user.interface.js';
import { hashPassword } from '../../../utils/bcrypt.js';

const userSchema = new Schema<IUser>(
  {
    uId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    phone: { type: String },
    address: { type: String },
    role: {
      type: String,
      enum: ['admin', 'teacher', 'student'],
      default: 'student',
    },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

/**
 * 🔐 Pre-save middleware
 */
userSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return;
  }

  this.password = await hashPassword(this.password);
});



export const UserModel = model<IUser>('User', userSchema);
