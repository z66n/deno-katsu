import { serve } from "https://deno.land/std/http/server.ts";

// 🍱 Tonkatsu HTML Page
function getKatsuHtml(): Response {
  const html = `
    <html>
      <head><title>Tonkatsu (Japanese Fried Pork Cutlet)</title></head>
      <body style="font-family: sans-serif; line-height: 1.5; max-width: 700px; margin: 2rem auto;">
        <h1>Tonkatsu (Japanese Fried Pork Cutlet)</h1>
        <img src="https://images.unsplash.com/photo-1710811891369-861113f8422b" width="300" alt="Tonkatsu" />
        <h2>Pork - Japanese</h2>
        <h3>Ingredients</h3>
        <ul>
          <li>2 pork loin chops (boneless, ~1/2 inch thick)</li>
          <li>Salt & pepper</li>
          <li>1/2 cup flour</li>
          <li>1 egg (beaten)</li>
          <li>1 cup panko (Japanese breadcrumbs)</li>
          <li>Oil for deep frying</li>
        </ul>
        <h3>Instructions</h3>
        <ol>
          <li>Season pork with salt & pepper.</li>
          <li>Dredge in flour → dip in egg → coat with panko.</li>
          <li>Heat oil to 170–180°C (340–360°F).</li>
          <li>Fry until golden brown (~5 min per side).</li>
          <li>Drain on paper towel. Slice and serve with shredded cabbage and tonkatsu sauce.</li>
        </ol>
        <p><a href="/random">🔄 Try a Random Recipe</a></p>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

// 🎲 Random Recipe Page
async function getRandomMealHtml(): Promise<Response> {
  const api = "https://www.themealdb.com/api/json/v1/1/random.php";
  const res = await fetch(api);
  const data = await res.json();
  const meal = data.meals?.[0];

  if (!meal) {
    return new Response("Failed to fetch recipe.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const html = `
    <html>
      <head><title>${meal.strMeal}</title></head>
      <body style="font-family: sans-serif; line-height: 1.5; max-width: 700px; margin: 2rem auto;">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" width="300" alt="${meal.strMeal}" />
        <h2>${meal.strCategory} - ${meal.strArea}</h2>
        <h3>Instructions</h3>
        <p>${meal.strInstructions}</p>
        <p><a href="/">🍱 See Katsu Recipe</a> | <a href="/random">🔄 Get Another Recipe</a></p>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

// 🚀 Main Handler
// Get Firebase Studio Preview Port from environment variable
const port = Deno.env.get("PORT") ?? "8000";

serve(async (req: Request) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (pathname === "/" || pathname === "/katsu") {
    return getKatsuHtml();
  }

  if (pathname === "/random") {
    return await getRandomMealHtml();
  }

  return new Response("404 Not Found", { status: 404 });
}, { port: Number(port) });
