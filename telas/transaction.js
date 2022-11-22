import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import * as Permisions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default  class Transaction extends Component{
    constructor(){
        super()
        this.state={
            domState: 'normal',
            hasCameraPermisions: null,
            scanned: false,
            scannedData: "",
        }
    }
    getCameraPermissions = async(domState)=>{
        const {status} = await Permissions.askAsync (Permissions.CAMERA)
        this.setState({
            hasCameraPermisions: status==='granted',
            domState:domState,
            scanned: false
        })
    }
    barCodeScaned = async({type, data})=>{
        this.setState({
            scannedData: data,
            domState: 'normal',
            scanned: true
        })
    }
    render(){
        const {
            domState, hasCameraPermisions, scannedData, scanned
        } = this.state
        if(domState==='scanner'){
            return(
                <BarCodeScanner onBarCodeScanned={scanned?undefined: this.barCodeScaned} style = {StyleSheet.absoluteFillObject} />
            )
        }
        return(
            <View>
              <Text>
                    {hasCameraPermisions?scannedData: 'Solicite a permissão para a câmera do celular'}
                </Text>  
                <TouchableOpacity onPress={()=>{this.getCameraPermissions('scanner')}}>
                    <Text>
                        Digitalizar
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}