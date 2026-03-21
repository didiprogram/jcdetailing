import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Policies from "@/components/Policies";
import Contact from "@/components/Contact";
import BookNow from "@/components/BookNow";
import Footer from "@/components/Footer";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookNow={() => setBookingOpen(true)} />
      <Hero />
      <Services />
      <Gallery />
      <Policies />
      <Contact />
      <BookNow open={bookingOpen} onOpenChange={setBookingOpen} />
      <Footer />
    </div>
  );
};

export default Index;
