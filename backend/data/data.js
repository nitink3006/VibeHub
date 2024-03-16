
const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Nitin",
        email: "nitin@example.com",
      },
      {
        name: "Aishwarya",
        email: "aishwarya@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Nitin",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Nitin",
        email: "nitin@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Aishwarya",
        email: "aishwarya@example.com",
      },
      {
        name: "Nitin",
        email: "nitin@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Aishwarya",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Aishwarya",
        email: "aishwarya@example.com",
      },
      {
        name: "Nitin",
        email: "nitin@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Aishwarya",
        email: "aishwarya@example.com",
      },
      {
        name: "Nitin",
        email: "nitin@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Aishwarya",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Nitin",
        email: "nitin@example.com",
      },
      {
        name: "Aishwarya",
        email: "aishwarya@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];


module.exports = {chats};
