import { model } from "mongoose";
import UserSchema from "./users.schema";
import { IUserDocument, IUserModel } from "./users.types";

export const UserModel = model<IUserDocument, IUserModel>("user", UserSchema);
