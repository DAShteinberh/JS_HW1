var Pet = {
    namePet : 'Stella',
    kind : 'cat',
    breed : 'scotishfold',
    sex : 'f',
    age : 13,
    getInfo : function () {
         
        for (let key in Pet){
            if (typeof Pet[key] != 'function') {
                console.log(key + ': ' + Pet[key]);
            }
        }   
    }
}    
Pet.getInfo ();
Pet.nameOwner = 'Daria';
console.log('');
Pet.getInfo ();