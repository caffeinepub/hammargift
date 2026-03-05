import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useStore } from "../store/useStore";

const banners = [
  {
    id: 1,
    gradient: "from-rose-500 via-pink-500 to-orange-400",
    overlayGradient: "from-rose-900/40 via-transparent to-transparent",
    emoji: "🎂",
    accentEmoji: "🎈",
    tag: "BIRTHDAY SPECIAL",
    tagColor: "bg-amber-400 text-amber-900",
    title: "Birthday Gifts",
    titleHighlight: "for Everyone",
    subtitle: "Make every birthday magical with handpicked surprises",
    cta: "Shop Birthday Gifts",
    ctaStyle: "bg-amber-400 hover:bg-amber-300 text-amber-950",
    category: "Birthday",
    sideEmoji: "🎂",
    decorEmojis: [
      { emoji: "🎈", top: "12%", left: "3%", size: "text-5xl", delay: 0 },
      { emoji: "🎉", top: "18%", right: "4%", size: "text-6xl", delay: 0.4 },
      { emoji: "✨", bottom: "20%", left: "6%", size: "text-4xl", delay: 0.8 },
      { emoji: "🍰", bottom: "15%", right: "8%", size: "text-4xl", delay: 0.2 },
      { emoji: "🎊", top: "55%", right: "3%", size: "text-3xl", delay: 1.2 },
      { emoji: "🎀", top: "8%", left: "22%", size: "text-2xl", delay: 0.6 },
    ],
  },
  {
    id: 2,
    gradient: "from-red-600 via-rose-500 to-pink-400",
    overlayGradient: "from-red-950/40 via-transparent to-transparent",
    emoji: "💍",
    accentEmoji: "🌹",
    tag: "ANNIVERSARY",
    tagColor: "bg-pink-100 text-rose-800",
    title: "Anniversary",
    titleHighlight: "Surprises",
    subtitle: "Celebrate love with the perfect gift — roses, keepsakes & more",
    cta: "Shop Anniversary",
    ctaStyle: "bg-white/95 hover:bg-white text-rose-700",
    category: "Anniversary",
    sideEmoji: "💍",
    decorEmojis: [
      { emoji: "🌹", top: "10%", left: "3%", size: "text-5xl", delay: 0 },
      { emoji: "💕", top: "14%", right: "4%", size: "text-6xl", delay: 0.4 },
      { emoji: "💎", bottom: "18%", left: "5%", size: "text-4xl", delay: 0.8 },
      { emoji: "🕯️", top: "52%", right: "6%", size: "text-4xl", delay: 0.2 },
      {
        emoji: "💝",
        bottom: "12%",
        right: "10%",
        size: "text-3xl",
        delay: 1.0,
      },
      { emoji: "🥂", top: "8%", left: "24%", size: "text-2xl", delay: 0.6 },
    ],
  },
  {
    id: 3,
    gradient: "from-amber-500 via-orange-400 to-yellow-400",
    overlayGradient: "from-amber-900/30 via-transparent to-transparent",
    emoji: "🎉",
    accentEmoji: "🎈",
    tag: "PARTY ESSENTIALS",
    tagColor: "bg-rose-600 text-white",
    title: "Party Decoration",
    titleHighlight: "Kits",
    subtitle: "Transform any space into a celebration with our premium kits",
    cta: "Shop Party Decor",
    ctaStyle: "bg-rose-600 hover:bg-rose-700 text-white",
    category: "Party Decor",
    sideEmoji: "🎉",
    decorEmojis: [
      { emoji: "🎈", top: "10%", left: "3%", size: "text-6xl", delay: 0 },
      { emoji: "🎊", top: "14%", right: "4%", size: "text-5xl", delay: 0.4 },
      { emoji: "✨", bottom: "20%", left: "5%", size: "text-4xl", delay: 0.8 },
      { emoji: "🎆", top: "50%", right: "5%", size: "text-5xl", delay: 0.2 },
      {
        emoji: "🪅",
        bottom: "12%",
        right: "12%",
        size: "text-3xl",
        delay: 1.0,
      },
      { emoji: "🎀", top: "7%", left: "26%", size: "text-3xl", delay: 0.6 },
    ],
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { setActiveCategory } = useStore();

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setIsTransitioning(false);
      }, 250);
    },
    [isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % banners.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + banners.length) % banners.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const banner = banners[current];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`relative bg-gradient-to-br ${banner.gradient} transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        style={{ minHeight: "clamp(360px, 44vw, 560px)" }}
      >
        {/* Left directional overlay for depth */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${banner.overlayGradient} pointer-events-none`}
        />

        {/* Decorative floating emojis */}
        {banner.decorEmojis.map((d) => (
          <div
            key={d.emoji + String(d.delay)}
            className={`absolute ${d.size} pointer-events-none select-none`}
            style={{
              top: d.top,
              bottom: d.bottom,
              left: d.left,
              right: d.right,
              opacity: 0.55,
              animation: `float ${3.2 + d.delay * 0.8}s ease-in-out infinite`,
              animationDelay: `${d.delay}s`,
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
            }}
          >
            {d.emoji}
          </div>
        ))}

        {/* Main content — split layout on desktop */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12"
          style={{ minHeight: "clamp(360px, 44vw, 560px)" }}
        >
          {/* Left: text content */}
          <div className="flex-1 text-white text-center md:text-left py-12 md:py-16">
            {/* Tag pill */}
            <div className="inline-flex items-center mb-4">
              <span
                className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full ${banner.tagColor} uppercase`}
              >
                {banner.tag}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold leading-[1.05] mb-3 drop-shadow-md"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
            >
              {banner.title}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{banner.titleHighlight}</span>
                {/* Underline accent */}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-2 rounded-full opacity-40"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
                  }}
                />
              </span>
            </h1>

            <p
              className="text-white/85 mb-7 font-medium max-w-md mx-auto md:mx-0"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}
            >
              {banner.subtitle}
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory(banner.category)}
              className={`inline-flex items-center gap-2 ${banner.ctaStyle} font-bold px-7 py-3.5 rounded-2xl text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0`}
            >
              {banner.cta}
              <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Right: giant emoji showcase (desktop only) */}
          <div
            className="hidden md:flex flex-shrink-0 items-center justify-center"
            style={{ width: "clamp(180px, 20vw, 280px)" }}
          >
            <div
              className="w-full aspect-square rounded-3xl flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(2px)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <span
                className="animate-float select-none drop-shadow-2xl"
                style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
              >
                {banner.sideEmoji}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Prev/Next arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/85 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Previous banner"
      >
        <ChevronLeft size={22} className="text-gray-700" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/85 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Next banner"
      >
        <ChevronRight size={22} className="text-gray-700" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((b, i) => (
          <button
            type="button"
            key={b.id}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full border-2 border-white/60 ${
              i === current
                ? "w-7 h-3 bg-white border-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to banner ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
