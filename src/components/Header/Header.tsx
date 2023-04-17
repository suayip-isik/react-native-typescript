import React from "react";
import { Text, View } from "react-native";
import styles from "./Header.style";

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
};

export default Header;