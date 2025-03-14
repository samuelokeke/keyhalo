import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().min(1),
  company: z.string().min(1),
  jobTitle: z.string().min(1),
  jobDescription: z.string().min(1),
  jobLocation: z.string().min(1),
  jobSalary: z.string().min(1),
  jobType: z.string().min(1),
  jobIndustry: z.string().min(1),
});

export type FormSchema = z.infer<typeof schema>;