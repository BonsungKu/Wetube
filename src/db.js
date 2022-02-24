import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");
//mongodb에 데이터베이스 작성법. url/ 뒤에 데이터베이스 이름 작성.
//mongoose가 wetube라는 mongodb database로 연결

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
//on과 once의 차이는 on은 계속해서 발생시킬수 있음. once는 한번만 발생
