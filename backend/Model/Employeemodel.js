
import { model, Schema } from 'mongoose';

const employeeSchema = new Schema({
  name: { type: String, required: [true, "name is mandatory"] },
  email: { type: String, required: [true, "email is mandatory"], unique: true },
  mobileno: { type: String, required: [true, "mobile no required"], unique: true },
  designation: { type: String },
  companyName: { type: String }
}, { versionKey: false, timestamps: true });

export const Employeemodel = model("Employee", employeeSchema);
