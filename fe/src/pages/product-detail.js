import Header from "../components/header"
import Footer from "../components/footer"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import useCart from "../context/cart-context";

export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const { productId } = useParams();
    const { addToCart } = useCart();

    const handleAdd = async (e, productData) => {
        e.stopPropagation();
        try {
            await addToCart(productData, quantity);
        } catch (err) {
            console.error(err);
        }
    };

    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://192.168.1.101:8080/VuaCaQPQ/products/${Id}`);

                if (!res.ok) {
                    throw new Error("Lỗi kết nối server");
                }

                const data = await res.json();
                setProduct(data.result);
            } catch (error) {
                console.error("Lỗi tải dữ liệu:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchData();
        }
    }, [productId]);

    if (loading) {
        return (
            <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
                <Footer />
            </div>
        );
    }

    const productData = product?.result || product;
    
    if (!productData) {
        return (
            <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex flex-col items-center justify-center text-text-color dark:text-gray-300">
                    <h2 className="text-2xl font-bold mb-2">Không tìm thấy sản phẩm</h2>
                    <p>Sản phẩm có thể đã bị xóa hoặc đường dẫn không đúng.</p>
                    <a href="/home" className="mt-4 text-primary hover:underline">Quay lại trang chủ</a>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <nav className="flex items-center gap-2 text-sm text-text-color/60 dark:text-gray-400 mb-8">
                        <a href="/home" className="hover:text-primary dark:hover:text-white transition-colors">Trang chủ</a>
                        <span>/</span>
                        <span className="font-medium text-primary dark:text-white truncate max-w-[200px]">{productData.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        <div className="flex flex-col gap-4">
                            <div className="group relative w-full aspect-square overflow-hidden rounded-2xl bg-white dark:bg-white/5 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                                <div
                                    className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${productData.imageUrl}")` }}>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col h-full">
                            <div className="mb-6">
                                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white leading-tight mb-2">
                                    {productData.name}
                                </h1>
                                <p className="text-sm font-medium text-text-color/60 dark:text-gray-400">Mã SP: {productData.productId}</p>
                            </div>

                            <div className="mb-8">
                                <p className="text-4xl font-bold text-secondary flex items-end gap-2">
                                    {Number(productData.price).toLocaleString('vi-VN')}đ
                                    <span className="text-lg font-normal text-text-color/60 dark:text-gray-400 mb-1">/ kg</span>
                                </p>
                            </div>

                            <p className="text-text-color/80 dark:text-gray-300 leading-relaxed mb-8">
                                {productData.description || "Sản phẩm tươi ngon, chất lượng cao từ FishCo."}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <div className="flex items-center rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-1">
                                    <button
                                        onClick={() => decrease()}
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
                                        onClick={() => increase()}
                                        className="size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-primary dark:text-white transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>

                                <button
                                    onClick={(e) => handleAdd(e, productData)}
                                    className="relative z-10 flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-24">
                        <div className="border-b border-gray-200 dark:border-white/10 mb-8">
                            <div className="flex gap-8 overflow-x-auto pb-px">
                                <button className="pb-4 text-base font-bold text-primary dark:text-white border-b-2 border-secondary">
                                    Mô tả chi tiết
                                </button>
                            </div>
                        </div>
                        <div className="bg-background-light dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/5">
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-secondary mt-0.5">check_circle</span>
                                    <span className="text-sm text-text-color/70 dark:text-gray-400 leading-relaxed"><strong>Đặc điểm thịt: </strong >{productData.information}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-secondary mt-0.5">check_circle</span>
                                    <span className="text-sm text-text-color/70 dark:text-gray-400 leading-relaxed"><strong>Bảo quản: </strong>{productData.cachbaoquan}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}