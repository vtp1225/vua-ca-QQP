export default function Banner() {
    return (
        <div className="w-full flex justify-center px-4 sm:px-0">
            <div
                className="w-full max-w-[1280px] mx-auto min-h-[480px] flex flex-col bg-cover bg-center bg-no-repeat min-[480px]:rounded-xl relative shadow-2xl overflow-hidden"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%), url("/images/QQP.jpg")` }}
            >
                <div className="absolute inset-0 flex flex-col justify-between py-12 pointer-events-none">
                    <div className="flex w-full justify-between items-start px-8 md:px-24 lg:px-32 mt-4 md:mt-0">
                        <div className="transform -rotate-6 hover:scale-110 transition-transform duration-300">
                            <h2 className="font-display text-7xl md:text-9xl font-bold text-white tracking-tight drop-shadow-2xl filter shadow-black/50">
                                Quân
                            </h2>
                        </div>

                        <div className="transform hover:scale-110 transition-transform duration-300 mt-8 md:mt-0">
                            <h2 className="font-display text-7xl md:text-9xl font-bold text-secondary tracking-tight drop-shadow-2xl filter shadow-black/50">
                                Phú
                            </h2>
                        </div>

                        <div className="transform rotate-6 hover:scale-110 transition-transform duration-300">
                            <h2 className="font-display text-7xl md:text-9xl font-bold text-white tracking-tight drop-shadow-2xl filter shadow-black/50">
                                Quân
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}