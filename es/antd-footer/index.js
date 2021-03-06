var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as classNames from 'classnames';
var styles = require('./index.scss');
var AntdFooter = /** @class */ (function (_super) {
    __extends(AntdFooter, _super);
    function AntdFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdFooter.prototype.render = function () {
        var _a = this.props, links = _a.links, copyright = _a.copyright, className = _a.className;
        var clsString = classNames(styles['Antd-footer'], className);
        return (React.createElement("div", { className: clsString },
            links && (React.createElement("div", { className: styles['links'] }, links.map(function (v, i) { return (React.createElement("a", { key: i, target: v.target, href: v.href }, v.title)); }))),
            copyright && React.createElement("div", { className: styles['copyright'] }, copyright)));
    };
    return AntdFooter;
}(React.Component));
export default AntdFooter;
//# sourceMappingURL=index.js.map