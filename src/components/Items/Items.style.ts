import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    },
    itemName: {
        fontWeight: '500',
    },
    quantity: {
        padding: 6,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
});

export default styles;