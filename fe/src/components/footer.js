export default function Footer() {
    return (
        <footer className="w-full bg-primary dark:bg-background-dark text-white border-t border-white/10 mt-auto">
            <div className="w-full border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-display text-2xl font-bold text-white">Đăng ký nhận tin</h3>
                        <p className="text-sm text-white/70 mt-1">Nhận ưu đãi độc quyền và cập nhật mới nhất từ FishCo.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input
                            type="email"
                            placeholder="Email của bạn..."
                            className="w-full md:w-80 px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        />
                        <button className="px-6 py-2.5 rounded-lg bg-secondary text-white font-bold text-sm hover:bg-white hover:text-primary transition-colors duration-300">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl text-secondary">phishing</span>
                            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
                                Q<span className="text-secondary">P</span>Q
                            </h2>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                            Mang tinh hoa của đại dương đến bàn ăn của bạn. Cam kết chất lượng tươi ngon và bền vững hàng đầu.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg text-white mb-4">Về FishCo</h4>
                        <ul className="space-y-3">
                            <li><a className="text-sm text-white/70 hover:text-secondary transition-colors" href="#">Câu chuyện thương hiệu</a></li>
                            <li><a className="text-sm text-white/70 hover:text-secondary transition-colors" href="#">Tuyển dụng</a></li>
                            <li><a className="text-sm text-white/70 hover:text-secondary transition-colors" href="#">Hệ thống cửa hàng</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg text-white mb-4">Hỗ trợ khách hàng</h4>
                        <ul className="space-y-3">
                            <li><a className="text-sm text-white/70 hover:text-secondary transition-colors" href="#">Trung tâm trợ giúp</a></li>
                            <li><a className="text-sm text-white/70 hover:text-secondary transition-colors" href="#">Chính sách vận chuyển</a></li>
                            <li><a className="text-sm text-white/70 hover:text-secondary transition-colors" href="#">Chính sách đổi trả</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg text-white mb-4">Kết nối</h4>
                        <div className="flex gap-4 mb-6">
                            {['facebook', 'nest_cam_iq_outdoor', 'photo_camera'].map((icon, index) => (
                                <a key={index} href="#" className="flex items-center justify-center size-10 rounded-full bg-white/10 text-white hover:bg-secondary hover:text-white transition-all duration-300">
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </a>
                            ))}
                        </div>
                        <div className="text-sm text-white/70">
                            <p className="mb-1">Hotline: <strong className="text-white">1900 123 456</strong></p>
                            <p>Email: contact@fishco.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/50">
                        © 2024 FishCo. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-white/50 hover:text-secondary transition-colors">Điều khoản</a>
                        <a href="#" className="text-xs text-white/50 hover:text-secondary transition-colors">Bảo mật</a>
                        <a href="#" className="text-xs text-white/50 hover:text-secondary transition-colors">Cookie</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}