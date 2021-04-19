import { useState } from 'react';
import Bekome from '../Work/Bekome';
import Chef from '../Work/Chef';
import Todo from '../Work/Todo';
import Gallery from '../Work/Gallery';
import Movie from '../Work/Movie';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

function WorkMobile() {
  const classes = useStyles();
  const [details, setDetails] = useState(0);

  const onDetailClick = (key) => {
    setDetails(key);
  };

  return (
    <div className="work-text-mobile">
      <p>Scroll left to right. Click for details.</p>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={1}>
          <GridListTile onClick={() => onDetailClick(1)}>
            <img
              src="./explore-view2.png"
              alt="screen cap from bekome app"
              className="work-img-mobile"
            />
          </GridListTile>
          <GridListTile onClick={() => onDetailClick(2)}>
            <img
              src="./movie-screen-2.png"
              alt="screen cap from movie database app"
              className="work-img-mobile"
            />
          </GridListTile>
          <GridListTile onClick={() => onDetailClick(3)}>
            <img
              src="./chef-screen2.png"
              alt="screen cap from condescending chef app"
              className="work-img-mobile"
            />
          </GridListTile>
          <GridListTile onClick={() => onDetailClick(4)}>
            <img
              src="./gallery-screen.png"
              alt="screen cap from photo gallery app"
              className="work-img-mobile"
            />
          </GridListTile>
          <GridListTile onClick={() => onDetailClick(5)}>
            <img
              src="./to-do-screen.png"
              alt="screen cap from to do list app"
              className="work-img-mobile"
            />
          </GridListTile>
        </GridList>
      </div>
      {details === 1 && <Bekome />}
      {details === 2 && <Movie />}
      {details === 3 && <Chef />}
      {details === 4 && <Gallery />}
      {details === 5 && <Todo />}
    </div>
  );
}

export default WorkMobile;
