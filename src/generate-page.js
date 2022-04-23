
//entire function will create employee cards
const generateEmployeeCards = employees => {
    //function to display unique properties for each employee type
    let displayExtraInfo = function (employees) {
        if (employees.officeNumber) {
             return `Office Number: ${employees.officeNumber}`
        } else if (employees.github) {
            return `Github Username: ${employees.github}`
        } else {
            return `School Association: ${employees.school}`
        }
    }

    let displayRole = function (employees) {
        if (employees.officeNumber) {
            return `Manager`
       } else if (employees.github) {
           return `Engineer`
       } else {
           return `Intern`
       }
    }

    let htmlCards = '';
    for (let i=0; i<employees.length; i++) {
        htmlCards += `
    <div class="row row-cols-1 row-cols-3 m-5">
    <div class="col">
        <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header h3 text-white bg-primary"> ${employees[i].name}
            <br> 
            <span class="h5"> ${displayRole(employees[i])} </span></div>
            <div class="card-body">
                <p class="card-text">
                  <div class="border p-1">
                    ID: ${employees[i].id} 
                  </div> 
                  <div class="border p-1">
                    Email: ${employees[i].email}
                  </div> 
                  <div class="border p-1">
                    ${displayExtraInfo(employees[i])}
                  </div> 
                </p>
            </div>
          </div>
    </div>`
    }
    return htmlCards;
}





module.exports = generateEmployeeCards;
