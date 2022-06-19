printjson(db.people.mapReduce(
	function() {
		emit(this.job, 0);
	}, 
	function(key, x) {
		return 0;
	}, {out: "jobList"}))
printjson(db.jobList.find().toArray())