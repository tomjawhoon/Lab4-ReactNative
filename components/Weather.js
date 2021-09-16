import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Forecast from "./Forecast";
//import { StyleSheet } from "react-native";
export default class Weather extends React.Component {
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    componentDidMount = () => this.fetchData()
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../bg/Wallpaper.jpeg')} style={styles.backdrop}>
                    <View style={styles.overlay}>
                        <Text style={styles.text}>Zip code is {this.props.zipCode}.</Text>
                        <Forecast {...this.state.forecast} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
//height, paddingRight, backgroundColor, opacity, fontSize, color, textAlign
const styles = StyleSheet.create({
    container: {
        // paddingTop: 25 
    },
    backdrop: {
        width: '100%',
        height: '100%'
    },
    overlay: {
        height: 400,
        paddingTop: 20,
        backgroundColor: "#000000",
        opacity: 0.5,
        textAlign: "center",
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: "center",
    }




});
