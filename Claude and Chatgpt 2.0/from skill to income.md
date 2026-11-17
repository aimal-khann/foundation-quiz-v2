# From Skills to Income (/from-skills-to-income/overview)

---
type: Document
title: "From Skills to Income"
description: "How the skills in this book become income, through a job, an FDE role, client work or a product many customers pay for, what each route needs first, how a product built on an AI assistant earns, and which parts of the book teach each route."
status: stable
order: 4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:42Z
chapter: "F4"
part: Front
expert_status: required
objectives: []
word_budget: 2700
prerequisites: [ "F3" ]
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: []
last_verified: 2026-10-29
review_by: 2026-11-29
sources:
  - id: gallup-ai-at-work
    title: "AI Benefits at Work Unevenly Distributed (Gallup, 6 October 2026, verified 2026-10-29)"
    resource: https://news.gallup.com/poll/714602/benefits-work-unevenly-distributed.aspx
  - id: mcp-skills
    title: "Skills, Model Context Protocol (verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/skills/overview
generated:
  at: 2026-11-15T11:19:42Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:ae1923c7e983a279c557c27dbd7aeabd8376751e1ea8187d0fd134931fcc2e7c
dirty: true
ksor_version: 0.0.60
---

Income comes from solving a problem someone values enough to pay for. This book teaches you to manage AI Workers and to build your own. Those skills earn money when they produce work people rely on: work that is correct, saves time, reduces errors or improves a decision.

A certification is evidence that you passed an assessment of these skills. A portfolio is evidence that you have done real work with them. Customers and employers pay for the results.

## Four ways to earn

The four routes overlap. Many people move between them, or follow two at once.

| Route | What you do | Who pays you | A good first milestone |
| --- | --- | --- | --- |
| **A job** | Manage or build the AI Workers of the company that employs you | Your employer, as salary | A job application backed by portfolio work |
| **Forward Deployed Engineer (FDE)** | Work inside a client's operations, as an employee or a contractor, and build AI Workers that fit how that client works | The client, directly or through the firm that places you | A pilot inside one client's team |
| **Client work** | Build AI Workers for clients as projects, then support and improve them, often on a retainer | Each client, per project, per deliverable or per month | One paid project, delivered and reviewed by the client |
| **Founder with a product** | Turn what you know into a product that many customers use without you in the room | Many customers, by subscription, by use, or through an organization license | A pilot with one paying customer |

## What each route needs first

**A job** needs evidence. A certification gets your application read. Portfolio work that shows a real task, the AI Worker you built or managed for it, and how you checked the result gets you hired.

**An FDE** needs to work well inside someone else's business. You learn how the client's work really runs, find the step worth automating, and ship a small pilot their team trusts. Knowing the client's process matters as much as knowing the platform. An FDE also learns, inside real organizations, which problems are worth a product.

**Client work** needs a clear scope and a fair price. A project can be priced by its deliverables or by the value it creates, not only by the hour. Plan for the support that follows, because AI Workers need maintenance as models and tools change. The cases in [Claude and ChatGPT 2.0](../claude-and-chatgpt-2/overview.md) show this route at small scale: Nisha's first paid client in Case 2, and three ways to price the same work in Case 4.

**A founder** needs a problem that many people share and will pay to solve. The product needs maintenance too, but one maintained product can serve many customers. You do not need every skill yourself. A domain expert who knows the problem and an AI builder who knows the platform can build it together.

The first three depend more directly on your own involvement, and they are where most readers will start earning. The roadmaps on the previous page lead to them. The rest of this page explains how a product built on an AI assistant works, because it is the newest route.

## The idea in one line

The interface is the storefront, your server is the cash register, and the AI does the reasoning.

Here is what that means. Many people already use an AI assistant at work.[^gallup-ai-at-work] That assistant can be connected to outside tools. If you build one of those tools, you can charge for it.

What you sell is the part the AI does not have: your knowledge, your method or your data. The AI reads what your tool returns and does the thinking.

You can build four kinds of things to sell. Most products combine them:

| What you build | What it gives the customer | Where it runs |
| --- | --- | --- |
| **A skill** | A method: the steps an expert follows to do one job well | Inside the customer's AI app |
| **A plugin** | Skills and the setup for your connector, installed in one step | Inside the customer's AI app. The connector it sets up runs on your server |
| **A connector** | Your knowledge, method or data, through an MCP server that checks who has paid | On your server |
| **An MCP App** | Your connector with its own screens inside the chat, such as a table with a button beside each row | The screen in the customer's AI app, the work on your server |

Anyone who installs a skill or a plugin can read it. A skill can also be sent from your server, through the Skills over MCP extension, but once the AI app loads it, the customer can read it too.[^mcp-skills] So charge on the connector. An MCP App is a connector with screens, so the same check of who has paid covers it. A typical product is a plugin that sets up your connector, with screens for customers who would rather click than type.

![A customer uses an interface, a plugin or an app, which calls your server. Your server checks that the customer has paid, and only then returns your knowledge, method or data. The AI reasons over what the server returns. The customer pays you through your payment page, and your server records who has paid.](img/skills-to-income.png)

Read the figure from left to right. Copying the interface does not get anyone past your server, and only your server hands over the part worth paying for.

[^mcp-skills]: Skills, Model Context Protocol, accessed 15 November 2026.
[^gallup-ai-at-work]: AI Benefits at Work Unevenly Distributed, Gallup, 6 October 2026. In a survey of U.S. employees from January to March 2026, 28 percent used AI at work at least weekly, and 54 percent had not used it in their role.
# Two ways customers use your product (/from-skills-to-income/two-ways-customers-use-your-product)

---
type: Document
title: "Two ways customers use your product"
description: "The two ways customers use what you build, through conversation with a connector or through an app, for individuals and teams alike."
status: stable
order: 4.1
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:42Z
chapter: "F4"
part: Front
expert_status: required
concepts: []
last_verified: 2026-10-29
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-artifacts-connectors
    title: "What are artifacts and how do I use them?, the plans where an Artifact can use connectors (Claude Help Center, updated 30 October 2026, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-connectors
    title: "Use connectors to extend Claude's capabilities (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: anthropic-org-connectors
    title: "Authorize MCP connectors for your entire organization (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization
  - id: anthropic-plugins
    title: "Use plugins in Claude (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - id: anthropic-interactive-connectors
    title: "Your favorite work tools are now interactive connectors inside Claude (Anthropic, 26 January 2026, verified 2026-10-29)"
    resource: https://claude.com/blog/interactive-tools-in-claude
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: openai-mcp-apps
    title: "MCP Apps compatibility in ChatGPT (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
generated:
  at: 2026-11-15T11:19:42Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:ae1923c7e983a279c557c27dbd7aeabd8376751e1ea8187d0fd134931fcc2e7c
dirty: true
ksor_version: 0.0.60
---

Both ways serve individuals and teams alike. What differs is how people work.

**Through conversation.** A connector links the AI assistant to your server. The customer adds it, signs in, and then simply asks the AI for help. The AI calls your server, and your server decides what that customer has paid for.

A connector can be added on its own. You can also package it in a plugin, which bundles skills, connectors and subagents into one package, so the customer sets everything up at once.[^anthropic-plugins] There are no screens to build, but the customer has to know what to ask.

**Through a guided app.** Many people will never write a good request to an AI. They need a screen with buttons, tables and a guided workflow. There are two ways to give them one:

- **An MCP App.** Your server shows its own screens inside the chat, through MCP Apps, an official, optional extension to MCP.[^mcp-apps] A customer asks for their open invoices and gets a table with an Approve button beside each one, not a list of text. The same screen works in every AI app that supports MCP Apps, including Claude, ChatGPT and Microsoft 365 Copilot.[^mcp-apps],[^openai-mcp-apps] Claude calls these interactive connectors.[^anthropic-interactive-connectors]
- **An Artifact.** On Claude only, the app can also be an Artifact that calls Claude.[^anthropic-artifacts]

An MCP App is part of your connector, so it reaches every customer who adds the connector. An Artifact calls the AI to do the work each time someone uses it. On Claude, an Artifact can use connectors on the Pro, Max, Ultra, Team and Enterprise plans, and each person connects their own apps, even in a shared Artifact.[^anthropic-artifacts-connectors]

An MCP App adds a screen to a tool. It does not replace the tool's answer. Each tool should still return useful text, so a customer whose AI app cannot show screens still gets a result.[^mcp-apps]

Both ways use the same server. Build the first, and the second is an addition, not a rewrite. But reusing the server does not solve distribution. You still have to get the product to each customer, set it up and keep it updated.

**Setup is an important obstacle to adoption.** Before anything works, each customer usually has to add your connector and sign in. In a company, an owner must first turn on connectors for the organization. Each person then signs in separately, unless the connector uses one shared credential.[^anthropic-connectors]

On Claude Team and Enterprise, an administrator can authorize a connector once for everyone through enterprise-managed authentication. It works only if your connector supports it.[^anthropic-org-connectors]

For someone who has never done this, setup is a real hurdle, and it falls on the non-technical users a guided app is meant to reach. Write a short setup guide. Then test, in a real customer workspace, how a customer receives the product, turns it on and gets updates.

[^anthropic-plugins]: Use plugins in Claude, Claude Help Center.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.
[^openai-mcp-apps]: MCP Apps compatibility in ChatGPT, OpenAI Developers, accessed 15 November 2026.
[^anthropic-interactive-connectors]: Your favorite work tools are now interactive connectors inside Claude, Anthropic, 26 January 2026.
[^anthropic-artifacts-connectors]: What are artifacts and how do I use them?, Claude Help Center, accessed 31 October 2026.
[^anthropic-connectors]: Use connectors to extend Claude's capabilities, Claude Help Center.
[^anthropic-org-connectors]: Authorize MCP connectors for your entire organization, Claude Help Center.
# Why the value stays on your server (/from-skills-to-income/why-the-value-stays-on-your-server)

---
type: Document
title: "Why the value stays on your server"
description: "Why the check on who has paid and the material worth paying for stay on your server, and who pays for the AI's reasoning on each platform."
status: stable
order: 4.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:42Z
chapter: "F4"
part: Front
expert_status: required
concepts: []
last_verified: 2026-10-29
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
generated:
  at: 2026-11-15T11:19:42Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:ae1923c7e983a279c557c27dbd7aeabd8376751e1ea8187d0fd134931fcc2e7c
dirty: true
ksor_version: 0.0.60
---

Anything that runs on the customer's side can be read and copied. That includes a skill's steps, a plugin's instructions and an app's code. An MCP App's screen is a web page that your server sends to the customer's AI app, so its code can be read too. A paywall written into any of them can simply be deleted.

So the check that decides who has paid, and the material worth paying for, both stay on your server. Customers pay on your own website, through a card processor such as Stripe or a local payment gateway, and your server records who has paid. The plugin and the app never handle card details.

When a customer uses the product, they sign in, your server checks their subscription, and only then does it send the next lesson, rubric or result. This is why **you sell access to your server, not the skill, the plugin or the app's screens.**

A server stops casual copying, but it does not make your material leak-proof. A paying customer can read everything you send them, and could collect it piece by piece. So send only what each step needs: one lesson, one rubric or one result at a time, with a limit on how much one customer can ask for. Protect the material, not the page.

## Who pays for what

Who pays for the AI's reasoning depends on the platform and on where the reasoning happens. On Claude, when someone uses an Artifact that calls Claude's built-in AI, the usage counts against that person's own plan, not the creator's.[^anthropic-artifacts]

That covers only the AI inside the Artifact. Any model your own server calls is billed to you. For an AI that you run yourself, such as an open-source model, you pay for the computers it runs on.

Where the customer's plan does pay, the customer pays twice: once for the AI and once for you. Organizations that already pay for an AI workspace may accept this more easily than individuals do, but that is a guess to test with real customers.

There is a catch. Some of your material may be too valuable to send to the customer at all, such as a scoring method that is your whole advantage. Then your server has to do that work itself and return only the answer. If that work needs an AI model, you pay for it.

**Keeping something completely secret and having the customer pay for its reasoning do not go together.** Decide which material is worth protecting at your own cost.

Your other costs are real too: hosting, security, sign-in, payment fees, support and keeping your material up to date. And where your product uses the customer's AI limits, a careless design can use them up. Customers will blame you, not the AI vendor.

[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
# How it works on Claude and on OpenAI (/from-skills-to-income/how-it-works-on-claude-and-openai)

---
type: Document
title: "How it works on Claude and on OpenAI"
description: "How one MCP server reaches customers on Claude, on OpenAI and in open source, for readers who will build a product."
status: stable
order: 4.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:42Z
chapter: "F4"
part: Front
expert_status: required
concepts: []
last_verified: 2026-10-29
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-share-artifacts
    title: "Share artifacts (Claude Help Center, 23 September 2026, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: anthropic-share-artifacts-plans
    title: "Share artifacts, on Pro, Max and Ultra (Claude Help Center, updated 30 October 2026, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: anthropic-connectors
    title: "Use connectors to extend Claude's capabilities (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: anthropic-plugins
    title: "Use plugins in Claude (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - id: openai-connected-apps
    title: "Connected apps in ChatGPT (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt
  - id: openai-plugins
    title: "Plugins in ChatGPT (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/20001256-plugins-in-chatgpt
  - id: openai-apps-sdk
    title: "Building with the Apps SDK (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/12515353-building-with-the-apps-sdk
  - id: openai-auth
    title: "Authentication (OpenAI Developers, verified 2026-10-29)"
    resource: https://developers.openai.com/plugins/build/auth
  - id: openai-plugin-guidelines
    title: "Plugin guidelines (OpenAI Developers, verified 2026-10-29)"
    resource: https://developers.openai.com/plugins/plugin-guidelines
  - id: openai-custom-mcp
    title: "Connecting custom MCP servers in ChatGPT (OpenAI Help Center, verified 2026-10-29)"
    resource: https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt
  - id: anthropic-interactive-connectors
    title: "Your favorite work tools are now interactive connectors inside Claude (Anthropic, 26 January 2026, verified 2026-10-29)"
    resource: https://claude.com/blog/interactive-tools-in-claude
  - id: anthropic-connector-directory
    title: "Submit a connector to the directory (Claude.ai Documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/connectors/building/submission
  - id: anthropic-directory-vs-custom
    title: "Directory connectors vs custom connectors (Claude.ai Documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/connectors/building/directory-vs-custom
  - id: anthropic-directory-policy
    title: "Anthropic Software Directory Policy (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/13145358-anthropic-software-directory-policy
  - id: anthropic-custom-connectors
    title: "Get started with custom connectors using remote MCP (Claude Help Center, verified 2026-10-29)"
    resource: https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp
  - id: anthropic-connector-auth
    title: "Authentication for connectors (Claude.ai Documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/connectors/building/authentication
  - id: mcp-authorization
    title: "Authorization, MCP specification 2026-07-28 (Model Context Protocol, verified 2026-10-29)"
    resource: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization
  - id: mcp-extensions
    title: "Understanding MCP Extensions (Model Context Protocol blog, 11 March 2026, verified 2026-10-29)"
    resource: https://blog.modelcontextprotocol.io/posts/2026-03-11-understanding-mcp-extensions/
  - id: mcp-apps
    title: "MCP Apps (Model Context Protocol, verified 2026-11-15)"
    resource: https://modelcontextprotocol.io/extensions/apps/overview
  - id: openai-mcp-apps
    title: "MCP Apps compatibility in ChatGPT (OpenAI Developers, verified 2026-11-15)"
    resource: https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt
  - id: anthropic-interactive-connectors-help
    title: "Use interactive connectors in Claude (Claude Help Center, verified 2026-11-15)"
    resource: https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude
generated:
  at: 2026-11-15T11:19:42Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:ae1923c7e983a279c557c27dbd7aeabd8376751e1ea8187d0fd134931fcc2e7c
dirty: true
ksor_version: 0.0.60
---

If you will not build a product, skip this section and go on to "Where the book teaches this".

The same server works on both platforms, because both connect to outside tools through MCP, the Model Context Protocol: one standard plug for AI apps. Build your server to it once, and any AI app that supports MCP can plug in. Both platforms also support MCP Apps, MCP's shared way for a server to show its own screens inside the chat.[^mcp-extensions] What differs is how customers find the product, see it and pay for it. Each vendor sets these rules and changes them often, so this section is checked every month. Check them again before you sell.

| As of October 29, 2026 | Claude | OpenAI (ChatGPT) |
| --- | --- | --- |
| **Through conversation** | A connector, alone or in a plugin | An app, alone or in a plugin |
| **Through guided screens** | An Artifact beside the chat, or your connector's own screens inside it | The app's own interface, inside the chat |
| **Sign-in** | Each person signs in with OAuth, and your server checks the token on every call[^anthropic-connector-auth],[^mcp-authorization] | The same, with OAuth 2.1 |
| **Who pays for the AI's reasoning** | The user's Claude plan, for Claude inside an Artifact | The user's ChatGPT plan, whose limits app use may count toward |
| **One company, privately** | The owner turns on connectors, and you share the Artifact inside the organization | A Business, Enterprise or Edu admin adds your server and publishes it to that workspace only |
| **Everyone** | List it in Anthropic's connector directory, or share an install link | Submit a plugin to ChatGPT's directory as a verified individual or organization |
| **Selling inside the AI app** | No checkout inside Claude is described. A listed connector may need a paid account with you[^anthropic-connector-directory] | Physical goods only. No subscriptions or digital goods |

### One screen, many AI apps

An MCP App is your connector's own screen, so it goes wherever the connector goes. As of November 15, 2026, the MCP project lists Claude, Claude Desktop, VS Code GitHub Copilot and Microsoft 365 Copilot among the AI apps that show MCP Apps, and ChatGPT shows them too.[^mcp-apps],[^openai-mcp-apps] So you build the screen once, to the standard. Three points matter before you sell one:

- **Build to the standard first.** OpenAI's Apps SDK adds features that work only in ChatGPT, through `window.openai`. A screen that depends on them works only there. OpenAI's own advice is to use the shared standard first and add its extras only where you need them.[^openai-mcp-apps]
- **Keep a text answer.** Each tool should still return useful text, so the product works in an AI app that cannot show screens.[^mcp-apps]
- **Keep payment off the screen.** Claude does not support purchases through interactive connectors from other companies.[^anthropic-interactive-connectors-help] On ChatGPT, the charging rules below apply. The screen shows what a customer has paid for, and payment stays on your website.

### On Claude

As of October 29, 2026, connectors work like this:

- For everyone, you can list your connector in Anthropic's connector directory, from any paid Claude plan. Anthropic checks it against its directory policy, which does not admit connectors that serve ads, or that move money without a person approving.[^anthropic-connector-directory],[^anthropic-directory-policy]
- A connector that is not listed can still be shared with an install link.[^anthropic-directory-vs-custom]
- On the free plan, a customer can use connectors from the directory and add one custom connector. Plugins need a paid plan.[^anthropic-connectors],[^anthropic-custom-connectors],[^anthropic-plugins]
- A connector can show its own screens inside the chat, as an MCP App, which Claude calls an interactive connector. It works for all users, on the web, in the desktop app and in the iOS and Android apps.[^anthropic-interactive-connectors],[^anthropic-interactive-connectors-help]

Artifacts that use Claude are shared like this:[^anthropic-share-artifacts]

- An Artifact that uses Claude or connected apps cannot be shared with "anyone with the link", on any plan.
- Inside a Team or Enterprise organization, you can share it with specific people or the whole organization, and on Enterprise with groups. Each person uses their own plan and their own connections.[^anthropic-artifacts]
- People outside the organization can be invited by email, a feature in beta, and can open it, but Claude and connectors do not work for them. On Team and Enterprise, an owner must first allow invitations outside the organization.
- On Pro, Max and Ultra, only people you invite by email can open it, as of October 31, 2026.[^anthropic-share-artifacts-plans] The help page says the parts that use Claude or connectors do not work for people invited from outside your organization, but not what that means on a personal plan. Test this before you sell to individuals this way.
- Legacy Artifacts, made in a chat before September 16, 2026, follow older rules.[^anthropic-artifacts]

So today, an Artifact that calls Claude works fully for customers inside an organization. A connector reaches individuals too, on every plan, and it can bring its own screens.

### On OpenAI

**Building it.** You build an app for ChatGPT with OpenAI's Apps SDK. The app is your MCP server plus, if you want one, an interface that ChatGPT shows inside the chat, such as interactive cards.[^openai-apps-sdk] ChatGPT shows that interface through the MCP Apps standard, so a screen built to the standard can also run in Claude.[^openai-mcp-apps] So on OpenAI, the conversation and the guided screens can live in one app. As on Claude, an app can also go in a plugin, which brings apps and skills together.[^openai-plugins]

**Signing in.** Your server signs users in with OAuth 2.1, following the MCP authorization standard. ChatGPT sends a token with every call, and your server checks it before running any tool. If the check fails, your server returns an error that makes ChatGPT ask the user to sign in again.[^openai-auth] This is where your check of who has paid belongs.

**Who pays.** Using an app may count toward the user's ChatGPT plan limits, and toward limits the app's maker sets.[^openai-connected-apps] As on Claude, any model your own server calls is billed to you.

**Reaching customers.** For one company, an admin or owner on a Business, Enterprise or Edu plan adds your server as a custom MCP server, tests it and publishes it to that workspace only.[^openai-custom-mcp] Admins also decide which apps their workspace may use. In Business, many apps are on by default, and new Enterprise and Edu workspaces start with a selected set turned on.[^openai-connected-apps]

For everyone, you submit a plugin to ChatGPT's directory as a verified individual or organization, with a demo account for the reviewers. Plugins that need an extra sign-up step during review are rejected.[^openai-plugin-guidelines]

**Charging is the biggest difference.** Inside ChatGPT, an app may sell only physical goods, with the checkout on your own website. It may not sell subscriptions, digital products, services or credits, show your plans or promote upgrades.[^openai-plugin-guidelines]

An app may let a user sign in to an account they already pay for, and use what that subscription includes. If a feature needs a higher plan, the app may say so and link to a page that describes your plans, but not to a checkout page. It may not offer a weaker version than your own service, or add a fee that applies only in ChatGPT.[^openai-plugin-guidelines]

So on OpenAI, customers subscribe on your website, outside ChatGPT, and the app only checks what they have paid for. This is the model on this page, with one difference: the app never sends anyone to a checkout for a subscription.

**Design for both.** When a signed-in user has not paid, return a short message and a link to your plans page, not to a checkout page. That one message works on both platforms.

### In open source

MCP is an open standard, so open-source agents can connect to the same server. If you also run an open model yourself, you pay for the AI.

Part VI gives the full rules for all three, each with the date it was checked.

[^mcp-extensions]: Understanding MCP Extensions, Model Context Protocol blog, 11 March 2026.
[^mcp-apps]: MCP Apps, Model Context Protocol, accessed 15 November 2026.
[^openai-mcp-apps]: MCP Apps compatibility in ChatGPT, OpenAI Developers, accessed 15 November 2026.
[^anthropic-interactive-connectors-help]: Use interactive connectors in Claude, Claude Help Center, accessed 15 November 2026.
[^anthropic-connector-auth]: Authentication for connectors, Claude.ai Documentation.
[^mcp-authorization]: Authorization, MCP specification 2026-07-28, Model Context Protocol.
[^anthropic-connector-directory]: Submit a connector to the directory, Claude.ai Documentation.
[^anthropic-directory-policy]: Anthropic Software Directory Policy, Claude Help Center.
[^anthropic-directory-vs-custom]: Directory connectors vs custom connectors, Claude.ai Documentation.
[^anthropic-connectors]: Use connectors to extend Claude's capabilities, Claude Help Center.
[^anthropic-custom-connectors]: Get started with custom connectors using remote MCP, Claude Help Center.
[^anthropic-plugins]: Use plugins in Claude, Claude Help Center.
[^anthropic-interactive-connectors]: Your favorite work tools are now interactive connectors inside Claude, Anthropic, 26 January 2026.
[^anthropic-share-artifacts]: Share artifacts, Claude Help Center, 23 September 2026.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Claude Help Center.
[^anthropic-share-artifacts-plans]: Share artifacts, Claude Help Center, accessed 31 October 2026.
[^openai-apps-sdk]: Building with the Apps SDK, OpenAI Help Center.
[^openai-plugins]: Plugins in ChatGPT, OpenAI Help Center.
[^openai-auth]: Authentication, OpenAI Developers.
[^openai-connected-apps]: Connected apps in ChatGPT, OpenAI Help Center.
[^openai-custom-mcp]: Connecting custom MCP servers in ChatGPT, OpenAI Help Center.
[^openai-plugin-guidelines]: Plugin guidelines, OpenAI Developers.
# Where the book teaches this (/from-skills-to-income/where-the-book-teaches-this)

---
type: Document
title: "Where the book teaches this"
description: "Which parts of the book teach each skill a product needs, and why selling through AI apps lowers the cost of a first customer."
status: stable
order: 4.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-15T11:19:42Z
chapter: "F4"
part: Front
expert_status: required
concepts: []
last_verified: 2026-10-29
generated:
  at: 2026-11-15T11:19:42Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:ae1923c7e983a279c557c27dbd7aeabd8376751e1ea8187d0fd134931fcc2e7c
dirty: true
ksor_version: 0.0.60
---

- **Claude and ChatGPT 2.0**, the first section, gets you working with AI Workers from your first day. Its four cases follow one accountant from her own work to work for clients.
- **Part I and Part II** teach what an AI Worker is and how to manage one. That is the expertise your customers and employers will pay for.
- **Part III** teaches the build: skills, plugins and connectors, the server behind them, MCP Apps (the connector's own screens, in Chapter 20) and hosted agents, on Anthropic, OpenAI and open-source platforms.
- **Part VI** teaches the business: choosing your vertical, pricing, getting paid, charging for access to your server, and publishing to the Claude and OpenAI directories.
- **Parts V and VII** take this to the scale of companies and countries, where the challenge becomes return on investment and the capacity to produce and export AI work.

## Why this matters

This model removes some of the costs that used to come before the first customer. You do not have to build and host a separate application for the interface, and where the customer's plan runs the AI, you receive no bill for its reasoning.

What remains is a modest server, your material, and the work of finding customers. That puts a product within reach of a training firm or a small consultancy anywhere in the world, and a country whose people can do this can export AI work, not only import it.

**Start with a problem someone will pay to solve. Show useful results on a small scale, and earn the customer's trust before you grow. Whichever route you take, that is how skills become income.**

[Part 0. How AI Works](../how-ai-works/overview.md) comes next.
