import { Mail, Phone, MapPin, Linkedin, Facebook, Send, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-medical-500 font-medium tracking-wider uppercase text-sm">Liên hệ</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Kết Nối Với Tôi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-500 to-medical-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Tôi luôn sẵn sàng trao đổi về các vấn đề thú y, cơ hội hợp tác nghiên cứu 
              hoặc bất kỳ điều gì bạn muốn chia sẻ
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Card */}
              <div className="bg-gradient-to-br from-sage-500 to-medical-500 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold">Nguyễn Chí Nguyên</h3>
                    <p className="text-white/80">Học viên Cao học Thú y K32</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <MapPin size={20} />
                    <div>
                      <p className="text-white/70 text-sm">Quê quán</p>
                      <p className="font-medium">Vĩnh Long, Việt Nam</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <Mail size={20} />
                    <div>
                      <p className="text-white/70 text-sm">Email</p>
                      <p className="font-medium">nguyen.chinquyen@ctu.edu.vn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <Phone size={20} />
                    <div>
                      <p className="text-white/70 text-sm">Điện thoại</p>
                      <p className="font-medium">+84 xxx xxx xxx</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/70 text-sm mb-4">Kết nối mạng xã hội</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Quick Info */}
              <div className="bg-sage-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Lĩnh vực quan tâm</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white text-sage-700 px-3 py-1 rounded-full text-sm border border-sage-200">Thú y lâm sàng</span>
                  <span className="bg-white text-medical-700 px-3 py-1 rounded-full text-sm border border-medical-200">An toàn sinh học</span>
                  <span className="bg-white text-sage-700 px-3 py-1 rounded-full text-sm border border-sage-200">Phòng dịch bệnh</span>
                  <span className="bg-white text-medical-700 px-3 py-1 rounded-full text-sm border border-medical-200">Nghiên cứu khoa học</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all"
                        placeholder="Nhập họ và tên..."
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Chọn chủ đề...</option>
                      <option value="consult">Tư vấn thú y</option>
                      <option value="research">Hợp tác nghiên cứu</option>
                      <option value="education">Giáo dục & Đào tạo</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nội dung tin nhắn</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all resize-none"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sage-500 to-medical-500 hover:from-sage-600 hover:to-medical-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    Gửi tin nhắn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
