import { useState } from "react";
import exteriorWash from "@/assets/gallery/exterior-wash.jpeg";
import interiorDeepClean from "@/assets/gallery/interior-deep-clean.jpeg";
import wheelClean from "@/assets/gallery/wheel-clean.jpeg";
import carpetClean from "@/assets/gallery/carpet-clean.jpeg";
import floorMat from "@/assets/gallery/floor-mat.jpeg";
import backseatRestore from "@/assets/gallery/backseat-restore.jpeg";
import engineBay from "@/assets/gallery/engine-bay.jpeg";
import seatDetail from "@/assets/gallery/seat-detail.jpeg";
import wheelDetail from "@/assets/gallery/wheel-detail.jpeg";
import exteriorBody from "@/assets/gallery/exterior-body.jpeg";

const galleryItems = [
  { src: exteriorWash, label: "Exterior Wash", category: "exterior" },
  { src: exteriorBody, label: "Full Body Detail", category: "exterior" },
  { src: wheelClean, label: "Wheel Restoration", category: "exterior" },
  { src: wheelDetail, label: "Wheel Deep Clean", category: "exterior" },
  { src: interiorDeepClean, label: "Interior Deep Clean", category: "interior" },
  { src: carpetClean, label: "Carpet Cleaning", category: "interior" },
  { src: floorMat, label: "Floor Mat Detail", category: "interior" },
  { src: seatDetail, label: "Seat Restoration", category: "interior" },
  { src: backseatRestore, label: "Backseat Restore", category: "interior" },
  { src: engineBay, label: "Engine Bay Detail", category: "engine" },
];

const filters = [
  { key: "all", label: "All" },
  { key: "exterior", label: "Exterior" },
  { key: "interior", label: "Interior" },
  { key: "engine", label: "Engine" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground mb-4">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Real results from real clients. See the difference our professional detailing makes.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all duration-300 font-[family-name:var(--font-display)] ${
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20 border border-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {filtered.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item.src)}
              className="group relative overflow-hidden rounded-sm border border-border cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <img
                src={item.src}
                alt={`${item.label} - Before and After`}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-foreground font-[family-name:var(--font-display)] text-lg font-semibold">
                    {item.label}
                  </p>
                  <p className="text-primary text-sm font-[family-name:var(--font-body)]">Before → After</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary text-3xl font-bold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Before and After Detail"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
