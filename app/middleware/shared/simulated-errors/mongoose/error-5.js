module.exports = { generate: () => { const error = new Error('The document you tried to `save()` was not found.'); error.category = 'mongoose'; error.statusCode = 500; return error; } };