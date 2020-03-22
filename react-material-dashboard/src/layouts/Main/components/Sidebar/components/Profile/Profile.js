import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: localStorage.getItem('email_usuario_logado'),
    // avatar: '/images/avatars/avatar_11.png',
    avatar: 'https://user-images.githubusercontent.com/45580434/77255589-63bc8b00-6c47-11ea-9d19-1ca145046b36.png',
    // bio: 'Desenvolvedor'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      {/* <Typography variant="body2">{user.bio}</Typography> */}
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
