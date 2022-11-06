import { FlatList, View } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItem';
import { styles } from '../themes/appTheme';

export const HomeScreen = () => {

    return (
        <View
            style={{ flex: 1, ...styles.globalMargin }}
        >
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title='Opciones del menu' />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    )
}
