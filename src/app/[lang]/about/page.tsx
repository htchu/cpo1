import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/dictionaries";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        {dict.about.title}
      </h1>
      <p className="text-slate-600 mb-10 leading-relaxed">{dict.about.intro}</p>

      {/* Objectives */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {dict.about.objectives_title}
        </h2>
        <ul className="space-y-2">
          {dict.about.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
              {obj}
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          {dict.about.process_title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {dict.about.process_steps.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-800">
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {dict.about.principles_title}
        </h2>
        <div className="bg-blue-50 rounded-xl p-6">
          <ul className="space-y-3">
            {dict.about.principles.map((principle, i) => (
              <li key={i} className="text-slate-700 font-medium">
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
