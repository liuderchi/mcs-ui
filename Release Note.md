[MCS ui](https://github.com/Mediatek-Cloud/mcs-ui) 發布 1.0 了！ 🎉

Demo: https://mcs-ui.netlify.com/

這段期間的改動主要是：

1. 新增 AIA project 所需的元件 (by Michael)
2. 搬遷 mcs-lite-ui 中 MCS 使用的元件至 mcs-ui (by Derek, Michael)

_Update: 2018-11-02_

🔧 **Library & Tool**

1. 由 nwb tools 改用 babel cli 輸出 es, cjs module
2. webpack 使用 `sideEffects` 選項優化 Bundle size
3. React 升級至 16.6，jest-styled-components 升級到 7.0

🎨 **MCS Style React Component**

1. AIA：

- [`EChart`](https://mcs-ui.netlify.com/?selectedKind=EChart)
- [`Gauge`](https://mcs-ui.netlify.com/?selectedKind=Gauge)
- [`InputFancyRange`](https://mcs-ui.netlify.com/?selectedKind=InputFancyRange)
- [`InputRadioGroup`](https://mcs-ui.netlify.com/?selectedKind=InputRadioGroup)
- [`KeyHandler`](https://mcs-ui.netlify.com/?selectedKind=KeyHandler)
- [`MarkdownTheme`](https://mcs-ui.netlify.com/?selectedKind=MarkdownTheme)
- [`SearchInput`](https://mcs-ui.netlify.com/?selectedKind=SearchInput)
- [`SortableTh`](https://mcs-ui.netlify.com/?selectedKind=SortableTh)
- [`TopBarProgress`](https://mcs-ui.netlify.com/?selectedKind=TopBarProgress)
- `withSubmittingState`

2. MCS：

- [`Avatar`](https://mcs-ui.netlify.com/?selectedKind=Avatar)
- [`ButtonText`](https://mcs-ui.netlify.com/?selectedKind=ButtonText)
- [`Breadcrumb`](https://mcs-ui.netlify.com/?selectedKind=Breadcrumb)
- [`ConfirmDialog`](https://mcs-ui.netlify.com/?selectedKind=ConfirmDialog)
- `Dialog`
- [`Hr`](https://mcs-ui.netlify.com/?selectedKind=Hr)
- [`HTML`](https://mcs-ui.netlify.com/?selectedKind=HTML)
- Icon: [`IconCheck`](https://mcs-ui.netlify.com/?selectedKind=IconCheck), [`IconWarning`](https://mcs-ui.netlify.com/?selectedKind=IconWarning), [`IconImage`](https://mcs-ui.netlify.com/?selectedKind=IconImage), [`IconSort`](https://mcs-ui.netlify.com/?selectedKind=IconSort)
- [`ImageDropzone`](https://mcs-ui.netlify.com/?selectedKind=ImageDropzone)
- [`InputMultiSelect`](https://mcs-ui.netlify.com/?selectedKind=InputMultiSelect)
- [`InputOrder`](https://mcs-ui.netlify.com/?selectedKind=InputOrder)
- Logo: [`LogoMCS`](https://mcs-ui.netlify.com/?selectedKind=Logo&selectedStory=LogoMCS), [`LogoMTK`](https://mcs-ui.netlify.com/?selectedKind=Logo&selectedStory=LogoMTK)
- [`OrderBox`](https://mcs-ui.netlify.com/?selectedKind=Orderbox)
- [`PanelIcon`](https://mcs-ui.netlify.com/?selectedKind=PanelIcon)
- [`StatusLight`](https://mcs-ui.netlify.com/?selectedKind=StatusLight)
- [`Switch`](https://mcs-ui.netlify.com/?selectedKind=Switch)
- [`Tooltip`](https://mcs-ui.netlify.com/?selectedKind=Tooltip)

更多資訊請參考 [CHANGELOG.md](https://github.com/Mediatek-Cloud/mcs-ui/blob/v1.0.0/CHANGELOG.md)

🚀 **Others**

1. 更新 NodeJS 11.0
2. Code Coverage (flow) 到達 92 %
