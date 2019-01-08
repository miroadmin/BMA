import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import NavBar from './components/NavBar.js';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Android from '@material-ui/icons/Android';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import {compose, withProps} from 'recompose'
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
    fontSize: 24,
    height: '10px',
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});


class UI extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      loadCSS(
        'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        document.querySelector('#insertion-point-jss'),
      );
    }   
    render() {

      return (
          <div>

                <NavBar />
  {/*}               <CourseList />   */}
                <Typografi />   
                <Gombiky />  

        </div>
      )
    }
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function Gombiky(props) {

  const { classes } = props;
  const treti = red[500];

  return (
    <div >
      <Grid container justify="center"  spacing={8}>
          <Grid item xs={3}>
            <button><HomeIcon/></button>
          </Grid>
          <Grid item xs={2}>
            <HomeIcon color="error" style={{ fontSize: 30 }} />
            <button><HomeIcon color="disabled" fontSize="large"/></button>
            <button><DeleteOutlinedIcon style={{ color: treti}} /></button>
          </Grid>
          <Grid item xs={3}>
            <button><AccessAlarmIcon color='Primary'/></button>
            <button><DeleteIcon color='Secondary'/></button>
            <button><Icon /> dsfsdf </button>
            <button> <Icon className={classNames('fa fa-plus-circle')} /> </button>
            <button> <Icon className={classNames('fa fa-plus-circle')} /> 123456 </button>
            <button> <Android/> Android </button>
          </Grid>
      </Grid>
    </div>

  )
}

function Typografi() {

  return (
    <div>
      <Grid container spacing={0}>
          <Grid item xs={2}>
            <Typography variant="h4" gutterBottom color='Primary'>
              h4. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>

          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
    </Grid>
    </Grid>

   
    <Grid item xs={2}>
          <Typography variant="button" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" gutterBottom>
            caption text
          </Typography>
          <Typography variant="body1" gutterBottom align="right">
              Body 1 fdsfsd  fdsffffffffffffffffffffffff dfssfsdf
          </Typography>
            <Typography component="h2" variant="headline" gutterBottom>
              Headline
            </Typography>
      </Grid>
            <hr />
            <br />
    </div>
  )
  }

  Gombiky.propTypes = {
    classes: PropTypes.object.isRequired,
  };

 UI.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default compose(
  withStyles(styles, {name: 'Gombiky'})
)(UI);




