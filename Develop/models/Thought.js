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
      type: String,
      Required:true,
    },
   reactions: { 
      type: Array
      // still working to figure out how to create Array of nested documents created with the reactionSchema
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
