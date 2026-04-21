module.exports = [
"[project]/packages/ui/src/components/SchoolSideNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchoolSideNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
;
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.08
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        x: 20
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25
        }
    }
};
function SchoolSideNav({ open, onClose, navItems, quickLinks, enquireHref, applyHref, sideImage, sideImageAlt }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sf, setSf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIdx, setSelectedIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const col2TimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoveredIdx, setHoveredIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mobileView, setMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('col1');
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return ()=>window.removeEventListener('resize', check);
    }, []);
    const activeIdx = selectedIdx;
    const hoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleNavClick = (idx)=>{
        if (selectedIdx === idx) {
            setSelectedIdx(null);
            setMobileView('col1');
            return;
        }
        if (selectedIdx !== null) {
            setDirection(idx > selectedIdx ? 1 : -1);
        }
        setSelectedIdx(idx);
        if (isMobile) {
            setMobileView('col2');
        }
    };
    const handleMouseEnter = (idx)=>{
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(()=>setHoveredIdx(idx), 80);
    };
    const handleMouseLeave = ()=>{
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setHoveredIdx(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = open ? 'hidden' : '';
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) setActive(0);
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (col2TimerRef.current) clearTimeout(col2TimerRef.current);
        };
    }, []);
    const cur = navItems[active];
    const sr = search.trim() ? navItems.flatMap((n)=>[
            {
                label: n.label,
                href: n.href
            },
            ...n.children || []
        ].filter((c)=>c.label.toLowerCase().includes(search.toLowerCase()))) : [];
    const P = '#213558';
    const S = '#e2c215';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            flexDirection: 'row',
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.5s cubic-bezier(0.77,0,0.175,1)',
            boxShadow: '-8px 0 60px rgba(0,0,0,0.3)',
            fontSize: 'clamp(0.7rem,1.5vw,1rem)',
            pointerEvents: open ? 'auto' : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#213558',
                    minWidth: 0,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 'clamp(0.8rem,2vw,1.1rem) clamp(1.5rem,3vw,2.5rem)',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            flexShrink: 0,
                            gap: 'clamp(0.8rem,2vw,1.5rem)',
                            background: 'rgba(0,0,0,0.2)',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 'clamp(0.5rem,1.5vw,1.5rem)',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    flex: 1,
                                    minWidth: 0
                                },
                                children: quickLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: l.href,
                                        onClick: onClose,
                                        style: {
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontSize: 'clamp(0.6rem,1.2vw,0.7rem)',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                            transition: 'color 0.2s',
                                            whiteSpace: 'nowrap'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = S,
                                        onMouseLeave: (e)=>e.currentTarget.style.color = '#fff',
                                        children: l.label
                                    }, l.label, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    maxWidth: 280,
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search…",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        onFocus: ()=>setSf(true),
                                        onBlur: ()=>setTimeout(()=>setSf(false), 150),
                                        style: {
                                            width: '100%',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: `1px solid ${sf ? '#fff' : 'rgba(255,255,255,0.3)'}`,
                                            color: '#fff',
                                            padding: '0.45rem 2rem 0.45rem 0.8rem',
                                            fontSize: 'clamp(0.72rem,1vw,0.8rem)',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                            fontFamily: 'inherit'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: 'absolute',
                                            right: '0.7rem',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: 'rgba(255,255,255,0.6)',
                                            fontSize: 'clamp(0.78rem,1.1vw,0.88rem)',
                                            pointerEvents: 'none'
                                        },
                                        children: "⌕"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    search.trim() && sr.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 'calc(100% + 4px)',
                                            left: 0,
                                            right: 0,
                                            background: '#fff',
                                            border: `1px solid ${P}30`,
                                            zIndex: 10,
                                            maxHeight: 240,
                                            overflowY: 'auto',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                        },
                                        children: sr.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: r.href,
                                                onClick: ()=>{
                                                    setSearch('');
                                                    onClose();
                                                },
                                                style: {
                                                    display: 'block',
                                                    padding: '0.6rem 1rem',
                                                    color: '#1c1b1c',
                                                    textDecoration: 'none',
                                                    fontSize: 'clamp(0.75rem,1.02vw,0.82rem)',
                                                    borderBottom: '1px solid #f0eee9',
                                                    transition: 'background 0.15s'
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.background = `${P}10`,
                                                onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                                                children: r.label
                                            }, i, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: 'none',
                                    border: `1px solid rgba(255,255,255,0.4)`,
                                    color: '#fff',
                                    width: 'clamp(32px,6vw,36px)',
                                    height: 'clamp(32px,6vw,36px)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = S;
                                    e.currentTarget.style.color = P;
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'none';
                                    e.currentTarget.style.color = '#fff';
                                },
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flex: 1,
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "nav-col-scroll",
                                animate: {
                                    x: isMobile ? mobileView === 'col2' ? '-100%' : '0%' : 0
                                },
                                transition: {
                                    duration: 0.35
                                },
                                style: {
                                    width: isMobile ? '100%' : 'clamp(400px,55vw,550px)',
                                    height: '100%',
                                    overflowY: 'auto',
                                    flexShrink: 0,
                                    position: isMobile ? 'absolute' : 'relative',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    background: 'rgba(0,0,0,0.2)'
                                },
                                children: navItems.map((item, idx)=>{
                                    const isActive = activeIdx === idx;
                                    const isHovered = hoveredIdx === idx && !isActive;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNavClick(idx),
                                        onMouseEnter: ()=>{
                                            hoverTimeoutRef.current = setTimeout(()=>setHoveredIdx(idx), 80);
                                        },
                                        onMouseLeave: ()=>{
                                            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                                            setHoveredIdx(null);
                                        },
                                        // onTouchStart={() => handleMouseEnter(idx)} // ✅ mobile hover simulation
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            padding: '1rem 1.5rem',
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        },
                                        children: [
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layoutId: "activeNavBg",
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: 'rgba(255,255,255,0.12)',
                                                    borderLeft: `3px solid #e2c215`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 381,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    display: 'inline-block',
                                                    color: isActive ? '#e2c215' : isHovered ? '#e2c215' : '#fff',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    transform: isActive ? 'translateX(28px)' : 'translateX(0)',
                                                    transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), color 0.15s ease'
                                                },
                                                children: [
                                                    item.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            position: 'absolute',
                                                            bottom: '-4px',
                                                            left: 0,
                                                            height: '2px',
                                                            width: isActive ? '100%' : '0%',
                                                            background: '#e2c215',
                                                            transition: 'width 0.3s ease'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 28 28",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                        cx: "14",
                                                        cy: "14",
                                                        r: "12",
                                                        animate: {
                                                            fill: selectedIdx === idx ? "#e2c215" : "#ffffff"
                                                        },
                                                        transition: {
                                                            duration: 0.2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                                        x1: "8.5",
                                                        y1: "14",
                                                        x2: "19.5",
                                                        y2: "14",
                                                        stroke: "#0b1b3b",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        animate: {
                                                            rotate: selectedIdx === idx ? 45 : 0
                                                        },
                                                        style: {
                                                            originX: "50%",
                                                            originY: "50%"
                                                        },
                                                        transition: {
                                                            duration: 0.25
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                                        x1: "14",
                                                        y1: "8.5",
                                                        x2: "14",
                                                        y2: "19.5",
                                                        stroke: "#0b1b3b",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        animate: {
                                                            rotate: selectedIdx === idx ? 45 : 0
                                                        },
                                                        style: {
                                                            originX: "50%",
                                                            originY: "50%"
                                                        },
                                                        transition: {
                                                            duration: 0.25
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "nav-col-scroll",
                                animate: {
                                    x: isMobile ? mobileView === 'col1' ? '100%' : '0%' : 0
                                },
                                transition: {
                                    duration: 0.35
                                },
                                style: {
                                    width: '100%',
                                    height: '100vh',
                                    minHeight: 0,
                                    overflowY: 'auto',
                                    overflowX: 'hidden',
                                    flexShrink: 0,
                                    position: isMobile ? 'absolute' : 'relative',
                                    top: 0,
                                    left: 0,
                                    background: '#213558',
                                    display: 'flex',
                                    flexDirection: 'column'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedIdx(null);
                                            setMobileView('col1');
                                        },
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: S,
                                            padding: '1rem',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            flexShrink: 0
                                        },
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: activeIdx !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 40 * direction
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: -40 * direction
                                            },
                                            transition: {
                                                duration: 0.35
                                            },
                                            style: {
                                                flex: 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                variants: containerVariants,
                                                initial: "hidden",
                                                animate: "show",
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                },
                                                children: navItems[activeIdx]?.children?.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                        href: child.href,
                                                        variants: itemVariants,
                                                        style: {
                                                            display: 'block',
                                                            padding: '0.75rem 1rem',
                                                            color: '#fff',
                                                            textDecoration: 'none',
                                                            borderBottom: '1px solid rgba(255,255,255,0.12)'
                                                        },
                                                        whileHover: {
                                                            x: 6
                                                        },
                                                        transition: {
                                                            type: 'spring',
                                                            stiffness: 300
                                                        },
                                                        onClick: onClose,
                                                        children: child.label
                                                    }, child.label, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this)
                                        }, activeIdx, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                            lineNumber: 543,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 541,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            padding: 'clamp(0.6rem,1.5vw,0.85rem) clamp(1.5rem,3vw,2.5rem)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            gap: 'clamp(0.5rem,1vw,1rem)',
                            flexWrap: 'wrap',
                            background: 'rgba(0,0,0,0.2)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 'clamp(0.5rem,1vw,0.75rem)',
                                    alignItems: 'center'
                                },
                                children: [
                                    {
                                        k: 'FB',
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 617,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                            lineNumber: 611,
                                            columnNumber: 19
                                        }, this)
                                    },
                                    {
                                        k: 'IG',
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 630,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                            lineNumber: 624,
                                            columnNumber: 19
                                        }, this)
                                    },
                                    {
                                        k: 'LI',
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 643,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                            lineNumber: 637,
                                            columnNumber: 19
                                        }, this)
                                    },
                                    {
                                        k: 'TW',
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                                lineNumber: 656,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                            lineNumber: 650,
                                            columnNumber: 19
                                        }, this)
                                    }
                                ].map(({ k, i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        style: {
                                            width: 'clamp(24px,4vw,28px)',
                                            height: 'clamp(24px,4vw,28px)',
                                            border: `1px solid rgba(255,255,255,0.4)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = S;
                                            e.currentTarget.style.color = P;
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = '#fff';
                                        },
                                        children: i
                                    }, k, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                        lineNumber: 661,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#fff',
                                    fontSize: 'clamp(0.6rem,1vw,0.7rem)',
                                    letterSpacing: '0.06em'
                                },
                                children: "Vipingo, Kilifi County, Kenya"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 688,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: "sidenav-right-panel",
                style: {
                    flex: 1,
                    background: '#213558',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        width: '82%',
                        height: '80vh',
                        overflow: 'hidden',
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${cur.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'background-image 0.4s ease'
                            }
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                            lineNumber: 725,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top,rgba(33,53,88,0.85) 0%,rgba(33,53,88,0.15) 60%)',
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                bottom: 'clamp(1rem,2vw,1.5rem)',
                                left: 'clamp(1rem,2vw,1.25rem)',
                                right: 'clamp(1rem,2vw,1.25rem)',
                                zIndex: 2,
                                pointerEvents: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Euclid Circular A',sans-serif",
                                    color: '#fff',
                                    fontSize: 'clamp(0.75rem,1.2vw,0.95rem)',
                                    lineHeight: 1.5,
                                    margin: 0
                                },
                                children: cur.imageCaption
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                                lineNumber: 756,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                            lineNumber: 746,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                    lineNumber: 716,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .sidenav-right-panel { display: none !important; }
        @media(min-width: 900px) { .sidenav-right-panel { display: flex !important; } }
      `
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
                lineNumber: 771,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/SchoolSideNav.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/ui/src/components/SchoolNavbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchoolNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolSideNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolSideNav.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SchoolNavbar({ scrolledLogo, clearLogo, logoAlt, logoHref, navItems, quickLinks, enquireHref, applyHref, headerApplyHref, sideImage, sideImageAlt }) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const resolvedHeaderApply = headerApplyHref ?? applyHref;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fn = ()=>setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', fn);
        return ()=>window.removeEventListener('scroll', fn);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolSideNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false),
                navItems: navItems,
                quickLinks: quickLinks,
                enquireHref: enquireHref,
                applyHref: applyHref,
                sideImage: sideImage,
                sideImageAlt: sideImageAlt
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    transition: 'all 0.4s ease',
                    background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    boxShadow: scrolled ? '0 1px 0 #e8e6e3' : 'none',
                    padding: scrolled ? '0.7rem 0' : 'clamp(0.8rem,2vw,1.2rem) 0'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        padding: '0 clamp(1rem,3vw,2.5rem)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 'clamp(0.8rem,1.5vw,1rem)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: logoHref,
                            style: {
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                overflow: 'hidden',
                                maxWidth: scrolled ? '0px' : '500px',
                                opacity: scrolled ? 0 : 1,
                                pointerEvents: scrolled ? 'none' : 'auto',
                                transition: 'max-width 0.4s ease, opacity 0.3s ease'
                            },
                            tabIndex: scrolled ? -1 : 0,
                            "aria-hidden": scrolled,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: clearLogo,
                                alt: logoAlt,
                                width: 120,
                                height: 54,
                                style: {
                                    height: 'auto',
                                    width: 'clamp(180px,7vw,170px)',
                                    flexShrink: 0
                                },
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'clamp(1rem,2vw,1.5rem)',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-end',
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'none',
                                        gap: 'clamp(0.75rem,1.5vw,1.25rem)',
                                        alignItems: 'center'
                                    },
                                    className: "nav-quick",
                                    children: [
                                        quickLinks.slice(0, 2).map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: href,
                                                style: {
                                                    color: scrolled ? 'var(--muted)' : 'rgba(255,255,255)',
                                                    textDecoration: 'none',
                                                    fontSize: 'clamp(0.8rem,1.2vw,0.98rem)',
                                                    letterSpacing: '0.1em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                    transition: 'color 0.2s',
                                                    whiteSpace: 'nowrap'
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.color = scrolled ? 'var(--primary)' : '#fff',
                                                onMouseLeave: (e)=>e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.9)',
                                                children: label
                                            }, label, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: resolvedHeaderApply,
                                            className: "btn-green",
                                            style: {
                                                fontSize: 'clamp(0.7rem,1.2vw,0.82rem)',
                                                padding: 'clamp(0.4rem,0.8vw,0.5rem) clamp(0.8rem,1.5vw,1.2rem)'
                                            },
                                            children: "Apply Now"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(true),
                                    "aria-label": "Open menu",
                                    style: {
                                        background: 'none',
                                        border: `2.5px solid ${scrolled ? 'rgba(33,53,88,0.55)' : 'rgba(255,255,255,0.9)'}`,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 5,
                                        padding: '0.5rem 0.6rem',
                                        transition: 'border-color 0.3s',
                                        flexShrink: 0
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.borderColor = scrolled ? 'var(--primary)' : '#fff',
                                    onMouseLeave: (e)=>e.currentTarget.style.borderColor = scrolled ? 'rgba(33,53,88,0.35)' : 'rgba(255,255,255,0.6)',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 25,
                                                height: 2.2,
                                                background: scrolled ? 'var(--primary)' : '#fff',
                                                display: 'block',
                                                transition: 'background 0.4s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 21,
                                                height: 2.5,
                                                background: scrolled ? 'var(--primary)' : '#fff',
                                                display: 'block',
                                                transition: 'background 0.4s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 17,
                                                height: 2.5,
                                                background: scrolled ? 'var(--secondary)' : 'rgba(255,255,255,0.7)',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                    children: `@media(min-width:768px){.nav-quick{display:flex!important}}`
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/SchoolNavbar.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/granada-international/src/app/home/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GranadaInternationalHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/* -- NAV DATA ---------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolNavbar.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/shared/SchoolFooter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
const NAV_ITEMS = [
    {
        label: 'About Us',
        href: '/granada-international/about',
        image: '/building.jpeg',
        imageCaption: 'A Unique Blend of Discovery + Purpose',
        children: [
            {
                label: "Principal's Welcome",
                href: '/granada-international/about/welcome'
            },
            {
                label: 'Vision & Mission',
                href: '/granada-international/about/vision'
            },
            {
                label: 'Core Values',
                href: '/granada-international/about/values'
            },
            {
                label: 'Our Story',
                href: '/granada-international/about/history'
            },
            {
                label: 'Boarding',
                href: '/granada-international/about/boarding'
            },
            {
                label: 'Staff & Leadership',
                href: '/granada-international/about/staff'
            }
        ]
    },
    {
        label: 'Admissions',
        href: '/granada-international/admissions',
        image: '/dorm.jpeg',
        imageCaption: 'A Unique Blend of Ambition + Opportunity',
        children: [
            {
                label: 'About Admissions',
                href: '/granada-international/admissions/intro'
            },
            {
                label: 'Admissions Team',
                href: '/granada-international/admissions/team'
            },
            {
                label: 'KG;Year 9 Process',
                href: '/granada-international/admissions/process'
            },
            {
                label: 'Senior School',
                href: '/granada-international/admissions/senior-process'
            },
            {
                label: 'Apply',
                href: '/granada-international/admissions/apply'
            }
        ]
    },
    {
        label: 'Academic',
        href: '/granada-international/academics',
        image: '/class.jpeg',
        imageCaption: 'A Unique Blend of Knowledge + Excellence',
        children: [
            {
                label: 'Overview',
                href: '/granada-international/academics/overview'
            },
            {
                label: 'Edexcel Curriculum',
                href: '/granada-international/academics/edexcel'
            },
            {
                label: 'School Sections',
                href: '/granada-international/academics/sections'
            },
            {
                label: 'University Pathways',
                href: '/granada-international/academics/university'
            },
            {
                label: 'Apply',
                href: '/granada-international/academics/apply'
            }
        ]
    },
    {
        label: 'Campus Life',
        href: '/granada-international/campus-life',
        image: '/sports.jpeg',
        imageCaption: 'A Unique Blend of Growth + Community',
        children: [
            {
                label: 'Activities & Overview',
                href: '/granada-international/campus-life/activities'
            },
            {
                label: 'Facilities',
                href: '/granada-international/campus-life/facilities'
            },
            {
                label: 'Sports & Athletics',
                href: '/granada-international/campus-life/sports'
            },
            {
                label: 'Arts & Drama',
                href: '/granada-international/campus-life/arts'
            },
            {
                label: 'Music',
                href: '/granada-international/campus-life/music'
            },
            {
                label: 'Co-Curricular',
                href: '/granada-international/campus-life/cocurricular'
            },
            {
                label: 'Leadership',
                href: '/granada-international/campus-life/leadership'
            },
            {
                label: 'Boarding Life',
                href: '/granada-international/campus-life/boarding'
            }
        ]
    },
    {
        label: 'Pastoral & Wellbeing',
        href: '/granada-international/wellbeing',
        image: '/sports2.jpeg',
        imageCaption: 'A Unique Blend of Care + Belonging',
        children: [
            {
                label: 'Wellbeing Approach',
                href: '/granada-international/wellbeing/approach'
            },
            {
                label: 'Counselling Support',
                href: '/granada-international/wellbeing/counselling'
            },
            {
                label: 'Core Values',
                href: '/granada-international/wellbeing/values'
            },
            {
                label: 'Character Education',
                href: '/granada-international/wellbeing/character'
            },
            {
                label: 'Global Citizenship',
                href: '/granada-international/wellbeing/global'
            },
            {
                label: 'Boarding Pastoral Care',
                href: '/granada-international/wellbeing/boarding-care'
            }
        ]
    },
    {
        label: 'Latest News',
        href: '/granada-international/news',
        image: '/building2.jpeg',
        imageCaption: 'A Unique Blend of Stories + Achievements',
        children: [
            {
                label: 'Latest News',
                href: '/granada-international/news/latest-news'
            },
            {
                label: 'Events',
                href: '/granada-international/news/events'
            },
            {
                label: 'Newsletters',
                href: '/granada-international/news/newsletters'
            },
            {
                label: 'Social Media',
                href: '/granada-international/news/social'
            }
        ]
    },
    {
        label: 'Parents',
        href: '/granada-international#contact',
        image: '/staffroom.jpeg',
        imageCaption: 'A Unique Blend of Partnership + Trust',
        children: [
            {
                label: 'Parent Portal',
                href: '/granada-international#contact'
            },
            {
                label: 'School Calendar',
                href: '/granada-international#contact'
            },
            {
                label: 'Term Dates',
                href: '/granada-international#contact'
            },
            {
                label: 'Reports & Policies',
                href: '/granada-international#contact'
            }
        ]
    },
    {
        label: 'Support Us',
        href: '/granada-international#contact',
        image: '/art-room.jpeg',
        imageCaption: 'A Unique Blend of Giving + Impact',
        children: [
            {
                label: 'Bursaries & Scholarships',
                href: '/granada-international/admissions'
            },
            {
                label: 'Donations',
                href: '/granada-international#contact'
            },
            {
                label: 'Community Partnerships',
                href: '/granada-international#contact'
            }
        ]
    }
];
/* -- useInView --------------------------------------------------------------- */ function useInView(threshold = 0.15) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [vis, setVis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const o = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setVis(true);
        }, {
            threshold
        });
        if (ref.current) o.observe(ref.current);
        return ()=>o.disconnect();
    }, []);
    return {
        ref,
        vis
    };
}
/* -- HERO -------------------------------------------------------------------- */ function Hero() {
    const slides = [
        {
            bg: '/class.jpeg',
            label: 'World-Class Edexcel'
        },
        {
            bg: '/staffroom.jpeg',
            label: 'Inspiring Excellence'
        },
        {
            bg: '/dorm2.jpeg',
            label: 'Vipingo, Kenya'
        },
        {
            bg: '/building.jpeg',
            label: 'Global Pathways'
        }
    ];
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoaded(true);
        const t = setInterval(()=>setActive((a)=>(a + 1) % slides.length), 5500);
        return ()=>clearInterval(t);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            position: 'relative',
            height: '100vh',
            minHeight: 600,
            overflow: 'hidden'
        },
        children: [
            slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${s.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: i === active ? 1 : 0,
                        transition: 'opacity 1.2s ease',
                        animation: i === active ? 'kenBurns 10s ease-in-out infinite alternate' : 'none'
                    }
                }, i, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 'clamp(200px,30vw,400px)',
                    height: 'clamp(200px,30vw,400px)',
                    background: 'radial-gradient(circle at top right,rgba(170,194,12,0.15) 0%,transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(105deg, rgba(33,53,88,0.82) 0%, rgba(33,53,88,0.32) 58%, transparent 100%)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 5,
                    height: '100%',
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 clamp(1rem,2vw,2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 'clamp(300px,52vw,620px)',
                        textAlign: 'center',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'none' : 'translateY(20px)',
                        transition: 'all 1s ease 0.2s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 'clamp(0.55rem,0.8vw,0.62rem)',
                                letterSpacing: '0.28em',
                                textTransform: 'uppercase',
                                color: 'var(--secondary)',
                                fontWeight: 700,
                                marginBottom: '1rem'
                            },
                            children: "Vipingo, Kenya · Edexcel & Cambridge"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-display",
                            style: {
                                fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)',
                                fontWeight: 700,
                                lineHeight: 1.08,
                                color: '#fff',
                                marginBottom: '1.25rem',
                                textShadow: '0 2px 24px rgba(0,0,0,0.4)'
                            },
                            children: [
                                "A world-class education",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                "right here",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    style: {
                                        color: 'var(--secondary)',
                                        fontStyle: 'normal'
                                    },
                                    children: "on the Kenyan coast."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 40,
                                height: 2,
                                background: 'var(--secondary)',
                                margin: '1.25rem auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 'clamp(0.82rem,1.1vw,0.98rem)',
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.88)',
                                maxWidth: '44ch',
                                margin: '0 auto',
                                fontFamily: 'sans-serif'
                            },
                            children: "Offering Edexcel & Cambridge pathways — Granada International shapes curious, confident learners from Kindergarten through to A-Levels."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@media(min-width:1024px){.hero-stats{display:block!important}}@keyframes kenBurns{from{transform:scale(1)}to{transform:scale(1.08)}}`
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
/* -- TAGLINE STRIP ----------------------------------------------------------- */ function TaglineStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-blue",
        style: {
            padding: 'clamp(0.8rem,1.2vw,1.2rem) clamp(1rem,2vw,2rem)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1280,
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(1.5rem,3vw,2.5rem)',
                flexWrap: 'wrap',
                alignItems: 'center'
            },
            children: [
                'Forward Thinking',
                'Inspiring Excellence',
                'Shaping the Future'
            ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(0.6rem,1.2vw,1rem)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display",
                            style: {
                                fontSize: 'clamp(0.8rem,1.5vw,1rem)',
                                fontWeight: 400,
                                color: '#fff',
                                letterSpacing: '0.03em',
                                whiteSpace: 'nowrap'
                            },
                            children: t
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 386,
                            columnNumber: 15
                        }, this),
                        i < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                background: 'var(--secondary)',
                                flexShrink: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 399,
                            columnNumber: 17
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 378,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
            lineNumber: 365,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 361,
        columnNumber: 5
    }, this);
}
/* -- WELCOME ----------------------------------------------------------------- */ function Welcome() {
    const { ref, vis } = useInView(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-light",
        id: "about",
        ref: ref,
        style: {
            padding: 'clamp(3rem,6vw,6rem) clamp(1rem,2vw,2rem)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 'clamp(2rem,4vw,6rem)',
                    alignItems: 'center'
                },
                className: "int-welcome-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: vis ? 1 : 0,
                            transform: vis ? 'none' : 'translateX(-30px)',
                            transition: 'all 0.9s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label-tag",
                                children: "Welcome to Granada International"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-heading",
                                children: [
                                    "A World-Class Education ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "on the Coast"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-text",
                                style: {
                                    marginBottom: 'clamp(0.8rem,1.2vw,1.25rem)'
                                },
                                children: "Located along Kenya's beautiful coast in Vipingo, Granada International is a vibrant learning community dedicated to nurturing confident, capable, and compassionate learners."
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-text",
                                style: {
                                    marginBottom: 'clamp(0.8rem,1.2vw,1.25rem)'
                                },
                                children: "Through our internationally recognised Edexcel and Cambridge curriculum pathways, we empower students to discover their potential and grow into responsible global citizens ; ready to pursue opportunities at universities worldwide."
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-text",
                                style: {
                                    marginBottom: 'clamp(1.5rem,2.5vw,2rem)'
                                },
                                children: "With modern learning environments, dedicated educators, and a supportive school community, Granada International is committed to inspiring excellence and preparing learners for a successful future."
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 'clamp(0.5rem,1vw,0.75rem)',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/granada-international/about",
                                        className: "btn-solid",
                                        style: {
                                            fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                            padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                                        },
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/granada-international/about#vision",
                                        className: "btn-outline",
                                        style: {
                                            fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                            padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                                        },
                                        children: "Our Vision"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: vis ? 1 : 0,
                            transform: vis ? 'none' : 'translateY(30px)',
                            transition: 'all 0.9s ease 0.15s',
                            height: 'clamp(350px,52vw,450px)',
                            overflow: 'hidden',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-hover",
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/building.jpeg",
                                        alt: "",
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top,rgba(33,53,88,0.3),transparent 60%)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '-20px',
                                    background: 'var(--secondary)',
                                    padding: 'clamp(0.8rem,1.2vw,1.1rem) clamp(1rem,1.5vw,1.4rem)',
                                    textAlign: 'center',
                                    zIndex: 5,
                                    display: 'none'
                                },
                                className: "int-badge",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display",
                                        style: {
                                            fontSize: 'clamp(1.4rem,2vw,2rem)',
                                            fontWeight: 600,
                                            color: 'var(--primary-dark)',
                                            lineHeight: 1
                                        },
                                        children: "Edexcel & Cambridge"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 'clamp(0.45rem,0.6vw,0.55rem)',
                                            letterSpacing: '0.14em',
                                            textTransform: 'uppercase',
                                            color: 'var(--primary-dark)',
                                            marginTop: 4,
                                            fontWeight: 700
                                        },
                                        children: "Certified"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 557,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@media(min-width:768px){.int-welcome-grid{grid-template-columns:1fr 1fr!important}.int-badge{display:block!important}}`
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
/* -- EDEXCEL HIGHLIGHT ------------------------------------------------------- */ function EdexcelHighlight() {
    const { ref, vis } = useInView(0.1);
    const stages = [
        {
            title: 'Early Years',
            sub: 'Foundation Stage',
            desc: 'Nurturing curiosity, creativity, and early literacy through a rich learning environment aligned with international standards.',
            color: 'var(--primary)',
            icon: '??'
        },
        {
            title: 'Primary School',
            sub: 'Key Stage 1 & 2',
            desc: 'Building essential skills in English, Mathematics, and Sciences through structured, engaging Edexcel and Cambridge coursework.',
            color: 'var(--accent-warm)',
            icon: '??'
        },
        {
            title: 'Lower Secondary',
            sub: 'Key Stage 3',
            desc: 'Deepening knowledge across a broad curriculum, laying the groundwork for IGCSE success with rigorous academic preparation.',
            color: 'var(--accent-green)',
            icon: '??'
        },
        {
            title: 'IGCSE',
            sub: 'Key Stage 4',
            desc: 'Internationally recognised examinations across a wide range of subjects ; your gateway to A-Levels and university.',
            color: 'var(--secondary)',
            icon: '??'
        },
        {
            title: 'A-Levels',
            sub: 'Key Stage 5',
            desc: 'Specialised study in your chosen subjects, opening doors to top universities across the UK, USA, and beyond.',
            color: 'var(--accent-blue)',
            icon: '??'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cream",
        id: "curriculum",
        ref: ref,
        style: {
            padding: 'clamp(3rem,6vw,6rem) clamp(1rem,2vw,2rem)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1280,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: 'clamp(2rem,3.5vw,3.5rem)',
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(24px)',
                        transition: 'all 0.8s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag",
                            children: "Academic Pathway"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-heading",
                            children: [
                                "From Foundation",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 637,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "to A-Levels"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 638,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider",
                            style: {
                                margin: '1.25rem auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                maxWidth: 540,
                                margin: '0 auto'
                            },
                            children: "A complete Edexcel and Cambridge journey from Early Years through to A-Levels ; preparing learners for the world's best universities."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 641,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5,1fr)',
                        gap: '1px',
                        background: '#dddbd8'
                    },
                    className: "stages-grid",
                    children: stages.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#fff',
                                padding: 'clamp(1.2rem,1.8vw,2rem) clamp(1rem,1.2vw,1.4rem)',
                                borderTop: `3px solid ${s.color}`,
                                position: 'relative',
                                overflow: 'hidden',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(32px)',
                                transition: `all 0.9s ease ${i * 0.1}s`,
                                cursor: 'default'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = '#f0f7fb';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(33,53,88,0.12)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = '#fff';
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = 'none';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: -20,
                                        right: -10,
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        background: s.color,
                                        opacity: 0.08
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 'clamp(1.2rem,2vw,1.6rem)',
                                        display: 'block',
                                        marginBottom: '0.75rem'
                                    },
                                    children: s.icon
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 693,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: 'clamp(0.65rem,0.85vw,0.82rem)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        color: 'var(--body-text)',
                                        fontWeight: 700,
                                        marginBottom: '0.2rem'
                                    },
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 702,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(0.55rem,0.72vw,0.62rem)',
                                        color: s.color,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        marginBottom: '0.8rem'
                                    },
                                    children: s.sub
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        fontSize: 'clamp(0.65rem,0.82vw,0.78rem)'
                                    },
                                    children: s.desc
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 726,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 656,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(max-width:900px){.stages-grid{grid-template-columns:repeat(3,1fr)!important}}@media(max-width:600px){.stages-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:400px){.stages-grid{grid-template-columns:1fr!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
            lineNumber: 624,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 618,
        columnNumber: 5
    }, this);
}
/* -- PILLARS ----------------------------------------------------------------- */ function Pillars() {
    const { ref, vis } = useInView(0.1);
    const items = [
        {
            title: 'Modern Learning Environments',
            desc: 'Purpose-built classrooms, science labs, and creative spaces designed to inspire international-standard curiosity and collaboration.',
            img: '/sports.jpeg',
            tag: 'Facilities'
        },
        {
            title: 'Dedicated Educators',
            desc: "Qualified British curriculum specialists committed to every learner's international academic success.",
            img: '/staffroom.jpeg',
            tag: 'Teaching'
        },
        {
            title: 'Supportive Community',
            desc: 'A warm, inclusive coastal culture where every student feels valued and empowered to reach their global potential.',
            img: '/sports2.jpeg',
            tag: 'Wellbeing'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-blue",
        id: "campus",
        ref: ref,
        style: {
            padding: 'clamp(3rem,6vw,6rem) clamp(1rem,2vw,2rem)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginBottom: 'clamp(2rem,3vw,3rem)',
                            flexWrap: 'wrap',
                            gap: 'clamp(1rem,1.5vw,2rem)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? 'none' : 'translateX(-24px)',
                                    transition: 'all 0.8s ease'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "label-tag",
                                        children: "What Sets Us Apart"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 789,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-heading",
                                        children: [
                                            "Excellence in ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "Every Detail"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                                lineNumber: 791,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 790,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 782,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/granada-international/about",
                                className: "btn-outline",
                                style: {
                                    opacity: vis ? 1 : 0,
                                    transition: 'opacity 0.8s ease 0.3s',
                                    borderColor: 'rgba(255,255,255,0.5)',
                                    color: '#fff',
                                    fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                    padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'transparent';
                                },
                                children: "Learn More"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 794,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 772,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 'clamp(1rem,1.5vw,1.25rem)',
                            minHeight: 0
                        },
                        className: "pillars-grid",
                        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-hover",
                                style: {
                                    position: 'relative',
                                    minHeight: 'clamp(280px,50vw,460px)',
                                    height: '100%',
                                    overflow: 'hidden',
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? 'none' : 'translateY(40px)',
                                    transition: `all 0.9s ease ${i * 0.12}s`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.img,
                                        alt: item.title,
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 838,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top,rgba(13,12,13,0.88) 0%,rgba(13,12,13,0.15) 65%,transparent 100%)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 843,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 'clamp(0.8rem,1.5vw,1.1rem)',
                                            left: 'clamp(0.8rem,1.5vw,1.1rem)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 'clamp(0.5rem,0.8vw,0.58rem)',
                                                letterSpacing: '0.2em',
                                                textTransform: 'uppercase',
                                                color: 'var(--secondary)',
                                                background: 'rgba(13,12,13,0.65)',
                                                padding: 'clamp(0.2rem,0.4vw,0.28rem) clamp(0.5rem,1vw,0.7rem)',
                                                fontWeight: 700
                                            },
                                            children: item.tag
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                            lineNumber: 858,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 851,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            padding: 'clamp(1.2rem,2vw,1.75rem) clamp(1rem,1.5vw,1.5rem)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display",
                                                style: {
                                                    fontSize: 'clamp(1.1rem,1.8vw,1.4rem)',
                                                    fontWeight: 500,
                                                    color: '#fff',
                                                    lineHeight: 1.2,
                                                    marginBottom: 'clamp(0.4rem,0.8vw,0.65rem)'
                                                },
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                                lineNumber: 882,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.72)',
                                                    fontSize: 'clamp(0.75rem,0.95vw,0.8rem)',
                                                    lineHeight: 1.7
                                                },
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                                lineNumber: 894,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 873,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                lineNumber: 825,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 815,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 771,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@media(min-width:768px){.pillars-grid{grid-template-columns:repeat(3,1fr)!important}.pillars-grid>div{height:clamp(280px,35vw,420px)!important}}`
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 908,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 765,
        columnNumber: 5
    }, this);
}
/* -- QUOTE BANNER ------------------------------------------------------------ */ function QuoteBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(3rem,5vw,5.5rem) clamp(1rem,2vw,2rem)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/dorm.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 923,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(33,53,88,0.88)'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 933,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: 820,
                    margin: '0 auto',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--accent-light)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3em',
                            fontSize: 'clamp(0.55rem,0.8vw,0.62rem)',
                            fontWeight: 700,
                            marginBottom: 'clamp(1.2rem,1.75vw,1.75rem)'
                        },
                        children: "Our Mission"
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 949,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                        className: "font-display",
                        style: {
                            fontSize: 'clamp(1.2rem,3.5vw,2.6rem)',
                            fontWeight: 400,
                            color: '#fff',
                            lineHeight: 1.45,
                            marginBottom: 'clamp(1.5rem,2.25vw,2.25rem)'
                        },
                        children: '"We are committed to inspiring excellence and preparing learners for a successful future ; today, tomorrow, and beyond."'
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 961,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 'clamp(32px,4vw,44px)',
                            height: 2,
                            background: 'var(--secondary)',
                            margin: '0 auto clamp(1.2rem,1.75vw,1.75rem)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 974,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: 'clamp(0.65rem,0.9vw,0.78rem)',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            fontWeight: 500
                        },
                        children: "Granada International ; Vipingo, Kenya"
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 982,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 940,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 916,
        columnNumber: 5
    }, this);
}
/* -- VALUES STRIP ------------------------------------------------------------ */ function ValuesStrip() {
    const { ref, vis } = useInView(0.1);
    const values = [
        {
            label: 'Resilience',
            color: '#c0180b'
        },
        {
            label: 'Curiosity',
            color: '#ebae1b'
        },
        {
            label: 'Kindness',
            color: '#4a6428'
        },
        {
            label: 'Honesty',
            color: '#84b7c8'
        },
        {
            label: 'Respect',
            color: '#483454'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-light",
        id: "community",
        ref: ref,
        style: {
            padding: 'clamp(3rem,6vw,6rem) clamp(1rem,2vw,2rem)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1280,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: 'clamp(2rem,3vw,3rem)',
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(20px)',
                        transition: 'all 0.8s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag",
                            children: "What Guides Us"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1025,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-heading",
                            children: [
                                "Our ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Core Values"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 1027,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1026,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider",
                            style: {
                                margin: '1.25rem auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1029,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                maxWidth: 520,
                                margin: '0 auto'
                            },
                            children: "Five values that shape every interaction, every lesson, and every aspiration we hold for our international learners."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1030,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1016,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5,1fr)',
                        gap: 'clamp(0.6rem,1vw,0.85rem)'
                    },
                    className: "values-strip",
                    children: values.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: 'clamp(180px,28vw,260px)',
                                height: '100%',
                                cursor: 'default',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(32px)',
                                transition: `all 0.9s ease ${i * 0.1}s`
                            },
                            onMouseEnter: (e)=>{
                                const overlay = e.currentTarget.querySelector('.val-overlay');
                                if (overlay) overlay.style.opacity = '1';
                            },
                            onMouseLeave: (e)=>{
                                const overlay = e.currentTarget.querySelector('.val-overlay');
                                if (overlay) overlay.style.opacity = '0';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        background: `linear-gradient(160deg,${v.color} 0%,${v.color}cc 100%)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 1069,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: `repeating-linear-gradient(45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 1px,transparent 1px,transparent 12px)`,
                                        pointerEvents: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 1077,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "val-overlay",
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.25)',
                                        opacity: 0,
                                        transition: 'opacity 0.35s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 1085,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: 'clamp(0.8rem,1.2vw,1.2rem)',
                                        zIndex: 2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#fff',
                                            fontSize: 'clamp(0.65rem,0.9vw,0.8rem)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.14em',
                                            fontWeight: 700
                                        },
                                        children: v.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                        lineNumber: 1105,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                                    lineNumber: 1095,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1044,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1035,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginTop: 'clamp(1.5rem,2.5vw,2.5rem)',
                        opacity: vis ? 1 : 0,
                        transition: 'opacity 0.9s ease 0.5s'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/granada-international/about#values",
                        className: "btn-solid",
                        children: "Explore Our Values"
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                        lineNumber: 1128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(max-width:640px){.values-strip{grid-template-columns:repeat(3,1fr)!important}}@media(max-width:400px){.values-strip{grid-template-columns:repeat(2,1fr)!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
            lineNumber: 1015,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 1009,
        columnNumber: 5
    }, this);
}
/* -- ADMISSIONS CTA ---------------------------------------------------------- */ function AdmissionsCTA() {
    const { ref, vis } = useInView(0.2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-blue",
        id: "admissions",
        ref: ref,
        style: {
            padding: 'clamp(3.5rem,5.5vw,5.5rem) clamp(1rem,2vw,2rem)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 860,
                margin: '0 auto',
                textAlign: 'center',
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(24px)',
                transition: 'all 0.9s ease'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "label-tag",
                    children: "Are you ready?"
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-heading",
                    children: [
                        "Begin Your ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "International Journey"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1160,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "body-text",
                    style: {
                        maxWidth: 520,
                        margin: 'clamp(0.8rem,1.5vw,1.25rem) auto clamp(1.5rem,2.5vw,2.5rem)',
                        fontSize: 'clamp(0.9rem,1vw,1.05rem)'
                    },
                    children: "Join a community of internationally-minded learners on Kenya's breathtaking Vipingo coast ; where British excellence meets African warmth."
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'clamp(0.6rem,1.2vw,1rem)',
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/granada-international/contact",
                            className: "btn-solid",
                            style: {
                                fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                            },
                            children: "Enquire Now"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/granada-international/contact?type=visit",
                            className: "btn-outline",
                            style: {
                                borderColor: 'rgba(255,255,255,0.55)',
                                color: '#fff',
                                fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = 'transparent';
                            },
                            children: "Book a Visit"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/granada-international/contact",
                            className: "btn-outline",
                            style: {
                                borderColor: 'rgba(255,255,255,0.55)',
                                color: '#fff',
                                fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = 'transparent';
                            },
                            children: "Apply"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                            lineNumber: 1212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                    lineNumber: 1175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
            lineNumber: 1148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
        lineNumber: 1142,
        columnNumber: 5
    }, this);
}
function GranadaInternationalHome() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                scrolledLogo: "/g-international.svg",
                clearLogo: "/g-international-dark.svg",
                logoAlt: "Granada International",
                logoHref: "/granada-international",
                navItems: NAV_ITEMS,
                quickLinks: [
                    {
                        label: 'Parents',
                        href: '/granada-international#contact'
                    },
                    {
                        label: 'Enquire',
                        href: '/granada-international/contact'
                    },
                    {
                        label: 'Contact us',
                        href: '/granada-international/contact'
                    }
                ],
                enquireHref: "/granada-international/contact",
                applyHref: "/granada-international/contact",
                headerApplyHref: "/granada-international#admissions",
                sideImage: "/building.jpeg",
                sideImageAlt: "Granada International"
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaglineStrip, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Welcome, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EdexcelHighlight, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pillars, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuoteBanner, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValuesStrip, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdmissionsCTA, {}, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SchoolFooter, {
                logoSrc: "/g-international-dark.svg",
                logoAlt: "Granada International",
                logoHref: "/granada-international",
                tagline: "Forward Thinking. Inspiring Excellence. Shaping the Future.",
                schoolName: "Granada International",
                curriculumLinks: [
                    'Pearson Edexcel',
                    'Cambridge (CAIE)',
                    'Key Stages 1\u20135',
                    'IGCSE',
                    'A-Levels',
                    'University Pathways'
                ],
                footerColsClass: "int-footer-cols"
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/home/page.tsx",
                lineNumber: 1265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_006w9ye._.js.map