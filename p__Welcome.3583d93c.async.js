(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RyC9:function(c,a,E){"use strict";E.r(a);var o=E("q1tI"),s=E.n(o),B=E("tMyG"),e=E("nKUr"),C=E.n(e);function i(n,t,r){var u=n.createShader(t);if(!u)return null;n.shaderSource(u,r),n.compileShader(u);var d=n.getShaderParameter(u,n.COMPILE_STATUS);if(d)return u;console.log(n.getShaderInfoLog(u)),n.deleteShader(u)}a.default=function(){var n=`
  // \u4E00\u4E2A\u5C5E\u6027\u53D8\u91CF\uFF0C\u5C06\u4F1A\u4ECE\u7F13\u51B2\u4E2D\u83B7\u53D6\u6570\u636E
  attribute vec4 a_position;

  // \u6240\u6709\u7740\u8272\u5668\u90FD\u6709\u4E00\u4E2Amain\u65B9\u6CD5
  void main() {
    // gl_Position \u662F\u4E00\u4E2A\u9876\u70B9\u7740\u8272\u5668\u4E3B\u8981\u8BBE\u7F6E\u7684\u53D8\u91CF
    gl_Position = a_position;
  }
  `,t=`
  // \u7247\u6BB5\u7740\u8272\u5668\u6CA1\u6709\u7CBE\u5EA6 \u6240\u4EE5\u9700\u8981\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u7CBE\u5EA6
  // mediump\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9ED8\u8BA4\u503C\uFF0C\u4EE3\u8868\u201Cmedium precision\u201D\uFF08\u4E2D\u7B49\u7CBE\u5EA6\uFF09
  precision mediump float;
  void main(){
    // gl_FragColor \u7247\u6BB5\u7740\u8272\u5668\u4E3B\u8981\u8BBE\u7F6E\u7684\u53D8\u91CF
    gl_FragColor=vec4(1,0,0.5,1)
  }
  `;return Object(o.useEffect)(function(){var r=document.getElementById("c"),u=r.getContext("webgl");if(u){console.log("gl: ",u);var d=i(u,u.VERTEX_SHADER,n),D=i(u,u.VERTEX_SHADER,t)}},[]),Object(e.jsx)(B.a,{children:Object(e.jsx)("canvas",{id:"c"})})}}}]);
