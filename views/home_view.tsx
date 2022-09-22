import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Text, Center, Image, Button, Flex } from "native-base";
import { AppContext } from "../provider/app_provider";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { AppNativeParamList } from "../types";

const HomeView = () => {
  const { replace } =
    useNavigation<NativeStackNavigationProp<AppNativeParamList>>();
  const { currentUser, logout } = useContext(AppContext);

  useEffect(() => {
    if (!currentUser) replace("auth");
  }, [currentUser]);

  return (
    <View>
      <Center h="100%">
        <Text fontSize="lg" bold>
          Welcome
        </Text>
        <Image
          size={150}
          borderRadius={100}
          source={{
            uri: currentUser?.photoURL || undefined,
          }}
          fallbackSource={{
            uri: "https://i.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.webp",
          }}
          alt="User photo"
        />
        <Text fontSize="md">Name: {currentUser?.displayName}</Text>
        <Text fontSize="md">Email: {currentUser?.email}</Text>

        <Button size="lg" colorScheme="red" onPress={logout}>
          <Flex justifyContent="center" alignItems="center" flexDir="row">
            <Text fontSize="lg" color="white">
              LogOut{" "}
            </Text>

            <MaterialIcons name="logout" size={24} color="white" />
          </Flex>
        </Button>
      </Center>
    </View>
  );
};

export default HomeView;
