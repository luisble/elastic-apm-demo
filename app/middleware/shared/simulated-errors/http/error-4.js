module.exports = { generate: () => { const error = new Error('Not Found'); error.category = 'http'; error.statusCode = 404; return error; } };