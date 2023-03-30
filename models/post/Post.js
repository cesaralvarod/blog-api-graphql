const { Schema, model } = require('mongoose')

const postSchema = new Schema(
  {
    authorId: { type: Schema.Types.ObjectId, required: true },
    title: {
      type: String,
      required: true,
      min: 20,
    },
    body: {
      type: String,
      required: true,
      min: 30,
    },
    description: {
      type: String,
      required: false,
      min: 30,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = model('Post', postSchema)
