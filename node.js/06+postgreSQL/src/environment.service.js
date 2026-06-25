const repository = require('./environment.repository');

class Service {
    getAllEnvironment = async () => {
        const data = await repository.getAllEnvironmentDB();
        return data;
    }

    getEnvironmentById = async (id) => {
        const data = await repository.getEnvironmentByIdDB(id);
        return data;
    }

    createEnvironment = async (label, category, priority) => {
        const data = await repository.createEnvironmentDB(label, category, priority);
        return data;
    }

    updateEnvironment = async (id, label, category, priority) => {
        const data = await repository.updateEnvironmentDB(id, label, category, priority);
        return data;
    }

    deleteEnvironment = async (id) => {
        const data = await repository.deleteEnvironmentDB(id);
        return data;
    }
}

const service = new Service();
module.exports = service;