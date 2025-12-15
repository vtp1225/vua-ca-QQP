import Header from "../components/header"
import Footer from "../components/footer"
import useCart from "../context/cart-context";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();

    const handleCheckout = () => {
        if(cartItems.length === 0){
            alert("Giỏ hàng chưa có sản phẩm");
        }
        if(localStorage.getItem('access_token') === null) {
            alert("Vui lòng đăng nhập để tiếp tục thanh toán");
            navigate('/login');
            return;
        }
        navigate('/checkout')
    }

    const handleHome = () => {
        navigate('/')
    }

    const {
        cartItems,
        removeFromCart,
        increase,
        decrease,
    } = useCart();

    const subtotal = cartItems.reduce((acc, item) => {
        const price = item.product ? item.product.price : item.price;
        return acc + (Number(price) * Number(item.quantity));
    }, 0);

    const shipping = cartItems.length > 0 ? 30000 : 0;
    const total = subtotal + shipping;

    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="mb-10">
                        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white leading-tight">
                            Giỏ hàng của bạn
                        </h1>
                        <p className="mt-2 text-text-color/70 dark:text-gray-400">
                            Bạn có <span className="font-bold text-secondary">{cartItems.length} sản phẩm</span> trong giỏ hàng.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-start">
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {cartItems.length > 0 && (
                                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 dark:border-white/10 text-sm font-bold text-text-color/50 dark:text-gray-500 uppercase tracking-wider">
                                    <div className="col-span-6">Sản phẩm</div>
                                    <div className="col-span-2 text-center">Số lượng</div>
                                    <div className="col-span-2 text-right">Giá</div>
                                    <div className="col-span-2 text-right">Tổng</div>
                                </div>
                            )}

                            <div className="flex flex-col gap-4">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-12 bg-white dark:bg-white/5 rounded-2xl border border-dashed border-gray-300 dark:border-white/20">
                                        <p className="text-text-color/60 dark:text-gray-400">Giỏ hàng của bạn đang trống</p>
                                        <button onClick={handleHome} className="mt-4 px-6 py-2 rounded-lg bg-primary text-white font-bold hover:bg-secondary transition-colors">
                                            Mua sắm ngay
                                        </button>
                                    </div>
                                ) : (
                                    cartItems.map((item) => {
                                        const product = item.product || item;
                                        const productId = product.productId;
                                        const imageUrl = product.imageUrl || product.image_url;
                                        const price = Number(product.price);
                                        const lineTotal = price * item.quantity;

                                        return (
                                            <div key={item.id || productId} className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm ring-1 ring-black/5 dark:ring-white/10 hover:shadow-md transition-all duration-300">
                                                <div className="col-span-6 flex items-center gap-4">
                                                    <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 ring-1 ring-black/5">
                                                        <img src={imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-display font-bold text-primary dark:text-white text-lg leading-tight">{product.name}</h3>
                                                        <div className="md:hidden mt-2 font-bold text-secondary">
                                                            {price.toLocaleString('vi-VN')}đ
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-span-2 flex items-center justify-center md:justify-center">
                                                    <div className="flex items-center rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-1">
                                                        <button onClick={() => decrease(productId, item.id)} className="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 text-text-color dark:text-gray-300 transition-colors">
                                                            <span className="material-symbols-outlined text-sm">remove</span>
                                                        </button>
                                                        <span className="w-8 text-center text-sm font-bold text-primary dark:text-white">{item.quantity}</span>
                                                        <button onClick={() => increase(productId, item.id)} className="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 text-text-color dark:text-gray-300 transition-colors">
                                                            <span className="material-symbols-outlined text-sm">add</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="hidden md:block col-span-2 text-right text-sm text-text-color/80 dark:text-gray-300">
                                                    {price.toLocaleString('vi-VN')}đ
                                                </div>

                                                <div className="col-span-2 flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-gray-100 dark:border-white/10 pt-4 md:pt-0 mt-2 md:mt-0">
                                                    <span className="md:hidden text-sm font-medium text-text-color/60">Thành tiền:</span>
                                                    <span className="font-bold text-secondary text-lg">
                                                        {lineTotal.toLocaleString('vi-VN')}đ
                                                    </span>
                                                    <button
                                                        onClick={() => removeFromCart(productId, item.id)}
                                                        className="size-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors md:ml-2"
                                                        title="Xóa sản phẩm"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>

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
                                    <button onClick={handleCheckout} className="w-full py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all duration-300">
                                        Tiến hành thanh toán
                                    </button>
                                    <button onClick={handleHome} className="w-full py-3.5 rounded-xl border border-primary/20 dark:border-white/20 text-primary dark:text-white font-bold hover:bg-primary/5 dark:hover:bg-white/5 transition-colors">
                                        Tiếp tục mua sắm
                                    </button>
                                </div>

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