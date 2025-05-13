"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Statistics = ({ title, stats }) => {
    const resultStats = stats.map(({ id, label, percentage }) => ((0, jsx_runtime_1.jsxs)("li", { className: "item", children: [(0, jsx_runtime_1.jsx)("span", { className: "label", children: label }), (0, jsx_runtime_1.jsx)("span", { className: "percentage", children: percentage })] }, id)));
    return ((0, jsx_runtime_1.jsxs)("section", { className: "statistics", children: [title !== undefined && (0, jsx_runtime_1.jsx)("h2", { className: "title", children: title }), (0, jsx_runtime_1.jsx)("ul", { className: "stat-list", children: resultStats })] }));
};
exports.default = Statistics;
//# sourceMappingURL=Statistics.js.map