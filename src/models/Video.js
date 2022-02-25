import mongoose from "mongoose";

//creating video model
//Schema를 사용하여 데이터베이스의 구조와 제약조건을 설정
const videoSchema = new mongoose.Schema({
  title: String,
  //=={type: String}
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

//model 생성
const Video = mongoose.model("Video", videoSchema);
export default Video;
