let BREAK_ON_EXCEPTION: boolean = false;
let SWALLOW_ERRORS: boolean = false;

export function Throw(
  message: string,
  contextGetter: ?(() => any),
): void {
  console.warn(message);
  if (contextGetter) {
    console.warn(contextGetter());        
  }
  if (BREAK_ON_EXCEPTION) {
    debugger;
  }
  if (!SWALLOW_ERRORS) {
    throw message;
  }
}

export function Assert(
  condition: boolean,
  message: string,
  contextGetter: ?(() => any),
): void {
  if (!condition) {
    Throw(message, contextGetter);
  }
}

export function BreakOnException() {
  BREAK_ON_EXCEPTION = true;
}

export function DontBreakOnException() {
  BREAK_ON_EXCEPTION = false;
}

export function SwallowErrors() {
  SWALLOW_ERRORS = true;
}

export function DontSwallowErrors() {
  SWALLOW_ERRORS = false;
}