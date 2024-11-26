const vendorRepo = require('../repo/vendorRepo');

const getAllVendors = async () => {
  return await vendorRepo.getAllVendors();
};

const getVendorById = async (id) => {
  return await vendorRepo.getVendorById(id);
};

const createVendor = async (vendorData) => {
  return await vendorRepo.createVendor(vendorData);
};

const updateVendor = async (id, vendorData) => {
  return await vendorRepo.updateVendor(id, vendorData);
};

const deleteVendor = async (id) => {
  return await vendorRepo.deleteVendor(id);
};

module.exports = {
  getAllVendors,
  getVendorById,
  createVendor,
  updateVendor,
  deleteVendor,
};
