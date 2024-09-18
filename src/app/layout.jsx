import "./globals.css";
import AuthProvider from "./(components)/AuthProvider";

export const metadata = {
  title: "Task App",
  description: "Task management app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
