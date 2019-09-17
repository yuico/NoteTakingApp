
const inpKey = document.querySelector("#inpKey");
/* const inpDate = document.querySelector("#inpDate"); */
const inpValue = document.querySelector("#inpValue");
const btnAdd = document.querySelector("#btnAdd");
const noteList = document.querySelector("#noteList");

btnAdd.onclick = function() {
  const key = inpKey.value;
  /* const date = inpDate.value; */
  const value = inpValue.value;

  console.log(key);
  console.log(value);

  if(key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
  
};