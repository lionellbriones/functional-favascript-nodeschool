function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    //console.log(goodUsers);
    return submittedUsers.every(function (submittedElement) {
      return goodUsers.some(function (element) {
        return element.id === submittedElement.id;
      })
    })
  };
}

// var goodUsers = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 }
// ];
//
// var testAllValid = checkUsersValid(goodUsers);
//
// console.log(testAllValid([
//   { id: 2 },
//   { id: 1 }
// ]));
// // => true
//
// console.log(testAllValid([
//   { id: 2 },
//   { id: 4 },
//   { id: 1 }
// ]));

module.exports = checkUsersValid;
