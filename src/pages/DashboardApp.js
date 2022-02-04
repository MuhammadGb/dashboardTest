// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { AppTasks, AppCurrentVisits, AppConversionRates } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard Test">
      <Container maxWidth="xl">
        <Box sx={{ pb: 1 }}>
          <Typography color="gray" variant="body">
            Hello Ghazi, Welcome back
          </Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Your Dashboard Today</Typography>
        </Box>
        <Grid item xs={12} md={6} lg={12}>
          <AppTasks />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          {' '}
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
