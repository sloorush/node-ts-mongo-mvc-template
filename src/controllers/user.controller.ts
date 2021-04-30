import { Request, Response } from "express";
import { UserModel } from "../database/users/users.model";

class userController {
  userLogin = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("loginctrl");
    } catch (error) {
      res.send(res);
      console.log(error);
    }
  };
}

export default userController;
