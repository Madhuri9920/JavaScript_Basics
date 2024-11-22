
function findFirstOcurance(txt,pat) {
    let txtLen = txt.length;
    let patLen = pat.length;

    for (let i = 0; i <= txtLen - patLen; i ++) {
        let match = true;
        for (let j = 0; j < patLen; j ++){
            if (txt[i + j] = pat [j]) {
                match = false;
                break;
                }
            }
            if (match) {
                return i;
            }
        }
        return -1;
    }
let txt = "GeeksForGeeks";
let pat = "GeeksFr"
console.log(findFirstOcurance(txt,pat));