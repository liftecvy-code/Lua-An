import React, { useEffect, useState } from 'react';

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');

  const switchLang = () => {
    setLang(prev => prev === 'vi' ? 'en' : 'vi');
  };

  // 1. Hàm đóng/mở Accordion dùng chung (Chuẩn hóa React)
  const toggleAccordion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const header = e.currentTarget;
    const content = header.nextElementSibling as HTMLElement;
    const icon = header.querySelector('.accordion-icon') as HTMLElement;
    const isOpen = header.classList.contains('active');

    if (isOpen) {
      header.classList.remove('active');
      content.style.maxHeight = '';
      icon.innerText = '+';
      header.style.color = "var(--text-color)";
    } else {
      header.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";
      icon.innerText = '-';
      header.style.color = "var(--gold-muted)";
    }
  };

  // 2. Hàm xử lý Click Mua Hàng -> Cuộn xuống đúng Policy của sản phẩm đó
  const handleBuyNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Tìm khu vực thẻ sản phẩm đang chứa nút vừa bấm
    const card = e.currentTarget.closest('.product-card');
    // Tìm khu vực Shipping nằm TRONG thẻ sản phẩm đó (Giải quyết lỗi trùng ID)
    const section = card?.querySelector('.product-shipping-info');
    
    if (section) {
      // Cuộn mượt mà
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Tự động mở Policy nếu đang đóng
      const header = section.querySelector('.accordion-header') as HTMLButtonElement;
      if (header && !header.classList.contains('active')) {
        header.click();
      }
    }
  };

  // 3. Hiệu ứng thanh Header khi cuộn trang
  useEffect(() => {
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header / Navbar */}
      <header id="main-header">
        <div className="logo-wrapper">
          <img 
            src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/b_rgb:D1D6E0/e_background_removal/ChatGPT_Image_09_53_35_25_thg_3_2026_ur7x2b.png" 
            alt="Lụa An Brand Logo" 
            className="brand-logo" 
            referrerPolicy="no-referrer"
          />
          <span className="brand-name">Lụa An</span>
        </div>
        
        <div className="header-actions">
          <button id="lang-toggle" onClick={switchLang}>{lang === 'vi' ? 'EN' : 'VI'}</button>
          <a 
            href="#contact-section" 
            className="nav-cta"
            data-vi="Nhận Tư Vấn"
            data-en="Contact Us"
          >
            {lang === 'vi' ? 'Nhận Tư Vấn' : 'Contact Us'}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 data-vi="LỤA AN" data-en="LUA AN">LỤA AN</h1>
          <h2 
            id="hero-tagline"
            data-vi="Mọi sợi tơ đều dệt nên một câu chuyện"
            data-en="Every thread tells a story"
          >
            {lang === 'vi' ? 'Mọi sợi tơ đều dệt nên một câu chuyện' : 'Every thread tells a story'}
          </h2>
          <a 
            href="#story" 
            className="hero-btn"
            data-vi="Khám Phá Câu Chuyện"
            data-en="Discover Our Story"
          >
            {lang === 'vi' ? 'Khám Phá Câu Chuyện' : 'Discover Our Story'}
          </a>
        </div>
      </section>

      {/* Editorial Brand Story Section */}
      <section id="story" className="section-padding editorial-story">
        
        {/* Tuyên ngôn trung tâm (The Statement) */}
        <div className="story-statement-wrapper">
          <h2 className="story-statement" data-vi="Không đơn thuần là thiết kế sắc màu. Mỗi chiếc khăn là một bức tranh biết kể chuyện." data-en="Not merely colorful designs. Each scarf is a painting that tells a story.">
            {lang === 'vi' 
              ? 'Không đơn thuần là thiết kế sắc màu. Mỗi chiếc khăn là một bức tranh biết kể chuyện.' 
              : 'Not merely colorful designs. Each scarf is a painting that tells a story.'}
          </h2>
        </div>

        {/* Bố cục hình ảnh & chữ phong cách tạp chí */}
        <div className="editorial-grid">
          <div className="editorial-image-container">
            {/*z7653013531182_3bba7b255581ce1669c7fd6b6b59c479_mtzpym */}
            <img 
              src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/Gemini_Generated_Image_ud8vciud8vciud8v_htaepq.png" 
              alt="Lụa An - Bức tranh nghệ thuật" 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="editorial-img"
            />
          </div>
          
          <div className="editorial-content">
            <p className="editorial-lead" data-vi="Ngay từ những ngày đầu thành lập, Lụa An đã mang trong mình một khát vọng vượt lên trên khái niệm phụ kiện thời trang thông thường. Chúng tôi tin rằng, tơ lụa là thứ ngôn ngữ mềm mại nhất để lưu giữ dòng chảy lịch sử." data-en="Since our inception, Lụa An has harbored a desire that transcends the concept of ordinary fashion accessories. We believe that silk is the softest language to preserve the flow of history.">
              {lang === 'vi' 
                ? 'Ngay từ những ngày đầu thành lập, Lụa An đã mang trong mình một khát vọng vượt lên trên khái niệm phụ kiện thời trang thông thường. Chúng tôi tin rằng, tơ lụa là thứ ngôn ngữ mềm mại nhất để lưu giữ dòng chảy lịch sử.' 
                : 'Since our inception, Lụa An has harbored a desire that transcends the concept of ordinary fashion accessories. We believe that silk is the softest language to preserve the flow of history.'}
            </p>
            <p data-vi="Chính vì thế, thay vì chạy theo xu hướng nhất thời, chúng tôi chọn cách chắt lọc tinh hoa từ văn hóa dân gian Việt Nam. Mỗi họa tiết được phác họa, mỗi gam màu được chọn lựa đều là một nét cọ vẽ nên bức tranh di sản, chờ đợi được ngân vang trên đôi vai của những tâm hồn đồng điệu." data-en="Therefore, instead of chasing fleeting trends, we choose to distill the essence of Vietnamese folklore. Every sketched pattern, every chosen hue is a brushstroke painting a portrait of heritage, waiting to resonate on the shoulders of kindred spirits.">
              {lang === 'vi' 
                ? 'Chính vì thế, thay vì chạy theo xu hướng nhất thời, chúng tôi chọn cách chắt lọc tinh hoa từ văn hóa dân gian Việt Nam. Mỗi họa tiết được phác họa, mỗi gam màu được chọn lựa đều là một nét cọ vẽ nên bức tranh di sản, chờ đợi được ngân vang trên đôi vai của những tâm hồn đồng điệu.' 
                : 'Therefore, instead of chasing fleeting trends, we choose to distill the essence of Vietnamese folklore. Every sketched pattern, every chosen hue is a brushstroke painting a portrait of heritage, waiting to resonate on the shoulders of kindred spirits.'}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="section-padding collection">
        <div className="section-heading-wrapper">
          <h2
            data-vi="BỘ SƯU TẬP KHĂN LỤA"
            data-en="SILK SCARF COLLECTION"
          >
            {lang === 'vi' ? 'BỘ SƯU TẬP KHĂN LỤA' : 'SILK SCARF COLLECTION'}
          </h2>
        </div>
        
        <div className="collection-grid">
          {/* PRODUCT 1 */}
          <div className="product-card">
            <div className="product-image-wrapper">
              <div className="product-image img-front" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/Tr%E1%BB%91ng_%C4%91%E1%BB%93ng_tam8yd.pdf')" }}></div>
            </div>
            <h3 data-vi="Âm Vang Việt Nam" data-en="Echoes of Vietnam">
              {lang === 'vi' ? 'Âm Vang Việt Nam' : 'Echoes of Vietnam'}
            </h3>
            <p data-vi="Những họa tiết di sản được tái hiện trên nền lụa thượng hạng." data-en="Heritage patterns reimagined on premium silk.">
              {lang === 'vi' ? 'Những họa tiết di sản được tái hiện trên nền lụa thượng hạng.' : 'Heritage patterns reimagined on premium silk.'}
            </p>
            
            <div className="product-checkout">
              <h3 className="price-tag" data-vi="Giá: 480.000 VNĐ" data-en="Price: $18.90">
                {lang === 'vi' ? 'Giá: 480.000 VNĐ' : 'Price: $18.90'}
              </h3>
              
              <div className="stripe-checkout-wrapper">
                <a 
                  href="#" 
                  className="luxury-buy-btn"
                  onClick={handleBuyNow}
                  data-vi="Mua Ngay - 480.000 VNĐ"
                  data-en="Buy Now - $18.90"
                >
                  {lang === 'vi' ? 'Mua Ngay - 480.000 VNĐ' : 'Buy Now - $18.90'}
                </a>
                
                <div className="trust-badges">
                  <img src="https://icolor.vn/logo-visa/" alt="Visa" width="25" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" width="40" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" width="25" referrerPolicy="no-referrer" />
                </div>
              </div>

              <div id="paypal-button-container-1" className="paypal-container"></div>
            </div>

            <div className="product-shipping-info">
              <div className="accordion-item shipping-accordion">
                <button className="accordion-header" onClick={toggleAccordion}>
                  <span data-vi="Vận chuyển & Chính sách" data-en="Shipping & Policy">
                    {lang === 'vi' ? 'Vận chuyển & Chính sách' : 'Shipping & Policy'}
                  </span>
                  <span className="accordion-icon">+</span>
                </button>
                <div className="accordion-content">
                  <div className="shipping-regions">
                    <p className="shipping-subtitle" data-vi="Dịch vụ giao hàng áp dụng cho các khu vực:" data-en="Our shipping service is available to the following regions:">
                      {lang === 'vi' ? 'Dịch vụ giao hàng áp dụng cho các khu vực:' : 'Our shipping service is available to the following regions:'}
                    </p>
                    <ul className="region-list">
                      <li>
                        <strong data-vi="Việt Nam:" data-en="Vietnam:">{lang === 'vi' ? 'Việt Nam:' : 'Vietnam:'}</strong>
                        <span data-vi="Miễn phí | 2-3 ngày làm việc" data-en="Free | 2-3 business days">
                          {lang === 'vi' ? 'Miễn phí | 2-3 ngày làm việc' : 'Free | 2-3 business days'}
                        </span>
                      </li>
                      <li>
                        <strong data-vi="Châu Á (Nhật Bản, Hàn Quốc, Singapore, Đài Loan...):" data-en="Asia (Japan, Korea, Singapore, Taiwan...):">
                          {lang === 'vi' ? 'Châu Á (Nhật Bản, Hàn Quốc, Singapore, Đài Loan...):' : 'Asia (Japan, Korea, Singapore, Taiwan...):'}
                        </strong>
                        <span data-vi="$5.00 | 5-7 ngày làm việc" data-en="$5.00 | 5-7 business days">
                          {lang === 'vi' ? '$5.00 | 5-7 ngày làm việc' : '$5.00 | 5-7 business days'}
                        </span>
                      </li>
                      <li>
                        <strong data-vi="Âu Mỹ (Mỹ, Anh, Pháp, Úc, Canada...):" data-en="EU & Americas (US, UK, France, Australia...):">
                          {lang === 'vi' ? 'Âu Mỹ (Mỹ, Anh, Pháp, Úc, Canada...):' : 'EU & Americas (US, UK, France, Australia...):'}
                        </strong>
                        <span data-vi="$12.00 | 7-14 ngày làm việc" data-en="$12.00 | 7-14 business days">
                          {lang === 'vi' ? '$12.00 | 7-14 ngày làm việc' : '$12.00 | 7-14 business days'}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="shipping-policy-block">
                    <h4 data-vi="THÔNG TIN & CHÍNH SÁCH ĐẶT TRƯỚC" data-en="PRE-ORDER INFORMATION & POLICY">
                      {lang === 'vi' ? 'THÔNG TIN & CHÍNH SÁCH ĐẶT TRƯỚC' : 'PRE-ORDER INFORMATION & POLICY'}
                    </h4>
                    <p data-vi="Tại LỤA AN, chúng tôi mang đến cơ hội độc quyền để đặt trước những tác phẩm lụa chọn lọc trước khi chúng chính thức ra mắt. Bằng việc đặt trước, bạn đã giữ chỗ cho sản phẩm của mình, và đơn hàng sẽ được gửi đi ngay khi hoàn thiện." data-en="At LỤA AN, we offer our clientele the exclusive opportunity to pre-order select items before they are available for delivery. By placing a pre-order, you reserve the product, which will be shipped as soon as it becomes available.">
                      {lang === 'vi' ? 'Tại LỤA AN, chúng tôi mang đến cơ hội độc quyền để đặt trước những tác phẩm lụa chọn lọc trước khi chúng chính thức ra mắt. Bằng việc đặt trước, bạn đã giữ chỗ cho sản phẩm của mình, và đơn hàng sẽ được gửi đi ngay khi hoàn thiện.' : 'At LỤA AN, we offer our clientele the exclusive opportunity to pre-order select items before they are available for delivery. By placing a pre-order, you reserve the product, which will be shipped as soon as it becomes available.'}
                    </p>
                    <p data-vi="Xin lưu ý: Các sản phẩm lụa đặt trước không hỗ trợ hoàn tiền. Thời gian giao hàng có thể thay đổi tùy thuộc vào quá trình chế tác thủ công và quy trình vận chuyển." data-en="Please note that our pre-order products are non-refundable, and the delivery time may vary depending on product availability and artisanal crafting processes.">
                      {lang === 'vi' ? 'Xin lưu ý: Các sản phẩm lụa đặt trước không hỗ trợ hoàn tiền. Thời gian giao hàng có thể thay đổi tùy thuộc vào quá trình chế tác thủ công và quy trình vận chuyển.' : 'Please note that our pre-order products are non-refundable, and the delivery time may vary depending on product availability and artisanal crafting processes.'}
                    </p>
                    <p 
                      data-vi="Giá chưa bao gồm thuế nhập khẩu. Khách hàng chịu trách nhiệm thanh toán các khoản phí hải quan (nếu có) theo quy định của quốc gia sở tại." 
                      data-en="Taxes and duties are not included. Customers are responsible for any customs fees incurred upon delivery according to local regulations."
                      style={{ marginTop: '10px', fontStyle: 'italic', color: '#888' }}
                    >
                      {lang === 'vi' 
                        ? 'Giá chưa bao gồm thuế nhập khẩu. Khách hàng chịu trách nhiệm thanh toán các khoản phí hải quan (nếu có) theo quy định của quốc gia sở tại.' 
                        : 'Taxes and duties are not included. Customers are responsible for any customs fees incurred upon delivery according to local regulations.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="product-card">
            <div className="product-image-wrapper">
              <div className="product-image img-front" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/q_auto/f_auto/v1774408856/z7653013502697_3e9810cb911627e9c212bf678eb690ed_o4mya1.jpg')" }}></div>
            </div>
            <h3 className="product-title" data-vi="Hành Trình Văn Hóa" data-en="Cultural Journey">
              {lang === 'vi' ? 'Hành Trình Văn Hóa' : 'Cultural Journey'}
            </h3>
            <p className="product-description" data-vi="Sự kết hợp tinh tế giữa kỹ thuật dệt truyền thống và phong cách hiện đại." data-en="A delicate blend of traditional weaving techniques and modern style.">
              {lang === 'vi' ? 'Sự kết hợp tinh tế giữa kỹ thuật dệt truyền thống và phong cách hiện đại.' : 'A delicate blend of traditional weaving techniques and modern style.'}
            </p>
            
            <div className="product-checkout">
              <h3 className="price-tag" data-vi="Giá: 480.000 VNĐ" data-en="Price: $18.90">
                {lang === 'vi' ? 'Giá: 480.000 VNĐ' : 'Price: $18.90'}
              </h3>
              <div className="stripe-checkout-wrapper">
                <a href="#" className="luxury-buy-btn" onClick={handleBuyNow} data-vi="Mua Ngay - 480.000 VNĐ" data-en="Buy Now - $18.90">
                  {lang === 'vi' ? 'Mua Ngay - 480.000 VNĐ' : 'Buy Now - $18.90'}
                </a>
                <div className="trust-badges">
                  <img src="https://icolor.vn/logo-visa/" alt="Visa" width="25" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" width="40" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" width="25" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div id="paypal-button-container-2" className="paypal-container"></div>
            </div>

            <div className="product-shipping-info">
              <div className="accordion-item shipping-accordion">
                <button className="accordion-header" onClick={toggleAccordion}>
                  <span data-vi="Vận chuyển & Chính sách" data-en="Shipping & Policy">
                    {lang === 'vi' ? 'Vận chuyển & Chính sách' : 'Shipping & Policy'}
                  </span>
                  <span className="accordion-icon">+</span>
                </button>
                <div className="accordion-content">
                  <div className="shipping-regions">
                    <p className="shipping-subtitle" data-vi="Dịch vụ giao hàng áp dụng cho các khu vực:" data-en="Our shipping service is available to the following regions:">
                      {lang === 'vi' ? 'Dịch vụ giao hàng áp dụng cho các khu vực:' : 'Our shipping service is available to the following regions:'}
                    </p>
                    <ul className="region-list">
                      <li>
                        <strong data-vi="Việt Nam:" data-en="Vietnam:">{lang === 'vi' ? 'Việt Nam:' : 'Vietnam:'}</strong>
                        <span data-vi="Miễn phí | 2-3 ngày làm việc" data-en="Free | 2-3 business days">{lang === 'vi' ? 'Miễn phí | 2-3 ngày làm việc' : 'Free | 2-3 business days'}</span>
                      </li>
                      <li>
                        <strong data-vi="Châu Á (Nhật Bản, Hàn Quốc, Singapore, Đài Loan...):" data-en="Asia (Japan, Korea, Singapore, Taiwan...):">
                          {lang === 'vi' ? 'Châu Á (Nhật Bản, Hàn Quốc, Singapore, Đài Loan...):' : 'Asia (Japan, Korea, Singapore, Taiwan...):'}
                        </strong>
                        <span data-vi="$5.00 | 5-7 ngày làm việc" data-en="$5.00 | 5-7 business days">{lang === 'vi' ? '$5.00 | 5-7 ngày làm việc' : '$5.00 | 5-7 business days'}</span>
                      </li>
                      <li>
                        <strong data-vi="Âu Mỹ (Mỹ, Anh, Pháp, Úc, Canada...):" data-en="EU & Americas (US, UK, France, Australia...):">
                          {lang === 'vi' ? 'Âu Mỹ (Mỹ, Anh, Pháp, Úc, Canada...):' : 'EU & Americas (US, UK, France, Australia...):'}
                        </strong>
                        <span data-vi="$12.00 | 7-14 ngày làm việc" data-en="$12.00 | 7-14 business days">{lang === 'vi' ? '$12.00 | 7-14 ngày làm việc' : '$12.00 | 7-14 business days'}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="shipping-policy-block">
                    <h4 data-vi="THÔNG TIN & CHÍNH SÁCH ĐẶT TRƯỚC" data-en="PRE-ORDER INFORMATION & POLICY">
                      {lang === 'vi' ? 'THÔNG TIN & CHÍNH SÁCH ĐẶT TRƯỚC' : 'PRE-ORDER INFORMATION & POLICY'}
                    </h4>
                    <p data-vi="Tại LỤA AN, chúng tôi mang đến cơ hội độc quyền để đặt trước những tác phẩm lụa chọn lọc trước khi chúng chính thức ra mắt. Bằng việc đặt trước, bạn đã giữ chỗ cho sản phẩm của mình, và đơn hàng sẽ được gửi đi ngay khi hoàn thiện." data-en="At LỤA AN, we offer our clientele the exclusive opportunity to pre-order select items before they are available for delivery. By placing a pre-order, you reserve the product, which will be shipped as soon as it becomes available.">
                      {lang === 'vi' ? 'Tại LỤA AN, chúng tôi mang đến cơ hội độc quyền để đặt trước những tác phẩm lụa chọn lọc trước khi chúng chính thức ra mắt. Bằng việc đặt trước, bạn đã giữ chỗ cho sản phẩm của mình, và đơn hàng sẽ được gửi đi ngay khi hoàn thiện.' : 'At LỤA AN, we offer our clientele the exclusive opportunity to pre-order select items before they are available for delivery. By placing a pre-order, you reserve the product, which will be shipped as soon as it becomes available.'}
                    </p>
                    <p data-vi="Xin lưu ý: Các sản phẩm lụa đặt trước không hỗ trợ hoàn tiền. Thời gian giao hàng có thể thay đổi tùy thuộc vào quá trình chế tác thủ công và quy trình vận chuyển." data-en="Please note that our pre-order products are non-refundable, and the delivery time may vary depending on product availability and artisanal crafting processes.">
                      {lang === 'vi' ? 'Xin lưu ý: Các sản phẩm lụa đặt trước không hỗ trợ hoàn tiền. Thời gian giao hàng có thể thay đổi tùy thuộc vào quá trình chế tác thủ công và quy trình vận chuyển.' : 'Please note that our pre-order products are non-refundable, and the delivery time may vary depending on product availability and artisanal crafting processes.'}
                    </p>
                    <p 
                      data-vi="Giá chưa bao gồm thuế nhập khẩu. Khách hàng chịu trách nhiệm thanh toán các khoản phí hải quan (nếu có) theo quy định của quốc gia sở tại." 
                      data-en="Taxes and duties are not included. Customers are responsible for any customs fees incurred upon delivery according to local regulations."
                      style={{ marginTop: '10px', fontStyle: 'italic', color: '#888' }}
                    >
                      {lang === 'vi' 
                        ? 'Giá chưa bao gồm thuế nhập khẩu. Khách hàng chịu trách nhiệm thanh toán các khoản phí hải quan (nếu có) theo quy định của quốc gia sở tại.' 
                        : 'Taxes and duties are not included. Customers are responsible for any customs fees incurred upon delivery according to local regulations.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="product-card">
            <div className="product-image-wrapper">
              <div className="product-image img-front" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/q_auto/f_auto/v1774408857/z7653013531182_3bba7b255581ce1669c7fd6b6b59c479_mtzpym.jpg')" }}></div>
            </div>
            <h3 className="product-title" data-vi="Khu Vườn Thiên Nhiên" data-en="Nature's Garden">
              {lang === 'vi' ? 'Khu Vườn Thiên Nhiên' : 'Nature\'s Garden'}
            </h3>
            <p className="product-description" data-vi="Cảm hứng từ sắc màu rực rỡ của cỏ cây hoa lá Việt Nam." data-en="Inspired by the vibrant colors of Vietnam's flora.">
              {lang === 'vi' ? 'Cảm hứng từ sắc màu rực rỡ của cỏ cây hoa lá Việt Nam.' : 'Inspired by the vibrant colors of Vietnam\'s flora.'}
            </p>
            
            <div className="product-checkout">
              <h3 className="price-tag" data-vi="Giá: 480.000 VNĐ" data-en="Price: $18.90">
                {lang === 'vi' ? 'Giá: 480.000 VNĐ' : 'Price: $18.90'}
              </h3>
              <div className="stripe-checkout-wrapper">
                <a href="#" className="luxury-buy-btn" onClick={handleBuyNow} data-vi="Mua Ngay - 480.000 VNĐ" data-en="Buy Now - $18.90">
                  {lang === 'vi' ? 'Mua Ngay - 480.000 VNĐ' : 'Buy Now - $18.90'}
                </a>
                <div className="trust-badges">
                  <img src="https://icolor.vn/logo-visa/" width="40" alt="Visa" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" width="40" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" width="25" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div id="paypal-button-container-3" className="paypal-container"></div>
            </div>

            <div className="product-shipping-info">
              <div className="accordion-item shipping-accordion">
                <button className="accordion-header" onClick={toggleAccordion}>
                  <span data-vi="Vận chuyển & Chính sách" data-en="Shipping & Policy">
                    {lang === 'vi' ? 'Vận chuyển & Chính sách' : 'Shipping & Policy'}
                  </span>
                  <span className="accordion-icon">+</span>
                </button>
                <div className="accordion-content">
                  <div className="shipping-regions">
                    <p className="shipping-subtitle" data-vi="Dịch vụ giao hàng áp dụng cho các khu vực:" data-en="Our shipping service is available to the following regions:">
                      {lang === 'vi' ? 'Dịch vụ giao hàng áp dụng cho các khu vực:' : 'Our shipping service is available to the following regions:'}
                    </p>
                    <ul className="region-list">
                      <li>
                        <strong data-vi="Việt Nam:" data-en="Vietnam:">{lang === 'vi' ? 'Việt Nam:' : 'Vietnam:'}</strong>
                        <span data-vi="Miễn phí | 2-3 ngày làm việc" data-en="Free | 2-3 business days">{lang === 'vi' ? 'Miễn phí | 2-3 ngày làm việc' : 'Free | 2-3 business days'}</span>
                      </li>
                      <li>
                        <strong data-vi="Châu Á (Nhật Bản, Hàn Quốc, Singapore, Đài Loan...):" data-en="Asia (Japan, Korea, Singapore, Taiwan...):">
                          {lang === 'vi' ? 'Châu Á (Nhật Bản, Hàn Quốc, Singapore, Đài Loan...):' : 'Asia (Japan, Korea, Singapore, Taiwan...):'}
                        </strong>
                        <span data-vi="$5.00 | 5-7 ngày làm việc" data-en="$5.00 | 5-7 business days">{lang === 'vi' ? '$5.00 | 5-7 ngày làm việc' : '$5.00 | 5-7 business days'}</span>
                      </li>
                      <li>
                        <strong data-vi="Âu Mỹ (Mỹ, Anh, Pháp, Úc, Canada...):" data-en="EU & Americas (US, UK, France, Australia...):">
                          {lang === 'vi' ? 'Âu Mỹ (Mỹ, Anh, Pháp, Úc, Canada...):' : 'EU & Americas (US, UK, France, Australia...):'}
                        </strong>
                        <span data-vi="$12.00 | 7-14 ngày làm việc" data-en="$12.00 | 7-14 business days">{lang === 'vi' ? '$12.00 | 7-14 ngày làm việc' : '$12.00 | 7-14 business days'}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="shipping-policy-block">
                    <h4 data-vi="THÔNG TIN & CHÍNH SÁCH ĐẶT TRƯỚC" data-en="PRE-ORDER INFORMATION & POLICY">
                      {lang === 'vi' ? 'THÔNG TIN & CHÍNH SÁCH ĐẶT TRƯỚC' : 'PRE-ORDER INFORMATION & POLICY'}
                    </h4>
                    <p data-vi="Tại LỤA AN..." data-en="At LỤA AN...">
                      {lang === 'vi' ? 'Tại LỤA AN, chúng tôi mang đến cơ hội độc quyền để đặt trước những tác phẩm lụa chọn lọc trước khi chúng chính thức ra mắt. Bằng việc đặt trước, bạn đã giữ chỗ cho sản phẩm của mình, và đơn hàng sẽ được gửi đi ngay khi hoàn thiện.' : 'At LỤA AN, we offer our clientele the exclusive opportunity to pre-order select items before they are available for delivery. By placing a pre-order, you reserve the product, which will be shipped as soon as it becomes available.'}
                    </p>
                    <p data-vi="Xin lưu ý..." data-en="Please note...">
                      {lang === 'vi' ? 'Xin lưu ý: Các sản phẩm lụa đặt trước không hỗ trợ hoàn tiền. Thời gian giao hàng có thể thay đổi tùy thuộc vào quá trình chế tác thủ công và quy trình vận chuyển.' : 'Please note that our pre-order products are non-refundable, and the delivery time may vary depending on product availability and artisanal crafting processes.'}
                    </p>
                    <p 
                      data-vi="Giá chưa bao gồm thuế nhập khẩu. Khách hàng chịu trách nhiệm thanh toán các khoản phí hải quan (nếu có) theo quy định của quốc gia sở tại." 
                      data-en="Taxes and duties are not included. Customers are responsible for any customs fees incurred upon delivery according to local regulations."
                      style={{ marginTop: '10px', fontStyle: 'italic', color: '#888' }}
                    >
                      {lang === 'vi' 
                        ? 'Giá chưa bao gồm thuế nhập khẩu. Khách hàng chịu trách nhiệm thanh toán các khoản phí hải quan (nếu có) theo quy định của quốc gia sở tại.' 
                        : 'Taxes and duties are not included. Customers are responsible for any customs fees incurred upon delivery according to local regulations.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook / Usage Section */}
      <section className="section-padding lookbook">
        <div className="section-heading-wrapper">
          <h2 data-vi="Muôn dáng vẻ của An" data-en="The Many Faces of An">
            {lang === 'vi' ? 'Muôn dáng vẻ của An' : 'The Many Faces of An'}
          </h2>
          <p className="section-subtitle" data-vi="Cách Lụa An biến tấu để đồng hành cùng mọi khoảnh khắc của bạn." data-en="How Lụa An transforms to accompany your every moment.">
            {lang === 'vi' ? 'Cách Lụa An biến tấu để đồng hành cùng mọi khoảnh khắc của bạn.' : 'How Lụa An transforms to accompany your every moment.'}
          </p>
        </div>
        <div className="lookbook-scroll">
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697907765_6f81453493ff7d910b7080cf69773a00_t2cviu.jpg" alt="Classic Elegance" />
            <div className="lookbook-caption">{lang === 'vi' ? 'Quàng cổ - Classic Elegance' : 'Neck Scarf - Classic Elegance'}</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697950306_88ce86dd0ad429e40242393584fd5348_tdilji.jpg" alt="Modern Chic" />
            <div className="lookbook-caption">{lang === 'vi' ? 'Buộc túi xách - Modern Chic' : 'Bag Accessory - Modern Chic'}</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697907768_0056c13816675357872e36dea3b2f378_mppy1d.jpg" alt="Boho Style" />
            <div className="lookbook-caption">{lang === 'vi' ? 'Băng đô - Boho Style' : 'Headband - Boho Style'}</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697907764_917016a57d292e70ba34738c01cfa4a1_nli9a0.jpg" alt="Belt Accessory" />
            <div className="lookbook-caption">{lang === 'vi' ? 'Thắt lưng - Belt Accessory' : 'Waist Belt - Belt Accessory'}</div>
          </div>
          <div className="lookbook-item">
            <img src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/f_webp/cs_keep_cmyk/q_auto:best/dpr_auto/z7654697950332_952e0025882b23fcc2add7ff385989f7_ie6l10.jpg" alt="Hair Tie" />
            <div className="lookbook-caption">{lang === 'vi' ? 'Buộc tóc - Hair Tie' : 'Hair Tie - Hair Tie'}</div>
          </div>
        </div>
      </section>

      {/* Silk Benefits Section */}
      <section className="section-padding benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title" data-vi="Vì sao bạn chọn Lụa An ?" data-en="Why Choose Lụa An?">
            {lang === 'vi' ? 'Vì sao bạn chọn Lụa An ?' : 'Why Choose Lụa An?'}
          </h2>
          
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-header" onClick={toggleAccordion}>
                {lang === 'vi' ? 'Lụa Tơ Tằm Nguyên Chất 100%' : '100% Pure Mulberry Silk'}
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>
                  {lang === 'vi' ? 'Trải nghiệm sự mềm mại thượng hạng và độ bóng tự nhiên từ tơ tằm thủ công, không pha tạp sợi tổng hợp, an toàn tuyệt đối cho làn da.' : 'Experience premium softness and natural luster from handmade silk, free from synthetic fibers, absolutely safe for the skin.'}
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header" onClick={toggleAccordion}>
                {lang === 'vi' ? 'Tính năng chống dị ứng và kháng khuẩn' : 'Hypoallergenic & Antibacterial'}
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>
                  {lang === 'vi' ? 'Sợi tơ tằm tự nhiên không gây kích ứng và có tính kháng khuẩn nội tại, giúp giảm sự phát triển của vi khuẩn, nấm mốc.' : 'Natural silk fibers are non-irritating and have inherent antibacterial properties, helping to reduce the growth of bacteria and mold.'}
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header" onClick={toggleAccordion}>
                {lang === 'vi' ? 'Điều hòa nhiệt độ và thoáng khí' : 'Temperature Regulating & Breathable'}
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>
                  {lang === 'vi' ? 'Sợi tơ thông minh giúp cơ thể bạn \'thở\', giữ mát và thoáng khí vào mùa hè, đồng thời giữ ấm và ổn định thân nhiệt vào mùa đông.' : 'Smart silk fibers help your body \'breathe\', keeping you cool and breathable in summer, while keeping you warm and stabilizing body temperature in winter.'}
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header" onClick={toggleAccordion}>
                {lang === 'vi' ? 'Khả năng kháng bụi và bụi bẩn' : 'Dust & Dirt Resistance'}
                <span className="accordion-icon">+</span>
              </button>
              <div className="accordion-content">
                <p>
                  {lang === 'vi' ? 'Bề mặt lụa trơn nhẵn tự nhiên giúp hạn chế bám bụi bẩn và xơ vải, giữ cho chiếc khăn luôn sạch sẽ và tinh tươm.' : 'The naturally smooth silk surface helps limit the accumulation of dust and lint, keeping the scarf clean and fresh.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Instagram Feed Section */}
      <section className="section-padding instagram-feed">
        <div className="section-heading-wrapper">
          <h2 data-vi="LỤA AN TRÊN THẾ GIỚI" data-en="LỤA AN AROUND THE WORLD">
            {lang === 'vi' ? 'LỤA AN TRÊN THẾ GIỚI' : 'LỤA AN AROUND THE WORLD'}
          </h2>
          <p className="section-subtitle">@luaan.official</p>
        </div>
        <div className="ig-grid">
          {/* Tớ dùng tạm ảnh demo tỷ lệ 1:1, Vy có thể thay link ảnh thật của khách hàng sau */}
          <div className="ig-item" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/q_auto/f_auto/v1774407637/z7654697918540_f2aa364f528d3aadd93376ee6e3abeb8_lujjkf.jpg')" }}></div>
          <div className="ig-item" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/q_auto/f_auto/v1774407638/z7654697961113_53d8e05f8c73e939540313986e74e806_ipohai.jpg')" }}></div>
          <div className="ig-item" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/q_auto/f_auto/v1774407636/z7654697907748_cef2ad5ff932a4973f7cba2ca6cf7245_hgiokt.jpg')" }}></div>
          <div className="ig-item" style={{ backgroundImage: "url('https://res.cloudinary.com/dzxl07ftg/image/upload/q_auto/f_auto/v1774407638/z7654697927945_6bba0891e69d5d268df2f35c6cf4ffe1_nz8gri.jpg')" }}></div>
        </div>
      </section>

      {/* Footer */}
      <footer id="main-footer">
        <div className="footer-container section-padding">
          <div className="footer-brand">
            <img 
              src="https://res.cloudinary.com/dzxl07ftg/image/upload/b_rgb:FC41CB/b_rgb:D1D6E0/e_background_removal/ChatGPT_Image_09_53_35_25_thg_3_2026_ur7x2b.png" 
              className="footer-logo" 
              alt="Lụa An Logo" 
              referrerPolicy="no-referrer"
            />
            <p className="footer-tagline">{lang === 'vi' ? '"Mọi sợi tơ đều dệt nên một câu chuyện"' : '"Every thread weaves a story"'}</p>
          </div>

          <div className="footer-contact" id="contact-section">
            <h3>{lang === 'vi' ? 'LIÊN HỆ' : 'CONTACT'}</h3>
            <p>Hotline: 0911 316 968</p>
            <p>FAX: (0263) 3 863628</p>
            <p>Email: sales@luaan.com.vn </p>
          </div>

          <div className="footer-address">
            <h3>{lang === 'vi' ? 'ĐỊA CHỈ' : 'ADDRESS'}</h3>
            <p>{lang === 'vi' ? '56 Lý Thường Kiệt, P.1, Bảo Lộc, Lâm Đồng' : '56 Ly Thuong Kiet, Ward 1, Bao Loc, Lam Dong'}</p>
          </div>

          {/* Cột Social Media mới thêm */}
          <div className="footer-social">
            <h3>{lang === 'vi' ? 'KẾT NỐI' : 'FOLLOW US'}</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
