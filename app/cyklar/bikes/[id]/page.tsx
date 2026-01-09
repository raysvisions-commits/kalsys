import Image from "next/image";
import Link from "next/link";

interface Bike {
  id: string;
  name: string;
  price: string;
  description: string;
  images: string[];
}

const bikes: Record<string, Bike> = {
  "1": {
    id: "1",
    name: "Mountain Bike",
    price: "$1,200",
    description: "Perfect for trails and rough terrain.",
    images: ["/bikes/bike1.jpg", "/bikes/bike1-2.jpg"],
  },
  "2": {
    id: "2",
    name: "Road Bike",
    price: "$1,500",
    description: "Lightweight bike for speed and distance.",
    images: ["/bikes/bike2.jpg", "/bikes/bike2-2.jpg"],
  },
  "3": {
    id: "3",
    name: "Electric Bike",
    price: "$2,300",
    description: "Electric assistance for effortless riding.",
    images: ["/bikes/bike3.jpg", "/bikes/bike3-2.jpg"],
  },
  "4": {
    id: "4",
    name: "City Bike",
    price: "$900",
    description: "Comfortable bike for daily city rides.",
    images: ["/bikes/bike4.jpg", "/bikes/bike4-2.jpg"],
  },
};

interface BikeDetailProps {
  params: { id: string };
}

export default function BikeDetailPage({ params }: BikeDetailProps) {
  const bike = bikes[params.id];

  if (!bike) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Cykel hittades inte</h2>
        <Link href="/cyklar" className="text-blue-600 hover:underline mt-4 inline-block">
          Tillbaka till cyklar
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <Link href="/cyklar" className="text-blue-600 hover:underline">
        ← Tillbaka till cyklar
      </Link>

      <h1 className="text-3xl font-semibold text-gray-900">{bike.name}</h1>
      <p className="text-gray-700 text-lg">{bike.description}</p>
      <strong className="text-xl text-gray-900">{bike.price}</strong>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {bike.images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${bike.name} ${idx + 1}`}
            width={600}
            height={400}
            className="w-full h-64 object-contain rounded-lg shadow-md"
          />
        ))}
      </div>
    </main>
  );
}
