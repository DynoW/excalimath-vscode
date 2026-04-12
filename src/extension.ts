import * as vscode from "vscode";
import { registerCommands } from "./commands";
import { ExcalidrawEditorProvider } from "./editor";
import { ExcalidrawUriHandler } from "./uri-handler";

export async function activate(context: vscode.ExtensionContext) {
  // Warn if the original Excalidraw extension is active alongside ExcaliMath
  const excalidrawExtension = vscode.extensions.getExtension("pomdtr.excalidraw-editor");
  if (excalidrawExtension) {
    vscode.window.showWarningMessage(
      "You have both 'Excalidraw' and 'ExcaliMath' extensions installed. They may conflict to open the same files. We recommend disabling or uninstalling the original 'Excalidraw' extension."
    );
  }

  // Register our custom editor providers
  context.subscriptions.push(await ExcalidrawEditorProvider.register(context));
  context.subscriptions.push(ExcalidrawUriHandler.register());
  registerCommands(context);
}
