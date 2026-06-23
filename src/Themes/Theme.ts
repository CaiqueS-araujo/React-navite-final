//Project's Design System

export const theme = {
//Radius' sizes
radii: {
    xs: 3,
    s: 6,
    m: 10,
    l: 20,
    xl: 40,
    xxl: 60,
},

//Pattern's sizes
size: {
    xs: 10,
    s: 20,
    m: 30,
    l: 45,
    xl: 70,
    xxl: 90,
},

//Pattern color stystem (light)
LightMode: {
    YellowPattern:{
        colors:{
            title: '#FBFAF4',
            subTitle: '#EDE59B',
            strongText: '#EBD937',
            weakText: '#5B5416', 
            strongBackGround: '#EEDE52',
            weakBackGround: '#B1A116',
        }
    },
    BluePattern:{
        colors:{
            title: '#5B86C8',
            subTitle: '#ABBFDD',
            strongText: '#3D6EB8',
            weakText: '#23344D', 
            strongBackGround: '#7FA0D1',
            weakBackGround: '#19222E', 
        }
    },
    RedPattern:{
        colors:{
            title: '#E9453A',
            subTitle: '#ECA29C',
            strongText: '#DC2618',
            weakText: '#AF2218', 
            strongBackGround: '#811F18',
            weakBackGround: '#351513',
        }
    },
    Basic:{
        colors:{
            white: '#fff',
            grey: '#808080',
            black: '#000',
        }
    },
},

DarkMode: {
    YellowPattern:{
    colors:{
        title: '#FFD866',
        subTitle: '#E6C75A',
        strongText: '#C8A72C',
        weakText: '#8A772A',
        strongBackGround: '#3D3210',
        weakBackGround: '#211A08',
    }
    },
    BluePattern:{
    colors:{
        title: '#7BC7FF',
        subTitle: '#5FAFE0',
        strongText: '#3E87C4',
        weakText: '#6E8CA8',
        strongBackGround: '#102A40',
        weakBackGround: '#081723',
    }
    },
    RedPattern:{
    colors:{    
        title: '#FF6B6B',
        subTitle: '#E55C5C',
        strongText: '#C63A3A',
        weakText: '#A85A5A',
        strongBackGround: '#3A1212',
        weakBackGround: '#1F0909',
    }
    },
    Basic:{
    colors:{
        white: '#fff',
        black: '#000',
    }
    },
}
}

export type ThemeType = typeof theme;