const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    location: String,
    linkedin: String,
    skills: [String],
    education: [{
        degree: String,
        institution: String,
        year: String,
        cgpa: String
    }],
    internships: [{
        company: String,
        role: String,
        duration: String,
        skills: [String],
        description: String
    }],
    projects: [{
        title: String,
        link: String,
        description: String
    }],
    personalDetails: {
        gender: String,
        maritalStatus: String,
        dob: String,
        address: String,
        languages: [String]
    }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
