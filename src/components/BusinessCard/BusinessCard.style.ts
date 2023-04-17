import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        margin: 16,
    },
    content: {
        padding: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        marginTop: 8,
    },
    phone: {
        fontSize: 16,
        marginTop: 8,
    },
    email: {
        fontSize: 16,
        marginTop: 8,
    },
    button: {
        backgroundColor: 'orange',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    }
});

export default styles;