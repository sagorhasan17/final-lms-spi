import { Types } from 'mongoose';

export interface IAdmin {
  userId: Types.ObjectId; // ref User
  designation: string;
  department?: string;
  managementLevel: 'super' | 'moderator' | 'support';
  contactEmail: string;
  phone?: string;
  permissions: string[];
  permissionsVersion: number;
  isSuperAdmin: boolean;
  status: 'active' | 'suspended';
  isDeleted: boolean;
  twoFactorEnabled?: boolean;
  lastLoginAt?: Date;
  restrictedUntil?: Date;
  createdBy?: Types.ObjectId; // admin userId
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
