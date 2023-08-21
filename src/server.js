import './config'
import Database from './db'
import environment from './config/environment';
import dbConfig from './config/db';

(async () => {
    try {
        //Conect to the database
        const db = new Database(environment.nodeEnv, dbConfig);
        await db.connect();
    } catch (err) {
        console.error('Something went wrong when initalizing the app:\n', err.stack);
    }
})();