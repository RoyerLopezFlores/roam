
import './App.css';
import VerticalAppBar from './main/VerticalAppBar';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1212re12', 
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0', 
      secondary: '#b0b0b0', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Tipografía moderna y formal
    h1: {
      fontSize: '2.5rem', 
      fontWeight: 600, 
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6, 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold', // Botones más prominentes
          borderRadius: 4, // Bordes redondeados para botones
        },
      },
    },
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{display:'flex'}}>
      
      <VerticalAppBar/>
      <div style={{color:'white', background:"red"}}>
        hola
      </div>
      Hola
    </Box>
    </ThemeProvider>
    
    
    
  );
}

export default App;
