printjson(db.people.mapReduce(
	function() {
		if (this.nationality == "Poland" && this.sex == "Female"){
			this.credit.forEach(x => emit(x.currency, parseInt(x.balance)));
		}
	},
	function(key, x) {
		let sumOfBalance = Array.sum(x);
		let averageBalance = sumOfBalance / x.length;
		return { sumOfBalance, averageBalance }
	}, 
	{out: 'result_of_sum_and_avg'}))
printjson(db.result_of_sum_and_avg.find().toArray())