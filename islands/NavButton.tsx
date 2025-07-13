// islands/NavButton.tsx
import { ComponentChildren } from "preact";

type NavButtonProps = {
  href: string;
  children: ComponentChildren; // text, emoji, etc.
  className?: string;
};

export default function NavButton({
  href,
  children,
  className = "btn",
}: NavButtonProps) {
  return (
    <button
      type = "button"
      class={className}
      onClick={() => {
        globalThis.window.location.href = href;
      }}
    >
      {children}
    </button>
  );
}
