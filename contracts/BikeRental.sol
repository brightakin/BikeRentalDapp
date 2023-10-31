// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2;

contract BikeRental {
    address owner;
    struct Renter {
        address payable  person;
        string firstName;
        string lastName;
        bool active;
        bool canRent;
        uint balance;
        uint due;
        uint start;
        uint end;
    }

    mapping (address => Renter) public renters;

    //add renter
    constructor () {
        owner = msg.sender;
    }

    function addRenter (address payable person, string memory firstName, string memory lastName, bool active, bool canRent, uint balance, uint due, uint start, uint end) public  {
        renters[person] = Renter(person, firstName, lastName, active, canRent, balance, due, start, end);
    }

    //ckechout bike;
    function checkOut (address person) public {
        require(renters[person].due == 0, 'Please pay outstanding fees');
        renters[person].active = true;
        renters[person].start = block.timestamp;
        renters[person].canRent = false;
    }

    //checkin bike;
    function checkIn (address person) public {
        require(renters[person].active == true, 'You need to checkout a bike');
        renters[person].active = false;
        renters[person].end = block.timestamp;
        renters[person].canRent = true;
        setDue(person);
    }

    function renterTimeSpan (uint end, uint start) internal pure returns (uint) {
       return  end - start;
    }

    //get total duration;
    function getTotalDuration (address person) public view returns (uint) {
        require(renters[person].active == false, 'Please checkout');
        uint timeSpan = renterTimeSpan(renters[person].end, renters[person].start);
        uint timeSpanInMinutes = timeSpan / 60;
        return timeSpanInMinutes;
    }

    //get contract balance;
    function getContractBalance () public view returns (uint) {
        return address(this).balance;
    }

    //get renters balance 
    function getRentersBalance (address person) public view returns (uint) {
        return renters[person].balance;
    }

    //deposit into contract
    function deposit (address person) public payable {
        renters[person].balance += msg.value;
    }

    //set due
    function setDue (address person) internal {
        uint duration = getTotalDuration(person);
        uint fiveMinutesIncrement = duration / 5;
        renters[person].due = fiveMinutesIncrement * 50000000000000000;
    }

    //make payment
    function makePayment (address person) public {
        require(renters[person].balance > renters[person].due, 'Low Balance');
        require(renters[person].due > 0, 'No due balance');
        renters[person].balance -= renters[person].due;
        renters[person].due = 0;
        renters[person].canRent = true;
        renters[person].active = false;
    }


}