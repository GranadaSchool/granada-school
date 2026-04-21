(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, size = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group/card flex flex-col gap-4 overflow-hidden rounded-lg bg-card py-4 text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg', className),
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-lg px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3', className),
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-heading text-sm font-medium', className),
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs/relaxed text-muted-foreground', className),
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-4 group-data-[size=sm]/card:px-3', className),
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center rounded-b-lg px-4 group-data-[size=sm]/card:px-3 [.border-t]:pt-4 group-data-[size=sm]/card:[.border-t]:pt-3', className),
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
"[project]/apps/granada-school/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const values = [
    {
        label: 'Resilience',
        color: '#e2c215',
        textColor: '#000000',
        rgb: '226,194,21',
        image: '/child-red.png',
        tagline: 'Grow Through Challenge',
        desc: 'We encourage learners to persevere, overcome obstacles, and emerge stronger from every experience. Resilience is the foundation that allows students to face uncertainty with confidence and adapt with grace.'
    },
    {
        label: 'Curiosity',
        color: '#dbe5f5',
        textColor: '#000000',
        rgb: '219,229,245',
        image: '/child-yellow.png',
        tagline: 'Love of Learning',
        desc: 'We foster a deep love for learning, creativity, and the fearless exploration of new ideas. At Granada, questions are always welcome — curiosity drives discovery, innovation, and lifelong learning.'
    },
    {
        label: 'Kindness',
        color: '#A6D6C9',
        textColor: '#000000',
        rgb: '166,214,201',
        image: '/child-green.png',
        tagline: 'Empathy in Action',
        desc: 'We promote empathy, compassion, and genuine respect for every person within and beyond the school community. Kindness shapes our classroom culture and the character of every graduate.'
    },
    {
        label: 'Honesty',
        color: '#e79b0b',
        textColor: '#ffffff',
        rgb: '231,155,11',
        image: '/child-blue.png',
        tagline: 'Integrity Always',
        desc: 'We uphold integrity, accountability, and ethical behaviour in every aspect of school life. We believe trust is earned through honesty — and honest people build honest communities.'
    },
    {
        label: 'Respect',
        color: '#213558',
        textColor: '#ffffff',
        rgb: '33,53,88',
        image: '/child-purple.png',
        tagline: 'Valuing Every Voice',
        desc: 'We celebrate diversity, nurture positive relationships, and create a supportive environment where every individual is seen and valued. Respect connects our community across backgrounds and aspirations.'
    }
];
const valuePosts = {
    Resilience: [
        {
            title: 'Sports Day 2025 — Students Push Their Limits',
            date: '15 Mar 2025',
            videoId: ''
        },
        {
            title: 'Year 9 Expedition: Conquering the Boardroom Challenge',
            date: '2 Feb 2025',
            videoId: ''
        },
        {
            title: 'Overcoming Goals — Student Stories of Perseverance',
            date: '10 Jan 2025',
            videoId: ''
        },
        {
            title: 'Cross-Country Run 2024 Highlights',
            date: '5 Nov 2024',
            videoId: ''
        },
        {
            title: 'Resilience Week — Building a Growth Mindset',
            date: '20 Sep 2024',
            videoId: ''
        }
    ],
    Curiosity: [
        {
            title: 'Science Fair 2025 — Inventions from Granada',
            date: '18 Mar 2025',
            videoId: ''
        },
        {
            title: 'STEM Showcase: Robotics Club Demo Day',
            date: '6 Feb 2025',
            videoId: ''
        },
        {
            title: 'Granada Book Club — Debate and Discovery',
            date: '14 Jan 2025',
            videoId: ''
        },
        {
            title: 'Curiosity Week: Asking the Big Questions',
            date: '8 Nov 2024',
            videoId: ''
        },
        {
            title: 'Field Trip: Exploring the Coral Reef',
            date: '25 Sep 2024',
            videoId: ''
        }
    ],
    Kindness: [
        {
            title: 'Community Outreach Day — Giving Back to Vipingo',
            date: '20 Mar 2025',
            videoId: ''
        },
        {
            title: 'Peer Mentoring Programme Launch',
            date: '10 Feb 2025',
            videoId: ''
        },
        {
            title: 'Kindness Week 2025 Highlights',
            date: '20 Jan 2025',
            videoId: ''
        },
        {
            title: "Students Support Local Children's Home",
            date: '12 Nov 2024',
            videoId: ''
        },
        {
            title: 'The Granada Way — Our Culture of Empathy',
            date: '1 Oct 2024',
            videoId: ''
        }
    ],
    Honesty: [
        {
            title: 'Student Council Forum — Open Conversations',
            date: '22 Mar 2025',
            videoId: ''
        },
        {
            title: 'Integrity in Action: A Student Panel Discussion',
            date: '12 Feb 2025',
            videoId: ''
        },
        {
            title: 'Academic Honesty Assembly 2025',
            date: '22 Jan 2025',
            videoId: ''
        },
        {
            title: 'Ethics in Leadership — Prefect Training Day',
            date: '15 Nov 2024',
            videoId: ''
        },
        {
            title: 'Honest Conversations: Mental Health Awareness',
            date: '3 Oct 2024',
            videoId: ''
        }
    ],
    Respect: [
        {
            title: 'Cultural Day 2025 — Celebrating Diversity',
            date: '25 Mar 2025',
            videoId: ''
        },
        {
            title: 'Anti-Bullying Week: United in Respect',
            date: '14 Feb 2025',
            videoId: ''
        },
        {
            title: 'Student Voice Programme — Term 1 Outcomes',
            date: '24 Jan 2025',
            videoId: ''
        },
        {
            title: 'Granada Environmental Day — Respecting Our World',
            date: '18 Nov 2024',
            videoId: ''
        },
        {
            title: 'Chapel Reflections — The Power of Respect',
            date: '7 Oct 2024',
            videoId: ''
        }
    ]
};
const valueNews = {
    Resilience: {
        headline: 'Granada Students Triumph at the Regional Athletics Championships',
        date: '20 Mar 2025',
        href: '/granada-school/news',
        image: '/child-red.png'
    },
    Curiosity: {
        headline: 'Science Fair 2025: Young Inventors Showcase Groundbreaking Projects',
        date: '18 Mar 2025',
        href: '/granada-school/news',
        image: '/child-yellow.png'
    },
    Kindness: {
        headline: 'Granada Community Outreach Day Makes a Lasting Impact in Vipingo',
        date: '14 Mar 2025',
        href: '/granada-school/news',
        image: '/child-green.png'
    },
    Honesty: {
        headline: 'Prefect Body Launches New Student Integrity Pledge for 2025',
        date: '10 Mar 2025',
        href: '/granada-international/news',
        image: '/child-blue.png'
    },
    Respect: {
        headline: 'Cultural Day 2025: A Celebration of Diversity and Unity at Granada',
        date: '5 Mar 2025',
        href: '/granada-international/news',
        image: '/child-purple.png'
    }
};
const socialPosts = [
    {
        platform: 'Instagram',
        image: '/child-green.png',
        caption: 'Sports Day 2025 — Students push their limits on the field!',
        date: '15 Mar 2025',
        color: '#e2c215',
        textColor: '#0b1b3b'
    },
    {
        platform: 'Facebook',
        image: '/child-blue.png',
        caption: 'Science Fair 2025: Young inventors showcase their projects.',
        date: '18 Mar 2025',
        color: '#dbe5f5',
        textColor: '#213558'
    },
    {
        platform: 'Instagram',
        image: '/child-yellow.png',
        caption: 'Community Outreach Day — giving back to Vipingo village.',
        date: '20 Mar 2025',
        color: '#A6D6C9',
        textColor: '#213558'
    },
    {
        platform: 'X / Twitter',
        image: '/child-red.png',
        caption: 'Cultural Day 2025 — A celebration of diversity and unity at Granada.',
        date: '25 Mar 2025',
        color: '#e79b0b',
        textColor: '#0b1b3b'
    }
];
function Hero() {
    _s();
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [clickedIndex, setClickedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredPanel, setHoveredPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [socialPage, setSocialPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobileSocialIndex, setMobileSocialIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen overflow-hidden font-serif",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col md:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 flex items-center justify-center md:hidden",
                        style: {
                            background: '#fff'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-bold",
                                    style: {
                                        fontSize: 'clamp(1.4rem, 5vw, 2rem)',
                                        lineHeight: 1.15,
                                        color: '#213558'
                                    },
                                    children: "Realise your"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-bold",
                                    style: {
                                        fontSize: 'clamp(1.8rem, 7vw, 2.6rem)',
                                        lineHeight: 1.15,
                                        marginTop: '0.15em',
                                        color: '#213558'
                                    },
                                    children: "potential"
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    values.map((value, index)=>{
                        const isExpanded = clickedIndex === index;
                        const isCompressed = clickedIndex !== null && !isExpanded;
                        const isHovered = hoveredIndex === index;
                        const posts = valuePosts[value.label] ?? [];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            style: {
                                flexGrow: clickedIndex !== null ? isExpanded ? 5 : 0.65 : 1,
                                flexShrink: 1,
                                flexBasis: 0,
                                transition: 'flex-grow 0.6s cubic-bezier(0.4,0,0.2,1)',
                                cursor: 'pointer'
                            },
                            onMouseEnter: ()=>{
                                if (!isCompressed) setHoveredIndex(index);
                            },
                            onMouseLeave: ()=>setHoveredIndex(null),
                            onClick: ()=>setClickedIndex(isExpanded ? null : index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: value.image,
                                    alt: value.label,
                                    fill: true,
                                    sizes: "(max-width: 768px) 100vw, 20vw",
                                    className: "object-cover",
                                    style: {
                                        transform: isHovered && !isExpanded ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.6s ease',
                                        objectPosition: 'center 30%'
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 pointer-events-none",
                                    style: {
                                        background: 'linear-gradient(to bottom right, #213558 0%, transparent 100%)',
                                        opacity: isHovered ? 0 : 1,
                                        transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-end items-center pointer-events-none",
                                    style: {
                                        backgroundColor: value.color,
                                        opacity: isCompressed ? 1 : 0,
                                        transition: 'opacity 0.4s ease'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '0.75rem 0.5rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold select-none block",
                                            style: {
                                                fontSize: 'clamp(0.6rem,1.1vw,0.9rem)',
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                writingMode: 'vertical-rl',
                                                textOrientation: 'mixed',
                                                transform: 'rotate(180deg)',
                                                color: value.textColor
                                            },
                                            children: value.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                            lineNumber: 382,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 381,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this),
                                clickedIndex === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 pointer-events-none",
                                    style: {
                                        background: `rgba(${value.rgb},0.72)`,
                                        transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                                        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 401,
                                    columnNumber: 17
                                }, this),
                                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        setClickedIndex(null);
                                    },
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 421,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 413,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 hidden md:flex",
                                    style: {
                                        opacity: isExpanded ? 1 : 0,
                                        transition: 'opacity 0.45s ease',
                                        pointerEvents: isExpanded ? 'auto' : 'none'
                                    },
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 2,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                backgroundColor: '#111'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: value.image,
                                                    alt: value.label,
                                                    fill: true,
                                                    sizes: "66vw",
                                                    style: {
                                                        objectFit: 'cover',
                                                        objectPosition: 'center 20%'
                                                    },
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        inset: 0,
                                                        pointerEvents: 'none',
                                                        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 42%, transparent 70%)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        padding: 'clamp(1.5rem,3vw,2.5rem)',
                                                        pointerEvents: 'none'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '0.62rem',
                                                                letterSpacing: '0.24em',
                                                                textTransform: 'uppercase',
                                                                color: value.color,
                                                                filter: 'brightness(1.7)',
                                                                fontWeight: 700,
                                                                marginBottom: '0.5rem'
                                                            },
                                                            children: value.tagline
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            style: {
                                                                fontSize: 'clamp(2.4rem,4vw,4rem)',
                                                                fontWeight: 700,
                                                                color: 'white',
                                                                marginBottom: '0.8rem',
                                                                lineHeight: 1.0
                                                            },
                                                            children: value.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '2.5rem',
                                                                height: '2px',
                                                                backgroundColor: value.color,
                                                                filter: 'brightness(1.5)',
                                                                marginBottom: '1.1rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: 'clamp(0.82rem,1.15vw,0.98rem)',
                                                                lineHeight: 1.75,
                                                                color: 'rgba(255,255,255,0.9)',
                                                                maxWidth: '52ch',
                                                                marginBottom: '1.1rem'
                                                            },
                                                            children: value.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: 'clamp(0.72rem,0.95vw,0.84rem)',
                                                                lineHeight: 1.65,
                                                                color: 'rgba(255,255,255,0.65)',
                                                                maxWidth: '52ch'
                                                            },
                                                            children: [
                                                                "At Granada, ",
                                                                value.label.toLowerCase(),
                                                                "is not just a word on a wall — it's lived and practised every day, in every classroom, every interaction, and every achievement our students reach."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0,
                                                backgroundColor: '#0f0f0f',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                overflowY: 'auto'
                                            },
                                            children: posts.slice(0, 1).map((post, pi)=>{
                                                const news = valueNews[value.label];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: post.videoId ? `https://www.youtube.com/watch?v=${post.videoId}` : 'https://www.youtube.com/@GranadaSchool',
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            style: {
                                                                display: 'block',
                                                                textDecoration: 'none',
                                                                cursor: 'pointer'
                                                            },
                                                            onMouseEnter: ()=>setHoveredPanel('yt'),
                                                            onMouseLeave: ()=>setHoveredPanel(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        position: 'relative',
                                                                        height: '45vh',
                                                                        backgroundColor: '#1a1a1a',
                                                                        overflow: 'hidden'
                                                                    },
                                                                    children: [
                                                                        post.videoId ? // eslint-disable-next-line @next/next/no-img-element
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: `https://img.youtube.com/vi/${post.videoId}/hqdefault.jpg`,
                                                                            alt: post.title,
                                                                            style: {
                                                                                position: 'absolute',
                                                                                inset: 0,
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                objectFit: 'cover',
                                                                                transform: hoveredPanel === 'yt' ? 'scale(1.06)' : 'scale(1)',
                                                                                transition: 'transform 0.4s ease'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 578,
                                                                            columnNumber: 31
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                position: 'absolute',
                                                                                inset: 0,
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                background: `linear-gradient(135deg, rgba(${value.rgb},0.45) 0%, #111 100%)`,
                                                                                transform: hoveredPanel === 'yt' ? 'scale(1.06)' : 'scale(1)',
                                                                                transition: 'transform 0.4s ease'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 595,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                position: 'absolute',
                                                                                inset: 0,
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: '3rem',
                                                                                    height: '3rem',
                                                                                    borderRadius: '50%',
                                                                                    backgroundColor: 'rgba(255,255,255,0.18)',
                                                                                    border: '1.5px solid rgba(255,255,255,0.5)',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center'
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                    size: 12,
                                                                                    fill: "white",
                                                                                    color: "white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                                    lineNumber: 632,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                                lineNumber: 620,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 568,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        position: 'relative',
                                                                        flexShrink: 0,
                                                                        zIndex: 1,
                                                                        backgroundColor: value.color,
                                                                        padding: '1.4rem 1.1rem 1.1rem'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                position: 'absolute',
                                                                                top: '-20px',
                                                                                left: '50%',
                                                                                transform: 'translateX(-50%)',
                                                                                width: 0,
                                                                                height: 0,
                                                                                borderLeft: '20px solid transparent',
                                                                                borderRight: '20px solid transparent',
                                                                                borderBottom: `20px solid ${value.color}`,
                                                                                zIndex: 2
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: '0.5rem',
                                                                                letterSpacing: '0.2em',
                                                                                textTransform: 'uppercase',
                                                                                color: value.textColor,
                                                                                opacity: 0.7,
                                                                                fontWeight: 700,
                                                                                margin: '0 0 0.5rem'
                                                                            },
                                                                            children: "Latest on YouTube"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 661,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                color: value.textColor,
                                                                                fontWeight: 400,
                                                                                fontSize: '24px',
                                                                                lineHeight: 1.3,
                                                                                margin: '0 0 0.4rem'
                                                                            },
                                                                            children: post.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 674,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                color: value.textColor,
                                                                                opacity: 0.65,
                                                                                fontSize: '24px',
                                                                                fontWeight: 400,
                                                                                margin: 0
                                                                            },
                                                                            children: post.date
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 685,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 637,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, `yt-${pi}`, true, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 25
                                                        }, this),
                                                        news && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: news.href,
                                                            style: {
                                                                display: 'block',
                                                                textDecoration: 'none',
                                                                cursor: 'pointer'
                                                            },
                                                            onMouseEnter: ()=>setHoveredPanel('news'),
                                                            onMouseLeave: ()=>setHoveredPanel(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        position: 'relative',
                                                                        height: '45vh',
                                                                        backgroundColor: '#1a1a1a',
                                                                        overflow: 'hidden'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: news.image,
                                                                        alt: news.headline,
                                                                        fill: true,
                                                                        sizes: "33vw",
                                                                        style: {
                                                                            objectFit: 'cover',
                                                                            objectPosition: 'center 20%',
                                                                            transform: hoveredPanel === 'news' ? 'scale(1.06)' : 'scale(1)',
                                                                            transition: 'transform 0.4s ease'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                        lineNumber: 721,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 713,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        position: 'relative',
                                                                        flexShrink: 0,
                                                                        zIndex: 1,
                                                                        backgroundColor: value.color,
                                                                        padding: '1.4rem 1.1rem 1.1rem'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                position: 'absolute',
                                                                                top: '-20px',
                                                                                left: '50%',
                                                                                transform: 'translateX(-50%)',
                                                                                width: 0,
                                                                                height: 0,
                                                                                borderLeft: '20px solid transparent',
                                                                                borderRight: '20px solid transparent',
                                                                                borderBottom: `20px solid ${value.color}`,
                                                                                zIndex: 2
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 748,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: '0.5rem',
                                                                                letterSpacing: '0.2em',
                                                                                textTransform: 'uppercase',
                                                                                color: value.textColor,
                                                                                opacity: 0.7,
                                                                                fontWeight: 700,
                                                                                margin: '0 0 0.5rem'
                                                                            },
                                                                            children: "Latest News"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 762,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                color: value.textColor,
                                                                                fontWeight: 400,
                                                                                fontSize: '24px',
                                                                                lineHeight: 1.3,
                                                                                margin: '0 0 0.4rem'
                                                                            },
                                                                            children: news.headline
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 775,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                color: value.textColor,
                                                                                opacity: 0.65,
                                                                                fontSize: '24px',
                                                                                fontWeight: 400,
                                                                                margin: 0
                                                                            },
                                                                            children: news.date
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                            lineNumber: 786,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 738,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, "news", true, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, pi, true, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 hidden md:flex items-center justify-center overflow-hidden",
                                    style: {
                                        height: '60px',
                                        backgroundColor: value.color,
                                        opacity: clickedIndex === null ? 1 : 0,
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'none'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-center",
                                        style: {
                                            fontSize: '20px',
                                            color: value.textColor
                                        },
                                        children: value.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 807,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center md:hidden pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-lg drop-shadow-lg px-4 py-1.5 rounded",
                                        style: {
                                            backgroundColor: value.color,
                                            color: value.textColor
                                        },
                                        children: value.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 827,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                    lineNumber: 826,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `bg-${index}`, true, {
                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 z-40 flex justify-between items-start pt-3 pb-2 pl-4 md:pt-4 md:pb-3 md:pl-6 pr-4 md:pr-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/g-school.svg",
                        alt: "Granada School",
                        width: 110,
                        height: 44,
                        className: "md:hidden",
                        style: {
                            height: 'auto',
                            width: 'clamp(150px,18vw,210px)'
                        },
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 845,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/g-school-dark.svg",
                        alt: "Granada School",
                        width: 110,
                        height: 44,
                        className: "hidden md:block",
                        style: {
                            height: 'auto',
                            width: 'clamp(150px,7vw,170px)'
                        },
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 854,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenuOpen(!menuOpen),
                        className: "flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex flex-col justify-center items-center gap-1 hover:opacity-80 transition-opacity",
                        "aria-label": "Toggle Menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 h-0.5 bg-[#213558] md:bg-white transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 869,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 h-0.5 bg-[#213558] md:bg-white transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 870,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 h-0.5 bg-[#213558] md:bg-white transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 871,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 864,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                lineNumber: 843,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `absolute inset-0 z-50 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`,
                style: {
                    willChange: 'transform'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:order-2 md:flex-1 md:min-h-0 md:overflow-clip",
                        style: {
                            backgroundColor: '#213558',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minHeight: 0,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    padding: '1.25rem clamp(1.25rem,5vw,3.5rem)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flexShrink: 0,
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '1rem',
                                            marginBottom: 'var(--hero-h1-margin-bottom)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: {
                                                    flex: 1,
                                                    fontSize: 'var(--hero-h1-size)',
                                                    fontWeight: 900,
                                                    lineHeight: '1.15',
                                                    color: 'white',
                                                    margin: 0
                                                },
                                                children: "Two Schools. One standard of Excellence. Discover the right Granada pathway for your child."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 913,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMenuOpen(false),
                                                style: {
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    padding: '0.25rem',
                                                    flexShrink: 0
                                                },
                                                "aria-label": "Close Menu",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 22,
                                                    color: "white",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 926,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 904,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-stretch",
                                        style: {
                                            paddingTop: '2rem',
                                            flex: 1,
                                            minHeight: 25,
                                            gap: '1.25rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "relative w-full pt-0 flex flex-col justify-start gap-1",
                                            style: {
                                                background: '#e2c215',
                                                alignSelf: 'flex-start',
                                                borderRadius: '0.9rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "pt-3 pb-1 gap-0",
                                                    style: {
                                                        background: '#e2c215'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            style: {
                                                                fontSize: 'var(--hero-card-title-size)',
                                                                fontWeight: 700,
                                                                color: '#0b1b3b',
                                                                marginBottom: '0.25em'
                                                            },
                                                            children: "CBE Pathway"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 965,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            style: {
                                                                fontSize: 'var(--hero-card-desc-size)',
                                                                color: '#0b1b3b',
                                                                opacity: 0.95,
                                                                lineHeight: 1.5,
                                                                marginBottom: 0
                                                            },
                                                            children: "Comprehensive national curriculumn designed to foster academic excellence, with quality boarding facilities for girls in both junior and senior schools."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 976,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                                    className: "pt-1 pb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "w-full p-1",
                                                        style: {
                                                            backgroundColor: 'var(--primary-dark)',
                                                            color: '#e2c215',
                                                            fontSize: 'var(--hero-card-desc-size)',
                                                            borderColor: 'var(--primary-dark)',
                                                            borderRadius: '0.6rem'
                                                        },
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/home",
                                                            className: "w-full h-full flex items-center justify-center",
                                                            onClick: ()=>setMenuOpen(false),
                                                            children: "Learn more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                        lineNumber: 992,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                            lineNumber: 951,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 941,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 892,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block",
                                style: {
                                    flexShrink: 0,
                                    backgroundColor: 'white',
                                    padding: '0.35rem clamp(2rem,5vw,3.5rem)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: '0.85rem',
                                            color: '#213558',
                                            paddingBottom: '0.45rem'
                                        },
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.65rem',
                                            color: '#213558',
                                            fontWeight: 400,
                                            margin: 0
                                        },
                                        children: [
                                            "Granada School, Vipingo, Kilifi ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 47
                                            }, this),
                                            "Off Mombasa-Malindi Highway ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1046,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/granada-school/contact",
                                        onClick: ()=>setMenuOpen(false),
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            textDecoration: 'underline',
                                            fontWeight: 700,
                                            fontSize: '0.85rem',
                                            color: '#213558',
                                            paddingBottom: '0.45rem',
                                            gap: '0.25rem'
                                        },
                                        children: [
                                            "Directions ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1062,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1048,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1019,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 883,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:order-1 md:flex-1 md:min-h-0 md:overflow-hidden",
                        style: {
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1.5rem 1.25rem 0.75rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex",
                                style: {
                                    flex: 1,
                                    minHeight: 0,
                                    overflow: 'hidden',
                                    flexDirection: 'column'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            overflow: 'hidden',
                                            minHeight: 0,
                                            position: 'relative'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'stretch',
                                                gap: '1rem',
                                                height: '100%',
                                                width: 'calc(200% + 1rem)',
                                                transform: `translateX(${socialPage === 0 ? '0%' : 'calc(-50% - 0.5rem)'})`,
                                                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                                            },
                                            children: socialPosts.map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 'calc(25% - 0.75rem)',
                                                        flexShrink: 0,
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1,
                                                                position: 'relative',
                                                                overflow: 'hidden',
                                                                minHeight: 0
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: post.image,
                                                                alt: post.caption,
                                                                fill: true,
                                                                sizes: "25vw",
                                                                style: {
                                                                    objectFit: 'cover',
                                                                    objectPosition: 'center'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 1116,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flexShrink: 0,
                                                                position: 'relative',
                                                                backgroundColor: post.color,
                                                                padding: '1.1rem 0.85rem 0.85rem'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        position: 'absolute',
                                                                        top: '-16px',
                                                                        left: '50%',
                                                                        transform: 'translateX(-50%)',
                                                                        width: 0,
                                                                        height: 0,
                                                                        borderLeft: '16px solid transparent',
                                                                        borderRight: '16px solid transparent',
                                                                        borderBottom: `16px solid ${post.color}`,
                                                                        zIndex: 2
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1140,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.44rem',
                                                                        letterSpacing: '0.16em',
                                                                        textTransform: 'uppercase',
                                                                        color: post.textColor,
                                                                        fontWeight: 700,
                                                                        margin: '0 0 0.3rem'
                                                                    },
                                                                    children: post.platform
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1154,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.72rem',
                                                                        color: post.textColor,
                                                                        lineHeight: 1.4,
                                                                        margin: '0 0 0.2rem',
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: 3,
                                                                        WebkitBoxOrient: 'vertical',
                                                                        overflow: 'hidden'
                                                                    },
                                                                    children: post.caption
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1166,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.58rem',
                                                                        color: post.textColor,
                                                                        opacity: 0.65,
                                                                        margin: 0
                                                                    },
                                                                    children: post.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1182,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 1132,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                            lineNumber: 1095,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flexShrink: 0,
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            paddingTop: '0.6rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSocialPage((p)=>p === 0 ? 1 : 0),
                                            style: {
                                                width: '2.25rem',
                                                height: '2.25rem',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0,0,0,0.18)',
                                                border: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer'
                                            },
                                            "aria-label": socialPage === 0 ? 'Next articles' : 'Previous articles',
                                            children: socialPage === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 14,
                                                color: "white",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1224,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                size: 14,
                                                color: "white",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1226,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1078,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex md:hidden",
                                style: {
                                    flex: 1,
                                    minHeight: 0,
                                    overflow: 'hidden',
                                    flexDirection: 'column'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            overflow: 'hidden',
                                            minHeight: 0,
                                            position: 'relative'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'stretch',
                                                height: '100%',
                                                width: `${socialPosts.length * 100}%`,
                                                transform: `translateX(${-mobileSocialIndex * 100 / socialPosts.length}%)`,
                                                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                                            },
                                            children: socialPosts.map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: `${100 / socialPosts.length}%`,
                                                        flexShrink: 0,
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1,
                                                                position: 'relative',
                                                                overflow: 'hidden',
                                                                minHeight: 0
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: post.image,
                                                                alt: post.caption,
                                                                fill: true,
                                                                sizes: "100vw",
                                                                style: {
                                                                    objectFit: 'cover',
                                                                    objectPosition: 'center'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                lineNumber: 1278,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 1270,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flexShrink: 0,
                                                                position: 'relative',
                                                                backgroundColor: post.color,
                                                                padding: '1.1rem 0.85rem 0.85rem'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        position: 'absolute',
                                                                        top: '-16px',
                                                                        left: '50%',
                                                                        transform: 'translateX(-50%)',
                                                                        width: 0,
                                                                        height: 0,
                                                                        borderLeft: '16px solid transparent',
                                                                        borderRight: '16px solid transparent',
                                                                        borderBottom: `16px solid ${post.color}`,
                                                                        zIndex: 2
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1294,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.6rem',
                                                                        letterSpacing: '0.16em',
                                                                        textTransform: 'uppercase',
                                                                        color: post.textColor,
                                                                        fontWeight: 700,
                                                                        margin: '0 0 0.3rem'
                                                                    },
                                                                    children: post.platform
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1308,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.82rem',
                                                                        color: post.textColor,
                                                                        lineHeight: 1.4,
                                                                        margin: '0 0 0.2rem',
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: 3,
                                                                        WebkitBoxOrient: 'vertical',
                                                                        overflow: 'hidden'
                                                                    },
                                                                    children: post.caption
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1320,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.72rem',
                                                                        color: post.textColor,
                                                                        opacity: 0.65,
                                                                        margin: 0
                                                                    },
                                                                    children: post.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                                    lineNumber: 1336,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                            lineNumber: 1286,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                            lineNumber: 1250,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flexShrink: 0,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            paddingTop: '0.6rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMobileSocialIndex((i)=>Math.max(0, i - 1)),
                                                disabled: mobileSocialIndex === 0,
                                                style: {
                                                    width: '2.25rem',
                                                    height: '2.25rem',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(0,0,0,0.18)',
                                                    border: 'none',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: mobileSocialIndex === 0 ? 'default' : 'pointer',
                                                    opacity: mobileSocialIndex === 0 ? 0.35 : 1
                                                },
                                                "aria-label": "Previous post",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 14,
                                                    color: "white",
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 1378,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1361,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(0,0,0,0.5)',
                                                    fontSize: '0.65rem',
                                                    letterSpacing: '0.1em'
                                                },
                                                children: [
                                                    mobileSocialIndex + 1,
                                                    " / ",
                                                    socialPosts.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1380,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMobileSocialIndex((i)=>Math.min(socialPosts.length - 1, i + 1)),
                                                disabled: mobileSocialIndex === socialPosts.length - 1,
                                                style: {
                                                    width: '2.25rem',
                                                    height: '2.25rem',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(0,0,0,0.18)',
                                                    border: 'none',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: mobileSocialIndex === socialPosts.length - 1 ? 'default' : 'pointer',
                                                    opacity: mobileSocialIndex === socialPosts.length - 1 ? 0.35 : 1
                                                },
                                                "aria-label": "Next post",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14,
                                                    color: "white",
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                                lineNumber: 1389,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 1068,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        style: {
                            flexShrink: 0,
                            backgroundColor: 'white',
                            padding: '0.75rem clamp(1.5rem,5vw,3.5rem)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    color: '#213558',
                                    paddingBottom: '0.35rem'
                                },
                                children: "Address"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.75rem',
                                    color: '#213558',
                                    fontWeight: 400,
                                    margin: 0
                                },
                                children: [
                                    "Granada School, Vipingo, Kilifi ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1447,
                                        columnNumber: 45
                                    }, this),
                                    "Off Mombasa-Malindi Highway"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/granada-school/contact",
                                onClick: ()=>setMenuOpen(false),
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    textDecoration: 'underline',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    color: '#213558',
                                    paddingTop: '0.35rem',
                                    gap: '0.25rem'
                                },
                                children: [
                                    "Directions ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                        lineNumber: 1464,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 1421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                lineNumber: 876,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 hidden md:flex items-end pointer-events-none",
                    style: {
                        bottom: '80px',
                        width: '60%',
                        opacity: clickedIndex !== null ? 0 : 1,
                        transition: 'opacity 0.3s ease'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingLeft: 'clamp(4.7rem,6.2vw, 5.7rem)',
                            paddingBottom: '0.25rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-white font-bold drop-shadow-lg",
                                style: {
                                    fontSize: 'clamp(2rem, 6vw, 6.1rem)',
                                    lineHeight: 0.001
                                },
                                children: "Realise your"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1487,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-white font-bold drop-shadow-lg",
                                style: {
                                    fontSize: 'clamp(5.7rem, 9vw, 9rem)',
                                    lineHeight: 1.5,
                                    marginTop: '0.01em'
                                },
                                children: "potential"
                            }, void 0, false, {
                                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                                lineNumber: 1496,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                        lineNumber: 1481,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                    lineNumber: 1472,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
                lineNumber: 1470,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/granada-school/src/components/Hero.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
_s(Hero, "EAgXTHw+6IUFVr42NhCzv6TEgkI=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0494sqw._.js.map