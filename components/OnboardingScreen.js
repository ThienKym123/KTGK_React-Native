import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image1.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/carrot-icon.png')}
            style={styles.carrotImage}
          />
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.storeText}>to our store</Text>
          <Text style={styles.descriptionText}>Get your groceries in as fast as one hour</Text>
          <TouchableOpacity 
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    paddingBottom: 40, // Add some bottom padding
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  carrotImage: {
    width: 50, // Adjust this value as needed
    height: 50, // Adjust this value as needed
    resizeMode: 'contain',
    marginBottom: 20, // Space between carrot and Welcome text
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  storeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#53B175',
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;