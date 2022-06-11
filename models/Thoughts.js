const {Schema, model } = require("mongoose");

const thoughtsSchema = new Schema(
    {
   thoughtText:  {
        type: String,
        required: true,
        maxLength: 20,

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
    ]
 

})

const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts; 