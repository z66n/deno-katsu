import NavButton from "../islands/NavButton.tsx";

export default function KatsuPage() {
    return (
      <html>
        <head><title>Tonkatsu (Japanese Fried Pork Cutlet)</title></head>
        <body style="font-family: sans-serif; line-height: 1.5; max-width: 700px; margin: 2rem auto;">
          <div class="max-w-xl mx-auto p-6 bg-base-100 border border-base-content/20 rounded-box shadow-lg space-y-6">

            <h1 class="text-2xl font-bold text-center text-primary">Tonkatsu (Japanese Fried Pork Cutlet)</h1>

            <img
            src="https://images.unsplash.com/photo-1710811891369-861113f8422b"
            width="300"
            alt="Tonkatsu"
            class="rounded mx-auto"
            />

            <h2 class="text-l font-semibold text-center text-secondary">Pork ・ Japanese</h2>

            <div>
            <h3 class="text-lg font-bold mb-2">🍳 Ingredients</h3>
            <ul class="list-disc list-inside space-y-1">
                <li>2 pork loin chops (boneless, ~1/2 inch thick)</li>
                <li>Salt & pepper</li>
                <li>1/2 cup flour</li>
                <li>1 egg (beaten)</li>
                <li>1 cup panko (Japanese breadcrumbs)</li>
                <li>Oil for deep frying</li>
            </ul>
            </div>

            <div>
            <h3 class="text-lg font-bold mb-2">👩‍🍳 Instructions</h3>
            <ol class="list-decimal list-inside space-y-1">
                <li>Season pork with salt & pepper.</li>
                <li>Dredge in flour → dip in egg → coat with panko.</li>
                <li>Heat oil to 170–180°C (340–360°F).</li>
                <li>Fry until golden brown (~5 min per side).</li>
                <li>Drain on paper towel. Slice and serve with shredded cabbage and tonkatsu sauce.</li>
            </ol>
            </div>

            <div class="text-center pt-4">
            <NavButton href="/random" className="btn btn-accent">🔄 Try a Random Recipe</NavButton>
            </div>

          </div>

        </body>
      </html>
    );
  }