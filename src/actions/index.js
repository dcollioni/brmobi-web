// import AxiosHelper from './../utils/AxiosHelper'
// import config from './../config'

// export const CHANGE_OWNER = 'CHANGE_OWNER'
// export const CHANGE_BAND = 'CHANGE_BAND'
// export const CHANGE_MEMBERS = 'CHANGE_MEMBERS'
// export const CHANGE_SUBSCRIPTION_STEP = 'CHANGE_SUBSCRIPTION_STEP'
// export const CHANGE_SUBSCRIPTION_OPTIN = 'CHANGE_SUBSCRIPTION_OPTIN'
// export const CHANGE_MEMBER_INDEX = 'CHANGE_MEMBER_INDEX'
// export const SAVE_SUBSCRIPTION_START = 'SAVE_SUBSCRIPTION_START'
// export const SAVE_SUBSCRIPTION_DONE = 'SAVE_SUBSCRIPTION_DONE'
// export const SAVE_SUBSCRIPTION_FAILED = 'SAVE_SUBSCRIPTION_FAILED'
// export const RESET_SUBSCRIPTION = 'RESET_SUBSCRIPTION'
// export const SHOW_TOAST = 'SHOW_TOAST'
// export const HIDE_TOAST = 'HIDE_TOAST'
// export const SHOW_MODAL_SELECTION = 'SHOW_MODAL_SELECTION'
// export const HIDE_MODAL_SELECTION = 'HIDE_MODAL_SELECTION'

// export function changeOwner (owner) {
//   return {
//     type: CHANGE_OWNER,
//     owner
//   }
// }

// export function changeBand (band) {
//   return {
//     type: CHANGE_BAND,
//     band
//   }
// }

// export function changeMembers (members) {
//   return {
//     type: CHANGE_MEMBERS,
//     members
//   }
// }

// export function changeSubscriptionStep (step) {
//   return {
//     type: CHANGE_SUBSCRIPTION_STEP,
//     step
//   }
// }

// export function changeSubscriptionOptin (optin) {
//   return {
//     type: CHANGE_SUBSCRIPTION_OPTIN,
//     optin
//   }
// }

// export function changeMemberIndex (index) {
//   return {
//     type: CHANGE_MEMBER_INDEX,
//     index
//   }
// }

// export function saveSubscriptionStart () {
//   return {
//     type: SAVE_SUBSCRIPTION_START
//   }
// }

// export function saveSubscriptionDone () {
//   return {
//     type: SAVE_SUBSCRIPTION_DONE
//   }
// }

// export function saveSubscriptionFailed () {
//   return {
//     type: SAVE_SUBSCRIPTION_FAILED
//   }
// }

// export function saveSubscription (subscription, captchaToken) {
//   return async (dispatch) => {
//     dispatch(saveSubscriptionStart())

//     const axiosHelper = new AxiosHelper()

//     try {
//       await axiosHelper.post(config.api.saveSubscription, { subscription, captchaToken })
//       dispatch(saveSubscriptionDone())
//     } catch (error) {
//       console.log(error)
//       dispatch(saveSubscriptionFailed())
//     }
//   }
// }

// export function resetSubscription () {
//   return {
//     type: RESET_SUBSCRIPTION
//   }
// }

// export function showToast (msg) {
//   return {
//     type: SHOW_TOAST,
//     msg
//   }
// }

// export function hideToast () {
//   return {
//     type: HIDE_TOAST
//   }
// }

// export function showModalSelection (key, options, value, mustMatch) {
//   return {
//     type: SHOW_MODAL_SELECTION,
//     key,
//     options,
//     value,
//     mustMatch
//   }
// }

// export function hideModalSelection (value) {
//   return {
//     type: HIDE_MODAL_SELECTION,
//     value
//   }
// }
