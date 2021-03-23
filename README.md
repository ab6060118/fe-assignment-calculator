# FE-assignment-Calculator

利用 TailwindCSS 製作而成的 RWD 計算計 (React App)

## 執行方法

依照以下指令 build 程式

```bash
npm install
npm run build
```

程式 build 完成後，依照以下指令啟用 webserver

```bash
npm run server
```

開啟[網頁](http://localhost:8080)
或者直接造訪 [github page](https://ab6060118.github.io/fe-assignment-calculator/)

## 工具以及框架

1. React
1. Ract Redux
1. Ract Redux Thunk
1. TailwindCSS
1. postCSS
1. Sass
1. babel
1. webpack

## 程式架構

component: UI 呈現以及綁定 action  
action: 處理資料運算以及更新資料  
reducer: 定義 calculator store  

## 元件設計

### Modal

將想要達成拖拉的元件放入此 Modal 當中即可達成目的

#### props

key      | type     | description
---      | ----     | -----------
initLeft | number   | 設定 Modal 初始 left
initTop  | number   | 設定 Modal 初始 top
show     | boolean  | 顯示或不顯示 Modal
closeFn  | function | 當 Modal 關閉時執行該 function

### Calculator

計算機主體

#### props

不提供任何 props
