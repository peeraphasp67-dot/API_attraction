const express = require('express');
const router = express.Router();
const db = require('../db');

// 1. GET ALL - ดึงข้อมูลทั้งหมด 5+ แห่ง
router.get('/', (req, res) => {
    db.query('SELECT * FROM attractions ORDER BY likes DESC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// 2. GET BY ID - ดึงข้อมูลรายสถานที่
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM attractions WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Location not found' });
        res.status(200).json(results[0]);
    });
});

// 3. POST - เพิ่มสถานที่ใหม่
router.post('/', (req, res) => {
    const { name, detail, coverimage, latitude, longitude } = req.body;
    const sql = 'INSERT INTO attractions (name, detail, coverimage, latitude, longitude) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, detail, coverimage, latitude, longitude], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, message: 'Attraction created!' });
    });
});

// 4. PUT - อัปเดตข้อมูล
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, detail, coverimage, latitude, longitude } = req.body;
    const sql = 'UPDATE attractions SET name=?, detail=?, coverimage=?, latitude=?, longitude=? WHERE id=?';
    db.query(sql, [name, detail, coverimage, latitude, longitude, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Updated successfully' });
    });
});

// 5. DELETE - ลบข้อมูล
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM attractions WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Deleted successfully' });
    });
});

module.exports = router;