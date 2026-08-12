"use client";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/site-content";
import { btnGold } from "../../components/primitives";

const fieldStyles =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate/60 focus:border-gold focus:ring-2 focus:ring-gold/25";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Enquiry received", {
        description: "Our team will respond to your request shortly.",
      });
    }, 700);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            className={fieldStyles}
            placeholder="Your name"
          />
        </Field>
        <Field label="Organization" htmlFor="organization">
          <input
            id="organization"
            name="organization"
            className={fieldStyles}
            placeholder="Ministry, agency or company"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldStyles}
            placeholder="name@organization.com"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            className={fieldStyles}
            placeholder="+234 ..."
          />
        </Field>
        <Field
          label="Service / Area of Interest"
          htmlFor="service"
          className="sm:col-span-2"
        >
          <select
            id="service"
            name="service"
            defaultValue=""
            className={cn(fieldStyles, "appearance-none")}
          >
            <option value="" disabled>
              Select an area
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Message" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={cn(fieldStyles, "resize-y")}
            placeholder="Describe your requirement, scope and timeline."
          />
        </Field>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className={cn(btnGold, "mt-7 w-full sm:w-auto")}
      >
        {submitting ? "Submitting…" : "Submit Enquiry"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
