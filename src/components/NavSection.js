import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import {
  Box,
  List,
  Collapse,
  ListItemText,
  Typography,
  ListItemIcon,
  ListItemButton
} from '@mui/material';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: 'whitesmoke',
    '&:before': {
      top: 0,
      left: 0,
      width: 3,
      bottom: 0,
      content: "''",
      display: 'none',
      position: 'absolute',
      backgroundColor: 'white'
    }
  })
);

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func
};

function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, alertNo, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'white',
    fontWeight: '900',
    fontSize: '1rem',
    backgroundImage: 'linear-gradient(to right, #1C4185 68.23%, rgba(28, 65, 133, 0) 100%)',
    '&:before': { display: 'block' }
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontSize: '1rem',
    fontWeight: '900'
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle)
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />

          {alertNo && (
            <Typography
              disableTypography
              sx={{
                bgcolor: 'red',
                borderRadius: '50%',
                fontSize: '0.6rem',
                width: '1rem',
                height: '1rem',
                lineHeight: '12px',
                textAlign: 'center'
              }}
            >
              {alertNo}
            </Typography>
          )}
          {info && info}
          <Box
            component={Icon}
            icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle)
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main'
                        })
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                  {alertNo && (
                    <Typography
                      disableTypography
                      sx={{
                        bgcolor: 'red',
                        borderRadius: '50%',
                        fontSize: '0.6rem',
                        width: '1rem',
                        height: '1rem',
                        lineHeight: '12px',
                        textAlign: 'center'
                      }}
                    >
                      {alertNo}
                    </Typography>
                  )}
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle)
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {alertNo && (
        <Typography
          disableTypography
          sx={{
            bgcolor: 'red',
            borderRadius: '50%',
            fontSize: '0.6rem',
            width: '1rem',
            height: '1rem',
            lineHeight: '12px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {alertNo}
        </Typography>
      )}
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
  navBottom: PropTypes.array
};

export default function NavSection({ navConfig, navBottom, ...other }) {
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
      <Box sx={{ px: 2.5, py: 3 }}> </Box>
      <Typography sx={{ position: 'relative', left: '1.2rem', color: 'white' }} variant="body2">
        TEAMS
      </Typography>
      <List disablePadding>
        {navBottom.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}{' '}
      </List>
    </Box>
  );
}
