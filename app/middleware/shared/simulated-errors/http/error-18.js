module.exports = { generate: () => { const error = new Error('Misdirected Request'); error.category = 'http'; error.statusCode = 421; return error; } };