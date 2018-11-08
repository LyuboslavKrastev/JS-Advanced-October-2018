function solve(arr, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }

    let tickets = [];

    for (const line of arr) {
        let tokens = line.split('|');
        let destination = tokens[0];
        let price = tokens[1];
        let status = tokens[2];

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    return tickets.sort((a, b) => 
        a[criteria] > b[criteria]
    );
}

let result = solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);

console.log(JSON.stringify(result));