import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

/**
 * 创建着色器方法
 * @param gl 渲染上下文
 * @param type 着色器类型
 * @param source 数据源
 */
function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null | undefined {
  // 创建着色器对象
  const shader = gl.createShader(type);
  if (!shader) return null;
  // 提供数据源
  gl.shaderSource(shader!, source);
  // 编译 生成着色器
  gl.compileShader(shader!);

  const success = gl.getShaderParameter(shader!, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader!));
  // 删除
  gl.deleteShader(shader!);
  return undefined;
}

export default (): React.ReactNode => {
  const vertexShaderStr = `
  // 一个属性变量，将会从缓冲中获取数据
  attribute vec4 a_position;

  // 所有着色器都有一个main方法
  void main() {
    // gl_Position 是一个顶点着色器主要设置的变量
    gl_Position = a_position;
  }
  `;
  const fragmentShaderStr = `
  // 片段着色器没有精度 所以需要设置一个默认精度
  // mediump是一个不错的默认值，代表“medium precision”（中等精度）
  precision mediump float;
  void main(){
    // gl_FragColor 片段着色器主要设置的变量
    gl_FragColor=vec4(1,0,0.5,1)
  }
  `;
  useEffect(() => {
    // 选择
    const canvas = document.getElementById('c') as HTMLCanvasElement;
    // 创建webgl渲染上下文
    const gl = canvas!.getContext('webgl');
    // 有webgl才可以使用
    if (gl) {
      console.log('gl: ', gl);
      // 创建shader
      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderStr) as WebGLShader;
      const fragmentShader = createShader(gl, gl.VERTEX_SHADER, fragmentShaderStr) as WebGLShader;
    }
  }, []);

  return (
    <PageContainer>
      <canvas id="c"></canvas>
    </PageContainer>
  );
};
