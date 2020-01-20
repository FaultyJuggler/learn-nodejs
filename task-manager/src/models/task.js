const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
    validate(value)
    {
      if( value )
      {
        throw new Error('New tasks must be incomplete');
      }
    }
  },
  userid: {
    type: String,
  },
})

taskSchema.pre('save', async function(next)
{
  const user = this;
  if (user.isModified('status'))
  {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;