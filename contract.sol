pragma solidity ^0.4.18;

contract votingSystem {
    
    
    
    uint8[] public List_voter;
 
    uint8[] public List_candidate;

    mapping(uint8 => bool) public voter_resisted;
    mapping(uint8 => bool) public voter_voted;
    mapping(uint8 => uint8) public voted;
    
    // vote
    
    function votingSystem(uint8[] candidateName) public {
        List_candidate = candidateName;
    }
    
    function voting(uint8 candidateName) public {
        voted[candidateName] += 1;
    }

    function counting(uint8 candidateName) view public returns (uint8) {
        return voted[candidateName];
    }
    
    function voter_vote_completed(uint8 code) public {
      voter_voted[code] = true;
    }
    


    // resister

    function resister(uint8 code) public {
        if(validresister(code)==true) {
         voter_resisted[code] = true;
         voter_voted[code] = false;  
        }
        
    }


    // resister check
    function validresister(uint8 code) view public returns (bool) {
      if(voter_resisted[code]==false) {
         return true;
        }
      else {
        return false;
      }
    }

  // voted check
    function validvoter(uint8 code) view public returns (bool) {
      if(voter_resisted[code]==true && voter_voted[code]==false ) {
         return true;
        }
      else {
        return false;
      }
    }




}
