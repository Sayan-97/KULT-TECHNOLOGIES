"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../ui/button";

type InputProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 bg-accent p-8 rounded-2xl"
    >
      <h2 className="text-4xl font-semibold">Get A Quote</h2>
      <div className="space-y-6">
        <div className="grid gap-1">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            autoComplete="off"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            autoComplete="off"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="msg">Your Message</label>
          <textarea
            id="msg"
            {...register("message")}
            autoComplete="no"
          ></textarea>
        </div>
        <Button type="submit" content="Contact Us" />
      </div>
    </form>
  );
}
