import z from "zod"

const logInValidator = z.object({
    body: z.object({
        email: z.string().email({message:"email is required"}),
        password: z.string({message:"password is required"})
    }),
});