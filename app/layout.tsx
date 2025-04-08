export const metadata = {
  title: 'Estructura',
  description: 'Plataforma de Ciudadanía Digital',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
