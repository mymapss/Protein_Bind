"use client"

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Loader from '@/components/common/Loader';
import * as Ably from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/app/context/UserContext';
import '@/css/style.css'; // Import your global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const client = new Ably.Realtime({
    key: "xiEQTw.SBJKWA:Kv7RDv6PngxN8y8ttHsOWHDQqchaEYtU9rgKefhsl7o",
  });

  return (
    <html lang="en">
      <head>
        {/* Add your global scripts and meta tags here */}
        <Script
          src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"
          strategy="beforeInteractive"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <UserProvider>
            <AblyProvider client={client}>
              <ChannelProvider channelName="chat-demo1">
                <div className="font-poppins dark:bg-boxdark-2 dark:text-bodydark">
                  {loading ? <Loader /> : children}
                </div>
              </ChannelProvider>
            </AblyProvider>
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
