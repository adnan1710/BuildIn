import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Stack } from '@mui/material';

import NavBar from './navbar';
import Feed from './feeds';

import FeedNews from './feedsNews';
import Profile from './profile';

export default function HomePage() {
    const feeds = [];
    let item = 1;
    while (item <= 3) {
        feeds.push(<Feed key={item} />);
        item++;
    }
    const feedNews = [];
    let itemfeedNews = 1;
    while (itemfeedNews <= 3) {
        feedNews.push(<FeedNews key={itemfeedNews} />);
        itemfeedNews++;
    }
    // <Grid item xs={6} sm={6} >
    //                     <Stack className='homeContainer-stack' direction="column" spacing={2}>
    //                         {/* {feedNews} */}
    //                         <Profile />
    //                     </Stack>
    //                 </Grid>
    //                 <Grid item xs={3} sm={3} >
    //                     <Stack className='homeContainer-stack' direction="column" spacing={2}>
    //                         {feedNews}
    //                     </Stack>
    //                 </Grid>

    return (
        <Grid className="homeRoot" container spacing={2}>
            <Grid className='navbarContainer' item xs={12} sx={{ position: 'sticky', top: -20, width: '100%', backgroundColor: 'white', zIndex: 999 }}>
                <NavBar />
            </Grid>
            <Grid className='homeContainer'item xs={12}>
                <Grid sx={{ backgroundColor: 'lightgrey'}} container spacing={2} padding={2}>
                    <Grid item xs={3} sm={3} >
                        <Stack className='homeContainer-stack' direction="column" spacing={2}>
                            {feeds}
                        </Stack>
                    </Grid>
                    <Grid item xs={9} sm={9} >
                        <Stack className='homeContainer-stack' direction="column" spacing={2}>
                            <Profile />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
