// CÁC HÀM CƠ BẢN KHI LÀM VIỆC VỚI MẢNG TRONG JS
const arr = [
    {
        id: 1,
        name: 'Nhan Nguyen',
        age: 17,
        address: 'HN'
    },
    {
        id: 2,
        name: 'Bui Trung',
        age: 17,
        address: 'HCM'
    },
    {
        id: 3,
        name: 'Hoang Anh',
        age: 17,
        address: 'HN'
    },
    {
        id: 4,
        name: 'Van Dung',
        age: 17,
        address: 'HCM'
    },
    {
        id: 5,
        name: 'Phuc Hung',
        age: 17,
        address: 'HN'
    },
]
// 1. FILTER
// filter nhận tham số là 1 hàm callback, nó sẽ apply hàm này trên từng phần tử của mảng, nếu thỏa mãn điều kiện được đặt ra, callback này phải return true;
// hàm callback này có 3 tham số, tuy nhiên cùng lắm chỉ sử dụng 2: 1 là giá trị của phần tử hiện tại, 2 là số thứ tự của phần tử đó trong mảng, ở ví dụ này 2 giá trị đó được đặt bằng tên biến lần lượt là student và index
// output của filter là một hàm bao gồm các phần tử mà callback return true
// VD: lọc ra các học sinh có địa chỉ (address) ở Hà nội (HN)
let outputFilter = arr.filter((student, index) => {
    if(student.address === 'HN'){
        return true;
    }
})
/**
 * outputFilter = [
 *  {
        id: 1,
        name: 'Nhan Nguyen',
        age: 17,
        address: 'HN'
    },
    {
        id: 3,
        name: 'Hoang Anh',
        age: 17,
        address: 'HN'
    },
    {
        id: 5,
        name: 'Phuc Hung',
        age: 17,
        address: 'HN'
    },
 * ]
 */

// Lưu ý: === và ==
// === có so sánh kiểu dữ liệu còn == thì không
// 2 === '2' ---> false
// 2 == '2' ---> true


// 2. MAP
// map nhận tham số cũng là 1 hàm callback như filter và cũng apply hàm đó trên từng phần tử của mảng. 
// tuy nhiên, callback của map khác với filter ở chỗ là nó return một giá trị mới sau khi đã biến đổi giá trị của từng phần tử mà nó đi qua
// do đó, output của map là một mảng mới có số phần tư bằng số phần tử của mảng ban đầu với giá trị các phần tử đã được biến đổi
// VD: lấy ra mỗi thuôc tính name của các học sinh:
let outputMap = arr.map((student, index) => {
    return student.name
})

/**
 * outputMap = [
 *  'Nhan Nguyen','Bui Trung','Hoang Anh','Van Dung','Phuc Hung'
 * ]
 */

// 3. FOREACH
// foreach nhận tham số cũng là 1 hàm callback như filter và cũng apply hàm đó trên từng phần tử của mảng.
// tuy nhiên nó sẽ dựa vào giá trị của từng phần tử đó để tạo ra đầu ra mong muốn, nó có thể sử dụng thay thế được cho filter và map trong một số trường hợp
// lọc
let alternativeFilter = [];
arr.forEach((student, index) => {
    if(student.address === 'HN'){
        alternativeFilter.push(student)
    }
})
// alternativeFilter = outputFilter
// biến đổi thay thế cho hàm map
let alternativeMap = [];
arr.forEach((student, index) => {
    alternativeMap.push(student.name)
});
// alternativeMap = outputMap

// 4. REDUCE
// reduce nhận tối đa 2 tham số,1  là callback, 2 là initial  value
// reduce cũng apply callback trên từng phần tử của mảng, và cho ra output là 1 giá trị duy nhất. 
// Nếu tham số thứ 2 init value được đặt thì nó sẽ sử dụng đó là phần tử trước phần tử đầu tiên của mảng
// cụ thể hơn, ta đi vào ví dụ tính tổng các phần tử trong mảng sau:
let initValue = 10;
let sumWithInitValue = [1,2,3,4,5].reduce((previousValue, currentValue, currentIndex) => {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
}, initValue);
// khi reduce có tham số init value truyền vào thì khi apply vào phần tử đầu tiên, previous của nó chính là value
// output: 
/**
 * 10 1 => apply trên phần tử đầu của mảng arr
 * 11 2 => cộng dồn giá trị đã return từ callback đặt trên phần tử trước vào prevíousValue
 * 13 3
 * 16 4
 * 20 5
 * sumWithInitValue = 25
 */
let sumWithoutInitValue = [1,2,3,4,5].reduce((previousValue, currentValue, currentIndex) => {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
});
// output
/**
 * 1 2 => callback KHÔNG apply trên phần tử đầu do nó không có previous value
 * 3 3
 * 6 4
 * 10 5
 * sumWithoutInitValue = 15
 */

// 5. INDEXOF
// kiểm tra xem trong mảng có sự xuất hiện của một giá trị nào đó không
// nếu có sẽ trả về số thứ tự (index) của giá trị đó trong mảng
// nếu không sẽ trả -1
// VD: 
console.log([1,2,3,4,5].indexOf(5)) // 4
console.log([1,2,3,4,5].indexOf(6)) // -1
// Lưu ý không thể sử dụng indexOf cho object vì object không thể so sánh == hoặc ===
// VD: {id: 1} == {id:1} -> false
console.log(arr.indexOf({
    id: 1,
    name: 'Nhan Nguyen',
    age: 17,
    address: 'HN'
})) // -1 

