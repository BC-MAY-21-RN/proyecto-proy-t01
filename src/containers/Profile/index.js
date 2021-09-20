import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfile,updateProfile} from '../../library/redux/actions';
import {ProfileComponent} from './component';

export const Profile = connect(
  ({user: {userData}}) => ({userData}),
  dispatch =>
    bindActionCreators(
      {getProfile,
        updateProfile},
      dispatch,
    ),
)(ProfileComponent);
