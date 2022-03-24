/*
Tạo một hàm khởi tạo Accumulator(startingValue).
Đối tượng tạo với yêu cầu:
Lưu trữ “giá trị hiện tại” trong giá trị thuộc tính. Giá trị startingValue được đặt thành đối số của hàm khởi tạo startValue.
Phương thức read() nên sử dụng prompt để đọc một số mới và thêm nó vào giá trị.
Nói cách khác, thuộc tính value là tổng của tất cả các giá trị do người dùng nhập với giá trị ban đầu là startingValue.
*/

function Accumulator(startingValue){

    this.value = startingValue
    this.read = function(){
        let inputValue = prompt("Please enter a number", 0);
        this.value += parseInt(inputValue)
    }
}

const obj = new Accumulator(0)


/*
function Accumulator(startingValue){

    this.value = startingValue
    this.read = function(){
        let inputValue = prompt("Please enter a number", 0);
        this.value += parseInt(inputValue);
        document.getElementById("demo").innerHTML =
    "Hello " + this.value + "! How are you today?";
    }
}

const obj = new Accumulator(0)


LINK: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
*/