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

function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    }

    if (company.clients) {
        for (let keyClients of company.clients) {
            var result = findValueByKey(companyName, keyClients);
            if (result) {
                return result;
            }

            if (keyClients.partners) {
                for (let keyPartners of keyClients.partners) {
                    var result = findValueByKey(companyName, keyPartners);
                    if (result) {
                        return result;
                    }

                    if (keyPartners.partners) {
                        for (let key of keyPartners.partners) {
                            var result = findValueByKey(companyName, key);
                            if (result) {
                                return result;
                             }
                        }
                    }
                }
            }
        }
    }
    return null;  
}
console.log(findValueByKey('Клієнт 1.2', company));