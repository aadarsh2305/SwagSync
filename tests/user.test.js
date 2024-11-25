const request = require('supertest');
const app = require('../src/index');
const sequelize = require('../src/utils/db');

const newUser = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30,
  isActive: true,
};

describe('User API Tests', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  // Test GET /api/users
  it('should retrieve an empty list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  // Test POST /api/users
  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(newUser.name);
  });

  // Test GET /api/users/:id
  it('should retrieve a user by ID', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(newUser.name);
  });

  // Test PUT /api/users/:id
  it('should update a user by ID', async () => {
    const updatedUser = { ...newUser, name: 'Jane Doe' };
    const res = await request(app).put('/api/users/1').send(updatedUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Jane Doe');
  });

  // Test DELETE /api/users/:id
  it('should delete a user by ID', async () => {
    const res = await request(app).delete('/api/users/1');
    expect(res.statusCode).toBe(204);
  });

  // Verify that user list is empty
  it('should return an empty list after deletion', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});
