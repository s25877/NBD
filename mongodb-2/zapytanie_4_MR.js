printjson(db.people.mapReduce(
	function() {
		emit(this.nationality, {height: parseInt(this.height), weight: parseInt(this.weight)});
	},
	function(key, x) {
	let sumOfBmi = 0;
    let maxBmi = 0;
    let minBmi = Number.MAX_SAFE_INTEGER;

    x.forEach(i => {
		let bmi = (i.weight/Math.pow(i.height/100,2))
        sumOfBmi += bmi

        if (bmi > maxBmi) {
            maxBmi = bmi
        }

        if (bmi < minBmi) {
            minBmi = bmi
        }

    });

    return {
        avgBmi: sumOfBmi / x.length,
        maxBmi: maxBmi,
        minBmi: minBmi
    }
	}, {out: "bmi_result"}))
printjson(db.bmi_result.find().toArray())