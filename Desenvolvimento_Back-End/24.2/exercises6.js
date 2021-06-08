db.movies.updateOne({ title: "Batman" }, { $push: { category: "action" } }, { upsert: true });
