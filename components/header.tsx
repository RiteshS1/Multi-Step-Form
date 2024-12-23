import { ThemeToggle } from "./theme-toggle";
import { ClipboardList } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-6 w-6" />
          <span className="font-semibold text-lg">Zenstreet AI Form</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}