function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { r as C, R as O } from "./index.CCuy3yjK.js";
import {
  A as Y,
  I as tr,
  a as rr,
  b as nr,
  M as An,
  N as sr,
  c as Ot,
  d as Nt,
  e as ar,
  E as ir,
  f as or,
  i as cr,
  F as lr,
  g as Vt,
  h as Cn,
  D as $n,
  _ as On,
  j as Nn,
  k as Zr,
} from "./astro/assets-service.zraceSPK.js";
var Vr = { exports: {} },
  St = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jn = C,
  Rn = Symbol.for("react.element"),
  Mn = Symbol.for("react.fragment"),
  Pn = Object.prototype.hasOwnProperty,
  Ln = jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Dn = { key: !0, ref: !0, __self: !0, __source: !0 };
function Br(e, t, r) {
  var n,
    s = {},
    a = null,
    i = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (n in t) Pn.call(t, n) && !Dn.hasOwnProperty(n) && (s[n] = t[n]);
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) s[n] === void 0 && (s[n] = t[n]);
  return { $$typeof: Rn, type: e, key: a, ref: i, props: s, _owner: Ln.current };
}
St.Fragment = Mn;
St.jsx = Br;
St.jsxs = Br;
Vr.exports = St;
var Q = Vr.exports;
const zn = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-"'\\!@#$%+&_()=/*])[A-Za-z0-9-"'\\!@#$%+&_()=/*]{8,}$/;
var N;
(function (e) {
  e.assertEqual = (s) => s;
  function t(s) {}
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  (e.assertNever = r),
    (e.arrayToEnum = (s) => {
      const a = {};
      for (const i of s) a[i] = i;
      return a;
    }),
    (e.getValidEnumValues = (s) => {
      const a = e.objectKeys(s).filter((o) => typeof s[s[o]] != "number"),
        i = {};
      for (const o of a) i[o] = s[o];
      return e.objectValues(i);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (a) {
        return s[a];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const a = [];
            for (const i in s) Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
            return a;
          }),
    (e.find = (s, a) => {
      for (const i of s) if (a(i)) return i;
    }),
    (e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function n(s, a = " | ") {
    return s.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(a);
  }
  (e.joinValues = n), (e.jsonStringifyReplacer = (s, a) => (typeof a == "bigint" ? a.toString() : a));
})(N || (N = {}));
var Bt;
(function (e) {
  e.mergeShapes = (t, r) => ({ ...t, ...r });
})(Bt || (Bt = {}));
const f = N.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  ve = (e) => {
    switch (typeof e) {
      case "undefined":
        return f.undefined;
      case "string":
        return f.string;
      case "number":
        return isNaN(e) ? f.nan : f.number;
      case "boolean":
        return f.boolean;
      case "function":
        return f.function;
      case "bigint":
        return f.bigint;
      case "symbol":
        return f.symbol;
      case "object":
        return Array.isArray(e)
          ? f.array
          : e === null
          ? f.null
          : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function"
          ? f.promise
          : typeof Map < "u" && e instanceof Map
          ? f.map
          : typeof Set < "u" && e instanceof Set
          ? f.set
          : typeof Date < "u" && e instanceof Date
          ? f.date
          : f.object;
      default:
        return f.unknown;
    }
  },
  u = N.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Zn = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ie extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (n) => {
        this.issues = [...this.issues, n];
      }),
      (this.addIssues = (n = []) => {
        this.issues = [...this.issues, ...n];
      });
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : (this.__proto__ = r), (this.name = "ZodError"), (this.issues = t);
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const r =
        t ||
        function (a) {
          return a.message;
        },
      n = { _errors: [] },
      s = (a) => {
        for (const i of a.issues)
          if (i.code === "invalid_union") i.unionErrors.map(s);
          else if (i.code === "invalid_return_type") s(i.returnTypeError);
          else if (i.code === "invalid_arguments") s(i.argumentsError);
          else if (i.path.length === 0) n._errors.push(r(i));
          else {
            let o = n,
              c = 0;
            for (; c < i.path.length; ) {
              const l = i.path[c];
              c === i.path.length - 1 ? ((o[l] = o[l] || { _errors: [] }), o[l]._errors.push(r(i))) : (o[l] = o[l] || { _errors: [] }), (o = o[l]), c++;
            }
          }
      };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, N.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {},
      n = [];
    for (const s of this.issues) s.path.length > 0 ? ((r[s.path[0]] = r[s.path[0]] || []), r[s.path[0]].push(t(s))) : n.push(t(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
ie.create = (e) => new ie(e);
const Be = (e, t) => {
  let r;
  switch (e.code) {
    case u.invalid_type:
      e.received === f.undefined ? (r = "Required") : (r = `Expected ${e.expected}, received ${e.received}`);
      break;
    case u.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, N.jsonStringifyReplacer)}`;
      break;
    case u.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${N.joinValues(e.keys, ", ")}`;
      break;
    case u.invalid_union:
      r = "Invalid input";
      break;
    case u.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${N.joinValues(e.options)}`;
      break;
    case u.invalid_enum_value:
      r = `Invalid enum value. Expected ${N.joinValues(e.options)}, received '${e.received}'`;
      break;
    case u.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case u.invalid_return_type:
      r = "Invalid function return type";
      break;
    case u.invalid_date:
      r = "Invalid date";
      break;
    case u.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((r = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
          : N.assertNever(e.validation)
        : e.validation !== "regex"
        ? (r = `Invalid ${e.validation}`)
        : (r = "Invalid");
      break;
    case u.too_small:
      e.type === "array"
        ? (r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
        : e.type === "string"
        ? (r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
        : e.type === "number"
        ? (r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
        : e.type === "date"
        ? (r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
        : (r = "Invalid input");
      break;
    case u.too_big:
      e.type === "array"
        ? (r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
        : e.type === "string"
        ? (r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
        : e.type === "number"
        ? (r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
        : e.type === "bigint"
        ? (r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
        : e.type === "date"
        ? (r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
        : (r = "Invalid input");
      break;
    case u.custom:
      r = "Invalid input";
      break;
    case u.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case u.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case u.not_finite:
      r = "Number must be finite";
      break;
    default:
      (r = t.defaultError), N.assertNever(e);
  }
  return { message: r };
};
let Ur = Be;
function Vn(e) {
  Ur = e;
}
function lt() {
  return Ur;
}
const dt = (e) => {
    const { data: t, path: r, errorMaps: n, issueData: s } = e,
      a = [...r, ...(s.path || [])],
      i = { ...s, path: a };
    let o = "";
    const c = n
      .filter((l) => !!l)
      .slice()
      .reverse();
    for (const l of c) o = l(i, { data: t, defaultError: o }).message;
    return { ...s, path: a, message: s.message || o };
  },
  Bn = [];
function h(e, t) {
  const r = dt({ issueData: t, data: e.data, path: e.path, errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, lt(), Be].filter((n) => !!n) });
  e.common.issues.push(r);
}
class U {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted") return x;
      s.status === "dirty" && t.dirty(), n.push(s.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const s of r) n.push({ key: await s.key, value: await s.value });
    return U.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted") return x;
      a.status === "dirty" && t.dirty(),
        i.status === "dirty" && t.dirty(),
        a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (n[a.value] = i.value);
    }
    return { status: t.value, value: n };
  }
}
const x = Object.freeze({ status: "aborted" }),
  Hr = (e) => ({ status: "dirty", value: e }),
  W = (e) => ({ status: "valid", value: e }),
  Ut = (e) => e.status === "aborted",
  Ht = (e) => e.status === "dirty",
  Ue = (e) => e.status === "valid",
  ut = (e) => typeof Promise < "u" && e instanceof Promise;
var y;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})), (e.toString = (t) => (typeof t == "string" ? t : t?.message));
})(y || (y = {}));
class fe {
  constructor(t, r, n, s) {
    (this._cachedPath = []), (this.parent = t), (this.data = r), (this._path = n), (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const dr = (e, t) => {
  if (Ue(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new ie(e.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function I(e) {
  if (!e) return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t
    ? { errorMap: t, description: s }
    : {
        errorMap: (i, o) =>
          i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError },
        description: s,
      };
}
class A {
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ve(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || { common: t.parent.common, data: t.data, parsedType: ve(t.data), schemaErrorMap: this._def.errorMap, path: t.path, parent: t.parent };
  }
  _processInputParams(t) {
    return {
      status: new U(),
      ctx: { common: t.parent.common, data: t.data, parsedType: ve(t.data), schemaErrorMap: this._def.errorMap, path: t.path, parent: t.parent },
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (ut(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const s = {
        common: { issues: [], async: (n = r?.async) !== null && n !== void 0 ? n : !1, contextualErrorMap: r?.errorMap },
        path: r?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: ve(t),
      },
      a = this._parseSync({ data: t, path: s.path, parent: s });
    return dr(s, a);
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
        common: { issues: [], contextualErrorMap: r?.errorMap, async: !0 },
        path: r?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: ve(t),
      },
      s = this._parse({ data: t, path: n.path, parent: n }),
      a = await (ut(s) ? s : Promise.resolve(s));
    return dr(n, a);
  }
  refine(t, r) {
    const n = (s) => (typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r);
    return this._refinement((s, a) => {
      const i = t(s),
        o = () => a.addIssue({ code: u.custom, ...n(s) });
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => (c ? !0 : (o(), !1))) : i ? !0 : (o(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => (t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1)));
  }
  _refinement(t) {
    return new ce({ schema: this, typeName: _.ZodEffects, effect: { type: "refinement", refinement: t } });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return ge.create(this, this._def);
  }
  nullable() {
    return je.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return oe.create(this, this._def);
  }
  promise() {
    return ze.create(this, this._def);
  }
  or(t) {
    return qe.create([this, t], this._def);
  }
  and(t) {
    return Ye.create(this, t, this._def);
  }
  transform(t) {
    return new ce({ ...I(this._def), schema: this, typeName: _.ZodEffects, effect: { type: "transform", transform: t } });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ke({ ...I(this._def), innerType: this, defaultValue: r, typeName: _.ZodDefault });
  }
  brand() {
    return new Wr({ typeName: _.ZodBranded, type: this, ...I(this._def) });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new mt({ ...I(this._def), innerType: this, catchValue: r, typeName: _.ZodCatch });
  }
  describe(t) {
    const r = this.constructor;
    return new r({ ...this._def, description: t });
  }
  pipe(t) {
    return tt.create(this, t);
  }
  readonly() {
    return yt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Un = /^c[^\s-]{8,}$/i,
  Hn = /^[a-z][a-z0-9]*$/,
  Fn = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Wn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  qn = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Yn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let jt;
const Gn = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  Jn =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Xn = (e) =>
    e.precision
      ? e.offset
        ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`)
        : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`)
      : e.precision === 0
      ? e.offset
        ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$")
        : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
      : e.offset
      ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$")
      : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Qn(e, t) {
  return !!(((t === "v4" || !t) && Gn.test(e)) || ((t === "v6" || !t) && Jn.test(e)));
}
class ae extends A {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== f.string)) {
      const a = this._getOrReturnCtx(t);
      return h(a, { code: u.invalid_type, expected: f.string, received: a.parsedType }), x;
    }
    const n = new U();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value &&
          ((s = this._getOrReturnCtx(t, s)),
          h(s, { code: u.too_small, minimum: a.value, type: "string", inclusive: !0, exact: !1, message: a.message }),
          n.dirty());
      else if (a.kind === "max")
        t.data.length > a.value &&
          ((s = this._getOrReturnCtx(t, s)),
          h(s, { code: u.too_big, maximum: a.value, type: "string", inclusive: !0, exact: !1, message: a.message }),
          n.dirty());
      else if (a.kind === "length") {
        const i = t.data.length > a.value,
          o = t.data.length < a.value;
        (i || o) &&
          ((s = this._getOrReturnCtx(t, s)),
          i
            ? h(s, { code: u.too_big, maximum: a.value, type: "string", inclusive: !0, exact: !0, message: a.message })
            : o && h(s, { code: u.too_small, minimum: a.value, type: "string", inclusive: !0, exact: !0, message: a.message }),
          n.dirty());
      } else if (a.kind === "email")
        qn.test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "email", code: u.invalid_string, message: a.message }), n.dirty());
      else if (a.kind === "emoji")
        jt || (jt = new RegExp(Yn, "u")),
          jt.test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "emoji", code: u.invalid_string, message: a.message }), n.dirty());
      else if (a.kind === "uuid")
        Wn.test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "uuid", code: u.invalid_string, message: a.message }), n.dirty());
      else if (a.kind === "cuid")
        Un.test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "cuid", code: u.invalid_string, message: a.message }), n.dirty());
      else if (a.kind === "cuid2")
        Hn.test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "cuid2", code: u.invalid_string, message: a.message }), n.dirty());
      else if (a.kind === "ulid")
        Fn.test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "ulid", code: u.invalid_string, message: a.message }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)), h(s, { validation: "url", code: u.invalid_string, message: a.message }), n.dirty();
        }
      else
        a.kind === "regex"
          ? ((a.regex.lastIndex = 0),
            a.regex.test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "regex", code: u.invalid_string, message: a.message }), n.dirty()))
          : a.kind === "trim"
          ? (t.data = t.data.trim())
          : a.kind === "includes"
          ? t.data.includes(a.value, a.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            h(s, { code: u.invalid_string, validation: { includes: a.value, position: a.position }, message: a.message }),
            n.dirty())
          : a.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : a.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : a.kind === "startsWith"
          ? t.data.startsWith(a.value) ||
            ((s = this._getOrReturnCtx(t, s)), h(s, { code: u.invalid_string, validation: { startsWith: a.value }, message: a.message }), n.dirty())
          : a.kind === "endsWith"
          ? t.data.endsWith(a.value) ||
            ((s = this._getOrReturnCtx(t, s)), h(s, { code: u.invalid_string, validation: { endsWith: a.value }, message: a.message }), n.dirty())
          : a.kind === "datetime"
          ? Xn(a).test(t.data) || ((s = this._getOrReturnCtx(t, s)), h(s, { code: u.invalid_string, validation: "datetime", message: a.message }), n.dirty())
          : a.kind === "ip"
          ? Qn(t.data, a.version) || ((s = this._getOrReturnCtx(t, s)), h(s, { validation: "ip", code: u.invalid_string, message: a.message }), n.dirty())
          : N.assertNever(a);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), { validation: r, code: u.invalid_string, ...y.errToObj(n) });
  }
  _addCheck(t) {
    return new ae({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...y.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...y.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...y.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...y.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...y.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...y.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...y.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...y.errToObj(t) });
  }
  datetime(t) {
    var r;
    return typeof t == "string"
      ? this._addCheck({ kind: "datetime", precision: null, offset: !1, message: t })
      : this._addCheck({
          kind: "datetime",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          offset: (r = t?.offset) !== null && r !== void 0 ? r : !1,
          ...y.errToObj(t?.message),
        });
  }
  regex(t, r) {
    return this._addCheck({ kind: "regex", regex: t, ...y.errToObj(r) });
  }
  includes(t, r) {
    return this._addCheck({ kind: "includes", value: t, position: r?.position, ...y.errToObj(r?.message) });
  }
  startsWith(t, r) {
    return this._addCheck({ kind: "startsWith", value: t, ...y.errToObj(r) });
  }
  endsWith(t, r) {
    return this._addCheck({ kind: "endsWith", value: t, ...y.errToObj(r) });
  }
  min(t, r) {
    return this._addCheck({ kind: "min", value: t, ...y.errToObj(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: "max", value: t, ...y.errToObj(r) });
  }
  length(t, r) {
    return this._addCheck({ kind: "length", value: t, ...y.errToObj(r) });
  }
  nonempty(t) {
    return this.min(1, y.errToObj(t));
  }
  trim() {
    return new ae({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new ae({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new ae({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks) r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks) r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
ae.create = (e) => {
  var t;
  return new ae({ checks: [], typeName: _.ZodString, coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1, ...I(e) });
};
function Kn(e, t) {
  const r = (e.toString().split(".")[1] || "").length,
    n = (t.toString().split(".")[1] || "").length,
    s = r > n ? r : n,
    a = parseInt(e.toFixed(s).replace(".", "")),
    i = parseInt(t.toFixed(s).replace(".", ""));
  return (a % i) / Math.pow(10, s);
}
class be extends A {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== f.number)) {
      const a = this._getOrReturnCtx(t);
      return h(a, { code: u.invalid_type, expected: f.number, received: a.parsedType }), x;
    }
    let n;
    const s = new U();
    for (const a of this._def.checks)
      a.kind === "int"
        ? N.isInteger(t.data) ||
          ((n = this._getOrReturnCtx(t, n)), h(n, { code: u.invalid_type, expected: "integer", received: "float", message: a.message }), s.dirty())
        : a.kind === "min"
        ? (a.inclusive ? t.data < a.value : t.data <= a.value) &&
          ((n = this._getOrReturnCtx(t, n)),
          h(n, { code: u.too_small, minimum: a.value, type: "number", inclusive: a.inclusive, exact: !1, message: a.message }),
          s.dirty())
        : a.kind === "max"
        ? (a.inclusive ? t.data > a.value : t.data >= a.value) &&
          ((n = this._getOrReturnCtx(t, n)),
          h(n, { code: u.too_big, maximum: a.value, type: "number", inclusive: a.inclusive, exact: !1, message: a.message }),
          s.dirty())
        : a.kind === "multipleOf"
        ? Kn(t.data, a.value) !== 0 && ((n = this._getOrReturnCtx(t, n)), h(n, { code: u.not_multiple_of, multipleOf: a.value, message: a.message }), s.dirty())
        : a.kind === "finite"
        ? Number.isFinite(t.data) || ((n = this._getOrReturnCtx(t, n)), h(n, { code: u.not_finite, message: a.message }), s.dirty())
        : N.assertNever(a);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, y.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, y.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, y.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, y.toString(r));
  }
  setLimit(t, r, n, s) {
    return new be({ ...this._def, checks: [...this._def.checks, { kind: t, value: r, inclusive: n, message: y.toString(s) }] });
  }
  _addCheck(t) {
    return new be({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: y.toString(t) });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: y.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: y.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: y.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: y.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: "multipleOf", value: t, message: y.toString(r) });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: y.toString(t) });
  }
  safe(t) {
    return this._addCheck({ kind: "min", inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: y.toString(t) })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: y.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks) r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks) r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || (t.kind === "multipleOf" && N.isInteger(t.value)));
  }
  get isFinite() {
    let t = null,
      r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
be.create = (e) => new be({ checks: [], typeName: _.ZodNumber, coerce: e?.coerce || !1, ...I(e) });
class we extends A {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== f.bigint)) {
      const a = this._getOrReturnCtx(t);
      return h(a, { code: u.invalid_type, expected: f.bigint, received: a.parsedType }), x;
    }
    let n;
    const s = new U();
    for (const a of this._def.checks)
      a.kind === "min"
        ? (a.inclusive ? t.data < a.value : t.data <= a.value) &&
          ((n = this._getOrReturnCtx(t, n)),
          h(n, { code: u.too_small, type: "bigint", minimum: a.value, inclusive: a.inclusive, message: a.message }),
          s.dirty())
        : a.kind === "max"
        ? (a.inclusive ? t.data > a.value : t.data >= a.value) &&
          ((n = this._getOrReturnCtx(t, n)), h(n, { code: u.too_big, type: "bigint", maximum: a.value, inclusive: a.inclusive, message: a.message }), s.dirty())
        : a.kind === "multipleOf"
        ? t.data % a.value !== BigInt(0) &&
          ((n = this._getOrReturnCtx(t, n)), h(n, { code: u.not_multiple_of, multipleOf: a.value, message: a.message }), s.dirty())
        : N.assertNever(a);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, y.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, y.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, y.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, y.toString(r));
  }
  setLimit(t, r, n, s) {
    return new we({ ...this._def, checks: [...this._def.checks, { kind: t, value: r, inclusive: n, message: y.toString(s) }] });
  }
  _addCheck(t) {
    return new we({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: y.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: y.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: y.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: y.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: "multipleOf", value: t, message: y.toString(r) });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks) r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks) r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
we.create = (e) => {
  var t;
  return new we({ checks: [], typeName: _.ZodBigInt, coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1, ...I(e) });
};
class He extends A {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== f.boolean)) {
      const n = this._getOrReturnCtx(t);
      return h(n, { code: u.invalid_type, expected: f.boolean, received: n.parsedType }), x;
    }
    return W(t.data);
  }
}
He.create = (e) => new He({ typeName: _.ZodBoolean, coerce: e?.coerce || !1, ...I(e) });
class Oe extends A {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== f.date)) {
      const a = this._getOrReturnCtx(t);
      return h(a, { code: u.invalid_type, expected: f.date, received: a.parsedType }), x;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return h(a, { code: u.invalid_date }), x;
    }
    const n = new U();
    let s;
    for (const a of this._def.checks)
      a.kind === "min"
        ? t.data.getTime() < a.value &&
          ((s = this._getOrReturnCtx(t, s)),
          h(s, { code: u.too_small, message: a.message, inclusive: !0, exact: !1, minimum: a.value, type: "date" }),
          n.dirty())
        : a.kind === "max"
        ? t.data.getTime() > a.value &&
          ((s = this._getOrReturnCtx(t, s)), h(s, { code: u.too_big, message: a.message, inclusive: !0, exact: !1, maximum: a.value, type: "date" }), n.dirty())
        : N.assertNever(a);
    return { status: n.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new Oe({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, r) {
    return this._addCheck({ kind: "min", value: t.getTime(), message: y.toString(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: "max", value: t.getTime(), message: y.toString(r) });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks) r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks) r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
Oe.create = (e) => new Oe({ checks: [], coerce: e?.coerce || !1, typeName: _.ZodDate, ...I(e) });
class ft extends A {
  _parse(t) {
    if (this._getType(t) !== f.symbol) {
      const n = this._getOrReturnCtx(t);
      return h(n, { code: u.invalid_type, expected: f.symbol, received: n.parsedType }), x;
    }
    return W(t.data);
  }
}
ft.create = (e) => new ft({ typeName: _.ZodSymbol, ...I(e) });
class Fe extends A {
  _parse(t) {
    if (this._getType(t) !== f.undefined) {
      const n = this._getOrReturnCtx(t);
      return h(n, { code: u.invalid_type, expected: f.undefined, received: n.parsedType }), x;
    }
    return W(t.data);
  }
}
Fe.create = (e) => new Fe({ typeName: _.ZodUndefined, ...I(e) });
class We extends A {
  _parse(t) {
    if (this._getType(t) !== f.null) {
      const n = this._getOrReturnCtx(t);
      return h(n, { code: u.invalid_type, expected: f.null, received: n.parsedType }), x;
    }
    return W(t.data);
  }
}
We.create = (e) => new We({ typeName: _.ZodNull, ...I(e) });
class De extends A {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return W(t.data);
  }
}
De.create = (e) => new De({ typeName: _.ZodAny, ...I(e) });
class Ce extends A {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return W(t.data);
  }
}
Ce.create = (e) => new Ce({ typeName: _.ZodUnknown, ...I(e) });
class ye extends A {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return h(r, { code: u.invalid_type, expected: f.never, received: r.parsedType }), x;
  }
}
ye.create = (e) => new ye({ typeName: _.ZodNever, ...I(e) });
class ht extends A {
  _parse(t) {
    if (this._getType(t) !== f.undefined) {
      const n = this._getOrReturnCtx(t);
      return h(n, { code: u.invalid_type, expected: f.void, received: n.parsedType }), x;
    }
    return W(t.data);
  }
}
ht.create = (e) => new ht({ typeName: _.ZodVoid, ...I(e) });
class oe extends A {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t),
      s = this._def;
    if (r.parsedType !== f.array) return h(r, { code: u.invalid_type, expected: f.array, received: r.parsedType }), x;
    if (s.exactLength !== null) {
      const i = r.data.length > s.exactLength.value,
        o = r.data.length < s.exactLength.value;
      (i || o) &&
        (h(r, {
          code: i ? u.too_big : u.too_small,
          minimum: o ? s.exactLength.value : void 0,
          maximum: i ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (s.minLength !== null &&
        r.data.length < s.minLength.value &&
        (h(r, { code: u.too_small, minimum: s.minLength.value, type: "array", inclusive: !0, exact: !1, message: s.minLength.message }), n.dirty()),
      s.maxLength !== null &&
        r.data.length > s.maxLength.value &&
        (h(r, { code: u.too_big, maximum: s.maxLength.value, type: "array", inclusive: !0, exact: !1, message: s.maxLength.message }), n.dirty()),
      r.common.async)
    )
      return Promise.all([...r.data].map((i, o) => s.type._parseAsync(new fe(r, i, r.path, o)))).then((i) => U.mergeArray(n, i));
    const a = [...r.data].map((i, o) => s.type._parseSync(new fe(r, i, r.path, o)));
    return U.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new oe({ ...this._def, minLength: { value: t, message: y.toString(r) } });
  }
  max(t, r) {
    return new oe({ ...this._def, maxLength: { value: t, message: y.toString(r) } });
  }
  length(t, r) {
    return new oe({ ...this._def, exactLength: { value: t, message: y.toString(r) } });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
oe.create = (e, t) => new oe({ type: e, minLength: null, maxLength: null, exactLength: null, typeName: _.ZodArray, ...I(t) });
function Re(e) {
  if (e instanceof P) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = ge.create(Re(n));
    }
    return new P({ ...e._def, shape: () => t });
  } else
    return e instanceof oe
      ? new oe({ ...e._def, type: Re(e.element) })
      : e instanceof ge
      ? ge.create(Re(e.unwrap()))
      : e instanceof je
      ? je.create(Re(e.unwrap()))
      : e instanceof he
      ? he.create(e.items.map((t) => Re(t)))
      : e;
}
class P extends A {
  constructor() {
    super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      r = N.objectKeys(t);
    return (this._cached = { shape: t, keys: r });
  }
  _parse(t) {
    if (this._getType(t) !== f.object) {
      const l = this._getOrReturnCtx(t);
      return h(l, { code: u.invalid_type, expected: f.object, received: l.parsedType }), x;
    }
    const { status: n, ctx: s } = this._processInputParams(t),
      { shape: a, keys: i } = this._getCached(),
      o = [];
    if (!(this._def.catchall instanceof ye && this._def.unknownKeys === "strip")) for (const l in s.data) i.includes(l) || o.push(l);
    const c = [];
    for (const l of i) {
      const d = a[l],
        g = s.data[l];
      c.push({ key: { status: "valid", value: l }, value: d._parse(new fe(s, g, s.path, l)), alwaysSet: l in s.data });
    }
    if (this._def.catchall instanceof ye) {
      const l = this._def.unknownKeys;
      if (l === "passthrough") for (const d of o) c.push({ key: { status: "valid", value: d }, value: { status: "valid", value: s.data[d] } });
      else if (l === "strict") o.length > 0 && (h(s, { code: u.unrecognized_keys, keys: o }), n.dirty());
      else if (l !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of o) {
        const g = s.data[d];
        c.push({ key: { status: "valid", value: d }, value: l._parse(new fe(s, g, s.path, d)), alwaysSet: d in s.data });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const d of c) {
              const g = await d.key;
              l.push({ key: g, value: await d.value, alwaysSet: d.alwaysSet });
            }
            return l;
          })
          .then((l) => U.mergeObjectSync(n, l))
      : U.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      y.errToObj,
      new P({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (r, n) => {
                var s, a, i, o;
                const c =
                  (i = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, r, n).message) !== null && i !== void 0
                    ? i
                    : n.defaultError;
                return r.code === "unrecognized_keys" ? { message: (o = y.errToObj(t).message) !== null && o !== void 0 ? o : c } : { message: c };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new P({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new P({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new P({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new P({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: _.ZodObject,
    });
  }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  catchall(t) {
    return new P({ ...this._def, catchall: t });
  }
  pick(t) {
    const r = {};
    return (
      N.objectKeys(t).forEach((n) => {
        t[n] && this.shape[n] && (r[n] = this.shape[n]);
      }),
      new P({ ...this._def, shape: () => r })
    );
  }
  omit(t) {
    const r = {};
    return (
      N.objectKeys(this.shape).forEach((n) => {
        t[n] || (r[n] = this.shape[n]);
      }),
      new P({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return Re(this);
  }
  partial(t) {
    const r = {};
    return (
      N.objectKeys(this.shape).forEach((n) => {
        const s = this.shape[n];
        t && !t[n] ? (r[n] = s) : (r[n] = s.optional());
      }),
      new P({ ...this._def, shape: () => r })
    );
  }
  required(t) {
    const r = {};
    return (
      N.objectKeys(this.shape).forEach((n) => {
        if (t && !t[n]) r[n] = this.shape[n];
        else {
          let a = this.shape[n];
          for (; a instanceof ge; ) a = a._def.innerType;
          r[n] = a;
        }
      }),
      new P({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return Fr(N.objectKeys(this.shape));
  }
}
P.create = (e, t) => new P({ shape: () => e, unknownKeys: "strip", catchall: ye.create(), typeName: _.ZodObject, ...I(t) });
P.strictCreate = (e, t) => new P({ shape: () => e, unknownKeys: "strict", catchall: ye.create(), typeName: _.ZodObject, ...I(t) });
P.lazycreate = (e, t) => new P({ shape: e, unknownKeys: "strip", catchall: ye.create(), typeName: _.ZodObject, ...I(t) });
class qe extends A {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = this._def.options;
    function s(a) {
      for (const o of a) if (o.result.status === "valid") return o.result;
      for (const o of a) if (o.result.status === "dirty") return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new ie(o.ctx.common.issues));
      return h(r, { code: u.invalid_union, unionErrors: i }), x;
    }
    if (r.common.async)
      return Promise.all(
        n.map(async (a) => {
          const i = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return { result: await a._parseAsync({ data: r.data, path: r.path, parent: i }), ctx: i };
        })
      ).then(s);
    {
      let a;
      const i = [];
      for (const c of n) {
        const l = { ...r, common: { ...r.common, issues: [] }, parent: null },
          d = c._parseSync({ data: r.data, path: r.path, parent: l });
        if (d.status === "valid") return d;
        d.status === "dirty" && !a && (a = { result: d, ctx: l }), l.common.issues.length && i.push(l.common.issues);
      }
      if (a) return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((c) => new ie(c));
      return h(r, { code: u.invalid_union, unionErrors: o }), x;
    }
  }
  get options() {
    return this._def.options;
  }
}
qe.create = (e, t) => new qe({ options: e, typeName: _.ZodUnion, ...I(t) });
const st = (e) =>
  e instanceof Je
    ? st(e.schema)
    : e instanceof ce
    ? st(e.innerType())
    : e instanceof Xe
    ? [e.value]
    : e instanceof xe
    ? e.options
    : e instanceof Qe
    ? Object.keys(e.enum)
    : e instanceof Ke
    ? st(e._def.innerType)
    : e instanceof Fe
    ? [void 0]
    : e instanceof We
    ? [null]
    : null;
class It extends A {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== f.object) return h(r, { code: u.invalid_type, expected: f.object, received: r.parsedType }), x;
    const n = this.discriminator,
      s = r.data[n],
      a = this.optionsMap.get(s);
    return a
      ? r.common.async
        ? a._parseAsync({ data: r.data, path: r.path, parent: r })
        : a._parseSync({ data: r.data, path: r.path, parent: r })
      : (h(r, { code: u.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [n] }), x);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, r, n) {
    const s = new Map();
    for (const a of r) {
      const i = st(a.shape[t]);
      if (!i) throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (s.has(o)) throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        s.set(o, a);
      }
    }
    return new It({ typeName: _.ZodDiscriminatedUnion, discriminator: t, options: r, optionsMap: s, ...I(n) });
  }
}
function Ft(e, t) {
  const r = ve(e),
    n = ve(t);
  if (e === t) return { valid: !0, data: e };
  if (r === f.object && n === f.object) {
    const s = N.objectKeys(t),
      a = N.objectKeys(e).filter((o) => s.indexOf(o) !== -1),
      i = { ...e, ...t };
    for (const o of a) {
      const c = Ft(e[o], t[o]);
      if (!c.valid) return { valid: !1 };
      i[o] = c.data;
    }
    return { valid: !0, data: i };
  } else if (r === f.array && n === f.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const i = e[a],
        o = t[a],
        c = Ft(i, o);
      if (!c.valid) return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else return r === f.date && n === f.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ye extends A {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      s = (a, i) => {
        if (Ut(a) || Ut(i)) return x;
        const o = Ft(a.value, i.value);
        return o.valid ? ((Ht(a) || Ht(i)) && r.dirty(), { status: r.value, value: o.data }) : (h(n, { code: u.invalid_intersection_types }), x);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
        ]).then(([a, i]) => s(a, i))
      : s(this._def.left._parseSync({ data: n.data, path: n.path, parent: n }), this._def.right._parseSync({ data: n.data, path: n.path, parent: n }));
  }
}
Ye.create = (e, t, r) => new Ye({ left: e, right: t, typeName: _.ZodIntersection, ...I(r) });
class he extends A {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.array) return h(n, { code: u.invalid_type, expected: f.array, received: n.parsedType }), x;
    if (n.data.length < this._def.items.length) return h(n, { code: u.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), x;
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (h(n, { code: u.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), r.dirty());
    const a = [...n.data]
      .map((i, o) => {
        const c = this._def.items[o] || this._def.rest;
        return c ? c._parse(new fe(n, i, n.path, o)) : null;
      })
      .filter((i) => !!i);
    return n.common.async ? Promise.all(a).then((i) => U.mergeArray(r, i)) : U.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new he({ ...this._def, rest: t });
  }
}
he.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new he({ items: e, typeName: _.ZodTuple, rest: null, ...I(t) });
};
class Ge extends A {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.object) return h(n, { code: u.invalid_type, expected: f.object, received: n.parsedType }), x;
    const s = [],
      a = this._def.keyType,
      i = this._def.valueType;
    for (const o in n.data) s.push({ key: a._parse(new fe(n, o, n.path, o)), value: i._parse(new fe(n, n.data[o], n.path, o)) });
    return n.common.async ? U.mergeObjectAsync(r, s) : U.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof A
      ? new Ge({ keyType: t, valueType: r, typeName: _.ZodRecord, ...I(n) })
      : new Ge({ keyType: ae.create(), valueType: t, typeName: _.ZodRecord, ...I(r) });
  }
}
class pt extends A {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.map) return h(n, { code: u.invalid_type, expected: f.map, received: n.parsedType }), x;
    const s = this._def.keyType,
      a = this._def.valueType,
      i = [...n.data.entries()].map(([o, c], l) => ({ key: s._parse(new fe(n, o, n.path, [l, "key"])), value: a._parse(new fe(n, c, n.path, [l, "value"])) }));
    if (n.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const l = await c.key,
            d = await c.value;
          if (l.status === "aborted" || d.status === "aborted") return x;
          (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = new Map();
      for (const c of i) {
        const l = c.key,
          d = c.value;
        if (l.status === "aborted" || d.status === "aborted") return x;
        (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
      }
      return { status: r.value, value: o };
    }
  }
}
pt.create = (e, t, r) => new pt({ valueType: t, keyType: e, typeName: _.ZodMap, ...I(r) });
class Ne extends A {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.set) return h(n, { code: u.invalid_type, expected: f.set, received: n.parsedType }), x;
    const s = this._def;
    s.minSize !== null &&
      n.data.size < s.minSize.value &&
      (h(n, { code: u.too_small, minimum: s.minSize.value, type: "set", inclusive: !0, exact: !1, message: s.minSize.message }), r.dirty()),
      s.maxSize !== null &&
        n.data.size > s.maxSize.value &&
        (h(n, { code: u.too_big, maximum: s.maxSize.value, type: "set", inclusive: !0, exact: !1, message: s.maxSize.message }), r.dirty());
    const a = this._def.valueType;
    function i(c) {
      const l = new Set();
      for (const d of c) {
        if (d.status === "aborted") return x;
        d.status === "dirty" && r.dirty(), l.add(d.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...n.data.values()].map((c, l) => a._parse(new fe(n, c, n.path, l)));
    return n.common.async ? Promise.all(o).then((c) => i(c)) : i(o);
  }
  min(t, r) {
    return new Ne({ ...this._def, minSize: { value: t, message: y.toString(r) } });
  }
  max(t, r) {
    return new Ne({ ...this._def, maxSize: { value: t, message: y.toString(r) } });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ne.create = (e, t) => new Ne({ valueType: e, minSize: null, maxSize: null, typeName: _.ZodSet, ...I(t) });
class Pe extends A {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== f.function) return h(r, { code: u.invalid_type, expected: f.function, received: r.parsedType }), x;
    function n(o, c) {
      return dt({
        data: o,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, lt(), Be].filter((l) => !!l),
        issueData: { code: u.invalid_arguments, argumentsError: c },
      });
    }
    function s(o, c) {
      return dt({
        data: o,
        path: r.path,
        errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, lt(), Be].filter((l) => !!l),
        issueData: { code: u.invalid_return_type, returnTypeError: c },
      });
    }
    const a = { errorMap: r.common.contextualErrorMap },
      i = r.data;
    if (this._def.returns instanceof ze) {
      const o = this;
      return W(async function (...c) {
        const l = new ie([]),
          d = await o._def.args.parseAsync(c, a).catch((p) => {
            throw (l.addIssue(n(c, p)), l);
          }),
          g = await Reflect.apply(i, this, d);
        return await o._def.returns._def.type.parseAsync(g, a).catch((p) => {
          throw (l.addIssue(s(g, p)), l);
        });
      });
    } else {
      const o = this;
      return W(function (...c) {
        const l = o._def.args.safeParse(c, a);
        if (!l.success) throw new ie([n(c, l.error)]);
        const d = Reflect.apply(i, this, l.data),
          g = o._def.returns.safeParse(d, a);
        if (!g.success) throw new ie([s(d, g.error)]);
        return g.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Pe({ ...this._def, args: he.create(t).rest(Ce.create()) });
  }
  returns(t) {
    return new Pe({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, n) {
    return new Pe({ args: t || he.create([]).rest(Ce.create()), returns: r || Ce.create(), typeName: _.ZodFunction, ...I(n) });
  }
}
class Je extends A {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Je.create = (e, t) => new Je({ getter: e, typeName: _.ZodLazy, ...I(t) });
class Xe extends A {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return h(r, { received: r.data, code: u.invalid_literal, expected: this._def.value }), x;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Xe.create = (e, t) => new Xe({ value: e, typeName: _.ZodLiteral, ...I(t) });
function Fr(e, t) {
  return new xe({ values: e, typeName: _.ZodEnum, ...I(t) });
}
class xe extends A {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t),
        n = this._def.values;
      return h(r, { expected: N.joinValues(n), received: r.parsedType, code: u.invalid_type }), x;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t),
        n = this._def.values;
      return h(r, { received: r.data, code: u.invalid_enum_value, options: n }), x;
    }
    return W(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  extract(t) {
    return xe.create(t);
  }
  exclude(t) {
    return xe.create(this.options.filter((r) => !t.includes(r)));
  }
}
xe.create = Fr;
class Qe extends A {
  _parse(t) {
    const r = N.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(t);
    if (n.parsedType !== f.string && n.parsedType !== f.number) {
      const s = N.objectValues(r);
      return h(n, { expected: N.joinValues(s), received: n.parsedType, code: u.invalid_type }), x;
    }
    if (r.indexOf(t.data) === -1) {
      const s = N.objectValues(r);
      return h(n, { received: n.data, code: u.invalid_enum_value, options: s }), x;
    }
    return W(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Qe.create = (e, t) => new Qe({ values: e, typeName: _.ZodNativeEnum, ...I(t) });
class ze extends A {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== f.promise && r.common.async === !1) return h(r, { code: u.invalid_type, expected: f.promise, received: r.parsedType }), x;
    const n = r.parsedType === f.promise ? r.data : Promise.resolve(r.data);
    return W(n.then((s) => this._def.type.parseAsync(s, { path: r.path, errorMap: r.common.contextualErrorMap })));
  }
}
ze.create = (e, t) => new ze({ type: e, typeName: _.ZodPromise, ...I(t) });
class ce extends A {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === _.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      s = this._def.effect || null,
      a = {
        addIssue: (i) => {
          h(n, i), i.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((a.addIssue = a.addIssue.bind(a)), s.type === "preprocess")) {
      const i = s.transform(n.data, a);
      return n.common.issues.length
        ? { status: "dirty", value: n.data }
        : n.common.async
        ? Promise.resolve(i).then((o) => this._def.schema._parseAsync({ data: o, path: n.path, parent: n }))
        : this._def.schema._parseSync({ data: i, path: n.path, parent: n });
    }
    if (s.type === "refinement") {
      const i = (o) => {
        const c = s.refinement(o, a);
        if (n.common.async) return Promise.resolve(c);
        if (c instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        return o.status === "aborted" ? x : (o.status === "dirty" && r.dirty(), i(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((o) => (o.status === "aborted" ? x : (o.status === "dirty" && r.dirty(), i(o.value).then(() => ({ status: r.value, value: o.value })))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        if (!Ue(i)) return i;
        const o = s.transform(i.value, a);
        if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((i) => (Ue(i) ? Promise.resolve(s.transform(i.value, a)).then((o) => ({ status: r.value, value: o })) : i));
    N.assertNever(s);
  }
}
ce.create = (e, t, r) => new ce({ schema: e, typeName: _.ZodEffects, effect: t, ...I(r) });
ce.createWithPreprocess = (e, t, r) => new ce({ schema: t, effect: { type: "preprocess", transform: e }, typeName: _.ZodEffects, ...I(r) });
class ge extends A {
  _parse(t) {
    return this._getType(t) === f.undefined ? W(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ge.create = (e, t) => new ge({ innerType: e, typeName: _.ZodOptional, ...I(t) });
class je extends A {
  _parse(t) {
    return this._getType(t) === f.null ? W(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
je.create = (e, t) => new je({ innerType: e, typeName: _.ZodNullable, ...I(t) });
class Ke extends A {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === f.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({ data: n, path: r.path, parent: r });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ke.create = (e, t) => new Ke({ innerType: e, typeName: _.ZodDefault, defaultValue: typeof t.default == "function" ? t.default : () => t.default, ...I(t) });
class mt extends A {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = { ...r, common: { ...r.common, issues: [] } },
      s = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
    return ut(s)
      ? s.then((a) => ({
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new ie(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new ie(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
mt.create = (e, t) => new mt({ innerType: e, typeName: _.ZodCatch, catchValue: typeof t.catch == "function" ? t.catch : () => t.catch, ...I(t) });
class gt extends A {
  _parse(t) {
    if (this._getType(t) !== f.nan) {
      const n = this._getOrReturnCtx(t);
      return h(n, { code: u.invalid_type, expected: f.nan, received: n.parsedType }), x;
    }
    return { status: "valid", value: t.data };
  }
}
gt.create = (e) => new gt({ typeName: _.ZodNaN, ...I(e) });
const es = Symbol("zod_brand");
class Wr extends A {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = r.data;
    return this._def.type._parse({ data: n, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class tt extends A {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
        return a.status === "aborted"
          ? x
          : a.status === "dirty"
          ? (r.dirty(), Hr(a.value))
          : this._def.out._parseAsync({ data: a.value, path: n.path, parent: n });
      })();
    {
      const s = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
      return s.status === "aborted"
        ? x
        : s.status === "dirty"
        ? (r.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: n.path, parent: n });
    }
  }
  static create(t, r) {
    return new tt({ in: t, out: r, typeName: _.ZodPipeline });
  }
}
class yt extends A {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return Ue(r) && (r.value = Object.freeze(r.value)), r;
  }
}
yt.create = (e, t) => new yt({ innerType: e, typeName: _.ZodReadonly, ...I(t) });
const qr = (e, t = {}, r) =>
    e
      ? De.create().superRefine((n, s) => {
          var a, i;
          if (!e(n)) {
            const o = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t,
              c = (i = (a = o.fatal) !== null && a !== void 0 ? a : r) !== null && i !== void 0 ? i : !0,
              l = typeof o == "string" ? { message: o } : o;
            s.addIssue({ code: "custom", ...l, fatal: c });
          }
        })
      : De.create(),
  ts = { object: P.lazycreate };
var _;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(_ || (_ = {}));
const rs = (e, t = { message: `Input not instance of ${e.name}` }) => qr((r) => r instanceof e, t),
  Yr = ae.create,
  Gr = be.create,
  ns = gt.create,
  ss = we.create,
  Jr = He.create,
  as = Oe.create,
  is = ft.create,
  os = Fe.create,
  cs = We.create,
  ls = De.create,
  ds = Ce.create,
  us = ye.create,
  fs = ht.create,
  hs = oe.create,
  ps = P.create,
  ms = P.strictCreate,
  gs = qe.create,
  ys = It.create,
  vs = Ye.create,
  _s = he.create,
  bs = Ge.create,
  ws = pt.create,
  xs = Ne.create,
  Ts = Pe.create,
  Es = Je.create,
  ks = Xe.create,
  Ss = xe.create,
  Is = Qe.create,
  As = ze.create,
  ur = ce.create,
  Cs = ge.create,
  $s = je.create,
  Os = ce.createWithPreprocess,
  Ns = tt.create,
  js = () => Yr().optional(),
  Rs = () => Gr().optional(),
  Ms = () => Jr().optional(),
  Ps = {
    string: (e) => ae.create({ ...e, coerce: !0 }),
    number: (e) => be.create({ ...e, coerce: !0 }),
    boolean: (e) => He.create({ ...e, coerce: !0 }),
    bigint: (e) => we.create({ ...e, coerce: !0 }),
    date: (e) => Oe.create({ ...e, coerce: !0 }),
  },
  Ls = x;
var L = Object.freeze({
    __proto__: null,
    defaultErrorMap: Be,
    setErrorMap: Vn,
    getErrorMap: lt,
    makeIssue: dt,
    EMPTY_PATH: Bn,
    addIssueToContext: h,
    ParseStatus: U,
    INVALID: x,
    DIRTY: Hr,
    OK: W,
    isAborted: Ut,
    isDirty: Ht,
    isValid: Ue,
    isAsync: ut,
    get util() {
      return N;
    },
    get objectUtil() {
      return Bt;
    },
    ZodParsedType: f,
    getParsedType: ve,
    ZodType: A,
    ZodString: ae,
    ZodNumber: be,
    ZodBigInt: we,
    ZodBoolean: He,
    ZodDate: Oe,
    ZodSymbol: ft,
    ZodUndefined: Fe,
    ZodNull: We,
    ZodAny: De,
    ZodUnknown: Ce,
    ZodNever: ye,
    ZodVoid: ht,
    ZodArray: oe,
    ZodObject: P,
    ZodUnion: qe,
    ZodDiscriminatedUnion: It,
    ZodIntersection: Ye,
    ZodTuple: he,
    ZodRecord: Ge,
    ZodMap: pt,
    ZodSet: Ne,
    ZodFunction: Pe,
    ZodLazy: Je,
    ZodLiteral: Xe,
    ZodEnum: xe,
    ZodNativeEnum: Qe,
    ZodPromise: ze,
    ZodEffects: ce,
    ZodTransformer: ce,
    ZodOptional: ge,
    ZodNullable: je,
    ZodDefault: Ke,
    ZodCatch: mt,
    ZodNaN: gt,
    BRAND: es,
    ZodBranded: Wr,
    ZodPipeline: tt,
    ZodReadonly: yt,
    custom: qr,
    Schema: A,
    ZodSchema: A,
    late: ts,
    get ZodFirstPartyTypeKind() {
      return _;
    },
    coerce: Ps,
    any: ls,
    array: hs,
    bigint: ss,
    boolean: Jr,
    date: as,
    discriminatedUnion: ys,
    effect: ur,
    enum: Ss,
    function: Ts,
    instanceof: rs,
    intersection: vs,
    lazy: Es,
    literal: ks,
    map: ws,
    nan: ns,
    nativeEnum: Is,
    never: us,
    null: cs,
    nullable: $s,
    number: Gr,
    object: ps,
    oboolean: Ms,
    onumber: Rs,
    optional: Cs,
    ostring: js,
    pipeline: Ns,
    preprocess: Os,
    promise: As,
    record: bs,
    set: xs,
    strictObject: ms,
    string: Yr,
    symbol: is,
    transformer: ur,
    tuple: _s,
    undefined: os,
    union: gs,
    unknown: ds,
    void: fs,
    NEVER: Ls,
    ZodIssueCode: u,
    quotelessJson: Zn,
    ZodError: ie,
  }),
  Xr = ((e) => ((e.MALE = "male"), (e.FAMALE = "famale"), e))(Xr || {}),
  Qr = ((e) => ((e.SINGLE = "single"), (e.MARRIED = "married"), (e.DIVORCIED = "divorcied"), (e.WIDOWED = "widowed"), e))(Qr || {});
const Ds = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  zs = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
  fr = /^(?:\+\d{2}\s?)?(?:(?:\(\d{2}\))|(?:\d{2,3}))?[\s.-]?\d{4,5}[\s.-]?\d{4}$/;
var Kr = ((e) => ((e.ADMIN = "admin"), (e.CLIENT = "client"), e))(Kr || {});
const hr = {
    email: { schema: L.string().email(), message: "Email inválido" },
    password: { schema: L.string().regex(zn), message: "Senha inválida" },
    title: { schema: L.string().min(4).max(30), message: "Título inválido" },
    amount: { schema: L.number().max(8), message: "Valor inválido" },
    description: { schema: L.string(), message: "Digite uma descrição" },
    name: { schema: L.string(), message: "Digite o seu primeiro nome" },
    lastName: { schema: L.string(), message: "Digite o seu sobrenome" },
    rg: { schema: L.string().regex(zs), message: "RG inválido" },
    cpf: { schema: L.string().regex(Ds), message: "CPF inválido" },
    dateOfBirth: { schema: L.coerce.date(), message: "Essa data é inválida" },
    phoneNumber: { schema: L.string().regex(fr), message: "Digite um número válido" },
    apartment: { schema: L.number().min(2).max(4), message: "Apartamento inválido" },
    zipCode: { schema: L.string(), message: "Apartamento inválido" },
    street: { schema: L.string(), message: "Digite o nome da rua" },
    number: { schema: L.string().regex(fr), message: "Número inválido" },
    complement: { schema: L.string().min(4).max(10), message: "" },
    neighborhood: { schema: L.string(), message: "Digite o nome do bairro" },
    city: { schema: L.string(), message: "Digite o nome da cidade" },
    state: { schema: L.string().min(2).max(4), message: "Digite a sigla do estado" },
    gender: { schema: L.nativeEnum(Xr), message: "Selecione o gênero" },
    maritalStatus: { schema: L.nativeEnum(Qr), message: "Selecione o estado civil" },
    role: { schema: L.nativeEnum(Kr), message: "Selecione a permissão" },
  },
  cc = (e) => {
    const [t, r] = C.useState(""),
      [n, s] = C.useState(null),
      a = (i) => (hr[e].schema.safeParse(i).success ? (s(null), !0) : (s(hr[e].message), !1));
    return { value: t, error: n, setValue: r, validate: () => a(t) };
  };
function en(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = en(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function _e() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = en(e)) && (n && (n += " "), (n += t));
  return n;
}
const at = (e) => typeof e == "number" && !isNaN(e),
  vt = (e) => typeof e == "string",
  K = (e) => typeof e == "function",
  it = (e) => (vt(e) || K(e) ? e : null),
  Rt = (e) => C.isValidElement(e) || vt(e) || K(e) || at(e);
function Zs(e, t, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: s } = e;
  requestAnimationFrame(() => {
    (s.minHeight = "initial"),
      (s.height = n + "px"),
      (s.transition = `all ${r}ms`),
      requestAnimationFrame(() => {
        (s.height = "0"), (s.padding = "0"), (s.margin = "0"), setTimeout(t, r);
      });
  });
}
function At(e) {
  let { enter: t, exit: r, appendPosition: n = !1, collapse: s = !0, collapseDuration: a = 300 } = e;
  return function (i) {
    let { children: o, position: c, preventExitTransition: l, done: d, nodeRef: g, isIn: E } = i;
    const p = n ? `${t}--${c}` : t,
      k = n ? `${r}--${c}` : r,
      T = C.useRef(0);
    return (
      C.useLayoutEffect(() => {
        const m = g.current,
          v = p.split(" "),
          b = (V) => {
            V.target === g.current &&
              (m.dispatchEvent(new Event("d")),
              m.removeEventListener("animationend", b),
              m.removeEventListener("animationcancel", b),
              T.current === 0 && V.type !== "animationcancel" && m.classList.remove(...v));
          };
        m.classList.add(...v), m.addEventListener("animationend", b), m.addEventListener("animationcancel", b);
      }, []),
      C.useEffect(() => {
        const m = g.current,
          v = () => {
            m.removeEventListener("animationend", v), s ? Zs(m, d, a) : d();
          };
        E || (l ? v() : ((T.current = 1), (m.className += ` ${k}`), m.addEventListener("animationend", v)));
      }, [E]),
      O.createElement(O.Fragment, null, o)
    );
  };
}
function pr(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const Ie = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
    },
    off(e, t) {
      if (t) {
        const r = this.list.get(e).filter((n) => n !== t);
        return this.list.set(e, r), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const r = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(r);
        });
    },
  },
  nt = (e) => {
    let { theme: t, type: r, ...n } = e;
    return O.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`,
      ...n,
    });
  },
  Mt = {
    info: function (e) {
      return O.createElement(
        nt,
        { ...e },
        O.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return O.createElement(
        nt,
        { ...e },
        O.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return O.createElement(
        nt,
        { ...e },
        O.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return O.createElement(
        nt,
        { ...e },
        O.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return O.createElement("div", { className: "Toastify__spinner" });
    },
  };
function Vs(e) {
  const [, t] = C.useReducer((p) => p + 1, 0),
    [r, n] = C.useState([]),
    s = C.useRef(null),
    a = C.useRef(new Map()).current,
    i = (p) => r.indexOf(p) !== -1,
    o = C.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: i, getToast: (p) => a.get(p) }).current;
  function c(p) {
    let { containerId: k } = p;
    const { limit: T } = o.props;
    !T || (k && o.containerId !== k) || ((o.count -= o.queue.length), (o.queue = []));
  }
  function l(p) {
    n((k) => (p == null ? [] : k.filter((T) => T !== p)));
  }
  function d() {
    const { toastContent: p, toastProps: k, staleId: T } = o.queue.shift();
    E(p, k, T);
  }
  function g(p, k) {
    let { delay: T, staleId: m, ...v } = k;
    if (
      !Rt(p) ||
      (function (ee) {
        return !s.current || (o.props.enableMultiContainer && ee.containerId !== o.props.containerId) || (a.has(ee.toastId) && ee.updateId == null);
      })(v)
    )
      return;
    const { toastId: b, updateId: V, data: $ } = v,
      { props: j } = o,
      le = () => l(b),
      w = V == null;
    w && o.count++;
    const S = {
      ...j,
      style: j.toastStyle,
      key: o.toastKey++,
      ...Object.fromEntries(
        Object.entries(v).filter((ee) => {
          let [pe, G] = ee;
          return G != null;
        })
      ),
      toastId: b,
      updateId: V,
      data: $,
      closeToast: le,
      isIn: !1,
      className: it(v.className || j.toastClassName),
      bodyClassName: it(v.bodyClassName || j.bodyClassName),
      progressClassName: it(v.progressClassName || j.progressClassName),
      autoClose: !v.isLoading && ((R = v.autoClose), (de = j.autoClose), R === !1 || (at(R) && R > 0) ? R : de),
      deleteToast() {
        const ee = pr(a.get(b), "removed");
        a.delete(b), Ie.emit(4, ee);
        const pe = o.queue.length;
        if (((o.count = b == null ? o.count - o.displayedToast : o.count - 1), o.count < 0 && (o.count = 0), pe > 0)) {
          const G = b == null ? o.props.limit : 1;
          if (pe === 1 || G === 1) o.displayedToast++, d();
          else {
            const Te = G > pe ? pe : G;
            o.displayedToast = Te;
            for (let J = 0; J < Te; J++) d();
          }
        } else t();
      },
    };
    var R, de;
    (S.iconOut = (function (ee) {
      let { theme: pe, type: G, isLoading: Te, icon: J } = ee,
        me = null;
      const Ee = { theme: pe, type: G };
      return (
        J === !1 ||
          (K(J)
            ? (me = J(Ee))
            : C.isValidElement(J)
            ? (me = C.cloneElement(J, Ee))
            : vt(J) || at(J)
            ? (me = J)
            : Te
            ? (me = Mt.spinner())
            : ((rt) => rt in Mt)(G) && (me = Mt[G](Ee))),
        me
      );
    })(S)),
      K(v.onOpen) && (S.onOpen = v.onOpen),
      K(v.onClose) && (S.onClose = v.onClose),
      (S.closeButton = j.closeButton),
      v.closeButton === !1 || Rt(v.closeButton)
        ? (S.closeButton = v.closeButton)
        : v.closeButton === !0 && (S.closeButton = !Rt(j.closeButton) || j.closeButton);
    let ue = p;
    C.isValidElement(p) && !vt(p.type)
      ? (ue = C.cloneElement(p, { closeToast: le, toastProps: S, data: $ }))
      : K(p) && (ue = p({ closeToast: le, toastProps: S, data: $ })),
      j.limit && j.limit > 0 && o.count > j.limit && w
        ? o.queue.push({ toastContent: ue, toastProps: S, staleId: m })
        : at(T)
        ? setTimeout(() => {
            E(ue, S, m);
          }, T)
        : E(ue, S, m);
  }
  function E(p, k, T) {
    const { toastId: m } = k;
    T && a.delete(T);
    const v = { content: p, props: k };
    a.set(m, v), n((b) => [...b, m].filter((V) => V !== T)), Ie.emit(4, pr(v, v.props.updateId == null ? "added" : "updated"));
  }
  return (
    C.useEffect(
      () => (
        (o.containerId = e.containerId),
        Ie.cancelEmit(3)
          .on(0, g)
          .on(1, (p) => s.current && l(p))
          .on(5, c)
          .emit(2, o),
        () => {
          a.clear(), Ie.emit(3, o);
        }
      ),
      []
    ),
    C.useEffect(() => {
      (o.props = e), (o.isToastActive = i), (o.displayedToast = r.length);
    }),
    {
      getToastToRender: function (p) {
        const k = new Map(),
          T = Array.from(a.values());
        return (
          e.newestOnTop && T.reverse(),
          T.forEach((m) => {
            const { position: v } = m.props;
            k.has(v) || k.set(v, []), k.get(v).push(m);
          }),
          Array.from(k, (m) => p(m[0], m[1]))
        );
      },
      containerRef: s,
      isToastActive: i,
    }
  );
}
function mr(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function gr(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function Bs(e) {
  const [t, r] = C.useState(!1),
    [n, s] = C.useState(!1),
    a = C.useRef(null),
    i = C.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current,
    o = C.useRef(e),
    { autoClose: c, pauseOnHover: l, closeToast: d, onClick: g, closeOnClick: E } = e;
  function p($) {
    if (e.draggable) {
      $.nativeEvent.type === "touchstart" && $.nativeEvent.preventDefault(),
        (i.didMove = !1),
        document.addEventListener("mousemove", v),
        document.addEventListener("mouseup", b),
        document.addEventListener("touchmove", v),
        document.addEventListener("touchend", b);
      const j = a.current;
      (i.canCloseOnClick = !0),
        (i.canDrag = !0),
        (i.boundingRect = j.getBoundingClientRect()),
        (j.style.transition = ""),
        (i.x = mr($.nativeEvent)),
        (i.y = gr($.nativeEvent)),
        e.draggableDirection === "x"
          ? ((i.start = i.x), (i.removalDistance = j.offsetWidth * (e.draggablePercent / 100)))
          : ((i.start = i.y), (i.removalDistance = j.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100)));
    }
  }
  function k($) {
    if (i.boundingRect) {
      const { top: j, bottom: le, left: w, right: S } = i.boundingRect;
      $.nativeEvent.type !== "touchend" && e.pauseOnHover && i.x >= w && i.x <= S && i.y >= j && i.y <= le ? m() : T();
    }
  }
  function T() {
    r(!0);
  }
  function m() {
    r(!1);
  }
  function v($) {
    const j = a.current;
    i.canDrag &&
      j &&
      ((i.didMove = !0),
      t && m(),
      (i.x = mr($)),
      (i.y = gr($)),
      (i.delta = e.draggableDirection === "x" ? i.x - i.start : i.y - i.start),
      i.start !== i.x && (i.canCloseOnClick = !1),
      (j.style.transform = `translate${e.draggableDirection}(${i.delta}px)`),
      (j.style.opacity = "" + (1 - Math.abs(i.delta / i.removalDistance))));
  }
  function b() {
    document.removeEventListener("mousemove", v),
      document.removeEventListener("mouseup", b),
      document.removeEventListener("touchmove", v),
      document.removeEventListener("touchend", b);
    const $ = a.current;
    if (i.canDrag && i.didMove && $) {
      if (((i.canDrag = !1), Math.abs(i.delta) > i.removalDistance)) return s(!0), void e.closeToast();
      ($.style.transition = "transform 0.2s, opacity 0.2s"), ($.style.transform = `translate${e.draggableDirection}(0)`), ($.style.opacity = "1");
    }
  }
  C.useEffect(() => {
    o.current = e;
  }),
    C.useEffect(
      () => (
        a.current && a.current.addEventListener("d", T, { once: !0 }),
        K(e.onOpen) && e.onOpen(C.isValidElement(e.children) && e.children.props),
        () => {
          const $ = o.current;
          K($.onClose) && $.onClose(C.isValidElement($.children) && $.children.props);
        }
      ),
      []
    ),
    C.useEffect(
      () => (
        e.pauseOnFocusLoss && (document.hasFocus() || m(), window.addEventListener("focus", T), window.addEventListener("blur", m)),
        () => {
          e.pauseOnFocusLoss && (window.removeEventListener("focus", T), window.removeEventListener("blur", m));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const V = { onMouseDown: p, onTouchStart: p, onMouseUp: k, onTouchEnd: k };
  return (
    c && l && ((V.onMouseEnter = m), (V.onMouseLeave = T)),
    E &&
      (V.onClick = ($) => {
        g && g($), i.canCloseOnClick && d();
      }),
    { playToast: T, pauseToast: m, isRunning: t, preventExitTransition: n, toastRef: a, eventHandlers: V }
  );
}
function tn(e) {
  let { closeToast: t, theme: r, ariaLabel: n = "close" } = e;
  return O.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${r}`,
      type: "button",
      onClick: (s) => {
        s.stopPropagation(), t(s);
      },
      "aria-label": n,
    },
    O.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      O.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function Us(e) {
  let {
    delay: t,
    isRunning: r,
    closeToast: n,
    type: s = "default",
    hide: a,
    className: i,
    style: o,
    controlledProgress: c,
    progress: l,
    rtl: d,
    isIn: g,
    theme: E,
  } = e;
  const p = a || (c && l === 0),
    k = { ...o, animationDuration: `${t}ms`, animationPlayState: r ? "running" : "paused", opacity: p ? 0 : 1 };
  c && (k.transform = `scaleX(${l})`);
  const T = _e(
      "Toastify__progress-bar",
      c ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${E}`,
      `Toastify__progress-bar--${s}`,
      { "Toastify__progress-bar--rtl": d }
    ),
    m = K(i) ? i({ rtl: d, type: s, defaultClassName: T }) : _e(T, i);
  return O.createElement("div", {
    role: "progressbar",
    "aria-hidden": p ? "true" : "false",
    "aria-label": "notification timer",
    className: m,
    style: k,
    [c && l >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      c && l < 1
        ? null
        : () => {
            g && n();
          },
  });
}
const Hs = (e) => {
    const { isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: s } = Bs(e),
      {
        closeButton: a,
        children: i,
        autoClose: o,
        onClick: c,
        type: l,
        hideProgressBar: d,
        closeToast: g,
        transition: E,
        position: p,
        className: k,
        style: T,
        bodyClassName: m,
        bodyStyle: v,
        progressClassName: b,
        progressStyle: V,
        updateId: $,
        role: j,
        progress: le,
        rtl: w,
        toastId: S,
        deleteToast: R,
        isIn: de,
        isLoading: ue,
        iconOut: ee,
        closeOnClick: pe,
        theme: G,
      } = e,
      Te = _e(
        "Toastify__toast",
        `Toastify__toast-theme--${G}`,
        `Toastify__toast--${l}`,
        { "Toastify__toast--rtl": w },
        { "Toastify__toast--close-on-click": pe }
      ),
      J = K(k) ? k({ rtl: w, position: p, type: l, defaultClassName: Te }) : _e(Te, k),
      me = !!le || !o,
      Ee = { closeToast: g, type: l, theme: G };
    let rt = null;
    return (
      a === !1 || (rt = K(a) ? a(Ee) : C.isValidElement(a) ? C.cloneElement(a, Ee) : tn(Ee)),
      O.createElement(
        E,
        { isIn: de, done: R, position: p, preventExitTransition: r, nodeRef: n },
        O.createElement(
          "div",
          { id: S, onClick: c, className: J, ...s, style: T, ref: n },
          O.createElement(
            "div",
            { ...(de && { role: j }), className: K(m) ? m({ type: l }) : _e("Toastify__toast-body", m), style: v },
            ee != null && O.createElement("div", { className: _e("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ue }) }, ee),
            O.createElement("div", null, i)
          ),
          rt,
          O.createElement(Us, {
            ...($ && !me ? { key: `pb-${$}` } : {}),
            rtl: w,
            theme: G,
            delay: o,
            isRunning: t,
            isIn: de,
            closeToast: g,
            hide: d,
            type: l,
            style: V,
            className: b,
            controlledProgress: me,
            progress: le || 0,
          })
        )
      )
    );
  },
  Ct = function (e, t) {
    return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
  },
  Fs = At(Ct("bounce", !0));
At(Ct("slide", !0));
At(Ct("zoom"));
At(Ct("flip"));
const yr = C.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: s } = Vs(e),
    { className: a, style: i, rtl: o, containerId: c } = e;
  function l(d) {
    const g = _e("Toastify__toast-container", `Toastify__toast-container--${d}`, { "Toastify__toast-container--rtl": o });
    return K(a) ? a({ position: d, rtl: o, defaultClassName: g }) : _e(g, it(a));
  }
  return (
    C.useEffect(() => {
      t && (t.current = n.current);
    }, []),
    O.createElement(
      "div",
      { ref: n, className: "Toastify", id: c },
      r((d, g) => {
        const E = g.length ? { ...i } : { ...i, pointerEvents: "none" };
        return O.createElement(
          "div",
          { className: l(d), style: E, key: `container-${d}` },
          g.map((p, k) => {
            let { content: T, props: m } = p;
            return O.createElement(Hs, { ...m, isIn: s(m.toastId), style: { ...m.style, "--nth": k + 1, "--len": g.length }, key: `toast-${m.key}` }, T);
          })
        );
      })
    )
  );
});
(yr.displayName = "ToastContainer"),
  (yr.defaultProps = {
    position: "top-right",
    transition: Fs,
    autoClose: 5e3,
    closeButton: tn,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
let vr,
  Pt = new Map(),
  _r = [];
Ie.on(2, (e) => {
  (vr = e.containerId || e),
    Pt.set(vr, e),
    _r.forEach((t) => {
      Ie.emit(0, t.content, t.options);
    }),
    (_r = []);
}).on(3, (e) => {
  Pt.delete(e.containerId || e), Pt.size === 0 && Ie.off(0).off(1).off(5);
});
var rn = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  br = O.createContext && O.createContext(rn),
  Ws = ["attr", "size", "title"];
function qs(e, t) {
  if (e == null) return {};
  var r = Ys(e, t),
    n,
    s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++) (n = a[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ys(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    s,
    a;
  for (a = 0; a < n.length; a++) (s = n[a]), !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
function _t() {
  return (
    (_t = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _t.apply(this, arguments)
  );
}
function wr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wr(Object(r), !0).forEach(function (n) {
          Gs(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : wr(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Gs(e, t, r) {
  return (t = Js(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Js(e) {
  var t = Xs(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Xs(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nn(e) {
  return e && e.map((t, r) => O.createElement(t.tag, bt({ key: r }, t.attr), nn(t.child)));
}
function H(e) {
  return (t) => O.createElement(Qs, _t({ attr: bt({}, e.attr) }, t), nn(e.child));
}
function Qs(e) {
  var t = (r) => {
    var { attr: n, size: s, title: a } = e,
      i = qs(e, Ws),
      o = s || r.size || "1em",
      c;
    return (
      r.className && (c = r.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      O.createElement(
        "svg",
        _t({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, r.attr, n, i, {
          className: c,
          style: bt(bt({ color: e.color || r.color }, r.style), e.style),
          height: o,
          width: o,
          xmlns: "http://www.w3.org/2000/svg",
        }),
        a && O.createElement("title", null, a),
        e.children
      )
    );
  };
  return br !== void 0 ? O.createElement(br.Consumer, null, (r) => t(r)) : t(rn);
}
function Ks(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
        child: [],
      },
    ],
  })(e);
}
function ea(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function ta(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
        child: [],
      },
    ],
  })(e);
}
function ra(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function na(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
        child: [],
      },
    ],
  })(e);
}
function lc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
        },
        child: [],
      },
    ],
  })(e);
}
function xr(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function sa(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function aa(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: { d: "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" },
        child: [],
      },
    ],
  })(e);
}
function dc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39zm16-119.7L315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4zM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352z",
        },
        child: [],
      },
    ],
  })(e);
}
function uc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      { tag: "circle", attr: { cx: "256", cy: "256", r: "64" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z",
        },
        child: [],
      },
    ],
  })(e);
}
function ia(e) {
  return H({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" }, child: [] }] })(e);
}
const sn = { src: "/astro/logo-original.BHa2Zh8H.webp", width: 293, height: 103, format: "webp" };
function oa(e, t = "_self") {
  window.open(e, t);
}
const ca = [
    { link: "/product/products", title: "Investimentos" },
    { link: "/signin", title: "Login" },
  ],
  Tr = { light: "text-white", dark: "text-dark" },
  fc = ({ variant: e = "light" }) => {
    const [t, r] = C.useState(!1),
      [n, s] = C.useState(!1),
      a = () => {
        r(!t);
      };
    return (
      C.useEffect(() => {
        let i = () => {
          window.scrollY >= 80 ? s(!0) : s(!1);
        };
        const o = () => {
          r(!1);
        };
        return (
          window.addEventListener("scroll", i),
          window.addEventListener("scroll", o),
          () => {
            window.removeEventListener("scroll", i), window.addEventListener("scroll", o);
          }
        );
      }, []),
      Q.jsx("header", {
        className: `${n || t ? "bg-white border-b border-dark/20" : "bg-transparent border-b border-transparent"}
        fixed top-0 left-0 w-full ease-in-out duration-300 z-40 overflow-hidden`,
        children: Q.jsxs("nav", {
          className: `${n ? "py-2 px-4" : "p-4"} w-full max-w-6xl mx-auto flex items-center justify-between ease-in-out duration-300`,
          children: [
            Q.jsx("a", { href: "/", children: Q.jsx("img", { src: sn.src, alt: "Logo", className: "w-32 object-contain" }) }),
            Q.jsx("div", {
              onClick: a,
              className: "block text-4xl md:hidden z-50",
              children: t ? Q.jsx(aa, { className: "text-white" }) : Q.jsx(ia, { className: `${n ? "text-orange-600" : "text-white"}` }),
            }),
            Q.jsxs("ul", {
              className: `${n ? Tr.dark : Tr[e]}
            ${t ? "opacity-95 h-full bg-orange-600 top-0 text-white" : "opacity-0 h-0 -top-24"}
            z-40 fixed p-6 h-0 w-full flex items-center justify-center flex-col gap-12 left-0 top-0 transition-all duration-100 md:opacity-100 md:relative md:p-0 md:w-auto md:top-0 md:flex-row md:gap-4 md:bg-transparent`,
              children: [
                ca.map((i, o) =>
                  Q.jsx(
                    "li",
                    {
                      className: "text-inherit",
                      children: Q.jsx("a", {
                        href: i.link,
                        className: "text-inherit font-medium cursor-pointer transition-all duration-100 hover:text-primary",
                        children: i.title,
                      }),
                    },
                    o + i.title
                  )
                ),
                Q.jsx("li", { children: Q.jsx(an, { onClick: () => oa("/signup"), children: "Cadastre-se" }) }),
              ],
            }),
          ],
        }),
      })
    );
  },
  la = { primary: "bg-primary text-white", green: "bg-green-600 text-white" },
  an = ({ children: e, variant: t = "primary", ...r }) =>
    Q.jsx("button", { ...r, className: `${la[t]} text-white py-2 px-4 font-medium cursor-pointer ease-in-out duration-100 hover:bg-opacity-70`, children: e });
function da(e) {
  return !(e.length !== 3 || !e[0] || typeof e[0] != "object");
}
function on(e, t, r) {
  const n = t?.split("/").pop()?.replace(".astro", "") ?? "",
    s = (...a) => {
      if (!da(a)) throw new Y({ ...tr, message: tr.message(n) });
      return e(...a);
    };
  return Object.defineProperty(s, "name", { value: n, writable: !1 }), (s.isAstroComponentFactory = !0), (s.moduleId = t), (s.propagation = r), s;
}
function ua(e) {
  return on(e.factory, e.moduleId, e.propagation);
}
function te(e, t, r) {
  return typeof e == "function" ? on(e, t, r) : ua(e);
}
const fa = "4.5.3";
function ha() {
  return (t) => {
    if (typeof t == "string") throw new Y({ ...rr, message: rr.message(JSON.stringify(t)) });
    let r = [...Object.values(t)];
    if (r.length === 0) throw new Y({ ...nr, message: nr.message(JSON.stringify(t)) });
    return Promise.all(r.map((n) => n()));
  };
}
function re(e) {
  return { site: e ? new URL(e) : void 0, generator: `Astro v${fa}`, glob: ha() };
}
typeof process < "u" && process.stdout && process.stdout.isTTY;
const { replace: pa } = "",
  ma = /[&<>'"]/g,
  ga = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
  ya = (e) => ga[e],
  va = (e) => pa.call(e, ma, ya);
function Qt(e) {
  return !!e && typeof e == "object" && typeof e.then == "function";
}
const ot = va;
class wt extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const D = (e) => (e instanceof wt ? e : typeof e == "string" ? new wt(e) : e);
function _a(e) {
  return Object.prototype.toString.call(e) === "[object HTMLString]";
}
const cn = Symbol.for("astro:render");
function Wt(e) {
  return Object.defineProperty(e, cn, { value: !0 });
}
function ba(e) {
  return e && typeof e == "object" && e[cn];
}
function ln(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++) e[t] && (r = ln(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function dn() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ln(e)) && (n && (n += " "), (n += t));
  return n;
}
const X = { Value: 0, JSON: 1, RegExp: 2, Date: 3, Map: 4, Set: 5, BigInt: 6, URL: 7, Uint8Array: 8, Uint16Array: 9, Uint32Array: 10 };
function Lt(e, t = {}, r = new WeakSet()) {
  if (r.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  r.add(e);
  const n = e.map((s) => fn(s, t, r));
  return r.delete(e), n;
}
function un(e, t = {}, r = new WeakSet()) {
  if (r.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  r.add(e);
  const n = Object.fromEntries(Object.entries(e).map(([s, a]) => [s, fn(a, t, r)]));
  return r.delete(e), n;
}
function fn(e, t = {}, r = new WeakSet()) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Date]":
      return [X.Date, e.toISOString()];
    case "[object RegExp]":
      return [X.RegExp, e.source];
    case "[object Map]":
      return [X.Map, Lt(Array.from(e), t, r)];
    case "[object Set]":
      return [X.Set, Lt(Array.from(e), t, r)];
    case "[object BigInt]":
      return [X.BigInt, e.toString()];
    case "[object URL]":
      return [X.URL, e.toString()];
    case "[object Array]":
      return [X.JSON, Lt(e, t, r)];
    case "[object Uint8Array]":
      return [X.Uint8Array, Array.from(e)];
    case "[object Uint16Array]":
      return [X.Uint16Array, Array.from(e)];
    case "[object Uint32Array]":
      return [X.Uint32Array, Array.from(e)];
    default:
      return e !== null && typeof e == "object" ? [X.Value, un(e, t, r)] : e === void 0 ? [X.Value] : [X.Value, e];
  }
}
function hn(e, t) {
  return JSON.stringify(un(e, t));
}
const pn = Object.freeze(["data-astro-transition-scope", "data-astro-transition-persist", "data-astro-transition-persist-props"]);
function wa(e, t) {
  let r = { isPage: !1, hydration: null, props: {}, propsWithoutTransitionAttributes: {} };
  for (const [n, s] of Object.entries(e))
    if ((n.startsWith("server:") && n === "server:root" && (r.isPage = !0), n.startsWith("client:")))
      switch ((r.hydration || (r.hydration = { directive: "", value: "", componentUrl: "", componentExport: { value: "" } }), n)) {
        case "client:component-path": {
          r.hydration.componentUrl = s;
          break;
        }
        case "client:component-export": {
          r.hydration.componentExport.value = s;
          break;
        }
        case "client:component-hydration":
          break;
        case "client:display-name":
          break;
        default: {
          if (((r.hydration.directive = n.split(":")[1]), (r.hydration.value = s), !t.has(r.hydration.directive))) {
            const a = Array.from(t.keys())
              .map((i) => `client:${i}`)
              .join(", ");
            throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${a}`);
          }
          if (r.hydration.directive === "media" && typeof r.hydration.value != "string") throw new Y(An);
          break;
        }
      }
    else (r.props[n] = s), pn.includes(n) || (r.propsWithoutTransitionAttributes[n] = s);
  for (const n of Object.getOwnPropertySymbols(e)) (r.props[n] = e[n]), (r.propsWithoutTransitionAttributes[n] = e[n]);
  return r;
}
async function xa(e, t) {
  const { renderer: r, result: n, astroId: s, props: a, attrs: i } = e,
    { hydrate: o, componentUrl: c, componentExport: l } = t;
  if (!l.value) throw new Y({ ...sr, message: sr.message(t.displayName) });
  const d = { children: "", props: { uid: s } };
  if (i) for (const [E, p] of Object.entries(i)) d.props[E] = ot(p);
  (d.props["component-url"] = await n.resolve(decodeURI(c))),
    r.clientEntrypoint &&
      ((d.props["component-export"] = l.value), (d.props["renderer-url"] = await n.resolve(decodeURI(r.clientEntrypoint))), (d.props.props = ot(hn(a, t)))),
    (d.props.ssr = ""),
    (d.props.client = o);
  let g = await n.resolve("astro:scripts/before-hydration.js");
  return (
    g.length && (d.props["before-hydration-url"] = g),
    (d.props.opts = ot(JSON.stringify({ name: t.displayName, value: t.hydrateArgs || "" }))),
    pn.forEach((E) => {
      typeof a[E] < "u" && (d.props[E] = a[E]);
    }),
    d
  );
}
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ const qt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",
  Dt = qt.length;
function Ta(e) {
  let t = 0;
  if (e.length === 0) return t;
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    (t = (t << 5) - t + n), (t = t & t);
  }
  return t;
}
function Ea(e) {
  let t,
    r = "",
    n = Ta(e);
  const s = n < 0 ? "Z" : "";
  for (n = Math.abs(n); n >= Dt; ) (t = n % Dt), (n = Math.floor(n / Dt)), (r = qt[t] + r);
  return n > 0 && (r = qt[n] + r), s + r;
}
function ka(e) {
  return e == null ? !1 : e.isAstroComponentFactory === !0;
}
function Sa(e, t) {
  let r = t.propagation || "none";
  return (
    t.moduleId && e.componentMetadata.has(t.moduleId) && r === "none" && (r = e.componentMetadata.get(t.moduleId).propagation), r === "in-tree" || r === "self"
  );
}
const Ia = Symbol.for("astro.headAndContent");
function Aa(e) {
  return typeof e == "object" && !!e[Ia];
}
var Ca =
  '(()=>{var v=Object.defineProperty;var A=(c,s,a)=>s in c?v(c,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[s]=a;var d=(c,s,a)=>(A(c,typeof s!="symbol"?s+"":s,a),a);var u;{let c={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},s=t=>{let[e,n]=t;return e in c?c[e](n):void 0},a=t=>t.map(s),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,n])=>[e,s(n)]));customElements.get("astro-island")||customElements.define("astro-island",(u=class extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var f;if(!this.hydrator||!this.isConnected)return;let e=(f=this.parentElement)==null?void 0:f.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let n=this.querySelectorAll("astro-slot"),r={},l=this.querySelectorAll("template[data-astro-template]");for(let o of l){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(r[o.getAttribute("data-astro-template")||"default"]=o.innerHTML,o.remove())}for(let o of n){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(r[o.getAttribute("name")||"default"]=o.innerHTML)}let h;try{h=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(o){let i=this.getAttribute("component-url")||"<unknown>",b=this.getAttribute("component-export");throw b&&(i+=` (export ${b})`),console.error(`[hydrate] Error parsing props for component ${i}`,this.getAttribute("props"),o),o}let p;await this.hydrator(this)(this.Component,h,r,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),n.disconnect(),this.childrenConnectedCallback()},n=new MutationObserver(()=>{var r;((r=this.lastChild)==null?void 0:r.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});n.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),n=this.getAttribute("client");if(Astro[n]===void 0){window.addEventListener(`astro:${n}`,()=>this.start(),{once:!0});return}try{await Astro[n](async()=>{let r=this.getAttribute("renderer-url"),[l,{default:h}]=await Promise.all([import(this.getAttribute("component-url")),r?import(r):()=>()=>{}]),p=this.getAttribute("component-export")||"default";if(!p.includes("."))this.Component=l[p];else{this.Component=l;for(let y of p.split("."))this.Component=this.Component[y]}return this.hydrator=h,this.hydrate},e,this)}catch(r){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,r)}}attributeChangedCallback(){this.hydrate()}},d(u,"observedAttributes",["props"]),u))}})();';
const $a = "<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";
function Oa(e) {
  return e._metadata.hasHydrationScript ? !1 : (e._metadata.hasHydrationScript = !0);
}
function Na(e, t) {
  return e._metadata.hasDirectives.has(t) ? !1 : (e._metadata.hasDirectives.add(t), !0);
}
function Er(e, t) {
  const n = e.clientDirectives.get(t);
  if (!n) throw new Error(`Unknown directive: ${t}`);
  return n;
}
function ja(e, t, r) {
  switch (t) {
    case "both":
      return `${$a}<script>${Er(e, r)};${Ca}<\/script>`;
    case "directive":
      return `<script>${Er(e, r)}<\/script>`;
  }
  return "";
}
const mn = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,
  Ra =
    /^(?:allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,
  Ma = /^(?:contenteditable|draggable|spellcheck|value)$/i,
  Pa = /^(?:autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,
  La = new Set(["set:html", "set:text"]),
  Da = (e) => e.trim().replace(/(?!^)\b\w|\s+|\W+/g, (t, r) => (/\W/.test(t) ? "" : r === 0 ? t : t.toUpperCase())),
  ke = (e, t = !0) => (t ? String(e).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : e),
  za = (e) => (e.toLowerCase() === e ? e : e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)),
  kr = (e) =>
    Object.entries(e)
      .filter(([t, r]) => (typeof r == "string" && r.trim()) || typeof r == "number")
      .map(([t, r]) => (t[0] !== "-" && t[1] !== "-" ? `${za(t)}:${r}` : `${t}:${r}`))
      .join(";");
function Za(e) {
  let t = "";
  for (const [r, n] of Object.entries(e))
    t += `const ${Da(r)} = ${JSON.stringify(n)?.replace(/<\/script>/g, "\\x3C/script>")};
`;
  return D(t);
}
function Sr(e) {
  return e.length === 1 ? e[0] : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function F(e, t, r = !0) {
  if (e == null) return "";
  if (e === !1) return Ma.test(t) || Pa.test(t) ? D(` ${t}="false"`) : "";
  if (La.has(t))
    return (
      console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),
      ""
    );
  if (t === "class:list") {
    const n = ke(dn(e), r);
    return n === "" ? "" : D(` ${t.slice(0, -5)}="${n}"`);
  }
  if (t === "style" && !(e instanceof wt)) {
    if (Array.isArray(e) && e.length === 2) return D(` ${t}="${ke(`${kr(e[0])};${e[1]}`, r)}"`);
    if (typeof e == "object") return D(` ${t}="${ke(kr(e), r)}"`);
  }
  return t === "className"
    ? D(` class="${ke(e, r)}"`)
    : typeof e == "string" && e.includes("&") && Va(e)
    ? D(` ${t}="${ke(e, !1)}"`)
    : e === !0 && (t.startsWith("data-") || Ra.test(t))
    ? D(` ${t}`)
    : D(` ${t}="${ke(e, r)}"`);
}
function Yt(e, t = !0) {
  let r = "";
  for (const [n, s] of Object.entries(e)) r += F(s, n, t);
  return D(r);
}
function Ve(e, { props: t, children: r = "" }, n = !0) {
  const { lang: s, "data-astro-id": a, "define:vars": i, ...o } = t;
  return (
    i &&
      (e === "style" && (delete o["is:global"], delete o["is:scoped"]),
      e === "script" &&
        (delete o.hoist,
        (r =
          Za(i) +
          `
` +
          r))),
    (r == null || r == "") && mn.test(e) ? `<${e}${Yt(o, n)} />` : `<${e}${Yt(o, n)}>${r}</${e}>`
  );
}
function gn(e) {
  const t = [],
    r = { write: (s) => t.push(s) },
    n = e(r);
  return (
    Promise.resolve(n).catch(() => {}),
    {
      async renderToFinalDestination(s) {
        for (const a of t) s.write(a);
        (r.write = (a) => s.write(a)), await n;
      },
    }
  );
}
typeof process < "u" && Object.prototype.toString.call(process);
function Va(e) {
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
const zt = (e, t, r) => {
  const n = JSON.stringify(e.props),
    s = e.children;
  return t === r.findIndex((a) => JSON.stringify(a.props) === n && a.children == s);
};
function Ir(e) {
  e._metadata.hasRenderedHead = !0;
  const t = Array.from(e.styles)
    .filter(zt)
    .map((a) => (a.props.rel === "stylesheet" ? Ve("link", a) : Ve("style", a)));
  e.styles.clear();
  const r = Array.from(e.scripts)
      .filter(zt)
      .map((a) => Ve("script", a, !1)),
    n = Array.from(e.links)
      .filter(zt)
      .map((a) => Ve("link", a, !1));
  let s =
    t.join(`
`) +
    n.join(`
`) +
    r.join(`
`);
  if (e._metadata.extraHead.length > 0) for (const a of e._metadata.extraHead) s += a;
  return D(s);
}
function* ne() {
  yield Wt({ type: "maybe-head" });
}
const Gt = Symbol.for("astro:slot-string");
class Jt extends wt {
  instructions;
  [Gt];
  constructor(t, r) {
    super(t), (this.instructions = r), (this[Gt] = !0);
  }
}
function Ba(e) {
  return !!e[Gt];
}
function Kt(e, t, r) {
  return !t && r
    ? Kt(e, r)
    : {
        async render(n) {
          await Le(n, typeof t == "function" ? t(e) : t);
        },
      };
}
async function $t(e, t, r) {
  let n = "",
    s = null;
  const a = {
    write(o) {
      if (o instanceof Jt) (n += o), o.instructions && ((s ??= []), s.push(...o.instructions));
      else {
        if (o instanceof Response) return;
        typeof o == "object" && "type" in o && typeof o.type == "string" ? (s === null && (s = []), s.push(o)) : (n += er(e, o));
      }
    },
  };
  return await Kt(e, t, r).render(a), D(new Jt(n, s));
}
async function yn(e, t = {}) {
  let r = null,
    n = {};
  return (
    t &&
      (await Promise.all(
        Object.entries(t).map(([s, a]) =>
          $t(e, a).then((i) => {
            i.instructions && (r === null && (r = []), r.push(...i.instructions)), (n[s] = i);
          })
        )
      )),
    { slotInstructions: r, children: n }
  );
}
const Ua = Symbol.for("astro:fragment"),
  Ar = Symbol.for("astro:renderer");
new TextEncoder();
const Ha = new TextDecoder();
function vn(e, t) {
  if (ba(t)) {
    const r = t;
    switch (r.type) {
      case "directive": {
        const { hydration: n } = r;
        let s = n && Oa(e),
          a = n && Na(e, n.directive),
          i = s ? "both" : a ? "directive" : null;
        if (i) {
          let o = ja(e, i, n.directive);
          return D(o);
        } else return "";
      }
      case "head":
        return e._metadata.hasRenderedHead || e.partial ? "" : Ir(e);
      case "maybe-head":
        return e._metadata.hasRenderedHead || e._metadata.headInTree || e.partial ? "" : Ir(e);
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts: n } = e._metadata,
          { rendererName: s } = r;
        return n.has(s) ? "" : (n.add(s), r.render());
      }
      default:
        throw new Error(`Unknown chunk type: ${t.type}`);
    }
  } else {
    if (t instanceof Response) return "";
    if (Ba(t)) {
      let r = "";
      const n = t;
      if (n.instructions) for (const s of n.instructions) r += vn(e, s);
      return (r += t.toString()), r;
    }
  }
  return t.toString();
}
function er(e, t) {
  return ArrayBuffer.isView(t) ? Ha.decode(t) : vn(e, t);
}
function Fa(e) {
  return !!e && typeof e == "object" && "render" in e && typeof e.render == "function";
}
async function Le(e, t) {
  if (((t = await t), t instanceof Jt)) e.write(t);
  else if (_a(t)) e.write(t);
  else if (Array.isArray(t)) {
    const r = t.map((n) => gn((s) => Le(s, n)));
    for (const n of r) n && (await n.renderToFinalDestination(e));
  } else if (typeof t == "function") await Le(e, t());
  else if (typeof t == "string") e.write(D(ot(t)));
  else if (!(!t && t !== 0))
    if (Fa(t)) await t.render(e);
    else if (Xa(t)) await t.render(e);
    else if (Ga(t)) await t.render(e);
    else if (ArrayBuffer.isView(t)) e.write(t);
    else if (typeof t == "object" && (Symbol.asyncIterator in t || Symbol.iterator in t)) for await (const r of t) await Le(e, r);
    else e.write(t);
}
const _n = Symbol.for("astro.componentInstance");
class Wa {
  [_n] = !0;
  result;
  props;
  slotValues;
  factory;
  returnValue;
  constructor(t, r, n, s) {
    (this.result = t), (this.props = r), (this.factory = s), (this.slotValues = {});
    for (const a in n) {
      let i = !1,
        o = n[a](t);
      this.slotValues[a] = () => (i ? n[a](t) : ((i = !0), o));
    }
  }
  async init(t) {
    return this.returnValue !== void 0 ? this.returnValue : ((this.returnValue = this.factory(t, this.props, this.slotValues)), this.returnValue);
  }
  async render(t) {
    this.returnValue === void 0 && (await this.init(this.result));
    let r = this.returnValue;
    Qt(r) && (r = await r), Aa(r) ? await r.content.render(t) : await Le(t, r);
  }
}
function qa(e, t) {
  if (e != null)
    for (const r of Object.keys(e))
      r.startsWith("client:") &&
        console.warn(
          `You are attempting to render <${t} ${r} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
}
function Ya(e, t, r, n, s = {}) {
  qa(n, t);
  const a = new Wa(e, n, s, r);
  return Sa(e, r) && e._metadata.propagators.add(a), a;
}
function Ga(e) {
  return typeof e == "object" && !!e[_n];
}
const bn = Symbol.for("astro.renderTemplateResult");
class Ja {
  [bn] = !0;
  htmlParts;
  expressions;
  error;
  constructor(t, r) {
    (this.htmlParts = t),
      (this.error = void 0),
      (this.expressions = r.map((n) =>
        Qt(n)
          ? Promise.resolve(n).catch((s) => {
              if (!this.error) throw ((this.error = s), s);
            })
          : n
      ));
  }
  async render(t) {
    const r = this.expressions.map((n) =>
      gn((s) => {
        if (n || n === 0) return Le(s, n);
      })
    );
    for (let n = 0; n < this.htmlParts.length; n++) {
      const s = this.htmlParts[n],
        a = r[n];
      t.write(D(s)), a && (await a.renderToFinalDestination(t));
    }
  }
}
function Xa(e) {
  return typeof e == "object" && !!e[bn];
}
function Z(e, ...t) {
  return new Ja(e, t);
}
function Qa(e) {
  return typeof HTMLElement < "u" && HTMLElement.isPrototypeOf(e);
}
async function Ka(e, t, r, n) {
  const s = ei(t);
  let a = "";
  for (const i in r) a += ` ${i}="${ke(await r[i])}"`;
  return D(`<${s}${a}>${await $t(e, n?.default)}</${s}>`);
}
function ei(e) {
  const t = customElements.getName(e);
  return (
    t ||
    e.name
      .replace(/^HTML|Element$/g, "")
      .replace(/[A-Z]/g, "-$&")
      .toLowerCase()
      .replace(/^-/, "html-")
  );
}
const Cr = new Map([["solid", "solid-js"]]);
function ti(e) {
  switch (e?.split(".").pop()) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue", "@astrojs/svelte", "@astrojs/lit"];
  }
}
function ri(e) {
  return e === Ua;
}
function ni(e) {
  return e && e["astro:html"] === !0;
}
const si = /<\/?astro-slot\b[^>]*>/g,
  ai = /<\/?astro-static-slot\b[^>]*>/g;
function ii(e, t = !0) {
  const r = t ? ai : si;
  return e.replace(r, "");
}
async function oi(e, t, r, n, s = {}) {
  if (!r && !n["client:only"])
    throw new Error(`Unable to render ${t} because it is ${r}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: a, clientDirectives: i } = e,
    o = { astroStaticSlot: !0, displayName: t },
    { hydration: c, isPage: l, props: d, propsWithoutTransitionAttributes: g } = wa(n, i);
  let E = "",
    p;
  c && ((o.hydrate = c.directive), (o.hydrateArgs = c.value), (o.componentExport = c.componentExport), (o.componentUrl = c.componentUrl));
  const k = ti(o.componentUrl),
    T = a.filter((w) => w.name !== "astro:jsx"),
    { children: m, slotInstructions: v } = await yn(e, s);
  let b;
  if (o.hydrate !== "only") {
    let w = !1;
    try {
      w = r && r[Ar];
    } catch {}
    if (w) {
      const S = r[Ar];
      b = a.find(({ name: R }) => R === S);
    }
    if (!b) {
      let S;
      for (const R of a)
        try {
          if (await R.ssr.check.call({ result: e }, r, d, m)) {
            b = R;
            break;
          }
        } catch (de) {
          S ??= de;
        }
      if (!b && S) throw S;
    }
    if (!b && typeof HTMLElement == "function" && Qa(r)) {
      const S = await Ka(e, r, n, s);
      return {
        render(R) {
          R.write(S);
        },
      };
    }
  } else {
    if (o.hydrateArgs) {
      const w = o.hydrateArgs,
        S = Cr.has(w) ? Cr.get(w) : w;
      b = a.find(({ name: R }) => R === `@astrojs/${S}` || R === S);
    }
    if ((!b && T.length === 1 && (b = T[0]), !b)) {
      const w = o.componentUrl?.split(".").pop();
      b = a.filter(({ name: S }) => S === `@astrojs/${w}` || S === w)[0];
    }
  }
  if (b)
    o.hydrate === "only"
      ? (E = await $t(e, s?.fallback))
      : (performance.now(), ({ html: E, attrs: p } = await b.ssr.renderToStaticMarkup.call({ result: e }, r, g, m, o)));
  else {
    if (o.hydrate === "only") throw new Y({ ...Ot, message: Ot.message(o.displayName), hint: Ot.hint(k.map((w) => w.replace("@astrojs/", "")).join("|")) });
    if (typeof r != "string") {
      const w = T.filter((R) => k.includes(R.name)),
        S = T.length > 1;
      if (w.length === 0)
        throw new Y({
          ...Nt,
          message: Nt.message(o.displayName, o?.componentUrl?.split(".").pop(), S, T.length),
          hint: Nt.hint(Sr(k.map((R) => "`" + R + "`"))),
        });
      if (w.length === 1) (b = w[0]), ({ html: E, attrs: p } = await b.ssr.renderToStaticMarkup.call({ result: e }, r, g, m, o));
      else
        throw new Error(`Unable to render ${o.displayName}!

This component likely uses ${Sr(k)},
but Astro encountered an error during server-side rendering.

Please ensure that ${o.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
    }
  }
  if (b && !b.clientEntrypoint && b.name !== "@astrojs/lit" && o.hydrate) throw new Y({ ...ar, message: ar.message(t, o.hydrate, b.name) });
  if (!E && typeof r == "string") {
    const w = ci(r),
      S = Object.values(m).join(""),
      R = Z`<${w}${Yt(d)}${D(S === "" && mn.test(w) ? "/>" : `>${S}</${w}>`)}`;
    E = "";
    const de = {
      write(ue) {
        ue instanceof Response || (E += er(e, ue));
      },
    };
    await R.render(de);
  }
  if (!c)
    return {
      render(w) {
        if (v) for (const S of v) w.write(S);
        l || b?.name === "astro:jsx" ? w.write(E) : E && E.length > 0 && w.write(D(ii(E, b?.ssr?.supportsAstroStaticSlot)));
      },
    };
  const V = Ea(`<!--${o.componentExport.value}:${o.componentUrl}-->
${E}
${hn(d, o)}`),
    $ = await xa({ renderer: b, result: e, astroId: V, props: d, attrs: p }, o);
  let j = [];
  if (E) {
    if (Object.keys(m).length > 0)
      for (const w of Object.keys(m)) {
        let S = b?.ssr?.supportsAstroStaticSlot ? (o.hydrate ? "astro-slot" : "astro-static-slot") : "astro-slot",
          R = w === "default" ? `<${S}>` : `<${S} name="${w}">`;
        E.includes(R) || j.push(w);
      }
  } else j = Object.keys(m);
  const le = j.length > 0 ? j.map((w) => `<template data-astro-template${w !== "default" ? `="${w}"` : ""}>${m[w]}</template>`).join("") : "";
  return (
    ($.children = `${E ?? ""}${le}`),
    $.children && (($.props["await-children"] = ""), ($.children += "<!--astro:end-->")),
    {
      render(w) {
        if (v) for (const R of v) w.write(R);
        w.write(Wt({ type: "directive", hydration: c })),
          c.directive !== "only" &&
            b?.ssr.renderHydrationScript &&
            w.write(Wt({ type: "renderer-hydration-script", rendererName: b.name, render: b.ssr.renderHydrationScript }));
        const S = Ve("astro-island", $, !1);
        w.write(D(S));
      },
    }
  );
}
function ci(e) {
  const t = /[&<>'"\s]+/;
  return t.test(e) ? e.trim().split(t)[0].trim() : e;
}
async function li(e, t = {}) {
  const r = await $t(e, t?.default);
  return {
    render(n) {
      r != null && n.write(r);
    },
  };
}
async function di(e, t, r, n = {}) {
  const { slotInstructions: s, children: a } = await yn(e, n),
    i = t({ slots: a }),
    o = s ? s.map((c) => er(e, c)).join("") : "";
  return {
    render(c) {
      c.write(D(o + i));
    },
  };
}
function ui(e, t, r, n, s = {}) {
  const a = Ya(e, t, r, n, s);
  return {
    async render(i) {
      await a.render(i);
    },
  };
}
async function B(e, t, r, n, s = {}) {
  return Qt(r) && (r = await r), ri(r) ? await li(e, s) : ((n = fi(n)), ni(r) ? await di(e, r, n, s) : ka(r) ? ui(e, t, r, n, s) : await oi(e, t, r, n, s));
}
function fi(e) {
  if (e["class:list"] !== void 0) {
    const t = e["class:list"];
    delete e["class:list"], (e.class = dn(e.class, t)), e.class === "" && delete e.class;
  }
  return e;
}
/*! https://mths.be/cssesc v3.0.0 by @mathias */ var hi = {},
  pi = hi.hasOwnProperty,
  mi = function (t, r) {
    if (!t) return r;
    var n = {};
    for (var s in r) n[s] = pi.call(t, s) ? t[s] : r[s];
    return n;
  },
  gi = /[ -,\.\/:-@\[-\^`\{-~]/,
  yi = /[ -,\.\/:-@\[\]\^`\{-~]/,
  vi = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
  wn = function e(t, r) {
    (r = mi(r, e.options)), r.quotes != "single" && r.quotes != "double" && (r.quotes = "single");
    for (var n = r.quotes == "double" ? '"' : "'", s = r.isIdentifier, a = t.charAt(0), i = "", o = 0, c = t.length; o < c; ) {
      var l = t.charAt(o++),
        d = l.charCodeAt(),
        g = void 0;
      if (d < 32 || d > 126) {
        if (d >= 55296 && d <= 56319 && o < c) {
          var E = t.charCodeAt(o++);
          (E & 64512) == 56320 ? (d = ((d & 1023) << 10) + (E & 1023) + 65536) : o--;
        }
        g = "\\" + d.toString(16).toUpperCase() + " ";
      } else
        r.escapeEverything
          ? gi.test(l)
            ? (g = "\\" + l)
            : (g = "\\" + d.toString(16).toUpperCase() + " ")
          : /[\t\n\f\r\x0B]/.test(l)
          ? (g = "\\" + d.toString(16).toUpperCase() + " ")
          : l == "\\" || (!s && ((l == '"' && n == l) || (l == "'" && n == l))) || (s && yi.test(l))
          ? (g = "\\" + l)
          : (g = l);
      i += g;
    }
    return (
      s && (/^-[-\d]/.test(i) ? (i = "\\-" + i.slice(1)) : /\d/.test(a) && (i = "\\3" + a + " " + i.slice(1))),
      (i = i.replace(vi, function (p, k, T) {
        return k && k.length % 2 ? p : (k || "") + T;
      })),
      !s && r.wrap ? n + i + n : i
    );
  };
wn.options = { escapeEverything: !1, isIdentifier: !1, quotes: "single", wrap: !1 };
wn.version = "3.0.0";
"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((e, t) => ((e[t.charCodeAt(0)] = t), e), []);
"-0123456789_".split("").reduce((e, t) => ((e[t.charCodeAt(0)] = t), e), []);
function Me(e = {}, t, { class: r } = {}) {
  let n = "";
  r && (typeof e.class < "u" ? (e.class += ` ${r}`) : typeof e["class:list"] < "u" ? (e["class:list"] = [e["class:list"], r]) : (e.class = r));
  for (const [s, a] of Object.entries(e)) n += F(a, s, !0);
  return D(n);
}
const _i = re(),
  bi = te(
    async (e, t, r) => {
      const n = e.createAstro(_i, t, r);
      n.self = bi;
      const { title: s, content: a, Icon: i } = n.props;
      return Z`${ne()}<div class="p-4 flex items-center justify-between bg-secondary text-white"> <div> <p class="uppercase text-xl font-semibold">Investimentos ativos</p> <span class="text-lg">R$ 1.100,00</span> </div> ${B(
        e,
        "Icon",
        i,
        { className: "text-5xl" }
      )} </div>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/InvestmentCard.astro",
    void 0
  ),
  wi = new TextDecoder(),
  M = (e, t = 0, r = e.length) => wi.decode(e.slice(t, r)),
  Ze = (e, t = 0, r = e.length) => e.slice(t, r).reduce((n, s) => n + ("0" + s.toString(16)).slice(-2), ""),
  $r = (e, t = 0) => {
    const r = e[t] + e[t + 1] * 256;
    return r | ((r & (2 ** 15)) * 131070);
  },
  xt = (e, t = 0) => e[t] * 2 ** 8 + e[t + 1],
  q = (e, t = 0) => e[t] + e[t + 1] * 2 ** 8,
  Or = (e, t = 0) => e[t] + e[t + 1] * 2 ** 8 + e[t + 2] * 2 ** 16,
  xi = (e, t = 0) => e[t] + e[t + 1] * 2 ** 8 + e[t + 2] * 2 ** 16 + (e[t + 3] << 24),
  z = (e, t = 0) => e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3],
  $e = (e, t = 0) => e[t] + e[t + 1] * 2 ** 8 + e[t + 2] * 2 ** 16 + e[t + 3] * 2 ** 24,
  Ti = { readUInt16BE: xt, readUInt16LE: q, readUInt32BE: z, readUInt32LE: $e };
function se(e, t, r, n) {
  r = r || 0;
  const s = n ? "BE" : "LE",
    a = "readUInt" + t + s;
  return Ti[a](e, r);
}
function Ei(e, t) {
  if (e.length - t < 4) return;
  const r = z(e, t);
  if (!(e.length - t < r)) return { name: M(e, 4 + t, 8 + t), offset: t, size: r };
}
function Ae(e, t, r) {
  for (; r < e.length; ) {
    const n = Ei(e, r);
    if (!n) break;
    if (n.name === t) return n;
    r += n.size;
  }
}
const ki = { validate: (e) => M(e, 0, 2) === "BM", calculate: (e) => ({ height: Math.abs(xi(e, 22)), width: $e(e, 18) }) },
  Si = 1,
  Ii = 6,
  Ai = 16;
function Nr(e, t) {
  const r = e[t];
  return r === 0 ? 256 : r;
}
function jr(e, t) {
  const r = Ii + t * Ai;
  return { height: Nr(e, r + 1), width: Nr(e, r) };
}
const xn = {
    validate(e) {
      const t = q(e, 0),
        r = q(e, 4);
      return t !== 0 || r === 0 ? !1 : q(e, 2) === Si;
    },
    calculate(e) {
      const t = q(e, 4),
        r = jr(e, 0);
      if (t === 1) return r;
      const n = [r];
      for (let s = 1; s < t; s += 1) n.push(jr(e, s));
      return { height: r.height, images: n, width: r.width };
    },
  },
  Ci = 2,
  $i = {
    validate(e) {
      const t = q(e, 0),
        r = q(e, 4);
      return t !== 0 || r === 0 ? !1 : q(e, 2) === Ci;
    },
    calculate: (e) => xn.calculate(e),
  },
  Oi = { validate: (e) => $e(e, 0) === 542327876, calculate: (e) => ({ height: $e(e, 12), width: $e(e, 16) }) },
  Ni = /^GIF8[79]a/,
  ji = { validate: (e) => Ni.test(M(e, 0, 6)), calculate: (e) => ({ height: q(e, 8), width: q(e, 6) }) },
  Tn = { avif: "avif", mif1: "heif", msf1: "heif", heic: "heic", heix: "heic", hevc: "heic", hevx: "heic" };
function Ri(e, t, r) {
  let n = {};
  for (let s = t; s <= r; s += 4) {
    const a = M(e, s, s + 4);
    a in Tn && (n[a] = 1);
  }
  if ("avif" in n) return "avif";
  if ("heic" in n || "heix" in n || "hevc" in n || "hevx" in n) return "heic";
  if ("mif1" in n || "msf1" in n) return "heif";
}
const Mi = {
    validate(e) {
      const t = M(e, 4, 8),
        r = M(e, 8, 12);
      return t === "ftyp" && r in Tn;
    },
    calculate(e) {
      const t = Ae(e, "meta", 0),
        r = t && Ae(e, "iprp", t.offset + 12),
        n = r && Ae(e, "ipco", r.offset + 8),
        s = n && Ae(e, "ispe", n.offset + 8);
      if (s) return { height: z(e, s.offset + 16), width: z(e, s.offset + 12), type: Ri(e, 8, t.offset) };
      throw new TypeError("Invalid HEIF, no size found");
    },
  },
  Pi = 8,
  Li = 4,
  Di = 4,
  zi = {
    ICON: 32,
    "ICN#": 32,
    "icm#": 16,
    icm4: 16,
    icm8: 16,
    "ics#": 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    icp6: 64,
    ic12: 32,
    it32: 128,
    t8mk: 128,
    ic07: 128,
    ic08: 256,
    ic13: 256,
    ic09: 512,
    ic14: 512,
    ic10: 1024,
  };
function Rr(e, t) {
  const r = t + Di;
  return [M(e, t, r), z(e, r)];
}
function Mr(e) {
  const t = zi[e];
  return { width: t, height: t, type: e };
}
const Zi = {
    validate: (e) => M(e, 0, 4) === "icns",
    calculate(e) {
      const t = e.length,
        r = z(e, Li);
      let n = Pi,
        s = Rr(e, n),
        a = Mr(s[0]);
      if (((n += s[1]), n === r)) return a;
      const i = { height: a.height, images: [a], width: a.width };
      for (; n < r && n < t; ) (s = Rr(e, n)), (a = Mr(s[0])), (n += s[1]), i.images.push(a);
      return i;
    },
  },
  Vi = { validate: (e) => Ze(e, 0, 4) === "ff4fff51", calculate: (e) => ({ height: z(e, 12), width: z(e, 8) }) },
  Bi = {
    validate(e) {
      if (z(e, 4) !== 1783636e3 || z(e, 0) < 1) return !1;
      const t = Ae(e, "ftyp", 0);
      return t ? z(e, t.offset + 4) === 1718909296 : !1;
    },
    calculate(e) {
      const t = Ae(e, "jp2h", 0),
        r = t && Ae(e, "ihdr", t.offset + 8);
      if (r) return { height: z(e, r.offset + 8), width: z(e, r.offset + 12) };
      throw new TypeError("Unsupported JPEG 2000 format");
    },
  },
  Ui = "45786966",
  Hi = 2,
  Xt = 6,
  Fi = 2,
  Wi = "4d4d",
  qi = "4949",
  Pr = 12,
  Yi = 2;
function Gi(e) {
  return Ze(e, 2, 6) === Ui;
}
function Ji(e, t) {
  return { height: xt(e, t), width: xt(e, t + 2) };
}
function Xi(e, t) {
  const n = Xt + 8,
    s = se(e, 16, n, t);
  for (let a = 0; a < s; a++) {
    const i = n + Yi + a * Pr,
      o = i + Pr;
    if (i > e.length) return;
    const c = e.slice(i, o);
    if (se(c, 16, 0, t) === 274) return se(c, 16, 2, t) !== 3 || se(c, 32, 4, t) !== 1 ? void 0 : se(c, 16, 8, t);
  }
}
function Qi(e, t) {
  const r = e.slice(Hi, t),
    n = Ze(r, Xt, Xt + Fi),
    s = n === Wi;
  if (s || n === qi) return Xi(r, s);
}
function Ki(e, t) {
  if (t > e.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
}
const eo = {
    validate: (e) => Ze(e, 0, 2) === "ffd8",
    calculate(e) {
      e = e.slice(4);
      let t, r;
      for (; e.length; ) {
        const n = xt(e, 0);
        if (e[n] !== 255) {
          e = e.slice(1);
          continue;
        }
        if ((Gi(e) && (t = Qi(e, n)), Ki(e, n), (r = e[n + 1]), r === 192 || r === 193 || r === 194)) {
          const s = Ji(e, n + 5);
          return t ? { height: s.height, orientation: t, width: s.width } : s;
        }
        e = e.slice(n + 2);
      }
      throw new TypeError("Invalid JPG, no size found");
    },
  },
  to = {
    validate: (e) => {
      const t = M(e, 1, 7);
      return ["KTX 11", "KTX 20"].includes(t);
    },
    calculate: (e) => {
      const t = e[5] === 49 ? "ktx" : "ktx2",
        r = t === "ktx" ? 36 : 20;
      return { height: $e(e, r + 4), width: $e(e, r), type: t };
    },
  },
  ro = `PNG\r

`,
  no = "IHDR",
  Lr = "CgBI",
  so = {
    validate(e) {
      if (ro === M(e, 1, 8)) {
        let t = M(e, 12, 16);
        if ((t === Lr && (t = M(e, 28, 32)), t !== no)) throw new TypeError("Invalid PNG");
        return !0;
      }
      return !1;
    },
    calculate(e) {
      return M(e, 12, 16) === Lr ? { height: z(e, 36), width: z(e, 32) } : { height: z(e, 20), width: z(e, 16) };
    },
  },
  Dr = { P1: "pbm/ascii", P2: "pgm/ascii", P3: "ppm/ascii", P4: "pbm", P5: "pgm", P6: "ppm", P7: "pam", PF: "pfm" },
  zr = {
    default: (e) => {
      let t = [];
      for (; e.length > 0; ) {
        const r = e.shift();
        if (r[0] !== "#") {
          t = r.split(" ");
          break;
        }
      }
      if (t.length === 2) return { height: parseInt(t[1], 10), width: parseInt(t[0], 10) };
      throw new TypeError("Invalid PNM");
    },
    pam: (e) => {
      const t = {};
      for (; e.length > 0; ) {
        const r = e.shift();
        if (r.length > 16 || r.charCodeAt(0) > 128) continue;
        const [n, s] = r.split(" ");
        if ((n && s && (t[n.toLowerCase()] = parseInt(s, 10)), t.height && t.width)) break;
      }
      if (t.height && t.width) return { height: t.height, width: t.width };
      throw new TypeError("Invalid PAM");
    },
  },
  ao = {
    validate: (e) => M(e, 0, 2) in Dr,
    calculate(e) {
      const t = M(e, 0, 2),
        r = Dr[t],
        n = M(e, 3).split(/[\r\n]+/);
      return (zr[r] || zr.default)(n);
    },
  },
  io = { validate: (e) => M(e, 0, 4) === "8BPS", calculate: (e) => ({ height: z(e, 14), width: z(e, 18) }) },
  En = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/,
  ct = { height: /\sheight=(['"])([^%]+?)\1/, root: En, viewbox: /\sviewBox=(['"])(.+?)\1/i, width: /\swidth=(['"])([^%]+?)\1/ },
  Zt = 2.54,
  kn = { in: 96, cm: 96 / Zt, em: 16, ex: 8, m: (96 / Zt) * 100, mm: 96 / Zt / 10, pc: 96 / 72 / 12, pt: 96 / 72, px: 1 },
  oo = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(kn).join("|")})?$`);
function Tt(e) {
  const t = oo.exec(e);
  if (t) return Math.round(Number(t[1]) * (kn[t[2]] || 1));
}
function co(e) {
  const t = e.split(" ");
  return { height: Tt(t[3]), width: Tt(t[2]) };
}
function lo(e) {
  const t = e.match(ct.width),
    r = e.match(ct.height),
    n = e.match(ct.viewbox);
  return { height: r && Tt(r[2]), viewbox: n && co(n[2]), width: t && Tt(t[2]) };
}
function uo(e) {
  return { height: e.height, width: e.width };
}
function fo(e, t) {
  const r = t.width / t.height;
  return e.width
    ? { height: Math.floor(e.width / r), width: e.width }
    : e.height
    ? { height: e.height, width: Math.floor(e.height * r) }
    : { height: t.height, width: t.width };
}
const ho = {
    validate: (e) => En.test(M(e, 0, 1e3)),
    calculate(e) {
      const t = M(e).match(ct.root);
      if (t) {
        const r = lo(t[0]);
        if (r.width && r.height) return uo(r);
        if (r.viewbox) return fo(r, r.viewbox);
      }
      throw new TypeError("Invalid SVG");
    },
  },
  po = {
    validate(e) {
      return q(e, 0) === 0 && q(e, 4) === 0;
    },
    calculate(e) {
      return { height: q(e, 14), width: q(e, 12) };
    },
  };
function mo(e, t) {
  const r = se(e, 32, 4, t);
  return e.slice(r + 2);
}
function go(e, t) {
  const r = se(e, 16, 8, t);
  return (se(e, 16, 10, t) << 16) + r;
}
function yo(e) {
  if (e.length > 24) return e.slice(12);
}
function vo(e, t) {
  const r = {};
  let n = e;
  for (; n && n.length; ) {
    const s = se(n, 16, 0, t),
      a = se(n, 16, 2, t),
      i = se(n, 32, 4, t);
    if (s === 0) break;
    i === 1 && (a === 3 || a === 4) && (r[s] = go(n, t)), (n = yo(n));
  }
  return r;
}
function _o(e) {
  const t = M(e, 0, 2);
  if (t === "II") return "LE";
  if (t === "MM") return "BE";
}
const bo = ["49492a00", "4d4d002a"],
  wo = {
    validate: (e) => bo.includes(Ze(e, 0, 4)),
    calculate(e) {
      const t = _o(e) === "BE",
        r = mo(e, t),
        n = vo(r, t),
        s = n[256],
        a = n[257];
      if (!s || !a) throw new TypeError("Invalid Tiff. Missing tags");
      return { height: a, width: s };
    },
  };
function xo(e) {
  return { height: 1 + Or(e, 7), width: 1 + Or(e, 4) };
}
function To(e) {
  return { height: 1 + (((e[4] & 15) << 10) | (e[3] << 2) | ((e[2] & 192) >> 6)), width: 1 + (((e[2] & 63) << 8) | e[1]) };
}
function Eo(e) {
  return { height: $r(e, 8) & 16383, width: $r(e, 6) & 16383 };
}
const ko = {
    validate(e) {
      const t = M(e, 0, 4) === "RIFF",
        r = M(e, 8, 12) === "WEBP",
        n = M(e, 12, 15) === "VP8";
      return t && r && n;
    },
    calculate(e) {
      const t = M(e, 12, 16);
      if (((e = e.slice(20, 30)), t === "VP8X")) {
        const n = e[0],
          s = (n & 192) === 0,
          a = (n & 1) === 0;
        if (s && a) return xo(e);
        throw new TypeError("Invalid WebP");
      }
      if (t === "VP8 " && e[0] !== 47) return Eo(e);
      const r = Ze(e, 3, 6);
      if (t === "VP8L" && r !== "9d012a") return To(e);
      throw new TypeError("Invalid WebP");
    },
  },
  Et = new Map([
    ["bmp", ki],
    ["cur", $i],
    ["dds", Oi],
    ["gif", ji],
    ["heif", Mi],
    ["icns", Zi],
    ["ico", xn],
    ["j2c", Vi],
    ["jp2", Bi],
    ["jpg", eo],
    ["ktx", to],
    ["png", so],
    ["pnm", ao],
    ["psd", io],
    ["svg", ho],
    ["tga", po],
    ["tiff", wo],
    ["webp", ko],
  ]),
  So = Array.from(Et.keys()),
  Io = new Map([
    [56, "psd"],
    [66, "bmp"],
    [68, "dds"],
    [71, "gif"],
    [73, "tiff"],
    [77, "tiff"],
    [82, "webp"],
    [105, "icns"],
    [137, "png"],
    [255, "jpg"],
  ]);
function Ao(e) {
  const t = e[0],
    r = Io.get(t);
  return r && Et.get(r).validate(e) ? r : So.find((n) => Et.get(n).validate(e));
}
const Co = { disabledTypes: [] };
function $o(e) {
  const t = Ao(e);
  if (typeof t < "u") {
    if (Co.disabledTypes.indexOf(t) > -1) throw new TypeError("disabled file type: " + t);
    const r = Et.get(t).calculate(e);
    if (r !== void 0) return (r.type = r.type ?? t), r;
  }
  throw new TypeError("unsupported file type: " + t);
}
async function Oo(e) {
  const t = await fetch(e);
  if (!t.body || !t.ok) throw new Error("Failed to fetch image");
  const r = t.body.getReader();
  let n,
    s,
    a = new Uint8Array();
  for (; !n; ) {
    const i = await r.read();
    if (((n = i.done), n)) break;
    if (i.value) {
      s = i.value;
      let o = new Uint8Array(a.length + s.length);
      o.set(a, 0), o.set(s, a.length), (a = o);
      try {
        const c = $o(a);
        if (c) return await r.cancel(), c;
      } catch {}
    }
  }
  throw new Error("Failed to parse the size");
}
async function No() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: e } = await On(() => import("./astro/assets-service.zraceSPK.js").then((t) => t.s), __vite__mapDeps([])).catch((t) => {
      const r = new Y(Nn);
      throw ((r.cause = t), r);
    });
    return globalThis.astroAsset || (globalThis.astroAsset = {}), (globalThis.astroAsset.imageService = e), e;
  }
  return globalThis.astroAsset.imageService;
}
async function jo(e, t) {
  if (!e || typeof e != "object") throw new Y({ ...ir, message: ir.message(JSON.stringify(e)) });
  if (typeof e.src > "u") throw new Y({ ...or, message: or.message(e.src, "undefined", JSON.stringify(e)) });
  const r = await No(),
    n = { ...e, src: typeof e.src == "object" && "then" in e.src ? (await e.src).default ?? (await e.src) : e.src };
  if (e.inferSize && cr(n.src))
    try {
      const d = await Oo(n.src);
      (n.width ??= d.width), (n.height ??= d.height), delete n.inferSize;
    } catch {
      throw new Y({ ...lr, message: lr.message(n.src) });
    }
  const s = Vt(n.src) ? n.src.fsPath : n.src,
    a = Vt(n.src) ? n.src.clone ?? n.src : n.src;
  n.src = a;
  const i = r.validateOptions ? await r.validateOptions(n, t) : n,
    o = r.getSrcSet ? await r.getSrcSet(i, t) : [];
  let c = await r.getURL(i, t),
    l = await Promise.all(
      o.map(async (d) => ({ transform: d.transform, url: await r.getURL(d.transform, t), descriptor: d.descriptor, attributes: d.attributes }))
    );
  if (Cn(r) && globalThis.astroAsset.addStaticImage && !(cr(i.src) && c === i.src)) {
    const d = r.propertiesToHash ?? $n;
    (c = globalThis.astroAsset.addStaticImage(i, d, s)),
      (l = o.map((g) => ({
        transform: g.transform,
        url: globalThis.astroAsset.addStaticImage(g.transform, d, s),
        descriptor: g.descriptor,
        attributes: g.attributes,
      })));
  }
  return {
    rawOptions: n,
    options: i,
    src: c,
    srcSet: { values: l, attribute: l.map((d) => `${d.url} ${d.descriptor}`).join(", ") },
    attributes: r.getHTMLAttributes !== void 0 ? await r.getHTMLAttributes(i, t) : {},
  };
}
const Ro = re(),
  kt = te(
    async (e, t, r) => {
      const n = e.createAstro(Ro, t, r);
      n.self = kt;
      const s = n.props;
      if (s.alt === void 0 || s.alt === null) throw new Y(Zr);
      typeof s.width == "string" && (s.width = parseInt(s.width)), typeof s.height == "string" && (s.height = parseInt(s.height));
      const a = await et(s),
        i = {};
      return a.srcSet.values.length > 0 && (i.srcset = a.srcSet.attribute), Z`${ne()}<img${F(a.src, "src")}${Me(i)}${Me(a.attributes)}>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/node_modules/astro/components/Image.astro",
    void 0
  ),
  Mo = re(),
  Po = te(
    async (e, t, r) => {
      const n = e.createAstro(Mo, t, r);
      n.self = Po;
      const s = ["webp"],
        a = "png",
        i = ["gif", "svg", "jpg", "jpeg"],
        { formats: o = s, pictureAttributes: c = {}, fallbackFormat: l, ...d } = n.props;
      if (d.alt === void 0 || d.alt === null) throw new Y(Zr);
      const g = await Promise.all(o.map(async (m) => await et({ ...d, format: m, widths: d.widths, densities: d.densities })));
      let E = l ?? a;
      !l && Vt(d.src) && i.includes(d.src.format) && (E = d.src.format);
      const p = await et({ ...d, format: E, widths: d.widths, densities: d.densities }),
        k = {},
        T = {};
      return (
        d.sizes && (T.sizes = d.sizes),
        p.srcSet.values.length > 0 && (k.srcset = p.srcSet.attribute),
        Z`${ne()}<picture${Me(c)}> ${Object.entries(g).map(([m, v]) => {
          const b = d.densities || (!d.densities && !d.widths) ? `${v.src}${v.srcSet.values.length > 0 ? ", " + v.srcSet.attribute : ""}` : v.srcSet.attribute;
          return Z`<source${F(b, "srcset")}${F("image/" + v.options.format, "type")}${Me(T)}>`;
        })} <img${F(p.src, "src")}${Me(k)}${Me(p.attributes)}> </picture>`
      );
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/node_modules/astro/components/Picture.astro",
    void 0
  ),
  Lo = { service: { entrypoint: "astro/assets/services/sharp", config: {} }, domains: [], remotePatterns: [] },
  Do = new URL("file:///Users/sather/Documents/XTHub/Rofars/Site/rofars-client/dist/");
new URL("_astro", Do);
const et = async (e) => await jo(e, Lo);
function zo(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z",
        },
        child: [],
      },
    ],
  })(e);
}
function Zo(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",
        },
        child: [],
      },
    ],
  })(e);
}
function Vo(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19z",
        },
        child: [],
      },
    ],
  })(e);
}
function Bo(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      { tag: "path", attr: { d: "M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" }, child: [] },
    ],
  })(e);
}
const Uo = re(),
  Ho = te(
    async (e, t, r) => {
      const n = e.createAstro(Uo, t, r);
      n.self = Ho;
      const { data: s } = n.props;
      return Z`${ne()}<div class="grid md:grid-cols-2 gap-6"> <div class="w-full h-96 overflow-hidden flex justify-center"> ${B(e, "Image", kt, {
        src: s.image,
        alt: s.title,
        width: 500,
        height: 500,
        class: "object-cover",
      })} </div> <div class="flex flex-col justify-between"> <div class="space-y-4"> <h2 class="font-bold text-5xl text-dark">${s.title}</h2> <p> ${
        s.description
      } </p> <div class="grid xs:grid-cols-2 gap-4"> ${B(e, "Comp.InfoBoxWithIcon", Se, {
        title: "Rentabilidade Alvo (TIR)",
        content: s.category,
        Icon: Bo,
      })} ${B(e, "Comp.InfoBoxWithIcon", Se, { title: "Valor da cota", content: String(s.price), Icon: sa })} ${B(e, "Comp.InfoBoxWithIcon", Se, {
        title: "Valor Captado",
        content: String(s.price),
        Icon: xr,
      })} ${B(e, "Comp.InfoBoxWithIcon", Se, { title: "Prazo", content: String(s.id), Icon: xr })} ${B(e, "Comp.InfoBoxWithIcon", Se, {
        title: "Pagamento",
        content: String(s.price),
        Icon: Vo,
      })} ${B(e, "Comp.InfoBoxWithIcon", Se, {
        title: "Investidores",
        content: s.category,
        Icon: zo,
      })} </div> </div> <div class="grid md:grid-cols-2 items-center gap-8 mt-4"> ${B(
        e,
        "Comp.Button",
        an,
        { variant: "green" },
        { default: (a) => Z`Faça sua reserva` }
      )} <a href="" class="uppercase underline text-dark font-medium text-center">
Falar com especialista
</a> </div> </div> </div>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/ProductDetails.astro",
    void 0
  ),
  Fo = re(),
  Se = te(
    async (e, t, r) => {
      const n = e.createAstro(Fo, t, r);
      n.self = Se;
      const { Icon: s, title: a, content: i } = n.props;
      return Z`${ne()}<div class="flex items-center gap-3 text-neutral-500"> ${B(
        e,
        "Icon",
        s,
        {}
      )} <div> <h3 class="text-sm capitalize">${a}</h3> <span class="text-dark font-bold"> ${i} </span> </div> </div>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/InfoBoxWithIcon.astro",
    void 0
  ),
  Wo = re(),
  qo = te(
    async (e, t, r) => {
      const n = e.createAstro(Wo, t, r);
      n.self = qo;
      const { title: s, content: a } = n.props;
      return Z`${ne()}<details class="bg-white rounded-2xl"> <summary class="p-3 flex items-center justify-between rounded-xl cursor-pointer text-white bg-secondary" onclick="toggleAccordion()"> <h3 class="font-medium capitalize">${s}</h3> ${B(
        e,
        "FaPlus",
        Zo,
        {}
      )} </summary> <p class="p-3 text-neutral-900"> ${a} </p> </details>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/Accordion.astro",
    void 0
  ),
  Yo = re(),
  Sn = te(
    async (e, t, r) => {
      const n = e.createAstro(Yo, t, r);
      n.self = Sn;
      const { title: s, href: a, target: i } = n.props;
      return Z`${ne()}<a${F("text-inherit font-medium cursor-pointer transition-all duration-100 hover:text-primary", "class")}${F(a, "href")}${F(
        i,
        "target"
      )}> ${s} </a>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/Link.astro",
    void 0
  ),
  Go = re(),
  Jo = te(
    async (e, t, r) => {
      const n = e.createAstro(Go, t, r);
      return (n.self = Jo), Z`${ne()}<div class="px-4 py-14 h-full w-full max-w-6xl mx-auto"> ${Kt(e, r.default)} </div>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/Container.astro",
    void 0
  ),
  Xo = re(),
  Qo = te(
    async (e, t, r) => {
      const n = e.createAstro(Xo, t, r);
      n.self = Qo;
      const s = { start: "text-center md:text-start", center: "text-center", end: "text-end" },
        a = { "text-primary": "text-primary", "text-dark": "text-dark", "text-light": "text-white", "text-secondary": "text-secondary" },
        { title: i, variant: o = "text-dark", align: c = "start" } = n.props;
      return Z`${ne()}<h2${F(`${a[o]} ${s[c]} font-bold text-3xl md:text-4xl mb-10`, "class")}> ${i} </h2>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/Title.astro",
    void 0
  ),
  Ko = re(),
  ec = te(
    async (e, t, r) => {
      const n = e.createAstro(Ko, t, r);
      n.self = ec;
      const { href: s, product: a, minInvestment: i, quotaValue: o, participation: c, payment: l, imageUrl: d } = n.props;
      return Z`${ne()}<article class="relative w-80 h-80 overflow-hidden group after:absolute after:w-full after:top-0 after:left-0 after:bottom-0 after:bg-black/20"> <a${F(
        s,
        "href"
      )}> <div class="w-full h-full opacity-0 absolute top-full left-0 bg-black/70 text-white duration-300 ease-in-out
      group-hover:top-0 group-hover:opacity-100 z-10"> <div class="p-4 w-full absolute bottom-0"> <h3 class="text-4xl font-semibold">${a}</h3> <ul class="space-y-2 text-sm"> <li class="pb-1 flex justify-between items-center flex-wrap border-b border-white"> <span>Valor da cota</span> <span>${o}</span> </li> <li class="pb-1 flex justify-between items-center flex-wrap border-b border-white"> <span>Participação</span> <span>${c}</span> </li> <li class="pb-1 flex justify-between items-center flex-wrap"> <span>Pagamento</span> <span>${l}</span> </li> </ul> </div> </div> <div class="p-4 absolute bottom-0 z-10 text-white duration-300 ease-in-out group-hover:bottom-full group-hover:opacity-0"> <h3 class="text-2xl font-semibold leading-6">${a}</h3> <p class="text-sm">Investimento mínimo - ${i}</p> </div> <img${F(
        d,
        "src"
      )}${F(a, "alt")}${F(1e3, "width")}${F(1e3, "height")} class="w-full h-full object-cover object-center"> </a> </article>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/Card.astro",
    void 0
  ),
  tc = [
    { link: "", icon: ta },
    { link: "", icon: na },
    { link: "", icon: ea },
    { link: "", icon: Ks },
    { link: "", icon: ra },
  ],
  rc = { src: "/astro/logo-red.DGygk-Ze.webp", width: 362, height: 126, format: "webp" },
  nc = re(),
  sc = te(
    async (e, t, r) => {
      const n = e.createAstro(nc, t, r);
      n.self = sc;
      const s = await et({ src: rc, format: "webp" }),
        a = await et({ src: sn, format: "webp" }),
        i = [
          { link: "", title: "Quem Somos" },
          { link: "", title: "Trabalhe conosco" },
          { link: "", title: "Termos de Uso" },
          { link: "", title: "Política de Privacidade" },
        ];
      return Z`${ne()}<footer class="bg-white px-4 h-full w-full max-w-6xl mx-auto"> <div class="py-8 grid grid-cols-1 md:grid-cols-3 md:place-items-center gap-8 border-b border-neutral-400"> <div class="space-y-4 self-start"> ${B(
        e,
        "Image",
        kt,
        { src: s.src, alt: "Logo", width: 100, height: 30 }
      )} <p class="text-neutral-500 text-sm">
Somos a plataforma que revoluciona o investimento em exportações. Unimos
        tecnologia e conformidade regulatória para proporcionar aos investidores
        uma experiência ágil, eficiente e digital.
</p> </div> <div class="space-y-4 self-start"> <h3 class="text-xl text-neutral-900 font-bold">Institucional</h3> <ul class="space-y-2"> ${i.map(
        (o) => Z`<li class="font-medium text-neutral-500 text-sm"> ${B(e, "Comp.Link", Sn, { href: o.link, title: o.title })} </li>`
      )} </ul> </div> <div class="space-y-4 self-start"> <h3 class="text-xl text-neutral-900 font-bold">Contato</h3> <p class="text-neutral-500 text-sm">
Atendimento ao Investidor Acesse o WhatsApp aqui Das 9h às 18h (dias
        úteis) Parceria de Conteúdo/Imprensa parcerias@rofars.com.br Onde
        Estamos São Paulo/SP, Avenida Paulista, 1000, conj 00, Pinheiros, CEP
        00000-000
</p> </div> </div> <div class="py-8 flex items-center justify-center md:justify-between flex-wrap gap-4 border-b border-neutral-400"> ${B(e, "Image", kt, {
        src: a.src,
        alt: "Logo",
        width: 140,
        height: 140,
      })} <div class="flex items-center justify-center flex-wrap gap-3"> <h3 class="text-neutral-600 font-bold">Siga nas redes sociais</h3> <div class="flex items-center justify-center gap-3"> ${tc.map(
        (o) => Z`${B(e, "Comp.IconBox", In, { Icon: o.icon })}`
      )} </div> </div> </div> <div class="py-8 flex flex-col justify-center items-center gap-4 text-center"> <p class="text-xs leading-6 text-neutral-600">
https://rofars.com.br, é gerido e operado pela Rofars Tech Desenvolvedora
      de Programas LTDA ("Rofars"), CNPJ 00.000.000/0001-00, NÃO é uma
      instituição financeira e NÃO realiza empréstimos empresariais. NÃO atua
      como empresa de investimentos e NÃO realiza nenhuma espécie de oferta ou
      recomendação de Títulos e Valores Mobiliários. NÃO está autorizada e NÃO
      atua na administração e gestão de recursos de terceiros.
</p> <p class="text-xs leading-6 text-neutral-600">
Rofars LTDA | CNPJ: 00.000.000/0001-00 Copyright © 2024 - Todos os
      direitos reservados
</p> </div> </footer>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/Footer.astro",
    void 0
  ),
  ac = re(),
  In = te(
    async (e, t, r) => {
      const n = e.createAstro(ac, t, r);
      n.self = In;
      const { Icon: s } = n.props;
      return Z`${ne()}<a class="flex items-center justify-center p-2 bg-tertiary rounded-full text-white cursor-pointer ease-in-out duration-150 hover:opacity-70"> ${B(
        e,
        "Icon",
        s,
        {}
      )} </a>`;
    },
    "/Users/sather/Documents/XTHub/Rofars/Site/rofars-client/src/ui/components/astro_components/IconBox.astro",
    void 0
  );
export { an as B, lc as F, fc as H, dc as I, uc as a, Q as j, cc as u };
