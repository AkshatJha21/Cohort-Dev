const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin31:adminpass31@cluster0.zkhqdtx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
console.log('Mongo DB connected successfully');
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}