var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
var regEx = /^[a-zA-Z0-9]+(\.?)[a-zA-Z0-9]+(@gmail|@yahoo)\.com$/;
var filterArray = arr.filter((item) => {
    return regEx.test(item.email);
});
var newArray = filterArray.map((item) => {
    return item.email;
});
console.log(newArray);