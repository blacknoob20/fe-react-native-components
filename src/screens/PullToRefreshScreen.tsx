import { useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../themes/appTheme'

export const PullToRefreshScreen = () => {
    const { theme: { colors, dark } } = useContext(ThemeContext);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
        }, 2000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={colors.text}
                    colors={[colors.background, colors.primary]}
                    tintColor={dark ? 'white' : 'back'}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />
            </View>
        </ScrollView>
    )
}
