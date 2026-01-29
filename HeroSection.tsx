import { ChevronDown, Stethoscope, GraduationCap, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden hero-gradient">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-medical-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap size={18} />
              <span>Học viên Cao học Thú y K32</span>
            </div>
            
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Nguyễn Chí
              <span className="block gradient-text">Nguyên</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg italic border-l-4 border-sage-500 pl-4">
              "Tận tâm vì sức khỏe vật nuôi - Trách nhiệm với sức khỏe cộng đồng"
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sage-600">
                <Stethoscope size={20} />
                <span>Thú y lâm sàng</span>
              </div>
              <div className="flex items-center gap-2 text-medical-600">
                <Heart size={20} />
                <span>An toàn sinh học</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#about" 
                className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-sage-500/30 hover:shadow-sage-500/50"
              >
                Khám phá thêm
              </a>
              <a 
                href="#contact" 
                className="border-2 border-medical-500 text-medical-600 hover:bg-medical-500 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>
          
          {/* Right - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-300 to-medical-300 rounded-3xl rotate-6 opacity-50"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-medical-300 to-sage-300 rounded-3xl -rotate-3 opacity-30"></div>
              
              {/* Profile image container */}
              <div className="relative w-72 h-96 lg:w-80 lg:h-[28rem] bg-gradient-to-br from-sage-400 to-medical-500 rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder for profile photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <GraduationCap size={64} />
                  </div>
                  <p className="text-sm font-medium">Ảnh chân dung</p>
                  <p className="text-xs opacity-70">Professional Portrait</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center gold-shimmer">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Sinh viên 5 tốt</p>
                  <p className="text-xs text-gray-500">5 năm liên tiếp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-sage-500 hover:text-sage-600 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
