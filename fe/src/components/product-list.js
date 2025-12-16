import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useCart from "../context/cart-context";

export default function ProductList({ keyword }) {
    const [productList, setProductList] = useState([]);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleProductDetail = (productId) => {
        navigate(`/product-detail/${productId}`);
    }

    const handleAdd = async (product, e) => {
        e.stopPropagation();
        
        try {
            await addToCart(product, 1);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = "http://10.17.26.168:8080/VuaCaQPQ/products"

                if (keyword) {
                    url = `http://10.17.26.168:8080/VuaCaQPQ/products/search?name=${encodeURIComponent(keyword)}`
                }

                const res = await fetch(url)
                if (!res.ok) throw new Error("Lỗi server")

                const data = await res.json()

                const realData =
                    Array.isArray(data) ? data :
                        Array.isArray(data.result) ? data.result :
                            Array.isArray(data.data) ? data.data : []

                setProductList(realData)
            } catch (error) {
                console.error(error)
                setProductList([])
            }
        }

        fetchData()
    }, [keyword])

    return (
        <>
            {productList.length > 0 && productList.map((product) => {
                const item = product.result || product;

                return (
                    <div
                        key={item.productId || Math.random()}
                        onClick={() => handleProductDetail(item.productId)}
                        className="group relative flex flex-col bg-white dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ring-1 ring-black/5 dark:ring-white/10 cursor-pointer"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${item.imageUrl}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex-grow">
                                <h3 className="font-display text-lg font-bold text-primary dark:text-white leading-tight mb-1 group-hover:text-secondary transition-colors">
                                    {item.name}
                                </h3>
                                <p className="font-bold text-secondary text-lg">
                                    {Number(item.price || 0).toLocaleString('vi-VN')}đ <span className="text-sm font-normal text-gray-400">/ kg</span>
                                </p>
                            </div>

                            <button onClick={(e) => handleAdd(item, e)}
                                className="relative z-10 mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:bg-secondary hover:shadow-lg active:scale-95 transition-all duration-300">
                                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                )
            })}

            {productList.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-10">
                    Đang tải dữ liệu hoặc không có sản phẩm nào...
                </div>
            )}
        </>
    )
}