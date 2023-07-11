function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    else {
        return arr1.every((element, index) => {
            console.log(element, index)
            if (element === arr2[index]) {
                return true;
            }
            else {
                return false;
            }
        })
    }

}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
        return 0
    }
    else {
        return result = users
            .filter(user => user.gender === gender)
            .map(user => user.age)
            .reduce((sum, age, index, array) => sum + age / array.length, 0)
    }

}

