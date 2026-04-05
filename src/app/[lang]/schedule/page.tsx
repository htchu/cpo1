import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/dictionaries";

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.schedule.title}
      </h1>
      <p className="text-slate-600 mb-8">{dict.schedule.description}</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">
                {dict.schedule.table.week}
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                {dict.schedule.table.date}
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                {dict.schedule.table.topic}
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                {dict.schedule.table.observer}
              </th>
            </tr>
          </thead>
          <tbody>
            {dict.schedule.sessions.map((session, i) => (
              <tr
                key={i}
                className={`border-b border-slate-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <td className="px-6 py-4 text-sm text-slate-800 font-medium">
                  {session.week}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {session.date}
                </td>
                <td className="px-6 py-4 text-sm text-slate-800">
                  {session.topic}
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  {session.observer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
