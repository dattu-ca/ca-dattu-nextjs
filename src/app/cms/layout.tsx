import React from "react";
import './globals.css';

export const metadata = {
  title: 'Sanity CMS | dattu.ca',
  description: 'The Sanity CMS for dattu.ca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
