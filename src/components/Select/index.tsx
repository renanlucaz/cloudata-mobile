import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { styles } from "./styles"
import Entypo from '@expo/vector-icons/Entypo';

export function Select()  {
  const [selectedOption, setSelectedOption] = useState(
    "Av. Paulista, 1002. São Paulo - SP"
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = [
    "Av. Paulista, 1002. São Paulo - SP",
    "Rua Augusta, 1500. São Paulo - SP",
    "Av. Faria Lima, 1200. São Paulo - SP",
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.selectedText}>{selectedOption}</Text>
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
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleOptionSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};



