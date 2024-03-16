import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]); // Initialize chats as an empty array

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      history.push("/");
    }
  }, [history]); // Add history as a dependency

  // Optional: Add a useEffect hook to handle chat data fetching (if applicable)
  // useEffect(() => {
  //   // Fetch chat data here
  //   const fetchChats = async () => {
  //     const response = await fetch('your-chat-data-endpoint');
  //     const fetchedChats = await response.json();
  //     setChats(fetchedChats);
  //   };
  //   fetchChats();
  // }, []); // Empty dependency array to fetch data once on component mount

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;