import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
      position: "relative"
    },
    flexBox: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    flexItem: {
      width: '400px'
    },
    cardImage: {
      objectFit: "contain !important"
    },
    alertBox: {
      position: 'absolute',
      width: '90%',
      top: '-60px',
      left: '50%',
      transform: 'translateX(-50%)'

    }
}))