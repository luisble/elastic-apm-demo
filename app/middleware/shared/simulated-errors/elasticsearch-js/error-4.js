module.exports = { generate: () => { const error = new Error('Unsupported role: "foo"'); error.category = 'elasticsearch-js'; error.statusCode = 500; return error; } };