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
                As the world of investing becomes more competitive, so too must stock market prediction algorithms that guide investors. Traditional stock market prediction algorithms generally don't use information from social media or the news in their predictions. This is a significant weakness for these predictions, as they ignore a major component of why many people choose to invest in a company. If a company is both talked about and is viewed positively, more people are inclined to support the company by investing in it. This is the major inspiration for HypeInvest.
            </center> </Typography>
        </MainCard>
    </MainCard>
    
);

export default Dashboard;
