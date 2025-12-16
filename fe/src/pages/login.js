import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../context/cart-context";

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { updateToken } = useCart();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegiser = () => {
        navigate("/register");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://10.17.26.168:8080/VuaCaQPQ/auth/token", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Sai email hoặc mật khẩu");

            const data = await res.json();

            localStorage.setItem("access_token", data.result.token);
            updateToken(data.result.token);

            alert("Đăng nhập thành công");

            navigate("/");
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-body min-h-screen flex items-center justify-center bg-background-light relative overflow-hidden selection:bg-secondary selection:text-white">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]"></div>

            <div className="w-full max-w-md p-4 relative z-10">
                <div className="flex flex-col items-center p-8 sm:p-10 bg-primary shadow-2xl rounded-3xl ring-1 ring-white/10">
                    <div className="mb-8 flex flex-col items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
                        <div className="flex items-center justify-center size-14 rounded-full bg-white/10 text-white mb-2 ring-1 ring-white/20 shadow-lg">
                            <span className="material-symbols-outlined text-4xl">phishing</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
                            Q<span className="text-secondary">P</span>Q
                        </h2>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">Chào mừng trở lại!</h1>
                        <p className="text-white/70 text-sm">Đăng nhập để thưởng thức hải sản thượng hạng.</p>
                    </div>

                    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-2 ml-1">
                                Email
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                                    mail
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-2 ml-1">
                                Mật khẩu
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                                    lock
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-12 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 mt-2 flex items-center justify-center rounded-xl bg-secondary hover:bg-white hover:text-primary text-white font-bold transition-all disabled:opacity-60"
                        >
                            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-white/60">
                        Chưa có tài khoản?{" "}
                        <span
                            onClick={handleRegiser}
                            className="font-bold text-white hover:text-secondary cursor-pointer"
                        >
                            Đăng ký ngay
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}