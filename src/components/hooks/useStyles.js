import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    contactLinks: {
      marginTop: '70px',
      textAlign: 'left',
      paddingLeft: '80px',
    },
    contactLinksTop: {
      marginTop: '150px',
      textAlign: 'left',
      paddingLeft: '80px',
    },
  }));

  export default useStyles;