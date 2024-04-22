import React from "react";
import { View, Text, Button, Modal } from "react-native";
import Settings from "./Settings";

const myModal = ({ toggleModal, modalVisible }: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}> */}
        <View>
          <Settings />
          <Button title="Close" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
};

export default myModal;
