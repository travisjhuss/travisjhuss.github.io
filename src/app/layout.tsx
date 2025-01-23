import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import "./globals.css";
import theme from "./theme";
import { NavBar } from "./components/LazyLoaders";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <ThemeProvider theme={theme}>
            <NavBar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
