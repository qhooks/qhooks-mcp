# Claude Code

```text
/plugin marketplace add qhooks/qhooks-mcp
/plugin install qhooks@qhooks
```

The marketplace installs the `qhooks` plugin, its `qhooks` skill and a keyless HTTP MCP server. The remote URL is `https://qhooks.com/mcp?ref=claude-plugin`. Restart Claude Code or use its supported plugin reload command. Discover the current server tools before asking for a plan. Try: “Show one recent QHooks launch on Robinhood Chain, then read its stored QProof evidence.”

Prepared for the signing wallet: the agent's own wallet or yours. No custody. We never hold keys. The plugin has no signer or broadcaster.

# Claude Desktop and web

In Customize → Connectors → Add custom connector, use `https://qhooks.com/mcp?ref=registry` and choose No sign in. Organization policies and account availability apply. This is a remote connector, not a guessed `claude_desktop_config.json` stdio command. Start with the read-only launch prompt in the README. Official guidance: https://claude.com/docs/connectors/overview .
