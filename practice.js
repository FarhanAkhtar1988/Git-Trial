let users =[
    {
        "_id": "623ca71ea2c28ce31ecfc122",
        "firstName": "Mohd",
        "lastName": "Adnan",
        "email": "mohdAdnan16@gmail.com",
        "password": "$2a$10$3InwT5dxOGZGZpF4gIn1D.7w0//dEC1m2PuHFDbSK61RsQofpE/fK",
        "__v": 0
    },
    {
        "_id": "623ca778a2c28ce31ecfc125",
        "firstName": "Mohd",
        "lastName": "Farhan",
        "email": "farhanakhtar75@gmail.com",
        "password": "$2a$10$6Ft5LICIsEgSC7AeeO3asOSkkEnrcDvI/sHNF4nODXQz.BCPizpY2",
        "__v": 0
    }
]
for(i=0;i<users.length;i++){
console.log(users[i].firstName + " " + users[i].lastName)
}

