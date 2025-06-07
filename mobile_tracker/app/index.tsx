import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the App</Text>
      <Button title="Go to Tracker Form" onPress={() => router.push('/trackerform')} />
    </View>
  );
}
