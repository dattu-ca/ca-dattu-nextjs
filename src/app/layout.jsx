import './globals.css';
import "tw-elements/dist/css/tw-elements.min.css";
import { Inter } from 'next/font/google';
import NavbarComponent from "../components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | dattu.ca',
    default: 'dattu.ca', // a default is required when creating a template
  },
}

export default function RootLayout({
  children,
    ...props
}) {
  return (
    <html lang="en">
      <body className={['inter.className'].join(' ')}>
        <NavbarComponent />  
      {children}
      </body>
    </html>
  )
}