const {Schema, model } = require("mongoose");

const thoughtsSchema = new Schema(
    {
   thoughtText:  {
        type: String,
        required: true,
        maxLength: 280,

    },

    createdAt: {
        type: Date
    },

    username: {
        type: String,
        required: true
    },

    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Reaction"
        }
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },

 

)

const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts; 