import { useContext, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../themes/appTheme';

interface Form {
    name: string;
    email: string;
    phone: string;
    isSuscribe: boolean;
}

export const TextInputScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const { isSuscribe, form, onChange } = useForm<Form>({
        name: '',
        email: '',
        phone: '',
        isSuscribe: false,
    });
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    // });

    // const onChange = (value: string, field: string) => {
    //     setForm({
    //         ...form,
    //         [field]: value,
    //     });
    // }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title={'TextInputs'} />
                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholder={'Ingrese su nombre'}
                            autoCorrect={false}
                            autoCapitalize={'words'}
                            onChangeText={value => onChange(value, 'name')}
                        />
                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholder={'Ingrese email'}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            keyboardType={'email-address'}
                            keyboardAppearance={'light'}
                            onChangeText={value => onChange(value, 'email')}
                        />

                        <View style={{
                            ...stylesScreen.switchRow,
                        }}>
                            <Text style={{
                                ...stylesScreen.switchText,
                                color: colors.text,
                            }}>Suscribirme?</Text>
                            <CustomSwitch
                                isOn={isSuscribe}
                                onChange={value => onChange(value, 'isSuscribe')}
                            />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholder={'Ingrese su telefono'}
                            keyboardType={'phone-pad'}
                            onChangeText={value => onChange(value, 'phone')}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
        color: 'black',
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchText: {
        color: 'black',
        fontSize: 25
    },
});