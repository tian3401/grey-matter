function getDate() {
  const today = new Date();
  const date = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDay();
  return date; 
}

export default getDate;