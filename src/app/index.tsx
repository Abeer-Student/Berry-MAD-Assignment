import React from 'react';
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Home = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const theme = {
    background: isDark ? '#121212' : '#F2F2F7',
    surface: isDark ? '#1C1C1E' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#000000',
    subText: isDark ? '#8E8E93' : '#6C6C70',
    border: isDark ? '#38383A' : '#E5E5EA',
    accent: isDark ? '#0A84FF' : '#007AFF',
    badgeBg: isDark ? '#2C2C2E' : '#E5E5EA',
    avatarBg: isDark ? '#2C2C2E' : '#D1D1D6',
  };

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <ThemedView style={[styles.header, { backgroundColor: 'transparent' }]}>
        <ThemedView style={{ backgroundColor: 'transparent' }}>
          <ThemedText style={[styles.smallText, { color: theme.subText }]}>
            GOOD MORNING
          </ThemedText>
          <ThemedText type="title" style={[styles.title, { color: theme.text }]}>
            Welcome, Berry
          </ThemedText>
        </ThemedView>

        <ThemedView style={[styles.avatar, { backgroundColor: theme.avatarBg }]}>
          <ThemedText style={[styles.avatarText, { color: theme.text }]}>
            B
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Main Card */}
      <ThemedView style={[styles.mainCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <ThemedText style={[styles.cardLabel, { color: theme.subText }]}>
          YOUR DASHBOARD
        </ThemedText>

        <ThemedText type="subtitle" style={[styles.cardTitle, { color: theme.text }]}>
          Everything you need, right here.
        </ThemedText>

        <ThemedText style={[styles.cardDescription, { color: theme.subText }]}>
          Explore your profile, discover new content, and manage your application easily.
        </ThemedText>

        <ThemedView style={[styles.cardBadge, { backgroundColor: theme.badgeBg }]}>
          <ThemedText style={[styles.badgeText, { color: theme.text }]}>
            ● App is ready
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Section title */}
      <ThemedText type="subtitle" style={[styles.sectionTitle, { color: theme.text }]}>
        Quick Access
      </ThemedText>

      {/* Quick Access Cards */}
      <ThemedView style={[styles.cardsRow, { backgroundColor: 'transparent' }]}>
        <ThemedView style={[styles.smallCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <ThemedView style={[styles.iconCircle, { backgroundColor: theme.badgeBg }]}>
            <ThemedText style={styles.icon}>👤</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.smallCardTitle, { color: theme.text }]}>
            Profile
          </ThemedText>
          <ThemedText style={[styles.smallCardText, { color: theme.subText }]}>
            Your account
          </ThemedText>
        </ThemedView>

        <ThemedView style={[styles.smallCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <ThemedView style={[styles.iconCircle, { backgroundColor: theme.badgeBg }]}>
            <ThemedText style={styles.icon}>🔎</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.smallCardTitle, { color: theme.text }]}>
            Explore
          </ThemedText>
          <ThemedText style={[styles.smallCardText, { color: theme.subText }]}>
            Find something new
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Bottom information */}
      <ThemedView style={[styles.infoCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <ThemedText style={[styles.infoIcon, { color: theme.accent }]}>
          ✦
        </ThemedText>
        <ThemedView style={[styles.infoContent, { backgroundColor: 'transparent' }]}>
          <ThemedText style={[styles.infoTitle, { color: theme.text }]}>
            Simple & Easy
          </ThemedText>
          <ThemedText style={[styles.infoText, { color: theme.subText }]}>
            Use the navigation bar below to move between different sections of the app.
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
    paddingTop: 60, // Increased for professional top spacing
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  smallText: {
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
  },
  mainCard: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardLabel: {
    fontSize: 11,
    letterSpacing: 1.5,
    fontWeight: '700',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  cardBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  smallCard: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 20,
  },
  smallCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  smallCardText: {
    fontSize: 13,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  infoIcon: {
    fontSize: 28,
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    lineHeight: 18,
  },
});