# Social Media Application

## The objective of this Project:

1. To make a smart contract with 2-3 functions
2. To Show the values of functions in frontend of the application

<img width="1455" alt="image" src="https://github.com/PradeepSahhu/SocialMedia/assets/94203408/370804b8-5b4f-4124-b27a-1efa1288c33e">
Here, i implemented many functions in frontend along with values of state variables.

1. Showing Account Address.
2. Showing list of Friends
3. Showing the total No of friends in the list
4. Showing total no of friends removed from the list.

# Extra Functinality

- Smart Contract
  1. Custom Error
  2. Events
- Frontend Application
  1. Popup on Adding Friend (console.log on removing and adding friend)
  2. Loggin events in the frontend console.
  3. Functionlity to add friend and remove friend
  4. Functionality to connect with metamask wallet.

  <img width="1454" alt="image" src="https://github.com/PradeepSahhu/SocialMedia/assets/94203408/37499936-6a59-4eee-83d1-01830cb7237c">

## Code Explanation

### Smart Contract

```Solidity

  function addFriends(address _address) external onlyOwner {
        if (isInFriendList[_address]) {
            revert AlreadyInFriendList();
        }
        friendList.push(_address);
        isInFriendList[_address] = true;
        socialScore++;
        totalFriendsEver++;

        emit AddFriend(_address, socialScore);
    }
```

This function takes an address, and checks for if it is marked as true in the IsinFriendList mapping and if not then add it into the array of addresses and marked it as true in friendlist mapping such that in future it can't be added again.

```Solidity

function removeFriendsFromList(uint index) external onlyOwner {
        address val = friendList[index];
        isInFriendList[val] = false;
        delete friendList[index];
        removeFriends++;
        socialScore--;
        emit RemoveFriend(val, removeFriends);
    }
```

This function takes an index and remove that index element from the array and marks it as false in the isInFriendlist mapping.

```Solidity
    function correctFriendList() external returns (address[] memory) {
        uint l = friendList.length;
        uint index = 0;

        for (uint i = 0; i < l; i++) {
            address val = friendList[i];
            if (val != address(0)) {
                friendList[index] = val;
                index++;
            }
        }
        return friendList;
    }
```

This function correct the 0 address indexes from the address array and some what overrides the blank address which is caused due to deletion of them by removeFriendList function.

```Solidity

  function showFriendList() external view returns (address[] memory) {
        uint l = friendList.length;
        uint TotalFriendsRemaining = totalFriendsEver - removeFriends;
        uint index = 0;

        address[] memory friends = new address[](
            TotalFriendsRemaining < 1 ? 0 : TotalFriendsRemaining
        );

        for (uint i = 0; i < l; i++) {
            address val = friendList[i];
            if (val != address(0)) {
                friends[index] = val;
                index++;
            }
        }
        return friends;
    }
```

This function only shows the list of addresses which is not 0 (not 0 addresses) from the address array.

```Solidity
    function showAddress() external view returns (address) {
        return address(this);
    }

    function showBalance() external view returns (uint) {
        return address(this).balance;
    }

    function showSocialScore() external view returns (uint) {
        return socialScore;
    }

    function noOfRemovedFriend() external view returns (uint) {
        return removeFriends;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
```

All the view functions to get the value of state variables(socialscore & removeFriends) or balance of the contract of the address of this contract.

```Solidity

  event AddFriend(address indexed newFriend, uint indexed friendNumber);
event RemoveFriend(address indexed frindAddress, uint indexed noOfFriend);

```

These two are events which will be emitted/triggered when the owner adds or removes the address using the addFriend or removeFriend function.

finally final note is that all the functions are made external and not public because for beeter gas optimization and this is the reason that i use function inside the modifier to check for owner.

# complete code of smart contract.

```Solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

//contract to show 4 state variables value on frontend.

error AlreadyInFriendList();

contract SocialMedia {
    uint32 private socialScore;
    uint256 private totalFriendsEver;
    address private immutable owner;
    uint32 private removeFriends;
    mapping(address => bool) private isInFriendList;

    address[] private friendList;

    event AddFriend(address indexed newFriend, uint indexed friendNumber);
    event RemoveFriend(address indexed frindAddress, uint indexed noOfFriend);

    // For Better Gas Optimization
    modifier onlyOwner() {
        _onlyOwner();
        _;
    }

    function _onlyOwner() internal view {
        require(msg.sender == owner, "You are not the Owner");
    }

    constructor() {
        owner = msg.sender;
    }

    function showFriendList() external view returns (address[] memory) {
        uint l = friendList.length;
        uint TotalFriendsRemaining = totalFriendsEver - removeFriends;
        uint index = 0;

        address[] memory friends = new address[](
            TotalFriendsRemaining < 1 ? 0 : TotalFriendsRemaining
        );

        for (uint i = 0; i < l; i++) {
            address val = friendList[i];
            if (val != address(0)) {
                friends[index] = val;
                index++;
            }
        }
        return friends;
    }

    function correctFriendList() external returns (address[] memory) {
        uint l = friendList.length;
        uint index = 0;

        for (uint i = 0; i < l; i++) {
            address val = friendList[i];
            if (val != address(0)) {
                friendList[index] = val;
                index++;
            }
        }
        return friendList;
    }

    function addFriends(address _address) external onlyOwner {
        if (isInFriendList[_address]) {
            revert AlreadyInFriendList();
        }
        friendList.push(_address);
        isInFriendList[_address] = true;
        socialScore++;
        totalFriendsEver++;

        emit AddFriend(_address, socialScore);
    }

    function removeFriendsFromList(uint index) external onlyOwner {
        address val = friendList[index];
        isInFriendList[val] = false;
        delete friendList[index];
        removeFriends++;
        socialScore--;
        emit RemoveFriend(val, removeFriends);
    }

    function showAddress() external view returns (address) {
        return address(this);
    }

    function showBalance() external view returns (uint) {
        return address(this).balance;
    }

    function showSocialScore() external view returns (uint) {
        return socialScore;
    }

    function noOfRemovedFriend() external view returns (uint) {
        return removeFriends;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}

```
