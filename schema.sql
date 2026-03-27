-- 1. สร้างตาราง (หากยังไม่มี)
CREATE TABLE IF NOT EXISTS attractions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    detail TEXT,
    coverimage VARCHAR(500),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    likes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. ล้างข้อมูลเก่าเพื่อให้ ID เริ่มใหม่ (ถ้าต้องการ)
TRUNCATE TABLE attractions;

-- 3. เพิ่มข้อมูล 5 สถานที่ท่องเที่ยวที่มีรายละเอียดครบถ้วน
INSERT INTO attractions (name, detail, coverimage, latitude, longitude, likes) VALUES 
('วัดพระแก้ว (Grand Palace)', 'วัดคู่บ้านคู่เมืองของไทยและเป็นที่ประดิษฐานพระพุทธมหามณีรัตนปฏิมากร หรือพระแก้วมรกต', 'https://images.unsplash.com/photo-1563227411-925769749176', 13.7515, 100.4927, 1500),
('วัดอรุณราชวราราม (Wat Arun)', 'พระปรางค์วัดอรุณที่ตั้งอยู่ริมแม่น้ำเจ้าพระยา เป็นหนึ่งในสัญลักษณ์การท่องเที่ยวที่สำคัญของไทย', 'https://images.unsplash.com/photo-1528181304800-2f140819898f', 13.7437, 100.4889, 980),
('อุทยานแห่งชาติเอราวัณ', 'น้ำตกเจ็ดชั้นที่มีน้ำใสสีฟ้าอมเขียว ตั้งอยู่ในจังหวัดกาญจนบุรี เป็นสวรรค์ของคนรักธรรมชาติ', 'https://images.unsplash.com/photo-1589394815804-964ed962eb33', 14.3686, 99.1437, 2100),
('ดอยอินทนนท์', 'ยอดเขาที่สูงที่สุดในประเทศไทย มีอากาศหนาวเย็นตลอดปี พร้อมชมเส้นทางศึกษาธรรมชาติกิ่วแม่ปาน', 'https://images.unsplash.com/photo-1580310614729-ccd696374e10', 18.5883, 98.4871, 3500),
('อ่าวไร่เลย์', 'ชายหาดที่เป็นที่รู้จักไปทั่วโลกในเรื่องหน้าผาหินปูนและการปีนผา ตั้งอยู่ในจังหวัดกระบี่', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a', 8.0119, 98.8367, 1200);