import { getDictionary } from "@/i18n/dictionaries";

export default async function InstructorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.instructor;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">{d.title}</h1>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {/* Name & affiliation */}
        <div className="bg-slate-800 text-white px-6 py-8 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/img/htchu.jpg"
            alt={d.name_zh}
            className="w-40 h-40 rounded-full object-cover border-4 border-slate-600 shrink-0"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">{d.name_zh}</h2>
            <p className="text-slate-300 mt-1">{d.name_en}</p>
            <p className="text-blue-300 mt-3 font-medium">{d.position}</p>
            <p className="text-slate-400 text-sm">
              {d.department}, {d.university}
            </p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
              {d.education_title}
            </h3>
            <p className="text-slate-700">{d.education}</p>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              {d.expertise_title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {d.expertise.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
              {d.contact_title}
            </h3>
            <div className="space-y-1 text-slate-700 text-sm">
              <p>
                <span className="text-slate-400 inline-block w-16">Email</span>
                <a
                  href={`mailto:${d.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {d.email}
                </a>
              </p>
              <p>
                <span className="text-slate-400 inline-block w-16">Tel</span>
                {d.phone}
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              {d.links_title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {d.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-lg transition-colors"
                >
                  {link.label}
                  <svg
                    className="w-3.5 h-3.5 text-slate-400"
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
        </div>
      </div>
    </div>
  );
}
