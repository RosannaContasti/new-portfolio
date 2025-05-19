import { COOKIE_LOCALE_KEY } from "@/components/Menu";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieLocale =
    (await cookies()).get(`${COOKIE_LOCALE_KEY}`)?.value || "en";
  const locale = cookieLocale;
  console.log("HOLAAAAAAAAA!!!!", locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
