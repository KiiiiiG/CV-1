let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是阿K
 *为你展示以下我的前端功底
 *首先我先准备一个div
 *我要加的样式是*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来把 div 变成八卦图
 *看我操作就好了
 *首先把 div 变成一个圆*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳融合
 *所以应该一黑一白 黑中有白
 *先让我们将它设置为半黑半白*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*让我们加入两个神秘小球
 *一黑一白*/
#div1::before{
  width:100px;
  height:100px;
  top: 0;
  transform:translateX(50%);
  background: #000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  top: 100px;
  transform:translateX(50%);
  background: #fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 9999999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};
step();
