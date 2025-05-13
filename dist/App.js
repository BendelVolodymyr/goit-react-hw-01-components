"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const FriendList_1 = __importDefault(require("./FriendList/FriendList"));
const Profile_1 = __importDefault(require("./Profile/Profile"));
const Statistics_1 = __importDefault(require("./Statistics/Statistics"));
const TransactionHistory_1 = __importDefault(require("./TransactionHistory/TransactionHistory"));
const user_json_1 = __importDefault(require("./path/to/user.json"));
const data_json_1 = __importDefault(require("./path/to/data.json"));
const transactions_json_1 = __importDefault(require("./path/to/transactions.json"));
const friends_json_1 = __importDefault(require("./path/to/friends.json"));
const App = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Profile_1.default, { username: user_json_1.default.username, tag: user_json_1.default.tag, location: user_json_1.default.location, avatar: user_json_1.default.avatar, stats: user_json_1.default.stats }), (0, jsx_runtime_1.jsx)(Statistics_1.default, { title: "Upload stats", stats: data_json_1.default }), (0, jsx_runtime_1.jsx)(FriendList_1.default, { friends: friends_json_1.default }), (0, jsx_runtime_1.jsx)(TransactionHistory_1.default, { items: transactions_json_1.default })] }));
};
exports.App = App;
exports.default = exports.App;
//# sourceMappingURL=App.js.map