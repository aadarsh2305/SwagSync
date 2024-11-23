// tests/userController.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const userController = require('../src/controllers/userController');
const User = require('../src/models/User'); // Sequelize model

describe('User Controller - getAllUsers', () => {
  it('should return a list of users', async () => {
    // Mock data 
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
      { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', age: 25 },
    ];

    // Stub the Sequelize `findAll` method
    const findAllStub = sinon.stub(User, 'findAll').resolves(mockUsers);

    // Mock req and res
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    // Call the controller
    await userController.getAllUsers(req, res);

    // Assertions
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mockUsers)).to.be.true;

    // Restore the stub
    findAllStub.restore();
  });
});
