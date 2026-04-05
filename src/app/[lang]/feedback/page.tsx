"use client";

import { useState, useEffect } from "react";
import type { Dictionary } from "@/i18n/types";
import { useParams } from "next/navigation";

export default function FeedbackPage() {
  const params = useParams();
  const lang = params.lang as string;
  const [dict, setDict] = useState<Dictionary | null>(null);

  useEffect(() => {
    const load = async () => {
      const mod =
        lang === "zh-TW"
          ? await import("@/i18n/locales/zh-TW.json")
          : await import("@/i18n/locales/en.json");
      setDict(mod.default as Dictionary);
    };
    load();
  }, [lang]);

  if (!dict) return null;

  const f = dict.feedback.form;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.feedback.title}
      </h1>
      <p className="text-slate-600 mb-8">{dict.feedback.description}</p>

      <form
        className="space-y-6 bg-white border border-slate-200 rounded-xl p-6 md:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            lang === "zh-TW"
              ? "感謝您的回饋！（此為示範表單）"
              : "Thank you for your feedback! (This is a demo form)"
          );
        }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {f.observer_name}
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {f.observation_date}
            </label>
            <input
              type="date"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {f.course_topic}
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {f.strengths}
          </label>
          <textarea
            rows={4}
            required
            placeholder={f.placeholder_strengths}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {f.suggestions}
          </label>
          <textarea
            rows={4}
            required
            placeholder={f.placeholder_suggestions}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {f.additional}
          </label>
          <textarea
            rows={3}
            placeholder={f.placeholder_additional}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
        >
          {f.submit}
        </button>
      </form>
    </div>
  );
}
