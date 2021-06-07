db.movies.updateMany({}, { $set: { sequels: 0 } }, { $upset: true })
