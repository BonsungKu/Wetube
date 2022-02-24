import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();
//>> \d는 숫자만 선택하는 regular expression. d는 digit의 약자.
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
//위 문은 get과 post를 handler로 붙임으로서 한문장으로 쓴것. 원래는 videoRouter.get, .post
/*
:는 express에게 변수라고 알려주기위함
url에 변수를 넣을 수가 있게됨.
*/
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
