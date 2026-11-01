import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, useColorScheme, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CrudScreen() {
  const [records, setRecords] = useState<{ id: string, name: string }[]>([]);
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Ultra-Premium Theme Colors
  const theme = {
    bg: isDark ? '#000000' : '#F2F2F7',
    surface: isDark ? '#1C1C1E' : '#FFFFFF',
    searchBg: isDark ? '#2C2C2E' : '#E3E3E8',
    text: isDark ? '#FFFFFF' : '#000000',
    subText: isDark ? '#EBEBF599' : '#3C3C4399',
    border: isDark ? '#38383A' : '#E5E5EA',
    primary: isDark ? '#0A84FF' : '#007AFF',
    danger: isDark ? '#FF453A' : '#FF3B30',
    warning: isDark ? '#FF9F0A' : '#FF9500'
  };

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('app_records');
      if (storedData) setRecords(JSON.parse(storedData));
    } catch (e) { console.error("Data load fail"); }
  };

  const saveData = async (newData: any) => {
    try { await AsyncStorage.setItem('app_records', JSON.stringify(newData)); } 
    catch (e) { console.error("Data save fail"); }
  };

  const handleSaveRecord = () => {
    if (!inputText.trim()) return;
    let updatedRecords = [];
    if (editId) {
      updatedRecords = records.map(r => r.id === editId ? { ...r, name: inputText } : r);
      setEditId(null);
    } else {
      updatedRecords = [{ id: Date.now().toString(), name: inputText }, ...records];
    }
    setRecords(updatedRecords);
    saveData(updatedRecords);
    setInputText('');
  };

  const handleEdit = (id: string, currentName: string) => {
    setEditId(id);
    setInputText(currentName);
  };

  const handleDelete = (id: string) => {
    const updatedRecords = records.filter(r => r.id !== id);
    setRecords(updatedRecords);
    saveData(updatedRecords);
  };

  const filteredRecords = records.filter(record => 
    record.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container, { backgroundColor: theme.bg }]}>
      
      {/* Premium Header */}
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Data Vault</Text>
        <Text style={[styles.headerSub, { color: theme.subText }]}>{records.length} items securely stored</Text>
      </View>

      {/* Modern Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: theme.searchBg }]}>
        <Text style={{ fontSize: 18, marginRight: 8, opacity: 0.6 }}>🔍</Text>
        <TextInput 
          style={[styles.searchInput, { color: theme.text }]} 
          placeholder="Search your records..." 
          placeholderTextColor={theme.subText}
          value={searchText} 
          onChangeText={setSearchText} 
        />
      </View>

      {/* Sleek Input Form */}
      <View style={[styles.formContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <TextInput 
          style={[styles.input, { color: theme.text }]} 
          placeholder="What do you want to save?" 
          placeholderTextColor={theme.subText}
          value={inputText} 
          onChangeText={setInputText} 
        />
        <Pressable 
          style={({ pressed }) => [
            styles.primaryButton, 
            { backgroundColor: theme.primary, opacity: pressed ? 0.7 : 1 }
          ]} 
          onPress={handleSaveRecord}
        >
          <Text style={styles.buttonText}>{editId ? "Update" : "Save"}</Text>
        </Pressable>
      </View>

      {/* List / Empty State */}
      {filteredRecords.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={{ fontSize: 50, marginBottom: 10 }}>📭</Text>
          <Text style={[styles.emptyTitle, { color: theme.text }]}>No records found</Text>
          <Text style={[styles.emptySub, { color: theme.subText }]}>Add a new record above to get started.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredRecords}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: theme.surface }]}>
              <View style={styles.cardContent}>
                <View style={[styles.iconBox, { backgroundColor: theme.primary + '15' }]}>
                  <Text style={{ fontSize: 16 }}>📄</Text>
                </View>
                <Text style={[styles.cardText, { color: theme.text }]} numberOfLines={1}>{item.name}</Text>
              </View>
              
              <View style={styles.actionRow}>
                <Pressable 
                  style={[styles.actionBtn, { backgroundColor: theme.warning + '20' }]} 
                  onPress={() => handleEdit(item.id, item.name)}
                >
                  <Text style={[styles.actionText, { color: theme.warning }]}>Edit</Text>
                </Pressable>
                <Pressable 
                  style={[styles.actionBtn, { backgroundColor: theme.danger + '20' }]} 
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={[styles.actionText, { color: theme.danger }]}>Del</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  headerContainer: { marginTop: 60, marginBottom: 25 },
  headerTitle: { fontSize: 34, fontWeight: '800', letterSpacing: 0.5 },
  headerSub: { fontSize: 15, marginTop: 5, fontWeight: '500' },
  
  searchContainer: { flexDirection: 'row', alignItems: 'center', borderRadius: 12, paddingHorizontal: 15, paddingVertical: 12, marginBottom: 25 },
  searchInput: { flex: 1, fontSize: 16, fontWeight: '500' },
  
  formContainer: { flexDirection: 'row', alignItems: 'center', borderRadius: 16, paddingLeft: 15, paddingRight: 8, paddingVertical: 8, marginBottom: 25, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2, borderWidth: 1 },
  input: { flex: 1, fontSize: 16, paddingVertical: 10 },
  primaryButton: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12 },
  buttonText: { color: '#FFF', fontSize: 15, fontWeight: '700' },
  
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 },
  emptyTitle: { fontSize: 20, fontWeight: '700', marginBottom: 5 },
  emptySub: { fontSize: 15, textAlign: 'center', paddingHorizontal: 40 },
  
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 14, borderRadius: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 5, elevation: 1 },
  cardContent: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
  iconBox: { width: 40, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  cardText: { fontSize: 17, fontWeight: '600', flex: 1 },
  
  actionRow: { flexDirection: 'row', gap: 8 },
  actionBtn: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 },
  actionText: { fontSize: 14, fontWeight: '700' }
});