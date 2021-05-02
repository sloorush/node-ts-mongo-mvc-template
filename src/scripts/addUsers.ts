import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from "../database/database";

(async () => {
  connect();
  const users = [{ name: "lorem", email: "ipsum@gmail.com" }];
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();
