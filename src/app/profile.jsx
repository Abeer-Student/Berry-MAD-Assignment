import React from 'react';
import { StyleSheet, ScrollView, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Profile = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const theme = {
    background: isDark ? '#121212' : '#F2F2F7',
    surface: isDark ? '#1C1C1E' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#000000',
    subText: isDark ? '#8E8E93' : '#6C6C70',
    border: isDark ? '#38383A' : '#E5E5EA',
    avatarBg: isDark ? '#2C2C2E' : '#E5E5EA',
  };

  return (
    <ScrollView 
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type="title" style={[styles.title, { color: theme.text }]}>
        My Profile
      </ThemedText>

      <ThemedView style={[styles.profileCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <ThemedView style={[styles.avatar, { backgroundColor: theme.avatarBg }]}>
          <ThemedText style={styles.avatarText}>
            👤
          </ThemedText>
        </ThemedView>

        <ThemedText type="subtitle" style={[styles.name, { color: theme.text }]}>
          Berry
        </ThemedText>

        <ThemedText style={[styles.email, { color: theme.subText }]}>
          berry@example.com
        </ThemedText>
      </ThemedView>

      <ThemedText type="subtitle" style={[styles.sectionTitle, { color: theme.text }]}>
        Account
      </ThemedText>

      <ThemedView style={[styles.option, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <ThemedText style={styles.optionIcon}>👤</ThemedText>
        <ThemedText style={[styles.optionText, { color: theme.text }]}>
          Personal Information
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.option, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <ThemedText style={styles.optionIcon}>⚙️</ThemedText>
        <ThemedText style={[styles.optionText, { color: theme.text }]}>
          Settings
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.option, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <ThemedText style={styles.optionIcon}>🔔</ThemedText>
        <ThemedText style={[styles.optionText, { color: theme.text }]}>
          Notifications
        </ThemedText>
      </ThemedView>

    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '700',
  },
  profileCard: {
    alignItems: 'center',
    padding: 30,
    borderRadius: 24,
    marginBottom: 32,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  email: {
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    marginLeft: 4,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  optionIcon: {
    fontSize: 22,
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});