import { getDictionary, locales } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: {
      default: `${dict.site.title} — ${dict.site.subtitle}`,
      template: `%s | ${dict.site.title}`,
    },
    description: dict.site.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header lang={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} />
    </>
  );
}
