import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { label: "Trang chủ", path: "/home" },
        { label: "Sản phẩm", path: "/product-detail" },
    ];

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Header Container - Floating Style */}
            <header className="z-50 w-full px-0 sm:px-0 lg:px-0 mt-auto">
                <div className="mx-auto max-w-7xl">
                    <div className="relative flex items-center justify-between rounded-2xl bg-primary/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-3 shadow-xl ring-1 ring-white/10 transition-all duration-300">

                        {/* 1. LOGO SECTION */}
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

                        {/* 2. DESKTOP NAVIGATION */}
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
                                    {/* Active Indicator Dot */}
                                    {isActive(item.path) && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary"></span>
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* 3. ACTIONS (Cart & Mobile Menu) */}
                        <div className="flex items-center gap-3">
                            

                            {/* Cart Button */}
                            <button
                                onClick={() => handleNavigation('/cart')}
                                className="relative flex items-center justify-center size-10 rounded-full bg-secondary text-white shadow-md hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                {/* Badge count example */}
                                <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary">
                                    2
                                </span>
                            </button>

                            {/* Mobile Hamburger Button */}
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