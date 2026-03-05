import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    setEmail("");
    toast.success(
      "🎉 Subscribed! Check your inbox for your 10% discount code.",
    );
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-8 -left-8 text-8xl opacity-20 rotate-12">
          🎁
        </div>
        <div className="absolute top-4 right-16 text-6xl opacity-20 -rotate-6">
          🎀
        </div>
        <div className="absolute bottom-4 left-20 text-5xl opacity-20 rotate-6">
          ✨
        </div>
        <div className="absolute -bottom-4 -right-4 text-8xl opacity-20 -rotate-12">
          🎊
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="text-4xl md:text-5xl mb-4">🎁</div>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white mb-2">
          Get 10% off your first order!
        </h2>
        <p className="text-white/80 text-sm md:text-lg mb-7">
          Subscribe to our newsletter for exclusive deals and gift ideas
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              data-ocid="newsletter.input"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 text-sm outline-none focus:ring-2 focus:ring-white/50 bg-white placeholder:text-gray-400"
              required
            />
            <button
              data-ocid="newsletter.submit_button"
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 active:bg-black text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 whitespace-nowrap"
            >
              <Send size={16} />
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 inline-flex items-center gap-2 text-white font-medium">
            <span className="text-2xl">🎉</span>
            Subscribed! Check your inbox for your discount code.
          </div>
        )}

        <p className="text-white/60 text-xs mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
