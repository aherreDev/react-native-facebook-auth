import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Text, Center, VStack, Button, Flex, useToast, Box } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppNativeParamList } from "../types";
import { AppContext } from "../provider/app_provider";

const AuthView = () => {
  const toast = useToast();
  const { replace } =
    useNavigation<NativeStackNavigationProp<AppNativeParamList>>();
  const { signup, error, currentUser } = useContext(AppContext);

  const submit = () => signup();

  useEffect(() => {
    if (error)
      toast.show({
        description: error,
        render: () => {
          return (
            <Box bg="red.500" px="2" py="1" color="white" rounded="sm" mb={5}>
              {error}
            </Box>
          );
        },
      });
  }, [error]);

  useEffect(() => {
    if (currentUser) replace("home");
  }, [currentUser]);

  return (
    <View>
      <Center h="100%">
        <Button size="lg" colorScheme="blue" onPress={submit}>
          <Flex justifyContent="center" alignItems="center" flexDir="row">
            <Text fontSize="lg" color="white">
              Acces with Facebook{" "}
            </Text>

            <FontAwesome name="facebook-square" size={32} color="white" />
          </Flex>
        </Button>
      </Center>
    </View>
  );
};

export default AuthView;
