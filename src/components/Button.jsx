import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";

export const Button = ({ title, bgColor, color, onPress, isLoading, disabled }) => {
    const background = disabled ? '#9E9E9E' : bgColor;
    return (
        <TouchableOpacity
            style={
                [styles.buttonContainer, { backgroundColor: background || '#000' }]
            }
            onPress={() => onPress()}
            disabled={isLoading || disabled}
        >
            {isLoading ?
                <ActivityIndicator color={color || '#fff'} size={30} />
                :
                <Text style={[styles.title, { color: color || '#fff' }]}>{title}</Text>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    title: {
        fontWeight: '900'
    }
});