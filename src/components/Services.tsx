const services = [
  {
    title: "Deep Exterior Wash",
    subtitle: "Exterior Detail",
    description: "Wheel cleaning, pre-wash, contact wash, decontamination of the paint, wax",
    prices: [
      { type: "Sedans", price: "$80" },
      { type: "Minivans/SUVs", price: "$100" },
      { type: "Trucks & Bigger", price: "$115" },
    ],
  },
  {
    title: "Express Refresh",
    subtitle: "Basic Wash",
    description: "Quick interior cleaning, vacuum, wipe down, windows, quick exterior wash",
    prices: [
      { type: "Sedans", price: "$50" },
      { type: "Trucks", price: "$100" },
      { type: "Minivans/SUVs", price: "$80" },
    ],
  },
  {
    title: "Interior Resurrection",
    subtitle: "Deep Interior Detail",
    description: "Deep vacuum, wipe down all panels, plastic restoration and protection, extraction, steam cleaning, windows, leather conditioning",
    prices: [
      { type: "Sedans", price: "$150" },
      { type: "SUVs", price: "$200" },
      { type: "Trucks/Cargo Vans", price: "$225" },
    ],
  },
  {
    title: "Complete Detail",
    subtitle: "Interior & Exterior",
    description: "Deep vacuum, wipe down all panels, stain removal, steam cleaning, leather condition the seats, pet hair removal",
    prices: [
      { type: "Sedans", price: "$220" },
      { type: "SUVs", price: "$235" },
      { type: "Trucks/Cargo Vans", price: "$220–$225" },
    ],
  },
  {
    title: "Ultimate Detail",
    subtitle: "Shop Only — Not Mobile",
    description: "Deep vacuum, wipe down all panels, plastic restoration & protection, condition seats, steam cleaning, windows, extraction",
    prices: [
      { type: "All Cars", price: "$445" },
      { type: "Big Cars (Cargo Vans)", price: "$450" },
      { type: "Trucks & Bigger", price: "$500" },
    ],
  },
];

const extras = [
  { name: "Wax", price: "$50" },
  { name: "Pet Hair Removal", price: "$50" },
  { name: "Headlight Restoration", price: "$50" },
  { name: "Window Tint Removal", price: "$60" },
  { name: "Paint Correction", price: "$200–$400" },
  { name: "Clay Cleanse", price: "$20" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
          OUR <span className="text-primary text-glow">SERVICES</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto font-body">
          From a quick refresh to a full resurrection — we've got your ride covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-[calc(50%-0.75rem)] [&>*:last-child:nth-child(odd)]:md:mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border bg-card p-6 card-hover"
            >
              <h3 className="font-display text-xl font-bold text-foreground tracking-wide">
                {service.title}
              </h3>
              <span className="text-primary font-display text-sm tracking-widest uppercase">
                {service.subtitle}
              </span>
              <p className="text-muted-foreground font-body text-sm mt-3 mb-5 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.prices.map((p) => (
                  <div key={p.type} className="flex justify-between items-center border-t border-border pt-2">
                    <span className="text-muted-foreground font-body text-sm">{p.type}</span>
                    <span className="text-primary font-display font-bold text-lg">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-6 text-primary tracking-wider">
            EXTRAS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className="flex justify-between items-center border border-border bg-card px-5 py-3 card-hover"
              >
                <span className="font-body text-foreground">{extra.name}</span>
                <span className="text-primary font-display font-bold">{extra.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
