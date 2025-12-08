import { useSearchParams, Link } from 'react-router-dom';

export default function CheckoutSuccess() {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('order_id');

    return (
        <div className="bg-white dark:bg-background-dark font-display text-text-color">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="layout-content-container flex flex-col w-full flex-1">
                        <main className="flex-1 flex items-center justify-center p-4">
                            <div className="max-w-md w-full text-center space-y-6 p-8 bg-green-50 rounded-2xl border border-green-200">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-200">
                                    <span className="material-symbols-outlined text-5xl text-white">check</span>
                                </div>

                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Thanh toán thành công!</h1>
                                    <p className="text-gray-600">Cảm ơn bạn đã mua hàng.</p>
                                    {orderId && (
                                        <p className="text-sm text-gray-500 mt-2">
                                            Mã đơn hàng: <span className="font-mono font-bold text-gray-800">#{orderId}</span>
                                        </p>
                                    )}
                                </div>

                                <div className="pt-4 space-y-3">
                                    <Link
                                        to="/"
                                        className="block w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
                                    >
                                        Tiếp tục mua sắm
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
