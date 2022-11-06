import { useContext } from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../themes/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin",]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman",]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama",]
  }
];

export const CustomSectionListScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>

      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}

        ListHeaderComponent={<HeaderTitle title='Section List' />}
        // ListFooterComponent={<HeaderTitle title={'Total de casas ' + casas.length} />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 25 }}>
            <HeaderTitle title={'Total de casas ' + casas.length} />
          </View>
        )}

        renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={
          ({ section }) => (
            <View style={{ backgroundColor: colors.background }}>
              <HeaderTitle title={section.casa}></HeaderTitle>
            </View>
          )
        }
        renderSectionFooter={
          ({ section }) => (
            <HeaderTitle title={'Total ' + section.data.length} />
          )
        }
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
