const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, obj) {
    if (obj.name === companyName) {                                            
        return obj;
    }

    if (obj.clients) {                                                          
        for (let client of obj.clients) {                                     
            let result1 = findValueByKey(companyName, client);
            if (result1) {                                                       
                return result1;
            }
        }
    }

    if (obj.partners) {                                                          
        for (let partner of obj.partners) {                                     
            let result2 = findValueByKey(companyName, partner);
            if (result2) {                                                       
                return result2;
            }
        }
    }

    return null;                                                                
}

  console.log (findValueByKey('Клієнт 1.2.3', company));