import { COLOURS } from './Theme'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, StatusBar, TouchableWithoutFeedback, StyleSheet, Text, Image, TouchableOpacity, View, ImageBackground } from 'react-native'


const Home = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(true);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            <StatusBar backgroundColor={COLOURS.Light} barStyle={'dark-content'} />

            <View style={styles.container}>
                {/*  */}
                <MapView style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker" description="This is a marker." />
                </MapView>

                <View style={styles.icon_here}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.menu_area} onPress={() => navigation.navigate('Side_Navigator')}>
                        <Image source={require('../images/menu.png')} style={styles.menu} tintColor={COLOURS.black} />
                    </TouchableOpacity>
                </View>

                <Modal
                    onBackdropPress={() => setModalVisible(false)}
                    onBackButtonPress={() => setModalVisible(false)}
                    isVisible={isModalVisible}
                    swipeDirection="down"
                    onSwipeComplete={toggleModal}
                    animationIn="bounceInUp"
                    animationOut="bounceOutDown"
                    animationInTiming={900}
                    animationOutTiming={500}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={500}
                    style={styles.modal}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.center}>
                            <View style={styles.barIcon} />
                            <Text style={styles.text}>Welcome To My Bottom Sheet</Text>
                        </View>
                    </View>
                </Modal>
                {/*  */}
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContent: {
        backgroundColor: "white",
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: 400,
        paddingBottom: 20,
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    barIcon: {
        width: 60,
        height: 5,
        backgroundColor: "#bbb",
        borderRadius: 3,
    },
    text: {
        color: "#000",
        fontSize: 24,
        marginTop: 100,
    },
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 500,
    },

    // 

    menu: {
        height: 20,
        width: 20,
    },

    menu_area: {
        width: 40,
        height: 40,
        padding: 4,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.backgroundLight
    },

    icon_here: {
        // marginTop: 20,
        margin: 20,
        position: 'absolute',
        top: 0,
        bottom: 10,
    },

    map: {
        width: '100%',
        height: '100%',
        // backgroundColor:'#fff',
    },

})