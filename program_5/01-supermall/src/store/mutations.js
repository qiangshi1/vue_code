export const addCounter = (state, payload) => {
  payload.count++
}
export const addToCart = (state, payload) => {
  state.cartList.push(payload)
}
