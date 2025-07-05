const mongoose = require('mongoose');
const User = require('../models/User');
const Product = require('../models/Product');
const Course = require('../models/Course');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mandala-business');

    // Create admin user
    const adminExists = await User.findOne({ username: 'admin' });
    if (!adminExists) {
      const admin = new User({
        username: 'admin',
        email: 'admin@handmadebyshweta.com',
        password: 'admin123',
        role: 'admin'
      });
      await admin.save();
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }

    // Seed sample products
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      const sampleProducts = [
        {
          name: 'Celestial Harmony',
          price: 2500,
          image: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          description: 'Intricate celestial mandala with cosmic patterns',
          size: 'A3',
          medium: 'Watercolor',
          availability: true
        },
        {
          name: 'Ocean Dreams',
          price: 3200,
          image: 'https://images.pexels.com/photos/1020316/pexels-photo-1020316.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          description: 'Flowing mandala inspired by ocean waves',
          size: 'A2',
          medium: 'Acrylic',
          availability: true
        },
        {
          name: 'Sacred Geometry',
          price: 1800,
          image: 'https://images.pexels.com/photos/1020317/pexels-photo-1020317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          description: 'Perfect geometric patterns in sacred symmetry',
          size: 'A4',
          medium: 'Ink',
          availability: false
        }
      ];

      await Product.insertMany(sampleProducts);
      console.log('Sample products created successfully');
    }

    // Seed sample courses
    const courseCount = await Course.countDocuments();
    if (courseCount === 0) {
      const sampleCourses = [
        {
          title: "Mandala Beginner's Module",
          subtitle: "Foundations and fundamentals",
          duration: "4 weeks",
          price: "₹2,999",
          description: "Perfect for absolute beginners. Learn the basic principles, tools, and techniques to create your first beautiful mandala.",
          features: [
            "Introduction to mandala history and significance",
            "Basic geometric patterns and symmetry",
            "Essential tools and materials",
            "Step-by-step guided practice",
            "Personal feedback and guidance"
          ],
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Mandala Intermediate Module",
          subtitle: "Building skills and confidence",
          duration: "6 weeks",
          price: "₹4,999",
          description: "Take your skills to the next level with complex patterns, color theory, and advanced techniques.",
          features: [
            "Advanced geometric constructions",
            "Color theory and harmony",
            "Texture and shading techniques",
            "Personal style development",
            "Portfolio building guidance"
          ],
          color: "from-purple-500 to-pink-500"
        }
      ];

      await Course.insertMany(sampleCourses);
      console.log('Sample courses created successfully');
    }

    console.log('Database seeding completed');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

createAdmin();