// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Registrasi
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router; 



// Daftar produk
router.get('/products', (req, res) => {
    const products = ['Baju', 'Jaket', 'Sepatu', 'Tas'];
    res.json(products);
  });
  
  // Daftar harga
  router.get('/prices', (req, res) => {
    const prices = {
      reguler: { Baju: 20000, Jaket: 30000, Sepatu: 40000, Tas: 25000 },
      ekspress: { Baju: 30000, Jaket: 40000, Sepatu: 50000, Tas: 35000 },
    };
    res.json(prices);
  });
  
