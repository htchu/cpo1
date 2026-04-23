import { getDictionary } from "@/i18n/dictionaries";

export default async function TeachingLogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.teaching_log;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{d.title}</h1>
      <p className="text-slate-600 mb-8">{d.description}</p>

      <div className="space-y-3">
        {d.lectures.map((lec, i) => (
          <a
            key={i}
            href={lec.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
              W{lec.week}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-800 font-medium group-hover:text-blue-700 transition-colors">
                {lec.title}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {lec.file.split("/").pop()}
              </div>
            </div>
            <svg
              className="w-5 h-5 text-slate-300 group-hover:text-blue-500 shrink-0 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
