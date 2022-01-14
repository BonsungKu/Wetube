export const recommended = (req, res) =>
  res.render("home", { pageTitle: "Home" });
//send to base.pug #{pageTitle} and render Home.pug

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
