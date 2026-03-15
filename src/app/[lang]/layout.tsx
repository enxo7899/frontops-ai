import { getDictionary, type Locale, i18n } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (i18n.locales.includes(langParam as Locale) ? langParam : "en") as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main className="min-h-screen">{children}</main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
