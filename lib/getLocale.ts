// lib/getLocale.ts
import { COOKIE_LOCALE_KEY } from "@/components/Menu";
import { cookies } from "next/headers";
//import { COOKIE_LOCALE_KEY } from "@/constants"; // Ajustalo si usás otra ruta

export async function getLocale() {
  const cookieStore = cookies();
  const locale = await cookieStore.get(COOKIE_LOCALE_KEY)?.value;
  return locale || "en"; // valor por defecto
}
