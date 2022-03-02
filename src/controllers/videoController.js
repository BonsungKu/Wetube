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
  return res.render("home", { pageTitle: "Home", videos });
  //send to base.pug #{pageTitle} and render Home.pug
};
export const watch = async (req, res) => {
  //parameter를 호출
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", { pageTitle: video.title, video });
  // render the watch.pug,  use variable called `pageTitle` from base.pug, and send video variable to use them.
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  //Video에서 object를 찾음
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  //Video가 존재하는지 확인 {}안에 id값이 같다는 조건을 입력 *필터값입력(어떠한 property도 가능)
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags
      .split(",")
      .map((word) => (word.startsWith("#") ? word : `#${word}`)),
  });
  // /videos/id값의 url로 리다이렉트
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postUpload = async (req, res) => {
  // add a video to the videos array
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title: title, //left side: videoSchema / right side:req.body
      description: description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    //error시 메세지 출력 및 upload 렌더링
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
