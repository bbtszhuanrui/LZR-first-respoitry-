function move(elem, targetObj, timeCost) {
    const regUnit = /^\d*(\.\d)?([a-z]*)$/

    for (let attr in targetObj) {
        const attrUnit = regUnit.exec(targetObj[attr])[2]

        let attrValue = parseFloat(window.getComputedStyle(elem)[attr])

        const attrSpeed = parseFloat(targetObj[attr]) / (timeCost / 40)

        targetObj[attr] = [targetObj[attr], attrUnit, attrValue, attrSpeed]

        console.log(targetObj[attr]);
    }

    let timer = setInterval(
        () => {
            for (let attr in targetObj) {
                const attrUnit = targetObj[attr][1]
                const attrSpeed = targetObj[attr][3]

                targetObj[attr][2] += attrSpeed
                elem.style[attr] = targetObj[attr][2] + attrUnit
            }
        }, 40
    )

    setTimeout(
        () => {
            clearInterval(timer)

            for (const attr in targetObj) {
                elem.style[attr] = targetObj[attr][0]
            }
        }, timeCost
    )
}