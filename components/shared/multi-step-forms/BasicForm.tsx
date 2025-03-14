"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormStore } from "./store";
import { schema } from "./schema";
import { Textarea } from "@/components/ui/textarea";

// Pick only the fields we need from the main schema
const basicFormSchema = schema.pick({
  company: true,
  jobTitle: true,
  jobDescription: true,
});

type FormValues = z.infer<typeof basicFormSchema>;

export default function BasicForm() {
  const { updateFormData, currentStep, setCurrentStep } = useFormStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: {
      company: "",
      jobTitle: "",
      jobDescription: "",
    },
  });

  const onPrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  function onSubmit(values: FormValues) {
    updateFormData(values);

    setCurrentStep(currentStep + 1);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Enter your company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your job title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your job description" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between gap-2">
          <Button type="button" variant="outline" onClick={onPrevious}>
            Back
          </Button>

          <Button type="submit" disabled={!form.formState.isValid}>
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}
