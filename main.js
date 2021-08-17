fetch('download.json')
.then(res => res.json())
.then(data => userData(data))


function userData(usr) {
  const user = usr.results[0];
  userName(user.name);
  
  const usrLocation = user.location;
  userLocation(usrLocation);
  
  
}

function userName(name) {
  const usrName = document.querySelector(".user-name");
  const h1 = document.createElement("h1");
  h1.innerText = `${name.title} ${name.first} ${name.last}`;
  usrName.appendChild(h1);
}

function userLocation(location) {
  const country = document.getElementById("country");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const postcode = document.getElementById("postcode");
  country.innerText = location.country;
  city.innerText = location.city;
  state.innerText = location.state;
  postcode.innerText = location.postcode;
  console.log(location);
}