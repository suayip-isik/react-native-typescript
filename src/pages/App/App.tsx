import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import Header from '../../components/Header/Header';
import AddItem, { IItem } from '../../components/AddItem/AddItem';
import Item from '../../components/Items/Items';
import styles from './App.style';
const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({ item }) => (
            <Item item={item.item} quantity={item.quantity} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};


export default App;