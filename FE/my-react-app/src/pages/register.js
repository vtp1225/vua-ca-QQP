import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    const handleLogin = () => {
        navigate('/');
    }

    return (
        <div className="font-body min-h-screen flex items-center justify-center bg-background-light relative overflow-hidden selection:bg-secondary selection:text-white">

            {/* Background Decoration: Subtle glowing orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]"></div>

            {/* Main Content */}
            <div className="w-full max-w-md p-4 relative z-10">
                {/* Register Card - Dark Primary Background (Like Login) */}
                <div className="flex flex-col items-center p-8 sm:p-10 bg-primary shadow-2xl rounded-3xl ring-1 ring-white/10">

                    {/* Logo Section */}
                    <div className="mb-8 flex flex-col items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="flex items-center justify-center size-14 rounded-full bg-white/10 text-white mb-2 ring-1 ring-white/20 shadow-lg">
                            <span className="material-symbols-outlined text-4xl">phishing</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
                            Q<span className="text-secondary">P</span>Q
                        </h2>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-white mb-1">Tạo tài khoản mới</h1>
                        <p className="text-white/70 text-sm">Trải nghiệm mua sắm hải sản đẳng cấp.</p>
                    </div>

                    {/* Register Form */}
                    <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>

                        {/* Full Name Input */}
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Họ và Tên</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-secondary transition-colors">badge</span>
                                <input
                                    type="text"
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                    placeholder="Nguyễn Văn A"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Địa chỉ Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-secondary transition-colors">mail</span>
                                <input
                                    type="email"
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Mật khẩu</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-secondary transition-colors">lock</span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full h-12 pl-11 pr-12 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                    placeholder="••••••••"
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

                        {/* Confirm Password Input */}
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Xác nhận Mật khẩu</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-secondary transition-colors">lock_reset</span>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="w-full h-12 pl-11 pr-12 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors flex items-center justify-center"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showConfirmPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-12 mt-4 flex items-center justify-center rounded-xl bg-secondary hover:bg-white hover:text-primary text-white font-bold text-base transition-all duration-300 shadow-lg shadow-secondary/20 transform active:scale-[0.98]"
                        >
                            Đăng Ký
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center text-sm text-white/60">
                        Đã có tài khoản? <a href="#" onClick={handleLogin} className="font-bold text-white hover:text-secondary transition-colors">Đăng nhập ngay</a>
                    </div>

                </div>
            </div>
        </div>
    )
}