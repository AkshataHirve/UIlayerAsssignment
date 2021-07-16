/*function increment(){
    document.getElementById('demoInput').stepUp();
}

function decrement(){
    document.getElementById('demoInput').stepDown();
}*/

const counter = (
    function () {
        var counterValue = 0;
        // change By a particular value => 1,2,3
        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function () {
                console.log("increment called");
                changeBy(+1);
            },
            decrement: function () {
                console.log("decrement called");
                changeBy(-1);
            },
            value: function () {
                return counterValue;
            }
        };
    })();

function onClick(event) {
    console.log("onclick called on"+event.target.id);
    const result = document.getElementById("result");
    switch (event.target.id) {
        case "delete":
            counter.decrement()
            break;
        case "add":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result.innerHTML = counter.value();
}
