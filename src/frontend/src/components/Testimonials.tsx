import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review:
      "Ordered a birthday gift hamper for my best friend and she absolutely loved it! The packaging was stunning and delivery was super fast. Will definitely order again!",
    avatar: "PS",
    product: "Birthday Hamper Deluxe",
    avatarBg: "bg-rose-100 text-rose-700",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    review:
      "The anniversary rose box was absolutely stunning — my wife was in tears (happy ones!). The preserved roses look fresh even after weeks. Best gift ever!",
    avatar: "RV",
    product: "Luxury Rose Box Eternal",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Anjali Singh",
    location: "Bangalore",
    rating: 4,
    review:
      "The party decoration kit was perfect for my daughter's 7th birthday. Everything was included — balloons, streamers, banners. Saved me so much time and money!",
    avatar: "AS",
    product: "Party Decoration Complete Kit",
    avatarBg: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    name: "Vikram Patel",
    location: "Ahmedabad",
    rating: 5,
    review:
      "Corporate gift packages are top-notch quality. Our team of 50 loved the executive gift boxes. The custom branding option is a great touch. Highly professional service!",
    avatar: "VP",
    product: "Executive Corporate Gift Box",
    avatarBg: "bg-emerald-100 text-emerald-700",
  },
];

export function Testimonials() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-800">
            What Our Customers Say 💬
          </h2>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Join thousands of happy gifters across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-card border border-gray-100 flex flex-col gap-3 hover:shadow-card-hover transition-all duration-200"
            >
              {/* Rating */}
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={
                      star <= t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-200 fill-gray-200"
                    }
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "{t.review}"
              </p>

              {/* Product label */}
              <div className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-1 rounded-md inline-block w-fit">
                ✓ {t.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-gray-50">
                <div
                  className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
