import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      maxlength: [100, 'Title cannot exceed 100 chars'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description cannot exceed 500 chars']
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
      trim: true
    },
    dateTime: {
      type: Date,
      required: [true, 'Please add date and time'],
      validate: {
        validator: function(value) {
          return value > Date.now();
        },
        message: 'Activity date must be in the future'
      }
    },
    capacity: {
      type: Number,
      min: [1, 'Capacity must be at least 1'],
      default: 20
    }
  },
  {
    timestamps: true
  }
);


export const Activity = mongoose.model('Activity', ActivitySchema);