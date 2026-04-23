import Image from "next/image";
import { getDictionary } from "@/i18n/dictionaries";

export default async function PlatformsToolsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.platforms_tools;

  const platforms = d.items.filter((item) => item.category === "platform");
  const tools = d.items.filter((item) => item.category === "tool");

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{d.title}</h1>
      <p className="text-slate-600 mb-10">{d.description}</p>

      {/* Platforms */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          {d.platforms_title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          {d.tools_title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative w-full h-40">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
