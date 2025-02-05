import config from "../config";
import { userRole } from "../constents";
import { UserModel } from "../modules/user/user.model";

const adminSeeder = async () => {
  try {
    // Check if an admin user already exists
    const user = await UserModel.findOne({ userType: userRole.admin });

    // Admin data to seed
    const adminData = {
      firstName: config.admin_firstName,
      lastName: config.admin_lastName,
      email: config.admin_email,
      userType: userRole.admin,
      password: config.admin_password,
      id:config.admin_id,
      domain: "n/a",
    };

    // Create an admin user if none exists
    if (!user) {
      const admin = new UserModel(adminData); // Use `new` to create a new instance
      await admin.save();
      console.log("Admin user created successfully.");
    } else {
      console.log("Admin user already exists.");
    }
  } catch (error: any) {
    console.error("Error seeding admin user:", error.message);
  }
};

const DBSeeder = { adminSeeder };

export default DBSeeder;
