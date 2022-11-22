import React, {Component} from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Transaction from './telas/transaction'
import Search from './telas/search'

const Tab = createBottomTabNavigator()

export default class BottomTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = 'Transação' component  = {Transaction}>
                        
                    </Tab.Screen>
                    <Tab.Screen name = 'Pesquisa' component={Search}>

                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}