import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from './AddItem.style';
export interface IItem {
    item: string;
    quantity: string;
}
interface Props {
    setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
    shoppingList: IItem[];
}
const AddItem: React.FC<Props> = ({ shoppingList, setShoppingList }) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const addItem = () => {
        if (!item) {
            Alert.alert('No Item!', 'You need to enter an item');
        } else {
            setShoppingList([
                ...shoppingList,
                {
                    item,
                    quantity: quantity || '1',
                },
            ]);
            setItem('');
            setQuantity('');
        }
    };
    return (
        <View>
            <Text style={styles.heading}>Add Shopping Item</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter item"
                    value={item}
                    onChangeText={text => setItem(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter quantity"
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={q => {
                        setQuantity(q);
                    }}
                />
                <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddItem;