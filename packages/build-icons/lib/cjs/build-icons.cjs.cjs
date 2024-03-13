import { appendFileSync, existsSync, mkdirSync, writeFileSync, unlinkSync } from 'node:fs';
import a$1 from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

var i$1=(t,n="react")=>{const o=v$1(import.meta.url),r=a$1.resolve(o,`../../../${n}/icons`),s=`export {default as  ${f$1(t)}} from './${f$1(t)}';\n`;appendFileSync(a$1.resolve(r,"index.ts"),s,"utf-8");},l$1=(e,r="react")=>{const s=e[0],c=e[1],i=v$1(import.meta.url),l=a$1.resolve(i,`../../../${r}/icons`);existsSync(l)||mkdirSync(l);const p=`\n  import createMeisterIcons from '../src/createMeisterIcons';\n\n  const ${f$1(s)} = createMeisterIcons("${s}", ${JSON.stringify(c)})\n\n\n  export default ${f$1(s)}\n  `;writeFileSync(a$1.join(l,`${f$1(s)}.ts`),p,"utf-8");};const p$1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};var d$1=(r,s)=>{const c=v$1(import.meta.url),i=a$1.resolve(c,`../../../${s}/lib`);let l=s.includes("../")?s.replaceAll("../",""):s;const d=`meistericons-${"react"===l?"react":"vue"===l?"vue":"vue-latest"}.d.ts`;if(!existsSync(i)){mkdirSync(i);const e=`    ${"react"===l?"import { MeisterIcon } from '../src/createMeisterIcons'":"vue"===l?'import { Component } from "vue"':'import { FunctionalComponent, SVGAttributes } from "vue"'}\n    declare module '@meistericons/${l}'\n    \n    ${"vue-latest"===l?'interface SVGProps extends Partial<SVGAttributes> {\n        size: 24;\n        fill: "currentColor";\n      }\n      \n      export type Icon = (props: SVGProps) => FunctionalComponent<SVGProps>;\n      ':`export interface SVGProps extends Partial<SVGElement> ${JSON.stringify(p$1,null,2)}\n      \n      export declare type IconNodeChild = readonly [string, object];\n      export declare type IconNode = readonly [tag: string, attrs: SVGProps, children?: IconNodeChild[]];\n      export declare type CustomAttrs = { [attr:string]: any }\n      export type Icons = { [key: string]: IconNode }\n      \n      export interface CreateIconsOptions {\n       \n        icons: Icons;\n      \n        \n        nameAttr?: string;\n      \n        attrs?: CustomAttrs;\n      }\n      \n      export function createElement(icon: IconNode): SVGSVGElement;\n      export function createIcons(options: CreateIconsOptions): void;\n      \n      export declare const icons: Icons;\n      `}\n    // Generated icons\n    `;writeFileSync(a$1.resolve(i,d),e,"utf-8");}const m="vue-latest"===l?"Icon;":"Component;";appendFileSync(a$1.resolve(i,d),`export declare const ${r}: ${"react"===l?"MeisterIcon;":m}\n`,"utf-8"),console.log(`Added icon type ${r} - @meistericons/${l}`);};const m$1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,t,n)=>n?n.toUpperCase():t.toLowerCase())),u$1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f$1=e=>m$1(e).charAt(0).toUpperCase()+m$1(e).slice(1),v$1=e=>fileURLToPath(new URL(e));


var icons = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Add: nM,
	AddBlock: vM,
	AddBlockB: hM,
	AddSqaure: sM,
	AddSqaureB: iM,
	AirpodSingle: l,
	AirpodSingleB: a,
	Airpods: c,
	AirpodsAlt: n,
	AirpodsAltB: v,
	AirpodsB: s,
	AirpodsDot: h,
	Alarm: Wg,
	AlarmAdd: Jg,
	AlarmAddB: _g,
	AlarmArrowDown: jg,
	AlarmArrowDownB: Yg,
	AlarmArrowLeft: Qg,
	AlarmArrowLeftB: Xg,
	AlarmArrowRight: $g,
	AlarmArrowRightB: lf,
	AlarmArrowUp: af,
	AlarmArrowUpB: cf,
	AlarmB: nf,
	AlarmCross: vf,
	AlarmCrossB: hf,
	AlarmHeart: sf,
	AlarmMinus: tf,
	AlarmMinusB: Zf,
	AlarmStar: wf,
	AlarmStarB: of,
	AlarmTime: gf,
	AlarmTimeB: ff,
	AlignBottom: eZ,
	AlignBottomB: pZ,
	AlignCenter: nC,
	AlignJustify: vC,
	AlignLeft: hC,
	AlignRight: sC,
	AlignTop: MZ,
	AlignTopB: mZ,
	AndroidPhone: i,
	AndroidPhoneB: t,
	Apps: tM,
	AppsA: ZM,
	AppsAB: wM,
	AppsAdd: oM,
	AppsAddA: gM,
	AppsAddAB: fM,
	AppsAddB: eM,
	AppsB: mM,
	AppsCross: pM,
	AppsCrossB: MM,
	Archive: dM,
	ArchiveAdd: rM,
	ArchiveAddB: BM,
	ArchiveB: VM,
	ArchiveCross: AM,
	ArchiveCrossB: xM,
	ArrowBlockDown: Fs,
	ArrowBlockDownB: Is,
	ArrowBlockDownleft: Es,
	ArrowBlockDownleftB: Ns,
	ArrowBlockDownright: Gs,
	ArrowBlockDownrightB: Ks,
	ArrowBlockLeft: Os,
	ArrowBlockLeftB: zs,
	ArrowBlockRight: Ws,
	ArrowBlockRightB: Js,
	ArrowBlockTopleft: _s,
	ArrowBlockTopleftB: js,
	ArrowBlockTopright: Ys,
	ArrowBlockToprightB: Qs,
	ArrowBlockUp: Xs,
	ArrowBlockUpB: $s,
	ArrowBreakDown: li,
	ArrowBreakLeft: ai,
	ArrowBreakRight: ci,
	ArrowBreakTop: ni,
	ArrowCircleDown: vi,
	ArrowCircleDownB: hi,
	ArrowCircleDownleft: si,
	ArrowCircleDownleftB: ii,
	ArrowCircleDownright: ti,
	ArrowCircleDownrightB: Zi,
	ArrowCircleLeft: wi,
	ArrowCircleLeftB: oi,
	ArrowCircleRight: gi,
	ArrowCircleRightB: fi,
	ArrowCircleTop: ei,
	ArrowCircleTopB: pi,
	ArrowCircleTopleft: Mi,
	ArrowCircleTopleftB: mi,
	ArrowCircleTopright: di,
	ArrowCircleToprightB: ri,
	ArrowCrashDown: Bi,
	ArrowCrashLeft: Ai,
	ArrowCrashRight: xi,
	ArrowCrashTop: Vi,
	ArrowCurvedDownright: Hi,
	ArrowDoubleheadD: Ci,
	ArrowDoubleheadDA: Li,
	ArrowDoubleheadH: Si,
	ArrowDoubleheadV: ui,
	ArrowDown: ki,
	ArrowDownleft: Di,
	ArrowDownright: qi,
	ArrowDownwards: Pi,
	ArrowDuoDown: yi,
	ArrowDuoLeft: Ti,
	ArrowDuoRight: bi,
	ArrowDuoTop: Ui,
	ArrowFullscreen: Ri,
	ArrowLeft: Fi,
	ArrowLoopLeft: Ii,
	ArrowLoopRight: Ei,
	ArrowReverseDownleft: Ni,
	ArrowReverseLongh: Gi,
	ArrowReverseLongv: Ki,
	ArrowReverseShorth: Oi,
	ArrowReverseShortv: zi,
	ArrowReverseTopleft: Wi,
	ArrowReverseTopright: Ji,
	ArrowRight: _i,
	ArrowRoundedDownleft: ji,
	ArrowRoundedDownright: Yi,
	ArrowRoundedTopleft: Qi,
	ArrowRoundedTopright: Xi,
	ArrowSort: $i,
	ArrowSortB: lt,
	ArrowSquareDown: at,
	ArrowSquareDownB: ct,
	ArrowSquareDownleft: nt,
	ArrowSquareDownleftB: vt,
	ArrowSquareDownright: ht,
	ArrowSquareDownrightB: st,
	ArrowSquareLeft: it,
	ArrowSquareLeftB: tt,
	ArrowSquareRight: Zt,
	ArrowSquareRightB: wt,
	ArrowSquareTop: ot,
	ArrowSquareTopB: gt,
	ArrowSquareTopleft: ft,
	ArrowSquareTopleftB: et,
	ArrowSquareTopright: pt,
	ArrowSquareToprightB: Mt,
	ArrowTop: mt,
	ArrowTopleft: dt,
	ArrowTopright: rt,
	ArrowTv: Bt,
	ArrowTvDouble: At,
	ArrowTvTriple: xt,
	ArrowUpwards: Vt,
	Atom: fa,
	Award: ea,
	AwardB: ma,
	AwardMinimal: pa,
	AwardMinimalB: Ma,
	BabyCarriage: sa,
	BabyCarriageB: ia,
	Badge: da,
	BadgeB: Ba,
	BadgeVarB: ra,
	Bag: ko,
	BagAdd: Do,
	BagAddB: qo,
	BagAlt: Po,
	BagAltB: yo,
	BagB: Qo,
	BagBlock: To,
	BagBlockB: bo,
	BagCheck: Uo,
	BagCheckB: Ro,
	BagCircle: Fo,
	BagCircle1: Io,
	BagCircleAdd: Eo,
	BagCircleB: zo,
	BagCircleB1: Wo,
	BagCircleBlock: No,
	BagCircleCheck: Go,
	BagCircleCode: Ko,
	BagCircleCross: Oo,
	BagCode: Jo,
	BagCodeB: _o,
	BagCross: jo,
	BagCrossB: Yo,
	Bandaid: le,
	BandaidB: ce,
	BandaidVarB: ae,
	Bank: cL,
	BankB: nL,
	Barchart: xA,
	BarchartB: CA,
	BarchartH: VA,
	BarchartHB: HA,
	Battery1: Z,
	Battery1B: w,
	Battery2: o,
	Battery2B: g,
	Battery3: f,
	Battery3B: e,
	Battery4: p,
	Battery4B: M,
	Beaker: Aa,
	BeakerB: Ha,
	BeakerHalf: xa,
	BeakerHalfB: Va,
	Bed: HM,
	BedB: CM,
	Bell: m,
	BellB: d,
	Board: Ca,
	BoardAdd: La,
	BoardB: ba,
	BoardBlock: Sa,
	BoardChart: ua,
	BoardChartB: ka,
	BoardCheck: Da,
	BoardCode: qa,
	BoardCodeB: Pa,
	BoardCross: ya,
	BoardHeart: Ta,
	Bookmark: LM,
	BookmarkA: SM,
	BookmarkAB: uM,
	BookmarkAdd: kM,
	BookmarkB: PM,
	BookmarkCross: DM,
	BookmarkMinus: qM,
	Bookmarks: yM,
	BookmarksB: TM,
	BookmarksBVarB: bM,
	Bowl: HB,
	BowlB: CB,
	Bowling: XZ,
	BowlingB: $Z,
	Box: Xo,
	BoxAdd: $o,
	BoxAddB: lg,
	BoxArrowDownleft: ag,
	BoxArrowDownleftB: cg,
	BoxArrowTopleft: ng,
	BoxArrowTopleftB: vg,
	BoxB: rg,
	BoxBlock: hg,
	BoxBlockB: sg,
	BoxCheck: ig,
	BoxCheckB: tg,
	BoxCross: Zg,
	BoxCrossB: wg,
	BoxCursor: og,
	BoxCursorB: gg,
	BoxDownload: fg,
	BoxDownloadB: eg,
	BoxHeart: pg,
	BoxHeartB: Mg,
	BoxUp: mg,
	BoxUpB: dg,
	Braces: $h,
	Branch: ls,
	BranchAdd: as,
	BranchAddB: cs,
	BranchB: is,
	BranchCheck: ns,
	BranchCheckB: vs,
	BranchCross: hs,
	BranchCrossB: ss,
	Bread: LB,
	BreadB: SB,
	Breadloaf: uB,
	BringBack: dZ,
	BringFont: rZ,
	BringFontB: BZ,
	Bug: ts,
	BugB: Zs,
	Bulb: Ua,
	BulbB: Ra,
	Bullseye: vL,
	BullseyeB: hL,
	Burger: kB,
	BurgerB: DB,
	Button: KV,
	ButtonB: OV,
	Cake: qB,
	Calculator: r,
	CalculatorB: B,
	Calendar: ef,
	Calendar7: pf,
	Calendar7B: Mf,
	CalendarA: mf,
	CalendarAAdd: df,
	CalendarAAddB: rf,
	CalendarAB: qf,
	CalendarACheck: Bf,
	CalendarACheckB: Af,
	CalendarACross: xf,
	CalendarACrossB: Vf,
	CalendarADot: Hf,
	CalendarADotB: Cf,
	CalendarADots: Lf,
	CalendarADotsB: Sf,
	CalendarAGrid: uf,
	CalendarAGridB: kf,
	CalendarAHeart: Df,
	CalendarAdd: Pf,
	CalendarAddB: yf,
	CalendarB: jf,
	CalendarCheck: Tf,
	CalendarCheckB: bf,
	CalendarCode: Uf,
	CalendarCodeB: Rf,
	CalendarCross: Ff,
	CalendarCrossB: If,
	CalendarDash: Ef,
	CalendarDashB: Nf,
	CalendarDot: Gf,
	CalendarDotB: Kf,
	CalendarHeart: Of,
	CalendarLines: zf,
	CalendarLinesB: Wf,
	CalendarStar: Jf,
	CalendarStarB: _f,
	Camera: Rv,
	Camera1: Fv,
	Camera1B: Iv,
	Camera2: Ev,
	Camera2B: Nv,
	CameraB: Wv,
	CameraMinimal: Gv,
	CameraMinimalB: Kv,
	CameraPaper: Ov,
	CameraPaperB: zv,
	Candy: PB,
	CandyB: yB,
	Car: wn,
	CarB: on,
	Card: Bg,
	CardAdd: Ag,
	CardAddB: xg,
	CardAlt: Vg,
	CardAltB: Cg,
	CardAltVarB: Hg,
	CardB: Ig,
	CardBlock: Lg,
	CardBlockB: Sg,
	CardCheck: ug,
	CardCheckB: kg,
	CardCode: Dg,
	CardCodeB: qg,
	CardCross: Pg,
	CardCrossB: yg,
	CardDiamond: lw,
	CardDiamondAlt: aw,
	CardDiamondAltB: cw,
	CardDiamondB: nw,
	CardDownload: Tg,
	CardDownloadB: bg,
	CardHeart: vw,
	CardHeartAlt: hw,
	CardUpload: Ug,
	CardUploadB: Rg,
	CardVarB: Fg,
	CaretDoubleDownleft: Ht,
	CaretDoubleDownleftB: Ct,
	CaretDoubleDownright: Lt,
	CaretDoubleDownrightB: St,
	CaretDoubleLeft: ut,
	CaretDoubleLeftB: kt,
	CaretDoubleRight: Dt,
	CaretDoubleRight1: qt,
	CaretDoubleRightB: Pt,
	CaretDoubleRightB1: yt,
	CaretDoubleTop: Tt,
	CaretDoubleTopB: bt,
	CaretDoubleTopleft: Ut,
	CaretDoubleTopleftB: Rt,
	CaretDoubleTopright: Ft,
	CaretDoubleToprightB: It,
	Cart: Eg,
	CartB: Ng,
	Chalkboard: Fa,
	ChalkboardB: Ia,
	ChartSquare: LA,
	ChartSquareB: kA,
	ChartSquareH: SA,
	ChartSquareHB: uA,
	CheckCircle: UM,
	CheckCircleB: RM,
	CheckSquare: FM,
	CheckSquareB: IM,
	Checklist: Ea,
	ChecklistB: Na,
	ChevronBreakDown: Et,
	ChevronBreakLeft: Nt,
	ChevronBreakRight: Gt,
	ChevronBreakTop: Kt,
	ChevronCircleDown: Ot,
	ChevronCircleLeft: zt,
	ChevronCircleRight: Wt,
	ChevronCircleTop: Jt,
	ChevronDoubleDown: _t,
	ChevronDoubleDownleft: jt,
	ChevronDoubleDownright: Yt,
	ChevronDoubleLeft: Qt,
	ChevronDoubleRight: Xt,
	ChevronDoubleTop: $t,
	ChevronDoubleTopleft: lZ,
	ChevronDoubleTopright: aZ,
	ChevronDown: cZ,
	ChevronLeft: nZ,
	ChevronRight: vZ,
	ChevronSquareDown: hZ,
	ChevronSquareDownB: sZ,
	ChevronSquareLeft: iZ,
	ChevronSquareLeftB: tZ,
	ChevronSquareRight: ZZ,
	ChevronSquareRightB: wZ,
	ChevronSquareTop: oZ,
	ChevronSquareTopB: gZ,
	ChevronTop: fZ,
	Chip: A,
	ChipB: x,
	Circle: EM,
	Circle1: pn,
	Circle10: mn,
	Circle10B: dn,
	Circle11: rn,
	Circle11B: Bn,
	Circle12: An,
	Circle12B: Vn,
	Circle12VarB: xn,
	Circle13: Hn,
	Circle13B: Ln,
	Circle13VarB: Cn,
	Circle14: Sn,
	Circle14AltVarB: un,
	Circle14B: Dn,
	Circle14VarB: kn,
	Circle15: qn,
	Circle15B: yn,
	Circle15VarB: Pn,
	Circle1B: Tn,
	Circle1VarB: Mn,
	Circle2: bn,
	Circle2B: Rn,
	Circle2VarB: Un,
	Circle3: Fn,
	Circle3B: En,
	Circle3VarB: In,
	Circle4: Nn,
	Circle4B: Kn,
	Circle4VarB: Gn,
	Circle5: On,
	Circle5B: zn,
	Circle6: Wn,
	Circle6B: Jn,
	Circle7: _n,
	Circle7B: jn,
	Circle8: Yn,
	Circle8B: Qn,
	Circle9: Xn,
	Circle9B: $n,
	CircleB: KM,
	CircleHeart: NM,
	CircleTimes: GM,
	ClockCircle: Yf,
	ClockCircleB: Qf,
	ClockSqaure: Xf,
	ClockSqaureB: $f,
	Cloud: hc,
	CloudB: oc,
	CloudCircle: sc,
	CloudCircleB: ic,
	CloudSun: tc,
	CloudSunB: wc,
	CloudSunVarB: Zc,
	Coathanger: zV,
	CoathangerB: WV,
	CodeBox: V,
	CodeBoxAlt: H,
	CodeBoxAltB: C,
	CodeBoxB: L,
	CodeCircle: ws,
	CodeCircleB: fs,
	CodeCircleVertical: os,
	CodeCircleVerticalB: gs,
	CodeHex: es,
	CodeHexB: ms,
	CodeHexVertical: ps,
	CodeHexVerticalB: Ms,
	CodeRectanlge: ds,
	CodeRectanlgeB: rs,
	CodeSquare: Bs,
	CodeSquareB: Vs,
	CodeSquareVertical: As,
	CodeSquareVerticalB: xs,
	Coin: sL,
	CoinB: iL,
	Coins: OM,
	CoinsB: zM,
	CommentHeart: Xx,
	CompassCircle: DH,
	CompassCircleB: qH,
	CompassSquare: PH,
	CompassSquareB: yH,
	Copy: iC,
	CopyA: tC,
	CopyAB: wC,
	CopyAVarB: ZC,
	CopyB: MC,
	CopyOverlap: oC,
	CopyOverlapB: gC,
	CopySquare: fC,
	CopySquareB: eC,
	CopySquareB1: pC,
	CricketBall: UC,
	CricketBallB: RC,
	Cross: WM,
	CrossBlock: JM,
	CrossBlockB: _M,
	CrossSquare: jM,
	CrossSquareB: YM,
	Crown: sw,
	CrownAlt: iw,
	CrownAltB: tw,
	CrownB: Zw,
	CubeOverlap: QM,
	Cup: TB,
	CupAlt: bB,
	CupAltB: UB,
	CupB: NB,
	CupSmooth: RB,
	CupSmoothAlt: FB,
	CupSmoothAltB: IB,
	CupSmoothB: EB,
	Currency: tL,
	CurrencyAlt: ZL,
	CurrencyAltB: oL,
	CurrencyAltVarB: wL,
	CurrencyVarB: gL,
	Cursor: vH,
	CursorB: rH,
	CursorCircle: hH,
	CursorCircle1: sH,
	CursorCircleB: ZH,
	CursorCircleB1: wH,
	CursorCircleDashed: iH,
	CursorCircleDashedB: tH,
	CursorSqaureAlt: oH,
	CursorSqaureAltB: eH,
	CursorSqaureAltDashed: gH,
	CursorSqaureAltDashedB: fH,
	CursorSquare: pH,
	CursorSquareB: dH,
	CursorSquareDashed: MH,
	CursorSquareDashedB: mH,
	CurvedRectangle: XM,
	CurvedRectangleA: $M,
	CurvedRectangleAB: lm,
	CurvedRectangleB: am,
	CurvedSquare: cm,
	CurvedSquareB: nm,
	Cylinder: vm,
	CylinderA: hm,
	CylinderAB: sm,
	CylinderB: im,
	Dashboard: tm,
	DashboardGrid: Zm,
	DashboardGridB: wm,
	DashboardSemi: om,
	DashboardSemiB: gm,
	DashboardSquare: fm,
	DashboardSquareB: em,
	DashedCircle: Mm,
	DashedSquare: pm,
	DashedSquareA: mm,
	Database: S,
	DatabaseB: u,
	Delete: dm,
	DeleteA: rm,
	DeleteAB: Bm,
	DeleteB: Am,
	DesignAlignCenter: AZ,
	DesignAlignCenterB: xZ,
	DesignAlignLeft: VZ,
	DesignAlignLeftB: HZ,
	DesignAlignRight: CZ,
	DesignAlignRightB: LZ,
	Diamond: ww,
	DiamondAdd: ow,
	DiamondAlt: gw,
	DiamondB: Bw,
	DiamondBlock: fw,
	DiamondCheck: ew,
	DiamondCode: pw,
	DiamondCross: Mw,
	DiamondHear: mw,
	DiamondRing: dw,
	DiamondRingB: rw,
	Dice: Aw,
	Dice1: xw,
	Dice2: Sw,
	Dice2B: uw,
	Dice3: kw,
	Dice3B: Dw,
	Dice4: qw,
	Dice4B: Pw,
	Dice5: yw,
	Dice5B: Tw,
	Dice6: bw,
	Dice6B: Uw,
	DiceAdd: Vw,
	DiceBlock: Hw,
	DiceCross: Cw,
	DiceHeart: Lw,
	Dices: Rw,
	DicesB: Iw,
	DicesVarB: Fw,
	Discount: Gg,
	DiscountB: Kg,
	Dislike: xm,
	DislikeB: Hm,
	DislikeVarB: Vm,
	DivideBlock: Cm,
	DivideBlockB: Lm,
	Door: Sm,
	DoorB: um,
	DotdotType: mC,
	Download: km,
	Drawer: fL,
	DrawerB: eL,
	Dumbell: FC,
	DumbellAlt: IC,
	DumbellAltB: EC,
	DumbellB: NC,
	Earth: TH,
	EarthB: UH,
	EarthVarB: bH,
	Edit: Dm,
	EditB: ym,
	EditSquare: qm,
	EditSquareB: Pm,
	Egg: GB,
	EggB: KB,
	EllipsisDoubleH: Ee,
	EllipsisDoubleHB: Ne,
	EllipsisDoubleV: Ge,
	EllipsisDoubleVB: Ke,
	EllipsisH: Oe,
	EllipsisHB: Qe,
	EllipsisHCircle: ze,
	EllipsisHCircleB: We,
	EllipsisHPill: Je,
	EllipsisHPillB: _e,
	EllipsisHSquare: je,
	EllipsisHSquareB: Ye,
	EllipsisV: Xe,
	EllipsisVB: hp,
	EllipsisVCircle: $e,
	EllipsisVCircle1: lp,
	EllipsisVCircleB: ap,
	EllipsisVPill: cp,
	EllipsisVPillB: np,
	EllipsisVSquareB: vp,
	Emrald: Tm,
	EmraldB: bm,
	EqualSquare: Um,
	EqualSquareB: Rm,
	ErrorCircle: Fm,
	ErrorCircleB: Im,
	ErrorHexagon: Em,
	ErrorHexagonB: Nm,
	ErrorSquare: Gm,
	ErrorSquareB: Km,
	Explosive: Ew,
	ExplosiveB: Nw,
	Eyeliner: JV,
	EyelinerB: _V,
	Female: Om,
	FemaleB: zm,
	File: Vh,
	FileAdd: Hh,
	FileAddB: Ch,
	FileB: Eh,
	FileBlock: Lh,
	FileBlockB: Sh,
	FileCheck: uh,
	FileCheckB: kh,
	FileCode: Dh,
	FileCodeB: qh,
	FileCross: Ph,
	FileCrossB: yh,
	FileDownload: Th,
	FileDownloadB: bh,
	FileHeart: Uh,
	FileInFolder: pL,
	FileInFolderB: mL,
	FileInFolderVarB: ML,
	FileUpload: Rh,
	FileUploadB: Fh,
	FileVarB: Ih,
	Flag: ge,
	FlagAlt: fe,
	FlagAltB: pe,
	FlagAltVarB: ee,
	FlagB: de,
	FlagTriangle: Me,
	FlagTriangleB: me,
	Flask: Ga,
	FlaskB: Ka,
	FlexStand: dL,
	FlexStandB: AL,
	FlexStandFilled: rL,
	FlexStandFilledB: BL,
	Folder: Nh,
	FolderAdd: Gh,
	FolderAddB: Kh,
	FolderB: Xh,
	FolderBlock: Oh,
	FolderBlockB: zh,
	FolderCheck: Wh,
	FolderCheckB: Jh,
	FolderCross: _h,
	FolderCrossB: jh,
	FolderHeart: Yh,
	FolderHeartB: Qh,
	FoldersShelf: xL,
	FoldersShelfB: VL,
	Football: GC,
	FootballA: KC,
	FootballAB: OC,
	FootballB: zC,
	Fork: OB,
	ForkB: JB,
	ForkDiag: zB,
	ForkDiagB: WB,
	Frame1039: Hs,
	Frame964: Cs,
	Fruits: _B,
	Gameboy: Gw,
	GameboyB: Kw,
	Git: Ls,
	GitAlt: Ss,
	GitAltB: us,
	GitArrowUp: ks,
	GitArrowUpB: Ds,
	GitB: qs,
	Glass: jB,
	GlassHalf: YB,
	GlassHalfB: QB,
	GlassStraw: XB,
	GlassStrawB: $B,
	Graphdown: DA,
	GraphdownB: qA,
	Graphup: PA,
	GraphupB: yA,
	Guitar: Bh,
	HandheldConsole: Ow,
	HandheldConsoleB: zw,
	Hashtag: Wm,
	HashtagCircle: Jm,
	HashtagCircleB: _m,
	HashtagSquare: jm,
	HashtagSquareB: Ym,
	Hat: jV,
	HatB: YV,
	Headphone: QA,
	HeadphoneAdd: XA,
	HeadphoneAddB: $A,
	HeadphoneB: cx,
	HeadphoneCross: lx,
	HeadphoneCrossB: ax,
	HeadphoneFancy: k,
	HeadphoneFancyB: D,
	Heart: Qm,
	HeartB: ld,
	HeartHalf: Xm,
	HeartRate: $m,
	Heartrate: ne,
	Hearts: ad,
	HeartsAlt: cd,
	HeartsB: nd,
	Heptagon: vd,
	HeptagonB: hd,
	HexAdd: sd,
	HexAddB: id,
	HexCross: td,
	HexCross1: Zd,
	HexCrossB: wd,
	HexCrossB1: od,
	Hockey: WC,
	HockeyB: JC,
	HomeCh: gd,
	HomeChB: fd,
	HomeCircle: ed,
	HomeCircle1: pd,
	HomeCircleB: dd,
	HomeCircleB1: rd,
	HomeCircleCh: Md,
	HomeCircleChB: md,
	HomeEmpty: Bd,
	HomeEmptyB: Ad,
	HomeGarage: xd,
	HomeGarageB: kd,
	HomeGarageCircle: Vd,
	HomeGarageCircleChA: Hd,
	HomeGarageCircleChAB: Cd,
	HomeGarageCircleVarB: Ld,
	HomeGarageLine: Sd,
	HomeGarageLineB: ud,
	HomeLargedoor: Dd,
	HomeLargedoorB: bd,
	HomeLargedoorCircle: qd,
	HomeLargedoorCircleB: Td,
	HomeLargedoorCircleCh: Pd,
	HomeLargedoorCircleChB: yd,
	HomeMinimal: Ud,
	HomeMinimalB: Rd,
	Icecream: lA,
	IcecreamB: cA,
	IcecreamVarB: aA,
	IdCircle: HL,
	IdCircleB: LL,
	IdCircleVarB: CL,
	IdSquare: SL,
	IdSquareB: kL,
	IdSquareVarB: uL,
	Image: Jv,
	ImageAdd: _v,
	ImageAddB: jv,
	ImageAlt: Yv,
	ImageAltB: Qv,
	ImageB: ph,
	ImageBlock: Xv,
	ImageBlockB: $v,
	ImageCheck: lh,
	ImageCheckB: ah,
	ImageCircleAlt: ch,
	ImageCircleAltB: nh,
	ImageCross: vh,
	ImageCrossB: hh,
	ImageMinimal: sh,
	ImageMinimalB: Zh,
	ImageMinimalCircle: ih,
	ImageMinimalCircleB: th,
	ImageMountains: wh,
	ImageMountainsB: fh,
	ImageMountainsCircle: oh,
	ImageMountainsCircleB: gh,
	ImageVarB: eh,
	Images: Mh,
	ImagesB: dh,
	ImagesVarB: mh,
	ImaheCircle: rh,
	Inbox: re,
	InboxB: Ce,
	InboxCircle: Be,
	InboxCircleB: Ae,
	InboxEmpty: xe,
	InboxEmptyB: Ve,
	InboxVarB: He,
	Incognito: Fd,
	IncognitoB: Id,
	InfoCircle: Ed,
	InfoCircleB: Nd,
	InfoOctagon: Gd,
	InfoOctagonB: Kd,
	InfoSquare: Od,
	InfoSquareB: zd,
	Intersection: Wd,
	Iphone: q,
	Italics: dC,
	Joystick: Ww,
	JoystickAlt: Jw,
	JoystickAltB: _w,
	JoystickB: Qw,
	JoystickCute: jw,
	JoystickCuteB: Yw,
	Key: gp,
	KeyB: pp,
	KeyStraight: fp,
	KeyStraightB: ep,
	Keypad: sp,
	KeypadB: ip,
	Knife: nA,
	KnifeB: vA,
	Knight: Xw,
	KnightB: $w,
	Laptop: P,
	LaptopAdd: y,
	LaptopAddB: T,
	LaptopB: z,
	LaptopBlock: b,
	LaptopBlockB: U,
	LaptopCheck: R,
	LaptopCheckB: F,
	LaptopCode: I,
	LaptopCodeB: E,
	LaptopCross: N,
	LaptopCrossB: G,
	LaptopSlanted: K,
	LaptopSlantedB: O,
	Like: Jd,
	Like1: _d,
	LikeB: Yd,
	LikeVarB: jd,
	LineUp: TA,
	LineUpB: bA,
	Link: Qd,
	Lipstick: QV,
	LipstickB: XV,
	Lock: Mp,
	LockAlt: mp,
	LockAltB: dp,
	LockB: Cp,
	LockKeyhole: rp,
	LockKeyholeB: Bp,
	LockOpen: Ap,
	LockOpenB: xp,
	LockPartialopen: Vp,
	LockPartialopenB: Hp,
	LogIn: Xd,
	LogOut: $d,
	Magicwand: SZ,
	MagicwandB: uZ,
	Mail: Le,
	MailAdd: Se,
	MailAlt: ue,
	MailB: Ie,
	MailBranch: ke,
	MailBranchAlt: De,
	MailBranchAltB: qe,
	MailBranchB: Pe,
	MailCheck: ye,
	MailCode: Te,
	MailCross: be,
	MailDownright: Ue,
	MailOutline: Re,
	MailTopleft: Fe,
	Male: lr,
	MaleB: ar,
	Mantra: cr,
	MantraB: nr,
	Map: RH,
	MapAlt: FH,
	MapB: NH,
	MapPin: IH,
	MapPinB: EH,
	Message: $x,
	MessageAdd: lV,
	MessageAlt: aV,
	MessageAltB: cV,
	MessageB: xV,
	MessageCircle: nV,
	MessageCircleAdd: vV,
	MessageCircleAddB: hV,
	MessageCircleB: tV,
	MessageCircleCross: sV,
	MessageCircleCrossB: iV,
	MessageCode: ZV,
	MessageCross: wV,
	MessageHeart: oV,
	MessageMinimal: gV,
	MessageMinimalAdd: fV,
	MessageMinimalB: mV,
	MessageMinimalCheck: eV,
	MessageMinimalCross: pV,
	MessageMinimalHeart: MV,
	MessageSearch: dV,
	MessageSearchB: rV,
	MessageUser: BV,
	MessageUserB: AV,
	Meter: vr,
	MeterB: hr,
	Mic: nx,
	MicAlt: vx,
	MicB: px,
	MicCircle: hx,
	MicCircleB: tx,
	MicCircleDashed: sx,
	MicCircleDashedB: ix,
	MicEmpty: Zx,
	MicEmptyB: wx,
	MicSquare: ox,
	MicSquareAlt: gx,
	MicSquareAltB: fx,
	MicSquareB: ex,
	Microphone: W,
	MicrophoneB: J,
	MinusBlock: sr,
	MinusBlockB: ir,
	MinusSquare: tr,
	MinusSquareB: Zr,
	Money: DL,
	MoneyAdd: qL,
	MoneyAddB: PL,
	MoneyB: YL,
	MoneyBlock: yL,
	MoneyBlockB: TL,
	MoneyCheck: bL,
	MoneyCheckB: UL,
	MoneyCode: RL,
	MoneyCodeB: FL,
	MoneyCross: IL,
	MoneyCrossB: EL,
	MoneyDiag: NL,
	MoneyDiagB: KL,
	MoneyDiagVarB: GL,
	MoneyHeart: OL,
	MoneyHeartB: zL,
	MoneyStack: WL,
	MoneyStackB: _L,
	MoneyStackVarB: JL,
	MoneyVarB: jL,
	Monitor: _,
	MonitorAlt: j,
	MonitorAltB: Y,
	MonitorB: gl,
	MonitorBack: Q,
	MonitorBackB: $,
	MonitorBackVarB: X,
	MonitorDownload: ll,
	MonitorMac: al,
	MonitorMacAlt: cl,
	MonitorMacAltB: vl,
	MonitorMacAltVarB: nl,
	MonitorMacB: sl,
	MonitorMacVarB: hl,
	MonitorReception: il,
	MonitorReceptionB: tl,
	MonitorTriangle: Zl,
	MonitorTriangleB: wl,
	MonitorUpload: ol,
	Moon: gc,
	Mountains: Vo,
	MountainsB: Ho,
	Mouse: fl,
	MouseAlt: el,
	MouseAltB: pl,
	MouseApple: Ml,
	MouseB: ml,
	Movie: Mx,
	MovieAdd: mx,
	MovieAddB: dx,
	MovieB: Sx,
	MovieBlock: rx,
	MovieCheck: Bx,
	MovieCheckB: Ax,
	MovieCross: xx,
	MovieCrossB: Vx,
	MovieHeart: Hx,
	MoviePause: Cx,
	MoviePauseB: Lx,
	Nav: GH,
	NavAlt: KH,
	NavAltB: zH,
	NavAltVarB: OH,
	NavB: _H,
	NavDiag: WH,
	NavDiagB: JH,
	NineKey: tp,
	NineKeyB: Zp,
	NoEntry: wr,
	NoEntryB: gr,
	NoEntryVarB: or,
	NoteLocate: rC,
	NoteLocateB: BC,
	NotePinned: Oa,
	NotePinnedB: Ja,
	NotePinnedFilled: za,
	NotePinnedFilledB: Wa,
	NoteSearch: AC,
	NoteSearchB: xC,
	Notebook: _a,
	NotebookOpen: ja,
	NotebookOpenB: Ya,
	Notes: Qa,
	NotesB: ac,
	NotesPaper: Xa,
	NotesPaperB: $a,
	NotesVarB: lc,
	Notification: fr,
	NotificationAlert: er,
	NotificationAlertA: pr,
	NotificationAlertAB: Mr,
	NotificationAlertB: mr,
	NotificationB: Hr,
	NotificationMinimal: dr,
	NotificationMinimalAlert: rr,
	NotificationMinimalAlertA: Br,
	NotificationMinimalAlertAB: Ar,
	NotificationMinimalAlertB: xr,
	NotificationMinimalB: Vr,
	Octagon: Cr,
	OctagonB: Lr,
	Omlette: hA,
	OmletteB: sA,
	Paintbrush: kZ,
	PaintbrushAlt: DZ,
	PaintbrushAltB: qZ,
	PaintbrushB: yZ,
	PaintbrushVarB: PZ,
	Palette: TZ,
	PaletteB: UZ,
	PaletteVarB: bZ,
	ParaAdd: VC,
	ParaBlock: HC,
	ParaCheck: CC,
	ParaCircle: LC,
	ParaCircleB: SC,
	ParaCross: uC,
	ParaHeart: kC,
	ParaPlay: DC,
	ParaPlayB: qC,
	ParaSearch: PC,
	ParaSearchB: yC,
	ParabolaDown: UA,
	ParabolaUp: RA,
	ParallelogramTool: RZ,
	ParallelogramToolAlt: FZ,
	ParallelogramToolAltB: IZ,
	ParallelogramToolB: EZ,
	PercentBlock: Sr,
	PercentBlockB: ur,
	Phone: VV,
	PhoneAdd: HV,
	PhoneAddB: CV,
	PhoneB: EV,
	PhoneBlock: LV,
	PhoneBlockB: SV,
	PhoneCheck: uV,
	PhoneCheckB: kV,
	PhoneClassic: dl,
	PhoneClassicB: Bl,
	PhoneClassicVarB: rl,
	PhoneCross: DV,
	PhoneCrossB: qV,
	PhoneHeart: PV,
	PhoneHeartB: yV,
	PhoneIncoming: TV,
	PhoneIncomingB: bV,
	PhoneMissed: UV,
	PhoneMissedB: RV,
	PhoneOutgoing: FV,
	PhoneOutgoingB: IV,
	PhonePlay: Al,
	PhonePlayB: xl,
	Piano: Ah,
	PianoB: xh,
	Pie: FA,
	PieAlt: IA,
	PieB: WA,
	PieDivided: EA,
	PieDividedB: NA,
	PieHalf: GA,
	PieHalfB: OA,
	PieHalfVarB: KA,
	PieVarB: zA,
	Pin: jH,
	PinAdd: YH,
	PinAddB: QH,
	PinB: cC,
	PinCircle: XH,
	PinCircleB: $H,
	PinCross: lC,
	PinCrossB: aC,
	Pizzatime: iA,
	PizzatimeB: tA,
	Plant: Co,
	PlantB: So,
	PlantVarB: Lo,
	Play: ux,
	PlayCircle: kx,
	PlayCircleB: Px,
	PlayCircleDashed: Dx,
	PlayCircleDashedB: qx,
	PlayEqual: yx,
	PlayEqualB: Tx,
	PlayHex: bx,
	PlayHexB: Rx,
	PlayHexVarB: Ux,
	PlayPause: Fx,
	PlayPauseB: Ix,
	PlaySqaure: Ex,
	PlaySqaureB: Nx,
	PlaySquareDashed: Gx,
	PlaySquareDashedB: Kx,
	Popsicle: ZA,
	PopsicleB: wA,
	PowerButton: kr,
	Presentation: QL,
	PresentationAlt: XL,
	PresentationAltB: lS,
	PresentationAltVarB: $L,
	PresentationB: nS,
	PresentationChart: aS,
	PresentationChartB: cS,
	Printer: Vl,
	PrinterB: Cl,
	PrinterVarB: Hl,
	Projector: Ll,
	ProjectorB: Sl,
	Pumpkin: oA,
	PumpkinB: fA,
	PumpkinVarB: gA,
	Puzzle: lo,
	PuzzleB: ao,
	Radio: ul,
	Radio1: kl,
	RadioB: Dl,
	RadioButton: Dr,
	RadioButtonB: qr,
	Rain: fc,
	RainB: ec,
	ReactangleHalf: Pr,
	ReactangleHalfB: yr,
	Reel: Ox,
	ReelAdd: zx,
	ReelBlock: Wx,
	ReelCheck: Jx,
	ReelCode: _x,
	ReelCross: jx,
	Responsive: ql,
	ResponsiveB: yl,
	ResponsiveVarB: Pl,
	Rhombus: Tr,
	RhombusB: br,
	Rugby: _C,
	RugbyHelmet: jC,
	RugbyHelmetB: YC,
	Ruler: NZ,
	RulerDiag: GZ,
	Sanitizer: ve,
	SanitizerB: ie,
	SanitizerMinimal: he,
	SanitizerMinimalB: se,
	Save: Ur,
	SaveB: Fr,
	SaveVarB: Rr,
	Scan: Lp,
	ScanAdd: Sp,
	ScanBlock: up,
	ScanCamera: kp,
	ScanCameraB: Dp,
	ScanCheck: qp,
	ScanCode: Pp,
	ScanCross: yp,
	ScanKey: Tp,
	ScanKeyB: bp,
	ScanLock: Up,
	ScanLockB: Rp,
	ScanSearch: Fp,
	ScanSearchB: Ip,
	Scooter: gn,
	ScooterB: en,
	ScooterVarB: fn,
	ScrollH: BH,
	ScrollHB: AH,
	ScrollV: xH,
	ScrollVB: VH,
	Search: Ir,
	SearchAdd: Er,
	SearchAddB: Nr,
	SearchB: Yr,
	SearchCircle: Gr,
	SearchCross: Kr,
	SearchCrossB: Or,
	SearchHeart: zr,
	SearchMinus: Wr,
	SearchMinusB: Jr,
	SearchSquare: _r,
	SearchSquareB: jr,
	SendMessage: NV,
	Server: Tl,
	ServerB: Rl,
	ServerDivided: bl,
	ServerDividedB: Ul,
	SettingsCog: Qr,
	SettingsCogB: Xr,
	SettingsHorizontal: $r,
	SettingsHorizontalB: lB,
	SettingsVertical: aB,
	SettingsVerticalB: cB,
	SevenKey: wp,
	SevenKeyB: op,
	Shield: Ep,
	ShieldAdd: Np,
	ShieldAddB: Gp,
	ShieldB: cM,
	ShieldBlock: Kp,
	ShieldBlockB: Op,
	ShieldCheck: zp,
	ShieldCheckB: Wp,
	ShieldCode: Jp,
	ShieldCodeB: _p,
	ShieldCross: jp,
	ShieldCrossB: Yp,
	ShieldHeart: Qp,
	ShieldImage: Xp,
	ShieldImageB: $p,
	ShieldScroll: lM,
	ShieldScrollB: aM,
	Signal: GV,
	Simcard: Fl,
	SimcardB: Il,
	SmartwatcCircle: El,
	SmartwatcCircleB: Kl,
	SmartwatcCircleTime: Nl,
	SmartwatcCircleTimeB: Gl,
	SmartwatcSquare: Ol,
	SmartwatcSquareB: Jl,
	SmartwatcSquareTime: zl,
	SmartwatcSquareTimeB: Wl,
	Snow: pc,
	SnowB: Mc,
	Sound: Yx,
	SoundB: Qx,
	Speaker: _l,
	SpeakerB: jl,
	Spoon: eA,
	SpoonB: mA,
	SpoonDiag: pA,
	SpoonDiagB: MA,
	Square: nB,
	Square1: lv,
	Square10: cv,
	Square10B: nv,
	Square11: vv,
	Square11B: hv,
	Square12: sv,
	Square12B: tv,
	Square12VarB: iv,
	Square13: Zv,
	Square13B: ov,
	Square13VarB: wv,
	Square14: gv,
	Square14B: ev,
	Square14VarB: fv,
	Square15: pv,
	Square15B: Mv,
	Square1B: mv,
	Square1VarB: av,
	Square2: dv,
	Square2B: Bv,
	Square2VarB: rv,
	Square3: Av,
	Square3B: Vv,
	Square3VarB: xv,
	Square4: Hv,
	Square4B: Lv,
	Square4VarB: Cv,
	Square5: Sv,
	Square5B: uv,
	Square6: kv,
	Square6B: Dv,
	Square7: qv,
	Square7B: Pv,
	Square8: yv,
	Square8B: Tv,
	Square9: bv,
	Square9B: Uv,
	SquareB: iB,
	SquareCircle: vB,
	SquareCircleB: hB,
	SquareDiagCircle: KZ,
	SquareDiagCircleB: OZ,
	SquareDiagHalf: zZ,
	SquareDiagHalfB: JZ,
	SquareDiagHalfVarB: WZ,
	SquareHeart: sB,
	SquareTool: _Z,
	SquareToolB: jZ,
	Stack: Ps,
	StackAlt: ys,
	StackAltB: Ts,
	StackB: bs,
	Star: tB,
	StarB: wB,
	StarHalfB: ZB,
	StarWand: YZ,
	StarWandB: QZ,
	Stethoscope: te,
	StethoscopeB: Ze,
	Stickynote: cc,
	StickynoteB: vc,
	StickynoteVarB: nc,
	Suitcase: vS,
	SuitcaseB: tS,
	SuitcaseMinimal: hS,
	SuitcaseMinimalB: sS,
	SuitcaseVarB: iS,
	SunCloud: mc,
	SunCloudB: rc,
	SunCloudVarB: dc,
	Switch: HH,
	SwitchActive: CH,
	SwitchAdd: LH,
	SwitchAddB: SH,
	SwitchCross: uH,
	SwitchCrossB: kH,
	Sword: co,
	SwordB: no,
	Target: oB,
	Tennis: QC,
	TennisB: $C,
	TennisVarB: XC,
	Terminal: Us,
	TerminalB: Rs,
	Tetris1: vo,
	Tetris1B: ho,
	Tetris2: so,
	Tetris2B: io,
	Tetris3: to,
	Tetris3B: Zo,
	Tetris4: wo,
	Tetris4B: oo,
	Tetris5: go,
	Tetris5B: fo,
	Tetris6: eo,
	Tetris6B: po,
	Tetris7: Mo,
	Tetris7B: mo,
	Tetris8: ro,
	Tetris8B: Bo,
	Tetris9: Ao,
	Tetris9B: xo,
	Tie: $V,
	TieAlt: lH,
	TieB: nH,
	TiePattern: aH,
	TiePatternB: cH,
	Tree: uo,
	Triangle: gB,
	TriangleAlt: fB,
	TriangleB: MB,
	TriangleReverse: eB,
	TriangleReverseB: pB,
	Tv: Yl,
	TvAlt: Ql,
	TvAltB: $l,
	TvAltVarB: Xl,
	TvB: la,
	TypeDotdot: TC,
	Underline: bC,
	Underpants: ta,
	UnderpantsB: ga,
	UnderpantsButton: Za,
	UnderpantsButtonB: wa,
	UnderpantsVarB: oa,
	Union: JA,
	Union3: _A,
	UnionB: YA,
	UnionVarB: jA,
	Upload: mB,
	UsbDrive: aa,
	UsbDriveB: na,
	UsbDriveVarB: ca,
	User: Bc,
	UserAdd: Ac,
	UserAddB: xc,
	UserB: sn,
	UserBlock: Vc,
	UserBlockB: Hc,
	UserCheck: Cc,
	UserCircle: Lc,
	UserCircleAdd: Sc,
	UserCircleAddB: uc,
	UserCircleB: Ic,
	UserCircleBlock: kc,
	UserCircleBlockB: Dc,
	UserCircleCheck: qc,
	UserCircleCheckB: Pc,
	UserCircleCode: yc,
	UserCircleCodeB: Tc,
	UserCircleCross: bc,
	UserCircleCrossB: Uc,
	UserCircleHeart: Rc,
	UserCircleHeartB: Fc,
	UserCross: Ec,
	UserCrossB: Nc,
	UserDownload: Gc,
	UserDownloadB: Kc,
	UserHeart: Oc,
	UserHeartB: zc,
	UserSqaureBlock: Wc,
	UserSqaureBlockB: Jc,
	UserSqaureCheck: _c,
	UserSqaureCheckB: jc,
	UserSqaureCode: Yc,
	UserSqaureCodeB: Qc,
	UserSquare: Xc,
	UserSquareAdd: $c,
	UserSquareAddB: ln,
	UserSquareB: nn,
	UserSquareHeart: an,
	UserSquareHeartB: cn,
	UserUpload: vn,
	UserUploadB: hn,
	Users: tn,
	UsersB: Zn,
	Verify: dB,
	VerifyA: rB,
	VerifyAB: BB,
	VerifyB: AB,
	Wallet: Og,
	WalletB: zg,
	Warning: xB,
	WarningB: VB,
	Webcam: va,
	WebcamB: ha,
	Weighingmachine: we,
	WeighingmachineB: oe,
	Wine: dA,
	WineB: AA,
	WineHalf: rA,
	WineHalfB: BA,
	YogaMat: lL,
	YogaMatB: aL,
	icons: ZS
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function hasKey(obj, keys) {
	var o = obj;
	keys.slice(0, -1).forEach(function (key) {
		o = o[key] || {};
	});

	var key = keys[keys.length - 1];
	return key in o;
}

function isNumber(x) {
	if (typeof x === 'number') { return true; }
	if ((/^0x[0-9a-f]+$/i).test(x)) { return true; }
	return (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(x);
}

function isConstructorOrProto(obj, key) {
	return (key === 'constructor' && typeof obj[key] === 'function') || key === '__proto__';
}

var minimist = function (args, opts) {
	if (!opts) { opts = {}; }

	var flags = {
		bools: {},
		strings: {},
		unknownFn: null,
	};

	if (typeof opts.unknown === 'function') {
		flags.unknownFn = opts.unknown;
	}

	if (typeof opts.boolean === 'boolean' && opts.boolean) {
		flags.allBools = true;
	} else {
		[].concat(opts.boolean).filter(Boolean).forEach(function (key) {
			flags.bools[key] = true;
		});
	}

	var aliases = {};

	function aliasIsBoolean(key) {
		return aliases[key].some(function (x) {
			return flags.bools[x];
		});
	}

	Object.keys(opts.alias || {}).forEach(function (key) {
		aliases[key] = [].concat(opts.alias[key]);
		aliases[key].forEach(function (x) {
			aliases[x] = [key].concat(aliases[key].filter(function (y) {
				return x !== y;
			}));
		});
	});

	[].concat(opts.string).filter(Boolean).forEach(function (key) {
		flags.strings[key] = true;
		if (aliases[key]) {
			[].concat(aliases[key]).forEach(function (k) {
				flags.strings[k] = true;
			});
		}
	});

	var defaults = opts.default || {};

	var argv = { _: [] };

	function argDefined(key, arg) {
		return (flags.allBools && (/^--[^=]+$/).test(arg))
			|| flags.strings[key]
			|| flags.bools[key]
			|| aliases[key];
	}

	function setKey(obj, keys, value) {
		var o = obj;
		for (var i = 0; i < keys.length - 1; i++) {
			var key = keys[i];
			if (isConstructorOrProto(o, key)) { return; }
			if (o[key] === undefined) { o[key] = {}; }
			if (
				o[key] === Object.prototype
				|| o[key] === Number.prototype
				|| o[key] === String.prototype
			) {
				o[key] = {};
			}
			if (o[key] === Array.prototype) { o[key] = []; }
			o = o[key];
		}

		var lastKey = keys[keys.length - 1];
		if (isConstructorOrProto(o, lastKey)) { return; }
		if (
			o === Object.prototype
			|| o === Number.prototype
			|| o === String.prototype
		) {
			o = {};
		}
		if (o === Array.prototype) { o = []; }
		if (o[lastKey] === undefined || flags.bools[lastKey] || typeof o[lastKey] === 'boolean') {
			o[lastKey] = value;
		} else if (Array.isArray(o[lastKey])) {
			o[lastKey].push(value);
		} else {
			o[lastKey] = [o[lastKey], value];
		}
	}

	function setArg(key, val, arg) {
		if (arg && flags.unknownFn && !argDefined(key, arg)) {
			if (flags.unknownFn(arg) === false) { return; }
		}

		var value = !flags.strings[key] && isNumber(val)
			? Number(val)
			: val;
		setKey(argv, key.split('.'), value);

		(aliases[key] || []).forEach(function (x) {
			setKey(argv, x.split('.'), value);
		});
	}

	Object.keys(flags.bools).forEach(function (key) {
		setArg(key, defaults[key] === undefined ? false : defaults[key]);
	});

	var notFlags = [];

	if (args.indexOf('--') !== -1) {
		notFlags = args.slice(args.indexOf('--') + 1);
		args = args.slice(0, args.indexOf('--'));
	}

	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		var key;
		var next;

		if ((/^--.+=/).test(arg)) {
			// Using [\s\S] instead of . because js doesn't support the
			// 'dotall' regex modifier. See:
			// http://stackoverflow.com/a/1068308/13216
			var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
			key = m[1];
			var value = m[2];
			if (flags.bools[key]) {
				value = value !== 'false';
			}
			setArg(key, value, arg);
		} else if ((/^--no-.+/).test(arg)) {
			key = arg.match(/^--no-(.+)/)[1];
			setArg(key, false, arg);
		} else if ((/^--.+/).test(arg)) {
			key = arg.match(/^--(.+)/)[1];
			next = args[i + 1];
			if (
				next !== undefined
				&& !(/^(-|--)[^-]/).test(next)
				&& !flags.bools[key]
				&& !flags.allBools
				&& (aliases[key] ? !aliasIsBoolean(key) : true)
			) {
				setArg(key, next, arg);
				i += 1;
			} else if ((/^(true|false)$/).test(next)) {
				setArg(key, next === 'true', arg);
				i += 1;
			} else {
				setArg(key, flags.strings[key] ? '' : true, arg);
			}
		} else if ((/^-[^-]+/).test(arg)) {
			var letters = arg.slice(1, -1).split('');

			var broken = false;
			for (var j = 0; j < letters.length; j++) {
				next = arg.slice(j + 2);

				if (next === '-') {
					setArg(letters[j], next, arg);
					continue;
				}

				if ((/[A-Za-z]/).test(letters[j]) && next[0] === '=') {
					setArg(letters[j], next.slice(1), arg);
					broken = true;
					break;
				}

				if (
					(/[A-Za-z]/).test(letters[j])
					&& (/-?\d+(\.\d*)?(e-?\d+)?$/).test(next)
				) {
					setArg(letters[j], next, arg);
					broken = true;
					break;
				}

				if (letters[j + 1] && letters[j + 1].match(/\W/)) {
					setArg(letters[j], arg.slice(j + 2), arg);
					broken = true;
					break;
				} else {
					setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
				}
			}

			key = arg.slice(-1)[0];
			if (!broken && key !== '-') {
				if (
					args[i + 1]
					&& !(/^(-|--)[^-]/).test(args[i + 1])
					&& !flags.bools[key]
					&& (aliases[key] ? !aliasIsBoolean(key) : true)
				) {
					setArg(key, args[i + 1], arg);
					i += 1;
				} else if (args[i + 1] && (/^(true|false)$/).test(args[i + 1])) {
					setArg(key, args[i + 1] === 'true', arg);
					i += 1;
				} else {
					setArg(key, flags.strings[key] ? '' : true, arg);
				}
			}
		} else {
			if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
				argv._.push(flags.strings._ || !isNumber(arg) ? arg : Number(arg));
			}
			if (opts.stopEarly) {
				argv._.push.apply(argv._, args.slice(i + 1));
				break;
			}
		}
	}

	Object.keys(defaults).forEach(function (k) {
		if (!hasKey(argv, k.split('.'))) {
			setKey(argv, k.split('.'), defaults[k]);

			(aliases[k] || []).forEach(function (x) {
				setKey(argv, x.split('.'), defaults[k]);
			});
		}
	});

	if (opts['--']) {
		argv['--'] = notFlags.slice();
	} else {
		notFlags.forEach(function (k) {
			argv._.push(k);
		});
	}

	return argv;
};

var getCliArguments = /*@__PURE__*/getDefaultExportFromCjs(minimist);

var svgson_umd = {exports: {}};

(function (module, exports) {
	(function (global, factory) {
	  module.exports = factory() ;
	})(commonjsGlobal, (function () {
	  /*!
	   * Determine if an object is a Buffer
	   *
	   * @author   Feross Aboukhadijeh <https://feross.org>
	   * @license  MIT
	   */

	  // The _isBuffer check is for Safari 5-7 support, because it's missing
	  // Object.prototype.constructor. Remove this eventually
	  var isBuffer_1 = function (obj) {
	    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	  };

	  function isBuffer (obj) {
	    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	  }

	  // For Node v0.10 support. Remove this eventually.
	  function isSlowBuffer (obj) {
	    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	  }

	  var toString = Object.prototype.toString;

	  /**
	   * Get the native `typeof` a value.
	   *
	   * @param  {*} `val`
	   * @return {*} Native javascript type
	   */

	  var kindOf = function kindOf(val) {
	    // primitivies
	    if (typeof val === 'undefined') {
	      return 'undefined';
	    }
	    if (val === null) {
	      return 'null';
	    }
	    if (val === true || val === false || val instanceof Boolean) {
	      return 'boolean';
	    }
	    if (typeof val === 'string' || val instanceof String) {
	      return 'string';
	    }
	    if (typeof val === 'number' || val instanceof Number) {
	      return 'number';
	    }

	    // functions
	    if (typeof val === 'function' || val instanceof Function) {
	      return 'function';
	    }

	    // array
	    if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
	      return 'array';
	    }

	    // check for instances of RegExp and Date before calling `toString`
	    if (val instanceof RegExp) {
	      return 'regexp';
	    }
	    if (val instanceof Date) {
	      return 'date';
	    }

	    // other objects
	    var type = toString.call(val);

	    if (type === '[object RegExp]') {
	      return 'regexp';
	    }
	    if (type === '[object Date]') {
	      return 'date';
	    }
	    if (type === '[object Arguments]') {
	      return 'arguments';
	    }
	    if (type === '[object Error]') {
	      return 'error';
	    }

	    // buffer
	    if (isBuffer_1(val)) {
	      return 'buffer';
	    }

	    // es6: Map, WeakMap, Set, WeakSet
	    if (type === '[object Set]') {
	      return 'set';
	    }
	    if (type === '[object WeakSet]') {
	      return 'weakset';
	    }
	    if (type === '[object Map]') {
	      return 'map';
	    }
	    if (type === '[object WeakMap]') {
	      return 'weakmap';
	    }
	    if (type === '[object Symbol]') {
	      return 'symbol';
	    }

	    // typed arrays
	    if (type === '[object Int8Array]') {
	      return 'int8array';
	    }
	    if (type === '[object Uint8Array]') {
	      return 'uint8array';
	    }
	    if (type === '[object Uint8ClampedArray]') {
	      return 'uint8clampedarray';
	    }
	    if (type === '[object Int16Array]') {
	      return 'int16array';
	    }
	    if (type === '[object Uint16Array]') {
	      return 'uint16array';
	    }
	    if (type === '[object Int32Array]') {
	      return 'int32array';
	    }
	    if (type === '[object Uint32Array]') {
	      return 'uint32array';
	    }
	    if (type === '[object Float32Array]') {
	      return 'float32array';
	    }
	    if (type === '[object Float64Array]') {
	      return 'float64array';
	    }

	    // must be a plain object
	    return 'object';
	  };

	  function createCommonjsModule(fn, module) {
	  	return module = { exports: {} }, fn(module, module.exports), module.exports;
	  }

	  var renameKeys = createCommonjsModule(function (module) {
	  (function() {

	    function rename(obj, fn) {
	      if (typeof fn !== 'function') {
	        return obj;
	      }

	      var res = {};
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          res[fn(key, obj[key]) || key] = obj[key];
	        }
	      }
	      return res;
	    }

	    if (module.exports) {
	      module.exports = rename;
	    } else {
	      {
	        window.rename = rename;
	      }
	    }
	  })();
	  });

	  /**
	   * Expose `renameDeep`
	   */

	  var deepRenameKeys = function renameDeep(obj, cb) {
	    var type = kindOf(obj);

	    if (type !== 'object' && type !== 'array') {
	      throw new Error('expected an object');
	    }

	    var res = [];
	    if (type === 'object') {
	      obj = renameKeys(obj, cb);
	      res = {};
	    }

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var val = obj[key];
	        if (kindOf(val) === 'object' || kindOf(val) === 'array') {
	          res[key] = renameDeep(val, cb);
	        } else {
	          res[key] = val;
	        }
	      }
	    }
	    return res;
	  };

	  var eventemitter3 = createCommonjsModule(function (module) {

	  var has = Object.prototype.hasOwnProperty
	    , prefix = '~';

	  /**
	   * Constructor to create a storage for our `EE` objects.
	   * An `Events` instance is a plain object whose properties are event names.
	   *
	   * @constructor
	   * @api private
	   */
	  function Events() {}

	  //
	  // We try to not inherit from `Object.prototype`. In some engines creating an
	  // instance in this way is faster than calling `Object.create(null)` directly.
	  // If `Object.create(null)` is not supported we prefix the event names with a
	  // character to make sure that the built-in object properties are not
	  // overridden or used as an attack vector.
	  //
	  if (Object.create) {
	    Events.prototype = Object.create(null);

	    //
	    // This hack is needed because the `__proto__` property is still inherited in
	    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	    //
	    if (!new Events().__proto__) prefix = false;
	  }

	  /**
	   * Representation of a single event listener.
	   *
	   * @param {Function} fn The listener function.
	   * @param {Mixed} context The context to invoke the listener with.
	   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	   * @constructor
	   * @api private
	   */
	  function EE(fn, context, once) {
	    this.fn = fn;
	    this.context = context;
	    this.once = once || false;
	  }

	  /**
	   * Minimal `EventEmitter` interface that is molded against the Node.js
	   * `EventEmitter` interface.
	   *
	   * @constructor
	   * @api public
	   */
	  function EventEmitter() {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  /**
	   * Return an array listing the events for which the emitter has registered
	   * listeners.
	   *
	   * @returns {Array}
	   * @api public
	   */
	  EventEmitter.prototype.eventNames = function eventNames() {
	    var names = []
	      , events
	      , name;

	    if (this._eventsCount === 0) return names;

	    for (name in (events = this._events)) {
	      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	    }

	    if (Object.getOwnPropertySymbols) {
	      return names.concat(Object.getOwnPropertySymbols(events));
	    }

	    return names;
	  };

	  /**
	   * Return the listeners registered for a given event.
	   *
	   * @param {String|Symbol} event The event name.
	   * @param {Boolean} exists Only check if there are listeners.
	   * @returns {Array|Boolean}
	   * @api public
	   */
	  EventEmitter.prototype.listeners = function listeners(event, exists) {
	    var evt = prefix ? prefix + event : event
	      , available = this._events[evt];

	    if (exists) return !!available;
	    if (!available) return [];
	    if (available.fn) return [available.fn];

	    for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	      ee[i] = available[i].fn;
	    }

	    return ee;
	  };

	  /**
	   * Calls each of the listeners registered for a given event.
	   *
	   * @param {String|Symbol} event The event name.
	   * @returns {Boolean} `true` if the event had listeners, else `false`.
	   * @api public
	   */
	  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	    var evt = prefix ? prefix + event : event;

	    if (!this._events[evt]) return false;

	    var listeners = this._events[evt]
	      , len = arguments.length
	      , args
	      , i;

	    if (listeners.fn) {
	      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	      switch (len) {
	        case 1: return listeners.fn.call(listeners.context), true;
	        case 2: return listeners.fn.call(listeners.context, a1), true;
	        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	      }

	      for (i = 1, args = new Array(len -1); i < len; i++) {
	        args[i - 1] = arguments[i];
	      }

	      listeners.fn.apply(listeners.context, args);
	    } else {
	      var length = listeners.length
	        , j;

	      for (i = 0; i < length; i++) {
	        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	        switch (len) {
	          case 1: listeners[i].fn.call(listeners[i].context); break;
	          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	          case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	          default:
	            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	              args[j - 1] = arguments[j];
	            }

	            listeners[i].fn.apply(listeners[i].context, args);
	        }
	      }
	    }

	    return true;
	  };

	  /**
	   * Add a listener for a given event.
	   *
	   * @param {String|Symbol} event The event name.
	   * @param {Function} fn The listener function.
	   * @param {Mixed} [context=this] The context to invoke the listener with.
	   * @returns {EventEmitter} `this`.
	   * @api public
	   */
	  EventEmitter.prototype.on = function on(event, fn, context) {
	    var listener = new EE(fn, context || this)
	      , evt = prefix ? prefix + event : event;

	    if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	    else if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [this._events[evt], listener];

	    return this;
	  };

	  /**
	   * Add a one-time listener for a given event.
	   *
	   * @param {String|Symbol} event The event name.
	   * @param {Function} fn The listener function.
	   * @param {Mixed} [context=this] The context to invoke the listener with.
	   * @returns {EventEmitter} `this`.
	   * @api public
	   */
	  EventEmitter.prototype.once = function once(event, fn, context) {
	    var listener = new EE(fn, context || this, true)
	      , evt = prefix ? prefix + event : event;

	    if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	    else if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [this._events[evt], listener];

	    return this;
	  };

	  /**
	   * Remove the listeners of a given event.
	   *
	   * @param {String|Symbol} event The event name.
	   * @param {Function} fn Only remove the listeners that match this function.
	   * @param {Mixed} context Only remove the listeners that have this context.
	   * @param {Boolean} once Only remove one-time listeners.
	   * @returns {EventEmitter} `this`.
	   * @api public
	   */
	  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	    var evt = prefix ? prefix + event : event;

	    if (!this._events[evt]) return this;
	    if (!fn) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	      return this;
	    }

	    var listeners = this._events[evt];

	    if (listeners.fn) {
	      if (
	           listeners.fn === fn
	        && (!once || listeners.once)
	        && (!context || listeners.context === context)
	      ) {
	        if (--this._eventsCount === 0) this._events = new Events();
	        else delete this._events[evt];
	      }
	    } else {
	      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }

	      //
	      // Reset the array, or remove it completely if we have no more listeners.
	      //
	      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	      else if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }

	    return this;
	  };

	  /**
	   * Remove all listeners, or those of the specified event.
	   *
	   * @param {String|Symbol} [event] The event name.
	   * @returns {EventEmitter} `this`.
	   * @api public
	   */
	  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	    var evt;

	    if (event) {
	      evt = prefix ? prefix + event : event;
	      if (this._events[evt]) {
	        if (--this._eventsCount === 0) this._events = new Events();
	        else delete this._events[evt];
	      }
	    } else {
	      this._events = new Events();
	      this._eventsCount = 0;
	    }

	    return this;
	  };

	  //
	  // Alias methods names because people roll like that.
	  //
	  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	  //
	  // This function doesn't apply anymore.
	  //
	  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	    return this;
	  };

	  //
	  // Expose the prefix.
	  //
	  EventEmitter.prefixed = prefix;

	  //
	  // Allow `EventEmitter` to be imported as module namespace.
	  //
	  EventEmitter.EventEmitter = EventEmitter;

	  //
	  // Expose the module.
	  //
	  {
	    module.exports = EventEmitter;
	  }
	  });

	  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


	  var noop = function noop() {};

	  var State = {
	      data: 'state-data',
	      cdata: 'state-cdata',
	      tagBegin: 'state-tag-begin',
	      tagName: 'state-tag-name',
	      tagEnd: 'state-tag-end',
	      attributeNameStart: 'state-attribute-name-start',
	      attributeName: 'state-attribute-name',
	      attributeNameEnd: 'state-attribute-name-end',
	      attributeValueBegin: 'state-attribute-value-begin',
	      attributeValue: 'state-attribute-value'
	  };

	  var Action = {
	      lt: 'action-lt',
	      gt: 'action-gt',
	      space: 'action-space',
	      equal: 'action-equal',
	      quote: 'action-quote',
	      slash: 'action-slash',
	      char: 'action-char',
	      error: 'action-error'
	  };

	  var Type$1 = {
	      text: 'text',
	      openTag: 'open-tag',
	      closeTag: 'close-tag',
	      attributeName: 'attribute-name',
	      attributeValue: 'attribute-value'
	  };

	  var charToAction = {
	      ' ': Action.space,
	      '\t': Action.space,
	      '\n': Action.space,
	      '\r': Action.space,
	      '<': Action.lt,
	      '>': Action.gt,
	      '"': Action.quote,
	      "'": Action.quote,
	      '=': Action.equal,
	      '/': Action.slash
	  };

	  var getAction = function getAction(char) {
	      return charToAction[char] || Action.char;
	  };

	  /**
	   * @param  {Object} options
	   * @param  {Boolean} options.debug
	   * @return {Object}
	   */
	  var create$1 = function create(options) {
	      var _State$data, _State$tagBegin, _State$tagName, _State$tagEnd, _State$attributeNameS, _State$attributeName, _State$attributeNameE, _State$attributeValue, _State$attributeValue2, _lexer$stateMachine;

	      options = Object.assign({ debug: false }, options);
	      var lexer = new eventemitter3();
	      var state = State.data;
	      var data = '';
	      var tagName = '';
	      var attrName = '';
	      var attrValue = '';
	      var isClosing = '';
	      var openingQuote = '';

	      var emit = function emit(type, value) {
	          // for now, ignore tags like: '?xml', '!DOCTYPE' or comments
	          if (tagName[0] === '?' || tagName[0] === '!') {
	              return;
	          }
	          var event = { type: type, value: value };
	          if (options.debug) {
	              console.log('emit:', event);
	          }
	          lexer.emit('data', event);
	      };

	      lexer.stateMachine = (_lexer$stateMachine = {}, _defineProperty(_lexer$stateMachine, State.data, (_State$data = {}, _defineProperty(_State$data, Action.lt, function () {
	          if (data.trim()) {
	              emit(Type$1.text, data);
	          }
	          tagName = '';
	          isClosing = false;
	          state = State.tagBegin;
	      }), _defineProperty(_State$data, Action.char, function (char) {
	          data += char;
	      }), _State$data)), _defineProperty(_lexer$stateMachine, State.cdata, _defineProperty({}, Action.char, function (char) {
	          data += char;
	          if (data.substr(-3) === ']]>') {
	              emit(Type$1.text, data.slice(0, -3));
	              data = '';
	              state = State.data;
	          }
	      })), _defineProperty(_lexer$stateMachine, State.tagBegin, (_State$tagBegin = {}, _defineProperty(_State$tagBegin, Action.space, noop), _defineProperty(_State$tagBegin, Action.char, function (char) {
	          tagName = char;
	          state = State.tagName;
	      }), _defineProperty(_State$tagBegin, Action.slash, function () {
	          tagName = '';
	          isClosing = true;
	      }), _State$tagBegin)), _defineProperty(_lexer$stateMachine, State.tagName, (_State$tagName = {}, _defineProperty(_State$tagName, Action.space, function () {
	          if (isClosing) {
	              state = State.tagEnd;
	          } else {
	              state = State.attributeNameStart;
	              emit(Type$1.openTag, tagName);
	          }
	      }), _defineProperty(_State$tagName, Action.gt, function () {
	          if (isClosing) {
	              emit(Type$1.closeTag, tagName);
	          } else {
	              emit(Type$1.openTag, tagName);
	          }
	          data = '';
	          state = State.data;
	      }), _defineProperty(_State$tagName, Action.slash, function () {
	          state = State.tagEnd;
	          emit(Type$1.openTag, tagName);
	      }), _defineProperty(_State$tagName, Action.char, function (char) {
	          tagName += char;
	          if (tagName === '![CDATA[') {
	              state = State.cdata;
	              data = '';
	              tagName = '';
	          }
	      }), _State$tagName)), _defineProperty(_lexer$stateMachine, State.tagEnd, (_State$tagEnd = {}, _defineProperty(_State$tagEnd, Action.gt, function () {
	          emit(Type$1.closeTag, tagName);
	          data = '';
	          state = State.data;
	      }), _defineProperty(_State$tagEnd, Action.char, noop), _State$tagEnd)), _defineProperty(_lexer$stateMachine, State.attributeNameStart, (_State$attributeNameS = {}, _defineProperty(_State$attributeNameS, Action.char, function (char) {
	          attrName = char;
	          state = State.attributeName;
	      }), _defineProperty(_State$attributeNameS, Action.gt, function () {
	          data = '';
	          state = State.data;
	      }), _defineProperty(_State$attributeNameS, Action.space, noop), _defineProperty(_State$attributeNameS, Action.slash, function () {
	          isClosing = true;
	          state = State.tagEnd;
	      }), _State$attributeNameS)), _defineProperty(_lexer$stateMachine, State.attributeName, (_State$attributeName = {}, _defineProperty(_State$attributeName, Action.space, function () {
	          state = State.attributeNameEnd;
	      }), _defineProperty(_State$attributeName, Action.equal, function () {
	          emit(Type$1.attributeName, attrName);
	          state = State.attributeValueBegin;
	      }), _defineProperty(_State$attributeName, Action.gt, function () {
	          attrValue = '';
	          emit(Type$1.attributeName, attrName);
	          emit(Type$1.attributeValue, attrValue);
	          data = '';
	          state = State.data;
	      }), _defineProperty(_State$attributeName, Action.slash, function () {
	          isClosing = true;
	          attrValue = '';
	          emit(Type$1.attributeName, attrName);
	          emit(Type$1.attributeValue, attrValue);
	          state = State.tagEnd;
	      }), _defineProperty(_State$attributeName, Action.char, function (char) {
	          attrName += char;
	      }), _State$attributeName)), _defineProperty(_lexer$stateMachine, State.attributeNameEnd, (_State$attributeNameE = {}, _defineProperty(_State$attributeNameE, Action.space, noop), _defineProperty(_State$attributeNameE, Action.equal, function () {
	          emit(Type$1.attributeName, attrName);
	          state = State.attributeValueBegin;
	      }), _defineProperty(_State$attributeNameE, Action.gt, function () {
	          attrValue = '';
	          emit(Type$1.attributeName, attrName);
	          emit(Type$1.attributeValue, attrValue);
	          data = '';
	          state = State.data;
	      }), _defineProperty(_State$attributeNameE, Action.char, function (char) {
	          attrValue = '';
	          emit(Type$1.attributeName, attrName);
	          emit(Type$1.attributeValue, attrValue);
	          attrName = char;
	          state = State.attributeName;
	      }), _State$attributeNameE)), _defineProperty(_lexer$stateMachine, State.attributeValueBegin, (_State$attributeValue = {}, _defineProperty(_State$attributeValue, Action.space, noop), _defineProperty(_State$attributeValue, Action.quote, function (char) {
	          openingQuote = char;
	          attrValue = '';
	          state = State.attributeValue;
	      }), _defineProperty(_State$attributeValue, Action.gt, function () {
	          attrValue = '';
	          emit(Type$1.attributeValue, attrValue);
	          data = '';
	          state = State.data;
	      }), _defineProperty(_State$attributeValue, Action.char, function (char) {
	          openingQuote = '';
	          attrValue = char;
	          state = State.attributeValue;
	      }), _State$attributeValue)), _defineProperty(_lexer$stateMachine, State.attributeValue, (_State$attributeValue2 = {}, _defineProperty(_State$attributeValue2, Action.space, function (char) {
	          if (openingQuote) {
	              attrValue += char;
	          } else {
	              emit(Type$1.attributeValue, attrValue);
	              state = State.attributeNameStart;
	          }
	      }), _defineProperty(_State$attributeValue2, Action.quote, function (char) {
	          if (openingQuote === char) {
	              emit(Type$1.attributeValue, attrValue);
	              state = State.attributeNameStart;
	          } else {
	              attrValue += char;
	          }
	      }), _defineProperty(_State$attributeValue2, Action.gt, function (char) {
	          if (openingQuote) {
	              attrValue += char;
	          } else {
	              emit(Type$1.attributeValue, attrValue);
	              data = '';
	              state = State.data;
	          }
	      }), _defineProperty(_State$attributeValue2, Action.slash, function (char) {
	          if (openingQuote) {
	              attrValue += char;
	          } else {
	              emit(Type$1.attributeValue, attrValue);
	              isClosing = true;
	              state = State.tagEnd;
	          }
	      }), _defineProperty(_State$attributeValue2, Action.char, function (char) {
	          attrValue += char;
	      }), _State$attributeValue2)), _lexer$stateMachine);

	      var step = function step(char) {
	          if (options.debug) {
	              console.log(state, char);
	          }
	          var actions = lexer.stateMachine[state];
	          var action = actions[getAction(char)] || actions[Action.error] || actions[Action.char];
	          action(char);
	      };

	      lexer.write = function (str) {
	          var len = str.length;
	          for (var i = 0; i < len; i++) {
	              step(str[i]);
	          }
	      };

	      return lexer;
	  };

	  var lexer = {
	      State: State,
	      Action: Action,
	      Type: Type$1,
	      create: create$1
	  };

	  var Type = lexer.Type;

	  var NodeType = {
	      element: 'element',
	      text: 'text'
	  };

	  var createNode = function createNode(params) {
	      return Object.assign({
	          name: '',
	          type: NodeType.element,
	          value: '',
	          parent: null,
	          attributes: {},
	          children: []
	      }, params);
	  };

	  var create = function create(options) {
	      options = Object.assign({
	          stream: false,
	          parentNodes: true,
	          doneEvent: 'done',
	          tagPrefix: 'tag:',
	          emitTopLevelOnly: false,
	          debug: false
	      }, options);

	      var lexer$1 = void 0,
	          rootNode = void 0,
	          current = void 0,
	          attrName = void 0;

	      var reader = new eventemitter3();

	      var handleLexerData = function handleLexerData(data) {
	          switch (data.type) {

	              case Type.openTag:
	                  if (current === null) {
	                      current = rootNode;
	                      current.name = data.value;
	                  } else {
	                      var node = createNode({
	                          name: data.value,
	                          parent: current
	                      });
	                      current.children.push(node);
	                      current = node;
	                  }
	                  break;

	              case Type.closeTag:
	                  var parent = current.parent;
	                  if (!options.parentNodes) {
	                      current.parent = null;
	                  }
	                  if (current.name !== data.value) {
	                      // ignore unexpected closing tag
	                      break;
	                  }
	                  if (options.stream && parent === rootNode) {
	                      rootNode.children = [];
	                      // do not expose parent node in top level nodes
	                      current.parent = null;
	                  }
	                  if (!options.emitTopLevelOnly || parent === rootNode) {
	                      reader.emit(options.tagPrefix + current.name, current);
	                      reader.emit('tag', current.name, current);
	                  }
	                  if (current === rootNode) {
	                      // end of document, stop listening
	                      lexer$1.removeAllListeners('data');
	                      reader.emit(options.doneEvent, current);
	                      rootNode = null;
	                  }
	                  current = parent;
	                  break;

	              case Type.text:
	                  if (current) {
	                      current.children.push(createNode({
	                          type: NodeType.text,
	                          value: data.value,
	                          parent: options.parentNodes ? current : null
	                      }));
	                  }
	                  break;

	              case Type.attributeName:
	                  attrName = data.value;
	                  current.attributes[attrName] = '';
	                  break;

	              case Type.attributeValue:
	                  current.attributes[attrName] = data.value;
	                  break;
	          }
	      };

	      reader.reset = function () {
	          lexer$1 = lexer.create({ debug: options.debug });
	          lexer$1.on('data', handleLexerData);
	          rootNode = createNode();
	          current = null;
	          attrName = '';
	          reader.parse = lexer$1.write;
	      };

	      reader.reset();
	      return reader;
	  };

	  var parseSync = function parseSync(xml, options) {
	      options = Object.assign({}, options, { stream: false, tagPrefix: ':' });
	      var reader = create(options);
	      var res = void 0;
	      reader.on('done', function (ast) {
	          res = ast;
	      });
	      reader.parse(xml);
	      return res;
	  };

	  var reader = {
	      parseSync: parseSync,
	      create: create,
	      NodeType: NodeType
	  };
	  var reader_1 = reader.parseSync;

	  var parseInput = function parseInput(input) {
	    var parsed = reader_1("<root>".concat(input, "</root>"), {
	      parentNodes: false
	    });
	    var isValid = parsed.children && parsed.children.length > 0 && parsed.children.every(function (node) {
	      return node.name === 'svg';
	    });
	    if (isValid) {
	      return parsed.children.length === 1 ? parsed.children[0] : parsed.children;
	    } else {
	      throw Error('nothing to parse');
	    }
	  };
	  var camelize = function camelize(node) {
	    return deepRenameKeys(node, function (key) {
	      if (!notCamelcase(key)) {
	        return toCamelCase(key);
	      }
	      return key;
	    });
	  };
	  var toCamelCase = function toCamelCase(prop) {
	    return prop.replace(/[-|:]([a-z])/gi, function (all, letter) {
	      return letter.toUpperCase();
	    });
	  };
	  var notCamelcase = function notCamelcase(prop) {
	    return /^(data|aria)(-\w+)/.test(prop);
	  };
	  var escapeText = function escapeText(text) {
	    if (text) {
	      var str = String(text);
	      return /[&<>]/.test(str) ? "<![CDATA[".concat(str.replace(/]]>/, ']]]]><![CDATA[>'), "]]>") : str;
	    }
	    return '';
	  };
	  var escapeAttr = function escapeAttr(attr) {
	    return String(attr).replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	  };

	  var svgsonSync = function svgsonSync(input) {
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$transformNode = _ref.transformNode,
	      transformNode = _ref$transformNode === void 0 ? function (node) {
	        return node;
	      } : _ref$transformNode,
	      _ref$camelcase = _ref.camelcase,
	      camelcase = _ref$camelcase === void 0 ? false : _ref$camelcase;
	    var applyFilters = function applyFilters(input) {
	      var n;
	      n = transformNode(input);
	      if (camelcase) {
	        n = camelize(n);
	      }
	      return n;
	    };
	    return applyFilters(parseInput(input));
	  };
	  function svgson() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    return new Promise(function (resolve, reject) {
	      try {
	        var res = svgsonSync.apply(void 0, args);
	        resolve(res);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  }

	  var stringify = function stringify(_ast) {
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$transformAttr = _ref.transformAttr,
	      transformAttr = _ref$transformAttr === void 0 ? function (key, value, escape) {
	        return "".concat(key, "=\"").concat(escape(value), "\"");
	      } : _ref$transformAttr,
	      _ref$transformNode = _ref.transformNode,
	      transformNode = _ref$transformNode === void 0 ? function (node) {
	        return node;
	      } : _ref$transformNode,
	      _ref$selfClose = _ref.selfClose,
	      selfClose = _ref$selfClose === void 0 ? true : _ref$selfClose;
	    if (Array.isArray(_ast)) {
	      return _ast.map(function (ast) {
	        return stringify(ast, {
	          transformAttr: transformAttr,
	          selfClose: selfClose,
	          transformNode: transformNode
	        });
	      }).join('');
	    }
	    var ast = transformNode(_ast);
	    if (ast.type === 'text') {
	      return escapeText(ast.value);
	    }
	    var attributes = '';
	    for (var attr in ast.attributes) {
	      var attrStr = transformAttr(attr, ast.attributes[attr], escapeAttr, ast.name);
	      attributes += attrStr ? " ".concat(attrStr) : '';
	    }
	    return ast.children && ast.children.length > 0 || !selfClose ? "<".concat(ast.name).concat(attributes, ">").concat(stringify(ast.children, {
	      transformAttr: transformAttr,
	      transformNode: transformNode,
	      selfClose: selfClose
	    }), "</").concat(ast.name, ">") : "<".concat(ast.name).concat(attributes, "/>");
	  };

	  var indexUmd = Object.assign({}, {
	    parse: svgson,
	    parseSync: svgsonSync,
	    stringify: stringify
	  });

	  return indexUmd;

	})); 
} (svgson_umd));

var svgson_umdExports = svgson_umd.exports;

const currentDir = v$1(import.meta.url);
const { pkg } = getCliArguments(process.argv.slice(2));
const targetDir = a$1.resolve(currentDir, `../../${pkg}`);
if (existsSync(`${targetDir}/icons`)) {
  unlinkSync(`${targetDir}/icons`);
  unlinkSync(`${targetDir}/lib/meistericons-${pkg}.ts`);
}
for (const icon of Object.entries(icons)) {
  if (icon[0] !== "icons") {
    const parsedSvg = svgson_umdExports.parseSync(icon[1]);
    parsedSvg.children.forEach((child) => {
      if (!child.attributes.key) {
        child.attributes.key = crypto.randomBytes(20).toString("hex");
      }
      if (child.attributes.fill === "#000") {
        child.attributes.fill = "currentColor";
      }
    });
    const iconNodes = [u$1(icon[0]), parsedSvg.children.map(({ name, attributes }) => [name, attributes])];
    l$1(iconNodes, pkg);
    i$1(iconNodes[0], pkg);
    d$1(icon[0], pkg);
  }
}
console.log(`Generated ${Object.keys(icons).length - 1} icons for @meistericons/${pkg}`);