
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model KeitaroReport
 * 
 */
export type KeitaroReport = $Result.DefaultSelection<Prisma.$KeitaroReportPayload>
/**
 * Model UnityReport
 * 
 */
export type UnityReport = $Result.DefaultSelection<Prisma.$UnityReportPayload>
/**
 * Model AppSpend
 * 
 */
export type AppSpend = $Result.DefaultSelection<Prisma.$AppSpendPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Reports
 * const reports = await prisma.report.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Reports
   * const reports = await prisma.report.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keitaroReport`: Exposes CRUD operations for the **KeitaroReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeitaroReports
    * const keitaroReports = await prisma.keitaroReport.findMany()
    * ```
    */
  get keitaroReport(): Prisma.KeitaroReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unityReport`: Exposes CRUD operations for the **UnityReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnityReports
    * const unityReports = await prisma.unityReport.findMany()
    * ```
    */
  get unityReport(): Prisma.UnityReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appSpend`: Exposes CRUD operations for the **AppSpend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSpends
    * const appSpends = await prisma.appSpend.findMany()
    * ```
    */
  get appSpend(): Prisma.AppSpendDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Report: 'Report',
    KeitaroReport: 'KeitaroReport',
    UnityReport: 'UnityReport',
    AppSpend: 'AppSpend'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "report" | "keitaroReport" | "unityReport" | "appSpend"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      KeitaroReport: {
        payload: Prisma.$KeitaroReportPayload<ExtArgs>
        fields: Prisma.KeitaroReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeitaroReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeitaroReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>
          }
          findFirst: {
            args: Prisma.KeitaroReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeitaroReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>
          }
          findMany: {
            args: Prisma.KeitaroReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>[]
          }
          create: {
            args: Prisma.KeitaroReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>
          }
          createMany: {
            args: Prisma.KeitaroReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeitaroReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>[]
          }
          delete: {
            args: Prisma.KeitaroReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>
          }
          update: {
            args: Prisma.KeitaroReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>
          }
          deleteMany: {
            args: Prisma.KeitaroReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeitaroReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeitaroReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>[]
          }
          upsert: {
            args: Prisma.KeitaroReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeitaroReportPayload>
          }
          aggregate: {
            args: Prisma.KeitaroReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeitaroReport>
          }
          groupBy: {
            args: Prisma.KeitaroReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeitaroReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeitaroReportCountArgs<ExtArgs>
            result: $Utils.Optional<KeitaroReportCountAggregateOutputType> | number
          }
        }
      }
      UnityReport: {
        payload: Prisma.$UnityReportPayload<ExtArgs>
        fields: Prisma.UnityReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnityReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnityReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>
          }
          findFirst: {
            args: Prisma.UnityReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnityReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>
          }
          findMany: {
            args: Prisma.UnityReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>[]
          }
          create: {
            args: Prisma.UnityReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>
          }
          createMany: {
            args: Prisma.UnityReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnityReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>[]
          }
          delete: {
            args: Prisma.UnityReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>
          }
          update: {
            args: Prisma.UnityReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>
          }
          deleteMany: {
            args: Prisma.UnityReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnityReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnityReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>[]
          }
          upsert: {
            args: Prisma.UnityReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnityReportPayload>
          }
          aggregate: {
            args: Prisma.UnityReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnityReport>
          }
          groupBy: {
            args: Prisma.UnityReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnityReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnityReportCountArgs<ExtArgs>
            result: $Utils.Optional<UnityReportCountAggregateOutputType> | number
          }
        }
      }
      AppSpend: {
        payload: Prisma.$AppSpendPayload<ExtArgs>
        fields: Prisma.AppSpendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSpendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSpendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>
          }
          findFirst: {
            args: Prisma.AppSpendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSpendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>
          }
          findMany: {
            args: Prisma.AppSpendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>[]
          }
          create: {
            args: Prisma.AppSpendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>
          }
          createMany: {
            args: Prisma.AppSpendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSpendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>[]
          }
          delete: {
            args: Prisma.AppSpendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>
          }
          update: {
            args: Prisma.AppSpendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>
          }
          deleteMany: {
            args: Prisma.AppSpendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSpendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppSpendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>[]
          }
          upsert: {
            args: Prisma.AppSpendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSpendPayload>
          }
          aggregate: {
            args: Prisma.AppSpendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSpend>
          }
          groupBy: {
            args: Prisma.AppSpendGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSpendGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSpendCountArgs<ExtArgs>
            result: $Utils.Optional<AppSpendCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    report?: ReportOmit
    keitaroReport?: KeitaroReportOmit
    unityReport?: UnityReportOmit
    appSpend?: AppSpendOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    date: string | null
    product: string | null
    account: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    date: string | null
    product: string | null
    account: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    date: number
    product: number
    rows: number
    account: number
    createdAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    date?: true
    product?: true
    account?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    date?: true
    product?: true
    account?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    date?: true
    product?: true
    rows?: true
    account?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    date: string
    product: string
    rows: JsonValue
    account: string | null
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    product?: boolean
    rows?: boolean
    account?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    product?: boolean
    rows?: boolean
    account?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    product?: boolean
    rows?: boolean
    account?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    date?: boolean
    product?: boolean
    rows?: boolean
    account?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "product" | "rows" | "account" | "createdAt", ExtArgs["result"]["report"]>

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      product: string
      rows: Prisma.JsonValue
      account: string | null
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly date: FieldRef<"Report", 'String'>
    readonly product: FieldRef<"Report", 'String'>
    readonly rows: FieldRef<"Report", 'Json'>
    readonly account: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
  }


  /**
   * Model KeitaroReport
   */

  export type AggregateKeitaroReport = {
    _count: KeitaroReportCountAggregateOutputType | null
    _avg: KeitaroReportAvgAggregateOutputType | null
    _sum: KeitaroReportSumAggregateOutputType | null
    _min: KeitaroReportMinAggregateOutputType | null
    _max: KeitaroReportMaxAggregateOutputType | null
  }

  export type KeitaroReportAvgAggregateOutputType = {
    id: number | null
  }

  export type KeitaroReportSumAggregateOutputType = {
    id: number | null
  }

  export type KeitaroReportMinAggregateOutputType = {
    id: number | null
    date: string | null
    campaign: string | null
    group: string | null
    createdAt: Date | null
  }

  export type KeitaroReportMaxAggregateOutputType = {
    id: number | null
    date: string | null
    campaign: string | null
    group: string | null
    createdAt: Date | null
  }

  export type KeitaroReportCountAggregateOutputType = {
    id: number
    date: number
    campaign: number
    rows: number
    group: number
    createdAt: number
    _all: number
  }


  export type KeitaroReportAvgAggregateInputType = {
    id?: true
  }

  export type KeitaroReportSumAggregateInputType = {
    id?: true
  }

  export type KeitaroReportMinAggregateInputType = {
    id?: true
    date?: true
    campaign?: true
    group?: true
    createdAt?: true
  }

  export type KeitaroReportMaxAggregateInputType = {
    id?: true
    date?: true
    campaign?: true
    group?: true
    createdAt?: true
  }

  export type KeitaroReportCountAggregateInputType = {
    id?: true
    date?: true
    campaign?: true
    rows?: true
    group?: true
    createdAt?: true
    _all?: true
  }

  export type KeitaroReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeitaroReport to aggregate.
     */
    where?: KeitaroReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeitaroReports to fetch.
     */
    orderBy?: KeitaroReportOrderByWithRelationInput | KeitaroReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeitaroReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeitaroReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeitaroReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeitaroReports
    **/
    _count?: true | KeitaroReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeitaroReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeitaroReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeitaroReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeitaroReportMaxAggregateInputType
  }

  export type GetKeitaroReportAggregateType<T extends KeitaroReportAggregateArgs> = {
        [P in keyof T & keyof AggregateKeitaroReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeitaroReport[P]>
      : GetScalarType<T[P], AggregateKeitaroReport[P]>
  }




  export type KeitaroReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeitaroReportWhereInput
    orderBy?: KeitaroReportOrderByWithAggregationInput | KeitaroReportOrderByWithAggregationInput[]
    by: KeitaroReportScalarFieldEnum[] | KeitaroReportScalarFieldEnum
    having?: KeitaroReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeitaroReportCountAggregateInputType | true
    _avg?: KeitaroReportAvgAggregateInputType
    _sum?: KeitaroReportSumAggregateInputType
    _min?: KeitaroReportMinAggregateInputType
    _max?: KeitaroReportMaxAggregateInputType
  }

  export type KeitaroReportGroupByOutputType = {
    id: number
    date: string
    campaign: string
    rows: JsonValue
    group: string | null
    createdAt: Date
    _count: KeitaroReportCountAggregateOutputType | null
    _avg: KeitaroReportAvgAggregateOutputType | null
    _sum: KeitaroReportSumAggregateOutputType | null
    _min: KeitaroReportMinAggregateOutputType | null
    _max: KeitaroReportMaxAggregateOutputType | null
  }

  type GetKeitaroReportGroupByPayload<T extends KeitaroReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeitaroReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeitaroReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeitaroReportGroupByOutputType[P]>
            : GetScalarType<T[P], KeitaroReportGroupByOutputType[P]>
        }
      >
    >


  export type KeitaroReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    campaign?: boolean
    rows?: boolean
    group?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keitaroReport"]>

  export type KeitaroReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    campaign?: boolean
    rows?: boolean
    group?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keitaroReport"]>

  export type KeitaroReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    campaign?: boolean
    rows?: boolean
    group?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keitaroReport"]>

  export type KeitaroReportSelectScalar = {
    id?: boolean
    date?: boolean
    campaign?: boolean
    rows?: boolean
    group?: boolean
    createdAt?: boolean
  }

  export type KeitaroReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "campaign" | "rows" | "group" | "createdAt", ExtArgs["result"]["keitaroReport"]>

  export type $KeitaroReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeitaroReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      campaign: string
      rows: Prisma.JsonValue
      group: string | null
      createdAt: Date
    }, ExtArgs["result"]["keitaroReport"]>
    composites: {}
  }

  type KeitaroReportGetPayload<S extends boolean | null | undefined | KeitaroReportDefaultArgs> = $Result.GetResult<Prisma.$KeitaroReportPayload, S>

  type KeitaroReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeitaroReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeitaroReportCountAggregateInputType | true
    }

  export interface KeitaroReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeitaroReport'], meta: { name: 'KeitaroReport' } }
    /**
     * Find zero or one KeitaroReport that matches the filter.
     * @param {KeitaroReportFindUniqueArgs} args - Arguments to find a KeitaroReport
     * @example
     * // Get one KeitaroReport
     * const keitaroReport = await prisma.keitaroReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeitaroReportFindUniqueArgs>(args: SelectSubset<T, KeitaroReportFindUniqueArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeitaroReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeitaroReportFindUniqueOrThrowArgs} args - Arguments to find a KeitaroReport
     * @example
     * // Get one KeitaroReport
     * const keitaroReport = await prisma.keitaroReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeitaroReportFindUniqueOrThrowArgs>(args: SelectSubset<T, KeitaroReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeitaroReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeitaroReportFindFirstArgs} args - Arguments to find a KeitaroReport
     * @example
     * // Get one KeitaroReport
     * const keitaroReport = await prisma.keitaroReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeitaroReportFindFirstArgs>(args?: SelectSubset<T, KeitaroReportFindFirstArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeitaroReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeitaroReportFindFirstOrThrowArgs} args - Arguments to find a KeitaroReport
     * @example
     * // Get one KeitaroReport
     * const keitaroReport = await prisma.keitaroReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeitaroReportFindFirstOrThrowArgs>(args?: SelectSubset<T, KeitaroReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeitaroReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeitaroReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeitaroReports
     * const keitaroReports = await prisma.keitaroReport.findMany()
     * 
     * // Get first 10 KeitaroReports
     * const keitaroReports = await prisma.keitaroReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keitaroReportWithIdOnly = await prisma.keitaroReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeitaroReportFindManyArgs>(args?: SelectSubset<T, KeitaroReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeitaroReport.
     * @param {KeitaroReportCreateArgs} args - Arguments to create a KeitaroReport.
     * @example
     * // Create one KeitaroReport
     * const KeitaroReport = await prisma.keitaroReport.create({
     *   data: {
     *     // ... data to create a KeitaroReport
     *   }
     * })
     * 
     */
    create<T extends KeitaroReportCreateArgs>(args: SelectSubset<T, KeitaroReportCreateArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeitaroReports.
     * @param {KeitaroReportCreateManyArgs} args - Arguments to create many KeitaroReports.
     * @example
     * // Create many KeitaroReports
     * const keitaroReport = await prisma.keitaroReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeitaroReportCreateManyArgs>(args?: SelectSubset<T, KeitaroReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeitaroReports and returns the data saved in the database.
     * @param {KeitaroReportCreateManyAndReturnArgs} args - Arguments to create many KeitaroReports.
     * @example
     * // Create many KeitaroReports
     * const keitaroReport = await prisma.keitaroReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeitaroReports and only return the `id`
     * const keitaroReportWithIdOnly = await prisma.keitaroReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeitaroReportCreateManyAndReturnArgs>(args?: SelectSubset<T, KeitaroReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeitaroReport.
     * @param {KeitaroReportDeleteArgs} args - Arguments to delete one KeitaroReport.
     * @example
     * // Delete one KeitaroReport
     * const KeitaroReport = await prisma.keitaroReport.delete({
     *   where: {
     *     // ... filter to delete one KeitaroReport
     *   }
     * })
     * 
     */
    delete<T extends KeitaroReportDeleteArgs>(args: SelectSubset<T, KeitaroReportDeleteArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeitaroReport.
     * @param {KeitaroReportUpdateArgs} args - Arguments to update one KeitaroReport.
     * @example
     * // Update one KeitaroReport
     * const keitaroReport = await prisma.keitaroReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeitaroReportUpdateArgs>(args: SelectSubset<T, KeitaroReportUpdateArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeitaroReports.
     * @param {KeitaroReportDeleteManyArgs} args - Arguments to filter KeitaroReports to delete.
     * @example
     * // Delete a few KeitaroReports
     * const { count } = await prisma.keitaroReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeitaroReportDeleteManyArgs>(args?: SelectSubset<T, KeitaroReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeitaroReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeitaroReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeitaroReports
     * const keitaroReport = await prisma.keitaroReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeitaroReportUpdateManyArgs>(args: SelectSubset<T, KeitaroReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeitaroReports and returns the data updated in the database.
     * @param {KeitaroReportUpdateManyAndReturnArgs} args - Arguments to update many KeitaroReports.
     * @example
     * // Update many KeitaroReports
     * const keitaroReport = await prisma.keitaroReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeitaroReports and only return the `id`
     * const keitaroReportWithIdOnly = await prisma.keitaroReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeitaroReportUpdateManyAndReturnArgs>(args: SelectSubset<T, KeitaroReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeitaroReport.
     * @param {KeitaroReportUpsertArgs} args - Arguments to update or create a KeitaroReport.
     * @example
     * // Update or create a KeitaroReport
     * const keitaroReport = await prisma.keitaroReport.upsert({
     *   create: {
     *     // ... data to create a KeitaroReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeitaroReport we want to update
     *   }
     * })
     */
    upsert<T extends KeitaroReportUpsertArgs>(args: SelectSubset<T, KeitaroReportUpsertArgs<ExtArgs>>): Prisma__KeitaroReportClient<$Result.GetResult<Prisma.$KeitaroReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeitaroReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeitaroReportCountArgs} args - Arguments to filter KeitaroReports to count.
     * @example
     * // Count the number of KeitaroReports
     * const count = await prisma.keitaroReport.count({
     *   where: {
     *     // ... the filter for the KeitaroReports we want to count
     *   }
     * })
    **/
    count<T extends KeitaroReportCountArgs>(
      args?: Subset<T, KeitaroReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeitaroReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeitaroReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeitaroReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeitaroReportAggregateArgs>(args: Subset<T, KeitaroReportAggregateArgs>): Prisma.PrismaPromise<GetKeitaroReportAggregateType<T>>

    /**
     * Group by KeitaroReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeitaroReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeitaroReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeitaroReportGroupByArgs['orderBy'] }
        : { orderBy?: KeitaroReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeitaroReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeitaroReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeitaroReport model
   */
  readonly fields: KeitaroReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeitaroReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeitaroReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeitaroReport model
   */
  interface KeitaroReportFieldRefs {
    readonly id: FieldRef<"KeitaroReport", 'Int'>
    readonly date: FieldRef<"KeitaroReport", 'String'>
    readonly campaign: FieldRef<"KeitaroReport", 'String'>
    readonly rows: FieldRef<"KeitaroReport", 'Json'>
    readonly group: FieldRef<"KeitaroReport", 'String'>
    readonly createdAt: FieldRef<"KeitaroReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KeitaroReport findUnique
   */
  export type KeitaroReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * Filter, which KeitaroReport to fetch.
     */
    where: KeitaroReportWhereUniqueInput
  }

  /**
   * KeitaroReport findUniqueOrThrow
   */
  export type KeitaroReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * Filter, which KeitaroReport to fetch.
     */
    where: KeitaroReportWhereUniqueInput
  }

  /**
   * KeitaroReport findFirst
   */
  export type KeitaroReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * Filter, which KeitaroReport to fetch.
     */
    where?: KeitaroReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeitaroReports to fetch.
     */
    orderBy?: KeitaroReportOrderByWithRelationInput | KeitaroReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeitaroReports.
     */
    cursor?: KeitaroReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeitaroReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeitaroReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeitaroReports.
     */
    distinct?: KeitaroReportScalarFieldEnum | KeitaroReportScalarFieldEnum[]
  }

  /**
   * KeitaroReport findFirstOrThrow
   */
  export type KeitaroReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * Filter, which KeitaroReport to fetch.
     */
    where?: KeitaroReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeitaroReports to fetch.
     */
    orderBy?: KeitaroReportOrderByWithRelationInput | KeitaroReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeitaroReports.
     */
    cursor?: KeitaroReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeitaroReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeitaroReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeitaroReports.
     */
    distinct?: KeitaroReportScalarFieldEnum | KeitaroReportScalarFieldEnum[]
  }

  /**
   * KeitaroReport findMany
   */
  export type KeitaroReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * Filter, which KeitaroReports to fetch.
     */
    where?: KeitaroReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeitaroReports to fetch.
     */
    orderBy?: KeitaroReportOrderByWithRelationInput | KeitaroReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeitaroReports.
     */
    cursor?: KeitaroReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeitaroReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeitaroReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeitaroReports.
     */
    distinct?: KeitaroReportScalarFieldEnum | KeitaroReportScalarFieldEnum[]
  }

  /**
   * KeitaroReport create
   */
  export type KeitaroReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * The data needed to create a KeitaroReport.
     */
    data: XOR<KeitaroReportCreateInput, KeitaroReportUncheckedCreateInput>
  }

  /**
   * KeitaroReport createMany
   */
  export type KeitaroReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeitaroReports.
     */
    data: KeitaroReportCreateManyInput | KeitaroReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeitaroReport createManyAndReturn
   */
  export type KeitaroReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * The data used to create many KeitaroReports.
     */
    data: KeitaroReportCreateManyInput | KeitaroReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeitaroReport update
   */
  export type KeitaroReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * The data needed to update a KeitaroReport.
     */
    data: XOR<KeitaroReportUpdateInput, KeitaroReportUncheckedUpdateInput>
    /**
     * Choose, which KeitaroReport to update.
     */
    where: KeitaroReportWhereUniqueInput
  }

  /**
   * KeitaroReport updateMany
   */
  export type KeitaroReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeitaroReports.
     */
    data: XOR<KeitaroReportUpdateManyMutationInput, KeitaroReportUncheckedUpdateManyInput>
    /**
     * Filter which KeitaroReports to update
     */
    where?: KeitaroReportWhereInput
    /**
     * Limit how many KeitaroReports to update.
     */
    limit?: number
  }

  /**
   * KeitaroReport updateManyAndReturn
   */
  export type KeitaroReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * The data used to update KeitaroReports.
     */
    data: XOR<KeitaroReportUpdateManyMutationInput, KeitaroReportUncheckedUpdateManyInput>
    /**
     * Filter which KeitaroReports to update
     */
    where?: KeitaroReportWhereInput
    /**
     * Limit how many KeitaroReports to update.
     */
    limit?: number
  }

  /**
   * KeitaroReport upsert
   */
  export type KeitaroReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * The filter to search for the KeitaroReport to update in case it exists.
     */
    where: KeitaroReportWhereUniqueInput
    /**
     * In case the KeitaroReport found by the `where` argument doesn't exist, create a new KeitaroReport with this data.
     */
    create: XOR<KeitaroReportCreateInput, KeitaroReportUncheckedCreateInput>
    /**
     * In case the KeitaroReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeitaroReportUpdateInput, KeitaroReportUncheckedUpdateInput>
  }

  /**
   * KeitaroReport delete
   */
  export type KeitaroReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
    /**
     * Filter which KeitaroReport to delete.
     */
    where: KeitaroReportWhereUniqueInput
  }

  /**
   * KeitaroReport deleteMany
   */
  export type KeitaroReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeitaroReports to delete
     */
    where?: KeitaroReportWhereInput
    /**
     * Limit how many KeitaroReports to delete.
     */
    limit?: number
  }

  /**
   * KeitaroReport without action
   */
  export type KeitaroReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeitaroReport
     */
    select?: KeitaroReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeitaroReport
     */
    omit?: KeitaroReportOmit<ExtArgs> | null
  }


  /**
   * Model UnityReport
   */

  export type AggregateUnityReport = {
    _count: UnityReportCountAggregateOutputType | null
    _avg: UnityReportAvgAggregateOutputType | null
    _sum: UnityReportSumAggregateOutputType | null
    _min: UnityReportMinAggregateOutputType | null
    _max: UnityReportMaxAggregateOutputType | null
  }

  export type UnityReportAvgAggregateOutputType = {
    id: number | null
    spend: number | null
    installs: number | null
  }

  export type UnityReportSumAggregateOutputType = {
    id: number | null
    spend: number | null
    installs: number | null
  }

  export type UnityReportMinAggregateOutputType = {
    id: number | null
    date: string | null
    app_id: string | null
    app_name: string | null
    spend: number | null
    installs: number | null
    campaign_name: string | null
    campaign_id: string | null
    country_unity: string | null
    createdAt: Date | null
  }

  export type UnityReportMaxAggregateOutputType = {
    id: number | null
    date: string | null
    app_id: string | null
    app_name: string | null
    spend: number | null
    installs: number | null
    campaign_name: string | null
    campaign_id: string | null
    country_unity: string | null
    createdAt: Date | null
  }

  export type UnityReportCountAggregateOutputType = {
    id: number
    date: number
    app_id: number
    app_name: number
    spend: number
    installs: number
    campaign_name: number
    campaign_id: number
    country_unity: number
    createdAt: number
    _all: number
  }


  export type UnityReportAvgAggregateInputType = {
    id?: true
    spend?: true
    installs?: true
  }

  export type UnityReportSumAggregateInputType = {
    id?: true
    spend?: true
    installs?: true
  }

  export type UnityReportMinAggregateInputType = {
    id?: true
    date?: true
    app_id?: true
    app_name?: true
    spend?: true
    installs?: true
    campaign_name?: true
    campaign_id?: true
    country_unity?: true
    createdAt?: true
  }

  export type UnityReportMaxAggregateInputType = {
    id?: true
    date?: true
    app_id?: true
    app_name?: true
    spend?: true
    installs?: true
    campaign_name?: true
    campaign_id?: true
    country_unity?: true
    createdAt?: true
  }

  export type UnityReportCountAggregateInputType = {
    id?: true
    date?: true
    app_id?: true
    app_name?: true
    spend?: true
    installs?: true
    campaign_name?: true
    campaign_id?: true
    country_unity?: true
    createdAt?: true
    _all?: true
  }

  export type UnityReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnityReport to aggregate.
     */
    where?: UnityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnityReports to fetch.
     */
    orderBy?: UnityReportOrderByWithRelationInput | UnityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnityReports
    **/
    _count?: true | UnityReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnityReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnityReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnityReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnityReportMaxAggregateInputType
  }

  export type GetUnityReportAggregateType<T extends UnityReportAggregateArgs> = {
        [P in keyof T & keyof AggregateUnityReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnityReport[P]>
      : GetScalarType<T[P], AggregateUnityReport[P]>
  }




  export type UnityReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnityReportWhereInput
    orderBy?: UnityReportOrderByWithAggregationInput | UnityReportOrderByWithAggregationInput[]
    by: UnityReportScalarFieldEnum[] | UnityReportScalarFieldEnum
    having?: UnityReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnityReportCountAggregateInputType | true
    _avg?: UnityReportAvgAggregateInputType
    _sum?: UnityReportSumAggregateInputType
    _min?: UnityReportMinAggregateInputType
    _max?: UnityReportMaxAggregateInputType
  }

  export type UnityReportGroupByOutputType = {
    id: number
    date: string
    app_id: string
    app_name: string
    spend: number
    installs: number
    campaign_name: string | null
    campaign_id: string | null
    country_unity: string | null
    createdAt: Date
    _count: UnityReportCountAggregateOutputType | null
    _avg: UnityReportAvgAggregateOutputType | null
    _sum: UnityReportSumAggregateOutputType | null
    _min: UnityReportMinAggregateOutputType | null
    _max: UnityReportMaxAggregateOutputType | null
  }

  type GetUnityReportGroupByPayload<T extends UnityReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnityReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnityReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnityReportGroupByOutputType[P]>
            : GetScalarType<T[P], UnityReportGroupByOutputType[P]>
        }
      >
    >


  export type UnityReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    app_id?: boolean
    app_name?: boolean
    spend?: boolean
    installs?: boolean
    campaign_name?: boolean
    campaign_id?: boolean
    country_unity?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["unityReport"]>

  export type UnityReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    app_id?: boolean
    app_name?: boolean
    spend?: boolean
    installs?: boolean
    campaign_name?: boolean
    campaign_id?: boolean
    country_unity?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["unityReport"]>

  export type UnityReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    app_id?: boolean
    app_name?: boolean
    spend?: boolean
    installs?: boolean
    campaign_name?: boolean
    campaign_id?: boolean
    country_unity?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["unityReport"]>

  export type UnityReportSelectScalar = {
    id?: boolean
    date?: boolean
    app_id?: boolean
    app_name?: boolean
    spend?: boolean
    installs?: boolean
    campaign_name?: boolean
    campaign_id?: boolean
    country_unity?: boolean
    createdAt?: boolean
  }

  export type UnityReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "app_id" | "app_name" | "spend" | "installs" | "campaign_name" | "campaign_id" | "country_unity" | "createdAt", ExtArgs["result"]["unityReport"]>

  export type $UnityReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnityReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      app_id: string
      app_name: string
      spend: number
      installs: number
      campaign_name: string | null
      campaign_id: string | null
      country_unity: string | null
      createdAt: Date
    }, ExtArgs["result"]["unityReport"]>
    composites: {}
  }

  type UnityReportGetPayload<S extends boolean | null | undefined | UnityReportDefaultArgs> = $Result.GetResult<Prisma.$UnityReportPayload, S>

  type UnityReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnityReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnityReportCountAggregateInputType | true
    }

  export interface UnityReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnityReport'], meta: { name: 'UnityReport' } }
    /**
     * Find zero or one UnityReport that matches the filter.
     * @param {UnityReportFindUniqueArgs} args - Arguments to find a UnityReport
     * @example
     * // Get one UnityReport
     * const unityReport = await prisma.unityReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnityReportFindUniqueArgs>(args: SelectSubset<T, UnityReportFindUniqueArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnityReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnityReportFindUniqueOrThrowArgs} args - Arguments to find a UnityReport
     * @example
     * // Get one UnityReport
     * const unityReport = await prisma.unityReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnityReportFindUniqueOrThrowArgs>(args: SelectSubset<T, UnityReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnityReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnityReportFindFirstArgs} args - Arguments to find a UnityReport
     * @example
     * // Get one UnityReport
     * const unityReport = await prisma.unityReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnityReportFindFirstArgs>(args?: SelectSubset<T, UnityReportFindFirstArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnityReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnityReportFindFirstOrThrowArgs} args - Arguments to find a UnityReport
     * @example
     * // Get one UnityReport
     * const unityReport = await prisma.unityReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnityReportFindFirstOrThrowArgs>(args?: SelectSubset<T, UnityReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnityReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnityReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnityReports
     * const unityReports = await prisma.unityReport.findMany()
     * 
     * // Get first 10 UnityReports
     * const unityReports = await prisma.unityReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unityReportWithIdOnly = await prisma.unityReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnityReportFindManyArgs>(args?: SelectSubset<T, UnityReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnityReport.
     * @param {UnityReportCreateArgs} args - Arguments to create a UnityReport.
     * @example
     * // Create one UnityReport
     * const UnityReport = await prisma.unityReport.create({
     *   data: {
     *     // ... data to create a UnityReport
     *   }
     * })
     * 
     */
    create<T extends UnityReportCreateArgs>(args: SelectSubset<T, UnityReportCreateArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnityReports.
     * @param {UnityReportCreateManyArgs} args - Arguments to create many UnityReports.
     * @example
     * // Create many UnityReports
     * const unityReport = await prisma.unityReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnityReportCreateManyArgs>(args?: SelectSubset<T, UnityReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnityReports and returns the data saved in the database.
     * @param {UnityReportCreateManyAndReturnArgs} args - Arguments to create many UnityReports.
     * @example
     * // Create many UnityReports
     * const unityReport = await prisma.unityReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnityReports and only return the `id`
     * const unityReportWithIdOnly = await prisma.unityReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnityReportCreateManyAndReturnArgs>(args?: SelectSubset<T, UnityReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnityReport.
     * @param {UnityReportDeleteArgs} args - Arguments to delete one UnityReport.
     * @example
     * // Delete one UnityReport
     * const UnityReport = await prisma.unityReport.delete({
     *   where: {
     *     // ... filter to delete one UnityReport
     *   }
     * })
     * 
     */
    delete<T extends UnityReportDeleteArgs>(args: SelectSubset<T, UnityReportDeleteArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnityReport.
     * @param {UnityReportUpdateArgs} args - Arguments to update one UnityReport.
     * @example
     * // Update one UnityReport
     * const unityReport = await prisma.unityReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnityReportUpdateArgs>(args: SelectSubset<T, UnityReportUpdateArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnityReports.
     * @param {UnityReportDeleteManyArgs} args - Arguments to filter UnityReports to delete.
     * @example
     * // Delete a few UnityReports
     * const { count } = await prisma.unityReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnityReportDeleteManyArgs>(args?: SelectSubset<T, UnityReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnityReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnityReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnityReports
     * const unityReport = await prisma.unityReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnityReportUpdateManyArgs>(args: SelectSubset<T, UnityReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnityReports and returns the data updated in the database.
     * @param {UnityReportUpdateManyAndReturnArgs} args - Arguments to update many UnityReports.
     * @example
     * // Update many UnityReports
     * const unityReport = await prisma.unityReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnityReports and only return the `id`
     * const unityReportWithIdOnly = await prisma.unityReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnityReportUpdateManyAndReturnArgs>(args: SelectSubset<T, UnityReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnityReport.
     * @param {UnityReportUpsertArgs} args - Arguments to update or create a UnityReport.
     * @example
     * // Update or create a UnityReport
     * const unityReport = await prisma.unityReport.upsert({
     *   create: {
     *     // ... data to create a UnityReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnityReport we want to update
     *   }
     * })
     */
    upsert<T extends UnityReportUpsertArgs>(args: SelectSubset<T, UnityReportUpsertArgs<ExtArgs>>): Prisma__UnityReportClient<$Result.GetResult<Prisma.$UnityReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnityReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnityReportCountArgs} args - Arguments to filter UnityReports to count.
     * @example
     * // Count the number of UnityReports
     * const count = await prisma.unityReport.count({
     *   where: {
     *     // ... the filter for the UnityReports we want to count
     *   }
     * })
    **/
    count<T extends UnityReportCountArgs>(
      args?: Subset<T, UnityReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnityReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnityReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnityReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnityReportAggregateArgs>(args: Subset<T, UnityReportAggregateArgs>): Prisma.PrismaPromise<GetUnityReportAggregateType<T>>

    /**
     * Group by UnityReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnityReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnityReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnityReportGroupByArgs['orderBy'] }
        : { orderBy?: UnityReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnityReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnityReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnityReport model
   */
  readonly fields: UnityReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnityReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnityReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnityReport model
   */
  interface UnityReportFieldRefs {
    readonly id: FieldRef<"UnityReport", 'Int'>
    readonly date: FieldRef<"UnityReport", 'String'>
    readonly app_id: FieldRef<"UnityReport", 'String'>
    readonly app_name: FieldRef<"UnityReport", 'String'>
    readonly spend: FieldRef<"UnityReport", 'Float'>
    readonly installs: FieldRef<"UnityReport", 'Int'>
    readonly campaign_name: FieldRef<"UnityReport", 'String'>
    readonly campaign_id: FieldRef<"UnityReport", 'String'>
    readonly country_unity: FieldRef<"UnityReport", 'String'>
    readonly createdAt: FieldRef<"UnityReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnityReport findUnique
   */
  export type UnityReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * Filter, which UnityReport to fetch.
     */
    where: UnityReportWhereUniqueInput
  }

  /**
   * UnityReport findUniqueOrThrow
   */
  export type UnityReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * Filter, which UnityReport to fetch.
     */
    where: UnityReportWhereUniqueInput
  }

  /**
   * UnityReport findFirst
   */
  export type UnityReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * Filter, which UnityReport to fetch.
     */
    where?: UnityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnityReports to fetch.
     */
    orderBy?: UnityReportOrderByWithRelationInput | UnityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnityReports.
     */
    cursor?: UnityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnityReports.
     */
    distinct?: UnityReportScalarFieldEnum | UnityReportScalarFieldEnum[]
  }

  /**
   * UnityReport findFirstOrThrow
   */
  export type UnityReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * Filter, which UnityReport to fetch.
     */
    where?: UnityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnityReports to fetch.
     */
    orderBy?: UnityReportOrderByWithRelationInput | UnityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnityReports.
     */
    cursor?: UnityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnityReports.
     */
    distinct?: UnityReportScalarFieldEnum | UnityReportScalarFieldEnum[]
  }

  /**
   * UnityReport findMany
   */
  export type UnityReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * Filter, which UnityReports to fetch.
     */
    where?: UnityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnityReports to fetch.
     */
    orderBy?: UnityReportOrderByWithRelationInput | UnityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnityReports.
     */
    cursor?: UnityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnityReports.
     */
    distinct?: UnityReportScalarFieldEnum | UnityReportScalarFieldEnum[]
  }

  /**
   * UnityReport create
   */
  export type UnityReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * The data needed to create a UnityReport.
     */
    data: XOR<UnityReportCreateInput, UnityReportUncheckedCreateInput>
  }

  /**
   * UnityReport createMany
   */
  export type UnityReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnityReports.
     */
    data: UnityReportCreateManyInput | UnityReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnityReport createManyAndReturn
   */
  export type UnityReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * The data used to create many UnityReports.
     */
    data: UnityReportCreateManyInput | UnityReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnityReport update
   */
  export type UnityReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * The data needed to update a UnityReport.
     */
    data: XOR<UnityReportUpdateInput, UnityReportUncheckedUpdateInput>
    /**
     * Choose, which UnityReport to update.
     */
    where: UnityReportWhereUniqueInput
  }

  /**
   * UnityReport updateMany
   */
  export type UnityReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnityReports.
     */
    data: XOR<UnityReportUpdateManyMutationInput, UnityReportUncheckedUpdateManyInput>
    /**
     * Filter which UnityReports to update
     */
    where?: UnityReportWhereInput
    /**
     * Limit how many UnityReports to update.
     */
    limit?: number
  }

  /**
   * UnityReport updateManyAndReturn
   */
  export type UnityReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * The data used to update UnityReports.
     */
    data: XOR<UnityReportUpdateManyMutationInput, UnityReportUncheckedUpdateManyInput>
    /**
     * Filter which UnityReports to update
     */
    where?: UnityReportWhereInput
    /**
     * Limit how many UnityReports to update.
     */
    limit?: number
  }

  /**
   * UnityReport upsert
   */
  export type UnityReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * The filter to search for the UnityReport to update in case it exists.
     */
    where: UnityReportWhereUniqueInput
    /**
     * In case the UnityReport found by the `where` argument doesn't exist, create a new UnityReport with this data.
     */
    create: XOR<UnityReportCreateInput, UnityReportUncheckedCreateInput>
    /**
     * In case the UnityReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnityReportUpdateInput, UnityReportUncheckedUpdateInput>
  }

  /**
   * UnityReport delete
   */
  export type UnityReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
    /**
     * Filter which UnityReport to delete.
     */
    where: UnityReportWhereUniqueInput
  }

  /**
   * UnityReport deleteMany
   */
  export type UnityReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnityReports to delete
     */
    where?: UnityReportWhereInput
    /**
     * Limit how many UnityReports to delete.
     */
    limit?: number
  }

  /**
   * UnityReport without action
   */
  export type UnityReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnityReport
     */
    select?: UnityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnityReport
     */
    omit?: UnityReportOmit<ExtArgs> | null
  }


  /**
   * Model AppSpend
   */

  export type AggregateAppSpend = {
    _count: AppSpendCountAggregateOutputType | null
    _avg: AppSpendAvgAggregateOutputType | null
    _sum: AppSpendSumAggregateOutputType | null
    _min: AppSpendMinAggregateOutputType | null
    _max: AppSpendMaxAggregateOutputType | null
  }

  export type AppSpendAvgAggregateOutputType = {
    id: number | null
    spend: number | null
    installs: number | null
  }

  export type AppSpendSumAggregateOutputType = {
    id: number | null
    spend: number | null
    installs: number | null
  }

  export type AppSpendMinAggregateOutputType = {
    id: number | null
    date: string | null
    app_name: string | null
    spend: number | null
    campaign_name: string | null
    installs: number | null
    country: string | null
    ad_account: string | null
    account: string | null
    createdAt: Date | null
  }

  export type AppSpendMaxAggregateOutputType = {
    id: number | null
    date: string | null
    app_name: string | null
    spend: number | null
    campaign_name: string | null
    installs: number | null
    country: string | null
    ad_account: string | null
    account: string | null
    createdAt: Date | null
  }

  export type AppSpendCountAggregateOutputType = {
    id: number
    date: number
    app_name: number
    spend: number
    campaign_name: number
    installs: number
    country: number
    ad_account: number
    account: number
    createdAt: number
    _all: number
  }


  export type AppSpendAvgAggregateInputType = {
    id?: true
    spend?: true
    installs?: true
  }

  export type AppSpendSumAggregateInputType = {
    id?: true
    spend?: true
    installs?: true
  }

  export type AppSpendMinAggregateInputType = {
    id?: true
    date?: true
    app_name?: true
    spend?: true
    campaign_name?: true
    installs?: true
    country?: true
    ad_account?: true
    account?: true
    createdAt?: true
  }

  export type AppSpendMaxAggregateInputType = {
    id?: true
    date?: true
    app_name?: true
    spend?: true
    campaign_name?: true
    installs?: true
    country?: true
    ad_account?: true
    account?: true
    createdAt?: true
  }

  export type AppSpendCountAggregateInputType = {
    id?: true
    date?: true
    app_name?: true
    spend?: true
    campaign_name?: true
    installs?: true
    country?: true
    ad_account?: true
    account?: true
    createdAt?: true
    _all?: true
  }

  export type AppSpendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSpend to aggregate.
     */
    where?: AppSpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSpends to fetch.
     */
    orderBy?: AppSpendOrderByWithRelationInput | AppSpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSpends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSpends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSpends
    **/
    _count?: true | AppSpendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppSpendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppSpendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSpendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSpendMaxAggregateInputType
  }

  export type GetAppSpendAggregateType<T extends AppSpendAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSpend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSpend[P]>
      : GetScalarType<T[P], AggregateAppSpend[P]>
  }




  export type AppSpendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSpendWhereInput
    orderBy?: AppSpendOrderByWithAggregationInput | AppSpendOrderByWithAggregationInput[]
    by: AppSpendScalarFieldEnum[] | AppSpendScalarFieldEnum
    having?: AppSpendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSpendCountAggregateInputType | true
    _avg?: AppSpendAvgAggregateInputType
    _sum?: AppSpendSumAggregateInputType
    _min?: AppSpendMinAggregateInputType
    _max?: AppSpendMaxAggregateInputType
  }

  export type AppSpendGroupByOutputType = {
    id: number
    date: string
    app_name: string
    spend: number
    campaign_name: string | null
    installs: number
    country: string | null
    ad_account: string | null
    account: string | null
    createdAt: Date
    _count: AppSpendCountAggregateOutputType | null
    _avg: AppSpendAvgAggregateOutputType | null
    _sum: AppSpendSumAggregateOutputType | null
    _min: AppSpendMinAggregateOutputType | null
    _max: AppSpendMaxAggregateOutputType | null
  }

  type GetAppSpendGroupByPayload<T extends AppSpendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSpendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSpendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSpendGroupByOutputType[P]>
            : GetScalarType<T[P], AppSpendGroupByOutputType[P]>
        }
      >
    >


  export type AppSpendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    app_name?: boolean
    spend?: boolean
    campaign_name?: boolean
    installs?: boolean
    country?: boolean
    ad_account?: boolean
    account?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appSpend"]>

  export type AppSpendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    app_name?: boolean
    spend?: boolean
    campaign_name?: boolean
    installs?: boolean
    country?: boolean
    ad_account?: boolean
    account?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appSpend"]>

  export type AppSpendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    app_name?: boolean
    spend?: boolean
    campaign_name?: boolean
    installs?: boolean
    country?: boolean
    ad_account?: boolean
    account?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appSpend"]>

  export type AppSpendSelectScalar = {
    id?: boolean
    date?: boolean
    app_name?: boolean
    spend?: boolean
    campaign_name?: boolean
    installs?: boolean
    country?: boolean
    ad_account?: boolean
    account?: boolean
    createdAt?: boolean
  }

  export type AppSpendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "app_name" | "spend" | "campaign_name" | "installs" | "country" | "ad_account" | "account" | "createdAt", ExtArgs["result"]["appSpend"]>

  export type $AppSpendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSpend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      app_name: string
      spend: number
      campaign_name: string | null
      installs: number
      country: string | null
      ad_account: string | null
      account: string | null
      createdAt: Date
    }, ExtArgs["result"]["appSpend"]>
    composites: {}
  }

  type AppSpendGetPayload<S extends boolean | null | undefined | AppSpendDefaultArgs> = $Result.GetResult<Prisma.$AppSpendPayload, S>

  type AppSpendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppSpendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppSpendCountAggregateInputType | true
    }

  export interface AppSpendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSpend'], meta: { name: 'AppSpend' } }
    /**
     * Find zero or one AppSpend that matches the filter.
     * @param {AppSpendFindUniqueArgs} args - Arguments to find a AppSpend
     * @example
     * // Get one AppSpend
     * const appSpend = await prisma.appSpend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSpendFindUniqueArgs>(args: SelectSubset<T, AppSpendFindUniqueArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppSpend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppSpendFindUniqueOrThrowArgs} args - Arguments to find a AppSpend
     * @example
     * // Get one AppSpend
     * const appSpend = await prisma.appSpend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSpendFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSpendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSpend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSpendFindFirstArgs} args - Arguments to find a AppSpend
     * @example
     * // Get one AppSpend
     * const appSpend = await prisma.appSpend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSpendFindFirstArgs>(args?: SelectSubset<T, AppSpendFindFirstArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSpend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSpendFindFirstOrThrowArgs} args - Arguments to find a AppSpend
     * @example
     * // Get one AppSpend
     * const appSpend = await prisma.appSpend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSpendFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSpendFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppSpends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSpendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSpends
     * const appSpends = await prisma.appSpend.findMany()
     * 
     * // Get first 10 AppSpends
     * const appSpends = await prisma.appSpend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSpendWithIdOnly = await prisma.appSpend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSpendFindManyArgs>(args?: SelectSubset<T, AppSpendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppSpend.
     * @param {AppSpendCreateArgs} args - Arguments to create a AppSpend.
     * @example
     * // Create one AppSpend
     * const AppSpend = await prisma.appSpend.create({
     *   data: {
     *     // ... data to create a AppSpend
     *   }
     * })
     * 
     */
    create<T extends AppSpendCreateArgs>(args: SelectSubset<T, AppSpendCreateArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppSpends.
     * @param {AppSpendCreateManyArgs} args - Arguments to create many AppSpends.
     * @example
     * // Create many AppSpends
     * const appSpend = await prisma.appSpend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSpendCreateManyArgs>(args?: SelectSubset<T, AppSpendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSpends and returns the data saved in the database.
     * @param {AppSpendCreateManyAndReturnArgs} args - Arguments to create many AppSpends.
     * @example
     * // Create many AppSpends
     * const appSpend = await prisma.appSpend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSpends and only return the `id`
     * const appSpendWithIdOnly = await prisma.appSpend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSpendCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSpendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppSpend.
     * @param {AppSpendDeleteArgs} args - Arguments to delete one AppSpend.
     * @example
     * // Delete one AppSpend
     * const AppSpend = await prisma.appSpend.delete({
     *   where: {
     *     // ... filter to delete one AppSpend
     *   }
     * })
     * 
     */
    delete<T extends AppSpendDeleteArgs>(args: SelectSubset<T, AppSpendDeleteArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppSpend.
     * @param {AppSpendUpdateArgs} args - Arguments to update one AppSpend.
     * @example
     * // Update one AppSpend
     * const appSpend = await prisma.appSpend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSpendUpdateArgs>(args: SelectSubset<T, AppSpendUpdateArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppSpends.
     * @param {AppSpendDeleteManyArgs} args - Arguments to filter AppSpends to delete.
     * @example
     * // Delete a few AppSpends
     * const { count } = await prisma.appSpend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSpendDeleteManyArgs>(args?: SelectSubset<T, AppSpendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSpends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSpendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSpends
     * const appSpend = await prisma.appSpend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSpendUpdateManyArgs>(args: SelectSubset<T, AppSpendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSpends and returns the data updated in the database.
     * @param {AppSpendUpdateManyAndReturnArgs} args - Arguments to update many AppSpends.
     * @example
     * // Update many AppSpends
     * const appSpend = await prisma.appSpend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppSpends and only return the `id`
     * const appSpendWithIdOnly = await prisma.appSpend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppSpendUpdateManyAndReturnArgs>(args: SelectSubset<T, AppSpendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppSpend.
     * @param {AppSpendUpsertArgs} args - Arguments to update or create a AppSpend.
     * @example
     * // Update or create a AppSpend
     * const appSpend = await prisma.appSpend.upsert({
     *   create: {
     *     // ... data to create a AppSpend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSpend we want to update
     *   }
     * })
     */
    upsert<T extends AppSpendUpsertArgs>(args: SelectSubset<T, AppSpendUpsertArgs<ExtArgs>>): Prisma__AppSpendClient<$Result.GetResult<Prisma.$AppSpendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppSpends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSpendCountArgs} args - Arguments to filter AppSpends to count.
     * @example
     * // Count the number of AppSpends
     * const count = await prisma.appSpend.count({
     *   where: {
     *     // ... the filter for the AppSpends we want to count
     *   }
     * })
    **/
    count<T extends AppSpendCountArgs>(
      args?: Subset<T, AppSpendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSpendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSpend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSpendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppSpendAggregateArgs>(args: Subset<T, AppSpendAggregateArgs>): Prisma.PrismaPromise<GetAppSpendAggregateType<T>>

    /**
     * Group by AppSpend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSpendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppSpendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSpendGroupByArgs['orderBy'] }
        : { orderBy?: AppSpendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppSpendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSpendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSpend model
   */
  readonly fields: AppSpendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSpend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSpendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppSpend model
   */
  interface AppSpendFieldRefs {
    readonly id: FieldRef<"AppSpend", 'Int'>
    readonly date: FieldRef<"AppSpend", 'String'>
    readonly app_name: FieldRef<"AppSpend", 'String'>
    readonly spend: FieldRef<"AppSpend", 'Float'>
    readonly campaign_name: FieldRef<"AppSpend", 'String'>
    readonly installs: FieldRef<"AppSpend", 'Int'>
    readonly country: FieldRef<"AppSpend", 'String'>
    readonly ad_account: FieldRef<"AppSpend", 'String'>
    readonly account: FieldRef<"AppSpend", 'String'>
    readonly createdAt: FieldRef<"AppSpend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSpend findUnique
   */
  export type AppSpendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * Filter, which AppSpend to fetch.
     */
    where: AppSpendWhereUniqueInput
  }

  /**
   * AppSpend findUniqueOrThrow
   */
  export type AppSpendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * Filter, which AppSpend to fetch.
     */
    where: AppSpendWhereUniqueInput
  }

  /**
   * AppSpend findFirst
   */
  export type AppSpendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * Filter, which AppSpend to fetch.
     */
    where?: AppSpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSpends to fetch.
     */
    orderBy?: AppSpendOrderByWithRelationInput | AppSpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSpends.
     */
    cursor?: AppSpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSpends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSpends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSpends.
     */
    distinct?: AppSpendScalarFieldEnum | AppSpendScalarFieldEnum[]
  }

  /**
   * AppSpend findFirstOrThrow
   */
  export type AppSpendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * Filter, which AppSpend to fetch.
     */
    where?: AppSpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSpends to fetch.
     */
    orderBy?: AppSpendOrderByWithRelationInput | AppSpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSpends.
     */
    cursor?: AppSpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSpends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSpends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSpends.
     */
    distinct?: AppSpendScalarFieldEnum | AppSpendScalarFieldEnum[]
  }

  /**
   * AppSpend findMany
   */
  export type AppSpendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * Filter, which AppSpends to fetch.
     */
    where?: AppSpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSpends to fetch.
     */
    orderBy?: AppSpendOrderByWithRelationInput | AppSpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSpends.
     */
    cursor?: AppSpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSpends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSpends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSpends.
     */
    distinct?: AppSpendScalarFieldEnum | AppSpendScalarFieldEnum[]
  }

  /**
   * AppSpend create
   */
  export type AppSpendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * The data needed to create a AppSpend.
     */
    data: XOR<AppSpendCreateInput, AppSpendUncheckedCreateInput>
  }

  /**
   * AppSpend createMany
   */
  export type AppSpendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSpends.
     */
    data: AppSpendCreateManyInput | AppSpendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSpend createManyAndReturn
   */
  export type AppSpendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * The data used to create many AppSpends.
     */
    data: AppSpendCreateManyInput | AppSpendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSpend update
   */
  export type AppSpendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * The data needed to update a AppSpend.
     */
    data: XOR<AppSpendUpdateInput, AppSpendUncheckedUpdateInput>
    /**
     * Choose, which AppSpend to update.
     */
    where: AppSpendWhereUniqueInput
  }

  /**
   * AppSpend updateMany
   */
  export type AppSpendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSpends.
     */
    data: XOR<AppSpendUpdateManyMutationInput, AppSpendUncheckedUpdateManyInput>
    /**
     * Filter which AppSpends to update
     */
    where?: AppSpendWhereInput
    /**
     * Limit how many AppSpends to update.
     */
    limit?: number
  }

  /**
   * AppSpend updateManyAndReturn
   */
  export type AppSpendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * The data used to update AppSpends.
     */
    data: XOR<AppSpendUpdateManyMutationInput, AppSpendUncheckedUpdateManyInput>
    /**
     * Filter which AppSpends to update
     */
    where?: AppSpendWhereInput
    /**
     * Limit how many AppSpends to update.
     */
    limit?: number
  }

  /**
   * AppSpend upsert
   */
  export type AppSpendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * The filter to search for the AppSpend to update in case it exists.
     */
    where: AppSpendWhereUniqueInput
    /**
     * In case the AppSpend found by the `where` argument doesn't exist, create a new AppSpend with this data.
     */
    create: XOR<AppSpendCreateInput, AppSpendUncheckedCreateInput>
    /**
     * In case the AppSpend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSpendUpdateInput, AppSpendUncheckedUpdateInput>
  }

  /**
   * AppSpend delete
   */
  export type AppSpendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
    /**
     * Filter which AppSpend to delete.
     */
    where: AppSpendWhereUniqueInput
  }

  /**
   * AppSpend deleteMany
   */
  export type AppSpendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSpends to delete
     */
    where?: AppSpendWhereInput
    /**
     * Limit how many AppSpends to delete.
     */
    limit?: number
  }

  /**
   * AppSpend without action
   */
  export type AppSpendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSpend
     */
    select?: AppSpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSpend
     */
    omit?: AppSpendOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    product: 'product',
    rows: 'rows',
    account: 'account',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const KeitaroReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    campaign: 'campaign',
    rows: 'rows',
    group: 'group',
    createdAt: 'createdAt'
  };

  export type KeitaroReportScalarFieldEnum = (typeof KeitaroReportScalarFieldEnum)[keyof typeof KeitaroReportScalarFieldEnum]


  export const UnityReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    app_id: 'app_id',
    app_name: 'app_name',
    spend: 'spend',
    installs: 'installs',
    campaign_name: 'campaign_name',
    campaign_id: 'campaign_id',
    country_unity: 'country_unity',
    createdAt: 'createdAt'
  };

  export type UnityReportScalarFieldEnum = (typeof UnityReportScalarFieldEnum)[keyof typeof UnityReportScalarFieldEnum]


  export const AppSpendScalarFieldEnum: {
    id: 'id',
    date: 'date',
    app_name: 'app_name',
    spend: 'spend',
    campaign_name: 'campaign_name',
    installs: 'installs',
    country: 'country',
    ad_account: 'ad_account',
    account: 'account',
    createdAt: 'createdAt'
  };

  export type AppSpendScalarFieldEnum = (typeof AppSpendScalarFieldEnum)[keyof typeof AppSpendScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    date?: StringFilter<"Report"> | string
    product?: StringFilter<"Report"> | string
    rows?: JsonFilter<"Report">
    account?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    product?: SortOrder
    rows?: SortOrder
    account?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    date?: StringFilter<"Report"> | string
    product?: StringFilter<"Report"> | string
    rows?: JsonFilter<"Report">
    account?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    product?: SortOrder
    rows?: SortOrder
    account?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    date?: StringWithAggregatesFilter<"Report"> | string
    product?: StringWithAggregatesFilter<"Report"> | string
    rows?: JsonWithAggregatesFilter<"Report">
    account?: StringNullableWithAggregatesFilter<"Report"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type KeitaroReportWhereInput = {
    AND?: KeitaroReportWhereInput | KeitaroReportWhereInput[]
    OR?: KeitaroReportWhereInput[]
    NOT?: KeitaroReportWhereInput | KeitaroReportWhereInput[]
    id?: IntFilter<"KeitaroReport"> | number
    date?: StringFilter<"KeitaroReport"> | string
    campaign?: StringFilter<"KeitaroReport"> | string
    rows?: JsonFilter<"KeitaroReport">
    group?: StringNullableFilter<"KeitaroReport"> | string | null
    createdAt?: DateTimeFilter<"KeitaroReport"> | Date | string
  }

  export type KeitaroReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    campaign?: SortOrder
    rows?: SortOrder
    group?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type KeitaroReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KeitaroReportWhereInput | KeitaroReportWhereInput[]
    OR?: KeitaroReportWhereInput[]
    NOT?: KeitaroReportWhereInput | KeitaroReportWhereInput[]
    date?: StringFilter<"KeitaroReport"> | string
    campaign?: StringFilter<"KeitaroReport"> | string
    rows?: JsonFilter<"KeitaroReport">
    group?: StringNullableFilter<"KeitaroReport"> | string | null
    createdAt?: DateTimeFilter<"KeitaroReport"> | Date | string
  }, "id">

  export type KeitaroReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    campaign?: SortOrder
    rows?: SortOrder
    group?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: KeitaroReportCountOrderByAggregateInput
    _avg?: KeitaroReportAvgOrderByAggregateInput
    _max?: KeitaroReportMaxOrderByAggregateInput
    _min?: KeitaroReportMinOrderByAggregateInput
    _sum?: KeitaroReportSumOrderByAggregateInput
  }

  export type KeitaroReportScalarWhereWithAggregatesInput = {
    AND?: KeitaroReportScalarWhereWithAggregatesInput | KeitaroReportScalarWhereWithAggregatesInput[]
    OR?: KeitaroReportScalarWhereWithAggregatesInput[]
    NOT?: KeitaroReportScalarWhereWithAggregatesInput | KeitaroReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KeitaroReport"> | number
    date?: StringWithAggregatesFilter<"KeitaroReport"> | string
    campaign?: StringWithAggregatesFilter<"KeitaroReport"> | string
    rows?: JsonWithAggregatesFilter<"KeitaroReport">
    group?: StringNullableWithAggregatesFilter<"KeitaroReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KeitaroReport"> | Date | string
  }

  export type UnityReportWhereInput = {
    AND?: UnityReportWhereInput | UnityReportWhereInput[]
    OR?: UnityReportWhereInput[]
    NOT?: UnityReportWhereInput | UnityReportWhereInput[]
    id?: IntFilter<"UnityReport"> | number
    date?: StringFilter<"UnityReport"> | string
    app_id?: StringFilter<"UnityReport"> | string
    app_name?: StringFilter<"UnityReport"> | string
    spend?: FloatFilter<"UnityReport"> | number
    installs?: IntFilter<"UnityReport"> | number
    campaign_name?: StringNullableFilter<"UnityReport"> | string | null
    campaign_id?: StringNullableFilter<"UnityReport"> | string | null
    country_unity?: StringNullableFilter<"UnityReport"> | string | null
    createdAt?: DateTimeFilter<"UnityReport"> | Date | string
  }

  export type UnityReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    app_id?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
    campaign_name?: SortOrderInput | SortOrder
    campaign_id?: SortOrderInput | SortOrder
    country_unity?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type UnityReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnityReportWhereInput | UnityReportWhereInput[]
    OR?: UnityReportWhereInput[]
    NOT?: UnityReportWhereInput | UnityReportWhereInput[]
    date?: StringFilter<"UnityReport"> | string
    app_id?: StringFilter<"UnityReport"> | string
    app_name?: StringFilter<"UnityReport"> | string
    spend?: FloatFilter<"UnityReport"> | number
    installs?: IntFilter<"UnityReport"> | number
    campaign_name?: StringNullableFilter<"UnityReport"> | string | null
    campaign_id?: StringNullableFilter<"UnityReport"> | string | null
    country_unity?: StringNullableFilter<"UnityReport"> | string | null
    createdAt?: DateTimeFilter<"UnityReport"> | Date | string
  }, "id">

  export type UnityReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    app_id?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
    campaign_name?: SortOrderInput | SortOrder
    campaign_id?: SortOrderInput | SortOrder
    country_unity?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UnityReportCountOrderByAggregateInput
    _avg?: UnityReportAvgOrderByAggregateInput
    _max?: UnityReportMaxOrderByAggregateInput
    _min?: UnityReportMinOrderByAggregateInput
    _sum?: UnityReportSumOrderByAggregateInput
  }

  export type UnityReportScalarWhereWithAggregatesInput = {
    AND?: UnityReportScalarWhereWithAggregatesInput | UnityReportScalarWhereWithAggregatesInput[]
    OR?: UnityReportScalarWhereWithAggregatesInput[]
    NOT?: UnityReportScalarWhereWithAggregatesInput | UnityReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnityReport"> | number
    date?: StringWithAggregatesFilter<"UnityReport"> | string
    app_id?: StringWithAggregatesFilter<"UnityReport"> | string
    app_name?: StringWithAggregatesFilter<"UnityReport"> | string
    spend?: FloatWithAggregatesFilter<"UnityReport"> | number
    installs?: IntWithAggregatesFilter<"UnityReport"> | number
    campaign_name?: StringNullableWithAggregatesFilter<"UnityReport"> | string | null
    campaign_id?: StringNullableWithAggregatesFilter<"UnityReport"> | string | null
    country_unity?: StringNullableWithAggregatesFilter<"UnityReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UnityReport"> | Date | string
  }

  export type AppSpendWhereInput = {
    AND?: AppSpendWhereInput | AppSpendWhereInput[]
    OR?: AppSpendWhereInput[]
    NOT?: AppSpendWhereInput | AppSpendWhereInput[]
    id?: IntFilter<"AppSpend"> | number
    date?: StringFilter<"AppSpend"> | string
    app_name?: StringFilter<"AppSpend"> | string
    spend?: FloatFilter<"AppSpend"> | number
    campaign_name?: StringNullableFilter<"AppSpend"> | string | null
    installs?: IntFilter<"AppSpend"> | number
    country?: StringNullableFilter<"AppSpend"> | string | null
    ad_account?: StringNullableFilter<"AppSpend"> | string | null
    account?: StringNullableFilter<"AppSpend"> | string | null
    createdAt?: DateTimeFilter<"AppSpend"> | Date | string
  }

  export type AppSpendOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    campaign_name?: SortOrderInput | SortOrder
    installs?: SortOrder
    country?: SortOrderInput | SortOrder
    ad_account?: SortOrderInput | SortOrder
    account?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AppSpendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppSpendWhereInput | AppSpendWhereInput[]
    OR?: AppSpendWhereInput[]
    NOT?: AppSpendWhereInput | AppSpendWhereInput[]
    date?: StringFilter<"AppSpend"> | string
    app_name?: StringFilter<"AppSpend"> | string
    spend?: FloatFilter<"AppSpend"> | number
    campaign_name?: StringNullableFilter<"AppSpend"> | string | null
    installs?: IntFilter<"AppSpend"> | number
    country?: StringNullableFilter<"AppSpend"> | string | null
    ad_account?: StringNullableFilter<"AppSpend"> | string | null
    account?: StringNullableFilter<"AppSpend"> | string | null
    createdAt?: DateTimeFilter<"AppSpend"> | Date | string
  }, "id">

  export type AppSpendOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    campaign_name?: SortOrderInput | SortOrder
    installs?: SortOrder
    country?: SortOrderInput | SortOrder
    ad_account?: SortOrderInput | SortOrder
    account?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AppSpendCountOrderByAggregateInput
    _avg?: AppSpendAvgOrderByAggregateInput
    _max?: AppSpendMaxOrderByAggregateInput
    _min?: AppSpendMinOrderByAggregateInput
    _sum?: AppSpendSumOrderByAggregateInput
  }

  export type AppSpendScalarWhereWithAggregatesInput = {
    AND?: AppSpendScalarWhereWithAggregatesInput | AppSpendScalarWhereWithAggregatesInput[]
    OR?: AppSpendScalarWhereWithAggregatesInput[]
    NOT?: AppSpendScalarWhereWithAggregatesInput | AppSpendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppSpend"> | number
    date?: StringWithAggregatesFilter<"AppSpend"> | string
    app_name?: StringWithAggregatesFilter<"AppSpend"> | string
    spend?: FloatWithAggregatesFilter<"AppSpend"> | number
    campaign_name?: StringNullableWithAggregatesFilter<"AppSpend"> | string | null
    installs?: IntWithAggregatesFilter<"AppSpend"> | number
    country?: StringNullableWithAggregatesFilter<"AppSpend"> | string | null
    ad_account?: StringNullableWithAggregatesFilter<"AppSpend"> | string | null
    account?: StringNullableWithAggregatesFilter<"AppSpend"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppSpend"> | Date | string
  }

  export type ReportCreateInput = {
    date: string
    product: string
    rows: JsonNullValueInput | InputJsonValue
    account?: string | null
    createdAt?: Date | string
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    date: string
    product: string
    rows: JsonNullValueInput | InputJsonValue
    account?: string | null
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: number
    date: string
    product: string
    rows: JsonNullValueInput | InputJsonValue
    account?: string | null
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeitaroReportCreateInput = {
    date: string
    campaign: string
    rows: JsonNullValueInput | InputJsonValue
    group?: string | null
    createdAt?: Date | string
  }

  export type KeitaroReportUncheckedCreateInput = {
    id?: number
    date: string
    campaign: string
    rows: JsonNullValueInput | InputJsonValue
    group?: string | null
    createdAt?: Date | string
  }

  export type KeitaroReportUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    campaign?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    group?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeitaroReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    campaign?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    group?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeitaroReportCreateManyInput = {
    id?: number
    date: string
    campaign: string
    rows: JsonNullValueInput | InputJsonValue
    group?: string | null
    createdAt?: Date | string
  }

  export type KeitaroReportUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    campaign?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    group?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeitaroReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    campaign?: StringFieldUpdateOperationsInput | string
    rows?: JsonNullValueInput | InputJsonValue
    group?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnityReportCreateInput = {
    date: string
    app_id: string
    app_name: string
    spend: number
    installs?: number
    campaign_name?: string | null
    campaign_id?: string | null
    country_unity?: string | null
    createdAt?: Date | string
  }

  export type UnityReportUncheckedCreateInput = {
    id?: number
    date: string
    app_id: string
    app_name: string
    spend: number
    installs?: number
    campaign_name?: string | null
    campaign_id?: string | null
    country_unity?: string | null
    createdAt?: Date | string
  }

  export type UnityReportUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    installs?: IntFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    campaign_id?: NullableStringFieldUpdateOperationsInput | string | null
    country_unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnityReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    installs?: IntFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    campaign_id?: NullableStringFieldUpdateOperationsInput | string | null
    country_unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnityReportCreateManyInput = {
    id?: number
    date: string
    app_id: string
    app_name: string
    spend: number
    installs?: number
    campaign_name?: string | null
    campaign_id?: string | null
    country_unity?: string | null
    createdAt?: Date | string
  }

  export type UnityReportUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    installs?: IntFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    campaign_id?: NullableStringFieldUpdateOperationsInput | string | null
    country_unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnityReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    app_id?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    installs?: IntFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    campaign_id?: NullableStringFieldUpdateOperationsInput | string | null
    country_unity?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSpendCreateInput = {
    date: string
    app_name: string
    spend: number
    campaign_name?: string | null
    installs?: number
    country?: string | null
    ad_account?: string | null
    account?: string | null
    createdAt?: Date | string
  }

  export type AppSpendUncheckedCreateInput = {
    id?: number
    date: string
    app_name: string
    spend: number
    campaign_name?: string | null
    installs?: number
    country?: string | null
    ad_account?: string | null
    account?: string | null
    createdAt?: Date | string
  }

  export type AppSpendUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    installs?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    ad_account?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSpendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    installs?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    ad_account?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSpendCreateManyInput = {
    id?: number
    date: string
    app_name: string
    spend: number
    campaign_name?: string | null
    installs?: number
    country?: string | null
    ad_account?: string | null
    account?: string | null
    createdAt?: Date | string
  }

  export type AppSpendUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    installs?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    ad_account?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSpendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    app_name?: StringFieldUpdateOperationsInput | string
    spend?: FloatFieldUpdateOperationsInput | number
    campaign_name?: NullableStringFieldUpdateOperationsInput | string | null
    installs?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    ad_account?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    product?: SortOrder
    rows?: SortOrder
    account?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    product?: SortOrder
    account?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    product?: SortOrder
    account?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KeitaroReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    campaign?: SortOrder
    rows?: SortOrder
    group?: SortOrder
    createdAt?: SortOrder
  }

  export type KeitaroReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeitaroReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    campaign?: SortOrder
    group?: SortOrder
    createdAt?: SortOrder
  }

  export type KeitaroReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    campaign?: SortOrder
    group?: SortOrder
    createdAt?: SortOrder
  }

  export type KeitaroReportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UnityReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    app_id?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
    campaign_name?: SortOrder
    campaign_id?: SortOrder
    country_unity?: SortOrder
    createdAt?: SortOrder
  }

  export type UnityReportAvgOrderByAggregateInput = {
    id?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
  }

  export type UnityReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    app_id?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
    campaign_name?: SortOrder
    campaign_id?: SortOrder
    country_unity?: SortOrder
    createdAt?: SortOrder
  }

  export type UnityReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    app_id?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
    campaign_name?: SortOrder
    campaign_id?: SortOrder
    country_unity?: SortOrder
    createdAt?: SortOrder
  }

  export type UnityReportSumOrderByAggregateInput = {
    id?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AppSpendCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    campaign_name?: SortOrder
    installs?: SortOrder
    country?: SortOrder
    ad_account?: SortOrder
    account?: SortOrder
    createdAt?: SortOrder
  }

  export type AppSpendAvgOrderByAggregateInput = {
    id?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
  }

  export type AppSpendMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    campaign_name?: SortOrder
    installs?: SortOrder
    country?: SortOrder
    ad_account?: SortOrder
    account?: SortOrder
    createdAt?: SortOrder
  }

  export type AppSpendMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    app_name?: SortOrder
    spend?: SortOrder
    campaign_name?: SortOrder
    installs?: SortOrder
    country?: SortOrder
    ad_account?: SortOrder
    account?: SortOrder
    createdAt?: SortOrder
  }

  export type AppSpendSumOrderByAggregateInput = {
    id?: SortOrder
    spend?: SortOrder
    installs?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}