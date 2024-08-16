const Problem = require('../models/Problem');
const natural = require('natural');

const searchProblems = async (req, res) => {
    const { query } = req.body;
    
    // Fetch all problems from MongoDB
    const problems = await Problem.find();

    // Tokenize and calculate TF-IDF for each problem
    const tfidf = new natural.TfIdf();
    problems.forEach(problem => {
        tfidf.addDocument(problem.description);
    });

    // Find the most similar problem based on the user query
    const results = [];
    tfidf.tfidfs(query, function(i, measure) {
        results.push({ problem: problems[i], score: measure });
    });

    // Sort by relevance score
    results.sort((a, b) => b.score - a.score);

    res.json(results);
};

module.exports = { searchProblems };
