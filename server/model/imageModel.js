import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  images: {
    type: [],
  },
});

const imageModel = mongoose.model("images", imageSchema);

export default imageModel;
