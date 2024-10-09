"use strict";(self.webpackChunkmetronic_angular_demo1=self.webpackChunkmetronic_angular_demo1||[]).push([[4],{61004:function(e,l,d){d.r(l),d.d(l,{BuilderModule:function(){return c}});var n=d(16274),o=d(65543),i=d(91159),a=d(96731),t=d(42741),Z=d(21941),g=d(96521),u=d(93324),r=d(46469),s=d(88027);const T=["form"];let A=(()=>{class e{constructor(e,l){this.layout=e,this.el=l,this.activeTabId=1}ngOnInit(){this.model=this.layout.getConfig()}setActiveTab(e){this.activeTabId=e}getActiveTabCSSClass(e){return e!==this.activeTabId?"":"active"}resetPreview(){this.layout.refreshConfigToDefault()}submitPreview(){this.layout.setConfig(this.model),location.reload()}ngAfterViewInit(){const e=this.el.nativeElement.querySelectorAll(".example");a.Z.init(e)}}return e.\u0275fac=function(l){return new(l||e)(t.Y36(Z.Pb),t.Y36(t.SBq))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-builder"]],viewQuery:function(e,l){if(1&e&&t.Gf(T,7),2&e){let e;t.iGM(e=t.CRH())&&(l.form=e.first)}},decls:301,vars:36,consts:[[3,"svg"],[1,"card","card-custom","gutter-b"],[1,"card-header","card-header-tabs-line"],["role","tablist",1,"nav","nav-dark","nav-bold","nav-tabs","nav-tabs-line"],[1,"nav-item"],["role","tab",1,"nav-link","cursor-pointer",3,"ngClass","click"],["novalidate","",1,"form",3,"ngSubmit"],["form","ngForm"],[1,"card-body"],[1,"tab-content","pt-3"],[1,"tab-pane",3,"ngClass"],[1,"form-group","row"],[1,"col-lg-3","col-form-label","text-lg-right"],[1,"col-lg-9","col-xl-4"],[1,"switch","switch-icon"],["type","checkbox","name","builder[header][self][fixed][desktop]","value","true",3,"ngModel","ngModelChange"],[1,"form-text","text-muted"],["type","checkbox","name","builder[header][self][fixed][mobile]","value","true",3,"ngModel","ngModelChange"],["name","builder[header][self][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","fluid"],["value","fixed"],["type","checkbox","name","builder[header][menu][self][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[header][menu][self][static]","value","true",3,"ngModel","ngModelChange"],["name","builder[header][menu][self][layout]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","default"],["value","tab"],["type","checkbox","name","builder[header][menu][self][rootArrow]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[subheader][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[subheader][fixed]","value","true",3,"ngModel","ngModelChange"],["name","builder[subheader][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["name","builder[subheader][style]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","transparent"],["value","solid"],["name","builder[layout][subheader][layoutVersion]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","v1"],["value","v2"],["value","v3"],["value","v4"],["value","v5"],["value","v6"],["name","builder[content][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"col-lg-9","col-xl-6"],["type","checkbox","name","builder[aside][self][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][static]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][self][fixed]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builde[aside][self][minimize][toggle]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][self][minimize][default]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][scroll]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][dropdown]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[footer][fixed]","value","true",3,"ngModel","ngModelChange"],["name","builder[footer][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-lg-4"],[1,"col-lg-8"],["type","submit","name","builder_submit",1,"btn","btn-primary"],["type","submit","name","builder_reset",1,"btn","btn-secondary",3,"click"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"example","mb-10"],[1,"example-code"],["data-placement","left","ngbTooltip","Copy code",1,"example-copy"],[1,"example-highlight"],[3,"highlight"]],template:function(e,l){1&e&&(t.TgZ(0,"app-notice",0),t.TgZ(1,"p"),t._uU(2," The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real time. The configured layout options will be saved until you change or reset them. To use the layout builder, choose the layout options and click the "),t.TgZ(3,"code"),t._uU(4,"Preview"),t.qZA(),t._uU(5," button to preview the changes. "),t.qZA(),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"div",2),t.TgZ(8,"ul",3),t.TgZ(9,"li",4),t.TgZ(10,"a",5),t.NdJ("click",function(){return l.setActiveTab(1)}),t._uU(11," Header "),t.qZA(),t.qZA(),t.TgZ(12,"li",4),t.TgZ(13,"a",5),t.NdJ("click",function(){return l.setActiveTab(2)}),t._uU(14," Subheader "),t.qZA(),t.qZA(),t.TgZ(15,"li",4),t.TgZ(16,"a",5),t.NdJ("click",function(){return l.setActiveTab(3)}),t._uU(17," Content "),t.qZA(),t.qZA(),t.TgZ(18,"li",4),t.TgZ(19,"a",5),t.NdJ("click",function(){return l.setActiveTab(4)}),t._uU(20," Aside "),t.qZA(),t.qZA(),t.TgZ(21,"li",4),t.TgZ(22,"a",5),t.NdJ("click",function(){return l.setActiveTab(5)}),t._uU(23," Footer "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"form",6,7),t.NdJ("ngSubmit",function(){return l.submitPreview()}),t.TgZ(26,"div",8),t.TgZ(27,"div",9),t.TgZ(28,"div",10),t.TgZ(29,"div",11),t.TgZ(30,"label",12),t._uU(31,"Desktop Fixed Header:"),t.qZA(),t.TgZ(32,"div",13),t.TgZ(33,"span",14),t.TgZ(34,"label"),t.TgZ(35,"input",15),t.NdJ("ngModelChange",function(e){return l.model.header.self.fixed.desktop=e}),t.qZA(),t._UZ(36,"span"),t.qZA(),t.qZA(),t.TgZ(37,"div",16),t._uU(38," Enable fixed header for desktop mode "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",11),t.TgZ(40,"label",12),t._uU(41,"Mobile Fixed Header:"),t.qZA(),t.TgZ(42,"div",13),t.TgZ(43,"span",14),t.TgZ(44,"label"),t.TgZ(45,"input",17),t.NdJ("ngModelChange",function(e){return l.model.header.self.fixed.mobile=e}),t.qZA(),t._UZ(46,"span"),t.qZA(),t.qZA(),t.TgZ(47,"div",16),t._uU(48," Enable fixed header for mobile mode "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",11),t.TgZ(50,"label",12),t._uU(51,"Header Width:"),t.qZA(),t.TgZ(52,"div",13),t.TgZ(53,"select",18),t.NdJ("ngModelChange",function(e){return l.model.header.self.width=e}),t.TgZ(54,"option",19),t._uU(55,"Fluid"),t.qZA(),t.TgZ(56,"option",20),t._uU(57,"Fixed"),t.qZA(),t.qZA(),t.TgZ(58,"div",16),t._uU(59,"Select header width type."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(60,"div",11),t.TgZ(61,"label",12),t._uU(62,"Display Header Menu:"),t.qZA(),t.TgZ(63,"div",13),t.TgZ(64,"span",14),t.TgZ(65,"label"),t.TgZ(66,"input",21),t.NdJ("ngModelChange",function(e){return l.model.header.menu.self.display=e}),t.qZA(),t._UZ(67,"span"),t.qZA(),t.qZA(),t.TgZ(68,"div",16),t._uU(69,"Display header menu"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(70,"div",11),t.TgZ(71,"label",12),t._uU(72,"Static Header Menu:"),t.qZA(),t.TgZ(73,"div",13),t.TgZ(74,"span",14),t.TgZ(75,"label"),t.TgZ(76,"input",22),t.NdJ("ngModelChange",function(e){return l.model.header.menu.self.static=e}),t.qZA(),t._UZ(77,"span"),t.qZA(),t.qZA(),t.TgZ(78,"div",16),t._uU(79,"Static header menu"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(80,"div",11),t.TgZ(81,"label",12),t._uU(82,"Header Menu Layout:"),t.qZA(),t.TgZ(83,"div",13),t.TgZ(84,"select",23),t.NdJ("ngModelChange",function(e){return l.model.header.menu.self.layout=e}),t.TgZ(85,"option",24),t._uU(86,"Default"),t.qZA(),t.TgZ(87,"option",25),t._uU(88,"Tab"),t.qZA(),t.qZA(),t.TgZ(89,"div",16),t._uU(90,"Select header width type."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(91,"div",11),t.TgZ(92,"label",12),t._uU(93,"Header Menu Arrows:"),t.qZA(),t.TgZ(94,"div",13),t.TgZ(95,"span",14),t.TgZ(96,"label"),t.TgZ(97,"input",26),t.NdJ("ngModelChange",function(e){return l.model.header.menu.self.rootArrow=e}),t.qZA(),t._UZ(98,"span"),t.qZA(),t.qZA(),t.TgZ(99,"div",16),t._uU(100," Enable header menu root link arrows "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(101,"div",10),t.TgZ(102,"div",11),t.TgZ(103,"label",12),t._uU(104,"Display Subheader:"),t.qZA(),t.TgZ(105,"div",13),t.TgZ(106,"span",14),t.TgZ(107,"label"),t.TgZ(108,"input",27),t.NdJ("ngModelChange",function(e){return l.model.subheader.display=e}),t.qZA(),t._UZ(109,"span"),t.qZA(),t.qZA(),t.TgZ(110,"div",16),t._uU(111,"Display subheader"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(112,"div",11),t.TgZ(113,"label",12),t._uU(114,"Fixed Subheader:"),t.qZA(),t.TgZ(115,"div",13),t.TgZ(116,"span",14),t.TgZ(117,"label"),t.TgZ(118,"input",28),t.NdJ("ngModelChange",function(e){return l.model.subheader.fixed=e}),t.qZA(),t._UZ(119,"span"),t.qZA(),t.qZA(),t.TgZ(120,"div",16),t._uU(121," Enable fixed(sticky) subheader. Requires "),t.TgZ(122,"code"),t._uU(123,"Solid"),t.qZA(),t._uU(124," subheader style. "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(125,"div",11),t.TgZ(126,"label",12),t._uU(127,"Width:"),t.qZA(),t.TgZ(128,"div",13),t.TgZ(129,"select",29),t.NdJ("ngModelChange",function(e){return l.model.subheader.width=e}),t.TgZ(130,"option",19),t._uU(131,"Fluid"),t.qZA(),t.TgZ(132,"option",20),t._uU(133,"Fixed"),t.qZA(),t.qZA(),t.TgZ(134,"div",16),t._uU(135,"Select layout width type."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(136,"div",11),t.TgZ(137,"label",12),t._uU(138,"Subheader Style:"),t.qZA(),t.TgZ(139,"div",13),t.TgZ(140,"select",30),t.NdJ("ngModelChange",function(e){return l.model.subheader.style=e}),t.TgZ(141,"option",31),t._uU(142,"Transparent"),t.qZA(),t.TgZ(143,"option",32),t._uU(144,"Solid"),t.qZA(),t.qZA(),t.TgZ(145,"div",16),t._uU(146,"Select subheader style"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(147,"div",11),t.TgZ(148,"label",12),t._uU(149,"Subheader Layout:"),t.qZA(),t.TgZ(150,"div",13),t.TgZ(151,"select",33),t.NdJ("ngModelChange",function(e){return l.model.subheader.layoutVersion=e}),t.TgZ(152,"option",34),t._uU(153,"Subheader 1"),t.qZA(),t.TgZ(154,"option",35),t._uU(155,"Subheader 2"),t.qZA(),t.TgZ(156,"option",36),t._uU(157,"Subheader 3"),t.qZA(),t.TgZ(158,"option",37),t._uU(159,"Subheader 4"),t.qZA(),t.TgZ(160,"option",38),t._uU(161,"Subheader 5"),t.qZA(),t.TgZ(162,"option",39),t._uU(163,"Subheader 6"),t.qZA(),t.qZA(),t.TgZ(164,"div",16),t._uU(165,"Select subheader layout"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(166,"div",10),t.TgZ(167,"div",11),t.TgZ(168,"label",12),t._uU(169,"Width:"),t.qZA(),t.TgZ(170,"div",13),t.TgZ(171,"select",40),t.NdJ("ngModelChange",function(e){return l.model.content.width=e}),t.TgZ(172,"option",19),t._uU(173,"Fluid"),t.qZA(),t.TgZ(174,"option",20),t._uU(175,"Fixed"),t.qZA(),t.qZA(),t.TgZ(176,"div",16),t._uU(177,"Select layout width type."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(178,"div",10),t.TgZ(179,"div",11),t.TgZ(180,"label",12),t._uU(181,"Display:"),t.qZA(),t.TgZ(182,"div",41),t.TgZ(183,"span",14),t.TgZ(184,"label"),t.TgZ(185,"input",42),t.NdJ("ngModelChange",function(e){return l.model.aside.self.display=e}),t.qZA(),t._UZ(186,"span"),t.qZA(),t.qZA(),t.TgZ(187,"div",16),t._uU(188,"Display aside"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(189,"div",11),t.TgZ(190,"label",12),t._uU(191,"Static aside menu:"),t.qZA(),t.TgZ(192,"div",41),t.TgZ(193,"span",14),t.TgZ(194,"label"),t.TgZ(195,"input",43),t.NdJ("ngModelChange",function(e){return l.model.aside.menu.static=e}),t.qZA(),t._UZ(196,"span"),t.qZA(),t.qZA(),t.TgZ(197,"div",16),t._uU(198,"Static aside menu"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(199,"div",11),t.TgZ(200,"label",12),t._uU(201,"Fixed:"),t.qZA(),t.TgZ(202,"div",13),t.TgZ(203,"span",14),t.TgZ(204,"label"),t.TgZ(205,"input",44),t.NdJ("ngModelChange",function(e){return l.model.aside.self.fixed=e}),t.qZA(),t._UZ(206,"span"),t.qZA(),t.qZA(),t.TgZ(207,"div",16),t._uU(208,"Set fixed aside layout"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(209,"div",11),t.TgZ(210,"label",12),t._uU(211,"Minimize:"),t.qZA(),t.TgZ(212,"div",13),t.TgZ(213,"span",14),t.TgZ(214,"label"),t.TgZ(215,"input",45),t.NdJ("ngModelChange",function(e){return l.model.aside.self.minimize.toggle=e}),t.qZA(),t._UZ(216,"span"),t.qZA(),t.qZA(),t.TgZ(217,"div",16),t._uU(218,"Allow aside minimizing"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(219,"div",11),t.TgZ(220,"label",12),t._uU(221,"Default Minimize:"),t.qZA(),t.TgZ(222,"div",13),t.TgZ(223,"span",14),t.TgZ(224,"label"),t.TgZ(225,"input",46),t.NdJ("ngModelChange",function(e){return l.model.aside.self.minimize.default=e}),t.qZA(),t._UZ(226,"span"),t.qZA(),t.qZA(),t.TgZ(227,"div",16),t._uU(228," Set aside minimized by default "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(229,"div",11),t.TgZ(230,"label",12),t._uU(231,"Scroll:"),t.qZA(),t.TgZ(232,"div",13),t.TgZ(233,"span",14),t.TgZ(234,"label"),t.TgZ(235,"input",47),t.NdJ("ngModelChange",function(e){return l.model.aside.menu.scroll=e}),t.qZA(),t._UZ(236,"span"),t.qZA(),t.qZA(),t.TgZ(237,"div",16),t._uU(238,"Enable aside scroll"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(239,"div",11),t.TgZ(240,"label",12),t._uU(241,"Submenu toggle dropdown:"),t.qZA(),t.TgZ(242,"div",13),t.TgZ(243,"span",14),t.TgZ(244,"label"),t.TgZ(245,"input",48),t.NdJ("ngModelChange",function(e){return l.model.aside.menu.dropdown=e}),t.qZA(),t._UZ(246,"span"),t.qZA(),t.qZA(),t.TgZ(247,"div",16),t._uU(248," Select Submenu Toggle mode (works only when "),t.TgZ(249,"code"),t._uU(250,"Scroll"),t.qZA(),t._uU(251," is disabled. *By default - mode is 'accordion'). "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(252,"div",10),t.TgZ(253,"div",11),t.TgZ(254,"label",12),t._uU(255,"Fixed Desktop Footer:"),t.qZA(),t.TgZ(256,"div",13),t.TgZ(257,"span",14),t.TgZ(258,"label"),t.TgZ(259,"input",49),t.NdJ("ngModelChange",function(e){return l.model.footer.fixed=e}),t.qZA(),t._UZ(260,"span"),t.qZA(),t.qZA(),t.TgZ(261,"div",16),t._uU(262,"Set fixed desktop footer"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(263,"div",11),t.TgZ(264,"label",12),t._uU(265,"Width:"),t.qZA(),t.TgZ(266,"div",13),t.TgZ(267,"select",50),t.NdJ("ngModelChange",function(e){return l.model.footer.width=e}),t.TgZ(268,"option",19),t._uU(269,"Fluid"),t.qZA(),t.TgZ(270,"option",20),t._uU(271,"Fixed"),t.qZA(),t.qZA(),t.TgZ(272,"div",16),t._uU(273,"Select layout width type."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(274,"div",8),t.TgZ(275,"div",51),t._UZ(276,"div",52),t.TgZ(277,"div",53),t.TgZ(278,"button",54),t._uU(279," Preview "),t.qZA(),t._uU(280," \xa0 "),t.TgZ(281,"button",55),t.NdJ("click",function(){return l.resetPreview()}),t._uU(282," Reset "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(283,"div",1),t.TgZ(284,"div",56),t.TgZ(285,"div",57),t.TgZ(286,"h3",58),t._uU(287,"Generated Config"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(288,"div",8),t.TgZ(289,"div",59),t.TgZ(290,"p"),t._uU(291," Use for layout config in "),t.TgZ(292,"code"),t._uU(293,"src/app/_metronic/configs/default-layout.config.ts"),t.qZA(),t.qZA(),t.TgZ(294,"div",60),t.TgZ(295,"div",60),t._UZ(296,"span",61),t.TgZ(297,"div",62),t.TgZ(298,"pre"),t._UZ(299,"code",63),t.ALo(300,"json"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("svg","./assets/media/svg/icons/Tools/Tools.svg"),t.xp6(10),t.Q6J("ngClass",l.getActiveTabCSSClass(1)),t.xp6(3),t.Q6J("ngClass",l.getActiveTabCSSClass(2)),t.xp6(3),t.Q6J("ngClass",l.getActiveTabCSSClass(3)),t.xp6(3),t.Q6J("ngClass",l.getActiveTabCSSClass(4)),t.xp6(3),t.Q6J("ngClass",l.getActiveTabCSSClass(5)),t.xp6(6),t.Q6J("ngClass",l.getActiveTabCSSClass(1)),t.xp6(7),t.Q6J("ngModel",l.model.header.self.fixed.desktop),t.xp6(10),t.Q6J("ngModel",l.model.header.self.fixed.mobile),t.xp6(8),t.Q6J("ngModel",l.model.header.self.width),t.xp6(13),t.Q6J("ngModel",l.model.header.menu.self.display),t.xp6(10),t.Q6J("ngModel",l.model.header.menu.self.static),t.xp6(8),t.Q6J("ngModel",l.model.header.menu.self.layout),t.xp6(13),t.Q6J("ngModel",l.model.header.menu.self.rootArrow),t.xp6(4),t.Q6J("ngClass",l.getActiveTabCSSClass(2)),t.xp6(7),t.Q6J("ngModel",l.model.subheader.display),t.xp6(10),t.Q6J("ngModel",l.model.subheader.fixed),t.xp6(11),t.Q6J("ngModel",l.model.subheader.width),t.xp6(11),t.Q6J("ngModel",l.model.subheader.style),t.xp6(11),t.Q6J("ngModel",l.model.subheader.layoutVersion),t.xp6(15),t.Q6J("ngClass",l.getActiveTabCSSClass(3)),t.xp6(5),t.Q6J("ngModel",l.model.content.width),t.xp6(7),t.Q6J("ngClass",l.getActiveTabCSSClass(4)),t.xp6(7),t.Q6J("ngModel",l.model.aside.self.display),t.xp6(10),t.Q6J("ngModel",l.model.aside.menu.static),t.xp6(10),t.Q6J("ngModel",l.model.aside.self.fixed),t.xp6(10),t.Q6J("ngModel",l.model.aside.self.minimize.toggle),t.xp6(10),t.Q6J("ngModel",l.model.aside.self.minimize.default),t.xp6(10),t.Q6J("ngModel",l.model.aside.menu.scroll),t.xp6(10),t.Q6J("ngModel",l.model.aside.menu.dropdown),t.xp6(7),t.Q6J("ngClass",l.getActiveTabCSSClass(5)),t.xp6(7),t.Q6J("ngModel",l.model.footer.fixed),t.xp6(8),t.Q6J("ngModel",l.model.footer.width),t.xp6(32),t.Q6J("highlight",t.lcZ(300,34,l.model)))},directives:[g.j,n.mk,u._Y,u.JL,u.F,u.Wl,u.JJ,u.On,u.EJ,u.YN,u.Kr,r._L,s.y$],pipes:[n.Ts],styles:["[_nghost-%COMP%]   .hljs[_ngcontent-%COMP%]{background:transparent!important}"]}),e})(),c=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[n.ez,u.u5,i.V,s._l,r.Oz,r.HK,o.Bz.forChild([{path:"",component:A}])]]}),e})()}}]);