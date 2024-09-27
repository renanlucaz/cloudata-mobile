import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';  // ou utilize outra biblioteca de ícones que preferir
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color={Colors.primary} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar por um local"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {searchQuery.length > 0 && (
        <Ionicons 
          name="close" 
          size={24} 
          color="#8FA7B" 
          style={styles.clearIcon}
          onPress={() => setSearchQuery('')}
        />
      )}
    </View>
  );
};
