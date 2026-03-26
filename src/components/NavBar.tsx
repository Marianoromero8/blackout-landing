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
  { title: "Nosotros", href: "#about" },
  { title: "Encuentranos", href: "#find-us" },
  { title: "Reseñas", href: "#reviews" },
  { title: "Contacto", href: "#contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo de blackout */}
        <div className="flex items-center gap-2">
          <span className="flex flex-row gap-4 text-2xl font-bold tracking-tight text-white">
            <p className="font-light">TIENDA</p>
            <p className="font-black">BLACKOUT</p>
          </span>
        </div>

        {/* Menú de Navegación */}
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

        {/* Botón de Acción (Opcional) */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-[#ffff] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#ffff] hover:text-black">
            Pedir presupuesto
          </button>

          {/* Aquí podrías añadir un menú móvil más adelante */}
        </div>
      </div>
    </header>
  );
}
