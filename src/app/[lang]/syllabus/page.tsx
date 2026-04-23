import { getDictionary } from "@/i18n/dictionaries";

export default async function SyllabusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.syllabus;
  const info = d.course_info;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{d.title}</h1>
      <p className="text-lg text-blue-700 font-medium mb-8">{d.plan_name}</p>

      {/* Course Info */}
      <section className="mb-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries({
          [lang === "zh-TW" ? "授課教師" : "Instructor"]: info.instructor,
          [lang === "zh-TW" ? "學程" : "Program"]: info.program,
          [lang === "zh-TW" ? "課程" : "Course"]: info.course,
          [lang === "zh-TW" ? "學期" : "Semester"]: info.semester,
          [lang === "zh-TW" ? "學分" : "Credits"]: info.credits,
          [lang === "zh-TW" ? "班級" : "Class"]: info.class,
          [lang === "zh-TW" ? "人數" : "Students"]: info.students,
          [lang === "zh-TW" ? "場域" : "Venue"]: info.venue,
          [lang === "zh-TW" ? "屬性" : "Attribute"]: info.attribute,
        }).map(([label, value]) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-lg px-4 py-3"
          >
            <div className="text-xs text-slate-400 mb-1">{label}</div>
            <div className="text-sm text-slate-800 font-medium">{value}</div>
          </div>
        ))}
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.overview_title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{d.overview}</p>
      </section>

      {/* Spiral Thinking */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-3">
          {d.spiral_title}
        </h2>
        <p className="text-slate-600 mb-6">{d.spiral_description}</p>

        {/* Phase 1 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              1
            </span>
            {d.phase1_title}
          </h3>
          <p className="text-slate-600 mb-4 ml-9">{d.phase1_description}</p>
          <div className="grid md:grid-cols-2 gap-3 ml-9">
            {d.phase1_steps.map((step, i) => (
              <div
                key={i}
                className="bg-blue-50 border border-blue-100 rounded-lg p-4"
              >
                <span className="text-sm font-bold text-blue-700">
                  {step.label}
                </span>
                <p className="text-sm text-slate-600 mt-1">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-800 mb-2 flex items-center gap-2">
            <span className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              2
            </span>
            {d.phase2_title}
          </h3>
          <p className="text-slate-600 mb-4 ml-9">{d.phase2_description}</p>
          <div className="grid md:grid-cols-2 gap-3 ml-9">
            {d.phase2_steps.map((step, i) => (
              <div
                key={i}
                className="bg-emerald-50 border border-emerald-100 rounded-lg p-4"
              >
                <span className="text-sm font-bold text-emerald-700">
                  {step.label}
                </span>
                <p className="text-sm text-slate-600 mt-1">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.schedule_title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left text-sm font-medium w-16">
                  {d.schedule_headers.week}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium w-48">
                  {d.schedule_headers.topic}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {d.schedule_headers.description}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium w-28">
                  {d.schedule_headers.phase}
                </th>
              </tr>
            </thead>
            <tbody>
              {d.weeks.map((w, i) => {
                const isMidterm = w.week === "8";
                return (
                  <tr
                    key={i}
                    className={
                      isMidterm
                        ? "bg-amber-50 border-b border-amber-200"
                        : `border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`
                    }
                  >
                    <td className="px-4 py-3 text-sm text-slate-800 font-medium">
                      {w.week}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-800">
                      {w.topic}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {w.description}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                          w.tag.includes("螺旋") || w.tag.includes("Spiral")
                            ? "bg-blue-100 text-blue-700"
                            : w.tag.includes("翻轉") || w.tag.includes("Flipped")
                              ? "bg-emerald-100 text-emerald-700"
                              : w.tag.includes("合作") ||
                                  w.tag.includes("Cooperative")
                                ? "bg-purple-100 text-purple-700"
                                : w.tag.includes("實踐") ||
                                    w.tag.includes("Practice")
                                  ? "bg-orange-100 text-orange-700"
                                  : w.tag.includes("回饋") ||
                                      w.tag.includes("Feedback")
                                    ? "bg-rose-100 text-rose-700"
                                    : w.tag.includes("發展") ||
                                        w.tag.includes("Development")
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {w.tag}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.outcomes_title}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {d.outcomes.map((o, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-5"
            >
              <div className="text-sm font-bold text-blue-600 mb-2">
                {o.category}
              </div>
              <p className="text-sm text-slate-600">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outputs */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {d.outputs_title}
        </h2>
        <ul className="space-y-3">
          {d.outputs.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
