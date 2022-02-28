import mongoose from "mongoose";

//creating video model
//Schema를 사용하여 데이터베이스의 구조와 제약조건을 설정
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 80 },
  //=={type: String}
  description: { type: String, required: true, trim: true, minlength: 20 },
  //default값을 설정함으로서 매번 모델작성시에 상세부분까지 입력하지않아도 됨.
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});
//model 생성
const Video = mongoose.model("Video", videoSchema);
export default Video;
