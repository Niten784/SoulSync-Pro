export default {
  expo: {
    name: "SoulSync Pro",
    slug: "soulsync-pro",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.niten.soulsyncpro"
    },
    android: {
      compileSdkVersion: 35,
      targetSdkVersion: 35,
      buildToolsVersion: "35.0.0",
      package: "com.niten.soulsyncpro",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#000000"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-font",
      "expo-splash-screen"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      eas: {
        projectId: "fcc4cb82-fc3f-47a8-a142-58bec8a67c70"
      }
    }
  }
}
