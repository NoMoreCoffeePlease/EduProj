import React,{useContext} from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native'; 
import {styles} from './styles/index'
import { ThemeContext } from '../../core/theme/themeContext';
import { withTheme } from '../../core/theme/withTheme';
import { LightTheme } from '../../core/theme/lightTheme';
import { darkTheme } from '../../core/theme/darkTheme';


const HomeScreen = (props) => {
    console.log(props, 'props')
    // const theme = useContext(ThemeContext); 
    
    return ( 
        <View style={props.styles.container}> 
            <Text>
                {props.text}
            </Text>
           <TouchableOpacity onPress={()=>{
               if(props.theme.dark)
               {
                props.changeTheme(LightTheme)
               }
               else props.changeTheme(darkTheme)
               }}>
                <Text> Schimba</Text>
           </TouchableOpacity>
        </View>
    )
}

export default withTheme(styles,HomeScreen);