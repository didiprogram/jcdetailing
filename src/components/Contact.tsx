import { Phone, MapPin } from "lucide-react";
import ownerImg from "@/assets/owner.jpeg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          GET IN <span className="text-primary text-glow">TOUCH</span>
        </h2>

        <div className="flex flex-col items-center mb-12">
          <img
            src={ownerImg}
            alt="Owner of JCD Detailing"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary mb-4 shadow-lg"
          />
          <p className="font-display text-lg text-foreground font-bold">Meet the Owner</p>
          <p className="text-muted-foreground font-body text-sm">Passionate about making your ride shine</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="border border-border bg-card p-8 text-center card-hover">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Call / Text</h3>
            <a href="tel:+14077204939" className="text-muted-foreground font-body hover:text-primary transition-colors">+1 (407) 720-4939</a>
          </div>
          <div className="border border-border bg-card p-8 text-center card-hover">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground font-body">Orlando, FL</p>
            <p className="text-muted-foreground font-body text-sm">Mobile & Shop Service</p>
          </div>
        </div>
      </div>
    </section>);
};

export default Contact;