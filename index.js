const ThumbnailGenerator = require("video-thumbnail-generator").default;
const getDimensions = require("get-video-dimensions");

const sourcePath = "./assets/BigBuckBunnyShort.mp4";

const dimensions = async () => {
    return await getDimensions(sourcePath);
};

const generateThumb = async () => {
    const d = await dimensions();

    const tg = new ThumbnailGenerator({
        sourcePath: sourcePath,
        thumbnailPath: "./output/",
        tmpDir: "./tmp/",
        size: `${d.width}x${d.height}`,
    });

    // tg.generate().then(console.log); // ! create 10 images

    tg.generateOneByPercent(90).then(console.log); // ! create a image
};

generateThumb();
