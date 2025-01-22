export type TUserRole = "candidate" | "examinee" | "admin";

export const userRole = {
    "candidate": "candidate",
    "examinee": "examinee",
    "admin": "admin"
} as const