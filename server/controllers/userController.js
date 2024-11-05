import imageModel from "../model/imageModel.js";

export const imageUpload = async (req, res) => {
  try {
    console.log(req.files);
    const files = req.files.length > 0 && req.files;
    let data = [];
    for (let image of files) {
      data.push(image["filename"]);
    }
    console.log(data);

    await imageModel.create({
      images: data,
    });
    console.log("done");
    
  } catch (error) {
    console.log(error);
  }
};
