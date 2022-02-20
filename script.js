function ascii2bin(charsArray) {
    var asciiArray = []

    charsArray.forEach(function (char) {
        var ascii = Number(char.charCodeAt(0))
        asciiArray.push(ascii)
    })

    var bins = []
    asciiArray.forEach(function (asciiCode) {
        var bin = []

        while (asciiCode >= 2) {
            bin.push(asciiCode % 2)
            asciiCode = (asciiCode / 2) >> 0
        }

        bin.push(asciiCode)
        bin.reverse()

        bins.push(bin)
    })

    var string = ""
    bins.forEach(function (bin) {
        bin.forEach(function (char) {
            string += char
        })
        string += " "
    })

    return string
}

function bin2ascii(binsArray) {
    var chars = []

    binsArray.forEach(function (bin) {
        bin = bin.split("").reverse().join("")

        bin = bin.split("")
        var i = 0
        var results = []
        bin.forEach(function (char) {
            results.push(Number(char) * Math.pow(2, i))
            i++
        })

        var sum = 0
        results.forEach(function (n) {
            sum += n
        })

        chars.push(String.fromCharCode(sum))
    })

    return chars.join("")
}

document.getElementById("convert").onclick = function () {
    var asciiString = document.getElementById("ascii").value
    var charsArray = asciiString.split("")

    var string = ascii2bin(charsArray)

    document.getElementById("result").innerHTML = "Result: " + string
}

document.getElementById("convert-ascii").onclick = function () {
    var binString = document.getElementById("bin").value
    var binsArray = binString.split(" ")

    var string = bin2ascii(binsArray)

    document.getElementById("result-ascii").innerHTML = "Result: " + string
}
