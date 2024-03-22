export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = new padZero(date.getHours);
  const minutes = new padZero(date.getMinutes);
  return `${hours}:${minutes}`; 
}

//Helper function to pad single-digit number with a leading zero
function padZero(number){
    return number.toString().padStart(2,"0");
}