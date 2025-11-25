import Header from "../components/header"
import Footer from "../components/footer"
import { useState } from "react"

export default function Cart() {
    // State giả lập dữ liệu giỏ hàng để có thể tương tác
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Cá hồi Na Uy tươi",
            desc: "Phi lê tươi sống",
            price: 500000,
            quantity: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxu2sRkHuryybI7fBUZvFscxJubqc1GJfAZIOj-wkSBzdIRS-B9kStIhh0yZPjDqiC3bDvAL0cniqXWahMHuTDRoC-lT14alQy06QD8-h264dbycpxlfdfleA-Ed5U82BMvlldAaL8YZcjXf4MdammxHVH0ZoEpHA8KXBgm9zgvK51_PaatqRzxDUGFblUE9c7jzyeCzfYZIWoZhbGtcWzVuNqRXP-zZeMYZnr7XpOsV_oR8F2GZMrXNaeRVkH6ayiU6Bz1Wv-RUQ"
        },
        {
            id: 2,
            name: "Tôm sú làm sạch",
            desc: "Đã làm sạch, bỏ đầu",
            price: 250000,
            quantity: 2,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAjLm5SVbtdKBIeSFZeCJIMb4rki0TVDo4Nuuc8Hu_0OExBUHw8Z5t4HL15QrCSbzVcmXHh_fE2gokC_82Tverdui_Tj8TjXGvIK0DXSk9SjofwaeURhv5E2M2S64I3hTSgiLkiUO73SiiDmT5img8dQaAF7DTorK1JiumueS6Ql0OHFiaWk37uJZj1oOyAber0kM12rih8Oya_nT-qtL-0uXlACG8cRW87fbWHoTk8z_tISP6F5LoGThjWvgumeYeapiHktsjLFI"
        }
    ]);

    // Hàm cập nhật số lượng
    const updateQuantity = (id, change) => {
        setCartItems(items => items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        ));
    };

    // Hàm xóa sản phẩm
    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    // Tính toán tổng tiền
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cartItems.length > 0 ? 30000 : 0;
    const total = subtotal + shipping;

    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                    {/* Page Header */}
                    <div className="mb-10">
                        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white leading-tight">
                            Giỏ hàng của bạn
                        </h1>
                        <p className="mt-2 text-text-color/70 dark:text-gray-400">
                            Bạn có <span className="font-bold text-secondary">{cartItems.length} sản phẩm</span> trong giỏ hàng.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-start">

                        {/* Cart List Section */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Desktop Table Header */}
                            {cartItems.length > 0 && (
                                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 dark:border-white/10 text-sm font-bold text-text-color/50 dark:text-gray-500 uppercase tracking-wider">
                                    <div className="col-span-6">Sản phẩm</div>
                                    <div className="col-span-2 text-center">Số lượng</div>
                                    <div className="col-span-2 text-right">Giá</div>
                                    <div className="col-span-2 text-right">Tổng</div>
                                </div>
                            )}

                            {/* Cart Items List */}
                            <div className="flex flex-col gap-4">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-12 bg-white dark:bg-white/5 rounded-2xl border border-dashed border-gray-300 dark:border-white/20">
                                        <p className="text-text-color/60 dark:text-gray-400">Giỏ hàng của bạn đang trống</p>
                                        <button className="mt-4 px-6 py-2 rounded-lg bg-primary text-white font-bold hover:bg-secondary transition-colors">
                                            Mua sắm ngay
                                        </button>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm ring-1 ring-black/5 dark:ring-white/10 hover:shadow-md transition-all duration-300">

                                            {/* Product Info */}
                                            <div className="col-span-6 flex items-center gap-4">
                                                <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 ring-1 ring-black/5">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h3 className="font-display font-bold text-primary dark:text-white text-lg leading-tight">{item.name}</h3>
                                                    <p className="text-sm text-text-color/60 dark:text-gray-400 mt-1">{item.desc}</p>
                                                    <div className="md:hidden mt-2 font-bold text-secondary">
                                                        {item.price.toLocaleString('vi-VN')}đ
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quantity */}
                                            <div className="col-span-2 flex items-center justify-center md:justify-center">
                                                <div className="flex items-center rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-1">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 text-text-color dark:text-gray-300 transition-colors">
                                                        <span className="material-symbols-outlined text-sm">remove</span>
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold text-primary dark:text-white">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 text-text-color dark:text-gray-300 transition-colors">
                                                        <span className="material-symbols-outlined text-sm">add</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Unit Price (Desktop only) */}
                                            <div className="hidden md:block col-span-2 text-right text-sm text-text-color/80 dark:text-gray-300">
                                                {item.price.toLocaleString('vi-VN')}đ
                                            </div>

                                            {/* Total & Remove */}
                                            <div className="col-span-2 flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-gray-100 dark:border-white/10 pt-4 md:pt-0 mt-2 md:mt-0">
                                                <span className="md:hidden text-sm font-medium text-text-color/60">Thành tiền:</span>
                                                <span className="font-bold text-secondary text-lg">
                                                    {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                                                </span>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="size-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors md:ml-2"
                                                    title="Xóa sản phẩm"
                                                >
                                                    <span className="material-symbols-outlined text-xl">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 rounded-2xl bg-white dark:bg-white/5 p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                                <h2 className="font-display text-xl font-bold text-primary dark:text-white mb-6">Tóm tắt đơn hàng</h2>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm text-text-color/70 dark:text-gray-400">
                                        <span>Tạm tính</span>
                                        <span className="font-medium text-text-color dark:text-white">{subtotal.toLocaleString('vi-VN')}đ</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-text-color/70 dark:text-gray-400">
                                        <span>Phí vận chuyển</span>
                                        <span className="font-medium text-text-color dark:text-white">{shipping.toLocaleString('vi-VN')}đ</span>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                                        <div className="flex justify-between items-end">
                                            <span className="font-bold text-text-color dark:text-white">Tổng cộng</span>
                                            <span className="font-display text-2xl font-bold text-secondary">{total.toLocaleString('vi-VN')}đ</span>
                                        </div>
                                        <p className="text-xs text-text-color/50 dark:text-gray-500 mt-2 text-right">(Đã bao gồm VAT)</p>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-3">
                                    <button className="w-full py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all duration-300">
                                        Tiến hành thanh toán
                                    </button>
                                    <button className="w-full py-3.5 rounded-xl border border-primary/20 dark:border-white/20 text-primary dark:text-white font-bold hover:bg-primary/5 dark:hover:bg-white/5 transition-colors">
                                        Tiếp tục mua sắm
                                    </button>
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-8 grid grid-cols-3 gap-2 pt-6 border-t border-gray-100 dark:border-white/10">
                                    <div className="flex flex-col items-center gap-1 text-center">
                                        <span className="material-symbols-outlined text-secondary text-2xl">verified_user</span>
                                        <span className="text-[10px] text-text-color/60 dark:text-gray-400">Bảo mật 100%</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-center">
                                        <span className="material-symbols-outlined text-secondary text-2xl">local_shipping</span>
                                        <span className="text-[10px] text-text-color/60 dark:text-gray-400">Giao siêu tốc</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-center">
                                        <span className="material-symbols-outlined text-secondary text-2xl">published_with_changes</span>
                                        <span className="text-[10px] text-text-color/60 dark:text-gray-400">Đổi trả 24h</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}