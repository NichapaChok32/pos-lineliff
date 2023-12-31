"use client";
import "./globals.css";
import "../styles/globals.css";
import "../styles/pos-icon.css";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import Navbar from "../app/components/main/Navbar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

// const setLineLiff = async () => {
//   const liffId = process.env.NEXT_PUBLIC_LIFF_ID!;
//   const liff = (await import("@line/liff")).default;
//   try {
//     await liff.init({ liffId });
//   } catch (error: any) {
//     console.error("liff init error", error.message);
//   }
//   if (!liff.isLoggedIn()) {
//     liff.login();
//   }
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   setLineLiff();
  // });
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={poppins.className}>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
