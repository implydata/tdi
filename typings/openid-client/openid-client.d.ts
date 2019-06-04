declare module "openid-client" {
    export class OpenIdConnectError extends Error {
      error: string;
      error_description?: string;
      error_uri?: string;
      state?: string;
      scope?: string;
      response?: any;
    }
  
    export class Strategy extends passport.Strategy {
      constructor(options: StrategyOptions, verify: any): Strategy;
      authenticate(req: express.Request, options?: Object): void;
    }
  
    type DiscoverOptions = {
      issuer: string;
      authorization_endpoint: string;
      token_endpoint: string;
      userinfo_endpoint: string;
      jwks_uri: string;
    };
  
    export class Issuer {
      static defaultHttpOptions: any;

      constructor(options: DiscoverOptions);
  
      static discover(url: string): Promise<Issuer>;
  
      Client: typeof Client;
  
      useRequest(): void;
    }
  
    type ClientOptions = {
      client_id: string;
      client_secret: string;
      redirect_uris?: string[];
    };
  
    type ClientKeyStore = any;
  
    type ClientTokenSet = {
      claims: any;
    };
  
    type SupportedScopes =
      | "openid"
      | "profile"
      | "email"
      | "address"
      | "phone"
      | "offline_access";
  
    type ResponseTypesScopes =
      | "code"
      | "token"
      | "id_token"
      | "id_token token"
      | "code id_token"
      | "code id_token token";
  
    type ResponseModesScopes = "query" | "fragment" | "form_post";
  
    type GrantTypesSupported =
      | "implicit"
      | "authorization_code"
      | "refresh_token"
      | "password"
      | "client_credentials"
      | "urn:ietf:params:oauth:grant-type:jwt-bearer";
  
    type CodeChallengeMethodsSupported = "S256" | "plain";
  
    type TokenEndpointAuthMethodsSupported =
      | "client_secret_basic"
      | "client_secret_post"
      | "client_secret_jwt"
      | "private_key_jwt"
      | "self_signed_tls_client_auth"
      | "none";
  
    type TokenEndpointAuthSigningAlgValuesSupported =
      | "HS256"
      | "HS384"
      | "HS512"
      | "RS256"
      | "RS384"
      | "RS512"
      | "PS256"
      | "PS384"
      | "PS512"
      | "ES256"
      | "ES384"
      | "ES512";
  
    type RequestObjectSigningAlgValuesSupported =
      | "HS256"
      | "HS384"
      | "HS512"
      | "RS256"
      | "RS384"
      | "RS512"
      | "PS256"
      | "PS384"
      | "PS512"
      | "ES256"
      | "ES384"
      | "ES512"
      | "none";
  
    type SubjectTypesSupported = "public" | "pairwise";
  
    type IdTokenSigningAlgValuesSupported =
      | "RS256"
      | "RS384"
      | "RS512"
      | "PS256"
      | "PS384"
      | "PS512"
      | "ES256"
      | "ES384"
      | "ES512"
      | "HS256"
      | "HS384"
      | "HS512"
      | "none";
  
    type IdTokenEncryptionAlgValuesSupported =
      | "RSA1_5"
      | "RSA-OAEP"
      | "RSA-OAEP-256"
      | "ECDH-ES"
      | "ECDH-ES+A128KW"
      | "ECDH-ES+A192KW"
      | "ECDH-ES+A256KW"
      | "dir"
      | "A128KW"
      | "A192KW"
      | "A256KW"
      | "A128GCMKW"
      | "A192GCMKW"
      | "A256GCMKW";
  
    type IdTokenEncryptionEncValuesSupported =
      | "A128CBC-HS256"
      | "A192CBC-HS384"
      | "A256CBC-HS512"
      | "A128GCM"
      | "A192GCM"
      | "A256GCM";
  
    type UserinfoSigningAlgValuesSupported =
      | "RS256"
      | "RS384"
      | "RS512"
      | "PS256"
      | "PS384"
      | "PS512"
      | "ES256"
      | "ES384"
      | "ES512"
      | "HS256"
      | "HS384"
      | "HS512";
  
    type UserinfoEncryptionAlgValuesSupported =
      | "RSA1_5"
      | "RSA-OAEP"
      | "RSA-OAEP-256"
      | "ECDH-ES"
      | "ECDH-ES+A128KW"
      | "ECDH-ES+A192KW"
      | "ECDH-ES+A256KW"
      | "dir"
      | "A128KW"
      | "A192KW"
      | "A256KW"
      | "A128GCMKW"
      | "A192GCMKW"
      | "A256GCMKW";
  
    type UserinfoEncryptionEncValuesSupported =
      | "A128CBC-HS256"
      | "A192CBC-HS384"
      | "A256CBC-HS512"
      | "A128GCM"
      | "A192GCM"
      | "A256GCM";
  
    type DisplayValuesSupported = "page" | "popup";
  
    type ClaimTypesSupported = "normal";
  
    type ClaimsSupported =
      | "sub"
      | "iss"
      | "auth_time"
      | "acr"
      | "name"
      | "given_name"
      | "family_name"
      | "nickname"
      | "email"
      | "email_verified";
  
    type Metadata = {
      issuer: string;
      jwks_uri: string;
      authorization_endpoint: string;
      token_endpoint: string;
      registration_endpoint: string;
      introspection_endpoint: string;
      revocation_endpoint: string;
      userinfo_endpoint: string;
      scopes_supported: SupportedScopes[];
      response_types_supported: ResponseTypesScopes[];
      response_modes_supported: ResponseModesScopes[];
      grant_types_supported: GrantTypesSupported[];
      code_challenge_methods_supported: CodeChallengeMethodsSupported[];
      token_endpoint_auth_methods_supported: TokenEndpointAuthMethodsSupported[];
      token_endpoint_auth_signing_alg_values_supported: TokenEndpointAuthSigningAlgValuesSupported[];
      request_object_signing_alg_values_supported: RequestObjectSigningAlgValuesSupported[];
      ui_locales_supported: string[];
      request_parameter_supported: boolean;
      request_uri_parameter_supported: boolean;
      require_request_uri_registration: boolean;
      tls_client_certificate_bound_access_tokens: boolean;
      request_uri_quota: number;
      subject_types_supported: SubjectTypesSupported[];
      acr_values_supported: string[];
      id_token_signing_alg_values_supported: IdTokenSigningAlgValuesSupported[];
      id_token_encryption_alg_values_supported: IdTokenEncryptionAlgValuesSupported[];
      id_token_encryption_enc_values_supported: IdTokenEncryptionEncValuesSupported[];
      userinfo_signing_alg_values_supported: UserinfoSigningAlgValuesSupported[];
      userinfo_encryption_alg_values_supported: UserinfoEncryptionAlgValuesSupported[];
      userinfo_encryption_enc_values_supported: UserinfoEncryptionEncValuesSupported[];
      display_values_supported: DisplayValuesSupported[];
      claim_types_supported: ClaimTypesSupported[];
      claims_supported: ClaimsSupported[];
      claims_parameter_supported: boolean;
      frontchannel_logout_supported: boolean;
      frontchannel_logout_session_supported: boolean;
      backchannel_logout_supported: boolean;
      backchannel_logout_session_supported: boolean;
    };
  
    export class Client {
      constructor(options: ClientOptions, keystore?: ClientKeyStore);
  
      static fromUri(
        registrationClientUri: string,
        registrationAccessToken: string,
        keystore?: ClientKeyStore
      ): Promise<Client>;
  
      static defaultHttpOptions: any;

      CLOCK_TOLERANCE: number;

      issuer: {
        metadata: Metadata;
      };
  
      authorizationUrl(params: {
        redirect_uri: string;
        scope: string;
        claims?: object;
        [key: string]: any;
      }): string;
  
      authorizationPost(params: {
        redirect_uri: string;
        scope: string;
        claims?: object;
        [key: string]: any;
      }): string;
  
      authorizationCallback(
        callbackUri: string,
        query: object,
        params: {
          state: string;
          response_type: string;
          nonce?: string;
          max_age?: number;
          code_verifier?: any;
        }
      ): Promise<ClientTokenSet>;
  
      callbackParams(): { code: string };
    }
  }