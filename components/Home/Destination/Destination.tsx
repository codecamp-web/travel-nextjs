import Heading from "../../Helper/Heading"
import Slider from "./Slider"

const Destination = () => {
  return (
    <div className="py-20  sm:w-3/4 mx-auto px-3 sm:px-0">
      <Heading heading="Xiting Famous Destinations" 
      subheading="Want to spend time with loved ones or time away from stress or work"/>
      <div className="mt-14">
          <Slider />
      </div>
    </div>
  )
}

export default Destination
