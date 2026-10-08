import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Profile = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedText type="title" style={styles.title}>
        My Profile
      </ThemedText>

      <ThemedView style={styles.profileCard}>

        <ThemedView style={styles.avatar}>
          <ThemedText style={styles.avatarText}>
            👤
          </ThemedText>
        </ThemedView>

        <ThemedText type="subtitle" style={styles.name}>
          Berry
        </ThemedText>

        <ThemedText style={styles.email}>
          berry@example.com
        </ThemedText>

      </ThemedView>

      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Account
      </ThemedText>

      <ThemedView style={styles.option}>
        <ThemedText style={styles.optionIcon}>👤</ThemedText>
        <ThemedText style={styles.optionText}>
          Personal Information
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.option}>
        <ThemedText style={styles.optionIcon}>⚙️</ThemedText>
        <ThemedText style={styles.optionText}>
          Settings
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.option}>
        <ThemedText style={styles.optionIcon}>🔔</ThemedText>
        <ThemedText style={styles.optionText}>
          Notifications
        </ThemedText>
      </ThemedView>

    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
  textAlign: 'center',
  marginTop: 10,
  marginBottom: 20,
  fontSize: 32,
},

  profileCard: {
    alignItems: 'center',
    padding: 25,
    borderRadius: 20,
    marginBottom: 30,

    // Dark-mode friendly card
    backgroundColor: '#1E1E1E',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,

    backgroundColor: '#333333',
  },

  avatarText: {
    fontSize: 45,
  },

  name: {
    marginBottom: 5,
  },

  email: {
    opacity: 0.7,
  },

  sectionTitle: {
    marginBottom: 15,
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 18,
    borderRadius: 15,
    marginBottom: 12,

    backgroundColor: '#1E1E1E',
  },

  optionIcon: {
    fontSize: 22,
    marginRight: 15,
  },

  optionText: {
    fontSize: 16,
  },
});