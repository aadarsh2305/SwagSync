const vendorService = require('../services/vendorService');

const getAllVendors = async (req, res) => {
  const vendors = await vendorService.getAllVendors();
  res.json(vendors);
};

const getVendorById = async (req, res) => {
  const vendor = await vendorService.getVendorById(req.params.id);
  if (vendor) {
    res.json(vendor);
  } else {
    res.status(404).send('Vendor not found');
  }
};

const createVendor = async (req, res) => {
  const newVendor = await vendorService.createVendor(req.body);
  res.status(201).json(newVendor);
};

const updateVendor = async (req, res) => {
  try {
    const updatedVendor = await vendorService.updateVendor(req.params.id, req.body);
    res.json(updatedVendor);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const deleteVendor = async (req, res) => {
  try {
    await vendorService.deleteVendor(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = {
  getAllVendors,
  getVendorById,
  createVendor,
  updateVendor,
  deleteVendor,
};
