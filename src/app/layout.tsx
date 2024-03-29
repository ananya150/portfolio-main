import './globals.css'
import { ThemeContextProvider  } from '@/context/themeContext';
import Curtain from '@/components/common/curtain/Curtain';
import { headers } from "next/headers";
import { AnimatePresence } from 'framer-motion';
import Wrapper from '@/components/common/Wrapper';

export const metadata = {
  title: 'Ananya | Khandelwal',
  description: 'porfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,400&display=swap" rel="stylesheet"/>
        <link href="https://api.fontshare.com/v2/css?f[]=author@600&display=swap" rel="stylesheet"/>
        <link href="https://api.fontshare.com/v2/css?f[]=alpino@400&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ThemeContextProvider>
          <Wrapper>
            {children}
          </Wrapper>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
