printjson(db.people.mapReduce(
	function() {
		this.credit.forEach(x => emit(x.currency, parseInt(x.balance)));
	},
	function(key, x) {
		return Array.sum(x);
	}
		
	, {out:"sum_of_balance"}))
printjson(db.sum_of_balance.find().toArray())