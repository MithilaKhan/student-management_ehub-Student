"use client";

import { usePathname } from "next/navigation";

export function WidthWrapper({
  children,
  poppinsClass,
}: {
  children: React.ReactNode;
  poppinsClass: string;
}) {
  const pathname = usePathname();
  const widthClass = pathname === "/register" ? "w-auto" : "w-[570px]";

  return (
    <div
      className={`${poppinsClass} shadow-xl bg-[#3b3b3d] bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100/40 p-7 rounded-md ${widthClass} relative z-10 text-[#f5f4f4]`}
    >
      {children}
    </div>
  );
}