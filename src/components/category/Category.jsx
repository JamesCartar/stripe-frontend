import React from 'react';
import Container from '@mui/material/Container';
// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// alert box
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import { 
  addToCard,
  removeFromCard,
  clearCard,
  showError,
} from '../../context/MainContextActions';

import useStyles from './style';
import { mainContext } from '../../context/MainContext';

function Category({ products }) {
  const classes = useStyles();

  const { dispatch, state, hideMessageBox } = React.useContext(mainContext);


  const handleAddToCard = (product) => {
    const isInclude = state.cardProducts?.some(productInCard => productInCard.id === product.id);
    if(isInclude) {
      dispatch(showError('Already in the card !'));
      hideMessageBox();
    } else {
      dispatch(addToCard({product, message: 'Successfully added to the card !'}));
      hideMessageBox();
    }
  }
  

  const productGridEl = products?.map((product) => (
    <Card className={classes.flexItem} key={product.id}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        className={classes.cardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title.slice(0, 25) + '...'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.slice(0, 200) + '...'}
        </Typography>
      </CardContent>
      <CardActions className={classes.flexBox}>
        <Typography variant="subtitle1">$ {product.price}</Typography>
        <Button onClick={() => handleAddToCard(product)} size="small" ml={'auto'}>Add to Card</Button>
      </CardActions>
    </Card>
  ))


  return (
    <Container maxWidth="xl" className={classes.container}>
      {state.isShown && <Stack className={classes.alertBox}>
        {state.message ? 
        <Alert variant="outlined" severity="success">
          {state.message}
        </Alert> : 
        <Alert variant="outlined" severity="error">
          {state.error}
        </Alert>}
      </Stack>}
      <Box className={classes.flexBox} mt={10}>
        { productGridEl }
      </Box>
    </Container>
  )
}

export default Category
