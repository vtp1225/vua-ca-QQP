import Header from "../components/header"
import Footer from "../components/footer"
import { useState } from "react"

export default function ProductDetail() {
    // State giả lập cho số lượng và tab đang chọn
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('desc');

    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                        {/* 2. PRODUCT IMAGES GALLERY */}
                        <div className="flex flex-col gap-4">
                            {/* Main Image */}
                            <div className="group relative w-full aspect-square overflow-hidden rounded-2xl bg-white dark:bg-white/5 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                                <div
                                    className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfvzXEljq1QYNfzvYiYBF_J5a3xyqpi7czfDy3fBRGUe3yCulp_NLq9MWGwOEpHtE6WFQdYVGVcUxvJ54CwMkGV8h5zll5f_cOJ8Fm-LXicukT6lRptDPd8XaAQAh6fqCe8K-0oU4Lp6bKNMR8DIssU8NTd23_jsj3JXZGDYkS_qlLGc3BifJNoBXC_jaS8L-otFofub-GbtuUItfeXGjh4gsPPVHsvTcj0X9Dwx7ckB6g2WSQdhpGd1Tq8A20ICMEIDQa3p7vvKs")' }}
                                ></div>
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 gap-4">
                                {[
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBXTlNwCH9b7b9Q5spmX9eo56TiWMH3l18-QzNa-rjSphIKzFnP1e9RnIjvvhoEqqLuzeHXwDacL9Wbkqhtjfpju60nVzxKDEF2R5t3cVU6X_libczaFMT0ogJru-1bZvS_LWgVAjxpbnxA03Ne7kXimHcoymkbezpi2EGgYKmYhnxd1DOqk37DACLSL6gJaTcl8p6N12g7T9Tj7SMqWtNtf1EmvN4S1kcgsOXwNmKEJGqin_5mAHyON5g-tHBGuj4RG_5UZHhCPQ4",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ghFr0eTuSfiW4TvOVxXsbnVMmYtHb90UCG9vWqBVu37gPkq4Ofp7V0A8YJFJAahdduRtzwPKvJ9V3QlA0PMrGA0fF1vr0u7MIxmCKEHoGXwC09VSFdosmF6U2NAFj2iol4cwHzkMRGkz4cvtsEkXFeASLDiVWwsSk9uYLHSee8CNZufrCoftpZLkAlAVM79DJEzoEfrq3ek2YdJ4trYXIYFxVzjZwbMrtjEtNJHX4DngBH6Leoh5MeOzShcaRRBOEtKVbxPoybY",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAU-D8sUvMDFjkY7gbCOeuzWDVC8C1hF3LfGF9fsumPPC0SLr7QjFQDQgXEOvsgoV4szb62W_R9Ae0eNg1NLA1t0wr4DoSGyblSP4bc-fg4aC5gfxnH1X7a3-3nx9zlSsEFPt6wYy94NPgS6ALoMgbX1wATbTy6pk5iutc5h7QUAtGaZfWTBJzrpwJQZEaCdvwGoXBf94lfR7SElj6xVSesKjOBL6jyFdAvtcUiAnaf7VdAl2qgrFLvkF2hW5FjLUW__CXsIW6_UHg",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmL2v5b1lUf0187ppPxURlghgUtBiSzflyY5A0en96Gh6QNJ-MAe2UpfNN_rxrEpi6wd8TnvLGnpy7Pj1nRc4L7OjZjk71M1kxspvw_-0etC0LiuSC0bH9gnyGiaWg9C5p8ktpTEpy8Kl3mSeS61xFM2TK5f4RR64ua-TEzAQdepvAIia1-N2bLE2CFptuUqk7krXd7KPcCXAFdRK9JRq9vFn0JLzNjy2UhBxb_CgfMQADRg7tkf0m220HP2PYeiGmhP9kqVPfEkQ"
                                ].map((img, index) => (
                                    <div key={index} className="aspect-square cursor-pointer rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10 opacity-70 hover:opacity-100 hover:ring-secondary transition-all">
                                        <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url("${img}")` }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. PRODUCT INFO */}
                        <div className="flex flex-col h-full">
                            <div className="mb-6">
                                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white leading-tight mb-2">
                                    Phi lê Cá hồi Na Uy Tươi
                                </h1>
                                <p className="text-sm font-medium text-text-color/60 dark:text-gray-400">SKU: NV-SAL-001</p>
                            </div>

                            {/* Ratings */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex text-secondary">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="material-symbols-outlined text-xl fill-current">star</span>
                                    ))}
                                </div>
                                <span className="text-sm text-text-color/60 dark:text-gray-400 border-l border-gray-300 pl-4">122 Đánh giá</span>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <p className="text-4xl font-bold text-secondary flex items-end gap-2">
                                    650.000₫
                                    <span className="text-lg font-normal text-text-color/60 dark:text-gray-400 mb-1">/ kg</span>
                                </p>
                            </div>

                            {/* Short Desc */}
                            <p className="text-text-color/80 dark:text-gray-300 leading-relaxed mb-8">
                                Tươi ngon, giàu Omega-3, nhập khẩu trực tiếp từ những vùng biển lạnh giá của Na Uy. Thịt cá mềm, béo ngậy, màu cam tươi đặc trưng, lý tưởng cho mọi món ăn từ sashimi, nướng đến áp chảo.
                            </p>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                {/* Quantity Selector */}
                                <div className="flex items-center rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-1">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-primary dark:text-white transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">remove</span>
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        className="w-12 text-center bg-transparent border-none text-primary dark:text-white font-bold focus:ring-0"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-primary dark:text-white transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>

                                {/* Main Buttons */}
                                <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all duration-300">
                                    <span className="material-symbols-outlined">add_shopping_cart</span>
                                    Thêm vào giỏ hàng
                                </button>
                                <button className="size-12 flex items-center justify-center rounded-xl border border-gray-200 dark:border-white/10 text-primary dark:text-white hover:border-secondary hover:text-secondary transition-colors">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>

                            {/* Policies (Optional) */}
                            <div className="grid grid-cols-2 gap-4 py-6 border-t border-gray-100 dark:border-white/5">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary text-2xl">local_shipping</span>
                                    <span className="text-sm font-medium text-text-color/80 dark:text-gray-300">Giao hàng siêu tốc 2h</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary text-2xl">verified_user</span>
                                    <span className="text-sm font-medium text-text-color/80 dark:text-gray-300">Cam kết chất lượng 100%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. DETAILS TABS */}
                    <div className="mt-16 lg:mt-24">
                        <div className="border-b border-gray-200 dark:border-white/10 mb-8">
                            <div className="flex gap-8 overflow-x-auto pb-px">
                                {['desc', 'nutrition', 'guide', 'reviews'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 text-base font-bold transition-all relative whitespace-nowrap ${activeTab === tab
                                                ? "text-primary dark:text-white"
                                                : "text-text-color/50 dark:text-gray-500 hover:text-primary dark:hover:text-white"
                                            }`}
                                    >
                                        {tab === 'desc' && "Mô tả chi tiết"}
                                        {tab === 'nutrition' && "Thông tin dinh dưỡng"}
                                        {tab === 'guide' && "Hướng dẫn chế biến"}
                                        {tab === 'reviews' && "Đánh giá (122)"}

                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-t-full"></span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content Area */}
                        <div className="max-w-4xl text-text-color/80 dark:text-gray-300 leading-relaxed space-y-6">
                            <h3 className="font-display text-2xl font-bold text-primary dark:text-white">
                                Nguồn gốc và chất lượng vượt trội
                            </h3>
                            <p>
                                Cá hồi của chúng tôi được nuôi trồng tại các trang trại bền vững ở Na Uy, nơi có dòng nước lạnh và trong sạch, tạo điều kiện lý tưởng cho cá phát triển khỏe mạnh. Mỗi con cá đều được kiểm soát chặt chẽ từ khâu chọn giống, thức ăn cho đến khi thu hoạch, đảm bảo không chứa kháng sinh và hormone tăng trưởng.
                            </p>
                            <div className="bg-background-light dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/5">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary mt-0.5">check_circle</span>
                                        <span><strong>Phương pháp đánh bắt:</strong> Nuôi trồng bền vững tại trang trại đạt chuẩn GlobalGAP.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary mt-0.5">check_circle</span>
                                        <span><strong>Đặc điểm thịt:</strong> Vân mỡ đan xen đều, thịt mềm tan, ngọt thanh tự nhiên.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary mt-0.5">check_circle</span>
                                        <span><strong>Bảo quản:</strong> Công nghệ cấp đông siêu tốc hoặc giữ lạnh 0-2°C ngay sau khi đánh bắt.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}