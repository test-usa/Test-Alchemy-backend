export type TUserRole = "candidate" | "examinee" | "admin";
export type TIdFor= "candidate" | "examinee" | "admin"|"questionPaper";


export const userRole = {
    "candidate": "candidate",
    "examinee": "examinee",
    "admin": "admin"
} as const

export const idFor = {
    "candidate": "candidate",
    "examinee": "examinee",
    "admin": "admin",
    "questionPaper":"questionPaper"
} as const