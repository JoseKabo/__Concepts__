import EmployeeModel from '../models/employee';

const EmployeeService = class {
    constructor() {
        this.EmployeeModel = new EmployeeModel();
    }

    get() {
        return this.EmployeeModel.find({});
    }
}

export default EmployeeService;