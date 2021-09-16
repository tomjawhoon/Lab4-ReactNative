import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text >

                <Text style={styles.smallText}>
                    {this.props.description}
                </Text>

                <View style={styles.tempContainer}>
                    <Text style={styles.smallText}>
                        {this.props.temp}
                        °C
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },

    
    tempContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    bigText: {
        fontSize: 30,
        color: "#FFFFFF",
        textAlign: "center"
    },
    smallText: {
        fontSize: 30,
        color: "#FFFFFF",
        textAlign: "center"
    },
})