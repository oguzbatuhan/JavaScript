// Objects

let user = [
    "Oğuz Batuhan",
    "Çözeli",
    21
];

// key -value

let user1 = {
    "userName": "Oğuz Batuhan",
    "userSurname": "Çözeli",
    "userOld": 21,
    "userAddress": {
        "userProvince": "Antalya",
        "userDistrict": "Kepez"
    }
};

let result;

result = `Name: ${user1.userName} ${user1.userSurname}, yearsold ${user1.userOld}, address ${user1.userAddress.userProvince}/${user1.userAddress.userDistrict}`;
console.log(result);
