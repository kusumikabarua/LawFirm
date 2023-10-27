import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './BasicGrid.module.css'




export default function BasicGrid({data}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid  container spacing={2}>

        <Grid  sx={{ position: 'relative' }}  item xs={8}>
        <h3 className={styles.title}>{data[0].title}</h3>
          <img className={styles.item} src={require(`../../assets/${data[0].image}`)}  alt ={data[0].title}/>
        </Grid>
        <Grid sx={{ position: 'relative' }} item xs={4}>
        <h3 className={styles.title1}>{data[1].title}</h3>
        <img className={styles.item} src={require(`../../assets/${data[1].image}`)}  alt ={data[1].title}/>
        </Grid>
        <Grid  sx={{ position: 'relative' }} item xs={4}>
        <h3 className={styles.title1}>{data[2].title}</h3>
        <img className={styles.item} src={require(`../../assets/${data[2].image}`)}  alt ={data[2].title}/>
        </Grid>
        <Grid sx={{ position: 'relative' }}  item xs={8}>
        <h3 className={styles.title}>{data[3].title}</h3>
        <img className={styles.item} src={require(`../../assets/${data[3].image}`)}  alt ={data[3].title}/>
        </Grid>
        <Grid  sx={{ position: 'relative' }} item xs={8}>
        <h3 className={styles.title}>{data[4].title}</h3>
          <img className={styles.item} src={require(`../../assets/${data[4].image}`)}  alt ={data[4].title}/>
        </Grid>
        <Grid  sx={{ position: 'relative' }} item xs={4}>
        <h3 className={styles.title1}>{data[5].title}</h3>
        <img className={styles.item} src={require(`../../assets/${data[5].image}`)}  alt ={data[5].title}/>
        </Grid>
      </Grid>
    </Box>
  );
}