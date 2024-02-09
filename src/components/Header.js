import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  menuItem: {
    backgroundColor: "black", 
    color: "white", 
    borderRadius: '5px', 
    border: '2px solid white', 
    padding: '5px 10px',
  },
}));

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate(`/`)}
              className={classes.title}
              variant="outlined"
              style={{
                width: 100,
                height: 20,
                marginRight: 15,
              }}
            >
              Crypto Hunter
            </Typography>
            <Select
              variant="outlined"
              MenuProps={{
                classes: { paper: classes.menuItem },
              }}
              className={classes.select}
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
