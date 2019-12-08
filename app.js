
//////////////AJAX request///////////////////
fetch('https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob')
    .then(response => response.json())
    .then(data => {
        users = data.results;


////////////Creating the directory/////////////
const directory=document.getElementById('employees');
var button;

var contacts=function(){
      var content=`<ul id='users'>`;
      for (let i = 0; i < users.length; i+=1) {
            const firstName=users[i].name.first;
            const lastName=users[i].name.last;
            const fullName= `${firstName} ${lastName}`;
            content += `<button class='btn'><li class='card' id='${i}'>
                        <div class="member__img">
                          <img src="${users[i].picture.large}">
                      </div>
                      <div class='info'>
                          <p>${fullName}</p>
                          <p>${users[i].email}</p>
                          <p>${users[i].location.city}</p>
                      </div>
                      </li></button>`

      }
          content += `</ul>`;
        document.getElementById('content').innerHTML=content;
        button=document.getElementsByClassName('btn')
};
var index;
var createmodel=function(){$('#modal').modal();}
var click=function(){
 for (let i=0;i<button.length;i+=1){
  button[i].addEventListener('click',(e)=>{
        index=button[i].firstChild.getAttribute('id');
        let modal=document.getElementById('modal');
              const firstName=users[index].name.first;
              const lastName=users[index].name.last;
              const fullName= `${firstName} ${lastName}`;
              const address= `${users[index].location.street.number} ${users[index].location.street.name},${users[index].location.city},${users[index].location.state} ${users[index].location.postcode} `;
              let modalContent = `<div class="member__img">
                <img src="${users[index].picture.large}">
                </div>
                <div class='info'>
                  <h4>${fullName}</h4>
                  <p>${users[index].email}</p>
                  <p>${users[index].location.city}</p>
                <div class='more'>
                <p>${users[index].cell}</p>
                <p>${address}</p>
                </div>
                </div>


                `;
                modal.innerHTML=modalContent;
                createmodel();
                $(".fade").modal({
                  fadeDuration: 200
                });



  });

 }
}


contacts();
click();











});
// var item=button.item(1);
// console.log(item);
//
// for (let i=0;i<button.length;i+=1){
//   button[i].addEventListener('click',()=>{
//         alert('ah');
//
//   });
// }

// $('.btn').on('click',(e)=>{
// //document.getElementById('btn').addEventListener('click',(e)=>{
//       alert('aaaa');
//       // var index=0;
//       // console.log('tmp');
//     });
//
// window.onload=function(){
// const member=document.getElementById('content');
// console.log(member);
// var buttons=document.querySelectorAll('.btn');
//member.addEventListener('click',(e)=>{

  // }

      /*
     if (e.target.className==='info' || e.target.className === 'member__img'){
          let target=e.target.parentNode;
          var index= target.getAttribute('id');
          console.log(index);
     } else if (e.target.tagName==='IMG'){
       let target=e.target.parentNode.parentNode;
       var index= target.getAttribute('id');
       console.log(index);
     }
     */
// To do: add when target is the card////
// ////////////////////////////////////////
//       var modal=document.getElementById('modal');
//       const firstName=users[index].name.first;
//       const lastName=users[index].name.last;
//       const fullName= `${firstName} ${lastName}`;
//       const address= `${users[index].location.street.number} ${users[index].location.street.name},${users[index].location.city},${users[index].location.state} ${users[index].location.postcode} `
//       console.log(address);
//       var modalContent;
//       modalContent+= `<div class="member__img">
//         <img src="${users[index].picture.large}">
//         </div>
//         <div class='info'>
//           <h3>${fullName}</h3>
//           <p>${users[index].email}</p>
//           <p>${users[index].location.city}</p>
//       </div>
//         <div class='more_info'>
//         <p>${users[index].cell}</p>
//         <p>${address}</p>
//         </div>
//         `;
//         modal.innerHTML=modalContent;
//
//
//
//
// });
//
//
// // member.addEventListener('clcik',()=>{
// //     console.log('whhhh');
//
// }
// const array = Array.prototype.slice.call(member);

//const card=document.getElementsByTagName('li');
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

// window.onload=function(){
//   members.addEventListener('click', ()=>{
//     alert('woo');
// });
// }
