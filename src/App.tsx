import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Header scroll effect
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Accordion logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling as HTMLElement;
        const isOpen = header.classList.contains('active');

        // Close all other items
        accordionHeaders.forEach(otherHeader => {
          otherHeader.classList.remove('active');
          (otherHeader.nextElementSibling as HTMLElement).style.maxHeight = '0';
        });

        // Toggle current item
        if (!isOpen) {
          header.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header / Navbar */}
      <header id="main-header">
        <div className="logo">Lụa An</div>
        <a href="#contact-section" className="nav-cta">Nhận Tư Vấn</a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>LỤA AN</h1>
          <h2>Woven Between Worlds</h2>
          <a href="#story" className="hero-btn">Khám Phá Câu Chuyện</a>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="section-padding brand-story">
        <div className="story-image">
          <img 
            src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/Gemini_Generated_Image_ud8vciud8vciud8v_htaepq.png" 
            alt="Lụa An - Hành trình văn hóa" 
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="story-content">
          <h2>Mọi sợi tơ đều dệt nên một câu chuyện</h2>
          <p>
            Trong từng sợi lụa mỏng nhẹ, không chỉ có chất liệu – mà có cả ký ức. 
            Mỗi chiếc khăn là một điểm giao: giữa quá khứ và hiện tại, giữa bản sắc và cá tính, 
            giữa Việt Nam và thế giới.
          </p>
        </div>
      </section>

      {/* Collection Section */}
      <section className="section-padding collection">
        <h2>BỘ SƯU TẬP KHĂN LỤA</h2>
        <div className="collection-grid">
          <div className="product-card">
            <div className="product-image-wrapper">
              <div className="product-image img-front" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/Tr%E1%BB%91ng_%C4%91%E1%BB%93ng_tam8yd.pdf')" }}></div>
              <div className="product-image img-back" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/G%C3%A0_tr%E1%BB%91ng_%E1%BB%9F_gi%E1%BB%AFa_iqovsy.pdf')" }}></div>
            </div>
            <h3>Âm Vang Việt Nam</h3>
            <p>Những họa tiết di sản được tái hiện trên nền lụa thượng hạng.</p>
          </div>
          <div className="product-card">
            <div className="product-image-wrapper">
              <div className="product-image img-front" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/Gemini_Generated_Image_kmk748kmk748kmk7_edgxyx.png')" }}></div>
            </div>
            <h3 className="product-title">Hành Trình Văn Hóa</h3>
            <p className="product-description">Sự kết hợp tinh tế giữa kỹ thuật dệt truyền thống và phong cách hiện đại.</p>
          </div>
          <div className="product-card">
            <div className="product-image-wrapper">
              <div className="product-image img-front" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/Gemini_Generated_Image_sf8sgqsf8sgqsf8s_1_vnabyf.png')" }}></div>
            </div>
            <h3 className="product-title">Khu Vườn Thiên Nhiên</h3>
            <p className="product-description">Cảm hứng từ sắc màu rực rỡ của cỏ cây hoa lá Việt Nam.</p>
          </div>
        </div>
      </section>

      {/* Lookbook / Usage Section */}
      <section className="section-padding lookbook">
        <div className="section-heading-wrapper">
          <h2>Muôn dáng vẻ của An</h2>
          <p className="section-subtitle">Cách Lụa An biến tấu để đồng hành cùng mọi khoảnh khắc của bạn.</p>
        </div>
        <div className="lookbook-scroll">
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697907765_6f81453493ff7d910b7080cf69773a00_t2cviu.jpg" alt="Classic Elegance" />
            <div className="lookbook-caption">Quàng cổ - Classic Elegance</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697950306_88ce86dd0ad429e40242393584fd5348_tdilji.jpg" alt="Modern Chic" />
            <div className="lookbook-caption">Buộc túi xách - Modern Chic</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697907768_0056c13816675357872e36dea3b2f378_mppy1d.jpg" alt="Boho Style" />
            <div className="lookbook-caption">Băng đô - Boho Style</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697907764_917016a57d292e70ba34738c01cfa4a1_nli9a0.jpg" alt="Belt Accessory" />
            <div className="lookbook-caption">Thắt lưng - Belt Accessory</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697950332_952e0025882b23fcc2add7ff385989f7_ie6l10.jpg" alt="Hair Tie" />
            <div className="lookbook-caption">Buộc tóc - Hair Tie</div>
          </div>
        </div>
      </section>

      {/* Silk Benefits Section */}
      <section className="section-padding benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">Vì sao bạn chọn Lụa An ?</h2>
          
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-header">
                Lụa Tơ Tằm Nguyên Chất 100% 
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Trải nghiệm sự mềm mại thượng hạng và độ bóng tự nhiên từ tơ tằm thủ công, không pha tạp sợi tổng hợp, an toàn tuyệt đối cho làn da.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header">
                Tính năng chống dị ứng và kháng khuẩn 
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Sợi tơ tằm tự nhiên không gây kích ứng và có tính kháng khuẩn nội tại, giúp giảm sự phát triển của vi khuẩn, nấm mốc.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header">
                Điều hòa nhiệt độ và thoáng khí 
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Sợi tơ thông minh giúp cơ thể bạn 'thở', giữ mát và thoáng khí vào mùa hè, đồng thời giữ ấm và ổn định thân nhiệt vào mùa đông.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header">
                Khả năng kháng bụi và bụi bẩn 
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Bề mặt lụa trơn nhẵn tự nhiên giúp hạn chế bám bụi bẩn và xơ vải, giữ cho chiếc khăn luôn sạch sẽ và tinh tươm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="main-footer">
        <div className="footer-container section-padding">
          <div className="footer-brand">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/b_rgb:D1D6E0/e_background_removal/ChatGPT_Image_09_53_35_25_thg_3_2026_ur7x2b.png" className="footer-logo" alt="Lụa An Logo" />
            <p className="footer-tagline">"Mọi sợi tơ đều dệt nên một câu chuyện"</p>
          </div>

          <div className="footer-contact" id="contact-section">
            <h3>LIÊN HỆ</h3>
            <p>Hotline: 0911 316 968_ FAX: (0263) 3 863628</p>
            <p>Email: sales@luaan.com.vn </p>
          </div>

          <div className="footer-address">
            <h3>ĐỊA CHỈ</h3>
            <p>56 Lý Thường Kiệt, Phường 1 Bảo Lộc, Tỉnh Lâm Đồng </p>
          </div>
        </div>
      </footer>
    </>
  );
}
