import Link from "next/link";

interface Bike {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface BikeCardProps {
  bike: Bike;
}

export default function BikeCard({ bike }: BikeCardProps) {
  return (
    <Link href={`/cyklar/${bike.id}`} className="block">
      <div className="border border-black flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl  hover:scale-105 transition-transform transition-shadow ">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-48 object-contain bg-transparent"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg text-gray-900">{bike.name}</h2>
          <p className="text-gray-700">{bike.price}</p>
        </div>
      </div>
    </Link>
  );
}
