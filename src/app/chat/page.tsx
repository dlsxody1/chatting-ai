"use client";
import OpenAI from "openai";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
const Page = () => {
  const { onChange, onSubmit, value } = useForm();

  return (
    <div>
      122
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="w-56 bg-slate-600"
          type="text"
          value={value}
          onChange={(e) => onChange(e)}
        />
      </form>
    </div>
  );
};

export default Page;
