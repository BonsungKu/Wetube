let videos = [
  {
    title: "Video #1",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const recommended = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
  //send to base.pug #{pageTitle} and render Home.pug
};

export const watch = (req, res) => {
  //parameter를 호출
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
  // render the watch.pug,  make it can use variable called `pageTitle`, and send video variable to use them.
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  //javascript representation of value of <form>
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
  // /videos/id값의 url로 리다이렉트
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // add a video to the videos array
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
