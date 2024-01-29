var services = {
	"Стрижка": "60 грн",
	"Гоління": "80 грн",
	"Миття голови": "100 грн",
    Price : function () { 
        var sum = 0; 
        for (let key in services){
            if (typeof services[key] != 'function') {
                sum += +(services[key].slice(0,-4));
            }
        }
        console.log('Вартість наданих послуг:', sum);   
    },
    minPrice : function (){
        var min = Infinity;
        for (let key in services){
            if (typeof services[key] != 'function') {
                if (min > +(services[key].slice(0,-4))){
                    min = +(services[key].slice(0,-4));
                }
            }
        }
        console.log('Мінімальна вартість послуги:', min);
    },
    maxPrice : function (){
        var max = -Infinity;
        for (let key in services){
            if (typeof services[key] != 'function') {
                if (max < +(services[key].slice(0,-4))){
                    max = +(services[key].slice(0,-4));
                }
            }
        }
        console.log('Максимальна вартість послуги:', max);

    }
}

services.Price ();
services.minPrice ();
services.maxPrice ();
services['Розбити скло'] = "200 грн";
services['Кава'] = "20 грн";
services.Price ();
services.minPrice ();
services.maxPrice ();