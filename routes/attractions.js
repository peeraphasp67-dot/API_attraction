const express = require('express');
const router = express.Router();
const db = require('../db');

// ดึงข้อมูลสนามฟุตบอลทั้งหมด
router.get('/', (req, res) => {
    // แก้ไข Query ให้ตรงกับตารางใหม่
    const sql = "SELECT id, name, detail, coverimage, location, rating FROM attractions";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// ดึงข้อมูลสนามฟุตบอลตาม ID (เผื่อใช้ทำหน้า Detail)
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM attractions WHERE id = ?";
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
});

module.exports = router;