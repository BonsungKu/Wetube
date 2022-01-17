export const recommended = (req, res) => {
  const videos = [
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
      id: 1,
    },
    {
      title: "Video #3",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
  //send to base.pug #{pageTitle} and render Home.pug
};

export const see = (req, res) => {
  res.render("watch");
};

export const edit = (req, res) => {
  res.render("edit");
};

export const search = (req, res) => res.send("search");

export const upload = (req, res) => res.send("Upload Videos");

export const deleteVideo = (req, res) => {
  res.send("Delete Videos");
};
