module.exports = { generate: () => { const error = new Error('Gone'); error.category = 'http'; error.statusCode = 410; return error; } };