import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useCart from "../context/cart-context";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const { cartItems, logOut, updateToken } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { label: "Trang chủ", path: "/" },
    ];

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const handleLogOut = () => {
        updateToken(null);
        logOut();
        setCurrentUser("Đăng nhập");
        navigate("/login");
    };

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (token) {
            fetch("http://192.168.1.101:8080/VuaCaQPQ/users/me", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })
                .then((res) => {
                    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                    return res.json();
                })
                .then((data) => setCurrentUser(data))
                .catch((err) => console.error("Lỗi:", err));
        }
    }, []);


    return (
        <>
            <header className="sticky top-0 z-50 w-full px-0 sm:px-0 lg:px-0">
                <div className="mx-auto max-w-7xl">
                    <div className="relative flex items-center justify-between rounded-2xl bg-primary/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-3 shadow-xl ring-1 ring-white/10 transition-all duration-300">
                        <div
                            onClick={() => handleNavigation('/home')}
                            className="flex items-center gap-3 cursor-pointer group"
                        >
                            <div className="relative flex items-center justify-center size-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <span className="material-symbols-outlined text-3xl text-white group-hover:text-secondary transition-colors duration-300">phishing</span>
                            </div>
                            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
                                Q<span className="text-secondary">P</span>Q
                            </h2>
                        </div>

                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`relative text-sm font-medium transition-colors duration-300 ${isActive(item.path)
                                        ? "text-secondary font-bold"
                                        : "text-white/80 hover:text-secondary"
                                        }`}
                                >
                                    {item.label}
                                    {isActive(item.path) && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary"></span>
                                    )}
                                </button>
                            ))}
                        </nav>



                        <div className="flex items-center gap-3">

                            <div className="relative">
                                {currentUser?.result?.fullName ? (
                                    <details className="relative group">
                                        <summary className="flex items-center gap-2 bg-primary/20 text-secondary px-3 py-2 rounded-full hover:bg-primary/30 transition-colors list-none cursor-pointer">
                                            <span className="material-symbols-outlined text-2xl">person</span>
                                            <p className="font-medium">{currentUser.result.fullName}</p>
                                        </summary>

                                        <div className="flex flex-col absolute right-0 mt-2 w-28 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2 z-50">
                                            <button
                                                onClick={handleLogOut}
                                                className="w-full text-left px-4 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                            >
                                                Đăng xuất
                                            </button>
                                        </div>
                                    </details>
                                ) : (
                                    <button
                                        onClick={() => navigate("/login")}
                                        className="flex items-center gap-2 bg-primary/20 text-secondary px-3 py-2 rounded-full hover:bg-primary/30 transition-colors"
                                    >
                                        <span className="material-symbols-outlined">person</span>
                                        <p>Đăng nhập</p>
                                    </button>
                                )}
                            </div>

                            <button
                                onClick={() => handleNavigation('/cart')}
                                className="relative flex items-center justify-center size-10 rounded-full bg-secondary text-white shadow-md hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden flex items-center justify-center size-10 rounded-full text-white hover:bg-white/10 transition-colors"
                            >
                                <span className="material-symbols-outlined">
                                    {isMobileMenuOpen ? 'close' : 'menu'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}