module.exports = { generate: () => { const error = new Error('You called `mongoose.Document()` without a schema.'); error.category = 'mongoose'; error.statusCode = 500; return error; } };