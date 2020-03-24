var checks = document.getElementsByClassName('check-city');
var content = document.getElementById('content');


content.innerHTML = 0;

for (var check of checks){
    check.addEventListener('change', checkItem);
  }

function checkItem () {
  var result = 0
  for (var check of checks){
    if(check.checked === true){
      result++;
    }
  }
  content.innerHTML = result;
}

