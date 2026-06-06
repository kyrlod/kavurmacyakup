export const vertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
uniform float uTime;
uniform float uDistortion;
void main() {
  vUv = uv;
  vNormal = normal;
  vec3 pos = position;
  float wave = sin(pos.y * 2.0 + uTime) * uDistortion * 0.03;
  pos.x += wave;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uOpacity;
uniform float uVignette;
void main() {
  vec4 tex = texture2D(uTexture, vUv);
  float dist = length(vUv - 0.5) * 2.0;
  float vig = 1.0 - smoothstep(0.5, 1.0, dist * uVignette);
  gl_FragColor = vec4(tex.rgb * vig, tex.a * uOpacity);
}
`;

export const fallbackFragment = `
varying vec2 vUv;
uniform float uTime;
uniform vec3 uColor;
void main() {
  float grad = vUv.y;
  float noise = sin(vUv.x * 10.0 + uTime) * 0.05;
  vec3 color = mix(vec3(0.05, 0.03, 0.01), uColor, grad + noise);
  gl_FragColor = vec4(color, 1.0);
}
`;
