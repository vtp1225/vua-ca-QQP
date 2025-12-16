import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        passwordHash: "",
        confirmPassword: "",
        phoneNumber: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        handleSubmit(e);
    };

    const handleLogin = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.passwordHash !== formData.confirmPassword) {
            setMessage("Mật khẩu xác nhận không giống!");
            return;
        }

        try {
            const res = await fetch("http://10.17.26.168:8080/VuaCaQPQ/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    passwordHash: formData.passwordHash,
                    phoneNumber: formData.phoneNumber,
                    address: formData.address,
                    role: "customer"
                }),
            });

            if (!res.ok) {
                throw new Error("Đăng ký thất bại");
            }

            setFormData({
                fullName: "",
                email: "",
                passwordHash: "",
                confirmPassword: "",
                phoneNumber: "",
                address: ""
            });

            alert("Đăng ký thành công");
        } catch (err) {
            setMessage(err.message);
        }
    };

    return (
        <div className="font-body min-h-screen flex items-center justify-center bg-background-light relative overflow-hidden selection:bg-secondary selection:text-white">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]"></div>

            <div className="w-full max-w-md p-4 relative z-10">
                <div className="flex flex-col items-center p-8 sm:p-10 bg-primary shadow-2xl rounded-3xl ring-1 ring-white/10">
                    <div className="mb-8 flex flex-col items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="flex items-center justify-center size-14 rounded-full bg-white/10 text-white mb-2 ring-1 ring-white/20 shadow-lg">
                            <span className="material-symbols-outlined text-4xl">phishing</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
                            Q<span className="text-secondary">P</span>Q
                        </h2>
                    </div>

                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-white mb-1">Tạo tài khoản mới</h1>
                        <p className="text-white/70 text-sm">Trải nghiệm mua sắm hải sản đẳng cấp.</p>
                    </div>

                    <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Họ và tên</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">badge</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">mail</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Số điện thoại</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">call</span>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Mật khẩu</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">lock</span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="passwordHash"
                                    value={formData.passwordHash}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-12 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Xác nhận mật khẩu</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">lock_reset</span>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-12 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showConfirmPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-white/90 mb-1.5 ml-1">Địa chỉ</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">call</span>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full h-12 mt-4 rounded-xl bg-secondary text-white font-bold">
                            Đăng Ký
                        </button>
                    </form>

                    {message && <p className="mt-4 text-center text-sm" style={{ color: "#d4af37" }}>{message}</p>}

                    <div className="mt-6 text-center text-sm text-white/60">
                        Đã có tài khoản? <a href="/login" onClick={handleLogin} className="font-bold text-white">Đăng nhập ngay</a>
                    </div>
                </div>
            </div>
        </div>
    );
}