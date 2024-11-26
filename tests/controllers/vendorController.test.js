const vendorController = require('../../src/controllers/vendorController');
const vendorService = require('../../src/services/vendorService');

jest.mock('../../src/services/vendorService');

describe('Vendor Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should retrieve all vendors', async () => {
    const mockVendors = [{ id: 1, vnname_vendor_name: 'Vendor 1' }];
    vendorService.getAllVendors.mockResolvedValue(mockVendors);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await vendorController.getAllVendors(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockVendors);
  });

  test('should create a new vendor', async () => {
    const mockVendor = { id: 1, vnname_vendor_name: 'Vendor 1' };
    vendorService.createVendor.mockResolvedValue(mockVendor);

    const req = { body: { vnname_vendor_name: 'Vendor 1' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await vendorController.createVendor(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockVendor);
  });

  test('should handle errors from service layer', async () => {
    const errorMessage = 'Error creating vendor';
    vendorService.createVendor.mockRejectedValue(new Error(errorMessage));

    const req = { body: { vnname_vendor_name: 'Vendor 1' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await vendorController.createVendor(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});
