import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer"

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
