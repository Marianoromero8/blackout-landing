import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Inicio", href: "#home" },
  { title: "Catalogo", href: "#catalog" },
  { title: "Cómo Trabajamos", href: "#how-we-work" },
  { title: "Encuentranos", href: "#find-us" },
  { title: "Contacto", href: "#contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <span className="flex flex-row gap-4 text-2xl font-bold tracking-tight text-white">
          <p className="font-light">TIENDA</p>
          <p className="font-black">BLACKOUT</p>
        </span>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <a href={item.href}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:text-[#9ca3af] transition-colors",
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Burger button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-black transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-background/98 backdrop-blur">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white hover:text-zinc-400 transition-colors py-3 border-b border-zinc-800 last:border-0 uppercase tracking-widest"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
