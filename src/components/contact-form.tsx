"use client";

import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mwpgqpyy");
  if (state.succeeded) {
    return (
      <p className="font-bold border border-foreground px-2 py-4">
        お問い合わせありがとうございます。いただいた内容は確認させていただきます！
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="font-bold">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="border border-foreground px-2 py-1"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-primary"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-bold">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="border border-foreground px-2 py-1"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-primary"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-foreground text-background w-fit font-bold px-4 py-2 rounded-4xl cursor-pointer border border-foreground hover:text-foreground hover:bg-background"
      >
        送信
      </button>
    </form>
  );
}
