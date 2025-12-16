import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/header"
import Footer from "../components/footer"
import useCart from "../context/cart-context";

export default function Checkout() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { cartItems, fetchCartItems } = useCart();

    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        shippingAddress: "",
        note: "",
    });

    const subtotal = cartItems.reduce((total, item) => total + (Number(item?.product?.price) * item.quantity), 0);
    const shipping = cartItems.length > 0 ? 30000 : 0;
    const total = subtotal + shipping;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckout = async () => {


        if (!formData.fullName.trim()) {
            setError("Vui lòng nhập họ và tên.");
            return;
        }
        if (!formData.phoneNumber.trim()) {
            setError("Vui lòng nhập số điện thoại.");
            return;
        }

        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            setError("Số điện thoại không hợp lệ.");
            return;
        }

        if (!formData.shippingAddress.trim()) {
            setError("Vui lòng nhập địa chỉ giao hàng.");
            return;
        }


        setError(null);
        setLoading(true);

        try {
            const token = localStorage.getItem('access_token');

            const response = await fetch('http://10.17.26.168:8080/VuaCaQPQ/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    shippingAddress: formData.shippingAddress,
                    note: formData.note
                }),
            });

            const text = await response.text();
            let data;

            try {
                data = JSON.parse(text);
            } catch {
                throw new Error("Server Error: " + text);
            }

            if (!response.ok) {
                if (response.status === 400 && data.error === 'Vui lòng cung cấp đầy đủ số điện thoại, địa chỉ') {
                    alert('Vui lòng cung cấp đầy đủ số điện thoại, địa chỉ');
                    navigate('/profile');
                    return;
                }
                throw new Error(data.error || 'Có lỗi xảy ra khi đặt hàng');
            }

            alert('Đặt hàng thành công! Mã đơn: ' + data.result.orderId);
            if (fetchCartItems) fetchCartItems();
            navigate(`/checkout/success?order_id=${data.result.orderId}`);

        } catch (err) {
            console.error(err);
            setError(err.message);
            alert("Lỗi: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mb-8 text-center md:text-left">
                        Thanh toán
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <section className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                                        <span className="material-symbols-outlined">person_pin_circle</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-primary dark:text-white">Thông tin nhận hàng</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Họ và tên <span className="text-red-500">*</span></label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                            placeholder="Nhập tên của bạn"
                                        />
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Số điện thoại <span className="text-red-500">*</span></label>
                                        <input
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                            placeholder="Nhập số điện thoại của bạn"
                                        />
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Địa chỉ giao hàng <span className="text-red-500">*</span></label>
                                        <input
                                            name="shippingAddress"
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                            placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                                            value={formData.shippingAddress}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-text-color/80 dark:text-gray-300">Ghi chú (Tùy chọn)</label>
                                        <textarea
                                            name="note"
                                            className="w-full p-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none h-24"
                                            placeholder="Ví dụ: Giao hàng vào giờ hành chính..."
                                            value={formData.note}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 bg-white dark:bg-white/5 p-6 rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 border-t-4 border-secondary">
                                <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-6">Đơn hàng của bạn</h3>

                                <div className="flex flex-col gap-4 mb-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                    {cartItems.map((item) => (
                                        <div key={item.productId} className="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-white/5 last:border-0">
                                            <div className="size-14 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={item?.product?.imageUrl}
                                                    alt={item.name}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-primary dark:text-white truncate">
                                                    {item?.product?.name}
                                                </p>
                                                <p className="text-xs text-text-color/60 dark:text-gray-400">
                                                    SL: {item.quantity} x {Number(item?.product?.price).toLocaleString('vi-VN')}đ
                                                </p>
                                            </div>
                                            <p className="font-semibold text-primary dark:text-white text-sm">
                                                {(Number(item?.product?.price) * item.quantity).toLocaleString('vi-VN')}đ
                                            </p>
                                        </div>
                                    ))}

                                    {cartItems.length === 0 && (
                                        <p className="text-center text-sm text-gray-500 py-4">Chưa có sản phẩm nào</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3 pt-4 border-t border-dashed border-gray-300 dark:border-white/20">
                                    <div className="flex justify-between items-center text-sm text-text-color/70 dark:text-gray-400">
                                        <span>Tạm tính</span>
                                        <span className="font-medium text-text-color dark:text-white">
                                            {subtotal.toLocaleString('vi-VN')}đ
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-text-color/70 dark:text-gray-400">
                                        <span>Phí vận chuyển</span>
                                        <span className="font-medium text-text-color dark:text-white">
                                            {shipping.toLocaleString('vi-VN')}đ
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 mt-2 border-t border-gray-200 dark:border-white/10">
                                        <span className="text-base font-bold text-primary dark:text-white">Tổng cộng</span>
                                        <span className="text-2xl font-bold text-secondary">
                                            {total.toLocaleString('vi-VN')}đ
                                        </span>
                                    </div>
                                </div>

                                {error && (
                                    <div className="mt-4 p-3 bg-red-100 rounded-lg text-sm" style={{ color: "#d4af37" }}>
                                        {error}
                                    </div>
                                )}

                                <button
                                    onClick={handleCheckout}
                                    disabled={loading}
                                    className="w-full mt-8 py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-secondary hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                            Đang xử lý...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined">lock</span>
                                            Đặt Hàng Ngay
                                        </>
                                    )}
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