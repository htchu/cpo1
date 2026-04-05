import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/dictionaries";

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.resources.title}
      </h1>
      <p className="text-slate-600 mb-10">{dict.resources.description}</p>

      <div className="space-y-10">
        {dict.resources.categories.map((category, ci) => (
          <section key={ci}>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              {category.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((item, ii) => (
                <div
                  key={ii}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
