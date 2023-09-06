import OpenAI from "openai";
import React, { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPEN_API,
      dangerouslyAllowBrowser: true,
    });
    const chatCompletion = await openai.chat.completions
      .create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-3.5-turbo",
      })
      .then((res) => {
        console.log(res);
      });
  };
  return { onChange, onSubmit, value };
};

export { useForm };
