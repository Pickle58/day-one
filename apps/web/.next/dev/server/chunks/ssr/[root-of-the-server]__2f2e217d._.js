module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/apps/web/src/sanity/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$14$2e$1_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/node_modules/.pnpm/@sanity+client@7.14.1_debug@4.4.3/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$14$2e$1_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: "fnp4jm0i",
    dataset: "production",
    apiVersion: "2025-07-09",
    useCdn: false
});
}),
"[project]/apps/web/src/sanity/live.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SanityLive",
    ()=>SanityLive,
    "sanityFetch",
    ()=>sanityFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$12$2e$1$2e$0_94e6cbc7030d226050a9f2acad345bbf$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$live$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/node_modules/.pnpm/next-sanity@12.1.0_94e6cbc7030d226050a9f2acad345bbf/node_modules/next-sanity/dist/live.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/sanity/client.ts [app-rsc] (ecmascript)");
;
;
const { sanityFetch, SanityLive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$12$2e$1$2e$0_94e6cbc7030d226050a9f2acad345bbf$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$live$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineLive"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"]
});
}),
"[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_64d5eeabc3e5d7da937e2327328eb8d4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$sanity$2f$live$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/sanity/live.ts [app-rsc] (ecmascript)");
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "bg-gray-100 dark:bg-gray-900 min-h-screen",
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$sanity$2f$live$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SanityLive"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/layout.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/layout.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/layout.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f2e217d._.js.map