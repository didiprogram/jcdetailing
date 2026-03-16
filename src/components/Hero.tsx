import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/jcd-logo.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img src={logo} alt="JCD Detailing" className="w-48 h-48 mx-auto mb-8 rounded-2xl object-cover shadow-2xl" />
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
          PREMIUM CAR <span className="text-primary text-glow">DETAILING</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Orlando's trusted mobile & shop detailing service. We bring the shine to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-primary text-primary-foreground px-8 py-4 font-display text-lg tracking-wider uppercase hover:bg-primary/80 transition-colors"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-8 py-4 font-display text-lg tracking-wider uppercase hover:bg-primary/10 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
