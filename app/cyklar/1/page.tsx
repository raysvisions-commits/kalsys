"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const bikeImages = [
  "/bikes/bike1.jpg",
  "/bikes/bike1-2.jpg",
  "/bikes/bike1-3.jpg",
];

export default function Bike1Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? bikeImages.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === bikeImages.length - 1 ? 0 : prev + 1));

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      {/* Text column on left */}
      <div className="flex-1 flex flex-col justify-start space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Mountain Bike
        </h1>
        <p className="text-gray-700">
          Vår Mountain Bike är byggd för tuffa terränger och långa trails. Med robust
          ram, bra dämpning och högkvalitativa växlar får du full kontroll över alla
          typer av underlag – perfekt för både nybörjare och erfarna cyklister.
        </p>
        <p className="text-gray-900 font-semibold text-lg">Pris: 12 000 SEK</p>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-900 mb-2">Extra information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Rammaterial: Aluminium</li>
            <li>Växlar: 21-speed Shimano</li>
            <li>Däck: 27.5" tubeless ready</li>
            <li>Garanti: 2 år</li>
          </ul>
        </div>
      </div>

      {/* Image carousel on right */}
      <div className="flex-1 flex flex-col md:flex-row gap-4">
        {/* Thumbnails column */}
        <div className="flex md:flex-col gap-2 justify-center md:justify-start">
          {bikeImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`border rounded-lg overflow-hidden transition-transform transform ${
                currentIndex === idx ? "border-blue-600 scale-105" : "border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={64}
                height={64}
                className="object-cover w-16 h-16"
              />
            </button>
          ))}
        </div>

        {/* Main image & arrows */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-lg h-72 md:h-80 rounded-lg overflow-hidden bg-transparent">
            <Image
              src={bikeImages[currentIndex]}
              alt={`Mountain Bike ${currentIndex + 1}`}
              fill
              style={{ objectFit: "contain", objectPosition: "top center" }}
              className="rounded-lg"
            />
          </div>

          {/* Left arrow */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <HiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <HiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </main>
  );
}
