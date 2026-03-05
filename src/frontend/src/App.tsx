import { Toaster } from "@/components/ui/sonner";
import { AnniversaryPartySection } from "./components/AnniversaryPartySection";
import { BirthdaySection } from "./components/BirthdaySection";
import { CartDrawer } from "./components/CartDrawer";
import { CategoryTiles } from "./components/CategoryTiles";
import { FlashSale } from "./components/FlashSale";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Newsletter } from "./components/Newsletter";
import { QuickViewModal } from "./components/QuickViewModal";
import { Testimonials } from "./components/Testimonials";
import { TrendingGifts } from "./components/TrendingGifts";
import { TrustBadges } from "./components/TrustBadges";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <HeroBanner />
        <CategoryTiles />
        <FlashSale />
        <TrendingGifts />
        <BirthdaySection />
        <AnniversaryPartySection />
        <TrustBadges />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <QuickViewModal />
    </div>
  );
}
