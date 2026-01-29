import { Stethoscope, Shield, Syringe, HeartPulse, Users, FileCheck, Microscope, AlertTriangle } from 'lucide-react';

const clinicalExpertise = [
  {
    icon: Stethoscope,
    title: 'Chẩn đoán bệnh',
    description: 'Khám và chẩn đoán bệnh cho thú cưng và gia súc với độ chính xác cao'
  },
  {
    icon: Syringe,
    title: 'Điều trị lâm sàng',
    description: 'Phác đồ điều trị hiệu quả cho các bệnh lý phổ biến ở động vật'
  },
  {
    icon: HeartPulse,
    title: 'Chăm sóc sức khỏe',
    description: 'Tư vấn chế độ dinh dưỡng và chăm sóc sức khỏe toàn diện'
  },
  {
    icon: Microscope,
    title: 'Xét nghiệm chuyên sâu',
    description: 'Thực hiện các xét nghiệm cận lâm sàng hỗ trợ chẩn đoán'
  }
];

const researchExpertise = [
  {
    icon: Shield,
    title: 'An toàn sinh học',
    description: 'Tư vấn xây dựng hệ thống an toàn sinh học trong chăn nuôi'
  },
  {
    icon: AlertTriangle,
    title: 'Phòng chống dịch bệnh',
    description: 'Truyền thông về Cúm gia cầm, Dịch tả heo Châu Phi'
  },
  {
    icon: Users,
    title: 'Giáo dục cộng đồng',
    description: 'Nâng cao nhận thức người dân về phòng bệnh động vật'
  },
  {
    icon: FileCheck,
    title: 'Nghiên cứu khoa học',
    description: 'Tham gia các đề tài nghiên cứu về sức khỏe thú y'
  }
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-medical-500 font-medium tracking-wider uppercase text-sm">Chuyên môn</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Nghiên Cứu & Chuyên Môn
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-medical-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Kết hợp kinh nghiệm thực hành lâm sàng với nghiên cứu khoa học để mang đến 
              giải pháp toàn diện cho sức khỏe động vật và cộng đồng
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Clinical Column */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-sage-500 rounded-2xl flex items-center justify-center">
                  <Stethoscope size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">Chuyên môn Lâm sàng</h3>
                  <p className="text-sage-600 text-sm">Clinical Expertise</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {clinicalExpertise.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-sage-50 group-hover:bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon size={24} className="text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Experience badge */}
              <div className="mt-8 pt-6 border-t border-sage-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sage-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 text-sm">Kinh nghiệm từ 2020 - hiện tại</span>
                </div>
              </div>
            </div>
            
            {/* Research Column */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-medical-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-medical-500 rounded-2xl flex items-center justify-center">
                  <Shield size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">Nghiên cứu Cộng đồng</h3>
                  <p className="text-medical-600 text-sm">Community Research</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {researchExpertise.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-medical-50 group-hover:bg-medical-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon size={24} className="text-medical-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Focus areas */}
              <div className="mt-8 pt-6 border-t border-medical-100">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-xs font-medium">Cúm gia cầm</span>
                  <span className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-xs font-medium">ASF</span>
                  <span className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-xs font-medium">Biosecurity</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Bar */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-8 text-center">Kỹ năng bổ trợ</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Tin học văn phòng</span>
                  <span className="text-sage-600 font-semibold">Thành thạo</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Chứng chỉ CNTT cơ bản & nâng cao</span>
                  <span className="text-medical-600 font-semibold">Đạt chuẩn</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-medical-400 to-medical-600 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Kỹ năng mềm</span>
                  <span className="text-gold-600 font-semibold">Xuất sắc</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Kiến thức chuyên ngành Thú y</span>
                  <span className="text-sage-600 font-semibold">Chuyên sâu</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sage-400 to-medical-500 rounded-full w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
