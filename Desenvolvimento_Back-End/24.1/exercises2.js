db.movies.updateOne({ "title": "Godzilla" }, { $set: { budget: 1 } }, { $upset: true });
