import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
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
    gridList2: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
  }));

  export default useStyles;