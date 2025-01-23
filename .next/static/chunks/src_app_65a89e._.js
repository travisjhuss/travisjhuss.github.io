(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_65a89e._.js", {

"[project]/src/app/theme.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blue$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/colors/blue.js [app-client] (ecmascript) <export default as blue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$colors$2f$yellow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__yellow$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/colors/yellow.js [app-client] (ecmascript) <export default as yellow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__red$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/colors/red.js [app-client] (ecmascript) <export default as red>");
'use client';
;
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        primary: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blue$3e$__["blue"]['A700']
        },
        secondary: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$colors$2f$yellow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__yellow$3e$__["yellow"][700]
        },
        success: {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__red$3e$__["red"]['A700']
        }
    },
    typography: {
        fontFamily: 'Raleway, Arial'
    }
});
const __TURBOPACK__default__export__ = theme;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/LazyLoaders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Contact": (()=>Contact),
    "Homepage": (()=>Homepage),
    "NavBar": (()=>NavBar),
    "Projects": (()=>Projects),
    "Resume": (()=>Resume)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
'use client';
;
const Homepage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_require__("[project]/src/app/components/Homepage.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/app/components/LazyLoaders.tsx -> " + "./Homepage"
        ]
    },
    ssr: false
});
_c1 = Homepage;
const NavBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>__turbopack_require__("[project]/src/app/components/NavBar.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/app/components/LazyLoaders.tsx -> " + "./NavBar"
        ]
    },
    ssr: false
});
_c3 = NavBar;
const Contact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c4 = ()=>__turbopack_require__("[project]/src/app/components/Contact.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/app/components/LazyLoaders.tsx -> " + "./Contact"
        ]
    },
    ssr: false
});
_c5 = Contact;
const Resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c6 = ()=>__turbopack_require__("[project]/src/app/components/Resume.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/app/components/LazyLoaders.tsx -> " + "./Resume"
        ]
    },
    ssr: false
});
_c7 = Resume;
const Projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c8 = ()=>__turbopack_require__("[project]/src/app/components/Projects.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/app/components/LazyLoaders.tsx -> " + "./Projects"
        ]
    },
    ssr: false
});
_c9 = Projects;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_refresh__.register(_c, "Homepage$dynamic");
__turbopack_refresh__.register(_c1, "Homepage");
__turbopack_refresh__.register(_c2, "NavBar$dynamic");
__turbopack_refresh__.register(_c3, "NavBar");
__turbopack_refresh__.register(_c4, "Contact$dynamic");
__turbopack_refresh__.register(_c5, "Contact");
__turbopack_refresh__.register(_c6, "Resume$dynamic");
__turbopack_refresh__.register(_c7, "Resume");
__turbopack_refresh__.register(_c8, "Projects$dynamic");
__turbopack_refresh__.register(_c9, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_65a89e._.js.map