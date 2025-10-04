import React from "react";
import { Input } from "../input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { useForm } from "react-hook-form";
import { ComboboxPopover } from "./combobox";
import CustomCard from "./CustomCard";

const CompanyName = ({ setStep }) => {
  const form = useForm({
    defaultValues: {
      companyName: "",
      fullname: "",
      seat: "",
    },
  });

  const onSubmit = () => {
    setStep(2);
  };

  return (
    <>
      <CustomCard Title="Let’s get NestQ all set up for you."
        Subtitle="Tell us about you and your company. You can add additional team members later on."
        buttontext="Next →"
        onContinue={form.handleSubmit(() => {
          setStep(2);
        })}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="p-4 md:p-5 space-y-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Good Finance Inc"
                        className="w-full h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="gap-4 grid grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="John Doe"
                          className="w-full h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seat</FormLabel>
                      <FormControl>
                        <ComboboxPopover
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

            </div>
          </form>
        </Form>
      </CustomCard>
    </>
  );
};

export default CompanyName;
