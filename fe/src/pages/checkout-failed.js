import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CheckoutFailed() {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('order_id');
    const errorCode = searchParams.get('error_code');
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    // Lấy thông báo lỗi theo mã lỗi
    const getErrorMessage = (code) => {
        switch (code) {
            case '24': return "Bạn đã hủy giao dịch";
            case '51': return "Tài khoản không đủ số dư";
            case '11': return "Hết hạn chờ thanh toán";
            default: return "Giao dịch không thành công";
        }
    };

    // Xử lý thử thanh toán lại
    const handleRetryPayment = async () => {
        if (!orderId) {
            alert("Không tìm thấy mã đơn hàng để thử lại");
            navigate('/checkout');
            return;
        }

        setLoading(true);

        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                alert("Vui lòng đăng nhập lại");
                navigate('/login');
                return;
            }

            const response = await fetch('https://freshmilk.free.nf/api/orders/retry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ order_id: orderId })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Không thể tạo link thanh toán mới");
            }

            if (data.payment_url) {
                window.location.href = data.payment_url;
            } else {
                alert("Lỗi: Server không trả về link thanh toán.");
            }

        } catch (err) {
            console.error(err);
            alert("Lỗi kết nối: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-background-dark font-display text-text-color">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="layout-content-container flex flex-col w-full flex-1">

                        <main className="flex-1 flex items-center justify-center p-4 mt-20">
                            <div className="max-w-md w-full text-center space-y-6 p-8 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-200 dark:border-red-800">
                                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg dark:shadow-none">
                                    <span className="material-symbols-outlined text-5xl text-white">close</span>
                                </div>

                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        Thanh toán thất bại
                                    </h1>
                                    <p className="text-red-600 dark:text-red-400 font-medium text-lg">
                                        {getErrorMessage(errorCode)}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        Đừng lo, tiền chưa bị trừ đâu nhé.
                                    </p>

                                    {orderId && (
                                        <p className="text-xs text-gray-400 mt-4 font-mono bg-white dark:bg-black/20 py-1 px-2 rounded inline-block">
                                            Đơn hàng #{orderId}
                                        </p>
                                    )}
                                </div>

                                <div className="pt-4 space-y-3">
                                    <button
                                        onClick={handleRetryPayment}
                                        disabled={loading}
                                        className={`block w-full py-3 px-4 text-white font-bold rounded-lg transition-colors shadow-md ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                                            }`}
                                    >
                                        {loading ? 'Đang tạo link...' : 'Thử thanh toán lại ngay'}
                                    </button>

                                    <Link
                                        to="/"
                                        className="block w-full py-3 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        Về trang chủ
                                    </Link>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </div>
    );
}
