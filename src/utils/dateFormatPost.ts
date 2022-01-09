export const dataFormatPost = (dataPost: Date) => {
  const oneYear = 31104000000
  const oneMount = 2592000000
  const oneDay = 86400000
  const oneHours = 3600000
  const oneMinutes = 60000
  const remaining = new Date().getTime() - dataPost.getTime()
  const nMount_PT_BR = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]

  if (remaining < oneHours) {
    const numberOfMinutes = remaining / oneMinutes
    return `Há ${numberOfMinutes.toFixed()} minutos`
  }

  if (remaining < oneDay) {
    const numberOfHours = remaining / oneHours
    return `Há ${numberOfHours.toFixed()} horas`
  }

  if (remaining < oneMount) {
    const numberOfDays = remaining / oneDay
    return `Há ${numberOfDays.toFixed()} dias`
  }

  if (remaining > oneMount && remaining < oneYear) {
    return `${dataPost.getDate()} ${dataPost.getMonth()}`
  }

  if (remaining > oneYear) {
    return `${dataPost.getDate()} ${
      nMount_PT_BR[dataPost.getMonth() - 1]
    } ${dataPost.getFullYear()} `
  }
}
