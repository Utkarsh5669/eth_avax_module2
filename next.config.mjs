/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "AlreadyInFriendList",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "newFriend",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "friendNumber",
            type: "uint256",
          },
        ],
        name: "AddFriend",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "frindAddress",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "noOfFriend",
            type: "uint256",
          },
        ],
        name: "RemoveFriend",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
        ],
        name: "addFriends",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getOwner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "noOfRemovedFriend",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "removeFriendsFromList",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "showAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "showBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "showFriendList",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "showSocialScore",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalFriendsEverrr",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
};

export default nextConfig;
