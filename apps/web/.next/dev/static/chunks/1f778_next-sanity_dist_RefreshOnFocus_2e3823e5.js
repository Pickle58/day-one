(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/node_modules/.pnpm/next-sanity@12.1.0_94e6cbc7030d226050a9f2acad345bbf/node_modules/next-sanity/dist/RefreshOnFocus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefreshOnFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_64d5eeabc3e5d7da937e2327328eb8d4/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_64d5eeabc3e5d7da937e2327328eb8d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const focusThrottleInterval = 5e3;
function RefreshOnFocus() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_64d5eeabc3e5d7da937e2327328eb8d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RefreshOnFocus.useEffect": ()=>{
            const controller = new AbortController();
            let nextFocusRevalidatedAt = 0;
            const callback = {
                "RefreshOnFocus.useEffect.callback": ()=>{
                    const now = Date.now();
                    if (now > nextFocusRevalidatedAt && document.visibilityState !== "hidden") {
                        router.refresh();
                        nextFocusRevalidatedAt = now + focusThrottleInterval;
                    }
                }
            }["RefreshOnFocus.useEffect.callback"];
            const { signal } = controller;
            document.addEventListener("visibilitychange", callback, {
                passive: true,
                signal
            });
            window.addEventListener("focus", callback, {
                passive: true,
                signal
            });
            return ({
                "RefreshOnFocus.useEffect": ()=>controller.abort()
            })["RefreshOnFocus.useEffect"];
        }
    }["RefreshOnFocus.useEffect"], [
        router
    ]);
    return null;
}
RefreshOnFocus.displayName = "RefreshOnFocus";
;
 //# sourceMappingURL=RefreshOnFocus.js.map
}),
]);

//# sourceMappingURL=1f778_next-sanity_dist_RefreshOnFocus_2e3823e5.js.map