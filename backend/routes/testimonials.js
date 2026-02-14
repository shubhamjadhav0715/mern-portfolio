const express = require('express');
const router = express.Router();
const {
  getTestimonials,
  submitTestimonial,
  getAllTestimonials,
  approveTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialController');

// Public routes
router.get('/', getTestimonials);
router.post('/', submitTestimonial);

// Admin routes (add authentication middleware later)
router.get('/all', getAllTestimonials);
router.put('/:id/approve', approveTestimonial);
router.delete('/:id', deleteTestimonial);

module.exports = router;
