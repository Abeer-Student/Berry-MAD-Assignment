import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Home = () => {
  return (
    <ScrollView
  style={styles.scrollView}
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={false}
>

      {/* Header */}
      <ThemedView style={styles.header}>
        <ThemedView>
          <ThemedText style={styles.smallText}>
            GOOD MORNING
          </ThemedText>

          <ThemedText type="title" style={styles.title}>
            Welcome, Berry
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.avatar}>
          <ThemedText style={styles.avatarText}>
            B
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Main Card */}
      <ThemedView style={styles.mainCard}>
        <ThemedText style={styles.cardLabel}>
          YOUR DASHBOARD
        </ThemedText>

        <ThemedText type="subtitle" style={styles.cardTitle}>
          Everything you need,
          right here.
        </ThemedText>

        <ThemedText style={styles.cardDescription}>
          Explore your profile, discover new content,
          and manage your application easily.
        </ThemedText>

        <ThemedView style={styles.cardBadge}>
          <ThemedText style={styles.badgeText}>
            ●  App is ready
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Section title */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Quick Access
      </ThemedText>

      {/* Quick Access Cards */}
      <ThemedView style={styles.cardsRow}>

        <ThemedView style={styles.smallCard}>
          <ThemedView style={styles.iconCircle}>
            <ThemedText style={styles.icon}>
              👤
            </ThemedText>
          </ThemedView>

          <ThemedText style={styles.smallCardTitle}>
            Profile
          </ThemedText>

          <ThemedText style={styles.smallCardText}>
            Your account
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.smallCard}>
          <ThemedView style={styles.iconCircle}>
            <ThemedText style={styles.icon}>
              🔎
            </ThemedText>
          </ThemedView>

          <ThemedText style={styles.smallCardTitle}>
            Explore
          </ThemedText>

          <ThemedText style={styles.smallCardText}>
            Find something new
          </ThemedText>
        </ThemedView>

      </ThemedView>

      {/* Bottom information */}
      <ThemedView style={styles.infoCard}>

        <ThemedText style={styles.infoIcon}>
          ✦
        </ThemedText>

        <ThemedView style={styles.infoContent}>
          <ThemedText style={styles.infoTitle}>
            Simple & Easy
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Use the navigation bar below to move
            between different sections of the app.
          </ThemedText>
        </ThemedView>

      </ThemedView>

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
  flex: 1,
},

container: {
  paddingHorizontal: 20,
  paddingTop: 25,
  paddingBottom: 30,
},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  smallText: {
    fontSize: 12,
    letterSpacing: 2,
    opacity: 0.5,
    marginBottom: 5,
  },

  title: {
    fontSize: 28,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  mainCard: {
    padding: 25,
    borderRadius: 24,
    backgroundColor: '#1E1E1E',
    marginBottom: 30,
  },

  cardLabel: {
    fontSize: 11,
    letterSpacing: 2,
    opacity: 0.5,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 25,
    lineHeight: 32,
    marginBottom: 12,
  },

  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    opacity: 0.65,
    marginBottom: 20,
  },

  cardBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#2B2B2B',
  },

  badgeText: {
    fontSize: 12,
    opacity: 0.8,
  },

  sectionTitle: {
    fontSize: 21,
    marginBottom: 15,
  },

  cardsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },

  smallCard: {
    flex: 1,
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#1E1E1E',
  },

  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  icon: {
    fontSize: 21,
  },

  smallCardTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 5,
  },

  smallCardText: {
    fontSize: 12,
    opacity: 0.5,
  },

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#1E1E1E',
  },

  infoIcon: {
    fontSize: 28,
    marginRight: 15,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 18,
    opacity: 0.55,
  },
});