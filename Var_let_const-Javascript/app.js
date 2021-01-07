// 1. Phạm vi truy cập(scope) & hosting: var/let,const
/**
 * VAR sẽ được truy cập ngoài code block.
 * VAR có tính chất hosting.
 * let/const không truy cập ngoài code block, chỉ truy cập trong block và block con.
 */

// 2. Assignment: var,let/const
/**
 * var, let có thể gán giá trị sau khi khai báo.
 * const thì chỉ được khai báo 1 lần duy nhất và không thể gán giá trị khác. (sử dụng để khai báo 1 hằng số)
 */
// code block: if else, loop, {},....
if(true){
    var count = "hello thuat";
} 
console.log(count);

// lưu ý: - khi nào khai báo biến và muốn gán lại giá trị khác thì dùng: let
//        - khi nào khai báo biến mà k muốn gán lại 1 giá trị nào khác thì dùng: const
