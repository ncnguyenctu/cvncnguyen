import { Award, Star, Trophy, Medal, Sparkles } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Sinh viên 5 tốt',
    subtitle: 'Cấp Trường - Năm học 2020-2021',
    description: 'Danh hiệu tôn vinh sinh viên xuất sắc trong học tập, rèn luyện đạo đức, thể lực, kỹ năng và hội nhập.',
    icon: Star,
    year: '2021'
  },
  {
    id: 2,
    title: 'Sinh viên 5 tốt',
    subtitle: 'Cấp Trường - Năm học 2021-2022',
    description: 'Tiếp tục duy trì thành tích xuất sắc năm thứ 2 liên tiếp.',
    icon: Star,
    year: '2022'
  },
  {
    id: 3,
    title: 'Sinh viên 5 tốt',
    subtitle: 'Cấp Trường - Năm học 2022-2023',
    description: 'Năm thứ 3 liên tiếp đạt danh hiệu cao quý này.',
    icon: Star,
    year: '2023'
  },
  {
    id: 4,
    title: 'Sinh viên 5 tốt',
    subtitle: 'Cấp Trường - Năm học 2023-2024',
    description: 'Khẳng định sự kiên định và nỗ lực không ngừng trong suốt 4 năm.',
    icon: Star,
    year: '2024'
  },
  {
    id: 5,
    title: 'Sinh viên 5 tốt',
    subtitle: 'Cấp Trường - Năm học 2024-2025',
    description: 'Hoàn thành xuất sắc 5 năm liên tiếp đạt danh hiệu Sinh viên 5 tốt.',
    icon: Trophy,
    year: '2025'
  }
];

const specialAwards = [
  {
    title: 'Giấy khen Ngày hội Khởi nghiệp Quốc gia',
    year: '2024',
    issuer: 'Ban tổ chức Ngày hội Khởi nghiệp Quốc gia',
    icon: Medal,
    description: 'Ghi nhận những đóng góp và thành tích xuất sắc trong hoạt động khởi nghiệp'
  },
  {
    title: 'Giấy khen Tháng Thanh niên',
    year: '2025',
    issuer: 'Đoàn Thanh niên / Nhà trường',
    icon: Award,
    description: 'Vinh danh những đóng góp tích cực trong các hoạt động Đoàn và phong trào thanh niên'
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gold-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">Vinh danh</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Hall of Fame
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Những thành tích và giải thưởng đánh dấu hành trình học tập và rèn luyện không ngừng
            </p>
          </div>
          
          {/* 5-Good Student Highlight */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-3xl p-1 shadow-2xl shadow-gold-500/30">
              <div className="bg-gradient-to-br from-gold-50 via-white to-gold-50 rounded-[22px] p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles size={32} className="text-gold-500" />
                  <h3 className="font-playfair text-3xl font-bold text-gray-900">5 Năm Sinh viên 5 tốt</h3>
                  <Sparkles size={32} className="text-gold-500" />
                </div>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">
                  Thành tích đặc biệt xuất sắc - Duy trì danh hiệu Sinh viên 5 tốt cấp Trường 
                  trong suốt 5 năm học tại Đại học Cần Thơ (2020-2025)
                </p>
                
                {/* 5-year badges */}
                <div className="flex flex-wrap justify-center gap-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className="group relative"
                    >
                      <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${
                        achievement.year === '2025' 
                          ? 'bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/50' 
                          : 'bg-gradient-to-br from-gold-100 to-gold-200 hover:from-gold-200 hover:to-gold-300'
                      }`}>
                        <achievement.icon size={24} className={achievement.year === '2025' ? 'text-white' : 'text-gold-600'} />
                        <span className={`text-sm font-bold mt-1 ${achievement.year === '2025' ? 'text-white' : 'text-gold-700'}`}>
                          {achievement.year}
                        </span>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        <p className="font-semibold">{achievement.subtitle}</p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Special Awards */}
          <h3 className="font-playfair text-2xl font-bold text-gray-900 text-center mb-8">Giấy khen & Thành tích đặc biệt</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specialAwards.map((award, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gold-200 hover:border-gold-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform gold-shimmer">
                    <award.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-gold-100 text-gold-700 text-xs font-bold px-2 py-1 rounded-full">{award.year}</span>
                    </div>
                    <h4 className="font-playfair text-lg font-bold text-gray-900 mb-1">{award.title}</h4>
                    <p className="text-sm text-gold-600 mb-2">{award.issuer}</p>
                    <p className="text-gray-600 text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Academic Excellence Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-sage-500 to-medical-500 text-white px-8 py-4 rounded-2xl shadow-lg">
              <Trophy size={28} />
              <div className="text-left">
                <p className="font-bold text-lg">Tốt nghiệp Đại học Loại Giỏi</p>
                <p className="text-white/80 text-sm">Đại học Cần Thơ - Ngành Thú y</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
