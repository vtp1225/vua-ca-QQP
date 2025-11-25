import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function ProductList() {
    const [productList, setProductList] = useState([]);

    const navigate = useNavigate();

    const handleProductDetail = (product_id) => {
        navigate(`/product-detail/${product_id}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://172.21.9.75:8080/VuaCaQPQ/products");

                if (!res.ok) {
                    throw new Error("Lỗi kết nối server");
                }

                const data = await res.json();

                let realData = [];
                if (Array.isArray(data)) {
                    realData = data;
                } else if (data.result && Array.isArray(data.result)) {
                    realData = data.result; // Trường hợp API trả về { result: [...] }
                } else if (data.data && Array.isArray(data.data)) {
                    realData = data.data;   // Trường hợp API trả về { data: [...] }
                }

                setProductList(realData);
            } catch (error) {
                console.error("Lỗi tải dữ liệu:", error);
                setProductList([]);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {/* Thêm kiểm tra độ dài mảng để tránh lỗi khi chưa có data */}
            {productList.length > 0 && productList.map((product) => {
                // Xác định object chứa thông tin thật sự (xử lý trường hợp user bọc trong .result)
                const item = product.result || product;

                return (
                    <div
                        key={item.product_id || Math.random()} // Thêm key để React không báo lỗi
                        onClick={() => handleProductDetail(item.product_id)}
                        className="group relative flex flex-col bg-white dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ring-1 ring-black/5 dark:ring-white/10 cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${item.imageUrl}")` }} // Sửa thành item.imageUrl
                            ></div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex-grow">
                                <h3 className="font-display text-lg font-bold text-primary dark:text-white leading-tight mb-1 group-hover:text-secondary transition-colors">
                                    {item.name} {/* Sửa thành item.name */}
                                </h3>
                                <p className="font-bold text-secondary text-lg">
                                    {/* Thêm fallback 0 nếu giá trị lỗi */}
                                    {Number(item.price || 0).toLocaleString('vi-VN')}đ <span className="text-sm font-normal text-gray-400">/ kg</span>
                                </p>
                            </div>

                            <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:bg-secondary hover:shadow-lg active:scale-95 transition-all duration-300">
                                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                )
            })}

            {/* Hiển thị thông báo nếu không có sản phẩm */}
            {productList.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-10">
                    Đang tải dữ liệu hoặc không có sản phẩm nào...
                </div>
            )}
        </>
    )
}