import { Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SettingsWheel } from '@/components/Settings';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card, Paragraph, Button, Title } from 'react-native-paper';

export default function ConnectScreen() {

  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
        <SettingsWheel />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
      <Card>
        <Card.Content>
          <Title>Connect to mesh device</Title>
          <Paragraph>This card can be expanded to show more details.</Paragraph>
          {expanded && (
            <Paragraph style={styles.expandedText}>
              Here are the additional details that were hidden before. You can add any content you like here.
            </Paragraph>
          )}
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>{expanded ? 'Collapse' : 'Expand'}</Button>
        </Card.Actions>
      </Card>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  expandedText: {
    marginTop: 8,
  },
});
