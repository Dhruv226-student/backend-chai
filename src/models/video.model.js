import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      require: true,
    },
thumbnail: {
        type: String,
        require: true,
      },
      title: {
        type: String,
        require: true,
      },
      discription: {
        type: String,
        require: true,
      },
      videoFile: {
        type: String,
        require: true,
      },
      duration:{
        type:Number,
        required:true,
      },
      views: {
        type: Number,
        default :0,
      },
      isPublished:{
        type:Number,
        default:true
      },
      owner: {
        type: Schema.Types.ObjectId,
        require: true,
      },

  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("video", videoSchema);
