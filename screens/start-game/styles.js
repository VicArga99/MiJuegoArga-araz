import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        padding: 10, 
      },
    
      title:{
       color: theme.colors.textColor,
       fontSize: theme.fontSize.large,
    },

    subtitle:{
        fontSize: theme.fontSize.medium,
     },

    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: theme.margin.medium,

     },
     
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 50,
     },

     input:{
        width: 40,
        textAlign: 'center',
        fontSize: theme.fontSize.xLarge,
        height: 60,
     },

});