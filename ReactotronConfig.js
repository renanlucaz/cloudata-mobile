import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';

// Se o ambiente for Expo, devemos usar um truque especial
const scriptURL = NativeModules.SourceCode.scriptURL;
const host = scriptURL.split('://')[1].split(':')[0]; // Obtém o IP da máquina

const reactotron = Reactotron
    .setAsyncStorageHandler(AsyncStorage) // Controle de AsyncStorage
    .configure({ host }) // Conecta ao Reactotron
    .useReactNative() // Plugins React Native
    .use(reactotronRedux()) // Plugin Redux
    .connect(); // Conecta com o Reactotron

console.tron = Reactotron; // Habilita o uso de console.tron.log

export default reactotron;