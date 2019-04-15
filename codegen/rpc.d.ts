import * as $protobuf from "protobufjs";
/** Namespace ninja. */
export namespace ninja {

    /** Represents a NinjaService */
    class NinjaService extends $protobuf.rpc.Service {

        /**
         * Constructs a new NinjaService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new NinjaService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NinjaService;

        /**
         * Calls FindOne.
         * @param request NinjaById message or plain object
         * @param callback Node-style callback called with the error, if any, and Ninja
         */
        public findOne(request: ninja.INinjaById, callback: ninja.NinjaService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request NinjaById message or plain object
         * @returns Promise
         */
        public findOne(request: ninja.INinjaById): Promise<ninja.Ninja>;

        /**
         * Calls findAll.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and ListNinjas
         */
        public findAll(request: ninja.IEmpty, callback: ninja.NinjaService.findAllCallback): void;

        /**
         * Calls findAll.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public findAll(request: ninja.IEmpty): Promise<ninja.ListNinjas>;
    }

    namespace NinjaService {

        /**
         * Callback as used by {@link ninja.NinjaService#findOne}.
         * @param error Error, if any
         * @param [response] Ninja
         */
        type FindOneCallback = (error: (Error|null), response?: ninja.Ninja) => void;

        /**
         * Callback as used by {@link ninja.NinjaService#findAll}.
         * @param error Error, if any
         * @param [response] ListNinjas
         */
        type findAllCallback = (error: (Error|null), response?: ninja.ListNinjas) => void;
    }

    /** Properties of a NinjaById. */
    interface INinjaById {

        /** NinjaById id */
        id?: (number|null);
    }

    /** Represents a NinjaById. */
    class NinjaById implements INinjaById {

        /**
         * Constructs a new NinjaById.
         * @param [properties] Properties to set
         */
        constructor(properties?: ninja.INinjaById);

        /** NinjaById id. */
        public id: number;

        /**
         * Creates a new NinjaById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NinjaById instance
         */
        public static create(properties?: ninja.INinjaById): ninja.NinjaById;

        /**
         * Encodes the specified NinjaById message. Does not implicitly {@link ninja.NinjaById.verify|verify} messages.
         * @param message NinjaById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ninja.INinjaById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NinjaById message, length delimited. Does not implicitly {@link ninja.NinjaById.verify|verify} messages.
         * @param message NinjaById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ninja.INinjaById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NinjaById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NinjaById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ninja.NinjaById;

        /**
         * Decodes a NinjaById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NinjaById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ninja.NinjaById;

        /**
         * Verifies a NinjaById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NinjaById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NinjaById
         */
        public static fromObject(object: { [k: string]: any }): ninja.NinjaById;

        /**
         * Creates a plain object from a NinjaById message. Also converts values to other types if specified.
         * @param message NinjaById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ninja.NinjaById, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NinjaById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Ninja. */
    interface INinja {

        /** Ninja id */
        id?: (number|null);

        /** Ninja name */
        name?: (string|null);
    }

    /** Represents a Ninja. */
    class Ninja implements INinja {

        /**
         * Constructs a new Ninja.
         * @param [properties] Properties to set
         */
        constructor(properties?: ninja.INinja);

        /** Ninja id. */
        public id: number;

        /** Ninja name. */
        public name: string;

        /**
         * Creates a new Ninja instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ninja instance
         */
        public static create(properties?: ninja.INinja): ninja.Ninja;

        /**
         * Encodes the specified Ninja message. Does not implicitly {@link ninja.Ninja.verify|verify} messages.
         * @param message Ninja message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ninja.INinja, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ninja message, length delimited. Does not implicitly {@link ninja.Ninja.verify|verify} messages.
         * @param message Ninja message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ninja.INinja, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ninja message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ninja
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ninja.Ninja;

        /**
         * Decodes a Ninja message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ninja
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ninja.Ninja;

        /**
         * Verifies a Ninja message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ninja message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ninja
         */
        public static fromObject(object: { [k: string]: any }): ninja.Ninja;

        /**
         * Creates a plain object from a Ninja message. Also converts values to other types if specified.
         * @param message Ninja
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ninja.Ninja, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ninja to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListNinjas. */
    interface IListNinjas {

        /** ListNinjas ninjas */
        ninjas?: (ninja.INinja[]|null);
    }

    /** Represents a ListNinjas. */
    class ListNinjas implements IListNinjas {

        /**
         * Constructs a new ListNinjas.
         * @param [properties] Properties to set
         */
        constructor(properties?: ninja.IListNinjas);

        /** ListNinjas ninjas. */
        public ninjas: ninja.INinja[];

        /**
         * Creates a new ListNinjas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListNinjas instance
         */
        public static create(properties?: ninja.IListNinjas): ninja.ListNinjas;

        /**
         * Encodes the specified ListNinjas message. Does not implicitly {@link ninja.ListNinjas.verify|verify} messages.
         * @param message ListNinjas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ninja.IListNinjas, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListNinjas message, length delimited. Does not implicitly {@link ninja.ListNinjas.verify|verify} messages.
         * @param message ListNinjas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ninja.IListNinjas, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListNinjas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListNinjas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ninja.ListNinjas;

        /**
         * Decodes a ListNinjas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListNinjas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ninja.ListNinjas;

        /**
         * Verifies a ListNinjas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListNinjas message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListNinjas
         */
        public static fromObject(object: { [k: string]: any }): ninja.ListNinjas;

        /**
         * Creates a plain object from a ListNinjas message. Also converts values to other types if specified.
         * @param message ListNinjas
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ninja.ListNinjas, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListNinjas to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: ninja.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: ninja.IEmpty): ninja.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link ninja.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ninja.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link ninja.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ninja.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ninja.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ninja.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): ninja.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ninja.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
