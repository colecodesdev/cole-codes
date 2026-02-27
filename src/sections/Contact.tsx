"use client";

import { useEffect, useMemo, useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const requiredFields: (keyof FormValues)[] = ["name", "email", "phone", "message"];

const baseControl =
  "w-full h-12 rounded-xl px-6 bg-white text-gray-950 font-semibold outline-none transition focus:ring-2 focus:ring-emerald-300";

const textareaControl =
  "w-full rounded-xl px-6 py-4 bg-white text-gray-950 font-semibold outline-none transition resize-none focus:ring-2 focus:ring-emerald-300";

const errorRing = "ring-2 ring-red-500";
const labelStyle = "text-white/70 text-sm font-semibold mb-2 inline-flex gap-1";

const validate = (v: FormValues): FormErrors => {
  const next: FormErrors = {};

  for (const field of requiredFields) {
    if (!v[field].trim()) next[field] = "Required.";
  }

  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
    next.email = "Enter a valid email.";
  }

  if (v.phone.trim() && !/^[0-9()+\-\s]{7,}$/.test(v.phone.trim())) {
    next.phone = "Enter a valid phone number.";
  }

  return next;
};

export const ContactSection = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toastOpen, setToastOpen] = useState(false);

  const errorCount = useMemo(() => Object.keys(errors).length, [errors]);

  useEffect(() => {
    if (!toastOpen) return;
    const t = setTimeout(() => setToastOpen(false), 4500);
    return () => clearTimeout(t);
  }, [toastOpen]);

  const setField = (name: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => {
      if (!e[name]) return e;
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setToastOpen(true);
      return;
    }

    console.log("Form submitted:", values);
  };

  const hasError = (field: keyof FormValues) => Boolean(errors[field]);

  return (
    <section id="Contact" className="py-16 lg:py-24 relative z-0">
      <div className="container">
        <SectionHeader eyebrow="Contact Me" title="Get In Touch" />

        <div
          className={[
            "fixed left-1/2 top-24 -translate-x-1/2 z-[9999]",
            toastOpen ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
          aria-live="polite"
        >
          <div
            className={[
              "rounded-2xl border border-white/15 bg-gray-950/80 backdrop-blur px-5 py-4 shadow-lg",
              "transition-all duration-200",
              toastOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
            ].join(" ")}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 size-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
              <div className="min-w-0">
                <p className="text-white font-semibold">Missing required fields</p>
                <p className="text-white/70 text-sm mt-1">
                  Please complete the fields marked with{" "}
                  <span className="text-red-400 font-semibold">*</span>.
                </p>
                <p className="text-white/60 text-xs mt-2">
                  {errorCount} issue{errorCount === 1 ? "" : "s"} found
                </p>
              </div>
              <button
                type="button"
                onClick={() => setToastOpen(false)}
                className="ml-2 text-white/70 hover:text-white transition cursor-pointer"
                aria-label="Dismiss"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <Card className="mt-10 px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 relative z-10 after:pointer-events-none">
          <form className="w-full relative z-10" onSubmit={onSubmit} noValidate>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className={labelStyle} htmlFor="contact-name">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className={[baseControl, hasError("name") ? errorRing : ""].join(" ")}
                />
                {errors.name ? <p className="mt-2 text-sm text-red-400">{errors.name}</p> : null}
              </div>

              <div>
                <label className={labelStyle} htmlFor="contact-company">
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={values.company}
                  onChange={(e) => setField("company", e.target.value)}
                  className={baseControl}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className={labelStyle} htmlFor="contact-email">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={[baseControl, hasError("email") ? errorRing : ""].join(" ")}
                />
                {errors.email ? <p className="mt-2 text-sm text-red-400">{errors.email}</p> : null}
              </div>

              <div>
                <label className={labelStyle} htmlFor="contact-phone">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  className={[baseControl, hasError("phone") ? errorRing : ""].join(" ")}
                />
                {errors.phone ? <p className="mt-2 text-sm text-red-400">{errors.phone}</p> : null}
              </div>
            </div>

            <div className="mt-4">
              <label className={labelStyle} htmlFor="contact-message">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={6}
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                className={[textareaControl, hasError("message") ? errorRing : ""].join(" ")}
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-white text-gray-950 h-12 rounded-xl font-semibold px-6 inline-flex items-center justify-center gap-2 cursor-pointer transition hover:bg-gray-100 active:scale-[0.99]"
              >
                Send Message
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};