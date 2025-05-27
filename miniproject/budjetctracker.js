function BT(money){
    let Salary =money;
    let expense =[
        {name: "Groceries", amount:3000},
        {name: "Utilities", amount:1850},
        {name: "recharge", amount:500},
        {name: "Transportation", amount:1000},
        {name: "personal care", amount:300},
        {name: "Entertainment", amount:1500},
        {name: "Health", amount:500},
        {name: "shopping", amount:3000},
        {name:"eating out",amount:2000}
    ];
    function gettotal(){
        return expense.reduce((total,entry) => total + entry.amount,0);
    }
    let total_amount = gettotal()
    return `expenses made in this month is ${balance = Salary - total_amount}`;
}
console.log(BT(100000));