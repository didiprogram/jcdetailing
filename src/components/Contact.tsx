import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          GET IN <span className="text-primary text-glow">TOUCH</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border bg-card p-8 text-center card-hover">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Call / Text</h3>
            <p className="text-muted-foreground font-body">
</p>
          </div>
          <div className="border border-border bg-card p-8 text-center card-hover">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground font-body">Orlando, FL</p>
            <p className="text-muted-foreground font-body text-sm">Mobile & Shop Service</p>
          </div>
          <div className="border border-border bg-card p-8 text-center card-hover">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground font-body">Mon–Sat: 8AM–6PM</p>
            <p className="text-muted-foreground font-body text-sm">Sunday: By Appointment</p>
          </div>
        </div>
      </div>
    </section>);
};

export default Contact;