import { z } from 'zod'

const RegexCepValidate = /(^\d{8}$)|(^\d{5}-\d{3}$)/
const UFArray = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]
export const formDeliverySchema = z.object({
  CEP: z.string().refine((val) => val.match(RegexCepValidate), {
    message: 'Cep inválido, Ex:(12345-123 ou 12345678)',
  }),
  Street: z.string().min(1, 'O campo Rua é Obrigatório'),
  Number: z.coerce.number().min(1, 'O número não pode ser negativo'),
  Complement: z.string().optional(),
  Neighborhood: z.string().min(1, 'O campo Bairro é Obrigatório'),
  City: z.string().min(1, 'O campo Cidade é Obrigatório'),
  UF: z
    .string()
    .min(2, 'O campo UF é Obrigatório')
    .max(2, 'O campo UF é tem apenas 2 caracteres')
    .transform((val) => val.toUpperCase())
    .refine((val) => UFArray.includes(val), {
      message: 'UF não encontrado',
    }),
  Payment: z.string().min(1, 'Escolha uma opção de pagamento'),
})
