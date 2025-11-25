export default function Banner() {
    return (
        <div className="w-full flex justify-center px-4 sm:px-0">
            <div
                className="w-full max-w-[1280px] mx-auto min-h-[480px] flex flex-col bg-cover bg-center bg-no-repeat min-[480px]:rounded-xl relative shadow-2xl overflow-hidden"
                data-alt="A picturesque farm scene with cows grazing in a green pasture under a clear blue sky."
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%), url("/QQP.jpg")` }}
            >

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                    <h1 className="font-display text-[12rem] md:text-[16rem] font-black text-white/5 tracking-tighter blur-[2px] scale-150 select-none">
                        Cám ơn tất cả
                    </h1>
                </div>

                {/* Container chính để căn chỉnh nội dung */}
                <div className="absolute inset-0 flex flex-col justify-between py-12 pointer-events-none">

                    {/* Phần chữ QQP - Căn chỉnh vị trí trên đầu 3 người */}
                    {/* mt-10: Đẩy xuống một chút từ mép trên để không quá sát */}
                    {/* px-10 md:px-32: Tạo khoảng cách 2 bên để chữ Q và P khớp với người bên trái/phải */}
                    <div className="flex w-full justify-between items-start px-8 md:px-24 lg:px-32 mt-4 md:mt-0">

                        {/* Người bên trái */}
                        <div className="transform -rotate-6 hover:scale-110 transition-transform duration-300">
                            <h2 className="font-display text-7xl md:text-9xl font-bold text-white tracking-tight drop-shadow-2xl filter shadow-black/50">
                                Quân
                            </h2>
                        </div>

                        {/* Người ở giữa - Đẩy lên cao hơn một chút nếu cần (mt-[-20px]) */}
                        <div className="transform hover:scale-110 transition-transform duration-300 mt-8 md:mt-0">
                            <h2 className="font-display text-7xl md:text-9xl font-bold text-secondary tracking-tight drop-shadow-2xl filter shadow-black/50">
                                Phú
                            </h2>
                        </div>

                        {/* Người bên phải */}
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