import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity } from 'react-native';
import styles from './Styles';
import * as Animatable from 'react-native-animatable';

class Calculator extends Component {
    state = {
        dieCount1: '1',
        dieCount2: '',
        rollResult: 0,
        animateResult: false
    }

    rollEm = () => {
        var diceType = Number(this.state.dieCount2);
        var count = Number(this.state.dieCount1);
        var tempArr = [];
        var temp;
        var result;

        this.setState({
            transparent: !this.state.transparent
        })

        switch (diceType) {
            case 4:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 6:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 8:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 10:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 12:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 20:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
        }

        getSum = (total, num) => {
            return total + num;
        }

        result = tempArr.reduce(getSum, 0);

        this.setState({
            rollResult: result,
            animateResult: 'bounce'
        })

        setTimeout(() => {
            this.setState({
                animateResult: false
            })
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.resultScreen}>
                    <Animatable.Text
                        animation={this.state.animateResult === 'bounce' ? this.state.animateResult : false}
                        easing="ease"
                        iterationCount="infinite"
                        style={{
                            fontSize: 60,
                            marginTop: '10%',
                            fontWeight: 'bold', 
                            color: 'white'
                        }}
                    >
                        {this.state.rollResult}
                    </Animatable.Text>
                </View>
                <View style={styles.input}>
                    <View style={{ flexDirection: 'row', position: 'absolute', top: 0, left: 0, padding: 5 }}>
                        <Picker
                            itemStyle={{ fontSize: 36 }}
                            selectedValue={this.state.dieCount1}
                            style={{
                                height: '100%',
                                width: '25%'
                            }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ dieCount1: itemValue })
                            }
                        >
                            <Picker.Item color="white" label="1" value="1" />
                            <Picker.Item color="white" label="2" value="2" />
                            <Picker.Item color="white" label="3" value="3" />
                            <Picker.Item color="white" label="4" value="4" />
                            <Picker.Item color="white" label="5" value="5" />
                            <Picker.Item color="white" label="6" value="6" />
                            <Picker.Item color="white" label="7" value="7" />
                            <Picker.Item color="white" label="8" value="8" />
                            <Picker.Item color="white" label="9" value="9" />
                        </Picker>
                        <Text
                            style={{
                                height: '100%',
                                width: '25%',
                                fontSize: 36,
                                position: 'relative',
                                top: 85,
                                left: 25,
                                color: 'red',
                                fontWeight: 'bold'
                            }}
                        >
                            d
                        </Text>
                        <Picker
                            selectedValue={this.state.dieCount2}
                            itemStyle={{ fontSize: 36 }}
                            style={{
                                height: '100%',
                                width: '50%'
                            }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ dieCount2: itemValue })
                            }
                        >
                            <Picker.Item color="white" label="--" value="-" />
                            <Picker.Item color="white" label="4" value="4" />
                            <Picker.Item color="white" label="6" value="6" />
                            <Picker.Item color="white" label="8" value="8" />
                            <Picker.Item color="white" label="10" value="10" />
                            <Picker.Item color="white" label="12" value="12" />
                            <Picker.Item color="white" label="20" value="20" />
                        </Picker>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '30%' }}>
                    <View style={{ marginBottom: 50 }}>
                        <Text style={{ fontSize: 42, fontStyle: 'italic', fontWeight: 'bold', color: 'white' }}>
                            {this.state.dieCount1}<Text style={{ color: 'red' }}>d</Text>{this.state.dieCount2}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.rollEm}>
                        <Text style={styles.buttonText}>Roll it, brah!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Calculator;