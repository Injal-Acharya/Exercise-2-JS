
let random, choice, loop = true, point = 0;

game = (ch) => {
    if (ch == 0 && random == 1) {
        return true;
    }
    else if (ch == 0 && random == 2) {
        return false;
    }
    else if (ch == 1 && random == 2) {
        return true;
    }
    else if (ch == 1 && random == 0) {
        return false;
    }
    else if (ch == 2 && random == 0) {
        return true;
    }
    else if (ch == 2 && random == 1) {
        return false;
    }
}
while (loop) {
    random = Math.floor(Math.random() * 3);
    random = Number.parseInt(random);
    choice = prompt("Enter your choice: S, W or G");

    if (choice.toLowerCase() == "s")
        ch = 0;
    else if (choice.toLowerCase() == "w")
        ch = 1;
    else if (choice.toLowerCase() == "g")
        ch = 2;
    else {
        alert("Invalid choice!");
        if(confirm("Do you want to enter again?"))
            continue;
        else
            break;
    }

    if (ch == random) {
        alert("It's a Draw");
        loop = confirm("Do you want to play again?");
    }

    else {
        if (game(ch)) {
            alert("Congratulations You Won!!");
            point++;
            loop = confirm("Do you want to play again?")
        }
        else {
            alert("You Lost");
            point--;
            loop = confirm("Do you want to play again?");
        }
    }
}
document.write(point);
