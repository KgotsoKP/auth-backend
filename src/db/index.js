import { Sequelize } from "sequelize";

class Database{
    constructor(environment, dbConfig) {
        this.environment = environment;
        this.dbConfig = dbConfig;
        this.isTestEnvironment = this.environment === "test";
    }

    getConnectionString() {
        const { username, password, host, port, database } = this.dbConfig[this.environment];
        return `postgress://${username}:{password}@${host}:${port}/${database}`;
    }

    async connect() {
        //Get the connection string
        const uri = this.getConnectionString();

        //Create the connection
        this.connection = new Sequelize(uri, {
            logging: [this.isTestEnvironment ? false : console.log]
        })

        //check if we are connected
        await this.connection.authenticate({ logging: false });

        if (!this.isTestEnvironment) {
            console.log('Connection has been established successfully');
        }

        //Regsister the models

        //Sync the models
        await this.sync();
    }

    async sync() {
        await this.connection.sync({
            force: this.isTestEnvironment,
            logging: false,
        });

        if (!this.isTestEnvironment) {
            console.log('Models Syconized sucessfully')
        }
    }

    async disconnect() {
        await this.connection.close();
    }
}

export default Database;