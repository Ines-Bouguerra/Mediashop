import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,

} from './types';
import axios from 'axios'
import { setAlert } from './alerts'


// Register User
export const register = ({ username, email, password, confirmPassword, checkbox }) => async dispatch => {
  const config = {
    headers: {
      'content-type': 'application/json'
    }
  }
  const body = JSON.stringify({ username, email, password, confirmPassword, checkbox })
  try {

    const res = await axios.post('/api/authentication/register', body, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))

    }
    dispatch({
      type: REGISTER_FAIL,
    })
  }

}

//Logout  /Clear Profile

export const logout =()=>dispatch=>{
  dispatch({type:LOGOUT})
}