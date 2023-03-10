//user controller
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');


// register user
const registerUser = asyncHandler(async (req, res) => {
    const
        { companyName, Founder, email, password, phone, address, ICE } = req.body;
    if
        (
        !companyName ||
        !Founder ||
        !email ||
        !password ||
        !phone ||
        !address ||
        !ICE
    ) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    //check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
        companyName,
        Founder,
        email,
        password: hashedPassword,
        phone,
        address,
        ICE,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            companyName: user.companyName,
            Founder: user.Founder,
            email: user.email,
            phone: user.phone,
            address: user.address,
            ICE: user.ICE,
            token: generateToken(user._id),
            message: "User created successfully"
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


//login user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400);
        throw new Error('Password is incorrect');
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            companyName: user.companyName,
            Founder: user.Founder,
            email: user.email,
            phone: user.phone,
            address: user.address,
            ICE: user.ICE,
            token: generateToken(user._id),
            message: "User logged in successfully"
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//get user by id
const getUserById = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

//get all users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
}
);

//generat jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}

module.exports = { registerUser, loginUser, getUserById, getAllUsers };