import { useStore } from "../store/useStore";

const categories = [
  { emoji: "🎂", label: "Birthday", category: "Birthday" },
  { emoji: "💍", label: "Anniversary", category: "Anniversary" },
  { emoji: "🎉", label: "Party Decor", category: "Party Decor" },
  { emoji: "👶", label: "Kids (0-12)", category: "Kids" },
  { emoji: "🧑", label: "Teens", category: "Teens" },
  { emoji: "👨", label: "Men", category: "Men" },
  { emoji: "👩", label: "Women", category: "Women" },
  { emoji: "👴", label: "Seniors", category: "Seniors" },
  { emoji: "🏢", label: "Corporate", category: "Corporate" },
  { emoji: "🎁", label: "Gift Combos", category: "Combos" },
  { emoji: "🌹", label: "Flowers", category: "Birthday" },
  { emoji: "🍫", label: "Chocolates", category: "Birthday" },
];

export function CategoryTiles() {
  const { setActiveCategory, activeCategory } = useStore();

  return (
    <section className="py-8 md:py-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-display font-bold text-xl md:text-2xl text-gray-800 mb-5 text-center">
          Shop by Category
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.category;
            return (
              <button
                type="button"
                key={cat.label}
                onClick={() => setActiveCategory(cat.category)}
                className="flex-shrink-0 flex flex-col items-center gap-2 group transition-transform duration-200 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow transition-all duration-200 ${
                    isActive
                      ? "bg-rose-100 ring-2 ring-rose-500 ring-offset-2 shadow-rose-glow"
                      : "bg-white group-hover:bg-rose-50 group-hover:shadow-md"
                  }`}
                >
                  <span className="text-3xl md:text-4xl">{cat.emoji}</span>
                </div>
                <span
                  className={`text-xs font-medium text-center w-16 md:w-20 leading-tight ${
                    isActive ? "text-rose-600 font-semibold" : "text-gray-600"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
