"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, NatanPlugin;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("NatanPlugin", NatanPlugin = function () {
                function NatanPlugin() {
                    _classCallCheck(this, NatanPlugin);

                    this.firstName = "Netanel ";
                    this.lastName = "Mrciano";
                    this.people = [];
                    this.editing = undefined;
                }

                NatanPlugin.prototype.create = function create() {
                    this.people.push(this.fullName);
                };

                NatanPlugin.prototype.delete = function _delete(index) {
                    this.people.splice(index, 1);
                };

                NatanPlugin.prototype.edit = function edit(index) {
                    this.editing = index;
                    this.newValue = this.people[index];
                };

                NatanPlugin.prototype.save = function save(index) {
                    this.people[index] = this.newValue;
                    this.editing = undefined;
                };

                _createClass(NatanPlugin, [{
                    key: "fullName",
                    get: function get() {

                        return this.firstName + " " + this.lastName;
                    }
                }]);

                return NatanPlugin;
            }());

            _export("NatanPlugin", NatanPlugin);
        }
    };
});