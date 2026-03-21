import { CalendarCheck } from "lucide-react";

interface BookNowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookNow = ({ open, onOpenChange }: BookNowProps) => {
  return (
    <>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            READY TO <span className="text-primary text-glow">SHINE</span>?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
            Book your appointment today and let us take care of your ride.
          </p>
          <button
            onClick={() => onOpenChange(true)}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display text-lg font-bold px-10 py-4 hover:bg-primary/90 transition-colors tracking-wider"
          >
            <CalendarCheck className="w-6 h-6" />
            BOOK NOW
          </button>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        >
          <div
            className="relative w-full max-w-3xl h-[80vh] mx-4 bg-white border border-border rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-background/80 text-foreground rounded-full hover:bg-background transition-colors font-bold text-sm"
            >
              ✕
            </button>
            <iframe
              src="https://calendar.app.google/RrEbnnHYj23b3qrV6"
              className="w-full h-full border-0"
              title="Book an Appointment"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookNow;
