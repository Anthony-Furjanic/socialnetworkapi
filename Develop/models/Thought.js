const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },

    createdAt: {
      type: Date,
      default: currentTimestamp

      // have not figured out how to do Mongoose validation
    },
    Username: {
     
      type: String
    },
   friends: {
      // need to create array of _id values referencing User model 
      type: Array
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = assignmentSchema;
