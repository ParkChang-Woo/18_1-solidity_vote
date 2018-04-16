
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));	


test2Contract = web3.eth.contract([{"constant":false,"inputs":[],"name":"voting_2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"uint8"}],"name":"counting","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"voting_1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);

contractInstance = test2Contract.at('0x383be063b0231e1e349cd0a72cf8355098723ec6');


candidates = {"park": 0,"lee": 1, "kim" :2}



function voting() {

  contractInstance.voting_1({from: web3.eth.accounts[0]}, function() { });

      val = contractInstance.counting.call(1),toString()
console.log(val.c);

}

function voting2() {

  contractInstance.voting_2({from: web3.eth.accounts[0]}, function() { });

      val = contractInstance.counting.call(2),toString()
console.log(val.c);

}


function inquiry() {

val1 = contractInstance.counting.call(1),toString()
val2 = contractInstance.counting.call(2),toString()

$(voted1).html(val1.c)
$(voted2).html(val2.c)
console.log(val1.c, val2.c);
}










