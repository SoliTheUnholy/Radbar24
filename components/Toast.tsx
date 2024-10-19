"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

const Toast = () => {
  const { theme } = useTheme();
  return <Toaster theme={theme} dir="rtl" className="max-w-[90vw]" />;
};

export default Toast;
