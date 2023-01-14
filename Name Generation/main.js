let myTagsArry = [];


function generate() {
  let takeName = document.getElementById("name");
  if (takeName.value === '') {
    return;
  } else {
    myTagsArry = [takeName.value];
    takeName.value = '';
    console.log(myTagsArry);
    myTagsArry.map((e) => {

      let root = document.getElementById('contaner');
      let divPara = document.createElement('div');
      let textPara = document.createElement('h2');
      let deletButn = document.createElement('button');

      deletButn.addEventListener("click", deletName);
      deletButn.id = 'buttonDelet';
      deletButn.textContent='Delete';
      function deletName(e) {
        e.target.parentElement.remove();
      }
      divPara.className = 'divText';
      textPara.className = 'h2Text';

      textPara.textContent = e;
      
      divPara.appendChild(textPara);
      divPara.appendChild(deletButn);
      root.appendChild(divPara);
    })
  }
}



