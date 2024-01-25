import { ACTIONS } from "./data"
import PropTypes from 'prop-types';

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}

OperationButton.propTypes = {
    dispatch: PropTypes.func,
    operation: PropTypes.string,
}