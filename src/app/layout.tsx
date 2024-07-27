/** @format */
//
"use client";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import SearchBar from "@/components/search-bar";
import { usePathname } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Video App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

// const RootLayout = ({ children }: React.PropsWithChildren) => (
//   <html lang="en">
//     <body>
//       <AntdRegistry>
//         <Navbar >
//         {children}
//       </AntdRegistry>
//     </body>
//   </html>
// );

// export default RootLayout;

const RootLayout = ({ children }: React.PropsWithChildren) => {
  // const router = useRouter();
  // const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {/* <Navbar>
            {router.pathname === '/' && <SearchBar />}
          </Navbar> */}

          {/* <Navbar search={pathname === "/"} /> */}

          {children}
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
