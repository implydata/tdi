export interface PassRuleOptions {
  allowPassphrases?: boolean;
  maxLength?: number;
  minLength: number;
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

interface OwaspPasswordStrengthTest {
  config(o: PassRuleOptions): void;
  test(s: string): PassTestResult;
}

declare var owaspPasswordStrengthTest: OwaspPasswordStrengthTest;

declare module 'owasp-password-strength-test' {
  export = owaspPasswordStrengthTest;
}
