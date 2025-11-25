import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        navigate('/home');
    }

    return (
        <div className="font-body min-h-screen flex items-center justify-center bg-background-light relative overflow-hidden selection:bg-secondary selection:text-white">

            {/* Background Decoration: Subtle glowing orbs for Light Mode */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]"></div>

            {/* Main Content */}
            <div className="w-full max-w-md p-4 relative z-10">
                {/* Login Card - Dark Primary Background (Like Header) */}
                <div className="flex flex-col items-center p-8 sm:p-10 bg-primary shadow-2xl rounded-3xl ring-1 ring-white/10">

                    {/* Logo Section */}
                    <div className="mb-8 flex flex-col items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="flex items-center justify-center size-14 rounded-full bg-white/10 text-white mb-2 ring-1 ring-white/20 shadow-lg">
                            <span className="material-symbols-outlined text-4xl">phishing</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
                            Fish<span className="text-secondary">Co</span>
                        </h2>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">Chào mừng trở lại!</h1>
                        <p className="text-white/70 text-sm">Đăng nhập để thưởng thức hải sản thượng hạng.</p>
                    </div>

                    {/* Login Form */}
                    <div className="w-full flex flex-col gap-5">

                        {/* Email/User Input */}
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-2 ml-1">Email hoặc Tên đăng nhập</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-secondary transition-colors">person</span>
                                <input
                                    placeholder="Bạn chỉ cần nhấn đăng nhập"
                                    type="text"
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-2 ml-1">Mật khẩu</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-secondary transition-colors">lock</span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full h-12 pl-11 pr-12 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                    placeholder="Không cần đăng ký tài khoản"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors flex items-center justify-center"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <a href="#" className="text-sm font-medium text-secondary hover:text-white transition-colors">
                                Quên mật khẩu?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleLogin}
                            className="w-full h-12 mt-2 flex items-center justify-center rounded-xl bg-secondary hover:bg-white hover:text-primary text-white font-bold text-base transition-all duration-300 shadow-lg shadow-secondary/20 transform active:scale-[0.98]"
                        >
                            Đăng nhập
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="mt-8 text-center text-sm text-white/60">
                        Chưa có tài khoản? <a href="#" className="font-bold text-white hover:text-secondary transition-colors">Đăng ký ngay</a>
                    </div>

                </div>
            </div>
        </div>
    )
}