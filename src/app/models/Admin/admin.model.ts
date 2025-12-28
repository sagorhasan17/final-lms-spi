import { Schema } from "mongoose";
import type { IAdmin } from "./admin.interface.js";

const adminSchema = new Schema<IAdmin>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  designation: { type: String, required: true },
  department: { type: String },
  managementLevel: { type: String, enum: ['super', 'moderator', 'support'], required: true },
  contactEmail: { type: String, required: true },
  phone: { type: String },
  permissions: { type: [String], default: [] },
  permissionsVersion: { type: Number, default: 1 },
  isSuperAdmin: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'suspended'], default: 'active' },
  isDeleted: { type: Boolean, default: false },
  twoFactorEnabled: { type: Boolean, default: false },
  lastLoginAt: { type: Date },
  restrictedUntil: { type: Date },
  createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
  notes: { type: String },
}, {
  timestamps: true, 

})