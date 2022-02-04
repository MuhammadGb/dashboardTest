import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import {
  Box,
  Card,
  Checkbox,
  CardHeader,
  Typography,
  FormControlLabel,
  Stack,
  Button
} from '@mui/material';

// ----------------------------------------------------------------------

const TASKS = [
  'Create FireStone Logo',
  'Add SCSS and JS files if required',
  'Stakeholder Meeting',
  'Scoping & Estimations',
  'Sprint Showcase'
];

// ----------------------------------------------------------------------

TaskItem.propTypes = {
  task: PropTypes.string,
  checked: PropTypes.bool,
  formik: PropTypes.object
};

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: 'text.disabled',
                textDecoration: 'line-through'
              })
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function AppTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { values, handleSubmit } = formik;

  return (
    <Card sx={{ background: '#4778EC', color: 'white' }}>
      <Typography sx={{ marginLeft: '2rem', mt: '2rem' }} variant="h3">
        Creative outdoor ads
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', padding: '2rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
          <Typography variant="h5">
            Every large design company whether it’s a multi-national branding corporation or a
            regular down at heel tatty magazine publisher needs to fill holes in the workforce.
          </Typography>
        </Box>
        <Button
          sx={{
            marginLeft: '2rem',
            background: 'white',
            color: '#4778EC',
            width: '30%',
            height: '4rem'
          }}
        >
          Get started
        </Button>
      </Box>
    </Card>
  );
}
