printjson(db.people.aggregate([
	{
		$unwind:"$credit",
	},
	{
		$match:{
				sex: "Female",
				nationality: "Poland"
			},
	},
	{
		$group:{
			_id: "$credit.currency",
			sumOfBalance: { $sum: "$credit.balance" },
			averageOfBalance: { $avg: "$credit.balance" }
		}
	}
]).toArray())