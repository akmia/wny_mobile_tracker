import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#17497D',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 16,
          color: '#17497D',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="trackerform"
        options={{
          title: 'GRADUATE TRACER SURVEY – CTU MAIN',
        }}
      />
    </Stack>
  );
}
