printjson(db.people.mapReduce({
	function() {
		emit(this.sex, {height: parseInt(this.height), weight: parseInt(this.weight)})
	},
	function(sex, x) {
		
	const height = 0;
    const weight = 0;

    x.forEach(i => {
        height += i.height;
        weight += i.weight;
    });

    return {
        avgWeight: sumWeights / x.length,
        avgHeight: sumHeights / x.length
    }
	}
},{out:"avg_height_and_weight"}))
printjson(db.avg_height_and_weight.find().toArray())