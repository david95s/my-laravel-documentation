import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    backgroundHeader: "#ffffff",
    backgroundHeaderAside: "#f7fffe",
    closeAsideColor: "tomato",
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "400": "rgba(153, 153, 153, 0.5)",
      "300": "#DADADA",
      "100": "#F5F8FA"
    },
    yellow: {
      "400": "#FFBA08",
      "300": "rgba(255, 186, 8,0.5)"
    }
  },
  fonts: {
    heading: 'Arial',
    body: 'Arial'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700'
      }
    }
  }
});

// backgroundHeader
export const themeDark = extendTheme({
  colors: {
    backgroundHeader:  "#07080c",
    backgroundHeaderAside: "#111418",
    laravelColor: "#ff2d20",
    closeAsideColor: "tomato",
    yellow: {
      "400": "#FFBA08",
      "300": "rgba(255, 186, 8,0.5)"
    },
    colorText: '#ccc'
  },
  fonts: {
    heading: 'Arial',
    body: 'Arial'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: '#ffff',
      }
    }
  }
});