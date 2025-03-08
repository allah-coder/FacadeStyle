import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import Script from "next/script";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import theme from "#/configs/theme";

import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const bebra = localFont({
  src: "../public/fonts/local.woff",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <InitColorSchemeScript attribute="data" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.4/dist/tgs-player.js" />
    </html>
  );
}
