import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    linkItem: {
      fontSize: '1.2rem',
      color: 'white',
      textDecoration: 'none',
      padding: '0 10px',
      transition: 'all .2s ease-in-out',

      '&:hover': {
        color: 'black'
      }
    },

    MobilelinkItem: {
      fontSize: '1.2rem',
      color: 'black',
      textDecoration: 'none',
      padding: '0 10px',
      transition: 'all .2s ease-in-out',

      '&:hover': {
        color: 'black'
      }
    }

}))