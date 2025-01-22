export type TUser = {
  id: string;
  email: string;
  password: string;
  userType: "candidate" | "examinee" | "admin";
  firstName: string;
  lastName: string;
  img: string;
  domain: string;
  isLoggedIn: boolean;
  isDeleted: boolean;
  loggedOutTime: string;
};
