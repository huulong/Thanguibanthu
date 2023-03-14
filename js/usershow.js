let adminshowtk = document.getElementById("adminshowtk");
window.onload = displayuser(listUser)
function displayuser(listUser){
  listUser = JSON.parse(localStorage.getItem("localuser"))
  let show ="";
  for (var i = 0; i < listUser.length; i++) {
    show+= `<tr>                         
  <td><p class='text-center'>${(i+1)}</p></td>
  <td><p class='text-center'>${listUser[i].email}</p></td>
  <td><p class='text-center'>${listUser[i].password}</p></td>
  <td><p class='text-center'>${listUser[i].firstname} </p></td>
  <td><p class='text-center'>${listUser[i].lastname} </p></td>
  <td class='text-center'><button class='btn btn-outline-danger' data-toggle='modal' data-target='#updatetk'  onclick='edittk(${i})'>Edit</button></td>
  <td class='text-center'><button class='btn btn-outline-danger'  onclick='detele(${i})'>Detele</button></td>
  </tr> `
  }
  adminshowtk.innerHTML=show; 
}