printjson(db.people.find({}, { first_name: 1, last_name: 1, "location.city":{$cond:{if: { $gt:["$birth_date", ISODate("2001-01-01")]}, then: 1, else: "$$REMOVE"}}}).toArray())