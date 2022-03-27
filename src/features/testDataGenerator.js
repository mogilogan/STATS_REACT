const testDataGenerator = quantity => {
  var ARRAY_LENGTH = quantity;
  var randomArray = [];
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
};

export default testDataGenerator;
