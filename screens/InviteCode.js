import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function InviteCodeScreen() {
  const navigation = useNavigation();

  // Sample Data
  const sampleUser = { name: "John Doe" }; // Sample username
  const validInviteCode = "123456"; // Sample valid invite code

  const [inviteCode, setInviteCode] = useState('');

  const handleConnect = () => {
    if (inviteCode.trim() === '') {
      alert('⚠️ Please enter an invite code');
      return;
    }

    if (inviteCode === validInviteCode) {
      console.log('✅ Correct Invite Code:', inviteCode);
      navigation.navigate('PropertiesDetailsScreen');
    } else {
      alert('❌ Invalid Invite Code. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation Icons */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={28} color="#002f6c" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-outline" size={28} color="#002f6c" />
        </TouchableOpacity>
      </View>

      {/* Welcome & Invite Code Input */}
      
        <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.name}> {sampleUser.name}! 🎉</Text>
        
        <Card style={styles.card}>
        <Text style={styles.subtitle}>Enter  invite code </Text>
        <TextInput
          style={styles.input}
          value={inviteCode}
          onChangeText={setInviteCode}
          //placeholder="Enter Invite Code"
          keyboardType="numeric"
        />

        
      </Card>
      <Button mode="contained" onPress={handleConnect} style={styles.button} >
          Connect
        </Button>
    </View>
  );
}

// Styles for UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 1000
    
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    margin: 20
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#002f6c',
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    fontWeight: 400,
    textAlign: 'center'
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#E3F2FD',
  },
  button: {
    backgroundColor: '#002f6c',
    borderRadius: 5,
    paddingVertical: 6,
    width: 220,

  },
});

