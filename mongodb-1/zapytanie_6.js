printjson(db.people.insert([{
    "sex" : "Male",
    "first_name" : "Mateusz",
    "last_name" : "Łoniewski",
    "job" : "Consultant",
    "email" : "s25877@pjwstk.edu.pl",
    "location" : {
        "city" : "Warszawa",
        "address" : {
            "streetname" : "Jana Pawła",
            "streetnumber" : "2137"
        }
    },
    "description" : "dobry kolo",
    "height" : "190",
    "weight" : "100",
    "birth_date" : ISODate("1998-07-21"),
    "nationality" : "Poland",
    "credit" : [
        {
            "type" : "visa",
            "number" : "0000111122223333",
            "currency" : "PLN",
            "balance" : "4420.20"
        },
        {
            "type" : "revolut",
            "number" : "5151262948126241",
            "currency" : "EUR",
            "balance" : "2201.00"
        },
    ]
}]))