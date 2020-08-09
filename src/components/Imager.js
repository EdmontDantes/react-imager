import React from 'react'
// import images from './data/ImagesData'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '95vw'
  },
  gridList: {
    width: '500',
    height: '450'
  },
  imageThumbnailClass: {
    width: '100%',
    objectFit: 'contain',
    cursor: 'pointer'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  mainContentImage: {
    width: '750px',
    height: 'auto'
  },
  mainButtonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '30px'
  },
  bottomButtonRandom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start'
  },
  bottomButtonFwdBcwds: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end'
  }
}));


const Imager = (props) => {

    const classes = useStyles();
    return(
      <div className={classes.root}>
      <h1>Imager</h1>
      <div className={classes.mainContent}>
      
      <img src={props.mainContentImage} className={classes.mainContentImage} alt='...' />
      <div className={classes.mainButtonRow}>
      
        <div className={classes.bottomButtonRandom}>
          <Button variant="contained" color="primary" onClick={() => {
            props.handleRandomImage()
          }}>
          Random
          </Button>
        </div>
        <div className={classes.bottomButtonFwdBcwds}>
          <Button variant="contained" color="secondary" onClick={() => {
            props.handleLeftScrollImage()
          }}>
          &lt;
          </Button>
          <Button variant="contained" color="secondary" onClick={() => {
            props.handleRightScrollImage()
          }}>
          &gt;
          </Button>
        </div>

      </div>
      </div>



      <GridList cellHeight={'240'} className={classes.gridList} cols={3} rows={3}>

        {props.thumbnails.map((tile, idx) => (
          <GridListTile key={tile}>
            <img src={tile} alt='...' className={classes.imageThumbnailClass} onClick={() => {
              props.handleThumbnailClick(tile)
            }}/>

            
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
  }


export default Imager