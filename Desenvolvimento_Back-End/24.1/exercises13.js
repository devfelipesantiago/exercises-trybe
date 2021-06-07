db.movies.updateMany({ $or: [{ title: "Batman" }, { title: "Home Alone" },] }, { $max: { imdbRanting: 17 } });
