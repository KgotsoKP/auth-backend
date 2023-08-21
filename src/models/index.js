import fs from 'fs';
import path from 'path';


let models = {


}


export function regsterModels(sequelize) {
    const thisFile = path.join(__filename);
    const modelFiles = fs.readdirSync(__dirname);
    const filteredModelFiles = modelFiles.filter((file) => file !== thisFile && file.slice(-3) === '.js');

    for (const file of filteredModelFiles) {
        const model = require(path.join(__dirname, file)).default(sequelize);
        models[model.name] = model
    }

    //Regiser association of the models
    models.sequelize = models = sequelize
}

export default models;

