const mongoose = require( 'mongoose' );

// mongoose.connect('mongodb://host.docker.internal:27017/task-manager-api',{
mongoose.connect( 'mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
} );