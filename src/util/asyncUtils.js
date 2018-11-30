/**
 * Constructs async actions constants
 * @param {String} baseName
 * @returns {Object}
 */
export const asyncActionNames = baseName => ({
  failure: `${baseName}_FAILURE`,
  loading: `${baseName}_LOADING`,
  success: `${baseName}_SUCCESS`
})

/**
 * Constructs Redux async actions
 * @param {String} actionName
 * @returns {Object}
 */
export const asyncActions = actionName => ({
  loading: bool => ({
    type: asyncActionNames(actionName).loading,
    data: bool
  }),
  failure: (bool, error) => ({
    type: asyncActionNames(actionName).failure,
    data: {error, status: bool}
  }),
  success: data => ({
    type: asyncActionNames(actionName).success,
    data
  })
})

/**
 * Dispatches Redux Actions
 * @async asyncRequest
 * @param {String} ACTION_NAME - The name of action to be dispatched
 * @param {Object} data - user data
 * @returns {Function} - Function that dispatches Redux Actions
 */

export const asyncRequest = (ACTION_NAME, data) => dispatch => {
  dispatch(asyncActions(ACTION_NAME).loading(true))

  // Mock API call with setTimeout
  setTimeout(() => {
    dispatch(asyncActions(ACTION_NAME).loading(false))
    dispatch(asyncActions(ACTION_NAME).success(data))
  }, 2000)
}
