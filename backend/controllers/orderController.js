import { db } from '../db.js';

export const getOrders = (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
