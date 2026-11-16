# QHooks

Connect Claude, ChatGPT, Cursor and other MCP clients to QHooks token markets, stored QProof checks and unsigned trade, launch, OTC and agreement plans. The live catalog also includes public portfolio/perps/discovery records, wallet-signing community drafts and competition entry/standings. This package includes no signer, key store, server process or background action.

Prepared for the signing wallet: the agent's own wallet or yours. No custody. We never hold keys.

## Claude Code

In Claude Code, run:

```text
/plugin marketplace add qhooks/qhooks-mcp
/plugin install qhooks@qhooks
```

This installs the QHooks skill and the keyless HTTP MCP connection at `https://qhooks.com/mcp?ref=claude-plugin`. Restart Claude Code after installation, or reload plugins if your version supports it. Use `/qhooks:qhooks` for the read-and-prepare guidance. Public reads and unsigned plans do not require a QHooks API key; the signing wallet approves any transaction separately.

<!-- canonical-chains:start -->
QHooks covers eight chains: Base, Robinhood Chain, Ethereum, Arbitrum One, BNB Chain, Elysium, Monad, Solana. Tool and execution support varies by chain; launch/Solana site flows and perps venue signing follow the live catalog and returned plan.
<!-- canonical-chains:end -->

## Connect

Remote Streamable HTTP URL: `https://qhooks.com/mcp?ref=registry`. Choose **No authentication / No sign in**. Reads and preparation do not require a QHooks API key. A wallet signature is separate from connecting the MCP server. Existing platform account/workspace restrictions apply.

- Claude Desktop/web: Customize → Connectors → Add custom connector; paste the URL and choose No sign in. See `examples/claude.md`.
- ChatGPT: add this remote server through the supported custom-connector/plugin flow in your account. See `examples/openai.md`; no claim of directory approval.
- Cursor: import the plugin folder or merge `examples/cursor-mcp.json` into `.cursor/mcp.json`; review the connection in the editor.
- Codex: `codex mcp add qhooks --url 'https://qhooks.com/mcp?ref=registry'`.

Try: “Show one recent QHooks launch on Robinhood Chain.” Then: “Read its stored QProof evidence; show missing or stale data.” Read `tools/list` before preparing anything. Transactions, approvals and on-chain fees are disclosed by the actual returned plan and wallet. Quotes, plans, signatures and completed transactions are different states.

Check the live tool catalog and error responses for current availability and limits. Honor 429 and Retry-After; cached reads, fresh upstream work and signed writes can have different limits. Launches/Solana use site flows, perpetual orders use venue signing, and held tools are not available merely because a schema exists.

Support: https://qhooks.com/support · tool contract: https://qhooks.com/skill.md · API: https://qhooks.com/api · privacy: https://qhooks.com/privacy · terms: https://qhooks.com/terms . The support page and tool metadata are live. Directory acceptance is not claimed.

## Package and ownership

`.claude-plugin/plugin.json` + `.mcp.json` provide the Claude Code plugin; `.claude-plugin/marketplace.json` provides the QHooks marketplace. `plugin.json` + `mcp.json` implement the separate portable Agent Plugins format. `.cursor-plugin/plugin.json` is the Cursor compatibility manifest. No hooks, local commands, credentials, TradingView files or website/vendor source are included. The 512×512 icon is the existing QHooks brand asset. Root mcp.json is the strict portable1.0.0 format (anonymous, no headers). The separate OpenAI edition uses the documented per-server com.openai.auth.type=none extension; the current portable MCP schema does not yet allow that extension. Portal validation remains required for that edition.

Public repository: https://github.com/qhooks/qhooks-mcp . Licensed under [MIT](LICENSE) for the configurations, examples and documentation in this repository only. This does not relicense qhooks.com, its contracts, vendor code or third-party assets, or grant trademark rights. The website privacy policy covers the remote service; this pack has no local telemetry or background tasks.
