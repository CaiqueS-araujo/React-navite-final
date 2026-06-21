import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const MenuContent = styled.View(({theme}) => ({
    backgroundColor: theme.LightMode.BluePattern.colors.title,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
}));

export const Menu = styled.Text(({ theme }) => ({
    fontFamily: 'Jersey10_400Regular',
    fontSize: theme.size.l,
    color: theme.LightMode.Basic.colors.white,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
}));

// Container dos dois botões
export const PagesContainer = styled.View({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    gap: 20,
});

export const Page1 = styled(ImageBackground).attrs({
    source: require('../../../assets/images/backgroundButton.png'),
})({
    width: 160,
    height: 80,

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    borderRadius: 15,
});

export const TextPage1 = styled.Text(({ theme }) => ({
    fontFamily: 'Jersey10_400Regular',
    fontSize: theme.size.l,
    color: theme.LightMode.Basic.colors.white,
}));


export const Page2 = styled(ImageBackground).attrs({
    source: require('../../../assets/images/backgroundButton.png'),
})({
    width: 160,
    height: 80,

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    borderRadius: 15,

});


export const TextPage2 = styled.Text(({ theme }) => ({
    fontFamily: 'Jersey10_400Regular',
    fontSize: theme.size.l,
    color: theme.LightMode.Basic.colors.white,
}));


export const Page3 = styled(ImageBackground).attrs({
    source: require('../../../assets/images/backgroundButton.png'),
})({
    width: 160,
    height: 80,

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    borderRadius: 15,

});


export const TextPage3 = styled.Text(({ theme }) => ({
    fontFamily: 'Jersey10_400Regular',
    fontSize: theme.size.l,
    color: theme.LightMode.Basic.colors.white,
}));


export const Main = styled.View(({theme}) => ({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
    flexWrap: 'wrap',
    marginTop: 90,
}));