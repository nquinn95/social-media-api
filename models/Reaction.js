const Schema = require("mongoose");

const reactSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
        },


        reactionBody: {
            type: String, 
            required: true,
            maximumLength: 280
        },

        userName: {
            type: String,
            required: true
        },

        createdAt:{
            type: Date,
            
        }

    }
)

module.exports = reactSchema;