const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size')
const { createCanvas, loadImage, registerFont } = require('canvas')

async function watermarkImages() {
  const sourceImagePath = './sourceImage';
  const image = fs.readdirSync(sourceImagePath).toString();
  const sourceImage = path.join(sourceImagePath, image);
  const sourceImageWidth = sizeOf(sourceImage).width;
  const sourceImageHeight = sizeOf(sourceImage).height;
  const outputImagesPath = './watermarkedImages';
  const watermarkInfos =
    fs
      .readFileSync('watermarkInfos.txt')
      .toString()
      .split("\n")
      .map(line => line.trim());

  const mimeType = 'image/png';
  const fileExtension = mimeType.split('/')[1];
  console.log(fileExtension)

  for (const info of watermarkInfos) {
    try {
      const outputImage = await loadImage(sourceImage);
      const canvas = createCanvas(sourceImageWidth, sourceImageHeight);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(outputImage, 0, 0, sourceImageWidth, sourceImageHeight);
      ctx.font = "18px 'Verdana'";
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.textAlign = 'center';
      ctx.fillText(info, (sourceImageWidth * 0.5), (sourceImageHeight * 0.5));
      const buffer = canvas.toBuffer(mimeType);
      const outputImagePath = path.join(outputImagesPath, `${info}.${fileExtension}`);
      console.log(outputImagePath)
      fs.writeFileSync(outputImagePath, buffer)
    }
    catch (err) {
      console.log(err)
    }
  }
}

watermarkImages()