import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Container maxW='xl'>
      <Box
        d='flex'
        align='center'
        padding={3}
        bg='white'
        boxShadow='dark-lg'
        w='100%'>
        <Text
          bgGradient='linear(to-t, green.200, pink.500)'
          bgClip='text'
          fontSize='4xl'
          fontFamily='Work sans'
          fontWeight='extrabold'
          mb='20px'>
          Go-Talk
        </Text>
        <Tabs
          isFitted
          variant='soft-rounded'
          colorScheme='yellow'
          backgroundColor='#F5F5F5'
          padding={3}
          minW='100%'>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
