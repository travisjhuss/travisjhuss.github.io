import { useState } from 'react';
import Bekome from '../Work/Bekome';
import Chef from '../Work/Chef';
import Todo from '../Work/Todo';
import Gallery from '../Work/Gallery';
import Movie from '../Work/Movie';
import Details from '../Work/Details';
// MUI
import { Grid, GridList, GridListTile } from '@material-ui/core';
// Custom Hook
import useStyles from '../hooks/useStyles';

export default function WorkDesktop({openLink}) {
  const classes = useStyles();
  const [hover, setHover] = useState(0);

  const onHover = (key) => {
    setHover(key);
  };

  return (
    <>
      <Grid item xs={6}>
        {hover === 0 && <Details />}
        {hover === 1 && <Bekome />}
        {hover === 2 && <Movie />}
        {hover === 3 && <Chef />}
        {hover === 4 && <Gallery />}
        {hover === 5 && <Todo />}
      </Grid>
      <Grid item xs={6}>
        <center>
          <GridList
            cellHeight={75}
            className={classes.gridList}
            cols={6}
            rows={6}
          >
            <GridListTile
              key="1"
              cols={4}
              rows={2}
              onMouseEnter={() => onHover(1)}
              onMouseLeave={() => onHover(0)}
              onClick={() =>
                openLink(
                  'https://github.com/travisjhuss/bekome-prime-group-project'
                )
              }
            >
              <img
                src="./explore-view2.png"
                alt="screen cap from bekome app"
                className="work-img"
              />
            </GridListTile>
            <GridListTile
              key="2"
              cols={2}
              rows={2}
              onMouseEnter={() => onHover(2)}
              onMouseLeave={() => onHover(0)}
              onClick={() =>
                openLink('https://github.com/travisjhuss/movie-collection')
              }
            >
              <img
                src="./movie-screen-2.png"
                alt="screen cap from movie database app"
                className="work-img"
              />
            </GridListTile>
            <GridListTile
              key="3"
              cols={6}
              rows={2}
              onMouseEnter={() => onHover(3)}
              onMouseLeave={() => onHover(0)}
              onClick={() =>
                openLink(
                  'https://github.com/travisjhuss/the-condescending-chef'
                )
              }
            >
              <img
                src="./chef-screen2.png"
                alt="screen cap from condescending chef app"
                className="work-img"
              />
            </GridListTile>
            <GridListTile
              key="4"
              cols={2}
              rows={2}
              onMouseEnter={() => onHover(4)}
              onMouseLeave={() => onHover(0)}
              onClick={() =>
                openLink(
                  'https://github.com/travisjhuss/photo-gallery-with-react'
                )
              }
            >
              <img
                src="./gallery-screen.png"
                alt="screen cap from photo gallery app"
                className="work-img"
              />
            </GridListTile>
            <GridListTile
              key="5"
              cols={4}
              rows={2}
              onMouseEnter={() => onHover(5)}
              onMouseLeave={() => onHover(0)}
              onClick={() =>
                openLink('https://github.com/travisjhuss/to-do-list-app')
              }
            >
              <img
                src="./to-do-screen.png"
                alt="screen cap from to do list app"
                className="work-img"
              />
            </GridListTile>
          </GridList>
        </center>
      </Grid>{' '}
    </>
  );
}
