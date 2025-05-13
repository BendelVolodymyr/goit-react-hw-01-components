"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FriendListItem_1 = __importDefault(require("./FriendListItem"));
const FriendList = ({ friends }) => {
    const resultFriends = friends.map(({ id, avatar, name, isOnline }) => ((0, jsx_runtime_1.jsx)("ul", { className: "friend-list", children: (0, jsx_runtime_1.jsx)(FriendListItem_1.default, { avatar: avatar, name: name, isOnline: isOnline }) }, id)));
    return (0, jsx_runtime_1.jsx)("section", { className: "friends", children: resultFriends });
};
exports.default = FriendList;
//# sourceMappingURL=FriendList.js.map