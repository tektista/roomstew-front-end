const { Buffer } = require("buffer");
// import imageType from "image-type";

const convertPhotoListForFrontEnd = (photoObjList, photoType) => {
  // determine the image type and send this back to the front end
  console.log("here");
  console.log(photoObjList);

  function getImageType(base64String) {
    const buffer = Buffer.from(base64String, "base64");

    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      return "jpeg";
    } else if (
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47 &&
      buffer[4] === 0x0d &&
      buffer[5] === 0x0a &&
      buffer[6] === 0x1a &&
      buffer[7] === 0x0a
    ) {
      return "png";
    } else {
      return null;
    }
  }

  const photoObjListWithDataUrls = photoObjList.map((unconvertedPhotoObj) => {
    const imageType = getImageType(unconvertedPhotoObj[photoType]);
    const base64Data = unconvertedPhotoObj[photoType];
    const dataUrl = `data:image/${imageType};base64,${base64Data}`;
    return {
      type: imageType,
      dataUrl: dataUrl,
    };
  });

  return photoObjListWithDataUrls;
};

module.exports = convertPhotoListForFrontEnd;
