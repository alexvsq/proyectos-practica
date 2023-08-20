
function random() {
    const hex = 'abcdef1234567890'
    let codeHex = ''

    for (let i = 0; i < 6; i++) {
        codeHex += hex[Math.floor(Math.random() * 16)]
    }

    return '#' + codeHex

}


export function hexToRgb() {

    const a = random()
  
    let hex = a.replace("#", "");

    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    return [a , `rgb(${red}, ${green}, ${blue})`];

}
