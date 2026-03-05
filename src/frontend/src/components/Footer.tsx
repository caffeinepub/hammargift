import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🎁</span>
              <span className="font-display font-bold text-white text-xl">
                HammarGift
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Gifts for Every Heart, Every Moment. We make gift-giving easy,
              joyful, and memorable.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <SiYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Contact", "FAQ", "Track Order"].map((link) => (
                <li key={link}>
                  <a
                    href="https://hammargift.com"
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Return Policy",
                "Privacy Policy",
                "Terms of Service",
                "Shipping Info",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="https://hammargift.com"
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Birthday Gifts",
                "Anniversary",
                "Party Decor",
                "Corporate Gifts",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="https://hammargift.com"
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>
            © {currentYear} HammarGift | www.hammargift.com | All rights
            reserved
          </span>
          <span>
            Built with <span className="text-rose-500">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "hammargift.com")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
