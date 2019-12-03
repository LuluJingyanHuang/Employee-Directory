
//////////////AJAX request///////////////////
fetch('https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob')
    .then(response => response.json())
    .then(data => {
        users = data.results;


////////////Creating the directory/////////////
const directory=document.getElementById('employees');
const member=document.getElementById('content');



var content=`<ul id='users'>`;
for (let i = 0; i < users.length; i+=1) {
      const firstName=users[i].name.first;
      const lastName=users[i].name.last;
      const fullName= `${firstName} ${lastName}`;
      content += `<li class='card'>
                  <div class="member__img">
                    <img src="${users[i].picture.large}">
                </div>
                <div class='info'>
                    <p>${fullName}</p>
                    <p>${users[i].email}</p>
                    <p>${users[i].location.city}</p>
                </div>
                </li>`

}
    content += `</ul>`;
    member.innerHTML=content;
});
// const card=document.getElementsByTagName('li');
// console.log(card);
// ///////////modal functions////////////
// card[0].addEventListener('click',()=>{
// alert('woooo');
//   });
//
// for (let i=0; i<card.length; i+=1){
//   console.log('ah');
//     card[i].addEventListener('click',()=>{
//     alert('woooo');
//       });
// }

$('.card').on("click", function (e) {
     alert('woooo');
       });
