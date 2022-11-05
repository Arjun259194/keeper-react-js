export const getRandomId = () => {
  const keys = "1234567890".split('')
  let id = ""
  for (let i = 0; i < 8; i++) {
    id += keys[Math.floor((Math.random() * keys.length - 1) + 1)]
  }
  return parseInt(id)
}

export const getCurrDate = () => {
  const D = new Date()
  let yy = D.getFullYear();
  let mm = D.getMonth() + 1;
  let dd = D.getDate();

  if (dd < 10) { dd = '0' + dd }
  if (mm < 10) { mm = '0' + mm }

  return `${dd}/${mm}/${yy}`
}