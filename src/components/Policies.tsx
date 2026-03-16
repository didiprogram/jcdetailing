const policies = [
  { title: "Vehicle Inspection & Documentation", text: "Before any service begins, the vehicle will be inspected for dents, scratches, oxidation, missing or broken parts, and any existing damage. Photos or videos will be taken for mutual protection." },
  { title: "Safety & Conduct", text: "If at any point we feel unsafe, threatened, or the client behaves in a rude or inappropriate manner, we reserve the right to leave the job immediately. No fees will be charged in this situation." },
  { title: "Accountability for Our Work", text: "If any damage occurs as a direct result of our work, we will take full responsibility and cover the cost of repair." },
  { title: "Service Upcharges", text: "If any client requests additional work beyond what was originally booked or paid for, an upcharge will be applied accordingly." },
  { title: "Payment Policy", text: "Payment is due only after the client has inspected the vehicle and confirmed that the service meets their expectations." },
  { title: "Excess Trash Fee", text: "If the vehicle contains excessive trash (clothes, boxes, food bags, etc.), there will be a $25 trash removal fee. If the client chooses not to pay this fee, the service will not be performed." },
  { title: "Rescheduling & Cancellations", text: "We reserve the right to cancel or reschedule an appointment if necessary due to weather, emergencies, or other valid reasons." },
  { title: "Refunds for Prepaid Services", text: "If the client prepaid for a service and we are unable to make the appointment, the payment will be fully refunded." },
  { title: "Satisfaction Guarantee", text: "If the client is not satisfied with any part of the service, we will return and fix the issue at no additional charge." },
  { title: "Required Photos for Booking", text: "Clients must provide photos of their vehicle when contacting us to book a service. This helps us assess the condition and ensure accurate pricing." },
];

const Policies = () => {
  return (
    <section id="policies" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          OUR <span className="text-primary text-glow">POLICIES</span>
        </h2>
        <div className="space-y-6">
          {policies.map((policy, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-primary font-display font-bold text-xl mt-0.5 shrink-0">
                {i + 1}.
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground tracking-wide mb-1">
                  {policy.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {policy.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;
