import { getDictionary } from "@/i18n/dictionaries";

export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.student_profile;

  const localPct = Math.round((d.local_count / d.total_count) * 100);
  const intlPct = 100 - localPct;
  const malePct = Math.round((d.male_count / d.total_count) * 100);
  const femalePct = 100 - malePct;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{d.title}</h1>
      <p className="text-slate-600 mb-8">{d.description}</p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-slate-800">{d.total_count}</div>
          <div className="text-sm text-slate-500 mt-1">{d.total_students}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-blue-600">{d.local_count}</div>
          <div className="text-sm text-slate-500 mt-1">{d.local_students}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-emerald-600">{d.international_count}</div>
          <div className="text-sm text-slate-500 mt-1">{d.international_students}</div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex rounded-full overflow-hidden h-8">
            <div
              className="bg-blue-500 flex items-center justify-center text-white text-xs font-medium"
              style={{ width: `${localPct}%` }}
            >
              {localPct}%
            </div>
            <div
              className="bg-emerald-500 flex items-center justify-center text-white text-xs font-medium"
              style={{ width: `${intlPct}%` }}
            >
              {intlPct}%
            </div>
          </div>
          <div className="flex justify-between mt-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block" />
              {d.local_students} ({d.local_count})
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block" />
              {d.international_students} ({d.international_count})
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex rounded-full overflow-hidden h-8">
            <div
              className="bg-indigo-500 flex items-center justify-center text-white text-xs font-medium"
              style={{ width: `${malePct}%` }}
            >
              {malePct}%
            </div>
            <div
              className="bg-pink-400 flex items-center justify-center text-white text-xs font-medium"
              style={{ width: `${femalePct}%` }}
            >
              {femalePct}%
            </div>
          </div>
          <div className="flex justify-between mt-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block" />
              {d.male_students} ({d.male_count})
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-400 rounded-full inline-block" />
              {d.female_students} ({d.female_count})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
