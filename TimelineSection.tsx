import { GraduationCap, BookOpen, Award, Briefcase, TrendingUp } from 'lucide-react';

const timelineEvents = [
  {
    year: '2020',
    title: 'Bắt đầu hành trình',
    description: 'Trúng tuyển và nhập học ngành Thú y tại Đại học Cần Thơ. Một hành trình mới đầy thử thách và cơ hội.',
    icon: BookOpen,
    color: 'sage',
    highlight: false
  },
  {
    year: '2021',
    title: 'Sinh viên 5 tốt (Năm 1)',
    description: 'Năm đầu tiên đạt danh hiệu Sinh viên 5 tốt cấp Trường. Khẳng định nỗ lực trong học tập và rèn luyện.',
    icon: Award,
    color: 'gold',
    highlight: true
  },
  {
    year: '2022',
    title: 'Phát triển chuyên môn',
    description: 'Tiếp tục duy trì thành tích học tập xuất sắc. Bắt đầu tham gia các hoạt động thực hành lâm sàng.',
    icon: TrendingUp,
    color: 'medical',
    highlight: false
  },
  {
    year: '2023',
    title: 'Tích lũy kinh nghiệm',
    description: 'Đạt Sinh viên 5 tốt năm thứ 3. Tham gia truyền thông dịch bệnh và tư vấn an toàn sinh học.',
    icon: Briefcase,
    color: 'sage',
    highlight: false
  },
  {
    year: '2024',
    title: 'Giấy khen Khởi nghiệp Quốc gia',
    description: 'Vinh dự nhận Giấy khen tại Ngày hội Khởi nghiệp Quốc gia 2024. Tiếp tục chuỗi 4 năm Sinh viên 5 tốt.',
    icon: Award,
    color: 'gold',
    highlight: true
  },
  {
    year: '2025',
    title: 'Tốt nghiệp Loại Giỏi & Cao học',
    description: 'Hoàn thành chương trình Đại học với thành tích Loại Giỏi. Trở thành Học viên Cao học Thú y K32. Nhận Giấy khen Tháng Thanh niên.',
    icon: GraduationCap,
    color: 'medical',
    highlight: true
  }
];

export function TimelineSection() {
  return (
    <section id="journey" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sage-500 font-medium tracking-wider uppercase text-sm">Hành trình</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Hành Trình Học Thuật
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-medical-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              5 năm nỗ lực không ngừng nghỉ tại Đại học Cần Thơ - Từ tân sinh viên 
              đến Học viên Cao học với thành tích Loại Giỏi
            </p>
          </div>
          
          {/* University highlight */}
          <div className="bg-gradient-to-r from-sage-500 to-medical-500 rounded-3xl p-8 mb-16 text-white text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <GraduationCap size={40} />
              <h3 className="font-playfair text-3xl font-bold">Đại học Cần Thơ</h3>
            </div>
            <p className="text-white/90 mb-4">Ngành Thú y | 2020 - 2025</p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award size={24} className="text-gold-300" />
              <span className="font-semibold text-lg">Tốt nghiệp Loại Giỏi</span>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 timeline-line -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                      event.highlight 
                        ? 'border-gold-300 bg-gradient-to-br from-gold-50 to-white' 
                        : event.color === 'sage' 
                          ? 'border-sage-200 hover:border-sage-300' 
                          : 'border-medical-200 hover:border-medical-300'
                    }`}>
                      <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-3 ${
                        event.highlight 
                          ? 'bg-gold-100 text-gold-700' 
                          : event.color === 'sage' 
                            ? 'bg-sage-100 text-sage-700' 
                            : 'bg-medical-100 text-medical-700'
                      }`}>
                        {event.year}
                      </span>
                      <h4 className="font-playfair text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Icon - Center */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full items-center justify-center z-10 shadow-lg ${
                    event.highlight 
                      ? 'bg-gold-500 gold-shimmer' 
                      : event.color === 'sage' 
                        ? 'bg-sage-500' 
                        : 'bg-medical-500'
                  }`}>
                    <event.icon size={24} className="text-white" />
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Current status */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-sage-50 border-2 border-sage-200 px-6 py-4 rounded-2xl">
              <div className="w-4 h-4 bg-sage-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-sage-700">Hiện tại: Học viên Cao học Thú y K32</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
