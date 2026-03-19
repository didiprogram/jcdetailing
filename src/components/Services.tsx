const services = [
  {
    title: "Deep Exterior Wash",
    subtitle: "Exterior Detail",
    description: "Keep your vehicle looking clean and well-maintained. We perform a quick interior vacuum, a light wipe-down of all panels, and streak-free window cleaning. On the exterior, your vehicle receives a pre-rinse followed by a safe contact wash, along with tire cleaning and shine. Perfect for weekly or bi-weekly maintenance.",
    prices: [
      { type: "Sedans", price: "$80" },
      { type: "Minivans/SUVs", price: "$100" },
      { type: "Trucks & Bigger", price: "$115" },
    ],
  },
  {
    title: "Express Refresh",
    subtitle: "Basic Wash",
    description: "Designed for vehicles with heavy dirt, stains, or buildup. We begin with a deep vacuum, followed by shampooing and extraction of carpets and seats, steam cleaning to sanitize surfaces, stain treatment, and panel restoration with plastic dressing. Interior windows are cleaned for a spotless finish. Ideal for neglected interiors or vehicles that need a full reset.",
    prices: [
      { type: "Sedans", price: "$50" },
      { type: "Trucks", price: "$100" },
      { type: "Minivans/SUVs", price: "$80" },
    ],
  },
  {
    title: "Interior Resurrection",
    subtitle: "Deep Interior Detail",
    description: "Designed for vehicles with heavy dirt, stains, or buildup. We begin with a deep vacuum, followed by shampooing and extraction of carpets and seats, steam cleaning to sanitize surfaces, stain treatment, and panel restoration with plastic dressing. Interior windows are cleaned for a spotless finish. Ideal for neglected interiors or vehicles that need a full reset.",
    prices: [
      { type: "Sedans", price: "$150" },
      { type: "SUVs", price: "$200" },
      { type: "Trucks/Cargo Vans", price: "$225" },
    ],
  },
  {
    title: "Complete Detail",
    subtitle: "Interior & Exterior",
    description: "A complete transformation for both interior and exterior. Inside: deep vacuum, full wipe-down, steam cleaning, and extraction of carpets and seats with interior protection and crystal-clear windows. Outside: engine bay, wheel and tire cleaning, pre-wash, contact wash, paint decontamination, and a high-quality wax for enhanced gloss and protection. Perfect for a full refresh.",
    prices: [
      { type: "Sedans", price: "$220" },
      { type: "SUVs", price: "$235" },
      { type: "Trucks/Cargo Vans", price: "$220–$225" },
    ],
  },
  {
    title: "Ultimate Detail",
    subtitle: "Shop Only — Not Mobile",
    description: "Our most advanced service for full restoration and showroom-level results. Seats are removed for complete access. Deep cleaning, shampooing, extraction, steam cleaning, and stain removal throughout. Wheels are removed for a full deep clean inside and out, plus undercarriage detailing. Includes pre-wash, contact wash, paint decontamination, paint correction if needed, protective wax or sealant, and full engine bay detail. Built for those who want their vehicle restored to its absolute best.",
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
