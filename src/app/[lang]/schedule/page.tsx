import Image from "next/image";
import { getDictionary } from "@/i18n/dictionaries";

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.schedule;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{d.title}</h1>
      <p className="text-slate-600 mb-8">{d.description}</p>

      {/* Session Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 mb-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">
              {lang === "zh-TW" ? "日期" : "Date"}
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-4">
              {d.date}
            </div>

            <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">
              {lang === "zh-TW" ? "時間" : "Time"}
            </div>
            <div className="text-lg font-semibold text-blue-700 mb-4">
              {d.time}
            </div>

            <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">
              {lang === "zh-TW" ? "地點" : "Location"}
            </div>
            <div className="text-lg font-medium text-slate-700 mb-4">
              {d.location}
            </div>

            {d.topic && (
              <>
                <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">
                  {lang === "zh-TW" ? "主題" : "Topic"}
                </div>
                <div className="text-lg text-slate-700">{d.topic}</div>
              </>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-48 h-48 bg-blue-50 rounded-2xl flex items-center justify-center">
              <svg
                className="w-20 h-20 text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Online Observation */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-3">
          {d.online_title}
        </h2>
        <p className="text-slate-600 mb-6">{d.online_description}</p>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Link button */}
          <div className="flex-1">
            <a
              href={d.teams_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
              {d.teams_link_label}
            </a>
            <p className="text-sm text-slate-400 mt-3 break-all">
              {d.teams_link}
            </p>
          </div>

          {/* QR Code */}
          <div className="shrink-0">
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <Image
                src={d.teams_qrcode}
                alt="Teams QR Code"
                width={160}
                height={160}
                className="rounded"
              />
            </div>
            <p className="text-xs text-slate-400 text-center mt-2">
              {lang === "zh-TW" ? "掃描加入" : "Scan to join"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
