const mongoose = require( 'mongoose' );
if( process.env.NODE_ENV === 'production' )
{
  require( 'dotenv' ).load();
}

const mongoHOST = process.env.LOCALHOST || 'localhost';
mongoose.connect( `mongodb://${ mongoHOST }:27017/task-manager-api`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
} );