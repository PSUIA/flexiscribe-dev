import "./globals.css";

export const metadata = {
  title: "fLexiScribe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
