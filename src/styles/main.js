import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const useStyles = makeStyles((theme) => ({
  whiteBg: {
    backgroundColor: 'white',
    color: 'black',
    // display:'flex'
  },
  marginRg: {
    marginRight: 'auto',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  navBarItems: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
    marginBottom: '3rem',
    paddingLeft:'2rem',
    paddingRight:'2rem'
  },
  media: {
    height: 250,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    textAlign: 'right',
  },
  favBtn: {
    backgroundColor: 'white',
    marginTop: '0.7rem',
    marginRight: '0.7rem',
  },
  classifiedBtn: {
    backgroundColor: 'purple',
    color:'white',
    borderRadius:'2rem'
    // marginTop: '0.7rem',
    // marginRight: '0.7rem',
  },
  margin:{
    padding:'2rem',
    paddingTop:0
  }
}));

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: purple[500],
    },
  },
});
