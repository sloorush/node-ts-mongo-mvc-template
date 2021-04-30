import { Schema } from "mongoose";
import { findOneOrCreate } from "./users.statics";

const UserSchema = new Schema({
  name: String,
  email: String,
});

UserSchema.statics.findOneOrCreate = findOneOrCreate;

export default UserSchema;
