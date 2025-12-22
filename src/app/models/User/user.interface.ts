
export interface IUser {
  uId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: 'admin' | 'teacher' | 'student';
  isVerified: boolean;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
