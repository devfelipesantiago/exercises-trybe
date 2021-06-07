db.movies.updateOne({ "title": "Godzilla" }, { $max: {imdbRanting: 8.6 }, $set: { "category.1": "thriller" }, } );
