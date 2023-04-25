import * as Font from 'expo-font';

export async function loadFonts() {
  await Font.loadAsync({
    'Inter-Regular': require('./Inter/static/Inter-Regular.ttf'),
    'Inter-Medium': require('./Inter/static/Inter-Medium.ttf'),
    'Inter-Bold': require('./Inter/static/Inter-Bold.ttf'),
    'Inter-SemiBold': require('./Inter/static/Inter-SemiBold.ttf'),
  }); //D:\SelfProjects\2023_NativeApp\Task\Designs\design4\assets\fonts\Inter\static
}
