const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: String,
    description: String,
    difficulty: String,
    tags: [String]
});

module.exports = mongoose.model('Problem', ProblemSchema);
