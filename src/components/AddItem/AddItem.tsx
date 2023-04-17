import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import styles from "./AddItem.style";

export interface Item {
    item: string;
    quantity: string;
}

const AddItem = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
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
                <TouchableOpacity style={styles.addItemButton} onPress={() => { }}>
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddItem;