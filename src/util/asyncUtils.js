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
 * @param {Number} time - duration of mock API call (default=2000ms)
 * @returns {Function} - Function that dispatches Redux Actions
 */

export const asyncRequest = (ACTION_NAME, data, time = 2000) => dispatch => {
  dispatch(asyncActions(ACTION_NAME).loading(true))

  // Mock API call with setTimeout
  const promise = new Promise((resolve, reject) => {
    if (data.fullname && data.fullname.trim() === "") {
      reject("please enter a valid name")
    } else {
      setTimeout(() => {
        dispatch(asyncActions(ACTION_NAME).loading(false))
        dispatch(asyncActions(ACTION_NAME).success(data))
        resolve("done")
      }, time)
    }
  })

  return promise
}
