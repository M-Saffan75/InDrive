import React from 'react'
import { COLOURS } from './Theme'
import image_profile from '../images/profile.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'

const Side_Navigator = ({ navigation }) => {

    const bacK_arrow_here = () => {
        navigation.goBack('')
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.Light} barStyle={'dark-content'} />

            <ScrollView style={styles.container}>

                {/*  */}
                <View style={styles.arrow_area}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.arrow_bg} onPress={bacK_arrow_here}>
                        <MaterialIcons name='arrow-back-ios' style={styles.back_arrow} />
                    </TouchableOpacity>
                </View>

                {/*  */}
                <View style={styles.profile_box}>
                    <View style={styles.profile_all_in_one}>
                        {/* <Image source={require('../images/star.png')} style={styles.star} /> */}

                        <Image source={require('../images/profile.jpg')}
                            style={styles.profile_image} resizeMode='contain' />
                        <TouchableOpacity activeOpacity={0.6} >
                        <FontAwesome5 name='plus' style={styles.plus_icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <FontAwesome5 name='share-alt' style={styles.icon_share} />
                        <TouchableOpacity activeOpacity={0.6} style={styles.profile_edit} onPress={() => navigation.navigate('Profile')}>
                            <FontAwesome5 name='pencil-alt' style={styles.pencil_icon} />
                            <Text style={styles.profile_email}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*  */}

                <View style={styles.screens_name}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('City')}>
                        <View style={styles.user_here_box}>
                            <MaterialCommunityIcons name='car-limousine' style={styles.user_icon} />
                            <Text style={styles.user_name}>City</Text>
                        </View>
                        <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Request_History')}>
                        <View style={styles.user_here_box}>
                            <MaterialCommunityIcons name='clock-time-four-outline' style={styles.user_icon} />
                            <Text style={styles.user_name}>Request History</Text>
                        </View>
                        <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('City_to_City')}>
                        <View style={styles.user_here_box}>
                            <Fontisto name='world-o' style={styles.user_icon} />
                            <Text style={styles.user_name}>City to City</Text>
                        </View>
                        <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Safety')}>
                        <View style={styles.user_here_box}>
                            <MaterialCommunityIcons name='shield-half-full' style={styles.user_icon} />
                            <Text style={styles.user_name}>Safety</Text>
                        </View>
                        <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Setting')}>
                        <View style={styles.user_here_box}>
                            <AntDesign name='setting' style={styles.user_icon} />
                            <Text style={styles.user_name}>Settings</Text>
                        </View>
                        <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Faq')}>
                        <View style={styles.user_here_box}>
                            <MaterialIcons name='error-outline' style={styles.user_icon} />
                            <Text style={styles.user_name}>FAQ</Text>
                        </View>
                        <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Support')}>
                        <View style={styles.user_here_box}>
                            <MaterialCommunityIcons name='message-processing-outline' style={styles.user_icon} />
                            <Text style={styles.user_name}>Support</Text>
                        </View>
                        <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                    </TouchableOpacity>
                </View>

                <View style={styles.border_area}>
                    <Text style={styles.border}></Text>
                </View>

                <View>
                    <View style={styles.btn_here_area}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.register_btn} >
                            <Text style={styles.register_name}>Driver Mode</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.socail_area}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.social_area_bg}>
                        <Image source={require('../images/google.png')} style={styles.icon_social} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.social_area_bg}>
                        <Image source={require('../images/instagram.png')} style={styles.icon_social} />
                    </TouchableOpacity>
                </View>
                {/*  */}

            </ScrollView>
        </>
    )
}

export default Side_Navigator

const styles = StyleSheet.create({


    icon_share: {
        fontSize: 27,
        color: COLOURS.grey,
    },

    profile_edit: {
        // width: 100,
        marginTop: 20,
        borderRadius: 5,
        paddingVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: COLOURS.berry,
        justifyContent: 'space-between',
    },

    pencil_icon: {
        paddingRight: 7,
        color: COLOURS.white,
    },

    profile_email: {
        fontSize: 12,
        letterSpacing: .5,
        color: COLOURS.white,
        fontFamily: 'Ubuntu-Medium',
    },

    profile_box: {
        padding: 20,
        elevation: 1,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },

    profile_all_in_one: {
        flexDirection: 'column'
    },

    star: {
        top: 2,
        right: 3,
        zIndex: 2,
        width: 25,
        height: 25,
        position: 'absolute',
        color: COLOURS.orange,
    },

    profile_image: {
        width: 120,
        height: 120,
        elevation: 41,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profile_container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },

    plus_icon: {
        right: 5,
        zIndex: 2,
        width: 25,
        bottom: 2,
        height: 25,
        fontSize: 12,
        borderRadius: 100,
        position: 'absolute',
        textAlign: 'center',
        color: COLOURS.white,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.black,
    },

    // 
    // 
    // 
    social_area_bg: {
        padding: 10,
        borderRadius: 100,
        marginHorizontal: 10,
        backgroundColor: COLOURS.backgroundLight
    },

    icon_social: {
        height: 25,
        width: 25,
    },

    socail_area: {
        marginVertical: '5%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    border_area: {
        marginHorizontal: 10,
    },

    border: {
        height: 1.5,
        width: '100%',
        marginTop: 20,
        backgroundColor: COLOURS.Lightgrey,
    },

    btn_here_area: {
        marginTop: '3%',
        marginBottom: '2%',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    register_btn: {
        width: '100%',
        marginTop: '5%',
        borderRadius: 8,
        paddingVertical: 15,
        backgroundColor: COLOURS.berry,
    },

    register_name: {
        fontSize: 15,
        textAlign: 'center',
        color: COLOURS.white,
        textTransform: 'uppercase',
        fontFamily: 'Ubuntu-Medium',
    },


    user_detail: {
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },

    user_here_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    user_icon: {
        fontSize: 22,
        paddingRight: 20,
        color: COLOURS.berry,
    },

    user_name: {
        fontSize: 14,
        letterSpacing: .2,
        color: COLOURS.black,
        fontFamily: 'Ubuntu-Medium',
    },

    user_arrow: {
        fontSize: 25,
        color: COLOURS.grey,
    },

    avatar_png: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },

    name_profile: {
        fontSize: 15,
        letterSpacing: .7,
        color: COLOURS.black,
        fontFamily: 'Ubuntu-Medium',
    },

    arrow_name: {
        fontSize: 25,
        color: COLOURS.black,
    },

    screens_name: {
        marginTop: '10%',
    },

    profile_row: {
        width: 170,
        // paddingHorizontal:20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    profile_area: {
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
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
        width: '100%',
        marginTop: '10%',
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },
})