import React from "react";
import Detail from "./screens/detailscreen";
import Payment from "./screens/paymentscreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import tab from "./screens/Navigation/navtab";
import football from "./screens/football";
import Alexanderc from "./screens/alexander";
import Austine from "./screens/austine";
import bax from "./screens/baxtone";
import banice from "./screens/Banice";
import Calton from "./screens/Caltone";
import derrick from "./screens/Derrick";
import edwin from "./screens/Edwin";
import ethens from "./screens/Ethens";
import godwin from "./screens/Godwin";
import hashim from "./screens/Hashim";
import irene from "./screens/Irene";
import joel from "./screens/Joel";
import kerio from "./screens/Kerio";
import zachariah from "./screens/Zachariah";
import zandu from "./screens/Zandu";
import zun from "./screens/Zun";
import bake from "./screens/bake";
import andre from "./screens/andre";
import Riana from "./screens/riana";
import Lina from "./screens/lina";
import sammy from "./screens/sammy";
import oscar from "./screens/oscar";
import ouma from "./screens/ouma";
import ooz from "./screens/ooz";
import lorn from "./screens/lorn";
import bern from "./screens/bern";
import Ajuot from "./screens/ajuot";
import Chessi from "./screens/chess";
import Alice from "./screens/Alice";
import Amigo from "./screens/amigo";
import Ariel from "./screens/ariel";
import Alfons from "./screens/alred";
import Janelle from "./screens/janelle";
import Lawntennis from "./screens/lawn";
import Yego from "./screens/Yego";
import Austago from "./screens/austago";
import Mavo from "./screens/mavo";
import Felo from "./screens/felo";
import Janice from "./screens/janice";
import Serena from "./screens/serene";
import Luxe from "./screens/luxe";
import Nzioki from "./screens/nzioki";
import Swimming from "./screens/swimming";
import Gomez from "./screens/gomez";
import Ogulu from "./screens/Ogulu";
import Role from "./screens/role";
import Navy from "./screens/navy";
import Kibet from "./screens/kibet";
import Wangari from "./screens/wangari";
import Skate from "./screens/skate";
import Clarissa from "./screens/clarissa";
import Joan from "./screens/joan";
import John from "./screens/john";
import Emmanuel from "./screens/emmanuel";
import Lyne from "./screens/lyne";
import Obura from "./screens/Obura";
import Tuesday from "./screens/days/tuesday";
import Wednesday from "./screens/days/wednesday";
import Thursday from "./screens/days/thursday";
import Friday from "./screens/days/friday";
import Saturday from "./screens/days/saturday";
import Sunday from "./screens/days/sunnday";




const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={tab} options={{animation: 'slide_from_bottom'}}/>
      <Stack.Screen name="Payment" component={Payment} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="Detail" component={Detail} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="football coaches" component={football} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    }}/>

    <Stack.Screen name="Basketball Coaches" component={bake} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="John Mwangi" component={John} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Yvette Obura" component={Obura} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Lyne Ngugi" component={Lyne} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Emmanuel Albert" component={Emmanuel} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Luisa Clarissa" component={Clarissa} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Tue" component={Tuesday} options={{animation: 'slide_from_bottom', headerShown: false, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="wed" component={Wednesday} options={{animation: 'slide_from_bottom', headerShown: false, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="thur" component={Thursday} options={{animation: 'slide_from_bottom', headerShown: false, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="fri" component={Friday} options={{animation: 'slide_from_bottom', headerShown: false, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="sat" component={Saturday} options={{animation: 'slide_from_bottom', headerShown: false, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="sun" component={Sunday} options={{animation: 'slide_from_bottom', headerShown: false, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Joan Wayua" component={Joan} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Chess Coaches" component={Chessi} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    }}/>

<Stack.Screen name="Skate Coaches" component={Skate} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    }}/>

      <Stack.Screen name="Alexander Fagason" component={Alexanderc} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>


 <Stack.Screen name="Selena Gomez" component={Gomez} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Ronald Ogulu" component={Ogulu} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Emmanuel Role" component={Role} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    
<Stack.Screen name="Prudence Navy" component={Navy} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Espar Kibet" component={Kibet} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>


<Stack.Screen name="Ivy Wangari" component={Wangari} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
       <Stack.Screen name="Austine Monari" component={Austine} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Alvara Yego" component={Yego} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
<Stack.Screen name="Swimming Coaches" component={Swimming} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

    <Stack.Screen name="Marteen Austago" component={Austago} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="kelly Mavo" component={Mavo} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Felix Maina" component={Felo} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Janice Jeruto" component={Janice} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Maxeen nzioki" component={Nzioki} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Serena Williams" component={Serena} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Zimmermann Luxemberg" component={Luxe} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Reymasterio Amigo" component={Amigo} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    
    <Stack.Screen name="Janelle Jameper" component={Janelle} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="LawnTennis Coaches" component={Lawntennis} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Ariel Kibet" component={Ariel} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Baxtone Lore" component={bax} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Alfons Alred" component={Alfons} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Alice Mwehaki" component={Alice} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Banice Lozo" component={banice} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Caltone Waihiga" component={Calton} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Derrick Wafula" component={derrick} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Edwin Naitore" component={edwin} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Ethens Ignatius" component={ethens} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Godwin Ngigi" component={godwin} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Hashim Shaffi" component={hashim} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Irene Jeroich" component={irene} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Joel Walon" component={joel} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Kerio Kerich" component={kerio} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Zachariah Alex" component={zachariah} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Zandu Zalendo" component={zandu} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/><Stack.Screen name="Zun Zan" component={zun } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>

<Stack.Screen name="Alexina Andre" component={andre } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>


<Stack.Screen name="Berlin Bern" component={bern } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Austo Lorn" component={lorn } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="ozil Ooz" component={ooz } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Linzi Ouma" component={ouma } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Oscar Nzamalu" component={oscar } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Sammy Okuro" component={sammy } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Lina zai" component={Lina} options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Riana Ozi" component={Riana } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>
    <Stack.Screen name="Ajuot ajuor" component={Ajuot } options={{animation: 'slide_from_bottom', headerShown: true, headerStyle: {
      backgroundColor: 'red',
       // Change the background color here
    },
    headerTitleStyle: {
      fontWeight: 'bold', // Change the font weight here
      color: 'white',
      fontSize:22 // Change the font color here
    },
    
    }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;