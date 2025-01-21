export type TUser = {
  id: string;
  email: string;
  password: string;
  userType: "candidate" | "examinee";
  firstName: string;
  lastName: string;
  img: string;
  domain: string;
  isDeleted: boolean;
};
