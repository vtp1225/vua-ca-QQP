/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2C3E50",        // Xanh than chì: Sang trọng, trầm ổn
        "secondary": "#D4AF37",      // Vàng kim loại (Metallic Gold): Điểm nhấn cao cấp
        "background-light": "#F9FAFB", // Trắng xám nhẹ (Gray 50): Thanh thoát, hiện đại
        "background-dark": "#0B1120",  // Đen sâu: Tạo chiều sâu cho giao diện tối
        "text-color": "#1F2937"      // Xám đen: Dễ đọc, mềm mại hơn đen tuyền
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"] // Font có chân hiện đại cho tiêu đề sang trọng
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}