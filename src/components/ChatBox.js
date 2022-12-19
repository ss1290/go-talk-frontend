import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      //md:flex means screen size above medium or above screen
      alignItems='center'
      flexDir='column'
      p={3}
      bgImg={
        "url('https://res.cloudinary.com/dzuuripux/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1671270453/chatApp_vtvbvm.jpg')"
      }
      opacity='80%'
      w={{ base: "100%", md: "68%" }}
      borderRadius='lg'
      borderWidth='1px'>
      <SingleChat
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
      />
    </Box>
  );
};

export default ChatBox;
