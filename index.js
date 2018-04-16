
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));	


test2Contract = web3.eth.contract([{"constant":false,"inputs":[],"name":"voting_2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"uint8"}],"name":"counting","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"voting_1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);

contractInstance = test2Contract.at('0xf3ab815e17bfe4d5496d5067ecc942cf63a99452');

function voting() {

  contractInstance.voting_1({from: web3.eth.accounts[0]}, function() { });

      val = contractInstance.counting.call(1)
}

function voting2() {

  contractInstance.voting_2({from: web3.eth.accounts[0]}, function() { });

      val = contractInstance.counting.call(2)

}


function inquiry() {

val1 = contractInstance.counting.call(1)
val2 = contractInstance.counting.call(2)

$(voted1).html(val1.c)
$(voted2).html(val2.c)
}










