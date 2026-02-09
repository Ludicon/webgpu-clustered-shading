const V = /* @__PURE__ */ Object.assign({ "./spark_astc_rgb.wgsl": () => import("./spark_astc_rgb-DaSIMKXW.js"), "./spark_astc_rgba.wgsl": () => import("./spark_astc_rgba-BToA2Rcq.js"), "./spark_bc1_rgb.wgsl": () => import("./spark_bc1_rgb-DZwuM1tO.js"), "./spark_bc4_r.wgsl": () => import("./spark_bc4_r-DjThizCH.js"), "./spark_bc5_rg.wgsl": () => import("./spark_bc5_rg-6bO0Gvo9.js"), "./spark_bc7_rgb.wgsl": () => import("./spark_bc7_rgb-FXpBw9fE.js"), "./spark_bc7_rgba.wgsl": () => import("./spark_bc7_rgba-C8Hi2pUY.js"), "./spark_eac_r.wgsl": () => import("./spark_eac_r-D8HGiglc.js"), "./spark_eac_rg.wgsl": () => import("./spark_eac_rg-DvsrLP9h.js"), "./spark_etc2_rgb.wgsl": () => import("./spark_etc2_rgb-C-j5FZpn.js"), "./utils.wgsl": () => import("./utils-DQWUlSJb.js") }), I = Object.fromEntries(
  Object.entries(V).map(([u, e]) => [u.replace("./", ""), async () => (await e()).default])
), s = {
  ASTC_4x4_RGB: 0,
  ASTC_4x4_RGBA: 1,
  // ASTC_4x4_RGBM: 2,
  // ASTC_6x6_RGB: 3,
  EAC_R: 4,
  EAC_RG: 5,
  ETC2_RGB: 6,
  // ETC2_RGBA: 7,
  // ETC2_RGBM: 8,
  BC1_RGB: 9,
  // BC3_RGBA: 10,
  // BC3_YCoCg: 11,
  // BC3_RGBM: 12,
  BC4_R: 13,
  BC5_RG: 14,
  // BC6H_RGB: 15,
  BC7_RGB: 16,
  BC7_RGBA: 17
}, G = [
  /* 0  */
  "astc-4x4-rgb",
  // ASTC_4x4_RGB
  /* 1  */
  "astc-4x4-rgba",
  // ASTC_4x4_RGBA
  /* 2  */
  null,
  /* 3  */
  null,
  /* 4  */
  "eac-r",
  // EAC_R
  /* 5  */
  "eac-rg",
  // EAC_RG
  /* 6  */
  "etc2-rgb",
  // ETC2_RGB
  /* 7  */
  null,
  /* 8  */
  null,
  /* 9  */
  "bc1-rgb",
  // BC1_RGB
  /* 10 */
  null,
  /* 11 */
  null,
  /* 12 */
  null,
  /* 13 */
  "bc4-r",
  // BC4_R
  /* 14 */
  "bc5-rg",
  // BC5_RG
  /* 15 */
  null,
  /* 16 */
  "bc7-rgb",
  // BC7_RGB
  /* 17 */
  "bc7-rgba"
  // BC7_RGBA
], q = [
  /* 0  */
  "spark_astc_rgb.wgsl",
  // ASTC_4x4_RGB
  /* 1  */
  "spark_astc_rgba.wgsl",
  // ASTC_4x4_RGBA
  /* 2  */
  null,
  /* 3  */
  null,
  /* 4  */
  "spark_eac_r.wgsl",
  // EAC_R
  /* 5  */
  "spark_eac_rg.wgsl",
  // EAC_RG
  /* 6  */
  "spark_etc2_rgb.wgsl",
  // ETC2_RGB
  /* 7  */
  null,
  /* 8  */
  null,
  /* 9  */
  "spark_bc1_rgb.wgsl",
  // BC1_RGB
  /* 10 */
  null,
  /* 11 */
  null,
  /* 12 */
  null,
  /* 13 */
  "spark_bc4_r.wgsl",
  // BC4_R
  /* 14 */
  "spark_bc5_rg.wgsl",
  // BC5_RG
  /* 15 */
  null,
  /* 16 */
  "spark_bc7_rgb.wgsl",
  // BC7_RGB
  /* 17 */
  "spark_bc7_rgba.wgsl"
  // BC7_RGBA
], W = [
  /* 0  */
  16,
  // ASTC_4x4_RGB
  /* 1  */
  16,
  // ASTC_4x4_RGBA
  /* 2  */
  0,
  /* 3  */
  0,
  /* 4  */
  8,
  // EAC_R
  /* 5  */
  16,
  // EAC_RG
  /* 6  */
  8,
  // ETC2_RGB
  /* 7  */
  0,
  /* 8  */
  0,
  /* 9  */
  8,
  // BC1_RGB
  /* 10 */
  0,
  /* 11 */
  0,
  /* 12 */
  0,
  /* 13 */
  8,
  // BC4_R
  /* 14 */
  16,
  // BC5_RG
  /* 15 */
  0,
  /* 16 */
  16,
  // BC7_RGB
  /* 17 */
  16
  // BC7_RGB
], Y = [
  /* 0  */
  4,
  // ASTC_4x4_RGB
  /* 1  */
  4,
  // ASTC_4x4_RGBA
  /* 2  */
  0,
  /* 3  */
  0,
  /* 4  */
  2,
  // EAC_R
  /* 5  */
  2,
  // EAC_RG
  /* 6  */
  8,
  // ETC2_RGB
  /* 7  */
  0,
  /* 8  */
  0,
  /* 9  */
  8,
  // BC1_RGB
  /* 10 */
  0,
  /* 11 */
  0,
  /* 12 */
  0,
  /* 13 */
  2,
  // BC4_R
  /* 14 */
  2,
  // BC5_RG
  /* 15 */
  0,
  /* 16 */
  4,
  // BC7_RGB
  /* 17 */
  4
  // BC7_RGB
], P = Object.freeze({
  "astc-4x4-rgb": s.ASTC_4x4_RGB,
  "astc-4x4-rgba": s.ASTC_4x4_RGBA,
  "eac-r": s.EAC_R,
  "eac-rg": s.EAC_RG,
  "etc2-rgb": s.ETC2_RGB,
  "bc1-rgb": s.BC1_RGB,
  "bc4-r": s.BC4_R,
  "bc5-rg": s.BC5_RG,
  "bc7-rgb": s.BC7_RGB,
  "bc7-rgba": s.BC7_RGBA,
  // aliases:
  "astc-rgb": s.ASTC_4x4_RGB,
  "astc-rgba": s.ASTC_4x4_RGBA,
  // webgpu aliases:
  "bc1-rgba-unorm": s.BC1_RGB,
  "bc1-rgba-unorm-srgb": s.BC1_RGB,
  "bc4-r-unorm": s.BC4_R,
  "bc5-rg-unorm": s.BC5_RG,
  "bc7-rgba-unorm": s.BC7_RGBA,
  "bc7-rgba-unorm-srgb": s.BC7_RGBA,
  "etc2-rgb8unorm": s.ETC2_RGB,
  "etc2-rgb8unorm-srgb": s.ETC2_RGB,
  "eac-r11unorm": s.EAC_R,
  "eac-rg11unorm": s.EAC_RG,
  "astc-4x4-unorm": s.ASTC_4x4_RGBA,
  "astc-4x4-unorm-srgb": s.ASTC_4x4_RGBA
}), $ = [
  /* 0  */
  "astc-4x4-unorm",
  // ASTC_4x4_RGB
  /* 1  */
  "astc-4x4-unorm",
  // ASTC_4x4_RGBA
  /* 2  */
  null,
  /* 3  */
  null,
  /* 4  */
  "eac-r11unorm",
  // EAC_R
  /* 5  */
  "eac-rg11unorm",
  // EAC_RG
  /* 6  */
  "etc2-rgb8unorm",
  // ETC2_RGB
  /* 7  */
  null,
  /* 8  */
  null,
  /* 9  */
  "bc1-rgba-unorm",
  // BC1_RGB
  /* 10 */
  null,
  /* 11 */
  null,
  /* 12 */
  null,
  /* 13 */
  "bc4-r-unorm",
  // BC4_R
  /* 14 */
  "bc5-rg-unorm",
  // BC5_RG
  /* 15 */
  null,
  /* 16 */
  "bc7-rgba-unorm",
  // BC7_RGB
  /* 17 */
  "bc7-rgba-unorm"
  // BC7_RGB
], X = [
  /* 0  */
  !0,
  // ASTC_4x4_RGB
  /* 1  */
  !0,
  // ASTC_4x4_RGBA
  /* 2  */
  null,
  /* 3  */
  null,
  /* 4  */
  !1,
  // EAC_R
  /* 5  */
  !1,
  // EAC_RG
  /* 6  */
  !0,
  // ETC2_RGB
  /* 7  */
  null,
  /* 8  */
  null,
  /* 9  */
  !0,
  // BC1_RGB
  /* 10 */
  null,
  /* 11 */
  null,
  /* 12 */
  null,
  /* 13 */
  !1,
  // BC4_R
  /* 14 */
  !1,
  // BC5_RG
  /* 15 */
  null,
  /* 16 */
  !0,
  // BC7_RGB
  /* 17 */
  !0
  // BC7_RGB
];
function w(u, e) {
  if (!u)
    throw new Error(e);
}
function H(u) {
  return typeof GPUDevice < "u" && u instanceof GPUDevice;
}
function j() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function O() {
  const u = navigator.userAgent;
  if (u.includes("Chrome") || u.includes("Chromium"))
    return null;
  const e = u.match(/Safari\/(\d+(\.\d+)?)/);
  return e && parseFloat(e[1]);
}
function k() {
  const u = navigator.userAgent.match(/Firefox\/(\d+(\.\d+)?)/);
  return u && parseFloat(u[1]);
}
function Q(u) {
  const e = /* @__PURE__ */ new Set(), r = {
    "texture-compression-bc": [
      s.BC1_RGB,
      s.BC4_R,
      s.BC5_RG,
      s.BC7_RGB,
      s.BC7_RGBA
    ],
    "texture-compression-etc2": [s.ETC2_RGB, s.EAC_R, s.EAC_RG],
    "texture-compression-astc": [s.ASTC_4x4_RGB, s.ASTC_4x4_RGBA]
  };
  for (const [t, i] of Object.entries(r))
    if (u.features.has(t))
      for (const a of i)
        e.add(a);
  return e;
}
function Z(u) {
  const e = document.createElement("canvas");
  e.width = u.width, e.height = u.height;
  const r = e.getContext("2d");
  r.drawImage(u, 0, 0);
  const t = r.getImageData(0, 0, u.width, u.height);
  return new Uint8Array(t.data.buffer);
}
function J(u) {
  return /\.svg(?:$|\?)/i.test(u) || /^data:image\/svg\+xml[,;]/i.test(u);
}
function K(u) {
  return new Promise((e, r) => {
    const t = new Image();
    t.crossOrigin = "anonymous", t.decoding = "async", t.onload = () => e(t), t.onerror = r, t.src = u;
  });
}
async function ee(u, e = {}) {
  const r = await fetch(u, { mode: "cors" });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${u}`);
  const t = await r.blob();
  return createImageBitmap(t, {
    imageOrientation: e.flipY ? "flipY" : "none",
    colorSpaceConversion: e.colorSpaceConversion ?? "none",
    premultiplyAlpha: "none"
  });
}
const te = O();
function N(u) {
  return J(u) || te ? K(u) : ee(u);
}
const L = 256, F = 4;
function re(u, e, r, t) {
  let i = 0, a = 0;
  const n = [];
  do {
    const o = Math.ceil(u / 4), c = Math.ceil(e / 4), l = Math.ceil(o * r / L) * L, f = c * l;
    i++, n.push({ offset: a, alignedSize: f, w: u, h: e, bw: o, bh: c, bytesPerRow: l }), a += f, u = Math.max(1, Math.floor(u / 2)), e = Math.max(1, Math.floor(e / 2));
  } while (t && (u >= F || e >= F));
  return { mipmapCount: i, outputSize: a, bufferRanges: n };
}
class D {
  #e;
  #m;
  #l = [];
  #d;
  #a = !1;
  #s;
  #o;
  #u;
  #g;
  #i;
  #n = new Array(3);
  #r;
  #p;
  #c;
  #R = 0;
  #f = !1;
  /**
   * Initialize the encoder by detecting available compression formats.
   * @param {GPUDevice} device - WebGPU device.
   * @param {Object} options - Encoder options.
   * @param {boolean} options.preload - Whether to preload all encoder pipelines (false by default).
   * @param {boolean} options.verbose - Whether to enable verbose logging (false by default).
   * @returns {Promise<void>} Resolves when initialization is complete.
   */
  static async create(e, r = {}) {
    const t = new D();
    return await t.#P(
      e,
      r.preload ?? !1,
      r.useTimestampQueries ?? !1,
      r.verbose ?? !1
    ), t;
  }
  #T(...e) {
    this.#f && console.log(...e);
  }
  #h(e) {
    this.#f && console.time(e);
  }
  #b(e) {
    this.#f && console.timeEnd(e);
  }
  /**
   * Returns a list of supported texture compression format names.
   *
   * This function checks a predefined list of common GPU compression formats
   * (ASTC, ETC2, EAC, BCn) and filters it based on the formats actually supported
   * by the current device as determined by `Spark.supportedFormats`.
   *
   * @returns {string[]} An array of format names (e.g., "bc1-rgb", "astc-4x4-rgba") that are supported on the current platform.
   *
   * @example
   * const spark = await Spark.create(device);
   * const formats = spark.enumerateSupportedFormats();
   * console.log("Supported formats:", formats);
   */
  enumerateSupportedFormats() {
    const e = [
      "astc-4x4-rgb",
      "astc-4x4-rgba",
      "eac-r",
      "eac-rg",
      "etc2-rgb",
      "bc1-rgb",
      "bc4-r",
      "bc5-rg",
      "bc7-rgb",
      "bc7-rgba"
    ], r = [];
    for (const t of e) {
      const i = P[t];
      if (this.#t(i)) {
        const a = Y[i];
        r.push({ format: t, ratio: a });
      }
    }
    return r;
  }
  /**
   * Determines the set of WebGPU features to request when initializing the device.
   *
   * This function inspects the given `adapter` to see which texture compression and shader
   * features are available, and returns a list of those that are both supported and safe to enable.
   *
   * @param {GPUAdapter} adapter - The WebGPU adapter returned from `navigator.gpu.requestAdapter()`.
   * @returns {string[]} An array of WebGPU feature names to request during `adapter.requestDevice()`.
   *
   * @example
   * // Create device using the features required by spark.js
   * const adapter = await navigator.gpu.requestAdapter()
   * const requiredFeatures = Spark.getRequiredFeatures(adapter)
   * const device = await adapter.requestDevice({ requiredFeatures })
   *
   * // Create spark object for the given device.
   * const spark = Spark.create(device)
   */
  static getRequiredFeatures(e) {
    const r = [];
    return !j() && e.features.has("texture-compression-bc") && r.push("texture-compression-bc"), e.features.has("texture-compression-etc2") && r.push("texture-compression-etc2"), e.features.has("texture-compression-astc") && r.push("texture-compression-astc"), e.features.has("shader-f16") && r.push("shader-f16"), e.features.has("timestamp-query") && r.push("timestamp-query"), r;
  }
  /**
   * Try to determine the best compression options automatically. Do not use this in production, this is
   * for the convenience of the spark.js image viewer only.
   *
   * @param {string | HTMLImageElement | ImageBitmap | GPUTexture} source - Image input.
   * @param {Object} options - Encoding options.
   * @returns {Object} - Recommended encoding options with an explicit encoding format.
   */
  async selectPreferredOptions(e, r = {}) {
    if (r.format == null || r.format == "auto") {
      const t = e instanceof Image || e instanceof ImageBitmap || e instanceof GPUTexture ? e : await N(e);
      r.format = "auto";
      const i = await this.#B(r, t);
      r.format = G[i], t instanceof GPUTexture && t.format.endsWith("-srgb") && (r.srgb = !0), (i == s.EAC_RG || i == s.BC5_RG) && (r.normal = !0);
    }
    return r;
  }
  /**
   * Load an image and encode it to a compressed GPU texture.
   *
   * @param {string | HTMLImageElement | ImageBitmap | GPUTexture} source
   *        The image to encode. Can be a GPUTexture, URL, DOM image or ImageBitmap.
   *
   * @param {Object} [options] - Optional configuration for encoding.
   *
   * @param {string} [options.format="rgb"]
   *        Desired block compression format. Can be specified in several ways:
   *          - A channel mask indicating the number of channels in your input:
   *            "rgba", "rgb", "rg", or "r". The actual GPU format is selected
   *            based on device capabilities.
   *          - An explicit WebGPU BC, ETC, or ASTC format name, or an abbreviated
   *            form such as "bc7" or "astc". Note: only 4x4 LDR formats are supported.
   *          - "auto" to analyze the input texture and detect the required channels.
   *            This has some overhead, so specifying a format explicitly is preferred.
   *
   * @param {boolean} [options.alpha]
   *        Hint for the automatic format selector. When no explicit format is provided,
   *        the format is assumed to be "rgb". Supplying `alpha: true` will favor RGBA formats.
   *
   * @param {boolean} [options.mips=false] | [options.generateMipmaps=false]
   *        Whether to generate mipmaps. Mipmaps are generated with a basic box filter
   *        in linear space.
   *
   * @param {boolean} [options.srgb=false]
   *        Whether to encode the image in an sRGB format. Also affects mipmap generation.
   *        The `srgb` mode can also be inferred from the `format`.
   *
   * @param {boolean} [options.normal=false]
   *        Interpret the image as a normal map. Affects automatic format selection,
   *        favoring "bc5" and "eac-rg" formats.
   *
   * @param {boolean} [options.flipY=false]
   *        Whether to vertically flip the image before encoding.
   *
   * @returns {Promise<GPUTexture>} A promise resolving to the encoded GPU texture.
   */
  async encodeTexture(e, r = {}) {
    w(this.#e, "Spark is not initialized");
    const t = e instanceof Image || e instanceof ImageBitmap || e instanceof GPUTexture ? e : await N(e);
    this.#T("Loaded image", t);
    const i = await this.#B(r, t), a = this.#_(i), n = Math.ceil(t.width / 4) * 4, o = Math.ceil(t.height / 4) * 4, c = W[i], l = r.generateMipmaps || r.mips, { mipmapCount: f, outputSize: h, bufferRanges: m } = re(n, o, c, l), b = (r.srgb || r.format?.endsWith("srgb")) && X[i], _ = b ? 1 : r.normal ? 2 : 0, B = $[i] + (b ? "-srgb" : ""), A = b ? ["rgba8unorm", "rgba8unorm-srgb"] : ["rgba8unorm"], x = this.#R++;
    this.#h("create input texture #" + x);
    let C = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST;
    this.#a ? C |= GPUTextureUsage.RENDER_ATTACHMENT : C |= GPUTextureUsage.STORAGE_BINDING;
    const y = r.flipY || n != t.width || o != t.height;
    !y && !(t instanceof GPUTexture) && (C |= GPUTextureUsage.RENDER_ATTACHMENT);
    const g = this.#e.createCommandEncoder();
    g.pushDebugGroup?.("spark process texture"), this.#r && typeof g.writeTimestamp == "function" && g.writeTimestamp(this.#r, 0);
    let d;
    (y || !(t instanceof GPUTexture && !l)) && (d = this.#e.createTexture({
      size: [n, o, 1],
      mipLevelCount: f,
      format: "rgba8unorm",
      usage: C,
      viewFormats: A
    }));
    let R;
    y ? t instanceof GPUTexture ? this.#C(g, t, d, n, o, b, r.flipY) : (R = this.#e.createTexture({
      size: [t.width, t.height, 1],
      mipLevelCount: 1,
      format: "rgba8unorm",
      // RENDER_ATTACHMENT usage is necessary for copyExternalImageToTexture
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
      viewFormats: A
    }), this.#e.queue.copyExternalImageToTexture(
      { source: t },
      { texture: R },
      { width: t.width, height: t.height }
    ), this.#C(g, R, d, n, o, _, r.flipY)) : t instanceof GPUTexture ? l ? g.copyTextureToTexture({ texture: t }, { texture: d }, { width: n, height: o }) : d = t : this.#e.queue.copyExternalImageToTexture({ source: t }, { texture: d }, { width: n, height: o }), l && this.#A(g, d, f, n, o, _), g.popDebugGroup?.(), this.#b("create input texture #" + x);
    const E = this.#e.createTexture({
      size: [n, o, 1],
      mipLevelCount: f,
      format: B,
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
    }), U = this.#e.createBuffer({
      size: h,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
    }), S = `dispatch compute shader '${G[i]}' #${x}`;
    this.#h(S), g.pushDebugGroup?.("spark encode texture");
    let M = {};
    this.#r && typeof g.writeTimestamp != "function" && (M = {
      writeTimestamps: {
        querySet: this.#r,
        beginningOfPassWriteIndex: 0,
        endOfPassWriteIndex: 1
      }
    });
    const v = await a, T = g.beginComputePass(M);
    T.setPipeline(v);
    for (let p = 0; p < f; p++) {
      const z = this.#e.createBindGroup({
        layout: v.getBindGroupLayout(0),
        entries: [
          {
            binding: 0,
            resource: d.createView({
              baseMipLevel: p,
              mipLevelCount: 1
            })
          },
          {
            binding: 1,
            resource: this.#i
          },
          {
            binding: 2,
            resource: {
              buffer: U,
              offset: m[p].offset,
              size: m[p].size
            }
          }
        ]
      });
      T.setBindGroup(0, z), T.dispatchWorkgroups(Math.ceil(m[p].bw / 16), Math.ceil(m[p].bh / 16));
    }
    T.end();
    for (let p = 0; p < f; p++)
      g.copyBufferToTexture(
        {
          buffer: U,
          offset: m[p].offset,
          bytesPerRow: m[p].bytesPerRow,
          rowsPerImage: m[p].bh
        },
        {
          texture: E,
          mipLevel: p
        },
        {
          width: m[p].bw * 4,
          height: m[p].bh * 4,
          depthOrArrayLayers: 1
        }
      );
    return this.#r && typeof g.writeTimestamp == "function" && g.writeTimestamp(this.#r, 1), g.popDebugGroup?.(), this.#e.queue.submit([g.finish()]), this.#b(S), R?.destroy(), d != t && d?.destroy(), U?.destroy(), E;
  }
  /**
   * Returns the time (in milliseconds) it took to perform the most recent `encodeTexture()` call.
   *
   * This function resolves GPU timestamp queries that were recorded before and after the
   * compression dispatch in `encodeTexture()`. It waits for the GPU to finish processing,
   * reads back the timestamps, and computes the elapsed GPU time.
   *
   * Must be called *after* `encodeTexture()` has been invoked and submitted.
   *
   * @async
   * @returns {Promise<number>} Elapsed GPU time in milliseconds.
   *
   * @example
   * await spark.encodeTexture(...);
   * const elapsed = await spark.getTimeElapsed();
   * console.log(`Encode took ${elapsed.toFixed(2)} ms`);
   *
   * @throws {Error} If the GPU work has not been submitted, or if timestamp queries fail.
   */
  async getTimeElapsed() {
    if (!this.#r)
      return 0;
    const e = this.#e.createCommandEncoder();
    e.resolveQuerySet(this.#r, 0, 2, this.#p, 0), e.copyBufferToBuffer(this.#p, 0, this.#c, 0, 16), this.#e.queue.submit([e.finish()]), await this.#e.queue.onSubmittedWorkDone(), await this.#c.mapAsync(GPUMapMode.READ);
    const r = this.#c.getMappedRange(), t = new BigUint64Array(r), i = t[0], a = t[1];
    return this.#c.unmap(), Number(a - i) / 1e6;
  }
  async #P(e, r, t, i) {
    w(e, "device is required"), w(H(e), "device is not a WebGPU device"), this.#e = e, this.#f = i, this.#m = Q(this.#e), this.#i = this.#e.createSampler({
      magFilter: "linear",
      minFilter: "linear"
    });
    for (let a = 0; a < 3; a++)
      this.#n[a] = this.#e.createBuffer({
        size: 4,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      }), this.#e.queue.writeBuffer(this.#n[a], 0, new Uint32Array([a]));
    if (t && this.#e.features.has("timestamp-query")) {
      const a = O(), n = k();
      (!a || a >= 26) && !n && (this.#r = this.#e.createQuerySet({
        type: "timestamp",
        count: 2
      }), this.#p = this.#e.createBuffer({
        size: 16,
        // 2 timestamps × 8 bytes each
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE
      }), this.#c = this.#e.createBuffer({
        size: 16,
        // 2 timestamps × 8 bytes each
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
      }));
    }
    if (this.#d = this.#e.features.has("shader-f16"), await this.#w(), r) {
      let a;
      Array.isArray(r) ? a = r.map((n) => this.#G(n, !1)) : a = this.#m;
      for (const n of a)
        n !== void 0 && !this.#l[n] && this.#_(n).catch((o) => {
          console.error(`Failed to preload pipeline for format ${n}:`, o);
        });
    }
  }
  async #w() {
    const e = this.#e.createShaderModule({
      code: await I["utils.wgsl"](),
      label: "utils"
    });
    if (typeof e.compilationInfo == "function") {
      const t = await e.compilationInfo();
      if (t.messages.some((i) => i.type == "error")) {
        console.error("WGSL compilation errors:");
        for (const i of t.messages)
          console.error(i);
        throw new Error("Shader compilation failed");
      }
    }
    if (k() && (this.#a = !0), this.#a) {
      this.#s = {}, this.#o = {}, this.#u = {};
      const t = ["rgba8unorm-srgb", "rgba8unorm"];
      for (const i of t)
        this.#s[i] = this.#e.createRenderPipeline({
          label: `mipmap-pipeline-${i}`,
          layout: "auto",
          vertex: {
            module: e,
            entryPoint: "fullscreen_vs"
          },
          fragment: {
            module: e,
            entryPoint: "mipmap_fs",
            targets: [{ format: i }]
          },
          primitive: {
            topology: "triangle-strip",
            stripIndexFormat: "uint32"
          }
        }), this.#o[i] = this.#e.createRenderPipeline({
          label: `resize-pipeline-${i}`,
          layout: "auto",
          vertex: {
            module: e,
            entryPoint: "fullscreen_vs"
          },
          fragment: {
            module: e,
            entryPoint: "resize_fs",
            targets: [{ format: i }]
          },
          primitive: {
            topology: "triangle-strip",
            stripIndexFormat: "uint32"
          }
        }), this.#u[i] = this.#e.createRenderPipeline({
          label: `flip-y-pipeline-${i}`,
          layout: "auto",
          vertex: {
            module: e,
            entryPoint: "fullscreen_vs"
          },
          fragment: {
            module: e,
            entryPoint: "flipy_fs",
            targets: [{ format: i }]
          },
          primitive: {
            topology: "triangle-strip",
            stripIndexFormat: "uint32"
          }
        });
    } else
      this.#s = this.#e.createComputePipeline({
        layout: "auto",
        compute: {
          module: e,
          entryPoint: "mipmap"
        }
      }), this.#o = this.#e.createComputePipeline({
        layout: "auto",
        compute: {
          module: e,
          entryPoint: "resize"
        }
      }), this.#u = this.#e.createComputePipeline({
        layout: "auto",
        compute: {
          module: e,
          entryPoint: "flipy"
        }
      });
    this.#g = await this.#e.createComputePipelineAsync({
      layout: "auto",
      compute: {
        module: e,
        entryPoint: "detect_channel_count"
      }
    });
  }
  async #_(e) {
    if (this.#l[e])
      return this.#l[e];
    const r = (async () => {
      this.#h("loadPipeline " + G[e]);
      const t = q[e];
      w(t, `No shader available for format ${G[e]}`);
      let i = await I[t]();
      this.#d || (i = i.replace(/^enable f16;\s*/m, "").replace(/\bf16\b/g, "f32").replace(/\bvec([234])h\b/g, "vec$1f").replace(/\bmat([234]x[234])h/g, "mat$1f").replace(/\b(\d*\.\d+|\d+\.)h\b/g, "$1"));
      const a = this.#e.createShaderModule({
        code: i,
        label: G[e]
      });
      if (typeof a.getCompilationInfo == "function") {
        const o = await a.getCompilationInfo();
        if (o.messages.some((c) => c.type == "error")) {
          console.error("WGSL compilation errors:");
          for (const c of o.messages)
            console.error(c);
          throw new Error("Shader compilation failed");
        }
      }
      const n = await this.#e.createComputePipelineAsync({
        layout: "auto",
        compute: {
          module: a,
          entryPoint: "main"
        }
      });
      return this.#b("loadPipeline " + G[e]), n;
    })();
    return this.#l[e] = r, r;
  }
  #t(e) {
    return this.#m.has(e);
  }
  #G(e, r) {
    const t = P[e];
    if (t != null && this.#t(t))
      return t;
    const i = r ? [
      "bc4-r",
      "eac-r",
      "bc5-rg",
      "eac-rg",
      "bc1-rgb",
      "etc2-rgb",
      "bc7-rgb",
      "astc-rgb",
      "astc-4x4-rgb",
      "bc7-rgba",
      "astc-rgba",
      "astc-4x4-rgba"
    ] : [
      "bc4-r",
      "eac-r",
      "bc5-rg",
      "eac-rg",
      "bc7-rgb",
      "bc1-rgb",
      "astc-rgb",
      "astc-4x4-rgb",
      "etc2-rgb",
      "bc7-rgba",
      "astc-rgba",
      "astc-4x4-rgba"
    ];
    for (const a of i)
      if (a.includes(e) && this.#t(P[a]))
        return P[a];
  }
  async #B(e, r) {
    if (e.format == null)
      e.format = "rgb";
    else if (e.format == "auto") {
      if (e.alpha) {
        if (this.#t(s.BC7_RGBA)) return s.BC7_RGBA;
        if (this.#t(s.ASTC_4x4_RGBA)) return s.ASTC_4x4_RGBA;
      } else if (e.srgb) {
        if (this.#t(s.BC7_RGB)) return s.BC7_RGB;
        if (this.#t(s.ASTC_4x4_RGB)) return s.ASTC_4x4_RGB;
        if (this.#t(s.BC1_RGB)) return s.BC1_RGB;
        if (this.#t(s.ETC2_RGB)) return s.ETC2_RGB;
      } else if (e.normal) {
        if (this.#t(s.BC5_RG)) return s.BC5_RG;
        if (this.#t(s.EAC_RG)) return s.EAC_RG;
      } else {
        let i;
        if (r instanceof GPUTexture)
          r.format == "r8unorm" || r.format == "r16unorm" ? i = 1 : r.format == "rg8unorm" || r.format == "rg16unorm" ? i = 2 : i = await this.#y(r);
        else {
          const a = Z(r);
          i = this.#x(a);
        }
        if (i == 4) {
          if (this.#t(s.BC7_RGBA)) return s.BC7_RGBA;
          if (this.#t(s.ASTC_4x4_RGBA)) return s.ASTC_4x4_RGBA;
        } else if (i == 3) {
          if (this.#t(s.BC7_RGB)) return s.BC7_RGB;
          if (this.#t(s.ASTC_4x4_RGB)) return s.ASTC_4x4_RGB;
          if (this.#t(s.BC1_RGB)) return s.BC1_RGB;
          if (this.#t(s.ETC2_RGB)) return s.ETC2_RGB;
        } else if (i == 2) {
          if (this.#t(s.BC5_RG)) return s.BC5_RG;
          if (this.#t(s.EAC_RG)) return s.EAC_RG;
        } else if (i == 1) {
          if (this.#t(s.BC4_R)) return s.BC4_R;
          if (this.#t(s.EAC_R)) return s.EAC_R;
        }
      }
      throw new Error("No supported format found.");
    }
    const t = this.#G(e.format, e.preferLowQuality);
    if (t === void 0)
      throw new Error(`Unsupported format: ${e.format}`);
    return t;
  }
  #x(e) {
    let r = !0, t = !0, i = 0;
    const a = Math.min(1024 * 128, e.length);
    for (let n = 0; n < a; n += 4) {
      const o = e[n] / 255, c = e[n + 1] / 255, l = e[n + 2] / 255;
      e[n + 3] < 255 && (r = !1), (o != c || c != l) && (t = !1);
      const h = 2 * o - 1, m = 2 * c - 1, b = 2 * l - 1, _ = h * h + m * m + b * b, B = Math.sqrt(_);
      (Math.abs(B - 1) > 0.2 || b < -0.1) && (i += 1);
    }
    return r ? t ? 1 : 16 * i < a ? 2 : 3 : 4;
  }
  async #y(e) {
    const t = this.#e.createBuffer({
      size: 12,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
    }), i = this.#e.createBuffer({
      size: 12,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    }), a = this.#e.createBindGroup({
      layout: this.#g.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: e.createView() },
        { binding: 1, resource: { buffer: t } }
      ]
    }), n = this.#e.createCommandEncoder(), o = n.beginComputePass();
    o.setPipeline(this.#g), o.setBindGroup(0, a);
    const { width: c, height: l } = e, f = Math.ceil(c / 8), h = Math.ceil(l / 8);
    o.dispatchWorkgroups(f, h), o.end(), n.copyBufferToBuffer(t, 0, i, 0, 12), this.#e.queue.submit([n.finish()]), await this.#e.queue.onSubmittedWorkDone(), await i.mapAsync(GPUMapMode.READ);
    const m = new Uint32Array(i.getMappedRange()), b = m[0] == 0, _ = m[1] == 0, B = m[2];
    return i.unmap(), i.destroy(), t.destroy(), b ? _ ? 1 : 4 * B < c * l ? 2 : 3 : 4;
  }
  // Apply scaling and flipY transform.
  #C(e, r, t, i, a, n, o) {
    if (this.#a) {
      this.#U(e, r, t, i, a, n, o);
      return;
    }
    const c = e.beginComputePass(), l = o ? this.#u : this.#o;
    c.setPipeline(l);
    const f = this.#e.createBindGroup({
      layout: l.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: r.createView({
            baseMipLevel: 0,
            mipLevelCount: 1,
            format: n == 1 ? "rgba8unorm-srgb" : "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING
          })
        },
        {
          binding: 1,
          resource: t.createView({
            baseMipLevel: 0,
            mipLevelCount: 1,
            dimension: "2d",
            format: "rgba8unorm",
            usage: GPUTextureUsage.STORAGE_BINDING
          })
        },
        {
          binding: 2,
          resource: this.#i
        },
        {
          binding: 3,
          resource: { buffer: this.#n[n] }
        }
      ]
    });
    c.setBindGroup(0, f), c.dispatchWorkgroups(Math.ceil(i / 8), Math.ceil(a / 8)), c.end();
  }
  // Apply scaling and flipY transform.
  #U(e, r, t, i, a, n, o) {
    const c = n == 1 ? "rgba8unorm-srgb" : "rgba8unorm", l = t.createView({
      baseMipLevel: 0,
      mipLevelCount: 1,
      dimension: "2d",
      format: c,
      usage: GPUTextureUsage.RENDER_ATTACHMENT
    }), f = e.beginRenderPass({
      colorAttachments: [
        {
          view: l,
          loadOp: "clear",
          storeOp: "store",
          clearValue: [0, 0, 0, 0]
        }
      ]
    }), h = o ? this.#u[c] : this.#o[c];
    f.setPipeline(h);
    const m = this.#e.createBindGroup({
      layout: h.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: r.createView({
            baseMipLevel: 0,
            mipLevelCount: 1,
            format: n == 1 ? "rgba8unorm-srgb" : "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING
          })
        },
        {
          binding: 2,
          resource: this.#i
        },
        {
          binding: 3,
          resource: { buffer: this.#n[n] }
        }
      ]
    });
    f.setBindGroup(0, m), f.draw(4, 1, 0, 0), f.end();
  }
  async #A(e, r, t, i, a, n) {
    let o = i, c = a;
    if (this.#a)
      for (let l = 0; l < t - 1; l++)
        o = Math.max(1, Math.floor(o / 2)), c = Math.max(1, Math.floor(c / 2)), this.#S(e, r, l, l + 1, o, c, n);
    else {
      const l = e.beginComputePass();
      l.setPipeline(this.#s);
      for (let f = 0; f < t - 1; f++)
        o = Math.max(1, Math.floor(o / 2)), c = Math.max(1, Math.floor(c / 2)), this.#E(l, r, f, f + 1, o, c, n);
      l.end();
    }
  }
  #E(e, r, t, i, a, n, o) {
    const c = this.#e.createBindGroup({
      layout: this.#s.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: r.createView({
            baseMipLevel: t,
            mipLevelCount: 1,
            format: o == 1 ? "rgba8unorm-srgb" : "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING
          })
        },
        {
          binding: 1,
          resource: r.createView({
            baseMipLevel: i,
            mipLevelCount: 1,
            dimension: "2d",
            format: "rgba8unorm",
            usage: GPUTextureUsage.STORAGE_BINDING
          })
        },
        {
          binding: 2,
          resource: this.#i
        },
        {
          binding: 3,
          resource: { buffer: this.#n[o] }
        }
      ]
    });
    e.setBindGroup(0, c), e.dispatchWorkgroups(Math.ceil(a / 8), Math.ceil(n / 8));
  }
  #S(e, r, t, i, a, n, o) {
    const c = o == 1 ? "rgba8unorm-srgb" : "rgba8unorm", l = r.createView({
      baseMipLevel: i,
      mipLevelCount: 1,
      dimension: "2d",
      format: c,
      usage: GPUTextureUsage.RENDER_ATTACHMENT
    }), f = e.beginRenderPass({
      colorAttachments: [
        {
          view: l,
          loadOp: "clear",
          storeOp: "store",
          clearValue: [0, 0, 0, 0]
        }
      ]
    }), h = this.#e.createBindGroup({
      layout: this.#s[c].getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: r.createView({
            baseMipLevel: t,
            mipLevelCount: 1,
            format: c,
            usage: GPUTextureUsage.TEXTURE_BINDING
          })
        },
        {
          binding: 2,
          resource: this.#i
        },
        {
          binding: 3,
          resource: { buffer: this.#n[o] }
        }
      ]
    });
    f.setPipeline(this.#s[c]), f.setBindGroup(0, h), f.draw(4, 1, 0, 0), f.end();
  }
}
export {
  D as Spark
};
