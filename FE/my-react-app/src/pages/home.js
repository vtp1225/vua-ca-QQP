import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />

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

                        {/* Product Card Component */}
                        <ProductCard
                            title="Cá Hồi Tươi"
                            price="250.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDkNAvwTo4NxM5Xpgq3MVaUAnmjNt6Qy6OEK4nOphSNzrpLjsZKQ1c3ER1M1iikbdFC-KIRUZoWMokcZo13d132MYcV71I6V39h6EBKYLe89kxPtCbU7gROM9Hz54IBR5x4O-Y89Ql6i4HtEGwOcNyB82JJzsGrwDhr2DJt_4GhKFn4SPMyJKhLLuJsrjnFHN7iOh6i5JeIZO9hdibjpNh6gwPoAouEdwY1ss_ljs9a7I6FcwTqcBFdjDzDeRrVjWNcE0c0djopmf4"
                        />
                        <ProductCard
                            title="Cá Vược Biển"
                            price="180.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9GCDGk2PdhRRfLYOqv2O7sj0GfnZog4QVAm7xU7NyRWNspED37bZoQSdDLjRyaAr0qjXSLd2kttoX1f_1dfdOc8R3CK2I4Kv7Z3lFsIonq8MbhJ6qP27enwTsw1tuYnkFpOHrl1QQE0AAzXWbSGrQT9_-YG3K1oVZwdAcD4K4w9aqQURqkz8ltww0oSHAkJaSajIc_0PbTNGCWz_XCoZHwSmvt-Z4sjh9jxwkj-TLPVPyuEePHt_1ks4_EMVHCUO2_kvReKG_4A"
                        />
                        <ProductCard
                            title="Cá Ngừ Đại Dương"
                            price="300.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZXC4hyEsyUkAl1qp8DCoZI_HSBnpPUC-PFyd90jJwFje4Ws8_3AtEN_kbQ5JBrj_0iagSn_sYVHKCcpqPdauog5x7ootasA0q_aRLAlit0wB7lyz4KPv_gECCilp8xfdU8_siK5h4WpyvbCrOJW3emTU-bqcvGhpw39uBk0R4AGrv1K11g2YX65mMOcGUEXnVQ20AvINU1ljgeUAE-mmaweyTJqhTIN6r8w-24mfWyKV6BRpHPVbURThvZ3AEMycHQxYtE4XmbA"
                        />
                        <ProductCard
                            title="Cá Thu Nhật"
                            price="150.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBn-Zqd4DqYFvbI5gNMbDtN1ChGP6IMOrjFFyMRXfdHxoA-XniBJh5njNxjflkCvbU-sBQX4AURSXsUIGoW4In2eOCYQjgChII2HfyzZvEcS3ex1YYmTzinVi2oWb8609GbG4YcQ1iGrYcwpAayplan_giXPYOgf81YAKX_2Iv0nbBsCL03fMd0fp6MI8v8rH40xiYzFWejEP5emfuBfkgH3jICb0cBrPNeYZe968fuWijTwoamF6KsGXRXVZLP5A9lHNQkIAiiigE"
                        />
                        <ProductCard
                            title="Phi Lê Cá Tuyết"
                            price="200.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4P8tlmiSCl_IS-94aNYMJP3zgVR-blfCkq6KxLUTijutmTuGuJWuOPSyweHegfqv4SKpEm514PoE8SX3RY3ajDL2JDa87gMw10vXDzIb8rgSc9pxuX2ynhs8Yg5J4HnLXjSIUYPZovDpOKHixpcQEg1kRIx6s7MgaxHMQouDQxShBp_HKJyczhy_bQlye3mHNC7Ec09RDUlkFulh-oWo0UIbiKP95-KYP8NWgi1Cw6XCgtPiTiYZE348WDWMbTBukdBJ6EHvZdc"
                        />
                        <ProductCard
                            title="Cá Hồi Cầu Vồng"
                            price="190.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBaj0GXeLuqNSQsl3ymcaSKitQ3BRE8Qx8HYwmm2I7M4oR2oT1wxSq0ly24ZGieuY9i1t7RzCO03yDpVBDmHHGDG5z-kT6ztsnN1wGge6h3cCY4u8we-p_DWsvD1ER_OvE6t-gJ6bUp0-a5l0xvssiIL5TIgk7epzQIZggwItXXOGNbBn_IdP72pP0k8wAoh0aejAJDtFH3wViAD_-DgqP0XeHgZhfGuVPTTAZra998VTFKR8oYedXRUXhI44DYNXDsrY_8wftSXfE"
                        />
                        <ProductCard
                            title="Tôm Tươi"
                            price="220.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuB73IFz69rZRZESePeSDs-Qx21wYeiK4KyY6MqGASGeXDwP-OYMWg5yQiJVZWeFyVnBAgwB--sNOsbbDgWUybT6dsoyn4vHAIxthqNyCXRXBUoOFXExhmUKvqcIhgNYuDBMSQPJ2vIznSBjsM4Zip7QoLheDw0OkhQMllKXbn_sSAT6j3EAlnrwPUBmmThRxVgQ1N8z8zbB6G8a7RcGnYuwcl11pVqV_xrbnxQwSkGuSFwaYP7g8CK_U7Cu1IETVrVgv8yqWGGnxJU"
                        />
                        <ProductCard
                            title="Tôm Hùm Sống"
                            price="500.000₫"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAsC8pms24rdSM0sGbN4EzLeGG1r7caf_B34lV_5gTS-vIIntN2WsSgEdu3Xz4ziNnYrobnyUcHsc-qajWNAADlTOL8JI3dhPN60RO2SJt0RtxjnEOd5Z0sDNdEqha6CcJic0Zu7fwdhGtVA_IiOXUXxz7aZYWwvaTrjsRUQ2Nhe-EmngK2adCFHO_3tPRMwbXpSwLQ26h2lJ6nfBT5sCQUrSVLi4lA4UWJtqphbiba62Q0kTPEf4kBbfuBz5Zzpb72FGj7FvW7ozg"
                        />

                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

// Reusable Product Card Component for Cleaner Code
function ProductCard({ title, price, image }) {
    return (
        <div className="group relative flex flex-col bg-white dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
            {/* Image Container */}
            <div className="aspect-[4/3] w-full overflow-hidden">
                <div
                    className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
                {/* Overlay on hover (optional) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="font-display text-lg font-bold text-primary dark:text-white leading-tight mb-1 group-hover:text-secondary transition-colors">
                        {title}
                    </h3>
                    <p className="font-bold text-secondary text-lg">
                        {price} <span className="text-sm font-normal text-gray-400">/ kg</span>
                    </p>
                </div>

                {/* Add to Cart Button */}
                <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:bg-secondary hover:shadow-lg active:scale-95 transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    )
}