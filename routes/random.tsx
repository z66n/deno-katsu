import NavButton from "../islands/NavButton.tsx";

export default async function RandomMeal() {
    const api = "https://www.themealdb.com/api/json/v1/1/random.php";
    const res = await fetch(api);
    const data = await res.json();
    const meal = data.meals?.[0];
  
    if (!meal) {
      return <p>Failed to fetch recipe.</p>;
    }
  
    return (
      <html>
        <head><title>{meal.strMeal}</title></head>
        <body style="font-family: sans-serif; line-height: 1.5; max-width: 700px; margin: 2rem auto;">
          <div class="max-w-xl mx-auto p-6 bg-base-100 border border-base-content/20 rounded-box shadow-lg space-y-6">

            <h1 class="text-2xl font-bold text-center text-primary">{meal.strMeal}</h1>

            <img
            src={meal.strMealThumb}
            width="300"
            alt={meal.strMeal}
            class="rounded mx-auto"
            />

            <h2 class="text-l font-semibold text-center text-secondary">
            {meal.strCategory} ・ {meal.strArea}
            </h2>

            <div>
            <h3 class="text-lg font-bold mb-2">👩‍🍳 Instructions</h3>
            <p class="whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>
            </div>

            <div class="flex items-center justify-center gap-4 pt-4">
            <NavButton href="/">🍱 See Katsu Recipe</NavButton>
            <span class="text-gray-400">|</span>
            <NavButton href="/random">🔄 Get Another Recipe</NavButton>
            </div>

          </div>

        </body>
      </html>
    );
  }