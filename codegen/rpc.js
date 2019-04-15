/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ninja = (function() {

    /**
     * Namespace ninja.
     * @exports ninja
     * @namespace
     */
    var ninja = {};

    ninja.NinjaService = (function() {

        /**
         * Constructs a new NinjaService service.
         * @memberof ninja
         * @classdesc Represents a NinjaService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function NinjaService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (NinjaService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = NinjaService;

        /**
         * Creates new NinjaService service using the specified rpc implementation.
         * @function create
         * @memberof ninja.NinjaService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {NinjaService} RPC service. Useful where requests and/or responses are streamed.
         */
        NinjaService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link ninja.NinjaService#findOne}.
         * @memberof ninja.NinjaService
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ninja.Ninja} [response] Ninja
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof ninja.NinjaService
         * @instance
         * @param {ninja.INinjaById} request NinjaById message or plain object
         * @param {ninja.NinjaService.FindOneCallback} callback Node-style callback called with the error, if any, and Ninja
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(NinjaService.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.ninja.NinjaById, $root.ninja.Ninja, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof ninja.NinjaService
         * @instance
         * @param {ninja.INinjaById} request NinjaById message or plain object
         * @returns {Promise<ninja.Ninja>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link ninja.NinjaService#findAll}.
         * @memberof ninja.NinjaService
         * @typedef findAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ninja.ListNinjas} [response] ListNinjas
         */

        /**
         * Calls findAll.
         * @function findAll
         * @memberof ninja.NinjaService
         * @instance
         * @param {ninja.IEmpty} request Empty message or plain object
         * @param {ninja.NinjaService.findAllCallback} callback Node-style callback called with the error, if any, and ListNinjas
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(NinjaService.prototype.findAll = function findAll(request, callback) {
            return this.rpcCall(findAll, $root.ninja.Empty, $root.ninja.ListNinjas, request, callback);
        }, "name", { value: "findAll" });

        /**
         * Calls findAll.
         * @function findAll
         * @memberof ninja.NinjaService
         * @instance
         * @param {ninja.IEmpty} request Empty message or plain object
         * @returns {Promise<ninja.ListNinjas>} Promise
         * @variation 2
         */

        return NinjaService;
    })();

    ninja.NinjaById = (function() {

        /**
         * Properties of a NinjaById.
         * @memberof ninja
         * @interface INinjaById
         * @property {number|null} [id] NinjaById id
         */

        /**
         * Constructs a new NinjaById.
         * @memberof ninja
         * @classdesc Represents a NinjaById.
         * @implements INinjaById
         * @constructor
         * @param {ninja.INinjaById=} [properties] Properties to set
         */
        function NinjaById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NinjaById id.
         * @member {number} id
         * @memberof ninja.NinjaById
         * @instance
         */
        NinjaById.prototype.id = 0;

        /**
         * Creates a new NinjaById instance using the specified properties.
         * @function create
         * @memberof ninja.NinjaById
         * @static
         * @param {ninja.INinjaById=} [properties] Properties to set
         * @returns {ninja.NinjaById} NinjaById instance
         */
        NinjaById.create = function create(properties) {
            return new NinjaById(properties);
        };

        /**
         * Encodes the specified NinjaById message. Does not implicitly {@link ninja.NinjaById.verify|verify} messages.
         * @function encode
         * @memberof ninja.NinjaById
         * @static
         * @param {ninja.INinjaById} message NinjaById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NinjaById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified NinjaById message, length delimited. Does not implicitly {@link ninja.NinjaById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ninja.NinjaById
         * @static
         * @param {ninja.INinjaById} message NinjaById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NinjaById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NinjaById message from the specified reader or buffer.
         * @function decode
         * @memberof ninja.NinjaById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ninja.NinjaById} NinjaById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NinjaById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ninja.NinjaById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NinjaById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ninja.NinjaById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ninja.NinjaById} NinjaById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NinjaById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NinjaById message.
         * @function verify
         * @memberof ninja.NinjaById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NinjaById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a NinjaById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ninja.NinjaById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ninja.NinjaById} NinjaById
         */
        NinjaById.fromObject = function fromObject(object) {
            if (object instanceof $root.ninja.NinjaById)
                return object;
            var message = new $root.ninja.NinjaById();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a NinjaById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ninja.NinjaById
         * @static
         * @param {ninja.NinjaById} message NinjaById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NinjaById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this NinjaById to JSON.
         * @function toJSON
         * @memberof ninja.NinjaById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NinjaById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NinjaById;
    })();

    ninja.Ninja = (function() {

        /**
         * Properties of a Ninja.
         * @memberof ninja
         * @interface INinja
         * @property {number|null} [id] Ninja id
         * @property {string|null} [name] Ninja name
         */

        /**
         * Constructs a new Ninja.
         * @memberof ninja
         * @classdesc Represents a Ninja.
         * @implements INinja
         * @constructor
         * @param {ninja.INinja=} [properties] Properties to set
         */
        function Ninja(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ninja id.
         * @member {number} id
         * @memberof ninja.Ninja
         * @instance
         */
        Ninja.prototype.id = 0;

        /**
         * Ninja name.
         * @member {string} name
         * @memberof ninja.Ninja
         * @instance
         */
        Ninja.prototype.name = "";

        /**
         * Creates a new Ninja instance using the specified properties.
         * @function create
         * @memberof ninja.Ninja
         * @static
         * @param {ninja.INinja=} [properties] Properties to set
         * @returns {ninja.Ninja} Ninja instance
         */
        Ninja.create = function create(properties) {
            return new Ninja(properties);
        };

        /**
         * Encodes the specified Ninja message. Does not implicitly {@link ninja.Ninja.verify|verify} messages.
         * @function encode
         * @memberof ninja.Ninja
         * @static
         * @param {ninja.INinja} message Ninja message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ninja.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Ninja message, length delimited. Does not implicitly {@link ninja.Ninja.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ninja.Ninja
         * @static
         * @param {ninja.INinja} message Ninja message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ninja.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ninja message from the specified reader or buffer.
         * @function decode
         * @memberof ninja.Ninja
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ninja.Ninja} Ninja
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ninja.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ninja.Ninja();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ninja message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ninja.Ninja
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ninja.Ninja} Ninja
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ninja.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ninja message.
         * @function verify
         * @memberof ninja.Ninja
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ninja.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Ninja message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ninja.Ninja
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ninja.Ninja} Ninja
         */
        Ninja.fromObject = function fromObject(object) {
            if (object instanceof $root.ninja.Ninja)
                return object;
            var message = new $root.ninja.Ninja();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Ninja message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ninja.Ninja
         * @static
         * @param {ninja.Ninja} message Ninja
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ninja.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Ninja to JSON.
         * @function toJSON
         * @memberof ninja.Ninja
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ninja.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ninja;
    })();

    ninja.ListNinjas = (function() {

        /**
         * Properties of a ListNinjas.
         * @memberof ninja
         * @interface IListNinjas
         * @property {Array.<ninja.INinja>|null} [ninjas] ListNinjas ninjas
         */

        /**
         * Constructs a new ListNinjas.
         * @memberof ninja
         * @classdesc Represents a ListNinjas.
         * @implements IListNinjas
         * @constructor
         * @param {ninja.IListNinjas=} [properties] Properties to set
         */
        function ListNinjas(properties) {
            this.ninjas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListNinjas ninjas.
         * @member {Array.<ninja.INinja>} ninjas
         * @memberof ninja.ListNinjas
         * @instance
         */
        ListNinjas.prototype.ninjas = $util.emptyArray;

        /**
         * Creates a new ListNinjas instance using the specified properties.
         * @function create
         * @memberof ninja.ListNinjas
         * @static
         * @param {ninja.IListNinjas=} [properties] Properties to set
         * @returns {ninja.ListNinjas} ListNinjas instance
         */
        ListNinjas.create = function create(properties) {
            return new ListNinjas(properties);
        };

        /**
         * Encodes the specified ListNinjas message. Does not implicitly {@link ninja.ListNinjas.verify|verify} messages.
         * @function encode
         * @memberof ninja.ListNinjas
         * @static
         * @param {ninja.IListNinjas} message ListNinjas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListNinjas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ninjas != null && message.ninjas.length)
                for (var i = 0; i < message.ninjas.length; ++i)
                    $root.ninja.Ninja.encode(message.ninjas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListNinjas message, length delimited. Does not implicitly {@link ninja.ListNinjas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ninja.ListNinjas
         * @static
         * @param {ninja.IListNinjas} message ListNinjas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListNinjas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListNinjas message from the specified reader or buffer.
         * @function decode
         * @memberof ninja.ListNinjas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ninja.ListNinjas} ListNinjas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListNinjas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ninja.ListNinjas();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ninjas && message.ninjas.length))
                        message.ninjas = [];
                    message.ninjas.push($root.ninja.Ninja.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListNinjas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ninja.ListNinjas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ninja.ListNinjas} ListNinjas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListNinjas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListNinjas message.
         * @function verify
         * @memberof ninja.ListNinjas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListNinjas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ninjas != null && message.hasOwnProperty("ninjas")) {
                if (!Array.isArray(message.ninjas))
                    return "ninjas: array expected";
                for (var i = 0; i < message.ninjas.length; ++i) {
                    var error = $root.ninja.Ninja.verify(message.ninjas[i]);
                    if (error)
                        return "ninjas." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListNinjas message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ninja.ListNinjas
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ninja.ListNinjas} ListNinjas
         */
        ListNinjas.fromObject = function fromObject(object) {
            if (object instanceof $root.ninja.ListNinjas)
                return object;
            var message = new $root.ninja.ListNinjas();
            if (object.ninjas) {
                if (!Array.isArray(object.ninjas))
                    throw TypeError(".ninja.ListNinjas.ninjas: array expected");
                message.ninjas = [];
                for (var i = 0; i < object.ninjas.length; ++i) {
                    if (typeof object.ninjas[i] !== "object")
                        throw TypeError(".ninja.ListNinjas.ninjas: object expected");
                    message.ninjas[i] = $root.ninja.Ninja.fromObject(object.ninjas[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListNinjas message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ninja.ListNinjas
         * @static
         * @param {ninja.ListNinjas} message ListNinjas
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListNinjas.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ninjas = [];
            if (message.ninjas && message.ninjas.length) {
                object.ninjas = [];
                for (var j = 0; j < message.ninjas.length; ++j)
                    object.ninjas[j] = $root.ninja.Ninja.toObject(message.ninjas[j], options);
            }
            return object;
        };

        /**
         * Converts this ListNinjas to JSON.
         * @function toJSON
         * @memberof ninja.ListNinjas
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListNinjas.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListNinjas;
    })();

    ninja.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof ninja
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof ninja
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {ninja.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof ninja.Empty
         * @static
         * @param {ninja.IEmpty=} [properties] Properties to set
         * @returns {ninja.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link ninja.Empty.verify|verify} messages.
         * @function encode
         * @memberof ninja.Empty
         * @static
         * @param {ninja.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link ninja.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ninja.Empty
         * @static
         * @param {ninja.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof ninja.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ninja.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ninja.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ninja.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ninja.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof ninja.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ninja.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ninja.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.ninja.Empty)
                return object;
            return new $root.ninja.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ninja.Empty
         * @static
         * @param {ninja.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof ninja.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    return ninja;
})();

module.exports = $root;
