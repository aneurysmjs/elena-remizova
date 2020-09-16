export interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * @see https://stackoverflow.com/questions/623172/how-to-get-image-size-height-width-using-javascript
 * @param {string} file
 */
// helper to get dimensions of an image
function imageDimensions(file: string): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // the following handler will fire after the successful loading of the image
    img.onload = () => {
      const { naturalWidth: width, naturalHeight: height } = img;
      resolve({ width, height });
    };

    // and this handler will fire if there was an error with the image (like if it's not really an image or a corrupted one)
    img.onerror = () => {
      reject(new Error('There was some problem with the image.'));
    };

    img.src = file.includes('http') ? URL.createObjectURL(file) : file;
  });
}

export default imageDimensions;
