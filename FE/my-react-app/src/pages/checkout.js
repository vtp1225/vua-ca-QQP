import Header from "../components/header"
import Footer from "../components/footer"
import { useState } from "react"

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('cod');

    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                    {/* Page Title */}
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mb-8 text-center md:text-left">
                        Thanh toán
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

                        {/* LEFT COLUMN: Customer Info & Payment */}
                        <div className="lg:col-span-2 flex flex-col gap-8">

                            {/* 1. Shipping Information Card */}
                            <section className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                                        <span className="material-symbols-outlined">person_pin_circle</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-primary dark:text-white">Thông tin nhận hàng</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Họ và tên</label>
                                        <input
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                            placeholder="Nguyễn Văn A"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Số điện thoại</label>
                                        <input
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                            placeholder="09xxxxxxxx"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Địa chỉ giao hàng</label>
                                        <input
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                            placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Ghi chú (Tùy chọn)</label>
                                        <textarea
                                            className="w-full p-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none h-24"
                                            placeholder="Ví dụ: Giao hàng vào giờ hành chính..."
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* 2. Payment Method Card */}
                            <section className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-primary dark:text-white">Phương thức thanh toán</h2>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* COD Option */}
                                    <label
                                        className={`relative flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${paymentMethod === 'cod'
                                                ? "border-secondary bg-secondary/5 ring-1 ring-secondary"
                                                : "border-gray-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-white/30"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={() => setPaymentMethod('cod')}
                                            className="size-5 text-secondary focus:ring-secondary border-gray-300"
                                        />
                                        <div className="flex-1">
                                            <span className="block font-bold text-primary dark:text-white">Thanh toán khi nhận hàng (COD)</span>
                                            <span className="text-sm text-text-color/60 dark:text-gray-400">Thanh toán tiền mặt khi giao hàng thành công</span>
                                        </div>
                                        <span className="material-symbols-outlined text-2xl text-primary dark:text-white/80">local_shipping</span>
                                    </label>

                                    {/* Banking/Card Option */}
                                    <label
                                        className={`relative flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${paymentMethod === 'card'
                                                ? "border-secondary bg-secondary/5 ring-1 ring-secondary"
                                                : "border-gray-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-white/30"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={() => setPaymentMethod('card')}
                                            className="size-5 text-secondary focus:ring-secondary border-gray-300"
                                        />
                                        <div className="flex-1">
                                            <span className="block font-bold text-primary dark:text-white">Thẻ Tín dụng / Ghi nợ</span>
                                            <span className="text-sm text-text-color/60 dark:text-gray-400">Visa, Mastercard, JCB</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="h-6 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" />
                                            <img className="h-6 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" />
                                        </div>
                                    </label>

                                    {/* E-Wallet Option */}
                                    <label
                                        className={`relative flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${paymentMethod === 'wallet'
                                                ? "border-secondary bg-secondary/5 ring-1 ring-secondary"
                                                : "border-gray-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-white/30"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="wallet"
                                            checked={paymentMethod === 'wallet'}
                                            onChange={() => setPaymentMethod('wallet')}
                                            className="size-5 text-secondary focus:ring-secondary border-gray-300"
                                        />
                                        <div className="flex-1">
                                            <span className="block font-bold text-primary dark:text-white">Ví điện tử</span>
                                            <span className="text-sm text-text-color/60 dark:text-gray-400">Momo, ZaloPay, VNPay</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="h-6 rounded object-contain" src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="Momo" />
                                            <img className="h-6 rounded object-contain" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png" alt="ZaloPay" />
                                        </div>
                                    </label>
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: Order Summary */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 bg-white dark:bg-white/5 p-6 rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 border-t-4 border-secondary">
                                <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-6">Đơn hàng của bạn</h3>

                                {/* Product List */}
                                <div className="flex flex-col gap-4 mb-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-white/5 last:border-0">
                                        <div className="size-14 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxu2sRkHuryybI7fBUZvFscxJubqc1GJfAZIOj-wkSBzdIRS-B9kStIhh0yZPjDqiC3bDvAL0cniqXWahMHuTDRoC-lT14alQy06QD8-h264dbycpxlfdfleA-Ed5U82BMvlldAaL8YZcjXf4MdammxHVH0ZoEpHA8KXBgm9zgvK51_PaatqRzxDUGFblUE9c7jzyeCzfYZIWoZhbGtcWzVuNqRXP-zZeMYZnr7XpOsV_oR8F2GZMrXNaeRVkH6ayiU6Bz1Wv-RUQ" alt="Product" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-primary dark:text-white truncate">Cá hồi phi lê</p>
                                            <p className="text-xs text-text-color/60 dark:text-gray-400">SL: 1 x 350.000đ</p>
                                        </div>
                                        <p className="font-semibold text-primary dark:text-white text-sm">350.000đ</p>
                                    </div>
                                    <div className="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-white/5 last:border-0">
                                        <div className="size-14 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAjLm5SVbtdKBIeSFZeCJIMb4rki0TVDo4Nuuc8Hu_0OExBUHw8Z5t4HL15QrCSbzVcmXHh_fE2gokC_82Tverdui_Tj8TjXGvIK0DXSk9SjofwaeURhv5E2M2S64I3hTSgiLkiUO73SiiDmT5img8dQaAF7DTorK1JiumueS6Ql0OHFiaWk37uJZj1oOyAber0kM12rih8Oya_nT-qtL-0uXlACG8cRW87fbWHoTk8z_tISP6F5LoGThjWvgumeYeapiHktsjLFI" alt="Product" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-primary dark:text-white truncate">Tôm sú làm sạch</p>
                                            <p className="text-xs text-text-color/60 dark:text-gray-400">SL: 2 x 120.000đ</p>
                                        </div>
                                        <p className="font-semibold text-primary dark:text-white text-sm">240.000đ</p>
                                    </div>
                                </div>

                                {/* Calculations */}
                                <div className="flex flex-col gap-3 pt-4 border-t border-dashed border-gray-300 dark:border-white/20">
                                    <div className="flex justify-between items-center text-sm text-text-color/70 dark:text-gray-400">
                                        <span>Tạm tính</span>
                                        <span className="font-medium text-text-color dark:text-white">590.000đ</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-text-color/70 dark:text-gray-400">
                                        <span>Phí vận chuyển</span>
                                        <span className="font-medium text-text-color dark:text-white">30.000đ</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 mt-2 border-t border-gray-200 dark:border-white/10">
                                        <span className="text-base font-bold text-primary dark:text-white">Tổng cộng</span>
                                        <span className="text-2xl font-bold text-secondary">620.000đ</span>
                                    </div>
                                </div>

                                {/* Place Order Button */}
                                <button className="w-full mt-8 py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-secondary hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">lock</span>
                                    Đặt Hàng Ngay
                                </button>

                                <p className="text-[11px] text-center text-text-color/50 dark:text-gray-500 mt-4 px-2">
                                    Bằng cách đặt hàng, bạn đồng ý với <a href="#" className="underline hover:text-secondary">Điều khoản</a> và <a href="#" className="underline hover:text-secondary">Chính sách</a> của chúng tôi.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}