import React,{ Component,useContext,useState,useEffect } from 'react';
import { Dimensions,StyleSheet, TextInput,Text, View,ImageBackground, Image,SafeAreaView,TouchableOpacity  } from 'react-native';
import LogOutcomp from './LogOutcomp';
import temp from './temp'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';



const { width, height } = Dimensions.get('window');
const Drawer = createDrawerNavigator();


function CustomDrawerContent({ navigation ,updateAuthState}) {
  const [name, setName] = useState('Dhanvin');
  useEffect(() => {
    console.log("entered TN_Navstack")
    getName();
    //fetch Property related to user
}, [])
  async function getName(){
    try {
      const currentUserInfo = await fetchUserAttributes();
      setName( currentUserInfo['name']);

    } catch (err) {
      console.log('error fetching user info: ', err);
    }
  }
  
  return (
    <DrawerContentScrollView  >
      <View style={{padding:15, borderBottomColor: '#005DAF', borderBottomWidth: 1,  width: width - 50,}}>
      <Text style={{fontSize:22,fontWeight:'bold',color:'#005DAF',paddingBottom:30,}}>Welcome Back, </Text>
       <Text style={{fontSize:20,fontWeight:'bold'}}>USER : {name}</Text>    
      </View>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('temp')}
      />
      <DrawerItem
        label="Tenancy"
        onPress={() => navigation.navigate('temp')}
      />
      <DrawerItem
        label="ServiceRequest"
        onPress={() => navigation.navigate('temp')}
      />
       <DrawerItem
        label="Logout"
        onPress={() => navigation.navigate('LogOutcomp')}
      />
    </DrawerContentScrollView>
  );
}





// export default function DrawerScreen(props) {
    
//     return (
//         // <Drawer.Navigator initialRouteName="TN_InviteCode"
//         // screenOptions={{headerShown:false}}
//         //  drawerContent={props => <CustomDrawerContent {...props}  />}>
           
//         //    {/* {DBdata==null?:null} */}
//         //    <Drawer.Screen name="InviteCodeScreen" component={InviteCodeScreen} />
            
//         //     <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
//         //     <Drawer.Screen name="PropertiesDetailsScreen" component={PropertiesDetailsScreen} />
//         //     <Drawer.Screen name="temp" component={temp} />
//         //     <Drawer.Screen name="LogOutcomp">
//         //       {screenProps => (
//         //         <LogOutcomp {...screenProps} updateAuthState={props.updateAuthState} />
//         //       )} 
//         //     </Drawer.Screen>

//         // </Drawer.Navigator>
//     );
      
//   }