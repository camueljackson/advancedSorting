var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },

];

students.sort(function(a, b){

// a. refers to the whole object, ex : { id: 1, name: "bruce",    age: 40 },

    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase()

    if ( nameA < nameB ) {
      return -1
    } else if ( nameA > nameB ) {
      return 1
    } else if (nameA === nameB) {
      if (a.age < b.age) {
        return 1
      } else if (a.ge > b.age) {
        return -1
      } else {
        return 0
      }
    }
});

console.log(students);