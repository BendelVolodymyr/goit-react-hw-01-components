"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TransactionHistory = ({ items }) => {
    const resultItems = items.map(({ id, type, amount, currency }) => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: type.toUpperCase() }), (0, jsx_runtime_1.jsx)("td", { children: amount.toUpperCase() }), (0, jsx_runtime_1.jsx)("td", { children: currency.toUpperCase() })] }, id)));
    return ((0, jsx_runtime_1.jsx)("section", { className: "transaction", children: (0, jsx_runtime_1.jsxs)("table", { className: "transaction-history", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Amount" }), (0, jsx_runtime_1.jsx)("th", { children: "Currency" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: resultItems })] }) }));
};
exports.default = TransactionHistory;
//# sourceMappingURL=TransactionHistory.js.map