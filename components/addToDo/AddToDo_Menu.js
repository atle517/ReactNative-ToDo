import React, { useRef, useEffect } from 'react';
import Button_RoundWithIcon from '../Button_RoundWithIcon';
import { StyleSheet, Text, View, Animated, TextInput } from 'react-native';

function AddToDo_Menu(props) {

    const appearAnim = useRef(new Animated.Value(0)).current;
    const interpolateHeight = appearAnim.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] });

    const appear = () => {
        Animated.timing(appearAnim, {
            toValue: 1,
            duration: 80,
            useNativeDriver: false
        }).start();
    };

    appear();

    return (
        <Animated.View style={{width: '100%', height: '100%', marginTop:'auto', marginBottom: interpolateHeight, overflow: 'hidden'}}>
            <View style={styles.component_addtodo_window}>

                {/* Input - ToDo Description */}
                <TextInput style={styles.component_addtodo_input} placeholder="Type ToDo here..." onChangeText={text => props.setDesc(text)} />

                {/* Buttons - 'Close menu' and 'Add new ToDo' */}
                <View style={{ flexDirection: 'row' }}>
                    {/* Button - Close menu */}
                    <Button_RoundWithIcon icon="cross" size={48} backgroundColor="rgb(224, 0, 0)" symbolColor="rgb(50, 0, 0)" clickHandler={props.clickHandler} />

                    {/* Button - Add new ToDo */}
                    <Button_RoundWithIcon icon="check" size={36} backgroundColor="rgb(0, 212, 0)" symbolColor="rgb(0, 50, 0)" clickHandler={props.addToDo} />
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    component_addtodo_window: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',

        backgroundColor: '#555',
    },

    component_addtodo_input: {
        width: '60%',
        height: '50%',

        marginLeft: 5,
        marginRight: 'auto',

        marginTop: 'auto',
        marginBottom: 'auto',

        fontSize: 24,
        borderBottomWidth: 1

    }
});

export default AddToDo_Menu
