import { Poppins } from "next/font/google";
import { ConfigProvider } from "antd";
import { WidthWrapper } from "@/ui/WidthWrapper";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full flex items-center justify-center bg-[#0A0B0D]"
      style={{ height: "100vh" }}
    >
      <WidthWrapper poppinsClass={poppins.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#ffffff1a",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </WidthWrapper>
    </div>
  );
}