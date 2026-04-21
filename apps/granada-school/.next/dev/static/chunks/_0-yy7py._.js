(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/src/components/SchoolSideNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchoolSideNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sf, setSf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIdx, setSelectedIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const col2TimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoveredIdx, setHoveredIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mobileView, setMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('col1');
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchoolSideNav.useEffect": ()=>{
            const check = {
                "SchoolSideNav.useEffect.check": ()=>setIsMobile(window.innerWidth < 768)
            }["SchoolSideNav.useEffect.check"];
            check();
            window.addEventListener('resize', check);
            return ({
                "SchoolSideNav.useEffect": ()=>window.removeEventListener('resize', check)
            })["SchoolSideNav.useEffect"];
        }
    }["SchoolSideNav.useEffect"], []);
    const activeIdx = selectedIdx;
    const hoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchoolSideNav.useEffect": ()=>{
            document.body.style.overflow = open ? 'hidden' : '';
            return ({
                "SchoolSideNav.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["SchoolSideNav.useEffect"];
        }
    }["SchoolSideNav.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchoolSideNav.useEffect": ()=>{
            if (open) setActive(0);
        }
    }["SchoolSideNav.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchoolSideNav.useEffect": ()=>{
            return ({
                "SchoolSideNav.useEffect": ()=>{
                    if (col2TimerRef.current) clearTimeout(col2TimerRef.current);
                }
            })["SchoolSideNav.useEffect"];
        }
    }["SchoolSideNav.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#213558',
                    minWidth: 0,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 'clamp(0.5rem,1.5vw,1.5rem)',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    flex: 1,
                                    minWidth: 0
                                },
                                children: quickLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    maxWidth: 280,
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    search.trim() && sr.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: sr.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flex: 1,
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 28 28",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: activeIdx !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                variants: containerVariants,
                                                initial: "hidden",
                                                animate: "show",
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                },
                                                children: navItems[activeIdx]?.children?.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 'clamp(0.5rem,1vw,0.75rem)',
                                    alignItems: 'center'
                                },
                                children: [
                                    {
                                        k: 'FB',
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                ].map(({ k, i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        width: '82%',
                        height: '80vh',
                        overflow: 'hidden',
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                bottom: 'clamp(1rem,2vw,1.5rem)',
                                left: 'clamp(1rem,2vw,1.25rem)',
                                right: 'clamp(1rem,2vw,1.25rem)',
                                zIndex: 2,
                                pointerEvents: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
_s(SchoolSideNav, "bRP6vZ7H+oRy3M4SgaEyHZWvq9M=");
_c = SchoolSideNav;
var _c;
__turbopack_context__.k.register(_c, "SchoolSideNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/SchoolNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchoolNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolSideNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolSideNav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SchoolNavbar({ scrolledLogo, clearLogo, logoAlt, logoHref, navItems, quickLinks, enquireHref, applyHref, headerApplyHref, sideImage, sideImageAlt }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const resolvedHeaderApply = headerApplyHref ?? applyHref;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SchoolNavbar.useEffect": ()=>{
            const fn = {
                "SchoolNavbar.useEffect.fn": ()=>setScrolled(window.scrollY > 50)
            }["SchoolNavbar.useEffect.fn"];
            window.addEventListener('scroll', fn);
            return ({
                "SchoolNavbar.useEffect": ()=>window.removeEventListener('scroll', fn)
            })["SchoolNavbar.useEffect"];
        }
    }["SchoolNavbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolSideNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        padding: '0 clamp(1rem,3vw,2.5rem)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 'clamp(0.8rem,1.5vw,1rem)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'clamp(1rem,2vw,1.5rem)',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-end',
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'none',
                                        gap: 'clamp(0.75rem,1.5vw,1.25rem)',
                                        alignItems: 'center'
                                    },
                                    className: "nav-quick",
                                    children: [
                                        quickLinks.slice(0, 2).map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
_s(SchoolNavbar, "jAm7jTHG65/J2yarYImCswCRH6E=");
_c = SchoolNavbar;
var _c;
__turbopack_context__.k.register(_c, "SchoolNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/SchoolFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchoolFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
function SchoolFooter({ logoSrc, logoAlt, logoHref, tagline, schoolName, curriculumLinks, footerColsClass }) {
    const P = 'var(--primary)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "contact",
        style: {
            background: 'var(--primary)',
            color: '#fff',
            padding: 'clamp(3rem,4vw,5rem) clamp(1rem,2vw,2rem) clamp(1.2rem,2vw,2rem)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 'clamp(2rem,3vw,4rem)',
                            marginBottom: 'clamp(2rem,3vw,3.5rem)'
                        },
                        className: footerColsClass,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: logoHref,
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: logoSrc,
                                            alt: logoAlt,
                                            width: 190,
                                            height: 90,
                                            style: {
                                                width: 'clamp(140px,16vw,250px)',
                                                height: 'auto',
                                                marginBottom: '0.75rem'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255,255,255,0.65)',
                                            fontSize: 'clamp(0.75rem,0.9vw,0.82rem)',
                                            lineHeight: 1.8,
                                            maxWidth: 260,
                                            marginTop: 'clamp(0.8rem,1.2vw,1.25rem)'
                                        },
                                        children: tagline
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 'clamp(0.4rem,0.8vw,0.65rem)',
                                            marginTop: 'clamp(0.9rem,1.2vw,1.4rem)'
                                        },
                                        children: [
                                            {
                                                k: 'FB',
                                                i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            },
                                            {
                                                k: 'IG',
                                                i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this)
                                            },
                                            {
                                                k: 'LI',
                                                i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this)
                                            },
                                            {
                                                k: 'TW',
                                                i: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this)
                                            }
                                        ].map(({ k, i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                style: {
                                                    width: 'clamp(28px,3.5vw,32px)',
                                                    height: 'clamp(28px,3.5vw,32px)',
                                                    border: '1px solid rgba(255,255,255,0.25)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'rgba(255,255,255,0.8)',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s',
                                                    flexShrink: 0
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                                    e.currentTarget.style.color = '#fff';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                                                },
                                                children: i
                                            }, k, false, {
                                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: 'clamp(0.55rem,0.75vw,0.62rem)',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'var(--secondary)',
                                            fontWeight: 700,
                                            marginBottom: 'clamp(0.9rem,1.2vw,1.4rem)'
                                        },
                                        children: "School"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        'About Us',
                                        'Academic Life',
                                        'Admissions',
                                        'Curriculum',
                                        'Campus Life',
                                        'Our Team'
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            style: {
                                                display: 'block',
                                                color: 'rgba(255,255,255,0.65)',
                                                fontSize: 'clamp(0.7rem,0.9vw,0.8rem)',
                                                textDecoration: 'none',
                                                marginBottom: 'clamp(0.5rem,0.8vw,0.7rem)',
                                                transition: 'color 0.2s'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = '#fff',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(255,255,255,0.65)',
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: 'clamp(0.55rem,0.75vw,0.62rem)',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'var(--secondary)',
                                            fontWeight: 700,
                                            marginBottom: 'clamp(0.9rem,1.2vw,1.4rem)'
                                        },
                                        children: "Curriculum"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    curriculumLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            style: {
                                                display: 'block',
                                                color: 'rgba(255,255,255,0.65)',
                                                fontSize: 'clamp(0.7rem,0.9vw,0.8rem)',
                                                textDecoration: 'none',
                                                marginBottom: 'clamp(0.5rem,0.8vw,0.7rem)',
                                                transition: 'color 0.2s'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = '#fff',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(255,255,255,0.65)',
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: 'clamp(0.55rem,0.75vw,0.62rem)',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'var(--secondary)',
                                            fontWeight: 700,
                                            marginBottom: 'clamp(0.9rem,1.2vw,1.4rem)'
                                        },
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 'clamp(0.6rem,1vw,0.9rem)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.5)',
                                                            fontSize: 'clamp(0.6rem,0.7vw,0.68rem)',
                                                            marginBottom: 2,
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 600
                                                        },
                                                        children: "Christopher Sabwa – Director"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+254714848289",
                                                        style: {
                                                            color: '#fff',
                                                            fontSize: 'clamp(0.7rem,0.9vw,0.8rem)',
                                                            textDecoration: 'none'
                                                        },
                                                        children: "+254 714 848 289"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.5)',
                                                            fontSize: 'clamp(0.6rem,0.7vw,0.68rem)',
                                                            marginBottom: 2,
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 600
                                                        },
                                                        children: "Asya Adan – Officer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+254717682138",
                                                        style: {
                                                            color: '#fff',
                                                            fontSize: 'clamp(0.7rem,0.9vw,0.8rem)',
                                                            textDecoration: 'none'
                                                        },
                                                        children: "+254 717 682 138"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.5)',
                                                            fontSize: 'clamp(0.6rem,0.7vw,0.68rem)',
                                                            marginBottom: 2,
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 600
                                                        },
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:admissions@granadaschools.group",
                                                        style: {
                                                            color: 'var(--secondary)',
                                                            fontSize: 'clamp(0.65rem,0.85vw,0.75rem)',
                                                            textDecoration: 'none',
                                                            wordBreak: 'break-all'
                                                        },
                                                        children: "admissions@granadaschools.group"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.5)',
                                                            fontSize: 'clamp(0.6rem,0.7vw,0.68rem)',
                                                            marginBottom: 2,
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 600
                                                        },
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: '#fff',
                                                            fontSize: 'clamp(0.7rem,0.9vw,0.8rem)',
                                                            lineHeight: 1.6
                                                        },
                                                        children: [
                                                            "Vipingo, Kilifi County",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Kenya Coast"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,0.12)',
                            paddingTop: 'clamp(1.2rem,1.5vw,1.75rem)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 'clamp(0.8rem,1.5vw,1rem)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,0.45)',
                                    fontSize: 'clamp(0.65rem,0.8vw,0.72rem)'
                                },
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    schoolName,
                                    ". All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 'clamp(1rem,1.5vw,1.75rem)',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    'Privacy Policy',
                                    'Terms of Use',
                                    'Safeguarding'
                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        style: {
                                            color: 'rgba(255,255,255,0.45)',
                                            fontSize: 'clamp(0.6rem,0.8vw,0.68rem)',
                                            textDecoration: 'none',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            transition: 'color 0.2s',
                                            whiteSpace: 'nowrap'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = '#fff',
                                        onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(255,255,255,0.45)',
                                        children: l
                                    }, l, false, {
                                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .${footerColsClass} { grid-template-columns: 1fr; }
        @media(min-width:640px) { .${footerColsClass} { grid-template-columns: 1fr 1fr 1fr 1fr !important; } }
      `
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/SchoolFooter.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = SchoolFooter;
var _c;
__turbopack_context__.k.register(_c, "SchoolFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/80',
            outline: 'border-border hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
            ghost: 'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
            destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
            sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
            icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
            'icon-xs': "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
            'icon-sm': "size-6 [&_svg:not([class*='size-'])]:size-3",
            'icon-lg': "size-8 [&_svg:not([class*='size-'])]:size-4"
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant = 'default', size = 'default', asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/button.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-2.5!', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
            secondary: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
            destructive: 'bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20',
            outline: 'border-border bg-input/20 text-foreground dark:bg-input/30 [a]:hover:bg-muted [a]:hover:text-muted-foreground',
            ghost: 'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
            link: 'text-primary underline-offset-4 hover:underline'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant = 'default', asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/badge.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/granada-school/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/granada-school/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, size = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group/card flex flex-col gap-4 overflow-hidden rounded-lg bg-card py-4 text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-lg px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-heading text-sm font-medium', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs/relaxed text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/card.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-4 group-data-[size=sm]/card:px-3', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$granada$2d$school$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center rounded-b-lg px-4 group-data-[size=sm]/card:px-3 [.border-t]:pt-4 group-data-[size=sm]/card:[.border-t]:pt-3', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui/src/components/ui/card.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Shared layout components
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolSideNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolSideNav.tsx [app-client] (ecmascript)");
// UI primitives
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/card.tsx [app-client] (ecmascript)");
// Utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/src/components/SchoolNavbar.tsx [app-client] (ecmascript) <export default as SchoolNavbar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchoolNavbar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolNavbar.tsx [app-client] (ecmascript)");
}),
"[project]/packages/ui/src/components/SchoolFooter.tsx [app-client] (ecmascript) <export default as SchoolFooter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchoolFooter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolFooter.tsx [app-client] (ecmascript)");
}),
"[project]/apps/granada-school/src/app/about/[section]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SchoolNavbar$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolNavbar.tsx [app-client] (ecmascript) <export default as SchoolNavbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SchoolFooter$3e$__ = __turbopack_context__.i("[project]/packages/ui/src/components/SchoolFooter.tsx [app-client] (ecmascript) <export default as SchoolFooter>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
/* ── NAV DATA ──────────────────────────────────────────────────────────────── */ const NAV_ITEMS = [
    {
        label: 'About Us',
        href: '/about',
        image: '/building.jpeg',
        imageCaption: 'A Unique Blend of Discovery + Purpose',
        children: [
            {
                label: "Principal's Welcome",
                href: '/about/welcome'
            },
            {
                label: 'Vision & Mission',
                href: '/about/vision'
            },
            {
                label: 'Core Values',
                href: '/about/values'
            },
            {
                label: 'Our Story',
                href: '/about/history'
            },
            {
                label: 'Boarding',
                href: '/about/boarding'
            },
            {
                label: 'Staff & Leadership',
                href: '/about/staff'
            }
        ]
    },
    {
        label: 'Admissions',
        href: '/admissions',
        image: '/dorm.jpeg',
        imageCaption: 'A Unique Blend of Ambition + Opportunity',
        children: [
            {
                label: 'Introduction',
                href: '/admissions/intro'
            },
            {
                label: 'Why Choose Granada',
                href: '/admissions/why-choose'
            },
            {
                label: 'Boarding Life',
                href: '/admissions/boarding'
            },
            {
                label: 'Admissions Process',
                href: '/admissions/process'
            },
            {
                label: 'Apply',
                href: '/admissions/apply'
            },
            {
                label: 'Admissions Team',
                href: '/admissions/team'
            },
            {
                label: 'Fees',
                href: '/admissions/fees'
            },
            {
                label: 'Term Dates',
                href: '/admissions/term-dates'
            },
            {
                label: 'Uniform',
                href: '/admissions/uniform'
            },
            {
                label: 'School Lunches',
                href: '/admissions/school-lunches'
            },
            {
                label: 'School Transport',
                href: '/admissions/school-transport'
            }
        ]
    },
    {
        label: 'Academic',
        href: '/academics',
        image: '/class.jpeg',
        imageCaption: 'A Unique Blend of Knowledge + Excellence',
        children: [
            {
                label: 'Overview',
                href: '/academics/overview'
            },
            {
                label: 'CBC Curriculum',
                href: '/academics/cbc'
            },
            {
                label: 'School Sections',
                href: '/academics/sections'
            },
            {
                label: "Girls' Boarding",
                href: '/academics/boarding'
            },
            {
                label: 'Career',
                href: '/academics/careers'
            },
            {
                label: 'Apply',
                href: '/academics/apply'
            }
        ]
    },
    {
        label: 'Campus Life',
        href: '/campus-life',
        image: '/sports.jpeg',
        imageCaption: 'A Unique Blend of Growth + Community',
        children: [
            {
                label: 'Facilities',
                href: '/campus-life/facilities'
            },
            {
                label: 'Co-Curricular Activities',
                href: '/campus-life/cocurricular'
            }
        ]
    },
    {
        label: 'Pastoral & Wellbeing',
        href: '/wellbeing',
        image: '/sports2.jpeg',
        imageCaption: 'A Unique Blend of Care + Belonging',
        children: [
            {
                label: 'Wellbeing Approach',
                href: '/wellbeing/approach'
            },
            {
                label: 'Counselling',
                href: '/wellbeing/counselling'
            },
            {
                label: 'Character Education',
                href: '/wellbeing/character'
            },
            {
                label: 'Global Citizenship',
                href: '/wellbeing/global'
            }
        ]
    },
    {
        label: 'Latest News',
        href: '/news',
        image: '/building2.jpeg',
        imageCaption: 'A Unique Blend of Stories + Achievements',
        children: [
            {
                label: 'Featured Story',
                href: '/news/featured'
            },
            {
                label: 'All News',
                href: '/news/all-news'
            },
            {
                label: 'Events',
                href: '/news/events'
            },
            {
                label: 'Newsletters',
                href: '/news/newsletters'
            }
        ]
    },
    {
        label: 'Parents',
        href: '/contact',
        image: '/staffroom.jpeg',
        imageCaption: 'A Unique Blend of Partnership + Trust',
        children: [
            {
                label: 'Parent Portal',
                href: '/contact'
            },
            {
                label: 'School Calendar',
                href: '/contact'
            },
            {
                label: 'Term Dates',
                href: '/admissions/term-dates'
            }
        ]
    },
    {
        label: 'Support Us',
        href: '/contact',
        image: '/art-room.jpeg',
        imageCaption: 'A Unique Blend of Giving + Impact',
        children: [
            {
                label: 'Bursaries & Scholarships',
                href: '/admissions'
            },
            {
                label: 'Donations',
                href: '/contact'
            },
            {
                label: 'Community Partnerships',
                href: '/contact'
            }
        ]
    }
];
/* ── useInView ─────────────────────────────────────────────────────────────── */ function useInView(threshold = 0.12) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [vis, setVis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const o = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) setVis(true);
                }
            }["useInView.useEffect"], {
                threshold
            });
            if (ref.current) o.observe(ref.current);
            return ({
                "useInView.useEffect": ()=>o.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], []);
    return {
        ref,
        vis
    };
}
_s(useInView, "HMbOmsvFzjqj+n0SeRc3O4FJAKk=");
/* ── SECTION DATA ──────────────────────────────────────────────────────────────────── */ const PAGE_SECTIONS = [
    {
        label: "Principal's Welcome",
        id: 'welcome'
    },
    {
        label: 'Vision & Mission',
        id: 'vision'
    },
    {
        label: 'Core Values',
        id: 'values'
    },
    {
        label: 'Our Story',
        id: 'history'
    },
    {
        label: 'Boarding',
        id: 'boarding'
    },
    {
        label: 'Staff & Leadership',
        id: 'staff'
    }
];
const BASE_PATH = '/about';
/* ── PAGE HERO ───────────────────────────────────────────────────────────────── */ function PageHero() {
    _s1();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const activeSection = params.section;
    const sectionLabel = PAGE_SECTIONS.find((s)=>s.id === activeSection)?.label || "Principal's Welcome";
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageHero.useEffect": ()=>setLoaded(true)
    }["PageHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            position: 'relative',
            height: '100vh',
            minHeight: 600,
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(95deg, rgba(13,12,13,0.85) 0%, rgba(13,12,13,0.38) 45%, transparent 100%)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/building.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    animation: 'kenBurns 14s ease-in-out infinite alternate'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 5,
                    height: '100%',
                    margin: '0 auto',
                    padding: '0 clamp(1rem,2vw,2rem)',
                    paddingTop: 'clamp(140px,16vw,165px)',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: 'clamp(6rem,4vw,8rem)'
                },
                className: "hero-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display",
                        style: {
                            fontSize: 'clamp(1.375rem, 1.3rem + 0.375vw, 1.75rem)',
                            fontWeight: 600,
                            lineHeight: 1.3,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: '#fff',
                            textShadow: '0 2px 14px rgba(0,0,0,0.8)',
                            marginBottom: '0.8rem',
                            alignSelf: 'flex-end',
                            maxWidth: 'clamp(260px,45vw,520px)',
                            opacity: loaded ? 1 : 0,
                            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s ease 0.4s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#e2c215'
                                },
                                children: "A Unique"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#e2c215'
                                },
                                children: "Blend"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#e2c215'
                                },
                                children: "of "
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            "Discovery",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#e2c215'
                                },
                                children: "+ "
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            "Purpose"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s1(PageHero, "0+pg8utCarwG8HGpmBRzwoTCoRs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = PageHero;
/* ── IN-PAGE SECTION NAV ───────────────────────────────────────────────────── */ function SectionNav() {
    _s2();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const activeSection = params.section;
    const P = '#213558';
    const S = '#e2c215';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        style: {
            width: 'clamp(120px,12vw,180px)',
            flexShrink: 0,
            position: 'sticky',
            top: 110,
            alignSelf: 'flex-start',
            display: 'none',
            background: 'var(--body-bg)',
            padding: '1.5rem 0'
        },
        className: "section-sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Euclid Circular A',sans-serif",
                    fontSize: 'clamp(0.66rem,0.92vw,0.74rem)',
                    letterSpacing: '0.06em',
                    color: P,
                    fontWeight: 600,
                    marginBottom: '1.1rem'
                },
                children: "In this section"
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                    borderLeft: '1px solid #e8e6e3'
                },
                children: PAGE_SECTIONS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `${BASE_PATH}/${s.id}`,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.65rem 0 0.65rem 1rem',
                            color: activeSection === s.id ? P : '#5a5a5a',
                            background: 'none',
                            textDecoration: 'none',
                            borderLeft: activeSection === s.id ? `2px solid ${P}` : '2px solid transparent',
                            fontSize: 'clamp(0.72rem,1vw,0.8rem)',
                            fontWeight: activeSection === s.id ? 700 : 400,
                            transition: 'all 0.2s',
                            fontFamily: 'inherit',
                            marginLeft: '-1px'
                        },
                        children: s.label
                    }, i, false, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-where-next",
                style: {
                    marginTop: '2.25rem',
                    border: '1px solid #e8e6e3',
                    padding: '1.4rem',
                    background: '#fff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 'clamp(0.55rem,0.78vw,0.62rem)',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: S,
                            fontWeight: 700,
                            marginBottom: '0.9rem'
                        },
                        children: "Where Next?"
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            label: 'How to Apply',
                            href: '/admissions'
                        },
                        {
                            label: 'Visit Granada',
                            href: '/contact?type=visit'
                        },
                        {
                            label: 'Enquire Now',
                            href: '/contact'
                        }
                    ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l.href,
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#5a5a5a',
                                textDecoration: 'none',
                                fontSize: 'clamp(0.72rem,1vw,0.8rem)',
                                padding: '0.45rem 0',
                                borderBottom: '1px solid #f0eee9',
                                transition: 'color 0.2s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.color = P,
                            onMouseLeave: (e)=>e.currentTarget.style.color = '#5a5a5a',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 12,
                                    strokeWidth: 1.3
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                l.label
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `.section-sidebar{display:block!important}`
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_s2(SectionNav, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c1 = SectionNav;
/* ── PRINCIPAL'S WELCOME ────────────────────────────────────────────────────── */ function Welcome() {
    _s3();
    const { ref, vis } = useInView(0.08);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cream",
        id: "welcome",
        ref: ref,
        style: {
            paddingTop: 'clamp(3rem,6vw,5rem)',
            paddingBottom: 'clamp(3rem,6vw,5rem)',
            scrollMarginTop: '100px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                margin: '0 auto',
                padding: 'clamp(1.5rem,2vw,2rem) clamp(1rem,2vw,2rem)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-display",
                    style: {
                        fontSize: 'clamp(1rem,1.8vw,1.5rem)',
                        color: 'var(--primary)',
                        lineHeight: 1.65,
                        marginBottom: 'clamp(1.5rem,2.5vw,2.25rem)',
                        borderLeft: '3px solid var(--secondary)',
                        paddingLeft: 'clamp(0.9rem,1.5vw,1.4rem)',
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(16px)',
                        transition: 'all 0.8s ease'
                    },
                    children: "At Granada, we believe every learner has the potential to achieve remarkable things — and we are here to nurture that potential every step of the way."
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-float-img",
                            style: {
                                float: 'right',
                                margin: '0 0 1.2rem 1.5rem',
                                width: 'clamp(280px,38vw,420px)',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(20px)',
                                transition: 'all 0.9s ease 0.2s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        overflow: 'hidden',
                                        minHeight: 'clamp(280px,40vw,400px)'
                                    },
                                    className: "img-hover",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=387",
                                        alt: "Principal",
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderLeft: '3px solid var(--primary)',
                                        paddingLeft: 'clamp(0.8rem,1.5vw,1.2rem)',
                                        paddingTop: 'clamp(0.9rem,1.5vw,1.4rem)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--muted)',
                                                lineHeight: 1.8,
                                                fontSize: 'clamp(0.75rem,0.95vw,0.87rem)',
                                                marginBottom: '0.9rem'
                                            },
                                            children: '"I can think of no greater privilege than guiding this remarkable school community. Granada exists to see every child discover who they are, what they are capable of, and how they can make a difference in the world."'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--primary)',
                                                fontSize: 'clamp(0.6rem,0.75vw,0.68rem)',
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                fontWeight: 700
                                            },
                                            children: [
                                                "The Principal",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--muted)',
                                                        fontWeight: 400,
                                                        textTransform: 'none',
                                                        letterSpacing: 'normal',
                                                        fontSize: 'clamp(0.75rem,1.02vw,0.82rem)'
                                                    },
                                                    children: "Granada School"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(24px)',
                                transition: 'all 0.9s ease 0.1s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        marginBottom: '1.2rem'
                                    },
                                    children: "Granada School is a vibrant learning community located along Kenya's beautiful coast in Vipingo. The school is dedicated to nurturing confident, capable, and compassionate learners who are prepared to thrive in a rapidly changing world."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        marginBottom: '1.2rem'
                                    },
                                    children: "Granada offers Kenya's Competency Based Education (CBE) curriculum, providing learners with a strong national foundation and a holistic, competency-driven academic pathway."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        marginBottom: '1.2rem'
                                    },
                                    children: "Guided by the values of resilience, curiosity, kindness, honesty, and respect, the school focuses on developing the whole child — academically, socially, and morally."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        marginBottom: '2rem'
                                    },
                                    children: "Granada CBE Junior & Senior Girls' Boarding Secondary School also provides boarding facilities for both Junior and Senior School girls, offering a safe and supportive environment for focused learning and personal growth."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '0.75rem',
                                        flexWrap: 'wrap',
                                        clear: 'both'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            className: "btn-solid",
                                            children: "Enquire Now"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/about/vision",
                                            className: "btn-outline",
                                            children: "Our Vision"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(min-width:768px){.section-sidebar{display:block!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 538,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 389,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 379,
        columnNumber: 5
    }, this);
}
_s3(Welcome, "F13CaSPobZONPrVmQ4CA5wuvc/Q=", false, function() {
    return [
        useInView
    ];
});
_c2 = Welcome;
/* ── VISION & MISSION (blue) ───────────────────────────────────────────────── */ function VisionMission() {
    _s4();
    const { ref, vis } = useInView(0.08);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-blue",
        id: "vision",
        ref: ref,
        style: {
            paddingTop: 'clamp(3rem,6vw,5rem)',
            paddingBottom: 'clamp(3rem,6vw,5rem)',
            scrollMarginTop: '100px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                margin: '0 auto',
                padding: 'clamp(1.5rem,2vw,2rem) clamp(1rem,2vw,2rem)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 'clamp(1.5rem,2.5vw,2.75rem)',
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(20px)',
                        transition: 'all 0.8s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag",
                            children: "Purpose & Direction"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-heading",
                            children: [
                                "Vision & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Mission"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 573,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 576,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 564,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: 'clamp(1.2rem,2vw,1.75rem)',
                        marginBottom: 'clamp(1.5rem,2.5vw,2.75rem)'
                    },
                    className: "vision-grid",
                    children: [
                        {
                            tag: 'Vision',
                            title: 'Leading Educational Excellence',
                            tagColor: 'rgba(255,255,255,0.5)',
                            borderColor: 'rgba(255,255,255,0.15)',
                            body: 'To be a leading centre of educational excellence that nurtures innovative thinkers, responsible leaders, and globally minded citizens — equipped to shape communities and contribute meaningfully to a rapidly evolving world.'
                        },
                        {
                            tag: 'Mission',
                            title: 'Holistic & High-Quality Education',
                            tagColor: 'var(--secondary)',
                            borderColor: 'rgba(170,194,12,0.3)',
                            body: 'To provide a holistic and high-quality education that inspires learners to achieve their full potential through academic excellence, strong character development, and a commitment to lifelong learning in a nurturing environment.'
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: 'clamp(1.5rem,2.5vw,2.25rem)',
                                border: `1px solid ${c.borderColor}`,
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'rgba(255,255,255,0.06)',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(32px)',
                                transition: `all 0.9s ease ${i * 0.15}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: c.tagColor
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'inline-block',
                                        fontSize: 'clamp(0.52rem,0.75vw,0.6rem)',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        color: c.tagColor,
                                        fontWeight: 700,
                                        marginBottom: '0.9rem',
                                        border: `1px solid ${c.tagColor}`,
                                        padding: '0.25rem 0.7rem'
                                    },
                                    children: c.tag
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display",
                                    style: {
                                        fontSize: 'clamp(1.35rem,2.2vw,1.6rem)',
                                        fontWeight: 500,
                                        color: '#fff',
                                        lineHeight: 1.2,
                                        marginBottom: '0.9rem'
                                    },
                                    children: c.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    children: c.body
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 603,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 578,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(24px)',
                        transition: 'all 0.9s ease 0.3s'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                marginBottom: '1.75rem',
                                maxWidth: 620
                            },
                            children: "Our strategic pillars bring this vision to life — translating the Granada ethos into everyday learning, personal growth, and inspiring experiences."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3,1fr)',
                                gap: '1px',
                                background: 'rgba(255,255,255,0.12)'
                            },
                            className: "vision-pillars",
                            children: [
                                {
                                    title: 'Character & Wellbeing',
                                    desc: 'Cultivating resilient, ethical, and socially aware learners across all aspects of school life.',
                                    icon: '◆'
                                },
                                {
                                    title: 'Academic Excellence',
                                    desc: 'Delivering personalised, high-performance learning that equips pupils for university and beyond.',
                                    icon: '◇'
                                },
                                {
                                    title: 'Community & Citizenship',
                                    desc: 'Fostering a culture of service, leadership, and responsibility both locally and globally.',
                                    icon: '◈'
                                }
                            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '1.75rem 1.5rem',
                                        background: 'rgba(255,255,255,0.04)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 'clamp(0.88rem,1.2vw,0.98rem)',
                                                color: 'var(--secondary)',
                                                display: 'block',
                                                marginBottom: '0.65rem'
                                            },
                                            children: p.icon
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                fontSize: 'clamp(0.68rem,0.95vw,0.78rem)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.12em',
                                                color: '#fff',
                                                fontWeight: 700,
                                                marginBottom: '0.6rem'
                                            },
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 716,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'rgba(255,255,255,0.72)',
                                                fontSize: 'clamp(0.75rem,1.02vw,0.82rem)',
                                                lineHeight: 1.75,
                                                fontWeight: 300
                                            },
                                            children: p.desc
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 728,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 673,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 658,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(min-width:640px){.vision-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:639px){.vision-pillars{grid-template-columns:1fr!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 742,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 558,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 548,
        columnNumber: 5
    }, this);
}
_s4(VisionMission, "F13CaSPobZONPrVmQ4CA5wuvc/Q=", false, function() {
    return [
        useInView
    ];
});
_c3 = VisionMission;
/* ── CORE VALUES (white) ────────────────────────────────────────────────────── */ function CoreValues() {
    _s5();
    const { ref, vis } = useInView(0.08);
    const values = [
        {
            title: 'Resilience',
            icon: '/resilience.svg',
            color: 'var(--primary)',
            tagline: 'Grow Through Challenge',
            desc: 'We encourage learners to persevere, overcome obstacles, and emerge stronger from every experience. Resilience is the foundation that allows students to face uncertainty with confidence and adapt with grace.',
            extras: [
                'Growth mindset in every classroom',
                'Challenges as opportunities',
                'Perseverance celebrated daily'
            ]
        },
        {
            title: 'Curiosity',
            icon: '/curioisty.svg',
            color: 'var(--secondary)',
            tagline: 'Love of Learning',
            desc: 'We foster a deep love for learning, creativity, and the fearless exploration of new ideas. At Granada, questions are always welcome — curiosity drives discovery, innovation, and lifelong learning.',
            extras: [
                'Inquiry-based learning',
                'Creative problem-solving',
                'Cross-curricular exploration'
            ]
        },
        {
            title: 'Kindness',
            icon: '/kindness.svg',
            color: 'var(--accent-warm)',
            tagline: 'Empathy in Action',
            desc: 'We promote empathy, compassion, and genuine respect for every person within and beyond the school community. Kindness shapes our classroom culture and the character of every graduate.',
            extras: [
                'Peer support programmes',
                'Community outreach',
                'Inclusive school culture'
            ]
        },
        {
            title: 'Honesty',
            icon: '/honesty.svg',
            color: 'var(--accent-green)',
            tagline: 'Integrity Always',
            desc: 'We uphold integrity, accountability, and ethical behaviour in every aspect of school life. We believe trust is earned through honesty — and honest people build honest communities.',
            extras: [
                'Academic integrity policy',
                'Open communication',
                'Ethical leadership training'
            ]
        },
        {
            title: 'Respect',
            icon: '/respect.svg',
            color: 'var(--accent-blue)',
            tagline: 'Valuing Every Voice',
            desc: 'We celebrate diversity, nurture positive relationships, and create a supportive environment where every individual is seen and valued. Respect connects our community across backgrounds and aspirations.',
            extras: [
                'Cultural celebrations',
                'Student voice programmes',
                'Anti-bullying commitment'
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cream",
        id: "values",
        ref: ref,
        style: {
            paddingTop: 'clamp(3rem,6vw,5rem)',
            paddingBottom: 'clamp(3rem,6vw,5rem)',
            scrollMarginTop: '100px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                margin: '0 auto',
                padding: 'clamp(1.5rem,2vw,2rem) clamp(1rem,2vw,2rem)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 'clamp(1.5rem,2.5vw,2.75rem)',
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(20px)',
                        transition: 'all 0.8s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag",
                            children: "What Guides Us"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 838,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-heading",
                            children: [
                                "Our Core ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Values"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 840,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 839,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 842,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                maxWidth: 560
                            },
                            children: "Five key values shape every interaction, every lesson, and every ambition we hold for our learners."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 830,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5,1fr)',
                        gap: '1px',
                        background: '#dddbd8',
                        marginBottom: 'clamp(1.5rem,2.5vw,2.5rem)'
                    },
                    children: values.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#fff',
                                padding: 'clamp(1rem,1.5vw,1.75rem) clamp(0.8rem,1.2vw,1.35rem)',
                                borderTop: `3px solid ${v.color}`,
                                position: 'relative',
                                overflow: 'hidden',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(32px)',
                                transition: `all 0.9s ease ${i * 0.1}s`
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = '#f9f8f6',
                            onMouseLeave: (e)=>e.currentTarget.style.background = '#fff',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: -24,
                                        right: -14,
                                        width: 70,
                                        height: 70,
                                        borderRadius: '50%',
                                        background: v.color,
                                        opacity: 0.07
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 876,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: v.icon,
                                    alt: v.title,
                                    width: 100,
                                    height: 100,
                                    style: {
                                        display: 'block',
                                        marginBottom: 'clamp(0.5rem,0.8vw,0.85rem)',
                                        width: 'clamp(2.9rem,3.9vw,3.9rem)',
                                        height: 'auto'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 888,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: 'clamp(0.65rem,0.8vw,0.82rem)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.14em',
                                        color: 'var(--body-text)',
                                        fontWeight: 700,
                                        marginBottom: '0.25rem'
                                    },
                                    children: v.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(0.55rem,0.75vw,0.62rem)',
                                        color: v.color,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        marginBottom: 'clamp(0.5rem,0.8vw,0.85rem)'
                                    },
                                    children: v.tagline
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        fontSize: 'clamp(0.65rem,0.85vw,0.79rem)',
                                        marginBottom: 'clamp(0.6rem,0.9vw,0.9rem)'
                                    },
                                    children: v.desc
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 924,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: 'none',
                                        padding: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.35rem'
                                    },
                                    children: v.extras.map((e, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.45rem',
                                                color: 'var(--muted)',
                                                fontSize: 'clamp(0.6rem,0.75vw,0.7rem)',
                                                lineHeight: 1.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: v.color,
                                                        flexShrink: 0,
                                                        marginTop: 1
                                                    },
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 21
                                                }, this),
                                                e
                                            ]
                                        }, j, true, {
                                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                            lineNumber: 943,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 933,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 858,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 848,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(max-width:768px){#values>div>div:nth-of-type(2){grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){#values>div>div:nth-of-type(2){grid-template-columns:1fr!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 966,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 824,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 814,
        columnNumber: 5
    }, this);
}
_s5(CoreValues, "F13CaSPobZONPrVmQ4CA5wuvc/Q=", false, function() {
    return [
        useInView
    ];
});
_c4 = CoreValues;
/* ── OUR STORY (white) ──────────────────────────────────────────────────────── */ function OurStory() {
    _s6();
    const { ref, vis } = useInView(0.08);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cream",
        id: "history",
        ref: ref,
        style: {
            paddingTop: 'clamp(3rem,6vw,5rem)',
            paddingBottom: 'clamp(3rem,6vw,5rem)',
            scrollMarginTop: '100px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                margin: '0 auto',
                padding: 'clamp(1.5rem,2vw,2rem) clamp(1rem,2vw,2rem)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header-block",
                    style: {
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(20px)',
                        transition: 'all 0.8s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag",
                            children: "Our Story"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1000,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-heading",
                            children: [
                                "Rooted in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Vipingo"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1002,
                                    columnNumber: 23
                                }, this),
                                ",",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1002,
                                    columnNumber: 40
                                }, this),
                                "Reaching the World"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1001,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1005,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 992,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-float-img",
                            style: {
                                float: 'left',
                                margin: '0 1.5rem 1.2rem 0',
                                width: 'clamp(260px,38vw,420px)',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateX(-24px)',
                                transition: 'all 0.9s ease'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-hover",
                                style: {
                                    overflow: 'hidden',
                                    height: 'clamp(320px,50vw,400px)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/class.jpeg",
                                    alt: "",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 1019,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1008,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(20px)',
                                transition: 'all 0.9s ease 0.15s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        marginBottom: '1.1rem'
                                    },
                                    children: "Granada School was founded on a simple but powerful conviction: that every child deserves access to a world-class education. Situated in the serene coastal environment of Vipingo, Kilifi County, the school was established to serve the growing families of Kenya and around the world."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        marginBottom: '1.1rem'
                                    },
                                    children: "From its earliest days, Granada has been committed to academic rigour, character formation, and community involvement. The school's CBE curriculum — aligned with Kenya's national framework — was designed to open doors for learners both locally and globally."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-text",
                                    style: {
                                        marginBottom: '2rem'
                                    },
                                    children: "Today, Granada stands as a testament to what a school can become when vision, dedication, and community come together. Every day, our learners write the next chapter of a story that began on the beautiful Kenya coast — and whose impact reaches far beyond it."
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1051,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/#campus",
                                    className: "btn-solid",
                                    children: "Explore Our Campus"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1057,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1030,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                clear: 'both'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1061,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1007,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(max-width:768px){#history .section-float-img{float:none!important;width:100%!important;margin:0 0 1.2rem 0!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1063,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 986,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 976,
        columnNumber: 5
    }, this);
}
_s6(OurStory, "F13CaSPobZONPrVmQ4CA5wuvc/Q=", false, function() {
    return [
        useInView
    ];
});
_c5 = OurStory;
/* ── BOARDING (blue) ─────────────────────────────────────────────────────────── */ function Boarding() {
    _s7();
    const { ref, vis } = useInView(0.08);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-blue",
        id: "boarding",
        ref: ref,
        style: {
            paddingTop: 'clamp(3rem,6vw,5rem)',
            paddingBottom: 'clamp(3rem,6vw,5rem)',
            scrollMarginTop: '100px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                margin: '0 auto',
                padding: 'clamp(1.5rem,2vw,2rem) clamp(1rem,2vw,2rem)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header-block",
                    style: {
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(20px)',
                        transition: 'all 0.8s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag",
                            children: "Junior & Senior School Girls"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1097,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-heading",
                            children: [
                                "A Home Away ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "From Home"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1098,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1089,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: vis ? 1 : 0,
                        transition: 'all 0.9s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-float-img",
                            style: {
                                float: 'right',
                                margin: '0 0 1.2rem 1.5rem',
                                width: 'clamp(280px,38vw,420px)',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateX(24px)',
                                transition: 'all 0.9s ease 0.15s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-hover",
                                style: {
                                    overflow: 'hidden',
                                    minHeight: 'clamp(300px,50vw,420px)',
                                    height: '100%'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/dorm.jpeg",
                                    alt: "Boarding",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 1116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                marginBottom: '1.1rem'
                            },
                            children: "Granada provides boarding facilities for Junior and Senior School girls — a safe, structured, and nurturing environment designed for focused learning and personal growth."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                marginBottom: '1.1rem'
                            },
                            children: "Our boarding community is built on trust, discipline, and genuine care. Boarders enjoy a well-balanced daily schedule that blends academic preparation, recreation, and supervised evening study."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                marginBottom: '2rem'
                            },
                            children: "From weekend activities to cultural events, boarding life at Granada shapes independence, resilience, and lifelong friendships — preparing girls for the challenges and opportunities that lie ahead."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact?type=admissions",
                            className: "btn-solid",
                            style: {
                                clear: 'both',
                                display: 'inline-block'
                            },
                            children: "Enquire About Boarding"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,1fr)',
                        gap: '1px',
                        background: 'rgba(255,255,255,0.12)',
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(24px)',
                        transition: 'all 0.9s ease 0.25s',
                        clear: 'both',
                        marginTop: 'clamp(2rem,3vw,3rem)'
                    },
                    children: [
                        {
                            title: 'Safe & Secure',
                            icon: '🏠',
                            desc: "Staffed around the clock by caring adults committed to every boarder's safety and comfort."
                        },
                        {
                            title: 'Structured Routine',
                            icon: '📋',
                            desc: 'A balanced daily schedule blending academics, meals, recreation, and supervised evening study.'
                        },
                        {
                            title: 'Personal Growth',
                            icon: '🌟',
                            desc: 'Boarding life builds independence, resilience, and lifelong friendships.'
                        },
                        {
                            title: 'Academic Support',
                            icon: '📚',
                            desc: 'Evening prep sessions supervised by experienced staff to keep learners motivated and on track.'
                        },
                        {
                            title: 'Vibrant Community',
                            icon: '🤝',
                            desc: 'Weekend activities and cultural events where girls from diverse backgrounds come together.'
                        },
                        {
                            title: 'Healthy Nutrition',
                            icon: '🥗',
                            desc: 'Nutritious, well-balanced meals prepared to support the energy needs of active learners.'
                        }
                    ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: 'clamp(1rem,1.5vw,1.6rem) clamp(0.9rem,1.2vw,1.4rem)',
                                background: 'rgba(255,255,255,0.04)',
                                transition: 'background 0.25s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.09)',
                            onMouseLeave: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.04)',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 'clamp(1.1rem,1.8vw,1.4rem)',
                                        display: 'block',
                                        marginBottom: 'clamp(0.4rem,0.6vw,0.6rem)'
                                    },
                                    children: b.icon
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontSize: 'clamp(0.65rem,0.75vw,0.75rem)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        color: '#fff',
                                        fontWeight: 700,
                                        marginBottom: '0.5rem'
                                    },
                                    children: b.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'rgba(255,255,255,0.72)',
                                        fontSize: 'clamp(0.65rem,0.85vw,0.8rem)',
                                        lineHeight: 1.75,
                                        fontWeight: 300
                                    },
                                    children: b.desc
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1235,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1200,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(max-width:768px){#boarding>div>div:last-child{grid-template-columns:1fr 1fr!important}}@media(max-width:500px){#boarding>div>div:last-child{grid-template-columns:1fr!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1248,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1083,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 1073,
        columnNumber: 5
    }, this);
}
_s7(Boarding, "F13CaSPobZONPrVmQ4CA5wuvc/Q=", false, function() {
    return [
        useInView
    ];
});
_c6 = Boarding;
/* ── STAFF (white) ────────────────────────────────────────────────────────── */ function StaffSnapshot() {
    _s8();
    const { ref, vis } = useInView(0.08);
    const staff = [
        {
            name: 'The Principal',
            role: 'Head of School',
            img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=387'
        },
        {
            name: 'Director of Academics',
            role: 'Academic Leadership',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
        },
        {
            name: 'Head of CBE',
            role: 'CBE Programme Coordinator',
            img: 'https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=869'
        },
        {
            name: 'Head of Boarding',
            role: 'Boarding Programme Lead',
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cream",
        id: "staff",
        ref: ref,
        style: {
            paddingTop: 'clamp(3rem,6vw,5rem)',
            paddingBottom: 'clamp(3rem,6vw,5rem)',
            scrollMarginTop: '100px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                margin: '0 auto',
                padding: 'clamp(1.5rem,2vw,2rem) clamp(1rem,2vw,2rem)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 'clamp(1.5rem,2.5vw,2.5rem)',
                        opacity: vis ? 1 : 0,
                        transform: vis ? 'none' : 'translateY(16px)',
                        transition: 'all 0.8s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag",
                            children: "The People Behind Granada"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1304,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-heading",
                            children: [
                                "Staff & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Leadership"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1306,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-text",
                            style: {
                                maxWidth: 560
                            },
                            children: "Our dedicated team of educators brings together expertise, passion, and a shared commitment to every learner's journey."
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1309,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1296,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        gap: 'clamp(0.9rem,1.5vw,1.4rem)'
                    },
                    children: staff.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'none' : 'translateY(32px)',
                                transition: `all 0.9s ease ${i * 0.1}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "img-hover",
                                    style: {
                                        overflow: 'hidden',
                                        minHeight: 'clamp(220px,35vw,280px)',
                                        height: '100%',
                                        marginBottom: 'clamp(0.6rem,1vw,0.9rem)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: s.img,
                                        alt: s.name,
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                        lineNumber: 1339,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1330,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontSize: 'clamp(0.72rem,1vw,0.84rem)',
                                        color: 'var(--body-text)',
                                        fontWeight: 700,
                                        marginBottom: '0.2rem'
                                    },
                                    children: s.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(0.6rem,0.8vw,0.68rem)',
                                        color: 'var(--primary)',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700
                                    },
                                    children: s.role
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1360,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                            lineNumber: 1322,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1314,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@media(max-width:768px){#staff>div:nth-of-type(2){grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){#staff>div:nth-of-type(2){grid-template-columns:1fr!important}}`
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                    lineNumber: 1374,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1290,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 1280,
        columnNumber: 5
    }, this);
}
_s8(StaffSnapshot, "F13CaSPobZONPrVmQ4CA5wuvc/Q=", false, function() {
    return [
        useInView
    ];
});
_c7 = StaffSnapshot;
/* ── PAGE CTA ─────────────────────────────────────────────────────────────── */ function PageCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/building2.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 1384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(33,53,88,0.9)'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 1394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: 800,
                    margin: '0 auto',
                    textAlign: 'center',
                    padding: 'clamp(3rem,5vw,5.5rem) clamp(1rem,2vw,2rem)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--accent-light)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3em',
                            fontSize: 'clamp(0.55rem,0.85vw,0.62rem)',
                            fontWeight: 700,
                            marginBottom: 'clamp(0.9rem,1.5vw,1.4rem)'
                        },
                        children: "Ready to Begin?"
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 1411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display",
                        style: {
                            fontSize: 'clamp(1.8rem,3.8vw,3rem)',
                            fontWeight: 400,
                            color: '#fff',
                            lineHeight: 1.3,
                            marginBottom: 'clamp(1.5rem,2.25vw,2.25rem)'
                        },
                        children: [
                            "Are you ready to feel the",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--accent-light)'
                                },
                                children: "difference?"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 1434,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 1423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.9rem',
                            flexWrap: 'wrap'
                        },
                        children: [
                            {
                                l: 'Enquire',
                                h: '/contact'
                            },
                            {
                                l: 'Visit Granada',
                                h: '/contact?type=visit'
                            },
                            {
                                l: 'Apply Now',
                                h: '/admissions/apply'
                            }
                        ].map(({ l, h })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: h,
                                style: {
                                    display: 'inline-block',
                                    padding: '0.7rem 1.75rem',
                                    background: 'transparent',
                                    border: '1px solid rgba(255,255,255,0.55)',
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.14em',
                                    fontSize: 'clamp(0.62rem,0.88vw,0.7rem)',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    fontFamily: 'inherit'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.15)',
                                onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                                children: l
                            }, l, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 1449,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 1436,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 1401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
        lineNumber: 1383,
        columnNumber: 5
    }, this);
}
_c8 = PageCTA;
/* ── PAGE ROOT ────────────────────────────────────────────────────────────── */ /* ── PAGE ───────────────────────────────────────────────────────────────────────── */ const SECTION_MAP = {
    welcome: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Welcome, {}, void 0, false, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1485,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0)),
    vision: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisionMission, {}, void 0, false, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1486,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)),
    values: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoreValues, {}, void 0, false, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1487,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)),
    history: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OurStory, {}, void 0, false, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1488,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0)),
    boarding: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Boarding, {}, void 0, false, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1489,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0)),
    staff: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StaffSnapshot, {}, void 0, false, {
            fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
            lineNumber: 1490,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0))
};
function AboutPage() {
    _s9();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const section = params.section || 'welcome';
    const renderSection = SECTION_MAP[section] || SECTION_MAP['welcome'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SchoolNavbar$3e$__["SchoolNavbar"], {
                scrolledLogo: "/g-school.svg",
                clearLogo: "/g-school-dark.svg",
                logoAlt: "Granada School",
                logoHref: "/granada-school",
                navItems: NAV_ITEMS,
                quickLinks: [
                    {
                        label: 'Parents',
                        href: '/contact'
                    },
                    {
                        label: 'Enquire',
                        href: '/contact'
                    },
                    {
                        label: 'Contact us',
                        href: '/contact'
                    }
                ],
                enquireHref: "/contact",
                applyHref: "/admissions/apply",
                sideImage: "/building.jpeg",
                sideImageAlt: "Granada School"
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 1499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    background: 'var(--body-bg)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {}, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 1516,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: '0 auto',
                            padding: '0 clamp(1rem,2vw,2rem)',
                            display: 'flex',
                            gap: 'clamp(2rem,3vw,3.5rem)',
                            alignItems: 'flex-start'
                        },
                        className: "section-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionNav, {}, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 1527,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: 'sectionFadeIn 0.45s ease'
                                    },
                                    children: renderSection()
                                }, section, false, {
                                    fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                    lineNumber: 1529,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                                lineNumber: 1528,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                        lineNumber: 1517,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 1515,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageCTA, {}, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 1538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$SchoolFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SchoolFooter$3e$__["SchoolFooter"], {
                logoSrc: "/g-school-dark.svg",
                logoAlt: "Granada School",
                logoHref: "/granada-school",
                tagline: "CBE Junior & Senior Girls' Boarding Secondary School.",
                schoolName: "Granada School",
                curriculumLinks: [
                    'CBC Kenya',
                    'Early Years',
                    'Primary School',
                    'Junior School',
                    'Senior School'
                ],
                footerColsClass: "footer-cols"
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/app/about/[section]/page.tsx",
                lineNumber: 1539,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s9(AboutPage, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c9 = AboutPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "PageHero");
__turbopack_context__.k.register(_c1, "SectionNav");
__turbopack_context__.k.register(_c2, "Welcome");
__turbopack_context__.k.register(_c3, "VisionMission");
__turbopack_context__.k.register(_c4, "CoreValues");
__turbopack_context__.k.register(_c5, "OurStory");
__turbopack_context__.k.register(_c6, "Boarding");
__turbopack_context__.k.register(_c7, "StaffSnapshot");
__turbopack_context__.k.register(_c8, "PageCTA");
__turbopack_context__.k.register(_c9, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0-yy7py._.js.map