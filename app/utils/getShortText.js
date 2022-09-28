

const getShortText = (text,maxLength) => {
  return (text.length > maxLength
  ? text.substring(0, maxLength - 3) + "..."
  : text)
}

export default getShortText