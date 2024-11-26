const vendorService = require('../../src/services/vendorService');
const vendorRepository = require('../../src/repo/vendorRepo');

jest.mock('../../src/repositories/vendorRepository');

describe('Vendor Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should retrieve all vendors', async () => {
    const mockVendors = [{ id: 1, vnname_vendor_name: 'Vendor 1' }];
    vendorRepository.findAll.mockResolvedValue(mockVendors);

    const result = await vendorService.getAllVendors();

    expect(vendorRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockVendors);
  });

  test('should create a new vendor', async () => {
    const mockVendor = { id: 1, vnname_vendor_name: 'Vendor 1' };
    vendorRepository.create.mockResolvedValue(mockVendor);

    const result = await vendorService.createVendor({ vnname_vendor_name: 'Vendor 1' });

    expect(vendorRepository.create).toHaveBeenCalledWith({ vnname_vendor_name: 'Vendor 1' });
    expect(result).toEqual(mockVendor);
  });

  test('should throw an error when repository fails', async () => {
    const errorMessage = 'Database error';
    vendorRepository.create.mockRejectedValue(new Error(errorMessage));

    await expect(vendorService.createVendor({ vnname_vendor_name: 'Vendor 1' })).rejects.toThrow(
      errorMessage
    );
  });
});
