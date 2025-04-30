import { Favorite } from "@mui/icons-material"
import Image from "next/image"

type Props = {
    hotel: {
        id: number
        image: string
        name: string
        location: string
        rating: number
        reviews: string
        price: string
    }
}

const HotelCard = ({ hotel }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Favorite icon */}
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-100 rounded-full
        text-black flex items-center justify-center">
          <Favorite />
        </div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

        {/* Image */}
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div>
        <h1 className="mt-4 text-lg font-semibold text-gray-600 transition-all
        hover:text-green-400 cursor-pointer duration-200">
            {hotel.name}
        </h1>
        <p className="text-sm  mt-3 font-medium">{hotel.location}</p>
        <div className="flex items-center gap-x-3">
            <div className="px-2 py-2 bg-green-400 rounded-md font-bold text-white
            text-sm mt-2">
                {hotel.rating}
            </div>
            <p className="text-gray-700 text-sm font-bold">
                {hotel.reviews} Reviews
            </p>
            <p className="text-gray-700 text-xs font-bold">
                Starting from
                 <span className="text-red-400"> {hotel.price}</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
