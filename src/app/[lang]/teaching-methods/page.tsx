import { getDictionary } from "@/i18n/dictionaries";

const methodColors = [
  { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-600", dot: "bg-blue-400" },
  { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-600", dot: "bg-emerald-400" },
  { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-600", dot: "bg-purple-400" },
  { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-600", dot: "bg-amber-400" },
];

export default async function TeachingMethodsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.teaching_methods;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{d.title}</h1>
      <p className="text-lg text-blue-700 font-medium mb-6">{d.subtitle}</p>
      <p className="text-slate-600 leading-relaxed mb-10">{d.intro}</p>

      {/* ESAP Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.esap_title}
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
          <ul className="space-y-3">
            {d.esap_points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          {d.methods_title}
        </h2>
        <div className="space-y-6">
          {d.methods.map((method, i) => {
            const color = methodColors[i % methodColors.length];
            return (
              <div
                key={i}
                className={`${color.bg} border ${color.border} rounded-xl p-6`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`${color.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {method.name}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 ${color.dot} rounded-full shrink-0`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Theoretical Foundations */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.theory_title}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {d.theories.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-5"
            >
              <h3 className="text-sm font-bold text-slate-800 mb-1">
                {t.name}
              </h3>
              <p className="text-xs text-slate-400 mb-2">{t.author}</p>
              <p className="text-sm text-slate-600">{t.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
