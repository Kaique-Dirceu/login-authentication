import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  }, 
  passwordHash: String,
});

UserSchema.pre('save', async function() {
  if (this.password)
    this.passwordHash = await bcrypt.hash(this.password, 8);
    this.password = undefined;
})

export default new model('Users', UserSchema);