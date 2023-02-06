const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    userName: {
      type: String,
      required: true,
      Unique: true,
      // default: Trimmed,
    },
    email: {
      type: String,
      required: true,
      Unique: true,
      // have not figured out how to do Mongoose validation
    },
    thoughts: {
      // need to create array of _id values 
      type: Array
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
