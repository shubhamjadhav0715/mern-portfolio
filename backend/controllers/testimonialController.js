const Testimonial = require('../models/Testimonial');

// @desc    Get all approved testimonials
// @route   GET /api/testimonials
// @access  Public
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isApproved: true })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonials',
      error: error.message
    });
  }
};

// @desc    Submit a new testimonial
// @route   POST /api/testimonials
// @access  Public
exports.submitTestimonial = async (req, res) => {
  try {
    const { name, role, company, message, rating, image } = req.body;

    // Validation
    if (!name || !role || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, role, and message'
      });
    }

    const testimonial = await Testimonial.create({
      name,
      role,
      company,
      message,
      rating: rating || 5,
      image: image || '',
      isApproved: false // Requires manual approval
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for your testimonial! It will be reviewed and published soon.',
      data: testimonial
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit testimonial',
      error: error.message
    });
  }
};

// @desc    Get all testimonials (including unapproved) - Admin only
// @route   GET /api/testimonials/all
// @access  Private
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonials',
      error: error.message
    });
  }
};

// @desc    Approve a testimonial - Admin only
// @route   PUT /api/testimonials/:id/approve
// @access  Private
exports.approveTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Testimonial approved successfully',
      data: testimonial
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to approve testimonial',
      error: error.message
    });
  }
};

// @desc    Delete a testimonial - Admin only
// @route   DELETE /api/testimonials/:id
// @access  Private
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete testimonial',
      error: error.message
    });
  }
};
