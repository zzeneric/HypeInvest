import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import ChartCard from './ChartCard'

import data from './testData.json'

const newData = require('./currentSearch.json');
console.log(newData);

fetch(newData.api)
        .then(response => response.json())
        .then(currData => console.log(currData));

// ==============================|| TYPOGRAPHY ||============================== //
const Typography = () => (
    <MainCard title="Market Summary > Twitter [TWTR]" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <br/>
        
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={0}>
                <ChartCard>
                </ChartCard>
            </Grid>

            
            <Grid item xs={12} sm={6}>

                <SubCard title="General Information">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                About {data.name}
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                {data.info}
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                NSYE Handle
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                {data.handle}
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Market Cap
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                {data.market_cap}
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Previous Close
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                {data.prev_close}
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Open
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                {data.open}
                            </MuiTypography>
                        </Grid>

                    </Grid>
                </SubCard>
            </Grid>

            <Grid item xs={12} sm={6}>
                <SubCard title="Analyst Information">
                    <Grid container direction="column" spacing={1}>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Total Rating
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                67
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Perception Rating
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                32
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Popularity Rating
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                46
                            </MuiTypography>
                        </Grid>

                    </Grid>
                </SubCard>
            </Grid>
            
        </Grid>
    </MainCard>
);

export default Typography;
