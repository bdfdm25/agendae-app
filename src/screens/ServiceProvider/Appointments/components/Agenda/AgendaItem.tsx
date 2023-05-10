import { IconButton } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import isEmpty from "lodash/isEmpty";
import React, { useCallback, useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { item } = props;
  console.log("[ITEM]", item);
  const buttonPressed = useCallback(() => {
    // Alert.alert("Show me more");
    setModalVisible(true);
  }, []);

  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>
          Sem agendamentos para esta data
        </Text>
      </View>
    );
  }

  return (
    <Pressable
      style={({ pressed }) =>
        (pressed && [styles.pressed, styles.appointmentItemOutterContainer]) ||
        styles.appointmentItemOutterContainer
      }
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.appointmentItemInnerContainer}>
        <Text style={styles.serviceText}>{item.serviceType}</Text>
        <Text style={styles.clientText}>{item.clientName}</Text>
        <Text style={styles.dateTimeText}>{item.serviceTime}</Text>
      </View>
      <View style={styles.appointmentItemInnerContainer}>
        <IconButton
          onPress={buttonPressed}
          icon="information-circle"
          size={28}
        />
      </View>
    </Pressable>
  );
};

export default React.memo(AgendaItem);

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  appointmentItemOutterContainer: {
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    borderLeftWidth: 5,
    borderLeftColor: GlobalStyles.colors.primary400,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appointmentItemInnerContainer: {
    flexDirection: "column",
  },
  serviceText: {
    fontFamily: "poppins-bold",
    fontSize: 22,
  },
  clientText: {
    fontFamily: "poppins-regular",
    fontSize: 16,
  },
  dateTimeText: {
    fontFamily: "poppins-light",
    fontSize: 12,
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  emptyItemText: {
    color: "lightgrey",
    fontSize: 14,
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
