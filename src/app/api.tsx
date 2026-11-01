import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, useColorScheme } from 'react-native';
import axios from 'axios';

export default function ApiScreen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const theme = {
    bg: isDark ? '#121212' : '#F2F2F7',
    card: isDark ? '#1C1C1E' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#000000',
    subText: isDark ? '#8E8E93' : '#6C6C70',
    border: isDark ? '#38383A' : '#E5E5EA',
    accent: isDark ? '#0A84FF' : '#007AFF',
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Data fetch karne mein masla aaya.');
        setLoading(false);
      });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Network Data</Text>
        <Text style={[styles.headerSub, { color: theme.subText }]}>Fetched from Public API</Text>
      </View>

      {loading && (
        <View style={styles.centerBox}>
          <ActivityIndicator size="large" color={theme.accent} />
          <Text style={[styles.loadingText, { color: theme.subText }]}>Loading resources...</Text>
        </View>
      )}

      {error ? (
        <View style={styles.centerBox}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      {!loading && !error && (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={[styles.userCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <View style={[styles.avatarBox, { backgroundColor: theme.accent + '20' }]}>
                <Text style={[styles.avatarText, { color: theme.accent }]}>
                  {item.name.charAt(0)}
                </Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={[styles.nameText, { color: theme.text }]}>{item.name}</Text>
                <Text style={[styles.emailText, { color: theme.subText }]}>{item.email}</Text>
                <View style={[styles.tagBox, { backgroundColor: theme.border }]}>
                  <Text style={[styles.tagText, { color: theme.text }]}>{item.company.name}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  headerContainer: { marginTop: 60, marginBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: '700', letterSpacing: 0.5 },
  headerSub: { fontSize: 15, marginTop: 4 },
  centerBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, fontSize: 16, fontWeight: '500' },
  errorText: { color: '#FF3B30', fontSize: 16, fontWeight: '500' },
  userCard: { flexDirection: 'row', padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 1 },
  avatarBox: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatarText: { fontSize: 22, fontWeight: '700' },
  infoBox: { flex: 1, justifyContent: 'center' },
  nameText: { fontSize: 17, fontWeight: '600', marginBottom: 2 },
  emailText: { fontSize: 14, marginBottom: 8 },
  tagBox: { alignSelf: 'flex-start', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 6 },
  tagText: { fontSize: 12, fontWeight: '500' }
});