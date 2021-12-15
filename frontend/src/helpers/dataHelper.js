
const dataHelper = (array1, array2) => {
  const output = [];
  for(let i = 0; i < array1.length; i++){
    console.log(array1[i].name)
  }
  for(let y = 0; y < array2.length; y++){
    console.log(array2[y].name)
  }
};

module.exports = {
  dataHelper
}