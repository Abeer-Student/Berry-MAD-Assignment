import { Image } from 'expo-image';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  Keyframe,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const DURATION = 800;

const splashAnimation = new Keyframe({
  0: {
    opacity: 1,
    transform: [{ scale: 0.85 }],
  },
  60: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  100: {
    opacity: 0,
    transform: [{ scale: 1.05 }],
    easing: Easing.out(Easing.ease),
  },
});

export function AnimatedSplashOverlay() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  const content = (
    <View style={styles.content}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/berry-app-logo-splash.png')}
          style={styles.logo}
          contentFit="contain"
        />
      </View>

      <Animated.Text style={styles.appName}>
        Berry
      </Animated.Text>

      <Animated.Text style={styles.tagline}>
        Simple. Modern. Powerful.
      </Animated.Text>
    </View>
  );

  if (animate) {
    return (
      <Animated.View
        entering={splashAnimation
          .duration(DURATION)
          .withCallback((finished) => {
            'worklet';

            if (finished) {
              scheduleOnRN(setVisible, false);
            }
          })}
        style={styles.splashOverlay}
      >
        {content}
      </Animated.View>
    );
  }

  return (
    <View
      onLayout={() => {
        SplashScreen.hideAsync().finally(() => {
          setAnimate(true);
        });
      }}
      style={styles.splashOverlay}
    >
      {content}
    </View>
  );
}

export function AnimatedIcon() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('@/assets/images/berry-app-logo-splash.png')}
        style={styles.logo}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  logo: {
    width: 75,
    height: 75,
  },

  appName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },

  tagline: {
    color: '#888888',
    fontSize: 13,
    letterSpacing: 1,
  },
});