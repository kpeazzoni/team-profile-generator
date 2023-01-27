function createHtml(teamArray) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
      <div class="container-fluid">
              <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                  <h1 class="text-center text-black">My Team</h1>
          </div>
          <div class="d-flex flex-wrap flex-row justify-content-around flex-direction: column">
      ${createTeam(teamArray)}
      </div>
  </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous">
      </script>
</body>
</html>
      `
};
function createTeam(teamArray) {
  let html = "";
  for (var i = 0; i < teamArray.length; i++) {
    if (teamArray[i].getRole() === "Manager") {
      html += `
   <div class="card manager-card flex-direction: column w-25 p-5">
     <div class="card-header bg-primary text-white">
         <h2 class="card-title" id="manager">${teamArray[i].getName()}</h2>
         <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
     </div>
     <div class="card-body">
         <ul class="list-group">
             <li class="list-group-item">ID: ${teamArray[i].getId()}</li>
             <li class="list-group-item">Email: <a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></li>
             <li class="list-group-item">Office number: ${teamArray[i].getOfficeNumber()}</li>
         </ul>
     </div>
   </div>
     `
    } else if (teamArray[i].getRole() === "Engineer") {
      html += `
  <div class="card engineer-card flex-direction: column w-25 p-5">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">${teamArray[i].getName()}</h2>
      <h3 class="card-title" id="engineer"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${teamArray[i].getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></li>
          <li class="list-group-item">GitHub Link: <a href="https://github.com/${teamArray[i].getGithub()}" target="_blank">${teamArray[i].getGithub()}</a></li>
      </ul>
  </div>  
</div>
  `
    } else {
      html += `
    <div class="card intern-card flex-direction: column w-25 p-5">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">${teamArray[i].getName()}</h2>
      <h3 class="card-title" id="intern"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${teamArray[i].getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></li>
          <li class="list-group-item">School: ${teamArray[i].getSchool()}</li>
      </ul>
  </div>
  </div>
    `
    }
  }
  return html;
}

module.exports = createHtml