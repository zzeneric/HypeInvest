import { useEffect, useState } from 'react';

// material-ui
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'mui-image'

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => (
    
    <MainCard>
        <center>
            <Image src="https://www.gannett-cdn.com/-mm-/27bc5bfd67b6e09a7c240d2b85dae3f0f2cc083b/c=0-188-2000-1313/local/-/media/2021/03/28/USATODAY/usatsports/stock-market-image-getty.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp 2x" 
            height="30%"
            width="100%"
            fit="cover"
            duration={3000}
            easing="cubic-linear(0.7, 0, 0.6, 1)"
            shift={null}
            distance="100px"
            shiftDuration={900}
            bgcolor="inherit"
            
            />
        </center>
        <br/><br/>
        

        <MainCard>
            <Typography variant="h3"> <center>
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                qui officiate descent molls anim id est labours.
            </center> </Typography>
        </MainCard>
    </MainCard>
    
);

export default Dashboard;
