printjson(db.people.update({"job":"Editor"},{$unset: {"email":true}},false, true))