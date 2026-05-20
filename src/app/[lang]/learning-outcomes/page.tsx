import { getDictionary } from "@/i18n/dictionaries";

export default async function LearningOutcomesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.learning_outcomes;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{d.title}</h1>
      <p className="text-slate-600 mb-8">{d.description}</p>

      <div className="space-y-3">
        {d.padlets.map((padlet, i) => (
          <a
            key={i}
            href={padlet.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <span className="w-10 h-10 bg-pink-500 text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
              {padlet.module.replace("Module ", "M")}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-800 font-medium group-hover:text-blue-700 transition-colors">
                {padlet.module} — {padlet.title}
              </div>
              <div className="text-xs text-slate-400">Padlet</div>
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
