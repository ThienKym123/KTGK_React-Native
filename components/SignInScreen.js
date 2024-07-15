import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image2.png')}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>
        
        <TouchableOpacity style={styles.phoneButton}>
          <Image
            source={require('../assets/image3.png')}
            style={styles.flagIcon}
          />
          <Text style={styles.phoneText}>+880</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>Or connect with social media</Text>
        
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <FontAwesome name="google" size={24} color="white" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <FontAwesome name="facebook" size={24} color="white" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    padding: 30,
    alignItems: 'flex-start', // Changed from 'center' to 'flex-start'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left', // Changed from 'center' to 'left'
    marginBottom: 30,
    alignSelf: 'flex-start', // Added to ensure title aligns to the left
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 10,
    width: '100%',
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  phoneText: {
    fontSize: 18,
    color: 'black',
  },
  orText: {
    marginVertical: 30,
    color: '#828282',
    alignSelf: 'center', // Center this text
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center', // Center the buttons
  },
  googleButton: {
    backgroundColor: '#5383EC',
  },
  facebookButton: {
    backgroundColor: '#4A66AC',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  socialIcon: {
    marginRight: 10,
  },
});

export default SignInScreen;