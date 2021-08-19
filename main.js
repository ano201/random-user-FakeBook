fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => userData(data))


function userData(usr) {
  const user = usr.results[0];
  userName(user.name);
  
  const usrLocation = user.location;
  userLocation(usrLocation);
  
  const usrPhone = user;
  userPhn(usrPhone);
  
  const usrPic = user.picture;
  userPic(usrPic);
}



function userPic(pic) {
  const cover = document.getElementById("cover-pic");
  const profile = document.getElementById("profile-pic");
  cover.setAttribute('src', pic.large)
  profile.setAttribute('src', pic.medium)
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
  const phone = document.getElementById("phone");
  country.innerText = location.country;
  city.innerText = location.city;
  state.innerText = location.state;
  postcode.innerText = location.postcode;
}

function userPhn(userPhone){
  const phone = document.getElementById("phone");
  const cell = document.getElementById("cell");
  phone.innerText = userPhone.phone;
  cell.innerText = userPhone.cell;
}