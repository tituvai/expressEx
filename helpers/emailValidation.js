
function emailValidation(email) {
  const emailReg =/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

  return emailReg.test(email)
}

module.exports = emailValidation