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
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const edit = (req, res) => {
  res.render("edit");
};

export const search = (req, res) => res.send("search");

export const upload = (req, res) => res.send("Upload Videos");

export const deleteVideo = (req, res) => {
  res.send("Delete Videos");
};
