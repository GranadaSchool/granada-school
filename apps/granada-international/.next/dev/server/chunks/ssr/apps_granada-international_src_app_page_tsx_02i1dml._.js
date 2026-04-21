module.exports = [
"[project]/apps/granada-international/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
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
const containerVariants = {
    hidden: {
        opacity: 0,
        x: 30
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.95,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: {
            duration: 0.4
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        x: 18
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25
        }
    }
};
/* ── useInView ─────────────────────────────────────────────────────────────── */ function useInView(threshold = 0.15) {
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
/* ── HERO ──────────────────────────────────────────────────────────────────── */ function Hero() {
    const navItems = Array.isArray(NAV_ITEMS) ? NAV_ITEMS : [];
    const [selectedIdx, setSelectedIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [displayIdx, setDisplayIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileCol, setMobileCol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const prevIdxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 👉 hover preselect (80ms delay)
    const hoverTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoverIdx, setHoverIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const slides = [
        {
            bg: '/building.jpeg',
            label: 'Inspiring Excellence'
        },
        {
            bg: '/class.jpeg',
            label: 'CBE Curriculum'
        },
        {
            bg: '/sports.jpeg',
            label: 'Vipingo, Kenya'
        },
        {
            bg: '/dorm.jpeg',
            label: 'Values-Based Education'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoaded(true);
        const t = setInterval(()=>setActive((a)=>(a + 1) % slides.length), 6500);
        return ()=>clearInterval(t);
    }, []);
    const handleNavClick = (idx)=>{
        prevIdxRef.current = selectedIdx;
        if (selectedIdx === idx) {
            setSelectedIdx(null);
            setDisplayIdx(null);
            setMobileCol(1);
            return;
        }
        setSelectedIdx(idx);
        // 🚀 FIX: prevents col2 flicker/pulse bug
        setDisplayIdx((prev)=>{
            setTimeout(()=>{
                setDisplayIdx(idx);
            }, 80);
            return prev;
        });
        setMobileCol(2);
    };
    // 👉 direction-aware animation
    const getDirection = (idx)=>{
        if (prevIdxRef.current === null || idx === null) return 1;
        return idx > prevIdxRef.current ? 1 : -1;
    };
    const childVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.4
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 6
        },
        show: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -6
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            position: 'relative',
            height: '100vh',
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
                        transition: 'opacity 2s cubic-bezier(0.45, 0, 0.55, 1)',
                        animation: 'kenBurns 14s ease-in-out infinite alternate',
                        willChange: 'opacity, transform'
                    }
                }, i, false, {
                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(105deg, rgba(13,12,13,0.85) 0%, rgba(13,12,13,0.6) 45%, rgba(13,12,13,0.38) 70%, transparent 100%)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 'clamp(1.2rem,3vh,2rem) 0',
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/g-school-dark.svg",
                    alt: "Granada CBE",
                    width: 120,
                    height: 54,
                    style: {
                        height: 'auto',
                        width: 'clamp(180px,7vw,190px)',
                        flexShrink: 0
                    },
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 15,
                    height: '70vh',
                    padding: '0 clamp(1.5rem,4vw,4rem)',
                    display: 'flex',
                    alignItems: 'center',
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'none' : 'translateY(30px)',
                    transition: 'all 1s ease 0.2s',
                    marginTop: 'clamp(7.5rem,10vh,8rem)',
                    overflowX: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-nav-desktop",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-col-scroll",
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 14,
                                minWidth: 700,
                                overflowY: 'auto',
                                maxHeight: '60vh',
                                paddingTop: '2rem',
                                paddingBottom: '2rem',
                                alignSelf: 'stretch',
                                overflowX: 'hidden'
                            },
                            children: navItems.map((item, idx)=>{
                                const active = selectedIdx === idx;
                                const hovered = hoverIdx === idx;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onHoverStart: ()=>{
                                                hoverTimer.current = setTimeout(()=>setHoverIdx(idx), 80);
                                            },
                                            onHoverEnd: ()=>{
                                                if (hoverTimer.current) clearTimeout(hoverTimer.current);
                                                setHoverIdx(null);
                                            },
                                            onClick: ()=>handleNavClick(idx),
                                            animate: {
                                                x: active ? 28 : hovered ? 5 : 0
                                            },
                                            transition: {
                                                type: 'spring',
                                                stiffness: 260,
                                                damping: 22
                                            },
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 10,
                                                background: 'none',
                                                border: 'none',
                                                color: selectedIdx === idx ? '#e2c215' : '#fff',
                                                fontSize: 'clamp(1.95rem,1.8vw,2.1rem)',
                                                fontWeight: 700,
                                                letterSpacing: '0.07em',
                                                textTransform: 'uppercase',
                                                cursor: 'pointer',
                                                padding: '0.15em 0',
                                                textAlign: 'left',
                                                fontFamily: 'inherit',
                                                flexShrink: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        position: 'relative',
                                                        display: 'inline-block'
                                                    },
                                                    children: [
                                                        item.label,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            layoutId: "underline",
                                                            style: {
                                                                position: 'absolute',
                                                                left: 0,
                                                                bottom: -3,
                                                                height: 2,
                                                                width: '100%',
                                                                background: '#e2c215',
                                                                borderRadius: 0
                                                            },
                                                            initial: false,
                                                            animate: {
                                                                scaleX: active ? 1 : 0
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
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
                                                                fill: selectedIdx === idx ? '#e2c215' : '#ffffff'
                                                            },
                                                            transition: {
                                                                duration: 0.2
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 23
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
                                                                originX: '50%',
                                                                originY: '50%'
                                                            },
                                                            transition: {
                                                                duration: 0.25
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 23
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
                                                                originX: '50%',
                                                                originY: '50%'
                                                            },
                                                            transition: {
                                                                duration: 0.25
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: selectedIdx === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    height: 'auto',
                                                    opacity: 1
                                                },
                                                exit: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: 1.5,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1
                                                    ]
                                                },
                                                style: {
                                                    overflow: 'hidden',
                                                    paddingLeft: '2.5rem',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 2
                                                },
                                                children: item.children?.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: child.href,
                                                        style: {
                                                            padding: '0.4rem 0.5rem',
                                                            color: '#ccc',
                                                            textDecoration: 'none',
                                                            fontSize: 'clamp(1rem,1vw,2rem)',
                                                            fontWeight: 500,
                                                            letterSpacing: '0.04em',
                                                            transition: 'color 0.2s'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.color = '#e2c215';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.color = '#ccc';
                                                        },
                                                        children: child.label
                                                    }, child.label, false, {
                                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                lineNumber: 476,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                            lineNumber: 474,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-nav-mobile",
                        style: {
                            width: '100%',
                            display: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: mobileCol === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        x: -40,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        x: -40,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.35
                                    },
                                    className: "nav-col-scroll",
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 14,
                                        maxHeight: '60vh',
                                        overflowY: 'auto'
                                    },
                                    children: navItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onHoverStart: ()=>{
                                                hoverTimer.current = setTimeout(()=>setHoverIdx(idx), 80);
                                            },
                                            onHoverEnd: ()=>{
                                                if (hoverTimer.current) clearTimeout(hoverTimer.current);
                                                setHoverIdx(null);
                                            },
                                            onClick: ()=>handleNavClick(idx),
                                            transition: {
                                                type: 'spring',
                                                stiffness: 260,
                                                damping: 22
                                            },
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 10,
                                                background: 'none',
                                                border: 'none',
                                                color: selectedIdx === idx ? '#e2c215' : '#fff',
                                                fontSize: 'clamp(0.85rem,1.1vw,1.1rem)',
                                                fontWeight: 700,
                                                letterSpacing: '0.07em',
                                                textTransform: 'uppercase',
                                                cursor: 'pointer',
                                                padding: '0.6em 0',
                                                textAlign: 'left',
                                                fontFamily: 'inherit',
                                                flexShrink: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        position: 'relative',
                                                        display: 'inline-block'
                                                    },
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 21
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
                                                                fill: selectedIdx === idx ? '#e2c215' : '#ffffff'
                                                            },
                                                            transition: {
                                                                duration: 0.25
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                                            x1: "9",
                                                            y1: "14",
                                                            x2: "19",
                                                            y2: "14",
                                                            stroke: "#0b1b3b",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                                            x1: "14",
                                                            y1: "9",
                                                            x2: "14",
                                                            y2: "19",
                                                            stroke: "#0b1b3b",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            animate: {
                                                                opacity: selectedIdx === idx ? 0 : 1,
                                                                rotate: selectedIdx === idx ? 90 : 0
                                                            },
                                                            style: {
                                                                originX: '50%',
                                                                originY: '50%'
                                                            },
                                                            transition: {
                                                                duration: 0.25
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                            lineNumber: 551,
                                            columnNumber: 19
                                        }, this))
                                }, "col1", false, {
                                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: mobileCol === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        x: 40,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        x: 40,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.35
                                    },
                                    className: "nav-col-scroll",
                                    style: {
                                        overflowY: 'auto',
                                        maxHeight: '60vh'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileCol(1),
                                            style: {
                                                color: '#e2c215'
                                            },
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                            lineNumber: 658,
                                            columnNumber: 17
                                        }, this),
                                        navItems[selectedIdx]?.children?.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: child.href,
                                                style: {
                                                    display: 'block',
                                                    padding: '0.6rem 0',
                                                    color: '#fff'
                                                },
                                                children: child.label
                                            }, child.label, false, {
                                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, "col2", true, {
                                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/page.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
/* ── TAGLINE STRIP ─────────────────────────────────────────────────────────── */ function TaglineStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-blue",
        style: {
            padding: 'clamp(0.8rem,1.2vw,1.2rem) clamp(1rem,2vw,2rem)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(1.5rem,3vw,2.5rem)',
                flexWrap: 'wrap',
                alignItems: 'center'
            },
            children: [
                'Academic Excellence · CBE',
                "Safe Girls' Boarding Environment",
                'Holistic Character Formation',
                'Every Learner Rises'
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
                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                            lineNumber: 718,
                            columnNumber: 13
                        }, this),
                        i < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                background: 'var(--secondary)',
                                flexShrink: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                            lineNumber: 731,
                            columnNumber: 15
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                    lineNumber: 710,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/apps/granada-international/src/app/page.tsx",
            lineNumber: 694,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-international/src/app/page.tsx",
        lineNumber: 690,
        columnNumber: 5
    }, this);
}
/* ── WELCOME ───────────────────────────────────────────────────────────────── */ function Welcome() {
    const { ref, vis } = useInView(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cream",
        id: "about",
        ref: ref,
        style: {
            padding: 'clamp(3rem,6vw,6rem) clamp(1rem,2vw,2rem)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 'clamp(2rem,4vw,6rem)',
                    alignItems: 'center'
                },
                className: "welcome-grid",
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
                                children: "Our Story"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-heading",
                                children: [
                                    "A Unique Blend of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Discipline + Purpose"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 777,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 776,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 779,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-text",
                                style: {
                                    marginBottom: 'clamp(0.8rem,1.2vw,1.25rem)'
                                },
                                children: "Located along Kenya's beautiful coast in Vipingo, Granada CBE Junior & Senior Girls' Boarding Secondary School is dedicated to nurturing confident, disciplined, and high-achieving young women under the Competency-Based Education (CBE) framework."
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 780,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-text",
                                style: {
                                    marginBottom: 'clamp(0.8rem,1.2vw,1.25rem)'
                                },
                                children: "Our boarding environment provides a safe, structured, and supportive space where learners grow academically, socially, emotionally, and spiritually — in a community built on sisterhood and shared values."
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 789,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-text",
                                style: {
                                    marginBottom: 'clamp(1.5rem,2.5vw,2rem)'
                                },
                                children: "We believe every girl carries within her immense potential. Through quality education, structured boarding life, and a values-driven environment, we unlock that potential — raising learners who are academically strong, morally grounded, and ready to lead."
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 797,
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
                                        href: "/about",
                                        className: "btn-solid",
                                        style: {
                                            fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                            padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                                        },
                                        children: "About Granada"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 813,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/about#vision",
                                        className: "btn-outline",
                                        style: {
                                            fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                            padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                                        },
                                        children: "Our Vision"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 806,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: vis ? 1 : 0,
                            transform: vis ? 'none' : 'translateY(30px)',
                            transition: 'all 0.9s ease 0.15s',
                            height: 'clamp(350px,52vw,440px)',
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
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top,rgba(33,53,88,0.3),transparent 60%)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 854,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 845,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: '-16px',
                                    left: '-16px',
                                    width: 90,
                                    height: 90,
                                    background: 'var(--secondary)',
                                    opacity: 0.18,
                                    zIndex: -1,
                                    display: 'none'
                                },
                                className: "welcome-accent"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 863,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 758,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@media(min-width:768px){.welcome-grid{grid-template-columns:1fr 1fr!important}.welcome-accent{display:block!important}}`
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/page.tsx",
        lineNumber: 752,
        columnNumber: 5
    }, this);
}
/* ── CURRICULUM ────────────────────────────────────────────────────────────── */ function Curriculum() {
    const { ref, vis } = useInView(0.1);
    const curricula = [
        {
            title: 'CBE',
            subtitle: 'Competency Based Education',
            desc: "Kenya's national framework building strong local foundations, nurturing 21st-century skills through competency-driven, holistic learning.",
            color: 'var(--primary)',
            border: 'rgba(33,53,88,0.2)',
            features: [
                'Holistic Development',
                'Local Relevance',
                'Values-Based Learning',
                'STEM Integration'
            ]
        },
        {
            title: 'Boarding',
            subtitle: 'Structured Boarding Programme',
            desc: 'A secure home-away-from-home with trained matrons, supervised prep sessions, nutritious meals, counselling support, and a strong sisterhood community.',
            color: 'var(--accent-warm)',
            border: 'rgba(147,108,81,0.2)',
            features: [
                'Safe Supervised Dormitories',
                'Structured Prep Sessions',
                'Pastoral Care & Counselling',
                'Balanced Meals & Routines'
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cream",
        id: "curriculum",
        ref: ref,
        style: {
            padding: 'clamp(3rem,6vw,6rem) clamp(1rem,2vw,2rem)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%'
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
                                children: "Academic Pathways"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 932,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-heading",
                                children: [
                                    "CBE Curriculum. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "World-Class Standards."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 934,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 933,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-text",
                                style: {
                                    maxWidth: 1240,
                                    margin: 'clamp(0.8rem,1.5vw,1.25rem) auto 0'
                                },
                                children: "Granada implements Kenya's Competency-Based Education framework with a focus on mastery, critical thinking, and real-world application — preparing every learner for a dynamic future."
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 936,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 923,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 'clamp(1.2rem,2vw,1.75rem)'
                        },
                        className: "curriculum-grid",
                        children: curricula.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    border: `1px solid ${c.border}`,
                                    padding: 'clamp(1.5rem,2.5vw,2.5rem)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    background: '#fff',
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? 'none' : 'translateY(36px)',
                                    transition: `all 0.9s ease ${i * 0.15}s`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 3,
                                            background: c.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 970,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: -50,
                                            right: -20,
                                            width: 140,
                                            height: 140,
                                            borderRadius: '50%',
                                            background: c.color,
                                            opacity: 0.05
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 980,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display",
                                        style: {
                                            fontSize: 'clamp(2rem,3vw,2.8rem)',
                                            fontWeight: 700,
                                            color: c.color,
                                            lineHeight: 1,
                                            marginBottom: 'clamp(0.2rem,0.5vw,0.35rem)'
                                        },
                                        children: c.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 992,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 'clamp(0.6rem,0.8vw,0.68rem)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.2em',
                                            fontWeight: 700,
                                            color: 'var(--muted)',
                                            marginBottom: 'clamp(0.8rem,1.5vw,1.25rem)'
                                        },
                                        children: c.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "body-text",
                                        style: {
                                            marginBottom: 'clamp(1.2rem,1.75vw,1.75rem)',
                                            fontSize: 'clamp(0.85rem,1vw,1rem)'
                                        },
                                        children: c.desc
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1016,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: 'none',
                                            padding: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 'clamp(0.3rem,0.6vw,0.5rem)'
                                        },
                                        children: c.features.map((f, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 'clamp(0.5rem,0.8vw,0.7rem)',
                                                    color: 'var(--body-text)',
                                                    fontSize: 'clamp(0.75rem,0.9vw,0.82rem)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: 6,
                                                            height: 6,
                                                            background: c.color,
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                        lineNumber: 1045,
                                                        columnNumber: 21
                                                    }, this),
                                                    f
                                                ]
                                            }, j, true, {
                                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1025,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 957,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 948,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 922,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@media(min-width:768px){.curriculum-grid{grid-template-columns:1fr 1fr!important}}`
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 1061,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/page.tsx",
        lineNumber: 916,
        columnNumber: 5
    }, this);
}
/* ── PILLARS (blue bg) ─────────────────────────────────────────────────────── */ function Pillars() {
    const { ref, vis } = useInView(0.1);
    const items = [
        {
            title: 'Modern Learning Environments',
            desc: 'Purpose-built classrooms, labs, and creative spaces designed to inspire curiosity and collaborative learning.',
            img: '/class.jpeg',
            tag: 'Facilities'
        },
        {
            title: 'Dedicated Educators',
            desc: "Passionate, qualified teachers committed to every learner's journey — inside and outside the classroom.",
            img: '/staffroom.jpeg',
            tag: 'Teaching'
        },
        {
            title: 'Supportive Community',
            desc: 'A warm, inclusive culture where every student feels seen, valued, and empowered to thrive.',
            img: '/dorm.jpeg',
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
                    width: '100%'
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
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-heading",
                                        children: [
                                            "Excellence in ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "Every Detail"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                lineNumber: 1116,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 1107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about",
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
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 1119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 1097,
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
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top,rgba(13,12,13,0.88) 0%,rgba(13,12,13,0.15) 65%,transparent 100%)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1168,
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
                                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                            lineNumber: 1183,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1176,
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
                                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                lineNumber: 1207,
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
                                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                                lineNumber: 1219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                        lineNumber: 1198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                                lineNumber: 1150,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 1140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 1096,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@media(min-width:768px){.pillars-grid{grid-template-columns:repeat(3,1fr)!important}.pillars-grid>div{height:clamp(280px,35vw,420px)!important}}`
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 1233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/page.tsx",
        lineNumber: 1090,
        columnNumber: 5
    }, this);
}
/* ── QUOTE BANNER ──────────────────────────────────────────────────────────── */ function QuoteBanner() {
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
                    backgroundImage: 'url(/building.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 1248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(33,53,88,0.88)'
                }
            }, void 0, false, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 1258,
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
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 1274,
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
                        children: '"We are committed to inspiring excellence and preparing learners for a successful future — today, tomorrow, and beyond."'
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 1286,
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
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 1299,
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
                        children: "Granada CBE Junior & Senior Girls' Boarding Secondary School — Vipingo, Kenya"
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-international/src/app/page.tsx",
                        lineNumber: 1307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-international/src/app/page.tsx",
                lineNumber: 1265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-international/src/app/page.tsx",
        lineNumber: 1241,
        columnNumber: 5
    }, this);
}
// /* ── COMMUNITY (white bg) ──────────────────────────────────────────────────── */
// function Community(){
//   const {ref,vis}=useInView(0.1);
//   return(
//     <section className="section-cream" id="community" ref={ref} style={{padding:"clamp(3rem,6vw,6rem) clamp(1rem,2vw,2rem)"}}>
//       <div style={{maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr",gap:"clamp(2rem,4vw,6rem)",alignItems:"center"}} className="community-grid">
//         <div style={{position:"relative",height:"clamp(300px,40vw,540px)",opacity:vis?1:0,transform:vis?"none":"translateX(-30px)",transition:"all 0.9s ease",order:1}} className="community-image">
//           <div className="img-hover" style={{position:"absolute",top:0,left:0,width:"70%",height:"58%",overflow:"hidden"}}>
//             <img src="/building.jpeg" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
//           </div>
//           <div className="img-hover" style={{position:"absolute",bottom:0,right:0,width:"66%",height:"54%",overflow:"hidden"}}>
//             <img src="/building2.jpeg" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
//           </div>
//           <div style={{position:"absolute",top:"43%",left:"47%",transform:"translate(-50%,-50%)",background:"var(--primary)",padding:"clamp(1rem,1.5vw,1.4rem) clamp(1.4rem,1.8vw,1.8rem)",textAlign:"center",zIndex:5,minWidth:150}}>
//             <div className="font-display" style={{fontSize:"clamp(1.8rem,2.5vw,2.4rem)",fontWeight:600,color:"#fff",lineHeight:1}}>2</div>
//             <div style={{fontSize:"clamp(0.5rem,0.7vw,0.6rem)",letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--secondary)",marginTop:5,fontWeight:700}}>Curricula Offered</div>
//           </div>
//         </div>
//         <div style={{opacity:vis?1:0,transform:vis?"none":"translateX(30px)",transition:"all 0.9s ease 0.2s"}}>
//           <p className="label-tag">Girls' Boarding Community</p>
//           <h2 className="section-heading">A Transformative <em>Girls' Education</em></h2>
//           <div className="divider"/>
//           <p className="body-text" style={{marginBottom:"clamp(0.8rem,1.2vw,1.25rem)"}}>With modern learning environments, dedicated educators, and a safe structured boarding programme, Granada gives every girl the foundation she needs to thrive academically and personally.</p>
//           <p className="body-text" style={{marginBottom:"clamp(1.5rem,2.25vw,2.25rem)"}}>We raise confident, morally grounded, and academically strong young women who are prepared to make their mark in a rapidly changing world.</p>
//           <div style={{display:"flex",flexDirection:"column",gap:"clamp(0.6rem,1vw,0.85rem)",marginBottom:"clamp(1.5rem,2vw,2.25rem)"}}>
//             {["Values-Based CBE Education","Safe Girls' Boarding Environment","Leadership & Character Formation","Holistic Wellbeing"].map((pt,i)=>(
//               <div key={i} style={{display:"flex",alignItems:"center",gap:"clamp(0.6rem,1.2vw,0.9rem)"}}>
//                 <div style={{width:`clamp(20px,2.5vw,26px)`,height:`clamp(20px,2.5vw,26px)`,border:"1px solid var(--primary)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
//                   <span style={{color:"var(--primary)",fontSize:"clamp(0.5rem,0.7vw,0.65rem)"}}>✓</span>
//                 </div>
//                 <span style={{color:"var(--body-text)",fontSize:"clamp(0.78rem,0.95vw,0.84rem)",fontWeight:500}}>{pt}</span>
//               </div>
//             ))}
//           </div>
//           <a href="/about" className="btn-solid" style={{fontSize:"clamp(0.65rem,1vw,0.75rem)",padding:"clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)"}}>Begin Your Journey</a>
//         </div>
//       </div>
//       <style>{`@media(min-width:768px){.community-grid{grid-template-columns:1fr 1fr!important}.community-image{order:0!important}}`}</style>
//     </section>
//   );
// }
/* ── ADMISSIONS CTA (blue) ─────────────────────────────────────────────────── */ function AdmissionsCTA() {
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
                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                    lineNumber: 1386,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-heading",
                    children: [
                        "Begin Your ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "Granada Story"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                            lineNumber: 1388,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                    lineNumber: 1387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "body-text",
                    style: {
                        maxWidth: 520,
                        margin: 'clamp(0.8rem,1.5vw,1.25rem) auto clamp(1.5rem,2.5vw,2.5rem)',
                        fontSize: 'clamp(0.9rem,1vw,1.05rem)'
                    },
                    children: "Join a community of passionate learners, dedicated educators, and caring families at Granada CBE Junior & Senior Girls' Boarding Secondary School — on Kenya's breathtaking Vipingo coast."
                }, void 0, false, {
                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                    lineNumber: 1390,
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
                            href: "/contact",
                            className: "btn-solid",
                            style: {
                                fontSize: 'clamp(0.65rem,1vw,0.75rem)',
                                padding: 'clamp(0.5rem,0.8vw,0.65rem) clamp(1.1rem,2vw,1.5rem)'
                            },
                            children: "Enquire Now"
                        }, void 0, false, {
                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                            lineNumber: 1411,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact?type=visit",
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
                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                            lineNumber: 1421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/admissions#process",
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
                            fileName: "[project]/apps/granada-international/src/app/page.tsx",
                            lineNumber: 1439,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/granada-international/src/app/page.tsx",
                    lineNumber: 1403,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/granada-international/src/app/page.tsx",
            lineNumber: 1376,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/granada-international/src/app/page.tsx",
        lineNumber: 1370,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {}, void 0, false, {
            fileName: "[project]/apps/granada-international/src/app/page.tsx",
            lineNumber: 1483,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=apps_granada-international_src_app_page_tsx_02i1dml._.js.map