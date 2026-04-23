import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/dictionaries";

export default async function EmiCommunityPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.emi_community;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{d.title}</h1>
      <p className="text-sm text-slate-500 mb-4">{d.subtitle}</p>
      <p className="text-slate-600 mb-10 leading-relaxed">{d.intro}</p>

      {/* Selected Course */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.course_title}
        </h2>
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <p className="text-slate-800 font-medium mb-1">
            {d.course_instructor}
          </p>
          <p className="text-slate-600">{d.course_name_zh}</p>
          <p className="text-slate-500 text-sm">{d.course_name_en}</p>
        </div>
      </section>

      {/* Members */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.members_title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {lang === "zh-TW" ? "姓名" : "Name"}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {lang === "zh-TW" ? "服務學校" : "University"}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {lang === "zh-TW" ? "院系所" : "Department"}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {lang === "zh-TW" ? "職稱" : "Title"}
                </th>
              </tr>
            </thead>
            <tbody>
              {d.members.map((m, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <td className="px-4 py-3 text-sm text-slate-800 font-medium">
                    {m.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    {m.school}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    {m.department}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500">
                    {m.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Activities */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.activities_title}
        </h2>
        <ul className="space-y-2">
          {d.activities.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* QA Methods */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.qa_title}
        </h2>
        <div className="space-y-3">
          {d.qa_items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3"
            >
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-slate-600 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rubric */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.rubric_title}
        </h2>
        <div className="bg-blue-50 rounded-xl p-6">
          <p className="text-slate-700">{d.rubric_description}</p>
        </div>
      </section>
    </div>
  );
}
