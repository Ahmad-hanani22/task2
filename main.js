const apiURL = "https://jsonplaceholder.typicode.com/users";
const usersContainer = document.getElementById("users-container");
function fetchUsers() {
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("An error occurred while fetching data");
      }
      return response.json();
    })
    .then(users => displayUsers(users))
    .catch(error => {
      console.error(error.message);
      usersContainer.innerHTML = `<p style="color: red; text-align: center;">${error.message}</p>`;
    });
}
function displayUsers(users) {
  usersContainer.innerHTML = ""; 
  users.forEach(user => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p>Username: ${user.username}</p>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p>Company: ${user.company.name}</p>
      <p>Catchphrase: ${user.company.catchPhrase}</p>
      <p>Business: ${user.company.bs}</p>
      <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      <p>Geo: Latitude: ${user.address.geo.lat}, Longitude: ${user.address.geo.lng}</p>
    `;
    usersContainer.appendChild(userCard);
  });
}
fetchUsers();
