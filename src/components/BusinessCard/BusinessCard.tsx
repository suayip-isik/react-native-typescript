import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BusinessCard.style';

interface BusinessCardProps {
    name: string;
    title: string;
    phone: string;
    // readonly dateOfBirth: Date;
    email?: string;
    // onPress: () => void;
    getName: () => void;
    // getAge: () => number;
    getSumTwoNumber?: (n1: number, n2: number) => number
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, title, phone, email, getName }) => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.phone}>{phone}</Text>
                <Text style={styles.email}>{email}</Text>
                <TouchableOpacity style={styles.button} onPress={getName}>
                    <Text>Button</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BusinessCard;