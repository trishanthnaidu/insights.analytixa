export const windowErrorHandler = (callback, ...args) => {
      window.onerror = (message, file, line, column, errorObject) => {
            column = column || (window.event && window.event.errorCharacter);
            var stack = errorObject ? errorObject.stack : null;

            //trying to get stack from IE
            if (!stack) {
                  var stack = [];
                  var f = args.callee.caller;
                  while (f) {
                        stack.push(f.name);
                        f = f.caller;
                  }
                  errorObject['stack'] = stack;
            }

            var data = {
                  message: message,
                  file: file,
                  line: line,
                  column: column,
                  errorStack: stack,
            };
            callback(data);
      }
}