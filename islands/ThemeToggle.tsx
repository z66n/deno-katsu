// islands/ThemeToggle.tsx
import { useState, useEffect } from "preact/hooks";

export default function ThemeToggle() {
  const [isdark, setIsdark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isdark");
    if (saved !== null) {
      const dark = JSON.parse(saved);
      setIsdark(dark);
      document.documentElement.setAttribute("data-theme", dark ? "halloween" : "light");
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
    document.documentElement.setAttribute("data-theme", isdark ? "halloween" : "light");
  }, [isdark]);

  return (
    <div class="fixed bottom-4 right-4 z-50">
      <label class="toggle theme-controller text-base-content cursor-pointer">
        <input
          type="checkbox"
          checked={isdark}
          onChange={() => setIsdark(!isdark)}
          class="hidden"
        />
        <svg aria-label="sun" class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>
        <svg aria-label="moon" class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </div>
  );
}
