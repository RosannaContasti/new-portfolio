// // lib/getMessages.ts
// import { getRequestConfig } from "next-intl/server";
// import { getLocale } from "./getLocale";

// export async function getMessages() {
//   const locale = await getLocale();
//   console.log("LOCALEEEEEEEEEE", { locale });
//   const messages = (await import(`../messages/${locale}.json`)).default;
//   return messages;
// }
