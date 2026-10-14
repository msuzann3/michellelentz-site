# Cross-Mac setup status — October 14, 2026

## Active site checkout

- Agent Carter: `/Users/Michelle/Developer/michelleslentz-site`
- Ginger: `/Users/michelle/Developer/michelleslentz-site` (installed and verified)
- Shared private materials: `~/Documents/_AI-Workspace/Codex/michelleslentz-site/private/technical-writing/`

Both clones passed Git integrity checks, track `origin/main`, and have identical website files at base commit `336208c`. Global instructions are installed on both Macs. Ginger archived the retired shared Git metadata under `/Users/michelle/Developer/.git-metadata-backups/`.

## Saved Codex project folder

In Codex, open the menu for **MichelleSLentz Site**, choose **Edit project**, and add the active local checkout folder. Set it as the primary folder. Remove the retired iCloud website folder from the project's editing folders after preserving access to any private materials you still need. If the UI offers a single folder rather than multiple folders, select the active checkout as the project folder. Perform the equivalent change on Ginger if it has a saved site project.

Existing chats may retain their original working directory. Their instructions direct site work to the active local checkout explicitly. New chats should start in the new primary folder.

## Handoff

Inspect local changes and commits, fetch, and fast-forward only a clean non-divergent checkout. Commit and push approved work before switching computers, then verify the receiving Mac has the intended commit. A push to main publishes through GitHub Pages. Never reset, clean, or overwrite unfinished work to force synchronization.

The workflow documentation is included with the October 14 Home/About release. Fetch and verify the release commit on the receiving Mac before editing.
