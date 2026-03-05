const badges = [
  {
    emoji: "🚚",
    title: "Fast Delivery",
    subtitle: "Free delivery above ₹499",
    bg: "bg-blue-50",
    ring: "ring-blue-100",
  },
  {
    emoji: "🎁",
    title: "Beautiful Packaging",
    subtitle: "Gifts wrapped to impress",
    bg: "bg-rose-50",
    ring: "ring-rose-100",
  },
  {
    emoji: "↩️",
    title: "Easy Returns",
    subtitle: "7-day hassle-free returns",
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
  },
  {
    emoji: "💳",
    title: "Secure Payments",
    subtitle: "100% safe & encrypted",
    bg: "bg-amber-50",
    ring: "ring-amber-100",
  },
];

export function TrustBadges() {
  return (
    <section className="py-10 md:py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-800 text-center mb-8">
          Why Choose HammarGift? 🏆
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`${badge.bg} ring-1 ${badge.ring} rounded-2xl p-5 md:p-6 flex flex-col items-center text-center gap-3 transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className="text-4xl md:text-5xl">{badge.emoji}</div>
              <div>
                <h3 className="font-display font-bold text-base md:text-lg text-gray-800">
                  {badge.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
