"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "ai-automation",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        setServerMessage(resData.message);
        reset();
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#38D8E4", "#0891B2", "#202722"],
          });
        } catch {
          // ignore confetti if unsupported
        }
      } else {
        setStatus("error");
        setServerMessage(
          resData.message || "Failed to submit enquiry. Please email us directly."
        );
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Network connection failed. Please reach out directly to assestics.office@gmail.com."
      );
    }
  };

  return (
    <div className="tactile-card rounded-2xl p-6 sm:p-10 bg-white border border-[#E2E3DC] shadow-[0_4px_24px_rgba(32,39,34,0.04)]">
      {status === "success" ? (
        <div className="py-12 text-center space-y-6">
          <div className="w-14 h-14 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border-strong)] shadow-2xs mx-auto flex items-center justify-center text-[var(--color-brand-strong)]">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#202722]">
              Enquiry Received
            </h3>
            <p className="text-sm text-[#687069] max-w-md mx-auto leading-relaxed">
              {serverMessage}
            </p>
          </div>
          <Button
            variant="outline"
            size="md"
            onClick={() => setStatus("idle")}
          >
            Send another enquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Error Banner if Server Fails */}
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Submission failed:</span>{" "}
                {serverMessage}
              </div>
            </div>
          )}

          {/* Honeypot field for bot spam detection */}
          <input
            type="text"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-[#202722] font-semibold"
              >
                Full Name <span className="text-[#0891B2]">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Elena Rostova"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FCFBF8] text-[#202722] text-sm focus:bg-white transition-all outline-none ${
                  errors.name
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#E2E3DC] focus:border-[#0891B2]"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-600 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-[#202722] font-semibold"
              >
                Work Email <span className="text-[#0891B2]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FCFBF8] text-[#202722] text-sm focus:bg-white transition-all outline-none ${
                  errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#E2E3DC] focus:border-[#0891B2]"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-600 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Company & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-xs font-mono uppercase tracking-wider text-[#202722] font-semibold"
              >
                Company Name <span className="text-[#687069] font-normal">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                placeholder="e.g. Solar Nation / Logistics GmbH"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E3DC] bg-[#FCFBF8] text-[#202722] text-sm focus:bg-white focus:border-[#0891B2] transition-all outline-none"
                {...register("company")}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="service"
                className="block text-xs font-mono uppercase tracking-wider text-[#202722] font-semibold"
              >
                Area of Interest <span className="text-[#0891B2]">*</span>
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E3DC] bg-[#FCFBF8] text-[#202722] text-sm focus:bg-white focus:border-[#0891B2] transition-all outline-none"
                {...register("service")}
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
                <option value="other">General Operational Consultation</option>
              </select>
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-wider text-[#202722] font-semibold"
            >
              What operational problem are you solving? <span className="text-[#0891B2]">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Provide a summary of your technical bottlenecks, legacy systems to integrate, or automation requirements..."
              className={`w-full px-4 py-3 rounded-xl border bg-[#FCFBF8] text-[#202722] text-sm focus:bg-white transition-all outline-none resize-none ${
                errors.message
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#E2E3DC] focus:border-[#0891B2]"
              }`}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-red-600 font-medium">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="brand"
              size="lg"
              disabled={status === "submitting"}
              className="w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Specifications...</span>
                </>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
