printjson(db.people.aggregate([{
    $group: {
		 _id: null,
        uniqieJobs: {$addToSet: "$job"}
    }}
]).toArray())