module.exports = { generate: () => { const error = new Error('Proxy Authentication Required'); error.category = 'http'; error.statusCode = 407; return error; } };