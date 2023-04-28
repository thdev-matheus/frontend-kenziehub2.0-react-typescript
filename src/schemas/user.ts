import * as z from "zod";

export const userLoginSchema = z.object({
  email: z
    .string()
    .nonempty("campo obrigatório")
    .email("digite um e-mail válido"),

  password: z.string().nonempty("campo obrigatório"),
});

export const userRegisterSchema = z
  .object({
    name: z
      .string()
      .nonempty("campo obrigatório")
      .min(4, "nome deve conter 4 caracteres"),

    email: z
      .string()
      .nonempty("campo obrigatório")
      .email("digite um e-mail válido"),

    password: z
      .string()
      .nonempty("campo obrigatório")
      .min(8, "senha deve conter ao menos 8 caracteres")
      .regex(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .regex(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .regex(/(\d)/, "deve conter ao menos 1 número")
      .regex(/(\W)/, "deve conter ao menos 1 caracter especial"),

    confirmPassword: z.string().nonempty("campo obrigatório"),

    bio: z.string().nonempty("campo obrigatório"),

    contact: z.string().nonempty("campo obrigatório"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "as senhas não são iguais",
    path: ["confirmPassword"],
  });
