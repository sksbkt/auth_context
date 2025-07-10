"use client";
import { loginSchema, LoginSchemaType } from "@/schmas/auth";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import z from "zod";
import styles from "./Auth.module.scss";
import Input from "@/components/input";
import Button from "@/components/button";
import { useAuth } from "@/context/AuthContext";

const AuthPage = () => {
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [router, user]);
  const formik = useFormik<LoginSchemaType>({
    initialValues: {
      phoneNumber: "",
    },

    validate: (values) => {
      try {
        loginSchema.parse(values);
        return {};
      } catch (error) {
        if (error instanceof z.ZodError) {
          const errors: { [key: string]: string } = {};
          error.issues.forEach((err) => {
            if (err.path.length > 0) {
              errors[err.path[0] as string] = err.message;
            }
          });

          return errors;
        }
        return {};
      }
    },
    onSubmit: async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=1&nat=us"
        );
        const data = await response.json();
        const user = data.results[0];
        login(user);
      } catch (error) {
        console.error("Error during login:", error);

        alert("Error during login. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div className={styles.authContainer}>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.formGroup}
      >
        <h1 className={styles.title}>ورود</h1>
        <Input
          label="شماره تلفن"
          id="input_phone"
          type="text"
          dir="ltr"
          placeholder="09123456789"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onFocus={formik.handleChange}
          error={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? formik.errors.phoneNumber
              : undefined
          }
        />
        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <p>در حال بررسی</p>
            </>
          ) : (
            "ورود"
          )}
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
