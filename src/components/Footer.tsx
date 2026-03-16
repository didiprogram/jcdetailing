import logo from "@/assets/jcd-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <img src={logo} alt="JCD Detailing" className="w-16 h-16 rounded-full object-cover" />
        <span className="font-display text-lg tracking-wider text-foreground">
          JCD<span className="text-primary">DETAILING</span> — Orlando
        </span>
        <p className="text-muted-foreground font-body text-sm">
          © {new Date().getFullYear()} JCD Detailing Orlando. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
