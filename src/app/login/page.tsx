"use client";

import { useLogin } from "@refinedev/core";
import { AuthPage } from "@refinedev/mantine";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { mutate: login } = useLogin();
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      login({});
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <AuthPage />;
};

export default LoginPage;
