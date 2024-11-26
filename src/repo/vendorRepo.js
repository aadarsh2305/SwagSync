const Vendor = require('../models/vendorModel');

const getAllVendors = async () => {
  return await Vendor.findAll();
};

const getVendorById = async (id) => {
  return await Vendor.findByPk(id);
};

const createVendor = async (vendorData) => {
  return await Vendor.create(vendorData);
};

const updateVendor = async (id, vendorData) => {
  const vendor = await Vendor.findByPk(id);
  if (vendor) {
    return await vendor.update(vendorData);
  }
  throw new Error('Vendor not found');
};

const deleteVendor = async (id) => {
  const vendor = await Vendor.findByPk(id);
  if (vendor) {
    await vendor.destroy();
    return;
  }
  throw new Error('Vendor not found');
};

module.exports = {
  getAllVendors,
  getVendorById,
  createVendor,
  updateVendor,
  deleteVendor,
};
