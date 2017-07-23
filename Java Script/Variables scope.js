var $a = "A", $b = "B"; // Global variables

function test(){
    var $a = "a"; // A local variable
    alert($a); // "a" => Value of the local variable $a
    alert($b); // "B" => Value of the global variable $b

    $b = "b"; // Reassign the value "b" to the global variable $b

    $c = "C"; // A global variable $c here
    alert($c); // "C" => Value of the global variable $c
}

test();

alert($a); // "A" => Value of the global variable $a.
alert($b); // "B" => Value of the global variable $b.
alert($c); // "C" => Value of the gloabl variable $c.