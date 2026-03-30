CREATE DATABASE IF NOT EXISTS attraction_db; [cite: 105]
USE attraction_db; [cite: 109]

CREATE TABLE attractions ( [cite: 113]
    id INT AUTO_INCREMENT PRIMARY KEY, [cite: 115]
    name VARCHAR(255) NOT NULL, [cite: 118]
    detail TEXT, [cite: 121]
    coverimage VARCHAR(580), [cite: 123]
    location VARCHAR(255), -- ปรับจากเดิมให้ตรงกับข้อมูลใหม่
    rating DECIMAL(2,1),   -- เพิ่มสำหรับเก็บคะแนน 4.9, 4.8
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP [cite: 133]
);