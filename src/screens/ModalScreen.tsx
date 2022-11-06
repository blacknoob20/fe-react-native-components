import React, { useContext, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../themes/appTheme';

export const ModalScreen = () => {
    const { theme: { colors, dividerColor } } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(true);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Modals' />
            <Button
                title='Abrir Modal'
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType={'slide'}
                visible={isVisible}
                transparent
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: dividerColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: colors.card,
                            height: 200,
                            width: 200,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.25,
                            elevation: 10,
                            borderRadius: 5,
                        }}
                    >
                        <HeaderTitle title='Modal' />
                        <Text style={{ color: colors.text, marginBottom: 5 }}>Cuerpo de la modal</Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setIsVisible(false)}
                        />
                    </View>

                </View>
            </Modal>
        </View>
    )
}
