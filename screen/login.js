import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

const login = () => {
  const [text, onChangeText] = React.useState(null)
  const [number, onChangeNumber] = React.useState(null)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>로그인</Text>
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="ID"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={number}
          placeholder="password"
//          keyboardType="numeric"
        />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <View>
            <Button
            title="Login"
            color="#0A5EF6"
            onPress={() => Alert.alert('hello')}
            />
          </View>
        </SafeAreaView>
      </View> );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    flex: 1,
    alignItems: "center"
  },
  title: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 50,
    margin: 45
  },
  input: {
    height: 50,
    width: 320,
    margin: 10,
    borderWidth: 1,
    padding: 15
  },
  button: {
    flex: 1,
    height: 50,
    width: 320,
    fontWeight: 'normal',
    marginHorizontal: 10,
  },
});

export default login;