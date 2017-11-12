金融项目的简单的mock服务器
==

本质为一个express服务器，把指定lu'jing函数返回，如果非要起一个非常牛逼的名字的话，我打算叫他FAAS。function as a service。

小伙伴们，可以为他扩展更多的功能，比如固定的case ，特定的场景数据的mock。


用法
==

1. npm start 会启动一个端口8088的服务器，未来有需要的话，可以把这块做成动态的。
2. RN项目里面的项目dev或者local模式的ajax url修改下端口即可
3. ~~目前支持http, 需要的话可以开启https~~


测试
==

