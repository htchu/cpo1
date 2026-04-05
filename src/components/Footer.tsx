import type { Dictionary } from "@/i18n/types";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-slate-800 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {dict.footer.copyright}
        </p>
        <p className="text-xs mt-1">{dict.footer.department}</p>
      </div>
    </footer>
  );
}
