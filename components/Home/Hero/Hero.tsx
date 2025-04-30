

const Hero = () => {

  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh] ">
        <div className="absolute top-0 left-0 w-full h-full opacity-70"></div>
            <video autoPlay loop preload="metadata" muted
            className="w-full h-full object-cover"  src="/videos/travel.mp4" />
            <div className="absolute z-40 w-full h-full top-[50%] left-[50%]
    translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
            <div className="text-center text-white">
             <h1 className="text-2xl mb-4 md:mb-0 md:text-3xl lg:text-4xl
             font-bold tracking-wider font-mono">
                <span className="text-green-500">Travel </span>
                 All Around The Globe
             </h1>
                <p className="md:text-lg ">
        Place for tourism, adventures over 500+ countries worldwide..</p>
            </div>
        </div>
    </div>
    </div>
  )
}


export default Hero
