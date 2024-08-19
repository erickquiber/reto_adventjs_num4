function reverseParent(msg) {
    let reversedMsg = [];

    while (msg.length > 0) {
        const character = msg.pop();
        if (character === '(') break;
        reversedMsg.push(character);
    }

    return reversedMsg;
}

function decode(message) {
    const msgClaus = [];

    for (const character of message) {
        if (character === ')') {
            const reversedContend = reverseParent(msgClaus);
            msgClaus.push(...reversedContend);
        } else {
            msgClaus.push(character);
        }
    }
    const finalMsgClaus = msgClaus.join('');
    
    return finalMsgClaus;
}

const a = decode('hola (odnum)');
console.log(a); // "hola mundo"

const b = decode('(olleh) (dlrow)!');
console.log(b); // "hello world!"

const c = decode('sa(u(clau)tn)s');
console.log(c); // "santaclaus"

