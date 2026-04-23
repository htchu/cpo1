import { getDictionary } from "@/i18n/dictionaries";

export default async function SyllabusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.syllabus;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{d.title}</h1>
      <p className="text-slate-600 mb-8">{d.description}</p>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center text-slate-400">
        {d.coming_soon}
      </div>
    </div>
  );
}
