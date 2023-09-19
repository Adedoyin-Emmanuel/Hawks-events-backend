const cloudinary = require('cloudinary');
const constants = require('./constants');

cloudinary.v2.config({
  cloud_name: constants.CLOUDINARY.NAME,
  api_key: constants.CLOUDINARY.API_KEY,
  api_secret: constants.CLOUDINARY.SECRET_KEY,
});

const uploadSingleFile = async (
  filePath,
  section = 'IMAGE',
  resourceType = 'auto',
) => {
  const result = await cloudinary.v2.uploader.upload(filePath, {
    folder: `EVENT/${section}`,
    resourceType: `${resourceType}`,
  });
  return result;
};

const deleteFromCloud = async (publicId, resourceType) => {
  const result = await cloudinary.v2.uploader.destroy(publicId, {
    resource_type: `${resourceType}`,
  });
  return result;
};

const deleteMultiple = async (publicIds, resourceType) => {
  const result = await cloudinary.v2.api.delete_resources(publicIds, {
    resource_type: `${resourceType}`,
  });
  return result;
};

module.exports = { uploadSingleFile, deleteFromCloud, deleteMultiple };
