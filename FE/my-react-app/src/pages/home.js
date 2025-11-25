import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import ProductList from "../components/product-list"



export default function Home() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />
            <Banner/>

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                    {/* 1. SECTION HEADER & TOOLBAR */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

                        {/* Title & Description */}
                        <div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white leading-tight">
                                Sản Phẩm Nổi Bật
                            </h1>
                            <p className="mt-2 text-text-color/70 dark:text-gray-400 max-w-lg">
                                Tuyển chọn những loại hải sản tươi ngon nhất, được đánh bắt và bảo quản theo tiêu chuẩn quốc tế.
                            </p>
                        </div>

                        {/* Search Bar Styled */}
                        <div className="w-full md:w-96">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-secondary transition-colors">search</span>
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-11 pr-4 py-3 rounded-xl border-none bg-white dark:bg-white/5 text-primary dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-secondary/50 focus:bg-white dark:focus:bg-black/20 transition-all duration-300 ease-in-out"
                                    placeholder="Tìm kiếm hải sản..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2. PRODUCT GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        <ProductList/>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
