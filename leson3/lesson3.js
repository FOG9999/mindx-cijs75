// 1. Mutable and Immutable
// Có 2 kiểu dữ liệu chính trong JS: Primitive datatype và reference datatype
// Kiểu primitive là immutable, như string, number, symbol, boolean, null, undefined, bigint, khi gán một biến với một giá trị kiểu primitive
// một vùng nhớ mới sẽ được cấp cho nó để lưu trữ giá trị, dù cho giá trị mà nó đang nhận là của một biến khác
var name = 'John';
var stillName = name; // một vùng nhớ khác được cấp để lưu một giá tri John khác dù nó đã được lưu cho giá trị của biến 'name'

// Kiểu reference là mutable, do khi gán cho một biến mới với một giá trị cua một biến đã được khai báo là object, array hay function trước đó
// biến mới này sẽ không được cấp một vùng nhớ mới để lưu trữ giá trị mà sẽ trỏ thẳng tới vùng nhớ lưu trữ giá trị của biến ban đầu. 
// Do đó nếu thay đổi biến này sẽ dẫn đến sự thay đổi của biến kia
var person = { name: 'John' };
var anotherPerson = person;
anotherPerson.name = 'Lisa';
console.log(person); // { name: 'Lisa' }

// 2. Immutable trong React
// Core ideal của React là lưu trạng thái (state) của các component trong một object, nhờ vào việc thay đổi các object này, sử dụng virtual DOM để kiểm tra trên real DOM
// đang có những element nào đang sử dụng các state thay đổi, mà React có thể tối ưu đươc việc render UI, giữ lại các thành phần giao diện không đổi.
// Các state trong React là IMMUTABLE. Do lưu trữ state dưới dạng một OBJECT, do đó việc gán trực tiếp giá trị mới cho một state trong React sẽ không làm con trỏ state trỏ tới
// vùng nhớ khác, mà chỉ update giá trị tại vùng nhớ hiện tại. React sẽ không phát hiện ra sự thay đổi này để re-render.

// Đúng
// class component
this.setState({
    property: ''
})
// functional component
const [property, setPropperty] = useState('init');
setPropperty('')

// 2 cách set state trên thực chất là clone lại state cũ và ghi đè các thuộc tính mới với giá trị mới, nhầm tạo ra vùng lưu trữ mới.

// 3. Git flow
// là một tiêu chuẩn phân rẽ nhánh trên git. các nhánh sẽ được xếp vào các loại để phục vụ các mục đích khác nhau khi code.
// các loại branch trong git flow:
// master: nhánh production, nhánh này sẽ là nhánh được sử dụng để build code lên môi trường thật cho user sử dụng
// hotfix: các nhánh check ra từ master và được merge lại develop, fix bug trên nhánh production, cập nhật các tính năng.
// develop: nhánh phát triển, cho team dev. Nhánh tạo ra từ các feature của các thành viên trong team, phục vụ trong môi trường test của sản phẩm
// release: nhánh được check ra từ develop, sau khi đã fix bug tester log, fix bug ATTT (an toàn thông tin), hạ tầng, kiến trúc,... và merge vào master tạo ra các version của ứng dụng
// feature: các nhánh được các dev checkout từ develop để phát triển từng tính năng riêng.
// Tùy thuộc vào tổ chức sẽ có cách áp dụng git flow khác nhau. 

