import { Mail } from "@mui/icons-material"




const Newsletter = () => {
  return (
    <div  className="py-16 sm:w-3/4 mx-auto px-3 sm:px-0 text-gray-700
     flex flex-col items-center justify-center ">
        <Mail style={{fontSize:50}}/> 
        <h1 className="text-lg sm:text-xl md:text-2xl  font-semibold
        mt-10 tracking-widest">
            Your Travel Journey Starts Here
        </h1>
        <p className="mt-3 text-xs sm:text-sm">
            Sign up and we&apos;ll send the best deals to you
        </p>
        <div className="w-full">
            <input type="text" className="px-6 py-2.5 bg-gray-700 mt-8 w-4/5 sm:w-3/5
            block mx-auto rounded-lg outline-none text-white"
             placeholder="Email Address"/>
             <button className="px-6 py-3.5 bg-amber-700 text-white 
             transition-all duration-200 mt-8 w-2/5 block rounded-lg outline-none
             mx-auto hover:bg-gray-700">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
