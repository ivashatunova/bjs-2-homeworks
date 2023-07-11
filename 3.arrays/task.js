function compareArrays(arr1, arr2) {
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

console.log(compareArrays([8, 5, 2], [8, 1, 2]));

function getUsersNamesInAgeRange(users, gender) {

}