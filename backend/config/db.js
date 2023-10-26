const mongoose = require('mongoose')


const connectDB = async () => {
    await mongoose.connect("mongodb+srv://6331501095:1234@mymongodb.03woxvz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));
}

module.exports = connectDB