import React from 'react'
import { COLOURS } from './Theme'
import image_profile from '../images/profile.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View, } from 'react-native'

const Profile = ({ navigation }) => {

    const bacK_arrow_here = () => {
        navigation.goBack('')
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.Light} barStyle={'dark-content'} />
            <View style={styles.container}>

                <View style={styles.arrow_area}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.arrow_bg} onPress={bacK_arrow_here}>
                        <MaterialIcons name='arrow-back-ios' style={styles.back_arrow} />
                    </TouchableOpacity>
                    <Text style={styles.name}>Hemsworth</Text>
                    <TouchableOpacity style={styles.profile_row} activeOpacity={0.7} onPress={() => navigation.navigate('Edit_Profile')}>
                        <Image source={image_profile} style={styles.avatar_png} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.profit}>Do You want To Make Profit with us...</Text>
                </View>
                {/*  */}
                <TouchableOpacity style={styles.city_area} activeOpacity={0.9}>
                    <Image source={require('../images/car.png')} style={styles.car} resizeMode='contain' />
                    <View style={styles.name_offer}>
                        <Text style={styles.city_rides}>City Rides</Text>
                        <Text style={styles.city_offer}>Offer You fare</Text>
                    </View>
                    <MaterialIcons name='keyboard-arrow-right' style={styles.arrow_name} />
                </TouchableOpacity>
                {/*  */}
                <TouchableOpacity style={styles.city_area} activeOpacity={0.9}>
                    <Image source={require('../images/destination.png')} style={styles.destination} resizeMode='cover' />
                    <View style={styles.name_offer}>
                        <Text style={styles.city_rides}>City to City</Text>
                        <Text style={styles.city_offer}>Find some passengers</Text>
                    </View>
                    <MaterialIcons name='keyboard-arrow-right' style={styles.arrow_name} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.your_area_city} activeOpacity={0.9}>
                    <View style={styles.your_city}>
                        <Text style={styles.city}>Tokoyo</Text>
                        <Text style={styles.city_change}>Change the city</Text>
                    </View>

                    <TouchableOpacity style={styles.map_bg} activeOpacity={0.9}>
                        <Image source={require('../images/map.png')} style={styles.map} resizeMode='cover' tintColor={COLOURS.white} />
                    </TouchableOpacity>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({

    city: {
        fontSize:15,
        paddingBottom:5,
        color: COLOURS.black,
        fontFamily: 'Ubuntu-Bold',
    },

    city_change: {
        fontSize:13,
        paddingBottom:5,
        color: COLOURS.grey,
        fontFamily: 'Ubuntu-Medium',
    },

    your_city: {
        alignItemsL: 'center',
        flexDirection: 'column',
    },

    your_area_city: {
        elevation: 5,
        borderRadius: 5,
        paddingVertical: 15,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },
    map: {
        width: 20,
        height: 20,
        padding: 10,
    },

    map_bg: {
        width: 35,
        height: 35,
        elevation: 6,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.berry,
    },

    city_offer: {
        color: COLOURS.grey,
        paddingBottom: 5,
        fontFamily: 'Ubuntu-Medium',
    },

    city_rides: {
        color: COLOURS.black,
        paddingBottom: 5,
        fontFamily: 'Ubuntu-Medium',
    },

    name_offer: {
        width: 170,
        flexDirection: 'column',
    },

    arrow_name: {
        fontSize: 25,
        paddingRight: 5,
        color: COLOURS.black,
    },

    car: {
        height: 80,
        width: 90,
    },


    destination: {
        width: 60,
        height: 60,
        marginVertical: 10,
        marginHorizontal: 10,
    },

    city_area: {
        elevation: 4,
        borderRadius: 5,
        paddingVertical: 2,
        marginBottom: '5%',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },

    profit: {
        width: '80%',
        fontSize: 18,
        marginTop: '3%',
        lineHeight: 25,
        paddingBottom: '8%',
        paddingHorizontal: 20,
        color: COLOURS.black,
        fontFamily: 'Ubuntu-Medium',
    },

    name: {
        fontSize: 18,
        color: COLOURS.black,
        fontFamily: "Ubuntu-Medium",
    },

    avatar_png: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },

    back_arrow: {
        paddingLeft: 3,
        fontSize: 17,
        color: COLOURS.black,
    },

    arrow_bg: {
        width: 40,
        height: 40,
        padding: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.backgroundLight,
    },

    arrow_area: {
        marginVertical: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },
})