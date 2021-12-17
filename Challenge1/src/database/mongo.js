import { connect } from 'mongoose';
import config from 'config';

const mongoURL = config.get('mongo.url');

const MongoConnection = async() => {
    try {
        await connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Success connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error db connection');
    }
}

export default MongoConnection;