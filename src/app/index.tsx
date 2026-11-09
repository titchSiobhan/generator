import * as Device from 'expo-device';
import { Button, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { randomGenerator } from '../generator_logic/generator';
import {useState, createContext} from "react"

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';



function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}




export default function HomeScreen() {
  const [character, setCharacter] = useState(randomGenerator())
 

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          
          <ThemedText type="title" style={styles.title}>
            Random Character Generator
          </ThemedText>
        </ThemedView>
<ThemedView className="Ideas">
       <ThemedText type="default">
          Species: {character.Species}
        </ThemedText>
        <ThemedText type="default">
          Body: {character.Body}
        </ThemedText>
        <ThemedText type="default">
          Skin: {character.Skin}
        </ThemedText> 
        <ThemedText type="default">
          Skin Colour: {character.SkinColour}
        </ThemedText> 
        <ThemedText type="default">
          Face Shape: {character.Face}
        </ThemedText> 
       
      <ThemedText type="default">
          Eye Shape: {character.Eye}
        </ThemedText> 
        <ThemedText type="default">
          Eye Colour: {character.EyeColour}
        </ThemedText> 
       <ThemedText type="default">
          Hair Length: {character.HairLength}
        </ThemedText> 
        <ThemedText type="default">
          Hair Colour: {character.HairColour}
        </ThemedText> 
       <ThemedText type="default">
          Nose: {character.Nose}
        </ThemedText> 
       <ThemedText type="default">
          Ears: {character.Ears}
        </ThemedText> 
        <ThemedText type="default">
          Additional: {character.Additional}
        </ThemedText> 
       <ThemedText type="default">
          Markings: {character.Markings}
        </ThemedText> 
       <ThemedText type="default">
          Accessories: {character.Accessories}
        </ThemedText> 
        </ThemedView>
       
       <Button
        onPress={() => setCharacter(randomGenerator())}
  title="Refresh"
  color="#841584"
  accessibilityLabel="Press to refresh the generator" />

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
