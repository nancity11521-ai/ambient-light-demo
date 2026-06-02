const shapes = [
  {
    id: "circle",
    name: "圆形",
    path: "M150 42 C209.6 42 258 90.4 258 150 C258 209.6 209.6 258 150 258 C90.4 258 42 209.6 42 150 C42 90.4 90.4 42 150 42 Z",
  },
  {
    id: "capsule",
    name: "跑道环",
    path: "M86 68 H214 C248 68 270 101 270 150 C270 199 248 232 214 232 H86 C52 232 30 199 30 150 C30 101 52 68 86 68 Z",
  },
  {
    id: "rounded-square",
    name: "圆角方环",
    path: "M90 46 H210 C236 46 254 64 254 90 V210 C254 236 236 254 210 254 H90 C64 254 46 236 46 210 V90 C46 64 64 46 90 46 Z",
  },
  {
    id: "camera-island",
    name: "相机岛",
    path: "M72 62 H196 C236 62 264 92 264 132 V168 C264 208 236 238 196 238 H104 C64 238 36 208 36 168 V122 C36 87 45 62 72 62 Z",
  },
  {
    id: "lens-eight",
    name: "双镜环",
    path: "M101 65 C137 65 166 94 166 130 C166 166 137 195 101 195 C65 195 36 166 36 130 C36 94 65 65 101 65 Z M199 105 C235 105 264 134 264 170 C264 206 235 235 199 235 C163 235 134 206 134 170 C134 134 163 105 199 105 Z",
  },
  {
    id: "notch",
    name: "缺口环",
    path: "M150 38 C212 38 262 88 262 150 C262 212 212 262 150 262 C88 262 38 212 38 150 C38 108 61 71 95 52 M128 40 C135 39 142 38 150 38",
  },
  {
    id: "wave",
    name: "波浪闭环",
    path: "M52 151 C64 88 108 54 153 69 C187 80 208 73 229 59 C260 98 267 161 236 209 C205 257 137 267 88 235 C57 214 39 182 52 151 Z",
  },
  {
    id: "shield",
    name: "盾形环",
    path: "M150 38 C186 60 226 59 256 62 V141 C256 201 216 240 150 264 C84 240 44 201 44 141 V62 C74 59 114 60 150 38 Z",
  },
];

const effects = [
  { id: "steady", name: "常亮环", desc: "整条灯带稳定发光，用于开启状态" },
  { id: "breathe", name: "呼吸灯", desc: "柔和明暗起伏，用于轻提醒" },
  { id: "progress", name: "进度填充", desc: "沿路径逐步填满，用于充电或倒计时" },
  { id: "loader", name: "加载巡航", desc: "短光段沿路径循环移动" },
  { id: "chase", name: "双段追逐", desc: "两段灯光首尾追随" },
  { id: "segment", name: "分段跳变", desc: "路径被切成短段，节奏式点亮" },
  { id: "gather", name: "双向汇聚", desc: "两束光从相对方向向中心聚合" },
  { id: "pulse", name: "强提醒脉冲", desc: "两次短促高亮，适合告警" },
  { id: "flow", name: "流光滑行", desc: "较长光带沿形状平稳滑动" },
  { id: "ripple", name: "涟漪扩散", desc: "多段亮光像波纹一样前进" },
  { id: "scan", name: "扫描扫光", desc: "一段光束往返扫过路径" },
  { id: "orbit-dot", name: "单点绕行", desc: "一个亮点沿形状完整跑一圈" },
  { id: "meteor", name: "流星拖尾", desc: "亮点带短尾沿路径飞行" },
  { id: "spark", name: "星点闪烁", desc: "短点随机感跳动，适合消息" },
  { id: "warning", name: "分区告警", desc: "高对比断续闪烁，用于重要提醒" },
  { id: "battery", name: "电量波", desc: "低到高逐步铺满，再保持" },
  { id: "dual-color-breathe", name: "双色呼吸", desc: "双种纯色渐进呼吸交替切换" },
  { id: "tri-color-breathe", name: "三色呼吸", desc: "三种纯色渐进呼吸交替切换" },
  { id: "quad-color-breathe", name: "四色呼吸", desc: "四种纯色渐进呼吸交替切换" },
];

const musicEffects = [
  { id: "music-ref-pulse-rhythm", name: "脉冲律动", desc: "整圈彩色随节拍脉冲" },
  { id: "music-ref-flow", name: "流光律动", desc: "彩色光段沿环形滑动" },
  { id: "music-ref-ripple", name: "涟漪律动", desc: "局部蓝色波纹扩散" },
  { id: "music-spectrum-wave", name: "频段能量波", desc: "灯组分频起伏，呈现跳动的能量条" },
  { id: "music-fireworks", name: "节奏花火", desc: "低音重击时随机绽放闪烁星点" },
  { id: "music-rainbow-rotate", name: "炫彩旋转", desc: "渐变色彩随节奏快速旋转" },
  { id: "music-strobe-alert", name: "狂热闪烁", desc: "高能电音闪烁，适合派对氛围" },
  { id: "music-dual-color-breathe", name: "双色律动呼吸", desc: "双色呼吸跟随音乐节奏和亮度律动" },
  { id: "music-tri-color-breathe", name: "三色律动呼吸", desc: "三色呼吸跟随音乐节奏和亮度律动" },
  { id: "music-quad-color-breathe", name: "四色律动呼吸", desc: "四色呼吸跟随音乐节奏和亮度律动" },
];

const scenarios = [
  { id: "charge", name: "充电", shape: "capsule", effect: "battery", color: "#6ef08d", speed: 0.75, intensity: 78 },
  { id: "call", name: "来电", shape: "camera-island", effect: "gather", color: "#d9b35f", speed: 1.15, intensity: 88 },
  { id: "message", name: "消息", shape: "notch", effect: "spark", color: "#58b8ff", speed: 1.35, intensity: 82 },
  { id: "alert", name: "提醒", shape: "shield", effect: "warning", color: "#ff5a55", speed: 1.65, intensity: 96 },
  { id: "music", name: "音乐", shape: "wave", effect: "music-ref-flow", color: "#33e6c5", speed: 1.1, intensity: 90 },
];

const root = document.documentElement;
const phone = document.querySelector(".phone-metal");
const previewPaths = [
  document.querySelector("#previewTrack"),
  document.querySelector("#previewGlow"),
  document.querySelector("#previewLight"),
  document.querySelector("#previewLightAlt"),
];
const lightPath = document.querySelector("#previewLight");
const lightAltPath = document.querySelector("#previewLightAlt");
const ledLayer = document.querySelector("#ledLayer");
const rainbowFlowLayer = document.querySelector("#rainbowFlowLayer");
const motionLayer = document.querySelector("#motionLayer");
const sparkLayer = document.querySelector("#sparkLayer");
const effectGrid = document.querySelector("#effectGrid");
const musicGrid = document.querySelector("#musicGrid");
const shapePresets = document.querySelector("#shapePresets");
const scenarioStrip = document.querySelector("#scenarioStrip");
const modeName = document.querySelector("#modeName");
const modeDesc = document.querySelector("#modeDesc");
const shapeReadout = document.querySelector("#shapeReadout");
const groupReadout = document.querySelector("#groupReadout");
const ledReadout = document.querySelector("#ledReadout");
const speedReadout = document.querySelector("#speedReadout");
const intensityReadout = document.querySelector("#intensityReadout");
const statusChip = document.querySelector("#statusChip");
const motionCount = document.querySelector("#motionCount");
const musicCount = document.querySelector("#musicCount");
const customEffectStatus = document.querySelector("#customEffectStatus");
const pointCount = document.querySelector("#pointCount");
const colorPicker = document.querySelector("#colorPicker");
const rainbowToggle = document.querySelector("#rainbowToggle");
const speedSlider = document.querySelector("#speedSlider");
const intensitySlider = document.querySelector("#intensitySlider");
const groupCountInput = document.querySelector("#groupCountInput");
const lightsPerGroupInput = document.querySelector("#lightsPerGroupInput");
const pathInput = document.querySelector("#pathInput");
const applyPath = document.querySelector("#applyPath");
const drawBoard = document.querySelector("#drawBoard");
const drawModeSwitch = document.querySelector("#drawModeSwitch");
const pngShapeInput = document.querySelector("#pngShapeInput");
const pngStatus = document.querySelector("#pngStatus");
const clearDraw = document.querySelector("#clearDraw");
const undoPoint = document.querySelector("#undoPoint");
const applyDraw = document.querySelector("#applyDraw");
const applyPointDraw = document.querySelector("#applyPointDraw");
const customPattern = document.querySelector("#customPattern");
const customTempo = document.querySelector("#customTempo");
const customSpan = document.querySelector("#customSpan");
const customPulse = document.querySelector("#customPulse");
const applyCustomEffect = document.querySelector("#applyCustomEffect");
const audioInput = document.querySelector("#audioInput");
const audioRecordList = document.querySelector("#audioRecordList");
const audioRecordCount = document.querySelector("#audioRecordCount");
const audioPlayer = document.querySelector("#audioPlayer");
const audioStatus = document.querySelector("#audioStatus");
const recordAnimation = document.querySelector("#recordAnimation");
const downloadSnapshot = document.querySelector("#downloadSnapshot");
const modelNameInput = document.querySelector("#modelNameInput");
const modelTagInput = document.querySelector("#modelTagInput");
const modelFilterInput = document.querySelector("#modelFilterInput");
const selectedSummary = document.querySelector("#selectedSummary");
const saveModelRecord = document.querySelector("#saveModelRecord");
const recordList = document.querySelector("#recordList");
const recordCount = document.querySelector("#recordCount");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const drawContext = drawBoard.getContext("2d");

let currentShape = shapes[0];
let currentEffect = effects[0];
let drawPoints = [];
let pointDrawPoints = [];
let isDrawing = false;
let drawMode = "free";
let isRainbow = false;
let ledConfig = {
  groups: 4,
  perGroup: 12,
};
let modelRecords = [];
let uploadedShapeRecords = [];
let audioRecords = [];
let activeAudioObjectUrl = "";
let audioContext;
let analyser;
let frequencyData;
let audioSource;
let audioFrameId;
let recorder;
let recordedChunks = [];
let userSpeed = Number(speedSlider.value) || 1;
let lastFrameTime = 0;
let musicRotationAngle = 0;
let musicFlowOffset = 0;
let rotateVelocity = 0;
let musicBreathePhase = 0; // JS-driven color transition phase for music breathing

function getBreatheStats(phase, numColors) {
  let color = "#33e6c5";
  let opacity = 0;
  
  if (numColors === 2) {
    const colors = ["#33e6c5", "#ff6d7a"];
    if (phase < 0.5) {
      if (phase < 0.15) {
        color = colors[0];
        opacity = phase / 0.15;
      } else if (phase >= 0.15 && phase < 0.20) {
        color = colors[0];
        opacity = 1;
      } else if (phase >= 0.20 && phase < 0.35) {
        color = colors[0];
        opacity = 1 - (phase - 0.20) / 0.15;
      } else {
        opacity = 0;
        color = phase < 0.42 ? colors[0] : colors[1];
      }
    } else {
      const p = phase - 0.5;
      if (p < 0.15) {
        color = colors[1];
        opacity = p / 0.15;
      } else if (p >= 0.15 && p < 0.20) {
        color = colors[1];
        opacity = 1;
      } else if (p >= 0.20 && p < 0.35) {
        color = colors[1];
        opacity = 1 - (p - 0.20) / 0.15;
      } else {
        opacity = 0;
        color = p < 0.42 ? colors[1] : colors[0];
      }
    }
  } else if (numColors === 3) {
    const colors = ["#33e6c5", "#a855f7", "#ffd45f"];
    const segment = 1 / 3;
    const colorIdx = Math.floor(phase / segment);
    const p = phase % segment;
    
    const nextColor = colors[(colorIdx + 1) % 3];
    const currColor = colors[colorIdx];
    
    if (p < 0.08) {
      color = currColor;
      opacity = p / 0.08;
    } else if (p >= 0.08 && p < 0.12) {
      color = currColor;
      opacity = 1;
    } else if (p >= 0.12 && p < 0.20) {
      color = currColor;
      opacity = 1 - (p - 0.12) / 0.08;
    } else {
      opacity = 0;
      color = p < 0.26 ? currColor : nextColor;
    }
  } else if (numColors === 4) {
    const colors = ["#7cf26d", "#61a8ff", "#f43f5e", "#ffd45f"];
    const segment = 0.25;
    const colorIdx = Math.floor(phase / segment);
    const p = phase % segment;
    
    const nextColor = colors[(colorIdx + 1) % 4];
    const currColor = colors[colorIdx];
    
    if (p < 0.07) {
      color = currColor;
      opacity = p / 0.07;
    } else if (p >= 0.07 && p < 0.10) {
      color = currColor;
      opacity = 1;
    } else if (p >= 0.10 && p < 0.17) {
      color = currColor;
      opacity = 1 - (p - 0.10) / 0.07;
    } else {
      opacity = 0;
      color = p < 0.21 ? currColor : nextColor;
    }
  }
  
  return { color, opacity };
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function setColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  root.style.setProperty("--light", hex);
  root.style.setProperty("--light-rgb", `${r} ${g} ${b}`);
  colorPicker.value = hex;
  updateSelectedSummary();
}

function setRainbow(enabled) {
  isRainbow = enabled;
  phone.classList.toggle("is-rainbow", isRainbow);
  rainbowToggle.classList.toggle("is-active", isRainbow);
  rainbowToggle.textContent = isRainbow ? "彩色开" : "彩色";
  buildRainbowFlow(lightPath.getAttribute("d"));
  updateSelectedSummary();
}

function setSpeed(value) {
  const speed = Number(value);
  userSpeed = speed;
  applyEffectiveSpeed(speed);
  speedSlider.value = speed.toFixed(2);
  speedReadout.textContent = `${speed.toFixed(2)}x`;
  updateSelectedSummary();
}

function applyEffectiveSpeed(speed) {
  root.style.setProperty("--speed", speed.toFixed(2));
  updateMotionDurations(speed);
}

function updateMotionDurations(speed) {
  document.querySelectorAll(".orbit-motion").forEach((item) => {
    item.setAttribute("dur", `${(2.1 / speed).toFixed(2)}s`);
  });
  document.querySelectorAll(".meteor-motion").forEach((item) => {
    item.setAttribute("dur", `${(1.65 / speed).toFixed(2)}s`);
  });
}

function setIntensity(value) {
  const intensity = Number(value);
  root.style.setProperty("--intensity", (intensity / 100).toFixed(2));
  intensitySlider.value = intensity;
  intensityReadout.textContent = `${intensity}%`;
  updateSelectedSummary();
}

function clampNumber(value, min, max) {
  const parsed = Number.parseInt(value, 10);

  if (Number.isNaN(parsed)) {
    return min;
  }

  return Math.max(min, Math.min(max, parsed));
}

function setLedConfig(groups, perGroup) {
  ledConfig = {
    groups: clampNumber(groups, 1, 16),
    perGroup: clampNumber(perGroup, 1, 80),
  };
  groupCountInput.value = ledConfig.groups;
  lightsPerGroupInput.value = ledConfig.perGroup;
  groupReadout.textContent = `${ledConfig.groups}组`;
  ledReadout.textContent = `${ledConfig.groups * ledConfig.perGroup}颗`;
  renderLedLayout();
  updateSelectedSummary();
}

function setPath(path, shapeName = "自定义") {
  previewPaths.forEach((item) => item.setAttribute("d", path));
  pathInput.value = path;
  shapeReadout.textContent = shapeName;
  updateSelectedSummary();

  requestAnimationFrame(() => {
    const length = lightPath.getTotalLength();
    root.style.setProperty("--path-length", length.toFixed(2));
    setPathMetrics(length);
    buildRainbowFlow(path, length);
    buildMotionLayer(path);
    [lightPath, lightAltPath].forEach((pathItem) => {
      pathItem.style.strokeDasharray = "";
      pathItem.style.strokeDashoffset = "";
    });
    renderLedLayout(length);
    updateSparks(length);
  });
}

function setPathMetrics(length) {
  const metrics = {
    "--offset-full": -length,
    "--offset-half": -length * 0.5,
    "--dash-loader-on": length * 0.16,
    "--dash-loader-off": length * 0.84,
    "--dash-chase-on": length * 0.12,
    "--dash-chase-off": length * 0.88,
    "--dash-segment-on": length * 0.08,
    "--dash-segment-off": length * 0.045,
    "--dash-flow-on": length * 0.34,
    "--dash-flow-off": length * 0.66,
    "--dash-ripple-on": length * 0.09,
    "--dash-ripple-off": length * 0.16,
    "--dash-scan-on": length * 0.22,
    "--dash-scan-off": length * 0.78,
    "--dash-battery-start": length * 0.12,
    "--dash-battery-mid": length * 0.62,
    "--offset-small": -length * 0.08,
    "--offset-scan-start": length * 0.1,
    "--offset-scan-end": -length,
    "--offset-ref-ripple-start": -length * 0.38,
    "--offset-ref-ripple-alt-start": -length * 0.5,
    "--offset-ref-ripple-alt-end": -length * 1.12,
  };

  Object.entries(metrics).forEach(([name, value]) => {
    root.style.setProperty(name, value.toFixed(2));
  });
}

function buildRainbowFlow(path) {
  rainbowFlowLayer.innerHTML = "";

  if (!path) {
    return;
  }

  const item = document.createElementNS("http://www.w3.org/2000/svg", "path");
  item.setAttribute("d", path);
  item.setAttribute("stroke", "url(#rainbowStroke)");
  rainbowFlowLayer.append(item);
}

function buildMotionLayer(path) {
  motionLayer.innerHTML = "";

  if (!path) {
    return;
  }

  const motionPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  motionPath.setAttribute("id", "orbitMotionPath");
  motionPath.setAttribute("d", path);
  motionPath.setAttribute("fill", "none");
  motionPath.setAttribute("stroke", "none");
  motionLayer.append(motionPath);

  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("class", "orbit-dot");
  dot.setAttribute("r", "5.2");
  dot.innerHTML = '<animateMotion class="orbit-motion" dur="2.1s" repeatCount="indefinite" rotate="auto"><mpath href="#orbitMotionPath"></mpath></animateMotion>';
  motionLayer.append(dot);

  const meteor = document.createElementNS("http://www.w3.org/2000/svg", "g");
  meteor.setAttribute("class", "meteor-head");
  meteor.innerHTML = `
    <circle r="5.4"></circle>
    <circle class="meteor-core" r="2.4"></circle>
    <animateMotion class="meteor-motion" dur="1.65s" repeatCount="indefinite" rotate="auto"><mpath href="#orbitMotionPath"></mpath></animateMotion>
  `;
  motionLayer.append(meteor);
  updateMotionDurations(userSpeed);
}

function renderLedLayout(existingLength) {
  ledLayer.innerHTML = "";
  const length = existingLength || (lightPath && lightPath.getTotalLength()) || 0;
  if (!length) return;

  const totalLeds = ledConfig.groups * ledConfig.perGroup;
  for (let i = 0; i < totalLeds; i++) {
    const distance = (length / totalLeds) * i;
    const point = lightPath.getPointAtLength(distance);
    if (!point || isNaN(point.x) || isNaN(point.y)) continue;
    
    const led = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    led.setAttribute("cx", point.x.toFixed(2));
    led.setAttribute("cy", point.y.toFixed(2));
    led.setAttribute("r", "2.8");
    
    // Group starting led
    const isStart = i % ledConfig.perGroup === 0;
    if (isStart) {
      led.classList.add("is-start");
    }
    
    // Stash the index so we can address it in real-time animations
    led.dataset.index = i;
    ledLayer.appendChild(led);
  }
}

function setShape(shapeId) {
  const shape = shapes.find((item) => item.id === shapeId) ?? shapes[0];
  currentShape = shape;
  setPath(shape.path, shape.name);

  document.querySelectorAll(".shape-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.shape === shape.id);
  });
}

function setEffect(effectId) {
  const customEffect = currentEffect?.id === effectId && effectId.startsWith("custom-") ? currentEffect : null;
  const effect = customEffect ?? [...effects, ...musicEffects].find((item) => item.id === effectId) ?? effects[0];
  currentEffect = effect;
  phone.className = `phone-metal mode-${effect.id}`;
  phone.classList.toggle("is-rainbow", isRainbow);
  modeName.textContent = effect.name;
  modeDesc.textContent = effect.desc;
  statusChip.textContent = effectId.startsWith("music") ? "BEAT" : "LIVE";

  document.querySelectorAll(".effect-card").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.effect === effect.id);
  });
  updateSelectedSummary();

  if (effectId.startsWith("music-")) {
    cancelAnimationFrame(audioFrameId);
    lastFrameTime = performance.now();
    analyzeAudioFrame();
  }
}

function updateSelectedSummary() {
  if (!selectedSummary || !saveModelRecord) {
    return;
  }

  const modelName = modelNameInput.value.trim();
  const target = modelName || "未命名机型";
  selectedSummary.textContent = `当前将保存：${target} / ${currentEffect.name} / ${currentShape.name} / ${ledConfig.groups}组 x ${ledConfig.perGroup}颗 / ${isRainbow ? "彩色流动" : colorPicker.value}`;
  saveModelRecord.textContent = modelName ? `保存「${modelName}」的选中灯效` : "输入机型后保存选中灯效";
}

function applyGeneratedEffect() {
  const pattern = customPattern.value;
  const span = Number(customSpan.value) / 100;
  const tempo = Number(customTempo.value);
  const pulseLow = Math.max(0.08, 1 - Number(customPulse.value) / 100);
  const names = {
    solid: "自定义常亮",
    dash: "自定义追光",
    segments: "自定义分段",
    pulse: "自定义脉冲",
  };
  const descriptions = {
    solid: "按自定义节奏轻微呼吸的整段光",
    dash: "按自定义光段比例沿路径移动",
    segments: "按自定义间距切分的分段闪烁",
    pulse: "按自定义强度闪烁的脉冲光",
  };

  root.style.setProperty("--custom-span", span.toFixed(2));
  root.style.setProperty("--custom-gap", Math.max(0.02, 1 - span).toFixed(2));
  root.style.setProperty("--custom-tempo", tempo.toFixed(2));
  root.style.setProperty("--custom-low", pulseLow.toFixed(2));
  currentEffect = {
    id: `custom-${pattern}`,
    name: names[pattern],
    desc: descriptions[pattern],
  };
  setEffect(currentEffect.id);
  customEffectStatus.textContent = `${names[pattern]} / ${tempo.toFixed(1)}x`;
}

function updateSparks(length) {
  sparkLayer.innerHTML = "";

  if (!length) {
    return;
  }

  const count = currentEffect.id.includes("music") ? 5 : 3;

  for (let index = 0; index < count; index += 1) {
    const point = lightPath.getPointAtLength((length / count) * index);
    const spark = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    spark.setAttribute("cx", point.x.toFixed(2));
    spark.setAttribute("cy", point.y.toFixed(2));
    spark.setAttribute("r", currentEffect.id === "spark" ? "3.4" : "2.8");
    spark.style.animation = `sparkDrift calc(${1.2 + index * 0.15}s / var(--speed)) ease-in-out infinite`;
    spark.style.animationDelay = `${index * 0.16}s`;
    sparkLayer.append(spark);
  }
}

function renderEffects() {
  motionCount.textContent = `${effects.length} effects`;
  musicCount.textContent = `${musicEffects.length} patterns`;

  effects.forEach((effect) => {
    effectGrid.append(createEffectButton(effect));
  });

  musicEffects.forEach((effect) => {
    musicGrid.append(createEffectButton(effect));
  });
}

function createEffectButton(effect) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "effect-card";
  button.dataset.effect = effect.id;
  button.innerHTML = `<strong>${effect.name}</strong><small>${effect.desc}</small>`;
  button.addEventListener("click", () => setEffect(effect.id));
  return button;
}

function renderShapes() {
  shapes.forEach((shape) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "shape-button";
    button.dataset.shape = shape.id;
    button.textContent = shape.name;
    button.addEventListener("click", () => setShape(shape.id));
    shapePresets.append(button);
  });
}

function renderScenarios() {
  scenarios.forEach((scenario) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.scenario = scenario.id;
    button.textContent = scenario.name;
    button.addEventListener("click", () => {
      setShape(scenario.shape);
      setEffect(scenario.effect);
      setColor(scenario.color);
      setRainbow(false);
      setSpeed(scenario.speed);
      setIntensity(scenario.intensity);
      document.querySelectorAll(".scenario-strip button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
    });
    scenarioStrip.append(button);
  });
}

function getCurrentState() {
  return {
    shape: currentShape,
    effect: currentEffect,
    color: colorPicker.value,
    rainbow: isRainbow,
    speed: speedSlider.value,
    intensity: intensitySlider.value,
    ledConfig,
    custom: {
      pattern: customPattern.value,
      tempo: customTempo.value,
      span: customSpan.value,
      pulse: customPulse.value,
    },
  };
}

function restoreState(state) {
  if (!state) {
    return;
  }

  currentShape = state.shape ?? shapes[0];
  setPath(currentShape.path, currentShape.name);
  setColor(state.color ?? "#33e6c5");
  setRainbow(Boolean(state.rainbow));
  setSpeed(state.speed ?? 1);
  setIntensity(state.intensity ?? 82);
  setLedConfig(state.ledConfig?.groups ?? 4, state.ledConfig?.perGroup ?? 12);

  if (state.custom) {
    customPattern.value = state.custom.pattern ?? "solid";
    customTempo.value = state.custom.tempo ?? "1";
    customSpan.value = state.custom.span ?? "34";
    customPulse.value = state.custom.pulse ?? "58";
  }

  currentEffect = state.effect ?? effects[0];
  setEffect(currentEffect.id);
}

function saveRecords() {
  localStorage.setItem("ambientLightModelRecords", JSON.stringify(modelRecords));
}

function loadRecords() {
  try {
    modelRecords = JSON.parse(localStorage.getItem("ambientLightModelRecords") ?? "[]");
  } catch {
    modelRecords = [];
  }
}

function saveUploadedShapeRecords() {
  localStorage.setItem("ambientLightUploadedShapes", JSON.stringify(uploadedShapeRecords.slice(0, 24)));
}

function loadUploadedShapeRecords() {
  try {
    uploadedShapeRecords = JSON.parse(localStorage.getItem("ambientLightUploadedShapes") ?? "[]").map((record) => ({
      ...record,
      folder: record.folder || "默认",
    }));
  } catch {
    uploadedShapeRecords = [];
  }
}

function saveUploadedShapeRecord(name, path) {
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name,
    folder: "默认",
    path,
    createdAt: new Date().toISOString(),
  };

  uploadedShapeRecords = [record, ...uploadedShapeRecords.filter((item) => item.path !== path)].slice(0, 24);
  saveUploadedShapeRecords();
}

function renderRecords() {
  const keyword = modelFilterInput.value.trim().toLowerCase();
  const filtered = modelRecords.filter((record) => {
    const text = `${record.name} ${record.tag}`.toLowerCase();
    return !keyword || text.includes(keyword);
  });
  recordCount.textContent = `${filtered.length} records`;
  recordList.innerHTML = "";

  if (!filtered.length) {
    recordList.innerHTML = '<div class="record-card"><span>暂无匹配机型记录</span></div>';
    return;
  }

  filtered.forEach((record) => {
    const card = document.createElement("div");
    card.className = "record-card";
    card.innerHTML = `
      <strong>${record.name}</strong>
      <span>${record.tag || "未设置标签"} / ${record.state.shape.name} / ${record.state.effect.name} / ${record.state.ledConfig.groups}组 x ${record.state.ledConfig.perGroup}颗</span>
      <div class="record-actions">
        <button type="button" data-action="load">载入</button>
        <button type="button" data-action="delete">删除</button>
      </div>
    `;
    card.querySelector('[data-action="load"]').addEventListener("click", () => {
      modelNameInput.value = record.name;
      modelTagInput.value = record.tag;
      restoreState(record.state);
      updateSelectedSummary();
    });
    card.querySelector('[data-action="delete"]').addEventListener("click", () => {
      modelRecords = modelRecords.filter((item) => item.id !== record.id);
      saveRecords();
      renderRecords();
    });
    recordList.append(card);
  });
}

function saveCurrentModelRecord() {
  const name = modelNameInput.value.trim();

  if (!name) {
    selectedSummary.textContent = "请先输入机型名称，再保存当前选中的灯效";
    modelNameInput.focus();
    return;
  }

  const tag = modelTagInput.value.trim();
  modelRecords.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name,
    tag,
    createdAt: new Date().toISOString(),
    state: getCurrentState(),
  });
  saveRecords();
  renderRecords();
}

function openAudioDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("ambientLightAudioLibrary", 1);

    request.addEventListener("upgradeneeded", () => {
      request.result.createObjectStore("tracks", { keyPath: "id" });
    });
    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error));
  });
}

async function readAudioRecords() {
  const db = await openAudioDb();

  return new Promise((resolve, reject) => {
    const request = db.transaction("tracks", "readonly").objectStore("tracks").getAll();

    request.addEventListener("success", () => {
      resolve(
        request.result
          .map(({ blob, ...record }) => record)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      );
      db.close();
    });
    request.addEventListener("error", () => {
      reject(request.error);
      db.close();
    });
  });
}

async function getAudioRecord(id) {
  const db = await openAudioDb();

  return new Promise((resolve, reject) => {
    const request = db.transaction("tracks", "readonly").objectStore("tracks").get(id);

    request.addEventListener("success", () => {
      resolve(request.result);
      db.close();
    });
    request.addEventListener("error", () => {
      reject(request.error);
      db.close();
    });
  });
}

async function putAudioRecord(record) {
  const db = await openAudioDb();

  return new Promise((resolve, reject) => {
    const request = db.transaction("tracks", "readwrite").objectStore("tracks").put(record);

    request.addEventListener("success", () => {
      resolve();
      db.close();
    });
    request.addEventListener("error", () => {
      reject(request.error);
      db.close();
    });
  });
}

async function deleteAudioRecord(id) {
  const db = await openAudioDb();

  return new Promise((resolve, reject) => {
    const request = db.transaction("tracks", "readwrite").objectStore("tracks").delete(id);

    request.addEventListener("success", () => {
      resolve();
      db.close();
    });
    request.addEventListener("error", () => {
      reject(request.error);
      db.close();
    });
  });
}

function renderAudioRecords() {
  audioRecordCount.textContent = `${audioRecords.length} tracks`;
  audioRecordList.innerHTML = "";

  if (!audioRecords.length) {
    audioRecordList.innerHTML = '<div class="record-card"><span>暂无音乐记录</span></div>';
    return;
  }

  audioRecords.forEach((record) => {
    const card = document.createElement("div");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    const actions = document.createElement("div");
    const loadButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    card.className = "record-card audio-record-card";
    actions.className = "record-actions two-actions";
    title.textContent = record.name;
    detail.textContent = `${Math.max(1, Math.round(record.size / 1024 / 1024))} MB / ${new Date(record.createdAt).toLocaleString("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    loadButton.type = "button";
    loadButton.textContent = "切换";
    deleteButton.type = "button";
    deleteButton.textContent = "删除";

    loadButton.addEventListener("click", () => loadAudioRecord(record.id));
    deleteButton.addEventListener("click", async () => {
      await deleteAudioRecord(record.id);
      audioRecords = audioRecords.filter((item) => item.id !== record.id);
      renderAudioRecords();

      if (audioPlayer.dataset.recordId === record.id) {
        audioPlayer.pause();
        audioPlayer.removeAttribute("src");
        audioPlayer.load();
        audioStatus.textContent = "当前音乐已删除";
      }
    });

    actions.append(loadButton, deleteButton);
    card.append(title, detail, actions);
    audioRecordList.append(card);
  });
}

async function refreshAudioRecords() {
  audioRecords = await readAudioRecords();
  renderAudioRecords();
}

async function loadAudioRecord(id) {
  const record = await getAudioRecord(id);

  if (!record?.blob) {
    audioStatus.textContent = "未找到该音乐记录";
    await refreshAudioRecords();
    return;
  }

  if (activeAudioObjectUrl) {
    URL.revokeObjectURL(activeAudioObjectUrl);
  }

  activeAudioObjectUrl = URL.createObjectURL(record.blob);
  audioPlayer.pause();
  audioPlayer.crossOrigin = "";
  audioPlayer.src = activeAudioObjectUrl;
  audioPlayer.dataset.recordId = record.id;
  audioPlayer.load();
  audioStatus.textContent = `已切换：${record.name}，播放后开始律动`;
  setEffect("music-ref-flow");
}

async function setupAudioFiles(files) {
  const items = [...files].filter((file) => file.type.startsWith("audio/"));

  if (!items.length) {
    audioStatus.textContent = "请选择音频文件";
    return;
  }

  for (const file of items) {
    await putAudioRecord({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${file.name}`,
      name: file.name,
      type: file.type || "audio/mpeg",
      size: file.size,
      createdAt: new Date().toISOString(),
      blob: file,
    });
  }

  await refreshAudioRecords();
  await loadAudioRecord(audioRecords[0].id);
}

function startAudioAnalysis() {
  if (!audioPlayer.src) {
    return;
  }

  try {
    audioContext ??= new AudioContext();
    analyser ??= audioContext.createAnalyser();
    analyser.fftSize = 256;
    frequencyData = new Uint8Array(analyser.frequencyBinCount);

    if (!audioSource) {
      audioSource = audioContext.createMediaElementSource(audioPlayer);
      audioSource.connect(analyser);
      analyser.connect(audioContext.destination);
    }

    audioContext.resume();
    cancelAnimationFrame(audioFrameId);
    analyzeAudioFrame();
  } catch {
    audioStatus.textContent = "当前音乐无法读取频谱，请换用允许跨域访问的音频直链";
  }
}

function analyzeAudioFrame() {
  // 性能与功耗保护：非音乐效果下自动休眠，避免后台无谓运行
  if (!currentEffect.id.startsWith("music-")) {
    return;
  }

  let average = 0, bass = 0, mid = 0, treble = 0;
  let energy = 0, bassEnergy = 0, midEnergy = 0, trebleEnergy = 0;

  if (!analyser || audioPlayer.paused) {
    // 音乐未播放或暂停时，开启“虚拟声浪引擎”，模拟一种轻柔的、富有层次的虚拟律动，让氛围灯依然栩栩如生！
    const t = performance.now() / 1000;
    
    // 利用多个不同相位的 Sine 弦波模拟富有层次感的“虚拟节拍”
    energy = 0.45 + Math.sin(t * 2.2) * 0.35 + Math.cos(t * 1.4) * 0.15; // 0.1 -> 0.95 起伏
    bassEnergy = 0.40 + Math.sin(t * 1.8 + 0.5) * 0.30 + (Math.sin(t * 4.2) * 0.08); // 物理打击起伏
    midEnergy = 0.50 + Math.cos(t * 2.5) * 0.25;
    trebleEnergy = 0.35 + Math.sin(t * 3.1) * 0.25;
    
    // 限制在 [0, 1] 范围
    energy = Math.max(0, Math.min(1, energy));
    bassEnergy = Math.max(0, Math.min(1, bassEnergy));
    midEnergy = Math.max(0, Math.min(1, midEnergy));
    trebleEnergy = Math.max(0, Math.min(1, trebleEnergy));
    
    audioStatus.textContent = "虚拟声浪中：正在模拟优雅的灯光律动 (未播放音乐)";
  } else {
    // 真实播放音乐时，读取真实频谱
    analyser.getByteFrequencyData(frequencyData);
    average = frequencyData.reduce((total, value) => total + value, 0) / frequencyData.length;
    bass = frequencyData.slice(0, 12).reduce((total, value) => total + value, 0) / 12;
    mid = frequencyData.slice(12, 60).reduce((total, value) => total + value, 0) / 48;
    treble = frequencyData.slice(60, 120).reduce((total, value) => total + value, 0) / 60;
    
    energy = Math.min(1, average / 140);
    bassEnergy = Math.min(1, bass / 160);
    midEnergy = Math.min(1, mid / 140);
    trebleEnergy = Math.min(1, treble / 110);
    
    audioStatus.textContent = `律动中：能量 ${Math.round(energy * 100)}% | 低频 ${Math.round(bassEnergy * 100)}% | 基础速度 ${userSpeed.toFixed(2)}x`;
  }

  // Define dynamic beat thresholding (Bass Beat detection!)
  const isBeat = bassEnergy > 0.62;
  
  // Real-time variables optimized for extreme high-fidelity responsiveness!
  const dynamicIntensity = 0.08 + energy * 0.92;
  root.style.setProperty("--music-intensity", dynamicIntensity.toFixed(2));
  
  const dynamicScale = 0.78 + bassEnergy * 0.68; // Expands up to ~1.46x size!
  root.style.setProperty("--music-scale", dynamicScale.toFixed(2));
  
  const dynamicGlow = (3 + bassEnergy * 28).toFixed(1) + "px";
  root.style.setProperty("--music-glow", dynamicGlow);
  
  const strobe = isBeat ? 1.0 : 0.05;
  root.style.setProperty("--music-strobe", strobe.toFixed(2));

  // Frame timing
  const now = performance.now();
  const dt = lastFrameTime ? (now - lastFrameTime) / 1000 : 0.016;
  lastFrameTime = now;

  // --- JS-Driven Rhythm Motion Integration ---
  
  // 1. Rainbow Rotate Spin Kick: Spins fast on beats, decays smoothly!
  if (isBeat) {
    rotateVelocity += bassEnergy * 240 * dt; // Boost rotation speed on drum hits!
  }
  rotateVelocity *= Math.pow(0.88, 60 * dt); // Apply friction decay
  const baseRotateSpeed = userSpeed * 35;
  const activeRotateSpeed = baseRotateSpeed + rotateVelocity;
  musicRotationAngle = (musicRotationAngle || 0) + activeRotateSpeed * dt;
  root.style.setProperty("--music-rotation", `${musicRotationAngle.toFixed(1)}deg`);

  // 2. Music Flow offset: moves and pulses with music tempo & bass hits
  const speedMultiplier = userSpeed * (0.55 + bassEnergy * 1.15);
  const pathLength = Number(root.style.getPropertyValue("--path-length")) || 900;
  musicFlowOffset = (musicFlowOffset || 0) - speedMultiplier * 160 * dt;
  if (Math.abs(musicFlowOffset) > pathLength) {
    musicFlowOffset = musicFlowOffset % pathLength;
  }
  root.style.setProperty("--music-flow-offset", musicFlowOffset.toFixed(1));

  const effectId = currentEffect.id;

  // 3. Music Breathe Phase: cycle rate adapts continuously to music speed & bass hits!
  const breatheCycleSpeed = userSpeed * (0.09 + bassEnergy * 0.22);
  musicBreathePhase = ((musicBreathePhase || 0) + breatheCycleSpeed * dt) % 1.0;

  if (effectId.startsWith("music-") && effectId.includes("-color-breathe")) {
    let numColors = 2;
    if (effectId.includes("tri")) numColors = 3;
    if (effectId.includes("quad")) numColors = 4;

    const { color, opacity: breatheOpacity } = getBreatheStats(musicBreathePhase, numColors);
    
    // Real-time brightness tracks average audio energy dynamically!
    const finalOpacity = breatheOpacity * (0.12 + energy * 0.88);

    root.style.setProperty("--music-breathe-color", color);
    root.style.setProperty("--music-breathe-opacity", finalOpacity.toFixed(3));
  }

  // Handle effect-specific active JS-driven effects
  if (effectId === "music-spectrum-wave") {
    // Spectrum Wave: LED bulbs scale and flash dramatically on frequency channels!
    const totalLeds = ledConfig.groups * ledConfig.perGroup;
    const leds = ledLayer.querySelectorAll("circle");
    leds.forEach((led, idx) => {
      const ledPercent = idx / totalLeds;
      let activeVal = 0;
      if (ledPercent < 0.25) {
        activeVal = bassEnergy;
      } else if (ledPercent < 0.75) {
        activeVal = midEnergy;
      } else {
        activeVal = trebleEnergy;
      }
      
      const isStart = led.classList.contains("is-start");
      // Color shifts: bass yields red-ish glow, mid yields green-cyan, treble yields blue-violet!
      let r = 51, g = 230, b = 197;
      if (ledPercent < 0.25) {
        // Bass: Red-Orange
        r = Math.round(200 + activeVal * 55);
        g = Math.round(50 + activeVal * 80);
        b = Math.round(50 - activeVal * 30);
      } else if (ledPercent < 0.75) {
        // Mid: Green-Cyan
        r = Math.round(51 - activeVal * 20);
        g = Math.round(230 + activeVal * 25);
        b = Math.round(150 + activeVal * 47);
      } else {
        // Treble: Blue-Purple
        r = Math.round(100 + activeVal * 80);
        g = Math.round(100 - activeVal * 80);
        b = Math.round(230 + activeVal * 25);
      }
      
      led.style.fill = isStart ? `rgb(255, 235, 150)` : `rgb(${r}, ${g}, ${b})`;
      led.style.opacity = (0.15 + activeVal * 0.85).toFixed(2);
      led.style.r = (2.5 + activeVal * 2.5).toFixed(1); // Bulb scales up to 5px on hits!
    });
  } else if (effectId === "music-fireworks") {
    // Spark burst triggers exactly on drum hits!
    if (isBeat && Math.random() < 0.22) {
      triggerSparkBurst(pathLength);
    }
  }

  audioFrameId = requestAnimationFrame(analyzeAudioFrame);
}

function triggerSparkBurst(length) {
  if (!length) return;
  const count = 4 + Math.floor(Math.random() * 4);
  const baseIdx = Math.floor(Math.random() * count);
  const point = lightPath.getPointAtLength((length / count) * baseIdx + Math.random() * 20);
  if (!point || isNaN(point.x) || isNaN(point.y)) return;
  
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const spark = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    spark.setAttribute("cx", point.x.toFixed(2));
    spark.setAttribute("cy", point.y.toFixed(2));
    spark.setAttribute("r", "2");
    spark.style.fill = `hsl(${Math.random() * 360}, 95%, 70%)`;
    spark.style.opacity = "1";
    
    const driftX = Math.cos(angle) * (15 + Math.random() * 15);
    const driftY = Math.sin(angle) * (15 + Math.random() * 15);
    spark.animate([
      { transform: 'translate(0px, 0px)', opacity: 1, r: '2.5px' },
      { transform: `translate(${driftX.toFixed(1)}px, ${driftY.toFixed(1)}px)`, opacity: 0, r: '0.5px' }
    ], {
      duration: 500 + Math.random() * 300,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });
    
    sparkLayer.appendChild(spark);
    setTimeout(() => spark.remove(), 800);
  }
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadAnimatedSvgFallback() {
  const path = currentShape.path;
  const color = isRainbow ? "#ffd45f" : colorPicker.value;
  const length = Math.round(lightPath.getTotalLength() || 900);
  const rainbowPath = `
  <defs>
    <linearGradient id="exportRainbow" x1="22%" y1="12%" x2="82%" y2="88%">
      <stop offset="0%" stop-color="#39f5ce"/>
      <stop offset="24%" stop-color="#7cf26d"/>
      <stop offset="48%" stop-color="#ffd45f"/>
      <stop offset="72%" stop-color="#ff6d7a"/>
      <stop offset="100%" stop-color="#61a8ff"/>
      <animateTransform attributeName="gradientTransform" type="rotate" from="0 0.5 0.5" to="360 0.5 0.5" dur="18s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <path d="${path}" fill="none" stroke="url(#exportRainbow)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`;
  const singlePath = `
  <path d="${path}" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"
    stroke-dasharray="${Math.round(length * 0.28)} ${Math.round(length * 0.72)}" stroke-dashoffset="0">
    <animate attributeName="stroke-dashoffset" from="0" to="-${length}" dur="${Math.max(0.45, 2 / Number(speedSlider.value)).toFixed(2)}s" repeatCount="indefinite"/>
  </path>`;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="720" height="720" viewBox="0 0 300 300">
  <rect width="300" height="300" fill="#101210"/>
  <path d="${path}" fill="none" stroke="rgba(239,232,210,0.18)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  ${isRainbow ? rainbowPath : singlePath}
</svg>`;
  downloadBlob(new Blob([svg], { type: "image/svg+xml" }), "ambient-light-effect.svg");
}

async function recordPreviewAnimation() {
  const stream = document.querySelector(".device-bay").captureStream?.(30);

  if (!stream || typeof MediaRecorder === "undefined") {
    downloadAnimatedSvgFallback();
    audioStatus.textContent = "当前浏览器不支持录制预览，已下载 SVG 动画";
    return;
  }

  recordedChunks = [];
  recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  recorder.addEventListener("dataavailable", (event) => {
    if (event.data.size) {
      recordedChunks.push(event.data);
    }
  });
  recorder.addEventListener("stop", () => {
    downloadBlob(new Blob(recordedChunks, { type: "video/webm" }), "ambient-light-effect.webm");
    recordAnimation.textContent = "下载动画";
  });
  recorder.start();
  recordAnimation.textContent = "录制中 5s";
  setTimeout(() => recorder?.state === "recording" && recorder.stop(), 5000);
}

function downloadSnapshotFile() {
  const snapshot = {
    exportedAt: new Date().toISOString(),
    state: getCurrentState(),
  };
  downloadBlob(new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" }), "ambient-light-style.json");
}

function setupTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === tab.dataset.tab);
      });
    });
  });
}

function drawGuide() {
  drawContext.clearRect(0, 0, drawBoard.width, drawBoard.height);
  drawContext.lineWidth = 1;
  drawContext.strokeStyle = "rgba(239, 232, 210, 0.15)";

  for (let x = 24; x < drawBoard.width; x += 24) {
    drawContext.beginPath();
    drawContext.moveTo(x, 0);
    drawContext.lineTo(x, drawBoard.height);
    drawContext.stroke();
  }

  for (let y = 24; y < drawBoard.height; y += 24) {
    drawContext.beginPath();
    drawContext.moveTo(0, y);
    drawContext.lineTo(drawBoard.width, y);
    drawContext.stroke();
  }

  drawLine(drawPoints, colorPicker.value, 4);
  drawLine(pointDrawPoints, "#d9b35f", 3);

  pointDrawPoints.forEach((point, index) => {
    drawContext.beginPath();
    drawContext.fillStyle = index === 0 ? "#33e6c5" : "#d9b35f";
    drawContext.shadowColor = drawContext.fillStyle;
    drawContext.shadowBlur = 8;
    drawContext.arc(point.x, point.y, 4.2, 0, Math.PI * 2);
    drawContext.fill();
    drawContext.shadowBlur = 0;
  });
}

function drawLine(points, color, width) {
  if (points.length < 2) {
    return;
  }

  drawContext.lineWidth = width;
  drawContext.lineCap = "round";
  drawContext.lineJoin = "round";
  drawContext.strokeStyle = color;
  drawContext.shadowColor = color;
  drawContext.shadowBlur = 10;
  drawContext.beginPath();
  points.forEach((point, index) => {
    if (index === 0) {
      drawContext.moveTo(point.x, point.y);
    } else {
      drawContext.lineTo(point.x, point.y);
    }
  });
  drawContext.stroke();
  drawContext.shadowBlur = 0;
}

function getBoardPoint(event) {
  const rect = drawBoard.getBoundingClientRect();
  const scaleX = drawBoard.width / rect.width;
  const scaleY = drawBoard.height / rect.height;
  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY,
  };
}

function simplifyPoints(points, step = 6) {
  return points.filter((_, index) => index % step === 0).slice(0, 64);
}

function pointsToPath(points, { closed = true } = {}) {
  const simplified = points.length > 12 ? simplifyPoints(points) : points;

  if (simplified.length < (closed ? 4 : 2)) {
    return "";
  }

  const scaleX = 300 / drawBoard.width;
  const scaleY = 300 / drawBoard.height;
  const normalized = simplified.map((point) => ({
    x: Math.max(26, Math.min(274, point.x * scaleX)),
    y: Math.max(26, Math.min(274, point.y * scaleY)),
  }));

  const [first, ...rest] = normalized;
  const lines = rest.map((point) => `L${point.x.toFixed(1)} ${point.y.toFixed(1)}`);
  return `M${first.x.toFixed(1)} ${first.y.toFixed(1)} ${lines.join(" ")}${closed ? " Z" : ""}`;
}

function applyCustomPath(points, name, options) {
  const path = pointsToPath(points, options);

  if (!path) {
    pointCount.textContent = "点太少";
    return;
  }

  currentShape = { id: "custom", name, path };
  setPath(path, currentShape.name);
  document.querySelectorAll(".shape-button").forEach((button) => button.classList.remove("is-active"));
}

function imageDataToPath(imageData, width, height) {
  const data = imageData.data;
  const step = Math.max(1, Math.floor(Math.min(width, height) / 140));
  let alphaBounds = { minX: width, minY: height, maxX: 0, maxY: 0 };

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (data[(y * width + x) * 4 + 3] <= 40) {
        continue;
      }

      alphaBounds = {
        minX: Math.min(alphaBounds.minX, x),
        minY: Math.min(alphaBounds.minY, y),
        maxX: Math.max(alphaBounds.maxX, x),
        maxY: Math.max(alphaBounds.maxY, y),
      };
    }
  }

  if (alphaBounds.minX > alphaBounds.maxX || alphaBounds.minY > alphaBounds.maxY) {
    return "";
  }

  const sampleSize = Math.max(2, Math.floor(Math.min(alphaBounds.maxX - alphaBounds.minX, alphaBounds.maxY - alphaBounds.minY) / 18));
  const cornerSamples = [
    { x: alphaBounds.minX + sampleSize, y: alphaBounds.minY + sampleSize },
    { x: alphaBounds.maxX - sampleSize, y: alphaBounds.minY + sampleSize },
    { x: alphaBounds.minX + sampleSize, y: alphaBounds.maxY - sampleSize },
    { x: alphaBounds.maxX - sampleSize, y: alphaBounds.maxY - sampleSize },
  ];
  const background = cornerSamples.reduce(
    (total, sample) => {
      const index = (sample.y * width + sample.x) * 4;
      return {
        r: total.r + data[index] / cornerSamples.length,
        g: total.g + data[index + 1] / cornerSamples.length,
        b: total.b + data[index + 2] / cornerSamples.length,
        a: total.a + data[index + 3] / cornerSamples.length,
      };
    },
    { r: 0, g: 0, b: 0, a: 0 },
  );
  let transparentPixels = 0;
  const alphaArea = Math.max(1, (alphaBounds.maxX - alphaBounds.minX + 1) * (alphaBounds.maxY - alphaBounds.minY + 1));

  for (let y = alphaBounds.minY; y <= alphaBounds.maxY; y += 1) {
    for (let x = alphaBounds.minX; x <= alphaBounds.maxX; x += 1) {
      if (data[(y * width + x) * 4 + 3] < 80) {
        transparentPixels += 1;
      }
    }
  }

  const usesTransparency = alphaArea < width * height * 0.55 || transparentPixels > alphaArea * 0.08;

  function isForeground(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      return false;
    }

    const index = (y * width + x) * 4;
    const alpha = data[index + 3];

    if (usesTransparency) {
      return alpha > 40;
    }

    const colorDistance = Math.hypot(data[index] - background.r, data[index + 1] - background.g, data[index + 2] - background.b);
    const brightness = (data[index] + data[index + 1] + data[index + 2]) / 3;
    const backgroundBrightness = (background.r + background.g + background.b) / 3;
    return alpha > 40 && (colorDistance > 34 || Math.abs(brightness - backgroundBrightness) > 28);
  }

  const points = [];
  let bounds = { minX: width, minY: height, maxX: 0, maxY: 0 };
  let foregroundCount = 0;

  for (let y = step; y < height - step; y += step) {
    for (let x = step; x < width - step; x += step) {
      if (!isForeground(x, y)) {
        continue;
      }

      foregroundCount += 1;
      bounds = {
        minX: Math.min(bounds.minX, x),
        minY: Math.min(bounds.minY, y),
        maxX: Math.max(bounds.maxX, x),
        maxY: Math.max(bounds.maxY, y),
      };

      const neighbors = [
        { x, y: y - step },
        { x, y: y + step },
        { x: x - step, y },
        { x: x + step, y },
      ];
      const isEdge = neighbors.some((neighbor) => !isForeground(neighbor.x, neighbor.y));

      if (isEdge) {
        points.push({ x, y });
      }
    }
  }

  if (points.length < 8) {
    return "";
  }

  function cross(origin, a, b) {
    return (a.x - origin.x) * (b.y - origin.y) - (a.y - origin.y) * (b.x - origin.x);
  }

  function convexHull(items) {
    const sortedItems = [...items]
      .sort((a, b) => a.x - b.x || a.y - b.y)
      .filter((point, index, array) => index === 0 || point.x !== array[index - 1].x || point.y !== array[index - 1].y);

    if (sortedItems.length <= 3) {
      return sortedItems;
    }

    const lower = [];
    sortedItems.forEach((point) => {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
        lower.pop();
      }
      lower.push(point);
    });

    const upper = [];
    [...sortedItems].reverse().forEach((point) => {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
        upper.pop();
      }
      upper.push(point);
    });

    return lower.slice(0, -1).concat(upper.slice(0, -1));
  }

  function distanceToLine(point, start, end) {
    const lineLength = Math.hypot(end.x - start.x, end.y - start.y);

    if (lineLength === 0) {
      return Math.hypot(point.x - start.x, point.y - start.y);
    }

    return Math.abs((end.y - start.y) * point.x - (end.x - start.x) * point.y + end.x * start.y - end.y * start.x) / lineLength;
  }

  function simplifyPath(items, tolerance) {
    if (items.length <= 3) {
      return items;
    }

    let maxDistance = 0;
    let splitIndex = 0;
    const lastIndex = items.length - 1;

    for (let index = 1; index < lastIndex; index += 1) {
      const distance = distanceToLine(items[index], items[0], items[lastIndex]);

      if (distance > maxDistance) {
        maxDistance = distance;
        splitIndex = index;
      }
    }

    if (maxDistance > tolerance) {
      const first = simplifyPath(items.slice(0, splitIndex + 1), tolerance);
      const second = simplifyPath(items.slice(splitIndex), tolerance);
      return first.slice(0, -1).concat(second);
    }

    return [items[0], items[lastIndex]];
  }

  function removeTinySegments(items, minDistance) {
    return items.filter((point, index, array) => {
      if (index === 0) {
        return true;
      }

      const previous = array[index - 1];
      return Math.hypot(point.x - previous.x, point.y - previous.y) >= minDistance;
    });
  }

  const boundsWidth = Math.max(1, bounds.maxX - bounds.minX);
  const boundsHeight = Math.max(1, bounds.maxY - bounds.minY);
  const density = (foregroundCount * step * step) / Math.max(1, boundsWidth * boundsHeight);
  const hull = convexHull(points);
  const pathPoints =
    density < 0.22
      ? removeTinySegments(simplifyPath([...hull, hull[0]], Math.max(5, Math.min(boundsWidth, boundsHeight) * 0.06)).slice(0, -1), Math.max(6, Math.min(boundsWidth, boundsHeight) * 0.05))
      : points;
  const center = points.reduce(
    (total, point) => ({ x: total.x + point.x / points.length, y: total.y + point.y / points.length }),
    { x: 0, y: 0 },
  );
  const sorted = pathPoints
    .sort((a, b) => Math.atan2(a.y - center.y, a.x - center.x) - Math.atan2(b.y - center.y, b.x - center.x))
    .filter((_, index) => index % Math.max(1, Math.floor(pathPoints.length / 90)) === 0)
    .slice(0, 120);
  const fitSize = Math.max(boundsWidth, boundsHeight);
  const offsetX = bounds.minX - Math.max(0, (fitSize - boundsWidth) / 2);
  const offsetY = bounds.minY - Math.max(0, (fitSize - boundsHeight) / 2);
  const normalized = removeTinySegments(
    sorted.map((point) => ({
      x: 34 + ((point.x - offsetX) / fitSize) * 232,
      y: 34 + ((point.y - offsetY) / fitSize) * 232,
    })),
    10,
  );
  const [first, ...rest] = normalized;
  const lines = rest.map((point) => `L${point.x.toFixed(1)} ${point.y.toFixed(1)}`);
  return `M${first.x.toFixed(1)} ${first.y.toFixed(1)} ${lines.join(" ")} Z`;
}

function importPngShape(file) {
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const image = new Image();
    image.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const size = 280;
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, size, size);
      const scale = Math.min(size / image.width, size / image.height);
      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;
      context.drawImage(image, (size - drawWidth) / 2, (size - drawHeight) / 2, drawWidth, drawHeight);
      const path = imageDataToPath(context.getImageData(0, 0, size, size), size, size);

      if (!path) {
        pngStatus.textContent = "未识别到清晰轮廓，请换透明背景或高对比 PNG";
        return;
      }

      currentShape = { id: "png-shape", name: "PNG识别形状", path };
      setPath(path, currentShape.name);
      pngStatus.textContent = `已识别：${file.name}`;
      saveUploadedShapeRecord(file.name, path);
      document.querySelectorAll(".shape-button").forEach((button) => button.classList.remove("is-active"));
    });
    image.src = reader.result;
  });
  reader.readAsDataURL(file);
}

function setupDrawing() {
  drawGuide();

  drawModeSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-draw-mode]");

    if (!button) {
      return;
    }

    drawMode = button.dataset.drawMode;
    drawModeSwitch.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    pointCount.textContent = drawMode === "point" ? `${pointDrawPoints.length} breakpoints` : `${drawPoints.length} points`;
  });

  drawBoard.addEventListener("pointerdown", (event) => {
    if (drawMode === "point") {
      pointDrawPoints.push(getBoardPoint(event));
      pointCount.textContent = `${pointDrawPoints.length} breakpoints`;
      drawGuide();
      return;
    }

    drawBoard.setPointerCapture(event.pointerId);
    isDrawing = true;
    drawPoints = [getBoardPoint(event)];
    pointCount.textContent = "1 point";
    drawGuide();
  });

  drawBoard.addEventListener("pointermove", (event) => {
    if (!isDrawing || drawMode === "point") {
      return;
    }

    drawPoints.push(getBoardPoint(event));
    pointCount.textContent = `${drawPoints.length} points`;
    drawGuide();
  });

  drawBoard.addEventListener("pointerup", () => {
    isDrawing = false;
  });

  drawBoard.addEventListener("dblclick", () => {
    if (drawMode === "point") {
      applyCustomPath(pointDrawPoints, "断点形状", { closed: false });
    }
  });

  drawBoard.addEventListener("pointercancel", () => {
    isDrawing = false;
  });

  clearDraw.addEventListener("click", () => {
    drawPoints = [];
    pointDrawPoints = [];
    pointCount.textContent = drawMode === "point" ? "0 breakpoints" : "0 points";
    drawGuide();
  });

  undoPoint.addEventListener("click", () => {
    if (drawMode === "point") {
      pointDrawPoints.pop();
      pointCount.textContent = `${pointDrawPoints.length} breakpoints`;
    } else {
      drawPoints.pop();
      pointCount.textContent = `${drawPoints.length} points`;
    }
    drawGuide();
  });

  applyDraw.addEventListener("click", () => {
    applyCustomPath(drawPoints, "手绘形状");
  });

  applyPointDraw.addEventListener("click", () => {
    applyCustomPath(pointDrawPoints, "断点形状", { closed: false });
  });
}

function setupControls() {
  colorPicker.addEventListener("input", (event) => {
    setColor(event.target.value);
    setRainbow(false);
    drawGuide();
  });
  rainbowToggle.addEventListener("click", () => setRainbow(!isRainbow));
  speedSlider.addEventListener("input", (event) => setSpeed(event.target.value));
  intensitySlider.addEventListener("input", (event) => setIntensity(event.target.value));
  groupCountInput.addEventListener("input", () => {
    setLedConfig(groupCountInput.value, lightsPerGroupInput.value);
  });
  lightsPerGroupInput.addEventListener("input", () => {
    setLedConfig(groupCountInput.value, lightsPerGroupInput.value);
  });
  pngShapeInput.addEventListener("change", (event) => {
    importPngShape(event.target.files[0]);
  });
  applyCustomEffect.addEventListener("click", applyGeneratedEffect);
  audioInput.addEventListener("change", (event) => {
    setupAudioFiles(event.target.files);
    audioInput.value = "";
  });
  audioPlayer.addEventListener("error", () => {
    audioStatus.textContent = "音乐加载失败，请重新上传或切换其他音乐";
  });
  audioPlayer.addEventListener("play", startAudioAnalysis);
  audioPlayer.addEventListener("pause", () => {
    cancelAnimationFrame(audioFrameId);
    applyEffectiveSpeed(userSpeed);
    audioStatus.textContent = "已暂停音乐律动";
  });
  recordAnimation.addEventListener("click", recordPreviewAnimation);
  downloadSnapshot.addEventListener("click", downloadSnapshotFile);
  saveModelRecord.addEventListener("click", saveCurrentModelRecord);
  modelNameInput.addEventListener("input", updateSelectedSummary);
  modelTagInput.addEventListener("input", updateSelectedSummary);
  modelFilterInput.addEventListener("input", renderRecords);
  applyPath.addEventListener("click", () => {
    const path = pathInput.value.trim();

    if (!path) {
      return;
    }

    currentShape = { id: "custom-path", name: "路径形状", path };
    setPath(path, currentShape.name);
    document.querySelectorAll(".shape-button").forEach((button) => button.classList.remove("is-active"));
  });
}

function applyPendingUploadedShape() {
  let pendingShape;

  try {
    pendingShape = JSON.parse(localStorage.getItem("ambientLightPendingShape") ?? "null");
  } catch {
    pendingShape = null;
  }

  if (!pendingShape?.path) {
    return;
  }

  currentShape = {
    id: pendingShape.id || "uploaded-shape",
    name: pendingShape.name || "上传记录形状",
    path: pendingShape.path,
  };
  setPath(currentShape.path, currentShape.name);
  pngStatus.textContent = `已载入上传记录：${currentShape.name}`;
  document.querySelectorAll(".shape-button").forEach((button) => button.classList.remove("is-active"));
  localStorage.removeItem("ambientLightPendingShape");
}

function boot() {
  loadRecords();
  loadUploadedShapeRecords();
  renderEffects();
  renderShapes();
  renderScenarios();
  renderRecords();
  setupTabs();
  setupDrawing();
  setupControls();
  refreshAudioRecords();
  setColor(colorPicker.value);
  setSpeed(speedSlider.value);
  setIntensity(intensitySlider.value);
  setLedConfig(groupCountInput.value, lightsPerGroupInput.value);
  setShape(currentShape.id);
  setEffect(currentEffect.id);
  applyPendingUploadedShape();
}

boot();
