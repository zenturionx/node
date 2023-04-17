import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

export default dbConnection;