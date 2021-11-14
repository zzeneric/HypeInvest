import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import ChartCard from './ChartCard'

let query = (new URLSearchParams(window.location.search)).get("query")

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

fetch("http://127.0.0.1:5000/test?name=" + query)
        .then(response => response.json())
        .then(currData => {
            console.log(currData);
            //document.getElementById('summaryTitle').title = 'Lol'
            //document.getElementById('summaryTitle').title = 'Market Summary > ' + currData[0] + '[' + currData[1] + "]"
            //document.getElementById('name').innerText = 'About ' + currData[0]
            document.getElementById('handle').innerText = currData[1]
            document.getElementById('desc').innerText = currData[2]
            document.getElementById('market_cap').innerText = currData[3]
            document.getElementById('similar').innerText = currData[4]
            document.getElementById('rating_total').innerText = clamp((currData[7]*100).toFixed(1),-98,97)

            document.getElementById('rating_perception').innerText = clamp((currData[5]*100).toFixed(1),-98,97)
            document.getElementById('rating_popularity').innerText = clamp((currData[6]*100).toFixed(1),-98,97)
            document.getElementById('rating_growth').innerText = clamp((currData[12]*10).toFixed(1),-98,97)
            document.getElementById('rating_recommend').innerText = clamp((currData[13]*10).toFixed(1),-98,97)

            
            document.getElementById('open').innerText = currData[9]
            document.getElementById('close').innerText = currData[10]
            
            document.getElementById('graph_name').innerText = currData[0]
            document.getElementById('graph_price').innerText = currData[8]
            document.getElementById('graph_change').innerText = currData[0]
        });

        

        
// ==============================|| TYPOGRAPHY ||============================== //
const title = "Market Summary > " + query

const Typography = () => (
    
    <MainCard title={title} secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />} id="summaryTitle">
        <br/>
        
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={0}>
                <ChartCard name="NAME">
                </ChartCard>
            </Grid>

            
            <Grid item xs={12} sm={6}>

                <SubCard title="General Information">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                NSYE Handle
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="handle">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Market Cap
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="market_cap">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Previous Close
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="close">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Open
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="open">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Similar Companies
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="similar">
                                Loading...
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
                            <MuiTypography variant="subtitle2" gutterBottom id="rating_total">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Perception Rating
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="rating_perception">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Popularity Rating
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="rating_popularity">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Projected Growth Rating
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="rating_growth">
                                Loading...
                            </MuiTypography>
                        </Grid>

                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Recommended Rating
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom id="rating_recommend">
                                Loading...
                            </MuiTypography>
                        </Grid>

                    </Grid>
                </SubCard>
            </Grid>

            <Grid item xs={12} sm={6}>
                <SubCard title="Description">
                    <MuiTypography variant="subtitle2" gutterBottom id="desc">
                        Loading...
                    </MuiTypography>
                </SubCard>
            </Grid>
            
        </Grid>
    </MainCard>
);

export default Typography;