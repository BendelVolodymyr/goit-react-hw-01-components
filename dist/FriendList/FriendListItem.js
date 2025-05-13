"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FriendListItem = ({ avatar, name, isOnline, }) => {
    return ((0, jsx_runtime_1.jsxs)("li", { className: "item", children: [isOnline ? ((0, jsx_runtime_1.jsx)("span", { className: "status-on" })) : ((0, jsx_runtime_1.jsx)("span", { className: "status-off" })), (0, jsx_runtime_1.jsx)("img", { className: "avatar", src: avatar, alt: "User avatar", width: "48" }), (0, jsx_runtime_1.jsx)("p", { className: "name", children: name })] }));
};
exports.default = FriendListItem;
//# sourceMappingURL=FriendListItem.js.map