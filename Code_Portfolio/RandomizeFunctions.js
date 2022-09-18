function RollDie()
{
    let result = Math.floor(Math.random() * 6) + 1;
    document.getElementById("DieResult").innerHTML = result;
}

function FlipCoin()
{
    let result = Math.floor(Math.random() * 2) + 1;
    let side = "";
    if(result === 1)
    {
        side = "tails";
    }
    else
    {
        side = "heads";
    }
    document.getElementById("FlipResult").innerHTML = side;
}

function RandomCard()
{
    const suit = ["diamonds", "spades", "hearts", "clubs"];
    const card = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
    let suitChoice = suit[Math.floor(Math.random() * 4)];
    let cardChoice = card[Math.floor(Math.random() * 14)];
    document.getElementById("CardPick").innerHTML = cardChoice;
    document.getElementById("SuitPick").innerHTML = suitChoice;
}