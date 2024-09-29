import React, { Dispatch, SetStateAction, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { styles } from "./styles"
import Entypo from '@expo/vector-icons/Entypo';


interface Option {
  id: string;
  label: string
}

interface SelectInterface {
  options: Option[]
  selectedOption: Option | null
  setSelectedOption: Dispatch<SetStateAction<Option | null>>
}

export function Select({ options, selectedOption, setSelectedOption }: SelectInterface) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setIsModalVisible(true)}
      >
        {selectedOption ? (
          <Text style={styles.selectedText}>{selectedOption.label}</Text>
        ) : (
          <Text style={styles.selectedText}>Selecionar</Text>
        )}
        <Text style={styles.arrow}>
          {isModalVisible ?
            <Entypo name="chevron-small-up" size={24} color="#BEBCCC" /> :
            <Entypo name="chevron-small-down" size={24} color="#BEBCCC" />
          }
        </Text>
      </TouchableOpacity>

      {/* Modal for dropdown options */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleOptionSelect(item)}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};



