import { MapPin, Calendar, BookOpen, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sage-500 font-medium tracking-wider uppercase text-sm">Giới thiệu</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Câu Chuyện Của Tôi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-medical-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Story Image */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-sage-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-gradient-to-br from-sage-100 to-medical-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  {/* Placeholder for story illustration */}
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-sage-500/20 rounded-full flex items-center justify-center mb-4">
                      <BookOpen size={40} className="text-sage-600" />
                    </div>
                    <p className="text-gray-500 text-sm">Hình ảnh minh họa hành trình học tập</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Story Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Info badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-sage-50 text-sage-700 px-4 py-2 rounded-full text-sm">
                  <Calendar size={16} />
                  <span>29/12/2002</span>
                </div>
                <div className="flex items-center gap-2 bg-medical-50 text-medical-700 px-4 py-2 rounded-full text-sm">
                  <MapPin size={16} />
                  <span>Vĩnh Long</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Từ những ngày đầu tiên bước chân vào giảng đường <span className="font-semibold text-sage-600">Đại học Cần Thơ</span> năm 2020, 
                tôi đã mang trong mình niềm đam mê cháy bỏng với ngành Thú y. Suốt 5 năm miệt mài học tập và rèn luyện, 
                tôi không ngừng nỗ lực để đạt được <span className="font-semibold text-medical-600">thành tích học tập Loại Giỏi</span> và 
                vinh dự được công nhận là <span className="font-semibold text-gold-600">Sinh viên 5 tốt cấp Trường</span> trong suốt 5 năm liên tiếp.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Hiện tại, với vai trò là <span className="font-semibold text-sage-600">Học viên Cao học Thú y K32</span>, 
                tôi đang tiếp tục hành trình nghiên cứu sâu hơn về lĩnh vực sức khỏe động vật và an toàn sinh học. 
                Mỗi ngày là một cơ hội mới để học hỏi, để cống hiến và để lan tỏa tình yêu thương đến với những người bạn bốn chân.
              </p>
              
              {/* Goals */}
              <div className="bg-gradient-to-r from-sage-50 to-medical-50 rounded-2xl p-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mục tiêu nghề nghiệp</h4>
                    <p className="text-gray-600">
                      Trở thành chuyên gia thú y có tầm ảnh hưởng, đóng góp vào công tác phòng chống dịch bệnh 
                      và nâng cao nhận thức cộng đồng về an toàn sinh học trong chăn nuôi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
