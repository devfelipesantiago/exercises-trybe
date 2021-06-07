db.movies.updateOne({ "title": "Batman" }, { $inc: { imdbRating: 2 } }, { $upset: true });
