import React from 'react';
import { View, Text } from 'react-native';
import { IItem } from '../AddItem/AddItem';
import styles from './Items.style';
const Item: React.FC<IItem> = ({ item, quantity }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemName}>{item}</Text>
            <Text style={styles.quantity}>x{quantity}</Text>
        </View>
    );
};

export default Item;