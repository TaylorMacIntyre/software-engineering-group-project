

import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function ViewSpace(props) {

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Workspace</Typography>
            <Grid container spacing={2}>
                {props.space.map((workspace) => {


                    // a => {workspace.id};
                    return (
                        <Grid item xs={12} sm={12} md={4} lg={4} key={workspace.id}>
                            <Card elevation={6}>
                                <CardContent>
                                    <Typography component='h5' variant='h5'>
                                        ID: {workspace.id}
                                        {/* spaceID = {workspace.id} */}
                                    </Typography>

                                    <Typography component='h4' variant='h4'>
                                        {workspace.workspace_name}
                                    </Typography>


                                    <Typography component='p' variant='p'>
                                        {workspace.workspace_description}
                                    </Typography>


                                    {/* <Typography component='p' variant='p'>
                                        {workspace.boards[0].ID}
                                    </Typography> */}

                                    
                                    
                                    <Link to={'/boards/'+ workspace.id}>
                                        <Button variant='contained' sx={{ marginTop: '200px' }} onClick={() => localStorage.setItem("active_workspace", workspace.id)}>
                                            Go to the board
                                            
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};
//
export default ViewSpace;