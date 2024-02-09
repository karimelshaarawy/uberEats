import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';



export default function LoadingSkeleton(props) {
    const cols = props.cols;
    return (
        <Grid container wrap="nowrap" style={{width:"100%"}}>
            {Array.from(new Array(cols)).map((item, index) => (
                <Box key={index} sx={{ width:"100%", marginRight: 0.5, my: 5 }}>
                    <Skeleton variant="rectangular" width="100%" height={200} />

                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Box>
            ))}
        </Grid>
    );
}




