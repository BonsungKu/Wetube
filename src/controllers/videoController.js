import Video from "../models/Video";

export const home = async (req, res) => {
  /*
  {}==search terms, 비어있으면 모든형식을 찾음.
  video.find 안에 res.render를 넣어줌으로서 DB를 먼저 검색 후 render를 하게 됨.
  res.render가 video.find밖에 있는 경우는 비동기처리(Asynchronous)가 되어 특정 코드가
  끝날때까지 코드의 실행을 멈추지않고, 다음 코드를 먼저 실행하므로, res.render가 먼저 출력되게 된다.
  Video.find({}, (error, videos) => {});
 
  **Async & Await.. await를 붙이면 자스는 계속 기다림. 
  조건: await는 함수안에서 쓰여야함. 그리고 async와 함께 쓰이므로 함수앞에 async붙여줌.
  */

  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos: [] });
  //send to base.pug #{pageTitle} and render Home.pug
};

export const watch = (req, res) => {
  //parameter를 호출
  const { id } = req.params;
  res.render("watch");
  // render the watch.pug,  make it can use variable called `pageTitle`, and send video variable to use them.
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit");
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  //javascript representation of value of <form>
  return res.redirect(`/videos/${id}`);
  // /videos/id값의 url로 리다이렉트
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postUpload = (req, res) => {
  // add a video to the videos array
  const { title } = req.body;
  return res.redirect("/");
};
