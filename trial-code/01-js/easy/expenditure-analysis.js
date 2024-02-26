/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function expenditureAnalysis(transactions){
    let foodCost = 0;
    let clothingCost = 0;
    let electronicsCost = 0;
    
    for (let i = 0; i < transactions.length; i++) {
        
        if(transactions[i]["category"] == "Food") {
            foodCost += transactions[i].price;
        } else if (transactions[i]["category"] == "Clothing") {
            clothingCost += transactions[i].price;
        } else if (transactions[i]["category"] == "Electronics") {
            electronicsCost += transactions[i].price;
        }
    }

    final = [];

    if(foodCost > 0){
        final.push({
            category: "Food",
            totalSpent: foodCost,
        });
    }
    
    if(clothingCost > 0){
        final.push({
            category: "Clothing",
            totalSpent: clothingCost,
        });
    }

    if(electronicsCost > 0){
        final.push({
            category: "Electronics",
            totalSpent: electronicsCost,
        });
    }

    return final;
}

let bills = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656105600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656134400000,
        price: 30,
        category: 'Food',
        itemName: 'Sushi',
    },
]

console.log(expenditureAnalysis(bills));