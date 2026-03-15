import { getDictionary, type Locale, i18n } from "@/lib/i18n/dictionaries";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { WhyNotChatgptSection } from "@/components/sections/why-not-chatgpt";
import { NotChatbotSection } from "@/components/sections/not-chatbot";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { SectorsSection } from "@/components/sections/sectors";
import { ShowcaseSection } from "@/components/sections/showcase";
import { VoiceAiSection } from "@/components/sections/voice-ai";
import { IntegrationsSection } from "@/components/sections/integrations";
import { SocialProofSection } from "@/components/sections/social-proof";
import { InvestorSection } from "@/components/sections/investor";
import { CtaSection } from "@/components/sections/cta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (i18n.locales.includes(langParam as Locale) ? langParam : "en") as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <ProblemSection dict={dict.problem} />
      <WhyNotChatgptSection dict={dict.whyNotChatgpt} />
      <NotChatbotSection dict={dict.notChatbot} />
      <BeforeAfterSection dict={dict.beforeAfter} />
      <HowItWorksSection dict={dict.howItWorks} />
      <FeaturesSection dict={dict.features} />
      <SectorsSection dict={dict.sectors} />
      <ShowcaseSection dict={dict.showcase} />
      <VoiceAiSection dict={dict.voiceAi} />
      <IntegrationsSection dict={dict.integrations} />
      <SocialProofSection dict={dict.socialProof} />
      <InvestorSection dict={dict.investor} />
      <CtaSection lang={lang} dict={dict.cta} />
    </>
  );
}
