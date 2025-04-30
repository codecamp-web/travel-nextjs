
import { hotelData } from "../../../data/data"
import Heading from "../../Helper/Heading"
import HotelCard from "./HotelCard"

const Hotel = () => {
  return (
    <div className="py-14 sm:w-3/4 mx-auto px-3 sm:px-0">
      <Heading heading="Recommended Hotels"
       subheading="Reservations when you choose a place of tourist"/>
       <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       gap-8 items-center mt-16">
         {hotelData.map((item) => {
          return (
            <div key={item.id}>
              <HotelCard hotel={item} />
            </div>
          )
         })}
       </div>
    </div>
  )
}

export default Hotel
