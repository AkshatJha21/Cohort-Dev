const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    });
    
    res.json({
        message: "User created successfully"
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    });

    if (user) {
        const token = jwt.sign({
            username,
            password
        }, JWT_SECRET);
    
        res.json({
            token
        });
    } else {
        res.json({
            message: "Incorrect credentials"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const password = req.password;
    const courseId = req.params.courseId;
    // console.log(username);
    
    try {
        await User.updateOne({
            username,
            password
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
    } catch (error) {
        console.log(error);
    }

    res.json({
        message: "Course purchased succesfully"
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username,
        password: req.password,
    })

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    });
});

module.exports = router