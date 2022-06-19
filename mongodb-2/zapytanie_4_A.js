printjson(db.people.aggregate([
	{
		$group: 
			{
				_id: "$nationality",
				averBmi: { $avg: {$divide:['$weight',{$pow:[ {$divide: ['$height', 100]}, 2]}]}},
				maxBmi: { $max: {$divide:['$weight',{$pow:[ {$divide: ['$height', 100]}, 2]}]}},
				minBmi: { $min: {$divide:['$weight',{$pow:[ {$divide: ['$height', 100]}, 2]}]}},
			}
	}
]).toArray())