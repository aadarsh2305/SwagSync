const vendorRepository = require('../../src/repo/vendorRepo');
const db = require('../../src/utils/db');

jest.mock('../../src/utils/db', () => ({
  Vendor: {
    findAll: jest.fn(),
    create: jest.fn(),
  },
}));

describe('Vendor Repository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should retrieve all vendors', async () => {
    const mockVendors = [{ id: 1, vnname_vendor_name: 'Vendor 1' }];
    db.Vendor.findAll.mockResolvedValue(mockVendors);

    const result = await vendorRepository.findAll();

    expect(db.Vendor.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockVendors);
  });

  test('should create a new vendor', async () => {
    const mockVendor = { id: 1, vnname_vendor_name: 'Vendor 1' };
    db.Vendor.create.mockResolvedValue(mockVendor);

    const result = await vendorRepository.create({ vnname_vendor_name: 'Vendor 1' });

    expect(db.Vendor.create).toHaveBeenCalledWith({ vnname_vendor_name: 'Vendor 1' });
    expect(result).toEqual(mockVendor);
  });

  test('should throw an error when database operation fails', async () => {
    const errorMessage = 'Database error';
    db.Vendor.create.mockRejectedValue(new Error(errorMessage));

    await expect(vendorRepository.create({ vnname_vendor_name: 'Vendor 1' })).rejects.toThrow(
      errorMessage
    );
  });
});
