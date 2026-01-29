import { Heart, Stethoscope, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sage-500 rounded-xl flex items-center justify-center">
                <Stethoscope size={22} className="text-white" />
              </div>
              <span className="font-playfair font-bold text-xl">
                Nguyễn Chí Nguyên<span className="text-sage-400">.</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Học viên Cao học Thú y K32 - Tận tâm vì sức khỏe vật nuôi, 
              trách nhiệm với sức khỏe cộng đồng.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên kết nhanh</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-sage-400 transition-colors">Giới thiệu</a>
              <a href="#expertise" className="block text-gray-400 hover:text-sage-400 transition-colors">Chuyên môn</a>
              <a href="#journey" className="block text-gray-400 hover:text-sage-400 transition-colors">Hành trình học thuật</a>
              <a href="#achievements" className="block text-gray-400 hover:text-sage-400 transition-colors">Thành tích</a>
              <a href="#contact" className="block text-gray-400 hover:text-sage-400 transition-colors">Liên hệ</a>
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Học vấn</h4>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="font-medium text-sage-400">Đại học Cần Thơ</p>
                <p className="text-gray-400 text-sm">Cử nhân Thú y - Loại Giỏi</p>
                <p className="text-gray-500 text-xs mt-1">2020 - 2025</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="font-medium text-medical-400">Cao học Thú y K32</p>
                <p className="text-gray-400 text-sm">Đang theo học</p>
                <p className="text-gray-500 text-xs mt-1">2025 - Hiện tại</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © 2025 Nguyễn Chí Nguyên. Thiết kế với 
              <Heart size={14} className="text-red-500 fill-red-500" /> 
              tại Việt Nam
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-sage-400 transition-colors group"
            >
              <span className="text-sm">Về đầu trang</span>
              <div className="w-8 h-8 bg-gray-800 group-hover:bg-sage-500 rounded-lg flex items-center justify-center transition-colors">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
