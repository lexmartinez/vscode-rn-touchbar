const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const config = vscode.workspace.getConfiguration();
  const start = vscode.commands.registerCommand('rntouchbar.start', () => {
        const terminal = vscode.window.createTerminal(`React Native: start`);
        if (terminal && config.rntouchbar.startCommand) {
          terminal.sendText(config.rntouchbar.startCommand);
          terminal.show();
        }    
   });
   
   const ios = vscode.commands.registerCommand('rntouchbar.ios', () => {
     const terminal = vscode.window.createTerminal(`React Native: ios`);
     if (terminal && config.rntouchbar.iosCommand) {
       terminal.sendText(config.rntouchbar.iosCommand);
       terminal.show();
     }  
   });

   const android = vscode.commands.registerCommand('rntouchbar.android', () => {
     const terminal = vscode.window.createTerminal(`React Native: android`);
     if (terminal && config.rntouchbar.androidCommand) {
       terminal.sendText(config.rntouchbar.androidCommand);
       terminal.show();
     }  
   });

   const rndebugger = vscode.commands.registerCommand('rntouchbar.debugger', () => {
     const terminal = vscode.window.createTerminal(`React Native: debugger`);
     if (terminal && config.rntouchbar.debuggerCommand) {
       terminal.sendText(config.rntouchbar.debuggerCommand);
       terminal.hide();
     }  
   });

    context.subscriptions.push(start, ios, android, rndebugger);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
