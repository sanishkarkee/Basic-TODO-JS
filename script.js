function addMore() {
  //----to remove error mssg after the input
  document.getElementById('error').innerHTML = '';

  //----retrieve data entered by user
  let name = document.getElementById('name').value;

  //----showing error message
  if (name == '') {
    document.getElementById('error').innerHTML = 'Please enter a value';
  } else {
    let box = document.getElementById('box');

    //----data lai <li> ma set garna, createElement-> creates html element specified by (tag_name)
    let li = document.createElement('li');

    //----created element bhitra text(user entered value) rakhna
    li.textContent = name;

    //----for remove button
    let a = document.createElement('a');
    a.textContent = 'X';
    a.href = 'javascript:void(0)'; //X ma click gare pachi katai pani redirect na garna lai use gareko ho
    a.className = 'remove';
    li.appendChild(a);

    //----naya data lai old data bhanda mathi display garauna
    let pos = box.firstElementChild;
    console.log(pos);

    if (pos == null) {
      box.appendChild(li);
    } else {
      box.insertBefore(li, pos);
    }
  }

  //----naya data enter bhaye pachi text box automatically clear huna
  document.getElementById('name').value = '';
}

//----X ma click garda kei operation huna lai
let btn = document.querySelector('ul');
btn.addEventListener('click', function (e) {
  let box = document.getElementById('box');
  // console.log(e.target);     //yesle <a> dincha tara del li garnu parne ho
  let li = e.target.parentNode;
  // console.log(li);   //yesle chai <li> tag dincha
  box.removeChild(li);
});
