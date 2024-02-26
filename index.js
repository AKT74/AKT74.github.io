export function setinner(id, content) {
    document.getelementbyid(id).innerhtml = content;
}

setinner("demo1", "demog 1 #1");
export function penjumlahan(a, b) {
    return a + b;
}

const result = penjumlahan(5, 3); //replace 5 and 3 with your
setinner("demo2", `result of penjumlahan: ${result}`);