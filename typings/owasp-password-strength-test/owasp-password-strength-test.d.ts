declare module 'owasp-password-strength-test' {
  export interface PassRuleOptions {
    allowPassphrases?: boolean;
    maxLength?: number;
    minLength?: number;
    minPhraseLength?: number;
    minOptionalTestsToPass?: number;
  }

  export interface PassTestResult {
    errors: string[];
    failedTests: number[];
    passedTests: number[];
    requiredTestErrors: string[];
    optionalTestErrors: string[];
    isPassphrase: boolean;
    strong: boolean;
    optionalTestsPassed: number;
  }
  export var config: (o: PassRuleOptions) => void;
  export var test: (s: string) => PassTestResult;
}
