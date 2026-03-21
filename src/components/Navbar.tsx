import { useState } from "react";
import logo from "@/assets/jcd-logo.jpeg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Policies", href: "#policies" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onBookNow }: { onBookNow: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="JCD Detailing Orlando" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-display text-xl font-bold tracking-wider text-foreground">
            JCD<span className="text-primary">DETAILING</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onBookNow}
            className="bg-primary text-primary-foreground px-5 py-2 font-display text-sm tracking-wider uppercase hover:bg-primary/80 transition-colors"
          >
            Book Now
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onBookNow(); }}
            className="block w-full mt-2 bg-primary text-primary-foreground px-5 py-2 font-display text-sm tracking-wider uppercase text-center"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
