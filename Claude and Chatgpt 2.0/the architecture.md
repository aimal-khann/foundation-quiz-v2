# The Architecture (/claude-and-chatgpt-2/architecture/overview)

---
type: Document
title: "The Architecture"
description: "The technical edition of Claude and ChatGPT 2.0. It shows what was seen inside a real Claude session, what each vendor documents, why both chose the same design, and what a business must add. Optional reading."
status: stable
order: 0.4
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "The architecture", "Request flow", "Why the same design", "Sandbox and state", "Cloud environments", "Scheduled tasks", "Projects", "Where to run work", "Security boundaries", "Worked example", "ChatGPT and Codex", "AI Worker platforms", "Business worker", "What comes next" ]
last_verified: 2026-11-09
review_by: 2026-12-09
sources:
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026"
    resource: "appendix-reproducing-the-observations.md"
  - id: chatgpt-inspection
    title: "ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity"
    resource: "Reported to Panaversity by ChatGPT, November 9, 2026"
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product feature and its source"
    resource: "../tour/overview.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*How the new apps work behind the screen, with the evidence*

## Where this section fits

This is the fourth section of Claude and ChatGPT 2.0: the technical edition. It is optional. Read it for the evidence and the engineering, or come back when you build AI Workers for a business. The [first section](../new-way-of-working/overview.md) introduced AI Workers, the [borrowed desk](../new-way-of-working/where-the-work-happens.md) and Brightline's [Friday payment run](../new-way-of-working/one-job.md). [Tour of the Apps](../tour/overview.md) documented each feature. [Behind the Screen](../behind-the-screen/overview.md) explained the same ideas with one analogy: the model is a consultant, the harness is a project manager, and the sandbox is the borrowed desk.

This section adds the evidence: what was observed in a real Claude session, what each vendor documents, why both chose the same design, and what a business must add. It does not repeat the Tour's feature lists.

## What the architecture is

In the desktop app or on the web, a Claude session runs in the cloud by default. A **session** is one running conversation or task. A request travels this path: UI → Anthropic backend → harness → model on Anthropic's inference servers. The **UI** is the app or web page you type into. The **backend** is the servers behind the app. **Inference servers** run the model. This section calls the UI, the backend, the harness and the model its **four layers**.

The firsthand observations come from one cloud Claude session that the Panaversity team inspected on November 8 and 9, 2026. The [appendix](appendix-reproducing-the-observations.md) gives the method.[^author-inspection] ChatGPT also reported an inspection of its own code environment. It did not show ChatGPT's harness or inference.[^chatgpt-inspection] The rest of the OpenAI side rests on OpenAI's documentation.

- **[Vendor-documented]** Cloud sessions are the default. The agent loop and code execution run on Anthropic's servers. Each session gets its own sandbox, "created when the session starts and destroyed when it ends".[^cowork-architecture]
- **[Observed]** In the session examined, the harness was Claude Code. It ran inside a Firecracker microVM, a small virtual machine that starts very quickly. The session had been started from a claude.ai chat.
- **[Inferred]** The model does not run inside the sandbox. The sandbox is where the model's tool calls run and where its files are kept.
- **[Vendor-documented]** Each scheduled task run starts a new session. The exception is a run inside a project, which can continue an existing thread.[^cloud-scheduled-tasks],[^desktop-scheduled-tasks]
- **[Inferred]** No VM runs permanently for an account. None is documented, and none was observed.
- **[Inferred]** What changes from one **surface** (the web, the desktop app or a terminal) to another is where the harness runs: in a cloud sandbox, on your own device, or on a server you manage. In Claude's own apps, on Anthropic-hosted environments, the model runs on Anthropic's servers by default.

## How this section is organized

[Why both vendors chose the same design](why-both-vendors-chose-the-same-design.md) comes first. It explains the goals.

The first half shows how the runtime works, with Claude as the observed example: [request flow](how-a-request-flows.md), [the sandbox and its state](the-sandbox-and-its-state.md), [cloud environments](cloud-environments-and-self-hosted-runners.md), [scheduled tasks](scheduled-tasks.md), [projects](projects-coordination-on-top-of-sessions.md), [where to run work](choosing-where-to-run-work.md) and [security](security-boundaries.md). It ends with a [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md) and [ChatGPT and Codex](chatgpt-and-codex.md).

The second half shows how these runtimes become AI Workers: [are they AI Worker platforms?](are-claude-and-chatgpt-now-ai-worker-platforms.md), [from personal to business worker](from-personal-worker-to-business-worker.md) and [what comes next](what-comes-next.md). Three appendices hold the [reproduction steps](appendix-reproducing-the-observations.md), [business-layer details](appendix-business-layer-details.md) and [runtime details](appendix-runtime-details.md).

> [!NOTE]
> **Words used in this section**
>
> - **Model:** the stateless inference service that reads a context and returns text or a tool call. *Stateless* means it keeps nothing from one call to the next. *Inference* means running the model to produce an answer. *Context* is everything the model reads in one call.
> - **Harness:** the agent loop around the model. It builds the context, runs tools and tracks progress. Claude Code and Codex are harnesses. It can run inside the sandbox, as observed here, or apart from it.
> - **Sandbox:** the isolated place where tool calls run, the borrowed desk. It can be a cloud VM or container, or a limited space on your own computer.
> - **Virtual machine (VM):** a complete computer, simulated in software. A **container** is a lighter isolated space that shares the operating system of the computer it runs on.
> - **Session:** one running conversation or task, with its own sandbox and history.
> - **Runtime:** the harness plus the sandbox, as a product you run work on. For Claude, it is the Claude app, Claude Tag, Managed Agents or the Agent SDK (with the Agent SDK, you host both). For OpenAI, it is ChatGPT Work and Codex.
> - **Scheduled task:** a saved prompt that starts a new session on a schedule or when something happens (a trigger). Both vendors offer them.
> - **Worker principal:** the identity a worker acts under. It is separate from the people who sponsor or approve the worker.
> - **Business layer:** what an organization adds around the runtime: identity, durable records, enforced authority and audit.

> [!NOTE]
> **How to read the evidence labels**
>
> Each claim in this section carries a label in square brackets. The label says how we know it.
>
> - **Observed:** seen directly in the Claude session examined: command output, running programs, the environment and behavior.
> - **Reported by ChatGPT:** results that ChatGPT reported from commands it ran in its own tools, at our request. Nobody else has reviewed the raw output.
> - **Tool-documented:** stated in the descriptions of the tools available inside the session, but not seen in action.
> - **Vendor-documented:** stated in Anthropic's or OpenAI's public documentation, with the source in a footnote.
> - **Inferred:** our conclusion from the observations and documents. The vendor does not state it.
> - **Unknown:** not visible from inside a session, and not documented.
>
> Products change often, and features differ by plan. This section describes them as of November 9, 2026. If your app looks different, trust the vendor's help page. The architecture still holds.

[^author-inspection]: The observations come from one cloud Claude chat session on November 8 and 9, 2026, and may not hold for every plan, account or surface. The commands and their limits are in the appendix.
[^chatgpt-inspection]: At our request, ChatGPT ran commands in its own Python and terminal tools, in a separate ChatGPT conversation, and reported the results. The raw output was not independently reviewed.
[^cowork-architecture]: As verified on November 9, 2026. Claude Cowork architecture overview, Anthropic.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
[^desktop-scheduled-tasks]: Schedule recurring tasks in Claude Code Desktop, Anthropic.
# How a request flows (/claude-and-chatgpt-2/architecture/how-a-request-flows)

---
type: Document
title: "How a request flows"
description: "The path of one request in a cloud Claude session, from the app to the model. Also the evidence that the harness is Claude Code in a Firecracker microVM."
status: stable
order: 0.41
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Request flow" ]
last_verified: 2026-11-09
sources:
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: code-tab
    title: "Claude Desktop: Code tab docs (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop?facet1=pdf
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a process and environment inspection on November 9, 2026"
    resource: "appendix-reproducing-the-observations.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The path of one request

![How one request flows in a cloud Claude session. Two-way arrows link the browser or app, the Anthropic backend (sign-in, routing, chat history), the harness (Claude Code, inside the session cloud VM) and the stateless model. From the harness, tool calls go to the VM, Anthropic services, connected apps and your computer. Notes say the harness ran inside the VM in the session examined, and the two roles can also run apart.](img/how-one-request-flows.png)

**[Vendor-documented]** In cloud sessions, the agent loop and the code run on Anthropic's servers.[^cowork-architecture] **[Observed]** The harness is Claude Code. The sandbox is configured to send model requests to Anthropic's API endpoint, the web address that receives requests for the model. **[Inferred]** The backend sits between the UI and the harness. The harness calls the model at each step. It runs the tool calls it gets back, and it repeats this until the model gives a final reply.

Read the figure from left to right. Your message goes to the backend, then to the harness. The harness sends the context to the model. The model sends back text or a tool call. The harness runs a tool call in one of four places and returns the result. Of the four layers (UI, backend, harness and model), only the harness sat inside the VM in the session examined.

### Evidence: Claude Code runs in the VM

**[Observed]** On November 9, 2026, we inspected the session's running programs and environment. Its harness is Claude Code. This is one session. It shows the setup exists, not that every plan or surface uses it. The [appendix](appendix-reproducing-the-observations.md) gives the commands.[^author-inspection]

A few terms help with the table. A **process** is a running program. Each process has a number, its **PID** (process ID). PID 1 is the first program a computer starts. A **child process** is a program that another program started. An **environment variable** is a named setting that programs can read, such as `CLAUDE_CODE_REMOTE=true`.

| Evidence | What it shows |
| --- | --- |
| `/opt/claude-code/bin/claude` is a running process (PID 92) | The Claude Code program itself runs in the VM |
| Shell commands run as its child processes | That Claude Code process starts every Bash tool call |
| It was launched by `environment-manager task-run --session cse_… --session-mode resume` | A session manager starts it for each chat session and resumes it |
| `CLAUDE_CODE_REMOTE=true`, `CLAUDE_CODE_ENTRYPOINT=remote_cowork`, `CLAUDE_CODE_SESSION_ORIGIN=claude_ai_chat` | This is a remote Claude Code session, started from a claude.ai chat |
| `ANTHROPIC_BASE_URL=https://api.anthropic.com` | The environment is configured to send Anthropic API requests to this endpoint. This does not prove where inference physically runs |
| PID 1 is `/process_api --firecracker-init …` | The VM is a Firecracker microVM. Firecracker is the lightweight VM technology behind AWS Lambda |
| PID 1 had been up for about 19 minutes, which puts its start at about 02:26 UTC | Inferred: a new VM after the overnight gap. A paused and restored VM may not count paused time, so this is not proof. See [The sandbox and its state](the-sandbox-and-its-state.md#when-the-vm-is-paused-restored-or-replaced) |

**[Observed]** It is a specially configured Claude Code, not the plain CLI (the program you type into in a terminal). Environment variables set its feature flags, the switches that turn features on or off. They turn on artifacts, memory, background tasks and auto-compaction at 80%. Auto-compaction means the harness shortens the context by itself when it is 80% full.

**[Observed]** The running program reports version 2.1.319, and the `claude` command points to it. The variable `CLAUDE_CODE_VERSION=2.1.42` does not match. The reason is unknown.

### Chat or a task?

**[Observed]** The session was started from a claude.ai chat (`SESSION_ORIGIN=claude_ai_chat`). But its harness reports `ENTRYPOINT=remote_cowork`. **[Inferred]** This chat ran on the cloud runtime behind tasks in a conversation. Anthropic's documents call that runtime Cowork, which is why its Cowork architecture overview applies here. **[Unknown]** Whether every Claude chat runs this way. The desktop documentation still describes separate Chat, Cowork and Code tabs.[^code-tab] The Tour describes the [Code tab and its environments](../tour/claude-code-tab.md) in detail.

[^cowork-architecture]: As verified on November 9, 2026. Claude Cowork architecture overview, Anthropic.
[^author-inspection]: Panaversity's inspection of a cloud Claude session on November 9, 2026. The method is in the appendix.
[^code-tab]: Claude Desktop: Code tab docs, Anthropic.
# Why both vendors chose the same design (/claude-and-chatgpt-2/architecture/why-both-vendors-chose-the-same-design)

---
type: Document
title: "Why both vendors chose the same design"
description: "What each feature is for, and the seven constraints that led Anthropic and OpenAI to similar designs."
status: stable
order: 0.42
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Why the same design" ]
last_verified: 2026-11-09
sources:
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: codex-harness
    title: "Unlocking the Codex harness: how we built the App Server (OpenAI, February 2026, verified 2026-11-09)"
    resource: https://openai.com/index/unlocking-the-codex-harness/
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: agents-api
    title: "Agents API architecture (OpenAI, verified 2026-11-09)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/architecture
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: new-stack
    title: "OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026, verified 2026-11-09)"
    resource: https://thenewstack.io/openai-codex-work-atlas/
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The goals

These features let an AI agent do real work on a computer. They let it keep working after you close the tab. And they let it do this safely, while the model itself stays a stateless service.

Anthropic and OpenAI face similar constraints and made similar choices. Both put a harness in an isolated cloud sandbox around a stateless model, and store lasting state elsewhere. This is one design pattern, not the only one. Local and self-hosted agents arrange things differently.

### What each feature is for

| Feature or change | Goal | Basis |
| --- | --- | --- |
| A cloud sandbox for each session (a VM or a container) | Give the agent a real computer (a shell, files and code) without touching your machine or other users' work | Isolation for each session is vendor-documented.[^cowork-architecture] The goal is inferred |
| The harness runs in the cloud, not in your browser or app | Work continues when the tab closes or you switch devices | Vendor-documented. OpenAI says keeping state on the server "means work continues even if the tab disappears"[^codex-harness] |
| One harness behind every surface | The same agent behaves the same way on the web, desktop, mobile, the CLI and the IDE (the code editor) | Vendor-documented for Codex: "the same Codex harness" powers all experiences. For Claude, inferred: the session examined was a chat running on Claude Code, and the cloud docs list the same environments for every surface |
| Cloud scheduled tasks | Unattended work that recurs or starts on an event, and runs with your computer off | Vendor-documented. Tasks "keep working when your laptop is closed"[^cloud-scheduled-tasks] |
| The bridge to your computer, and Desktop tasks | Reach local files and apps only when a task needs them, inside folders you choose | Vendor-documented[^cowork-architecture],[^desktop-scheduled-tasks] |
| An egress proxy, and connector tokens kept outside the sandbox | Limit the damage if untrusted content steers the agent | Vendor-documented[^cowork-architecture] |
| The conversation is stored on the backend, and the sandbox can be thrown away | Resume from anywhere, and pause or reclaim machines cheaply | Inferred |

Two terms in the table are new. An **egress proxy** is a gatekeeper that all traffic leaving the sandbox must pass through. A **connector token** is the key that lets a connector sign in to one of your apps.

### Seven shared constraints, similar design choices

**[Inferred]** This is our reasoning from the documented features. Neither vendor states it.
![Seven shared constraints, each leading to a design response: a sandboxed computer, a harness loop, a server-side harness, one harness behind every app, reuse of Claude Code and Codex, disposable VMs with state outside, and keys outside with approvals required. Together they give the common pattern: UI, backend, a harness in an isolated sandbox, then a stateless model, with state and authority outside the sandbox.](img/seven-shared-constraints.png)

1. **Agents must act, not just answer.** Useful work means calling tools. An agent that only calls outside services may need no computer, as OpenAI's Agents API allows.[^agents-api] But code and files need a computer. Because the agent can be wrong or steered, that computer is isolated.
2. **The model is stateless, and its context is limited.** Something must build each call's context, run the tools, compact the context and track progress. That is the harness.
3. **Work outlives the screen.** A loop in a browser tab stops when the tab closes. Long, scheduled or cross-device work needs the harness on the server.
4. **The same agent should appear everywhere.** One harness behind every app is cheaper and more consistent than one harness for each app.
5. **Coding agents had shown that the pattern works.** Claude Code and Codex already combined a loop, tools and a sandbox. OpenAI documents that ChatGPT Work's cloud tasks use the Codex harness.[^work-cloud-security] In the Claude session examined, a chat ran on Claude Code. Press coverage reports the same direction.[^new-stack]
6. **Fresh machines are cheap and safe.** Light VMs start quickly, so a fresh one per session is affordable. Throwing them away limits leaks and frees capacity. So lasting state must live outside the machine.
7. **Safety has to sit outside the agent.** The agent can be wrong or manipulated. So both vendors keep credentials out of the sandbox, filter network traffic and require approvals. See [Security boundaries](security-boundaries.md).

The common pattern: UI → backend → harness in an isolated sandbox → stateless model. Lasting state and authority (the power to decide what is allowed) stay outside the sandbox. Claude and Codex are two versions of it.

[^cowork-architecture]: As verified on November 9, 2026. Claude Cowork architecture overview, Anthropic.
[^codex-harness]: As verified on November 9, 2026. Unlocking the Codex harness: how we built the App Server, OpenAI.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
[^agents-api]: Agents API architecture, OpenAI.
[^work-cloud-security]: As verified on November 9, 2026, OpenAI says "Work Cloud uses the Codex task-execution harness". ChatGPT Work cloud security, OpenAI.
[^new-stack]: OpenAI is folding Codex into the ChatGPT app, The New Stack.
[^desktop-scheduled-tasks]: As verified on November 9, 2026. Schedule recurring tasks in Claude Code Desktop, Anthropic.
# The sandbox and its state (/claude-and-chatgpt-2/architecture/the-sandbox-and-its-state)

---
type: Document
title: "The sandbox and its state"
description: "The cloud workspace each Claude session gets, a Python demo, where chat history lives, and when the VM is paused, restored or replaced. Also how a stateless model becomes a stateful session."
status: stable
order: 0.43
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Sandbox and state" ]
last_verified: 2026-11-09
sources:
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: code-tab
    title: "Claude Desktop: Code tab docs (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop?facet1=pdf
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026"
    resource: "appendix-reproducing-the-observations.md"
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The session cloud workspace

**[Vendor-documented]** Each cloud session runs in its own temporary sandbox, on computers that Anthropic manages. No state is shared between sessions or between organizations.[^cowork-architecture] **[Observed]** In the session examined, the sandbox was a Linux microVM with Python, Node, a shell and file tools. This is the borrowed desk from [Where the work happens](../new-way-of-working/where-the-work-happens.md).

| Aspect | How it works | Basis |
| --- | --- | --- |
| Scope | One sandbox for each session, not shared with other chats | Vendor-documented |
| Persistence | Files and installed packages last from one turn to the next within the session | Observed |
| Lifetime (end of session) | Destroyed when the session ends | Vendor-documented |
| Lifetime (idle time) | Paused and later restored, or reclaimed and replaced | Vendor-documented for Claude Code cloud sessions. Inferred for the chat examined here |
| Background work | A process the shell detaches (with `nohup` or `&`) usually stops a few minutes after a reply ends. The harness's own background jobs run until their time limit | Tool-documented (the session's environment notes) |
| Network | Outbound traffic goes through a proxy, to allowed places only (an allowlist). Web lookups use separate tools | Vendor-documented and observed |
| Your computer | Reached only through the Claude desktop app, and only in the folders you connect | Vendor-documented and observed |

**[Vendor-documented]** Availability depends on the product and plan. Cloud tasks in a conversation are available on Pro, Max and Ultra, in beta on Team, and on Enterprise once an owner turns them on.[^cowork-architecture] Claude Code cloud sessions are available on Pro, Max and Team plans, and for Enterprise users with premium seats or Chat + Claude Code seats.[^cloud-environments] The desktop app's Code tab also lets you choose Local, Cloud, SSH or WSL for each session.[^code-tab] The settings that shape a cloud sandbox are in [Cloud environments and self-hosted runners](cloud-environments-and-self-hosted-runners.md).

### Demo: a Python program in the VM

**[Observed]** On November 8, 2026, a script named `hello_vm.py` was created, saved and run inside the session workspace.[^author-inspection] It printed:

```
Hello from the session VM!
Python: 3.13.18
OS: Linux-6.18.44-fc-v310-x86_64-with-glibc2.39
Working dir: /home/claude
Time (UTC): 2026-11-08 04:34
Squares 1-10: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] sum = 385
```

**[Observed]** Between writing the file and running it, the session was interrupted and resumed. The run had not happened. The file came back as a read-only copy from the conversation. **[Inferred]** The workspace had been replaced, because a restored VM keeps its own files. So anything installed or running was lost. A second change on November 9 is weaker evidence, as explained below.

The lesson: treat the VM as scratch space, a place for temporary work. Keep anything that matters in a delivered file, an artifact, Drive or a repository.

### Where chat history lives

**[Vendor-documented]** Sessions and files are saved to the user's Claude account.[^cowork-architecture] **[Observed]** The harness held its own working copy of the conversation in the VM. **[Inferred]** The browser also holds only a copy. The saved record is the one on the account.

| Place | What it holds | Survives a replaced VM? |
| --- | --- | --- |
| Anthropic backend | The stored conversation, reachable from any device | Yes |
| Browser or app | A cached copy, kept for display | It reloads from the backend (inferred) |
| Harness in the VM | The working context for each model call, plus a transcript on disk | Not if the VM is replaced. It is rebuilt from the backend (inferred) |

The chat survived the replaced VM in the demo, because the backend copy counts. In local Claude Code, the transcript lives on your machine.

### When the VM is paused, restored or replaced

**[Vendor-documented]** The sandbox is destroyed when the session ends.[^cowork-architecture] For Claude Code cloud sessions, Anthropic also documents what happens to an idle VM. "After a few minutes without activity, a session's VM pauses with its files saved. Your next message restores the same VM and starts Claude Code again." But "if the paused VM has since been reclaimed, reopening the session provisions a fresh VM." Reclaiming also stops background work that was still running.[^cloud-environments],[^claude-code-cloud]

**[Observed]** In the session examined here, two things were seen. During the demo, the file came back only as a read-only copy from the conversation. On November 9, PID 1 had been running for about 19 minutes, after a long idle gap.

**[Inferred]** The demo fits a reclaimed VM and a fresh one, because a restored VM keeps its files. The uptime is weaker evidence. A restored VM may not count paused time as uptime. So a short uptime alone does not prove a new machine. **[Unknown]** Whether this chat session follows the documented Claude Code rules, and how long a paused VM is kept before it is reclaimed.

**[Inferred]** Pausing and reclaiming save computing power and keep each session clean.

| Survives a reclaimed VM | Lost when the VM is reclaimed |
| --- | --- |
| The chat itself | Installed packages |
| Files from the conversation (restored as copies) | Running servers and background jobs |
| Artifacts and docs | Environment variables and temporary files |
| Memory and connected apps | Anything not written back into the conversation |
| Anything saved to your computer, Drive or a repository | |

In practice, plan for a fresh VM after a break, even though a short break may only pause it. Scripts should check for what they need and install it. Save important output outside the VM. [Projects](projects-coordination-on-top-of-sessions.md) build this habit into the product.

### Stateful sessions on a stateless model

The model is stateless, but the session around it remembers. The harness makes the difference.

- **Stateless model.** The model keeps no memory between calls. For each call, the harness builds the context from instructions, the relevant history, tool results and the current state. When the context grows too large, the harness may compact it, summarize it, or fetch only what it needs. The session examined was configured to auto-compact at 80%. Prompt caching makes repeated context faster to process, but it is not memory.
- **Stateful session.** Between calls, the harness holds a transcript, the VM's files, packages and tool results.

| Layer | State it holds | Lifetime |
| --- | --- | --- |
| Anthropic backend | The conversation | Saved to the account (vendor-documented). How long it is kept is not covered here |
| Harness and VM | Working files, the environment, the transcript on disk | Until the VM is reclaimed or the session ends |
| Outside stores (memory, artifacts, Drive, repositories) | Whatever you save there | As long as you keep it |

![How long each layer keeps state. Each layer keeps state longer than the one above it. Relative lifetimes, not to scale, drawn as bars along an arrow labeled longer-lived. One model call: a tiny bar, nothing kept between calls. Harness and VM: a short bar, until the session ends or the VM is replaced. Backend conversation: a longer bar, saved to the account. Outside stores: the longest bar, highlighted, as long as you keep them. Design for this layer.](img/how-long-each-layer-keeps-state.png)

The model is a stateless function. The harness turns it into a stateful agent. With the API or the Agent SDK, your own code holds that state.

[^cowork-architecture]: As verified on November 9, 2026. Claude Cowork architecture overview, Anthropic.
[^code-tab]: Claude Desktop: Code tab docs, Anthropic.
[^author-inspection]: Panaversity's inspection of a cloud Claude session. The method is in the appendix.
[^cloud-environments]: As verified on November 9, 2026. The page quotes the idle pause and restore. Configure cloud environments, Anthropic.
[^claude-code-cloud]: As verified on November 9, 2026. "Cloud sessions stop after a period of inactivity and the session's VM is reclaimed." Use Claude Code in the cloud, Anthropic.
# Cloud environments and self-hosted runners (/claude-and-chatgpt-2/architecture/cloud-environments-and-self-hosted-runners)

---
type: Document
title: "Cloud environments and self-hosted runners"
description: "The settings layer of the cloud sandbox: network access, setup scripts, variables, network secrets and the GitHub proxy. Also how a self-hosted environment runs the same session in your network."
status: stable
order: 0.435
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:26Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Cloud environments" ]
last_verified: 2026-11-09
sources:
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
generated:
  at: 2026-11-13T05:47:26Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The sandbox has a settings layer

**[Vendor-documented]** Each Claude Code cloud session "runs in a cloud environment." An **environment** is a named set of sandbox settings: network access, environment variables, network secrets and a setup script. The same environments apply to the desktop app, the mobile app, claude.ai/code, `claude --cloud`, cloud scheduled tasks and Claude Tag. Project threads use the environment set in the project.[^cloud-environments],[^claude-projects]

**[Unknown]** The session examined here was started from a claude.ai chat. The environment page does not say whether chat sessions, or tasks in a conversation, use these settings.

The environment page also says what happens to an idle VM. [The sandbox and its state](the-sandbox-and-its-state.md#when-the-vm-is-paused-restored-or-replaced) quotes it and compares it with what was observed.

### Network access

**[Vendor-documented]** Each environment has one network access level for outbound connections.[^cloud-environments]

| Level | What sessions can reach |
| --- | --- |
| None | Nothing through the session's network |
| Limited (the default) | The default allowlist of package registries, GitHub and cloud SDKs while **Allow package managers** is checked, plus any domains you list |
| Full | Any domain |

On November 9, 2026, Anthropic's page listed two levels in place of Limited: Trusted and Custom. An environment saved as Trusted opens as Limited. One saved as Custom opens as Limited with its own list of allowed domains, or as Full if that list was a bare `*`.[^cloud-environments]

**[Vendor-documented]** Four paths skip the allowlist at every level:[^cloud-environments]

- GitHub, through its own proxy.
- The MCP connectors you turn on.
- The hosts listed on the environment's network secrets.
- The Anthropic API, for Claude Code's own requests.

### Setup scripts and the environment cache

**[Vendor-documented]** A **setup script** installs tools before Claude Code starts. If it finishes in about five minutes, Anthropic takes a **snapshot**. A snapshot is a saved copy of the disk. Later sessions start from it. It keeps files the script wrote, not programs that were running. It is rebuilt when you change the script or the allowed hosts, and after about seven days.[^cloud-environments]

**[Inferred]** So a new session still gets a new desk. But the desk starts from a known picture. Speed comes from the cache, not from a VM that stays on.

### Variables, network secrets and the GitHub proxy

**[Vendor-documented]** Environment variables are not private. "Anyone who uses the environment can read the values." For a key, use a **network secret**. Anthropic's agent proxy "adds the key to requests for the hosts you list, after each request leaves the session's VM, so the key itself stays outside the VM." The GitHub proxy works the same way. It "keeps your real GitHub credentials outside the session's VM."[^cloud-environments] Who may add a network secret depends on the plan. See [Appendix: runtime details](appendix-runtime-details.md#network-secrets).

**[Inferred]** A network secret protects the key, not its use. A tricked agent cannot copy the key out. But it can still send requests to the listed hosts, with the key attached. So use the narrowest key the job needs, such as a read-only key.

**[Vendor-documented]** On Team and Enterprise plans, an Owner can create environments shared with every member. Do not put secrets in a shared environment's variables, "because every member's sessions read them."[^cloud-environments]

### Self-hosted environments: the same session in your network

**[Vendor-documented]** A **self-hosted environment** "executes Claude Code cloud sessions on infrastructure your organization operates." People start sessions the same way. Only the place changes. A **runner** is a program on your own hosts. It claims each session from Anthropic's queue, clones the repository and runs Claude Code. "Anthropic never connects into your network." Every connection goes out. [Appendix: runtime details](appendix-runtime-details.md#how-a-runner-handles-a-session) shows how runners claim sessions.[^self-hosted]

| What stays on your machines | What still goes to Anthropic |
| --- | --- |
| Repository checkouts, build artifacts, secrets, and files the session creates or changes | The conversation: prompts, responses and tool results. Anthropic stores the transcript so you can resume elsewhere |
| Your runner image and its tools | The control plane, the Anthropic service that organizes sessions: the queue, orchestration and the claude.ai interface |

**Basis:** vendor-documented.[^self-hosted]

**[Vendor-documented]** Model requests go to the Anthropic API by default. A runner can send them to Amazon Bedrock or Google Cloud's Agent Platform instead. But "session content goes to Anthropic in both cases." Self-hosted environments are in public beta for Team and Enterprise. They are off by default. They are not available with Zero Data Retention or the HIPAA configuration. They have no network secrets, so your deployment provides the keys. Anthropic says most teams are better served by its hosted environments.[^self-hosted],[^cloud-environments]

**[Vendor-documented]** Each self-hosted session carries a signed token that your services can check. It proves which session and environment it belongs to. It shows whether a person or your organization's service identity started it. It does not prove which process presents it.[^self-hosted-identity] **[Inferred]** So it identifies a session, not a worker with narrow scopes. The [business layer](from-personal-worker-to-business-worker.md) still adds that. The token's fields are in [Appendix: runtime details](appendix-runtime-details.md#the-self-hosted-session-token).

### How it maps onto the four layers

| Layer | Anthropic-hosted | Self-hosted |
| --- | --- | --- |
| UI | claude.ai, the apps, `claude --cloud`, scheduled tasks, Claude Tag | The same |
| Backend | Anthropic: queue, orchestration, transcript | The same Anthropic control plane |
| Harness and sandbox | Claude Code in an Anthropic VM, shaped by the environment | Claude Code on your runner, from your image |
| Model | Anthropic API | Anthropic API, or Bedrock or Google Cloud's Agent Platform |

**Basis:** vendor-documented.[^self-hosted],[^cloud-environments]

![Two places a cloud session can run. Anthropic-hosted: Claude Code runs in a VM shaped by the environment. The agent proxy adds network secrets outside the VM, and the GitHub proxy swaps in your real token. Self-hosted: a runner in your network claims the session and runs Claude Code, which reaches internal services and your git host. Traffic to Anthropic is outbound only, and model requests can go to Bedrock or Agent Platform instead. A callout says environments change where a session runs and what it reaches, not what it may do.](img/two-places-a-cloud-session-can-run.png)

**[Inferred]** Environments and runners change what the sandbox can reach and where it runs. They do not decide whether an action is allowed. A self-hosted runner can even widen the reach. See [Security boundaries](security-boundaries.md).

> **Rule to remember:** The environment decides where the session runs and what it can reach. Keep keys outside the sandbox and narrow. Keep approval in the service that acts.

[^cloud-environments]: As verified on November 9, 2026. The network access levels were checked again on November 13, 2026, after the page changed. Configure cloud environments, Anthropic.
[^self-hosted]: As verified on November 9, 2026. Self-hosted environments were in public beta on Team and Enterprise plans and off by default. Self-hosted environments, Anthropic.
[^self-hosted-identity]: As verified on November 9, 2026. Verify session identity in self-hosted environments, Anthropic.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
# Scheduled tasks (/claude-and-chatgpt-2/architecture/scheduled-tasks)

---
type: Document
title: "Scheduled tasks"
description: "Where each kind of Claude scheduled task runs, why every run starts fresh, what state a run can reach, and how to write prompts for unattended runs."
status: stable
order: 0.44
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Scheduled tasks" ]
last_verified: 2026-11-09
sources:
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### Every run is a new session

**[Vendor-documented]** Every scheduled task run starts a new session. It does not continue the chat that created it. Where that session runs depends on the kind of task.[^desktop-scheduled-tasks],[^cloud-scheduled-tasks] The Tour shows [how to set up scheduled tasks](../tour/claude-code-tab.md). This page explains how they fit the architecture.

|  | Cloud task | Desktop (local) task | `/loop` |
| --- | --- | --- | --- |
| Runs on | The cloud that Anthropic manages, or the organization's own self-hosted environment | Your machine | Your machine, inside an open session |
| Machine must be on | No | Yes, with the desktop app open | Yes |
| Each run | A new cloud session. It is a full Claude Code session when the task has a repository, or a GitHub or API trigger | A fresh local session | Repeats within the same session |
| Workspace | Repositories cloned fresh on each run. The result of the environment setup script is cached | Your local folder as it is, or an isolated Git worktree (a separate working copy) | The session's own |
| Triggers | A schedule, an API call or a GitHub event | A schedule, or Run now | An interval |
| Permissions | Auto mode by default | A permission mode for each task | Inherits from the session |
| Minimum interval | 1 hour | 1 hour in the form. 1 minute when Claude sets it | 1 minute |

**How this connects to the VM.** **[Vendor-documented]** Cloud tasks with a repository, or a GitHub or API trigger, run "as full Claude Code cloud sessions", with "a new one for each run."[^cloud-scheduled-tasks] The same dialog creates scheduled tasks for claude.ai chat, whose runtime is not documented separately. **[Inferred]** So each cloud run gets Claude Code in its own short-lived sandbox. A Desktop task has no cloud sandbox. Its harness runs on your machine.

**[Vendor-documented]** There is one exception to "a new session". A scheduled task created inside a project "runs as threads in that project". Those threads start with the project's instructions and, in the cloud, its memory. The cloud scheduled tasks page adds that a run in a project can continue an existing thread. See [Projects and coordination](projects-coordination-on-top-of-sessions.md).[^claude-projects]

### Five kinds of state

Keep five kinds of state apart:

| Kind of state | Available to a scheduled run? |
| --- | --- |
| The conversation history of the chat that created the task, or of earlier runs | No |
| Runtime continuity: files, packages and processes from a previous VM | No |
| External state: memory, saved files, artifacts, Drive, repositories, connected apps | Yes, if the run reads it |
| The task itself: its prompt, trigger, connectors and permissions | Stored with the task |
| Project instructions and memory, for a task inside a project | Yes. Its runs are threads in that project |

![Each run starts fresh, and only external state carries over. A scheduled task (a standalone prompt, a trigger and permissions) starts runs 1, 2 and 3. Each is a fresh session with nothing from the chat or the last run. Each reads and writes external state: memory, saved files, artifacts, Drive, repositories and connected apps. Notes cover cloud tasks, Desktop tasks and the project exception.](img/scheduled-task-runs.png)

The runs do not share a sandbox or a history. Anything a later run needs must be written to external state.

### Writing tasks that run without you

- **Write a standalone prompt.** Anthropic says the prompt "must be self-contained and explicit about what to do and what success looks like."
- **The trigger is not approval.** A fired prompt "can't act as approval or consent for actions during the run." Content fetched during the run is still treated as untrusted.
- **Approvals differ by kind of task.** A Desktop task in Manual mode waits for your answer. A cloud run starts in auto mode, where a classifier (a separate model) allows or blocks each action. Ask rules and repeated blocks still stop the run. In Desktop tasks, MCP tools marked `requiresUserInteraction` ask on every call. That setting is documented for Desktop tasks only.
- **Timing.** A Desktop task is skipped while the computer sleeps. It then runs once to catch up, for the latest missed time, within seven days. So prompts should guard against running late. Cloud tasks are in research preview, limited to 100 scheduled runs per hour per account.
- **Actions appear as you.** Commits, messages and tickets made through your connectors carry your identity.
- **Lighter options.** `/loop` repeats a prompt inside an open session. A one-off reminder can also be delivered back into the same conversation (tool-documented).

[^desktop-scheduled-tasks]: As verified on November 9, 2026. The page covers local tasks, cloud tasks and `/loop`, missed runs, permissions and `requiresUserInteraction`. Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 9, 2026. The page covers cloud runs as full Claude Code cloud sessions, fresh copies of repositories, auto mode and limits. Automate work with scheduled tasks, Anthropic.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
# Projects: coordination on top of sessions (/claude-and-chatgpt-2/architecture/projects-coordination-on-top-of-sessions)

---
type: Document
title: "Projects: coordination on top of sessions"
description: "What rebuilt Claude projects are for, how the coordinator and threads map onto the four layers, where project state lives, and why a project is still a personal tool."
status: stable
order: 0.445
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:53Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Projects" ]
last_verified: 2026-11-09
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic blog, September 17, 2026, verified 2026-11-09)"
    resource: https://claude.com/blog/projects-redesigned
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: cross-session
    title: "Message your other Claude Code sessions (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cross-session-messaging
  - id: run-agents-in-parallel
    title: "Run agents in parallel (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/agents
generated:
  at: 2026-11-13T06:25:53Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### What a project adds

A rebuilt Claude **project** adds a layer on top of single sessions. **[Vendor-documented]** "A project is one ongoing conversation where Claude coordinates a stream of related work for you." You say what needs doing. It starts a **thread** for each task.[^claude-projects]

A project does not change the architecture. It uses it. Each thread is a Claude Code session in its own sandbox. The project adds a **coordinator** that starts and tracks those sessions. It also adds **standing context** that every new session starts from. The Tour shows [how to use a project](../tour/claude-code-tab.md).

### Goals: why projects were rebuilt

**[Vendor-documented]** Anthropic names the problem: "Managing multiple sessions across a build used to require you to divide the work."[^projects-redesigned] The rebuilt project has four goals:

1. **Move the coordination from you to Claude.** You "brief Claude in the project the way you'd brief a chief of staff."[^projects-redesigned]
2. **Set context once.** Every new thread starts with the project's instructions. Every thread "draws from a shared memory."[^projects-redesigned]
3. **Keep the coordinator sharp.** It "sees what threads report back, not every step they take."[^claude-projects]
4. **Let work outlast one session.** Cloud threads keep going after you close your laptop.[^claude-projects]

### How it maps onto the four layers

| Layer | In a project | Evidence |
| --- | --- | --- |
| UI | The project conversation, thread cards and the **Overview** pane. They are at claude.ai/code, in the desktop Code tab and in the mobile app. We also started the new projects from chat in November 2026. Anthropic's page still calls chat projects "the earlier Projects experience" | **[Vendor-documented]**, chat **[Observed]** |
| Coordinator | "One long-running session where Claude acts as coordinator." It has its own model and effort setting. It has no connectors | **[Vendor-documented]** Where it runs is **[Unknown]** |
| Threads | Each cloud thread is "a Claude Code cloud session working on its own branch and copy of the repo." It runs in the project's cloud environment | **[Vendor-documented]** The same kind of microVM is **[Inferred]** |
| Model | Threads run in the cloud or on your machine, "with Anthropic as the model provider in both cases". Projects are not offered through Amazon Bedrock, Google Cloud's Agent Platform or Microsoft Foundry | **[Vendor-documented]** |

Sources: the Projects page and the launch post.[^claude-projects],[^projects-redesigned]

**[Vendor-documented]** A cloud thread loads each repository's `CLAUDE.md`. It also loads the skills, connectors and plugins on your account and project. It does not load a repository's own skills, `.mcp.json` or `.claude/settings.json`. Changes "reach new threads, not threads already running."[^claude-projects]

### Where project state lives

**[Vendor-documented]** A project keeps three kinds of standing context. You set each one once.[^claude-projects]

| Context | What it holds | Who reads it |
| --- | --- | --- |
| Project memory | Notes Claude keeps, stored as files with a `MEMORY.md` index | Every cloud thread, at start |
| Project instructions | Up to 16,000 characters of standing rules | Each new thread and the coordinator |
| Repositories, files and environment | Cloned repositories, files under `/mnt/project-files`, the cloud environment | Every cloud thread |

The **Library** tab holds the files you added and the files threads produced.

**[Vendor-documented]** The sandbox is still short-lived. "A cloud thread's sandbox pauses between turns and resumes when the thread continues." If it cannot resume, the thread starts "from a fresh clone, so uncommitted changes can be lost." Anthropic's advice is to "commit and push work in progress."[^claude-projects]

**[Inferred]** This is the rule from [The sandbox and its state](the-sandbox-and-its-state.md), built into the product.

![Projects: coordination on top of sessions. You send work to the project conversation, the coordinator, a long-running session with no connectors, which reports to the Overview pane. The coordinator starts three cloud threads, each a Claude Code cloud session with its own sandbox and branch, and a dashed fourth thread on your computer through Remote Control, only while it is awake. Every thread reads and writes the standing context outside every sandbox: instructions, memory, Library files and pushed branches. A local thread gets instructions, not memory.](img/projects-coordination-on-top-of-sessions.png)

### Threads on your computer

**[Vendor-documented]** Some tasks need something only your computer has, such as a local database. Claude can run that thread on your machine through Remote Control. It uses that machine's files, tools, hooks and permission rules. It starts with the instructions "but not with its memory files loaded." It "runs only while that computer is awake."[^claude-projects]

### Scheduled work inside a project

**[Vendor-documented]** Scheduled work in a project "runs as threads in that project." So each run starts with the project's instructions and memory.[^claude-projects],[^cloud-scheduled-tasks] A thread that stops at your plan's usage limit "waits and by default continues on its own when the limit resets."[^claude-projects] On November 9, 2026, the same page still said that a thread started by a scheduled task did not wait. [Scheduled tasks](scheduled-tasks.md) covers standalone tasks.

### Authority in a project

**[Vendor-documented]** Threads run in auto mode when the model supports it. An approval prompt waits "inside that thread." Telling the coordinator to go ahead does not reach it. A rule such as "run at most two threads at a time" is saved to memory, but it is "not enforced settings." The enforced limits are your plan's limits and "200 new threads per day across your projects."[^claude-projects] **[Inferred]** Words in a project do not grant or limit authority. See [Security boundaries](security-boundaries.md).

### Sessions that message each other

**[Vendor-documented]** Claude Code has **cross-session messaging** for sessions you run yourself. One session can send another a plain-text message, such as a finding. It is "never the sender's conversation history or files." Messages between sessions on one machine stay on that machine. Messages to your cloud sessions or other machines go through Anthropic's servers. Claude finds those sessions only while the sending session is connected to Remote Control. Without that connection, the receiver cannot reply.[^cross-session],[^run-agents-in-parallel]

**[Vendor-documented]** A message is information, not your voice. "It can't approve anything." "It can't change configuration." Commands in it never run. Permission prompts still fire in the receiving session. The `crossSessionInbound` setting can accept, hold or refuse messages. `isolatePeerMachines` makes Claude ask before a message leaves the machine.[^cross-session]

The [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md#running-it-as-a-project) shows Brightline's payment run inside a project.

### Why a project is still a personal tool

**[Vendor-documented]** "A project belongs to one user. You can't share a project or its threads with another user." There are "no organization-level controls for projects during the beta."[^claude-projects] Projects are on Pro, Max and Ultra plans. Anthropic says updated projects for Team and Enterprise "come after" the current rollout.[^projects-redesigned] For several people giving work to Claude together, Anthropic points to [Claude Tag](from-personal-worker-to-business-worker.md#claude-tag-a-team-worker-with-its-own-accounts).[^claude-projects]

**[Inferred]** So a project coordinates one person's AI Worker well. It is not the business layer from [From personal to business worker](from-personal-worker-to-business-worker.md). It has no worker identity, no business record you control and no enforced approval outside the thread.

**[Unknown]** ChatGPT projects hold files and context for Chat and Work, per the Tour. A documented coordinator with parallel threads was not found.

> **Rule to remember:** A project coordinates sessions. It does not replace them. Each thread is a full session in a short-lived sandbox. Lasting state goes to memory, the Library or a pushed branch. Authority still lives in the service that acts.

[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic. The plan list and the usage-limit rule were checked again on November 13, 2026, after the page changed. Projects are in public beta on Pro, Max and Ultra plans and rolling out gradually.
[^projects-redesigned]: Projects redesigned: from folder to conversation, Anthropic, September 17, 2026.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
[^cross-session]: As verified on November 9, 2026. Message your other Claude Code sessions, Anthropic.
[^run-agents-in-parallel]: As verified on November 9, 2026. Run agents in parallel, Anthropic.
# Choosing where to run work (/claude-and-chatgpt-2/architecture/choosing-where-to-run-work)

---
type: Document
title: "Choosing where to run work"
description: "Which way of running Claude fits which job, what machine each one uses, what survives, and five habits that always apply."
status: stable
order: 0.45
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:53Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Where to run work" ]
last_verified: 2026-11-09
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: claude-tag-security
    title: "Security and data handling, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
generated:
  at: 2026-11-13T06:25:53Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### Match the job to the runtime

Each way of running Claude decides two things: what kind of machine the work runs on, and what survives afterward.

| If you need | Use | Where it runs | What survives |
| --- | --- | --- | --- |
| Research, code or files, now, working back and forth with Claude | A Claude chat (a cloud session in the chat examined, not confirmed for every chat) | A cloud sandbox for the session. In the session examined, a Firecracker microVM | The conversation and saved files. The VM's state lasts until the VM is reclaimed or the session ends |
| Work on files on your own computer | A chat linked to your computer, or Claude Code on your machine | A cloud sandbox plus a bridge to the folders you connect. Or your own machine | Your files |
| Recurring work while your computer is off | A cloud scheduled task | A new cloud session for each run, with a fresh copy of the repository and a cached setup script | Only external state |
| A stream of related tasks that outlasts one session | A Claude project (beta, Pro, Max and Ultra) | Each task in its own thread, usually a new cloud session with its own sandbox. A coordinator session routes the work | Project memory, instructions, the Library and pushed branches. Uncommitted sandbox changes can be lost |
| Recurring work on local files | A Desktop scheduled task | Your machine, while the app is open and the computer is awake | Your local folder |
| Repeating a check during a session | `/loop` | Inside the open session | The session's state |
| Cloud sessions that must reach internal systems, or keep code on your own machines | A self-hosted environment (beta, Team and Enterprise) | Your runners, inside your network. Anthropic still runs the control plane and receives the conversation | Checkouts, artifacts and files on your hosts. Anthropic stores the transcript |
| Team work handed to Claude in Slack | Claude Tag (beta, Team and Enterprise) | A sandbox for each Slack thread, in an organization-level environment | The thread, pushed branches and posted results. Files only in the sandbox are lost when the thread goes quiet |
| A bot, service or database that runs 24 hours a day, 7 days a week | Your own server or a managed service. Claude Code can work on it over SSH | That server | The data that is stored durably, according to the service's design for storage and backups |

The last row follows from the [overview](overview.md): no VM stays on for you. Work that never stops needs a service you or a provider runs.

For the project row, see [Projects: coordination on top of sessions](projects-coordination-on-top-of-sessions.md).[^claude-projects] For the self-hosted row, see [Cloud environments and self-hosted runners](cloud-environments-and-self-hosted-runners.md).[^self-hosted] For the Claude Tag row, see [Claude Tag](from-personal-worker-to-business-worker.md#claude-tag-a-team-worker-with-its-own-accounts).[^claude-tag-security]

### Five habits, whichever you choose

1. **Save anything that matters outside the VM:** in an artifact, a repository, Drive or a connected app.
2. **Expect a fresh VM after an idle gap.** Have your scripts install what they need. For cloud scheduled tasks, put the installs in the environment's setup script, whose result is cached.
3. **Write scheduled prompts as complete, standalone instructions.** The page on [scheduled tasks](scheduled-tasks.md) explains why.
4. **Keep long-lived secrets out of the sandbox.** Reach services through connectors, or use a narrow [network secret](cloud-environments-and-self-hosted-runners.md#variables-network-secrets-and-the-github-proxy). A key that can do something serious, such as paying, belongs in a connector with its own check.
5. **Enforce approval for consequential actions in the service that performs them.** Consequential actions are ones with real effects, such as payments, sends and deletes. An approval prompt in Claude is an extra layer. It is not the safeguard.

The fifth habit is the same rule as in [What stays your responsibility](../new-way-of-working/what-stays-your-responsibility.md): permissions over words. The [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md) shows it in a real design.

[^claude-projects]: As verified on November 9, 2026. The plan list was checked again on November 13, 2026, after the page added Ultra. Let Claude coordinate ongoing work with Projects, Anthropic.
[^self-hosted]: As verified on November 9, 2026. Self-hosted environments, Anthropic.
[^claude-tag-security]: As verified on November 9, 2026. Security and data handling, Claude Tag docs, Anthropic.
# Security boundaries (/claude-and-chatgpt-2/architecture/security-boundaries)

---
type: Document
title: "Security boundaries"
description: "Why a sandbox contains damage but does not decide what an agent may do. Also the controls around each session, and the risks isolation does not remove."
status: stable
order: 0.46
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Security boundaries" ]
last_verified: 2026-11-09
sources:
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### Containment is not authority

The sandbox contains the computing work, but it does not decide what the agent may do. A VM is a **containment boundary**: it limits where an action can run and what it can reach. It is not an **authority boundary**, which decides whether an action is allowed. Authority comes from permissions, connector scopes and approvals. A connector's **scope** is the list of things it is allowed to do.

![An action needs authority, not just containment, to take effect. Untrusted content can carry injected instructions into the model's tool call. The call passes containment (the VM, the egress proxy, no connector tokens), which limits reach but grants no permission. Then authority (permissions, scopes, approvals) decides. Allowed calls cause an effect. Others stop or ask a person.](img/containment-is-not-authority.png)

Injected text can shape the model's tool call. **Prompt injection** means instructions hidden in content the agent reads. The sandbox limits where that tool call runs. But only the authority check decides whether it takes effect.

The same split applies inside a project. Instructions you give a project coordinator are saved but not enforced, and each thread asks for approval only inside itself. See [Authority in a project](projects-coordination-on-top-of-sessions.md#authority-in-a-project).

### The controls around a session

| Control | What it does | Basis |
| --- | --- | --- |
| One sandbox for each session | Created when the session starts and destroyed when it ends. No state is shared across sessions or organizations | Vendor-documented[^cowork-architecture] |
| Egress proxy | All outbound traffic goes through a proxy that the sandbox cannot bypass. Only destinations on the allowlist are reachable. Private or internal addresses are not | Vendor-documented.[^cowork-architecture] The proxy and the allowlist were observed |
| Credentials | Connector authorization tokens never enter the sandbox. It holds only short-lived tokens limited to the session | Vendor-documented.[^cowork-architecture] A token limited to the session was observed in the environment |
| Your computer | Reached only through the desktop app, and only in the folders you connect. Deleting is off until you allow it | The folder limit is vendor-documented.[^cowork-architecture] The deletion default is tool-documented |
| Network secrets | An API key the agent proxy adds after a request leaves the VM. The key stays outside. It still works for the listed hosts, in every session in that environment | Vendor-documented[^cloud-environments] |
| GitHub proxy | Keeps your real GitHub credentials outside the VM. Rejects branch deletions and pushes of anything other than a branch, such as a tag. Serves API requests only for the repositories attached to the session | Vendor-documented[^cloud-environments] |
| Approvals | Desktop tasks have a permission mode for each task. Cloud runs use auto mode, where ask rules still stop the run. In Desktop tasks, MCP tools marked `requiresUserInteraction` ask on every call. A trigger's prompt never counts as approval | Vendor-documented (the scheduled tasks documentation)[^desktop-scheduled-tasks],[^cloud-scheduled-tasks] |

The Tour describes the same controls from the user's side, in [Where the work actually runs](../tour/claude-code-tab.md).

### Risks that isolation alone does not remove

- **Prompt injection.** Web pages, files, emails and tool results can contain instructions. The agent can act on them, within whatever permissions it has. Treat that content as data, not as instructions. Require approval for payments, sends and deletes.
- **Secrets in the workspace.** Any code in the sandbox can read its files and environment variables. Do not paste long-lived keys into a session. Use connectors or a [network secret](cloud-environments-and-self-hosted-runners.md#variables-network-secrets-and-the-github-proxy), which stay outside the VM.[^cloud-environments]
- **Local access widens the reach.** Linking a computer extends the agent into the folders you connect. Grant the smallest set of folders the task needs.
- **Isolation is not perfect.** Sandboxes reduce the impact of an attack, but they do not rule out escape bugs, flaws that let code break out of the sandbox. So design as if a session could be compromised. Use **least privilege** (give only the access a job needs), short-lived tokens and audit logs, which record who did what.

[^cowork-architecture]: As verified on November 9, 2026. The overview covers the sandbox for each session, the egress proxy, credentials and plan availability. Claude Cowork architecture overview, Anthropic.
[^desktop-scheduled-tasks]: Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
[^cloud-environments]: As verified on November 9, 2026. Configure cloud environments, Anthropic.
# Worked example: Brightline's payment run as a business AI Worker (/claude-and-chatgpt-2/architecture/worked-example-brightlines-payment-run-as-a-business-ai-worker)

---
type: Document
title: "Worked example: Brightline's payment run as a business AI Worker"
description: "Brightline's Friday payment run, designed as a weekly business AI Worker. A temporary sandbox works with a database and a payment connector that enforce approval and pay each invoice once."
status: stable
order: 0.47
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Worked example" ]
last_verified: 2026-11-09
sources:
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The job, one step further

This example extends Brightline Wholesale Supply's Friday payment run from [One job, start to finish](../new-way-of-working/one-job.md). There, the AI Worker only suggests and the payment officer pays. This design keeps that rule for a weekly job. It is an illustration built from Claude features, with the nearest OpenAI equivalent. It is not a vendor reference architecture.

The weekly **reconciliation run** checks the invoices and proposes payments. It never makes them. It has no access to the payment tool. A separate **payment caller** makes each payment. That is the payment officer, or a payment worker whose narrow scope only reads approvals and calls the payment tool. The safety comes from a database and a payment connector that you control. It does not come from the sandbox or from prompts.

| Role in the design | Claude | Nearest OpenAI equivalent |
| --- | --- | --- |
| Trigger | A weekly cloud scheduled task | A ChatGPT scheduled task (Work) |
| Invoice policy and matching rules | A skill (a `SKILL.md` file) that the run loads each time | A skill in Codex |
| Agent loop and model | The Claude Code harness with a Claude model | The Codex harness with an OpenAI model |
| Where the work runs | A fresh cloud sandbox for each run | A cloud sandbox backed by a VM, which Work may reuse across tasks |
| Authoritative state: invoice status, approvals, payment intents | A database behind your MCP connector, with transactions and unique constraints | The same, behind an MCP server |
| Review interface | A Claude Sheets artifact that displays the database rows. It is not the system of record, and approval is not recorded there | A review view in a connected app |
| Invoices and payments | The accounting system, reached through the same connector | The same |
| Approval | Recorded in the database from a separate approval page, by a named person. The connector refuses any payment without a valid approval record | The same. Codex's approval policy can add a prompt |
| Payment caller | The payment officer, or a separate payment worker with only the payment scope. Never the reconciliation run | The same |

Some terms: **authoritative state** is the one copy of the facts that counts, kept in a **system of record**. A **transaction** is a group of changes that succeed or fail together. A **unique constraint** stops the same value from being stored twice. A **payment intent** records one approved payment waiting to be made.

![The weekly payment run, by design. A skill gives rules to the reconciliation run, which never pays. The run writes status and proposals to the run database through the connector, with the propose scope only. The database feeds the review artifact, which only displays rows. A named person approves on a separate approval page, which records the approval in the database. A separate payment caller calls the payment connector. The connector checks the approval while claiming the intent, then posts to the accounting system, which pays once per intent.](img/weekly-payment-run-by-design.png)

The sandbox can vanish without losing progress, because the status lives in the database. No payment moves without an approval the connector checks.

### What the design must answer

1. **The VM disappears while invoice 9 of 15 is in progress.** Each invoice's status is written to the database, through the connector, as soon as the invoice is processed. It is never held only in the sandbox. So invoices 1 to 8 are safe. Losing the VM loses only the unfinished work on invoice 9.
2. **How the next run knows where to resume.** It asks the database for the invoices not yet reconciled, and it starts at invoice 9. It never relies on VM files, the review artifact or the chat history.
3. **Who authorizes a payment.** A named person approves on a separate approval page (see the [business-layer appendix](appendix-business-layer-details.md)). The artifact only displays rows. The approval page writes the approval to the database.
   - **What the approval covers.** It is bound to the exact payee, the payee's bank account, the amount, the currency and the invoice version, for example with a hash of those fields. A changed bank account is the main fraud path, so a change voids the approval. The approval also expires after a set time.
   - **Who may do what.** The approver must not be the person who set the worker's access. The approver must also not be the payment caller for the same intent (separation of duties).
   - **The check.** Before every payment, the connector checks for a valid, unexpired approval record. If there is none, it rejects the call, whatever the agent or its prompts do. A prompt from `requiresUserInteraction` is a second layer, not the safeguard. See [Scheduled tasks](scheduled-tasks.md) for where that setting is documented.
4. **How duplicate payments are prevented.** Each approved invoice gets one stable payment-intent ID under a unique constraint.
   - The connector reads the approval and claims the intent **atomically**, in one database transaction. A second claim fails. Nothing can change between the check and the claim.
   - Each intent moves through clear states: claimed, submitted, then confirmed or failed.
   - A claim has a lease, a time limit. An expired lease reopens only a *claimed* intent. A *submitted* intent is never retried until the accounting system has been checked for that payment.
   - The connector passes the intent ID as an **idempotency key** if the API accepts one. That label makes a repeated request take effect only once.
   - A duplicate invoice under a different number is a matching problem. The reconciliation run flags it.
5. **What the artifact is for.** The Sheets artifact is a view for reviewers. It lacks what payments need: atomic writes, concurrency control and recovery. So it never holds the authoritative state.

The same rule runs through the whole design: the sandbox does the work, the database keeps the record, and the connector decides what is allowed.

**Where the keys live.** **[Inferred]**
- Do not store the payment key as a [network secret](cloud-environments-and-self-hosted-runners.md) on the run's environment. Any session there could call the payment API with it and skip the approval check. Keep the payment key in the MCP connector.[^cloud-environments]
- Give the reconciliation run its own connector token with only the `record_status` and `propose_payment` scopes. "The same connector" must never mean the same scopes. Only the payment caller's token can call `execute_payment`.
- In the Claude app, a scheduled task uses its owner's connectors, and its actions "appear as you".[^cloud-scheduled-tasks] So the task must belong to a dedicated worker account that signs in the connector, never to the person who approves payments.

### Running it as a project

**[Inferred]** The same run can live in a [Claude project](projects-coordination-on-top-of-sessions.md). The weekly task becomes a scheduled task inside the project. So each run is a thread that starts with the project's instructions and memory. Say the owner prefers a different layout for the exception list. Claude saves that preference to project memory, and later threads start with it. A change to the payment policy itself goes into the skill as a new, reviewed version, never into memory, because memory is not enforced. The business layer does not change. The database holds the status. The connector checks the approval and pays each intent once.

[^cloud-environments]: As verified on November 9, 2026. Configure cloud environments, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 9, 2026. The page says anything a scheduled task does through your connectors "appears as you". Automate work with scheduled tasks, Anthropic.
# ChatGPT and Codex (/claude-and-chatgpt-2/architecture/chatgpt-and-codex)

---
type: Document
title: "ChatGPT and Codex"
description: "How ChatGPT, Work and Codex compare with Claude. It covers the Codex harness, a side-by-side table, and what a reported ChatGPT inspection did and did not show."
status: stable
order: 0.48
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "ChatGPT and Codex" ]
last_verified: 2026-11-09
sources:
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: codex-harness
    title: "Unlocking the Codex harness: how we built the App Server (OpenAI, February 2026, verified 2026-11-09)"
    resource: https://openai.com/index/unlocking-the-codex-harness/
  - id: chatgpt-agent
    title: "Introducing ChatGPT agent (OpenAI, July 2025, verified 2026-11-09)"
    resource: https://openai.com/index/introducing-chatgpt-agent/
  - id: openai-sandboxing
    title: "ChatGPT sandbox docs (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: agents-api
    title: "Agents API architecture (OpenAI, verified 2026-11-09)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/architecture
  - id: chatgpt-inspection
    title: "ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity"
    resource: "Reported to Panaversity by ChatGPT, November 9, 2026"
  - id: openai-tasks
    title: "Scheduled tasks (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/automations
  - id: whats-new
    title: "ChatGPT: What's new (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/whats-new
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### What is known, and how well

- **[Vendor-documented]** OpenAI documents the Codex harness and its App Server. Codex Web runs that harness inside a container it provides for the task.[^codex-harness]
- **[Vendor-documented]** ChatGPT Work's cloud tasks use the same harness. "Work Cloud uses the Codex task-execution harness." Work and Codex "share core execution and isolation mechanisms".[^work-cloud-security] But their tools, permissions and controls "aren't identical".
- **[Unknown]** Whether regular ChatGPT chat runs on the Codex harness.

Chat, Work and Codex remain separate experiences, even where their infrastructure overlaps. The Tour describes the user's side of [where ChatGPT's work runs](../tour/chatgpt.md).

### ChatGPT's four tiers

| Tier | Where the harness runs | Compute environment | Persistence | Basis |
| --- | --- | --- | --- | --- |
| Regular ChatGPT chat | Not published | A Python sandbox (Code Interpreter), called as a tool | Not published | Not published |
| ChatGPT agent[^chatgpt-agent] | Not published | "Its own virtual computer": browsers, a terminal and API access | Keeps context for the task. It can be paused and resumed | Vendor-documented |
| Codex (in the ChatGPT app) | The Codex harness: a cloud container for cloud tasks, or your machine for local ones | Workspace, shell, files, MCP and skills | Threads are stored on the server | Vendor-documented[^codex-harness],[^openai-sandboxing] |
| ChatGPT Work | The Codex task-execution harness, for cloud tasks | Cloud or local Work tasks | Cloud Work conversations sync across devices. Local ones stay on your computer | Vendor-documented[^work-cloud-security],[^whats-new] |

### How the Codex harness is built

OpenAI's write-up describes a setup close to the Claude Code one in this section.[^codex-harness]

- **The harness** is "the agent loop and logic that underlies all Codex experiences." Codex core runs the loop, saves each **thread** (one conversation) and runs tools in a sandbox.
- **App Server** wraps the core in a long-running process with a two-way JSON-RPC API. It can pause a turn to ask your app for approval.
- **Cloud (Codex Web).** "A worker provisions a container with the checked-out workspace, launches the App Server binary inside it." "Keeping state and progress on the server means work continues even if the tab disappears." Whether Work uses exactly this container path is not published.[^work-cloud-security]
- **Local (desktop app and IDEs).** The App Server runs on your machine. Commands run in an operating-system sandbox: Seatbelt on macOS, bubblewrap on Linux and WSL2, and the native sandbox on Windows.[^openai-sandboxing]

### Side by side

| Dimension | Claude (cloud session) | ChatGPT: Codex, with Work where documented |
| --- | --- | --- |
| Product experience | One conversation for chat and tasks, plus a Code tab, in one app. The chat examined ran on the cloud runtime behind those tasks (observed) | Chat, Work and Codex as separate experiences in one app |
| Agent loop (harness) | Claude Code (observed) | Codex core in the App Server (documented for Codex and Work's cloud tasks) |
| Where the computing runs | A sandbox for each session (documented)[^cowork-architecture]. A Firecracker microVM (observed) | A container for each task (documented for Codex Web). Work's cloud tasks use VM-backed sandboxes that can be reused or replaced (documented)[^work-cloud-security] |
| Local option | Tasks in a conversation: local sessions only for tasks started on the device before October 6, 2026, on Pro, Max and Ultra (documented)[^cowork-architecture]. Code tab and CLI: Local, SSH and WSL, with Claude Code on your machine (documented) | Desktop app, CLI and IDE, with an operating-system sandbox (documented) |
| Regular chat on the harness? | Yes, in the session examined (observed) | Unknown |
| Conversation persistence | Saved to the account (documented) | Thread history on the server (documented for Codex) |
| Scheduled tasks | A fresh session for each run. Cloud runs start in auto mode. Desktop runs happen on your machine (documented)[^cloud-scheduled-tasks],[^desktop-scheduled-tasks] | Run in the cloud, and can start on Gmail, Slack or GitHub events (documented)[^openai-tasks] |
| Use of your computer | Through the desktop app, connected folders only (documented)[^cowork-architecture] | Work's cloud tasks use an "online, connected computer". Work Cloud cannot reach it while it is offline (documented)[^work-cloud-security] |

![Claude and Codex: same four layers, different evidence. Left, the Claude cloud session examined: the Claude app (documented), the Anthropic backend saving sessions and files (documented), the harness Claude Code in a Firecracker microVM in the session examined (observed), and the Claude model (inferred). Right, a Codex cloud task: the ChatGPT app (documented), the Codex backend storing thread history (documented), the harness Codex App Server in a container a worker provides (documented), and the OpenAI model (inferred). Notes say Work's cloud tasks use the Codex harness, and the figure compares layers, not behavior.](img/claude-and-codex-same-layers.png)

Both stacks have the same shape: an app, a backend, a harness in a cloud sandbox, and the model. The difference is the evidence. For Claude, the harness was observed. For Codex, OpenAI documents it.

### A reported inspection of a ChatGPT execution environment

**Source and limits.** On November 9, 2026, at our request, ChatGPT ran commands in its own Python and terminal tools, in a separate conversation. It reported the results. Nobody independently reviewed the raw output. So its findings carry the label Reported by ChatGPT.[^chatgpt-inspection]

- **[Reported by ChatGPT]** The environment ran Linux x86_64 (kernel 6.18.57) with Python 3.13.5. PID 1 was `supervisord`, a program that starts and watches other programs. The root file system was an overlay with paths that referred to Kata Containers, a container technology.
- **[Reported by ChatGPT]** A file written from the Python tool under `/mnt/data` could be read from a later terminal call. So working files carry over between tool calls. That does not show they survive a new conversation or a reset.
- **[Reported by ChatGPT]** No Codex App Server process, and no model-serving process, was visible in its process namespace.
- **[Unknown]** Where ChatGPT's conversation harness and its inference run, and when its environments are created and destroyed. A missing Codex process here does not show that Codex parts are unused elsewhere.

| Question | Claude (session examined) | ChatGPT (inspection reported) |
| --- | --- | --- |
| Harness process visible? | Yes: Claude Code | No |
| Evidence of a VM or container | Firecracker microVM (PID 1 is `/process_api --firecracker-init`) | Overlay file system with Kata Containers paths. `supervisord` as PID 1 |
| Files survive a replaced VM? | Restored as copies from the conversation (observed) | Not tested |

So the comparison still rests partly on documentation. **[Vendor-documented]** OpenAI's Agents API also treats the hosted harness and the execution environment as separate parts. An agent that only calls outside services "may not need its own compute or files".[^agents-api]

The lesson holds for both vendors. Four jobs are separate: model inference, the agent loop, running tools, and keeping durable state. Platforms can place them behind different boundaries.

[^codex-harness]: As verified on November 9, 2026. Unlocking the Codex harness: how we built the App Server, OpenAI.
[^chatgpt-agent]: Introducing ChatGPT agent, OpenAI.
[^openai-sandboxing]: ChatGPT sandbox docs, OpenAI.
[^chatgpt-inspection]: ChatGPT's inspection of its own Python and terminal environment, as reported to Panaversity. The raw output was not independently reviewed.
[^work-cloud-security]: As verified on November 9, 2026. The page says "Work Cloud uses the Codex task-execution harness", that Work and Codex "share core execution and isolation mechanisms", and that Work Cloud "manages its own execution environment". ChatGPT Work cloud security, OpenAI.
[^agents-api]: As verified on November 9, 2026. The page describes the hosted harness, the environment and the application server as separate parts. Agents API architecture, OpenAI.
[^cowork-architecture]: As verified on November 9, 2026. Claude Cowork architecture overview, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 9, 2026. Automate work with scheduled tasks, Anthropic.
[^desktop-scheduled-tasks]: As verified on November 9, 2026. Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^openai-tasks]: As verified on November 9, 2026. Scheduled tasks, OpenAI.
[^whats-new]: As verified on November 9, 2026. ChatGPT: What's new, OpenAI.
# Are Claude and ChatGPT now AI Worker platforms? (/claude-and-chatgpt-2/architecture/are-claude-and-chatgpt-now-ai-worker-platforms)

---
type: Document
title: "Are Claude and ChatGPT now AI Worker platforms?"
description: "What an AI Worker needs from a runtime, what Claude and ChatGPT provide, two corrections to the platform claim, and what a business must add."
status: stable
order: 0.49
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "AI Worker platforms" ]
last_verified: 2026-11-09
sources:
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: new-stack
    title: "OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026, verified 2026-11-09)"
    resource: https://thenewstack.io/openai-codex-work-atlas/
  - id: whats-new
    title: "ChatGPT: What's new (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/whats-new
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: openai-tasks
    title: "Scheduled tasks (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/automations
  - id: claude-skills
    title: "Skills, Claude Code documentation (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/skills
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: claude-mcp
    title: "MCP, Claude Code documentation (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/mcp
  - id: claude-permission-modes
    title: "Permission modes, Claude Code documentation (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/permission-modes
  - id: openai-build-skills
    title: "Build skills (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/build-skills
  - id: openai-personalize
    title: "Personalize ChatGPT and Codex (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/codex/personalize
  - id: openai-agents-md
    title: "AGENTS.md (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/codex/agent-configuration/agents-md
  - id: openai-get-started-work
    title: "Get started with ChatGPT Work (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/get-started-with-work
  - id: openai-plugins
    title: "Plugins (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/plugins
  - id: openai-mcp
    title: "MCP (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/extend/mcp?surface=cli
  - id: openai-permission-modes
    title: "Permission modes (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/permission-modes
  - id: openai-sandboxing
    title: "Sandboxing (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/sandboxing
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The short answer

Mostly yes, with two corrections. Both products now provide the runtime an AI Worker needs: a computer, a harness, tools, schedules and approvals. But the platform is a cloud service, not the desktop app. And as shipped, it is a personal worker platform. A trusted business worker still needs identity, durable records and enforced authority around it. **[Inferred]** The verdict is ours. The facts behind it carry their own labels.

### What an AI Worker needs, and what each product provides

An AI Worker is a defined role, not just an agent that repeats a job. The runtime supplies part of that role. The organization supplies the rest: identity, authority, evaluation and the durable record. The runtime's part comes down to seven ingredients:

| Ingredient | Why a worker needs it | Claude | ChatGPT | Basis |
| --- | --- | --- | --- | --- |
| A role | The job, its rules and what success looks like | Skills, project instructions, a standalone scheduled prompt | Skills, custom instructions and `AGENTS.md` | Vendor-documented[^claude-skills],[^claude-projects],[^cloud-scheduled-tasks],[^openai-build-skills],[^openai-personalize],[^openai-agents-md] |
| A computer | To run code, read files and produce outputs | A fresh cloud sandbox for each session or run | Cloud sandboxes backed by VMs, which Work may reuse across tasks | Vendor-documented.[^cowork-architecture],[^work-cloud-security] Observed for Claude |
| Tools | To act in the systems where the work lives | Connectors and MCP servers | Apps, plugins and MCP servers | Vendor-documented[^claude-mcp],[^cloud-scheduled-tasks],[^openai-get-started-work],[^openai-plugins],[^openai-mcp] |
| Work without a person present | The job runs on time, or when something happens | Cloud scheduled tasks with schedule, API and GitHub triggers | Scheduled tasks, including Gmail, Slack and GitHub events | Vendor-documented[^cloud-scheduled-tasks],[^openai-tasks] |
| Continuity | Work survives a reclaimed VM or a switch of device | The conversation and files saved to the account, plus project memory for work in a project | Cloud Work synced across web, mobile and desktop | Vendor-documented for ChatGPT[^whats-new] |
| Controls | The worker cannot do everything it might try | Permission modes, auto mode, the egress proxy ([Security boundaries](security-boundaries.md)) | Approval policy and sandbox modes | Vendor-documented[^claude-permission-modes],[^openai-permission-modes],[^openai-sandboxing] |
| A loop that ties it together | It plans, calls tools, checks results and repeats | The Claude Code harness | The Codex harness | Observed for Claude. Documented for Codex |

### Correction 1: it is a cloud platform, not a desktop one

The worker runs in Anthropic's or OpenAI's cloud. The harness, the sandbox and the scheduled runs mostly live there. Desktop tasks and local Codex are the exception. Cloud scheduled tasks "keep working when your laptop is closed".[^cloud-scheduled-tasks] The New Stack reports that Work brings "Codex's agentic capabilities across web, mobile, and desktop".[^new-stack]

The desktop app is a window onto the worker, and the bridge to your local files. This sharpens the [first section](../new-way-of-working/overview.md)'s example: the app is the window, and the platform runs in the cloud.

### Correction 2: it is personal more than organizational

On Claude, cloud scheduled tasks "belong to your individual claude.ai account". They are "not shared with teammates". And anything they do through connectors "appears as you".[^cloud-scheduled-tasks] In effect, the worker is you, working while you are away. Claude Tag is the exception, covered in [From personal worker to business worker](from-personal-worker-to-business-worker.md#claude-tag-a-team-worker-with-its-own-accounts).

OpenAI has started to go further. Its Team Tasks "run scheduled or event-triggered work through a team's service account and approved connections".[^whats-new] A **service account** is an account that belongs to a team or a program, not to one person.

A business worker needs more than either app provides by itself:

| What an organization needs | Why | What the apps provide today | What you add |
| --- | --- | --- | --- |
| Its own identity | Actions must be traceable to the worker, not to whichever employee set it up | Claude runs as the user in the app. Claude Tag channels use their own service accounts. ChatGPT has a team service account for Team Tasks | A service identity with its own credentials, limited in scope |
| A durable business record | Status, decisions and evidence must outlive sessions, and you must be able to search them | Conversation history and artifacts, which are not transactional records | A database or business system behind your connectors |
| Enforced authority | Approvals must hold even if the agent is wrong or manipulated | Prompts and approval modes inside the app | Checks in the service that performs the action |
| Audit and operations | Owners need logs, reliability and control of costs | Run history. Cloud task limits are listed in [Scheduled tasks](scheduled-tasks.md) | Logging, monitoring, budgets and fallback procedures |

![The apps supply the runtime, and a business adds the layer around it. A dashed box, the business layer you add, surrounds the runtime from Claude or ChatGPT. The runtime holds the role, a sandboxed computer, tools, the harness loop, scheduled runs, continuity and approvals. Around it sit four business-layer boxes: enforced authority, own identity, a durable record, and audit and operations.](img/the-runtime-and-the-business-layer.png)

### The verdict, and what it means in practice

Claude and ChatGPT now provide the runtime for AI Workers. A person can assign a recurring job that runs in a sandbox, with tools and approvals, while they are away. For personal and team work, this is an AI Worker platform today.

For a business worker trusted with money, customers or records, treat these products as the engine, not the whole vehicle. Wrap them in identity, durable state and enforced authority, as the [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md) does.

[^cloud-scheduled-tasks]: As verified on November 9, 2026. Automate work with scheduled tasks, Anthropic.
[^new-stack]: OpenAI is folding Codex into the ChatGPT app, The New Stack.
[^whats-new]: As verified on November 9, 2026. ChatGPT: What's new, OpenAI.
[^cowork-architecture]: As verified on November 9, 2026. Claude Cowork architecture overview, Anthropic.
[^work-cloud-security]: As verified on November 9, 2026. ChatGPT Work cloud security, OpenAI.
[^openai-tasks]: As verified on November 9, 2026. Scheduled tasks, OpenAI.
[^claude-skills]: As verified on November 9, 2026. Skills, Claude Code documentation, Anthropic.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
[^claude-mcp]: As verified on November 9, 2026. MCP, Claude Code documentation, Anthropic.
[^claude-permission-modes]: As verified on November 9, 2026. Permission modes, Claude Code documentation, Anthropic.
[^openai-build-skills]: As verified on November 9, 2026. Build skills, OpenAI.
[^openai-personalize]: As verified on November 9, 2026. Personalize ChatGPT and Codex, OpenAI.
[^openai-agents-md]: As verified on November 9, 2026. AGENTS.md, OpenAI.
[^openai-get-started-work]: As verified on November 9, 2026. Get started with ChatGPT Work, OpenAI.
[^openai-plugins]: As verified on November 9, 2026. Plugins, OpenAI.
[^openai-mcp]: As verified on November 9, 2026. MCP, OpenAI.
[^openai-permission-modes]: As verified on November 9, 2026. Permission modes, OpenAI.
[^openai-sandboxing]: As verified on November 9, 2026. Sandboxing, OpenAI.
    # From personal worker to business worker (/claude-and-chatgpt-2/architecture/from-personal-worker-to-business-worker)

---
type: Document
title: "From personal worker to business worker"
description: "How to keep Claude as the engine and build a business layer around it. It covers the MCP server, Better Auth, Postgres on Neon, Claude Tag and the four runtime options."
status: stable
order: 0.491
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "Business worker" ]
last_verified: 2026-11-09
sources:
  - id: neon-better-auth
    title: "Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2, 2026, verified 2026-11-09)"
    resource: https://neon.com/blog/managed-better-auth-oauth-provider-mcp
  - id: better-auth-mcp
    title: "Better Auth MCP plugin (Better Auth, verified 2026-11-09)"
    resource: https://better-auth.com/docs/plugins/mcp
  - id: managed-agents
    title: "Claude Managed Agents overview (Anthropic, verified 2026-11-09)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: claude-tag-overview
    title: "Work with Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/overview
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: claude-tag-security
    title: "Security and data handling, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### Keep the engine, build the layer

Keep Claude as the engine. Build a business layer around it. When the stakes rise, move the runtime from the consumer app to the API.

Here the business layer is an MCP server you own, secured by Better Auth, with records in Postgres on Neon. **MCP** is the open standard connectors use. **Better Auth** is a sign-in system. **Neon** hosts **Postgres** databases. This is one reference design, not a definition.

The runtime can be the Claude app, Claude Tag, Claude Managed Agents or the Claude Agent SDK. **[Inferred]** MCP keeps the business layer largely portable across them. Your rules, records and enforcement stay the same. Credentials, connection settings and approval requests need work for each runtime.

![Four runtimes, one business layer. The Claude app (acts as you), Claude Tag (its own service accounts), Claude Managed Agents (hosted, in beta) and the Claude Agent SDK (self-hosted) all reach your MCP server. The server uses Better Auth for worker identity, checks approvals and allows one payment per intent. Below it sit Postgres on Neon, an approval page and business systems. A band says Code tab and Claude Tag sessions can run on self-hosted runners, though Claude Tag cannot use admin connectors there.](img/four-runtimes-one-business-layer.png)

**[Inferred]** A [project](projects-coordination-on-top-of-sessions.md) strengthens one person's worker, but it is personal in scope.[^claude-projects]

### The business layer: what to build

Better Auth on Neon handles sign-in and gives each worker its own keys. Postgres holds the records. Your MCP server enforces the rules. Token details are in [Appendix: business-layer details](appendix-business-layer-details.md).

| Requirement | What to build | Basis |
| --- | --- | --- |
| Own identity | A dedicated account or OAuth client (a registered app identity that can be given keys) for each worker, with narrow scopes. For example, it may propose payments but may not approve them | The OAuth tooling is vendor-documented.[^neon-better-auth],[^better-auth-mcp] One client per worker is the inferred design |
| Durable state | Tables for work items, approvals, payment intents and an audit log, using transactions and unique constraints | Vendor-documented. The design is inferred |
| Enforced authority | MCP tools that check the approval record and the token's scopes before acting. No caller gets raw SQL (direct database commands). The reconciliation worker gets only tools such as `record_status` and `propose_payment`. `execute_payment` belongs to a separate caller: the payment officer, or a payment worker with only that scope | The design is inferred |
| Human approval | A small approval page where a named person signs in and approves. The decision is written to Postgres. The review artifact only displays rows | The design is inferred |
| Audit and operations | Every tool call is logged with who, what, when, the result and the approval ID. Monitoring and cost budgets for each worker | The event history is vendor-documented[^managed-agents] |

The [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md) explains transactions, payment intents and their states.

### Identity: who is acting, and on whose behalf

**[Inferred]** The system must tell four parties apart and record all of them on every action. A **tenant** is the organization a record belongs to.

| Party | What it is | Rule the server enforces |
| --- | --- | --- |
| Worker principal | The worker's own OAuth client or account, limited to the tools its role needs | It can propose actions. It can never approve its own proposals |
| Human approver | A named person who signs in through Better Auth | Approvals carry that person's identity. They are bound to one exact payment and expire, as in the [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md). The worker can never act as the approver. The approver is never the payment caller for the same intent |
| Human sponsor | The person or team accountable for the worker | Owns the worker's scopes and handles problems. The sponsor should not also approve its payments (separation of duties) |
| Organization (tenant) | The business the worker acts for | Every record and token carries the tenant, so a worker cannot reach another tenant's data |

Every audit entry names the worker, the tenant, the approver and the approval ID. So you can always answer: who did what, under whose authority? Key handling is in the [appendix](appendix-business-layer-details.md#worker-identity-in-detail).

### The runtime: four options

| Runtime | What Anthropic runs | Identity and control | Use when |
| --- | --- | --- | --- |
| Claude app (conversations, tasks and scheduled tasks) | Everything: the harness, the sandbox and the schedules | Runs as you. See the limits in [Scheduled tasks](scheduled-tasks.md) | Personal and team workers, and prototypes |
| Claude Tag (Slack, Team and Enterprise) | The harness and a sandbox for each Slack thread, in organization-level environments | Its own service accounts, set up by an Owner. Not a person. See below | Team workers that several people steer in a channel |
| Claude Managed Agents (API) | A hosted harness and cloud sandbox, or a sandbox you host. You define an agent (model, prompt, tools, MCP servers, skills) and start sessions from your backend | Your organization's API account. Sessions keep their state and their event history on the server. Scheduled execution is a listed use. In beta, with the compliance limits listed in the [appendix](appendix-business-layer-details.md#runtime-limits) | Production workers you do not want to host |
| Claude Agent SDK | Only the model. You run the harness | Fully yours: hosting, logging and compliance | Full control or strict compliance |

**Basis:** vendor-documented.[^managed-agents],[^cloud-scheduled-tasks]

### Claude Tag: a team worker with its own accounts

**[Vendor-documented]** Claude Tag is Anthropic's answer to a worker that does not appear as you. It puts Claude in your team's Slack channels, in public beta on Team and Enterprise plans. Anyone in a channel can hand it work. There, "Claude acts with its own service accounts, rather than as a specific user." Actions appear in each tool's audit log under those accounts. Credentials stay outside the sandbox, "so the model and the sandbox are not given the key." It is not available with Zero Data Retention, customer-managed encryption or the HIPAA configuration.[^claude-tag-overview],[^claude-tag-identity],[^claude-tag-security] In a self-hosted environment, Claude Tag cannot use the connectors an admin adds.[^claude-tag-security]

**[Vendor-documented]** One warning matters for money. A connector's credential "is shared by everyone in the channels where it applies," so anyone in those channels can ask Claude to act with it.[^claude-tag-security] **[Inferred]** So Claude Tag covers the "own identity" row and part of "audit". Its pages do not describe a business record or an approval check before a payment. For Brightline, the connector still checks the approval, whoever asked in Slack.

### Two paths

1. **Personal and team workers.** Stay in the Claude app, connected to your MCP server. You get real records and enforced approvals at once. One limit: a claude.ai connector is signed in by a person, so the worker has its own identity only if a dedicated worker account signs it in. For team work in Slack, [Claude Tag](#claude-tag-a-team-worker-with-its-own-accounts) acts under its own service accounts.
2. **Business workers that handle money, customers or records.** Move the runtime to Managed Agents, or to the Agent SDK for full control. Your backend starts sessions under a service identity and keeps its own logs. The MCP server, the database and the approval page carry over. The [appendix](appendix-business-layer-details.md#what-is-built-in-and-what-you-write) lists what each part gives you and what you write.

Build the business layer first. It holds everything that must be trustworthy: identity, records, approvals and audit. Then changing the runtime is an integration task. Codex also supports MCP servers, so the same layer can serve OpenAI workers too.

[^neon-better-auth]: As verified on November 9, 2026. Managed Better Auth is now an OAuth provider, with MCP support, Neon.
[^better-auth-mcp]: Better Auth MCP plugin, Better Auth.
[^managed-agents]: As verified on November 9, 2026. The overview covers the hosted harness and sandbox, sessions, events and beta status. Claude Managed Agents overview, Anthropic.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
[^claude-tag-overview]: As verified on November 9, 2026. Claude Tag was in public beta. Work with Claude Tag, Anthropic.
[^claude-tag-identity]: As verified on November 9, 2026. How agent identity works, Claude Tag docs, Anthropic.
[^claude-tag-security]: As verified on November 9, 2026. Security and data handling, Claude Tag docs, Anthropic.
# What comes next (/claude-and-chatgpt-2/architecture/what-comes-next)

---
type: Document
title: "What comes next"
description: "Predictions, not announcements. What could be built on today's features, sorted into three evidence levels, and the one rule that does not change."
status: stable
order: 0.4915
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: [ "What comes next" ]
last_verified: 2026-11-09
sources:
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic, September 17, 2026)"
    resource: https://claude.com/blog/projects-redesigned
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: cross-session
    title: "Message your other Claude Code sessions (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cross-session-messaging
  - id: run-agents-in-parallel
    title: "Run agents in parallel (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/agents
  - id: a2a-linux-foundation
    title: "Linux Foundation launches the Agent2Agent Protocol Project (Linux Foundation, June 23, 2025)"
    resource: https://linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents
  - id: managed-agents
    title: "Claude Managed Agents overview (Anthropic, verified 2026-11-09)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*Predictions built on what exists today, sorted by how strong the evidence is*

### Why this page is different

Other pages describe what exists now. This page holds **predictions, not announcements**. No vendor has promised these features. They are our view of where today's tools lead. The agent now has a disposable computer of its own, run from a server. So a session can be timed, started, moved, sent notes, checked and paid for, like a server job. Most of what follows comes from that.

> [!NOTE]
> **Three evidence levels used on this page**
>
> - **Signaled:** a vendor's own pages point this way.
> - **Assembling:** the pieces exist, but no vendor has said it will join them.
> - **Speculative:** a reasonable direction with little direct evidence.
>
> Quoted facts are still **[Vendor-documented]**. Each prediction carries its own level.

### Signaled: the documents already point here

**1. Projects for teams.** **[Signaled]** Today "a project belongs to one user."[^claude-projects] Anthropic's launch post says projects for "Team and Enterprise plans come after that."[^projects-redesigned] The guess is shared projects with roles. One person sets the brief. Others add work. A manager approves.

**2. Workers that wake on business events.** **[Signaled]** Cloud scheduled tasks "run in the cloud on a schedule, on API calls, or on GitHub events."[^cloud-scheduled-tasks] The Tour records that ChatGPT's scheduled tasks can start on [Gmail, Slack, GitHub and plugin events](../tour/side-by-side.md). The guess is built-in triggers from many more business systems. A new invoice in Brightline's inbox could start a run.

**3. Workers with their own identity.** **[Signaled]** In Slack channels, Claude Tag "acts with its own service accounts, rather than as a specific user."[^claude-tag-identity] A self-hosted session carries a signed token. It says whether a person or "your organization's service identity" created it.[^self-hosted-identity] The guess is a worker inside the company's identity system, with its own login, roles and access that can be cut off.

### Assembling: the pieces exist and need joining up

**4. Approval and policy as a platform service.** **[Assembling]** Today an approval is a prompt inside one thread. A limit typed to a coordinator is "not enforced settings."[^claude-projects] The guess is one approval queue across all your workers. A second person signs anything over an amount. Each worker has a spending limit. The business record and its rules stay with the company. Brightline's payment connector still checks again.

**5. Worker templates you can share and hire.** **[Assembling]** A setup, plugins, instructions and a schedule now describe a role.[^cloud-environments],[^claude-projects] The guess is packaged roles, such as an "accounts payable worker". They would be shared the way plugins are shared today.

**6. Testing workers like software.** **[Assembling]** Setup snapshots give repeatable starting points. Anthropic "stores the session transcript."[^cloud-environments],[^self-hosted] The guess is replaying a run against a changed brief, and staging a worker before it goes live. Brightline could test a new brief on last Friday's invoices first.

**7. Desks that work old software.** **[Assembling]** The Tour documents a [ChatGPT cloud browser](../tour/chatgpt.md). It also documents computer use in [Claude](../tour/claude-conversations.md) and ChatGPT. The guess is screen control on the cloud desk. A worker could then use old portals that have no API.

### Speculative: further out

**8. Workers inside your own network and country.** **[Speculative]** Session content itself may come to stay inside the company or the country. For banks and public bodies, that may decide whether AI Workers can be used at all. Today's facts point part of the way. **[Vendor-documented]** Self-hosted runs cloud sessions on your own machines. But "session content goes to Anthropic in both cases."[^self-hosted] Claude Managed Agents lists "Sandboxes on infrastructure you control for compliance or data-residency requirements."[^managed-agents]

**9. Workers that talk across companies.** **[Speculative]** Your own sessions can message each other now. A message "can't approve anything."[^cross-session] Add verified identity across companies, and a buyer's worker could agree a delivery date with a supplier's worker.

**10. Paying for outcomes, not seats.** **[Speculative]** A project now reports "token use by thread and by model."[^claude-projects] Pricing per finished job, such as per reconciled invoice, becomes possible.

**11. The phone as the manager's desk.** **[Speculative]** You can now steer project threads "from your phone."[^claude-projects] The human job may become a stream of choices: say yes, change course, or help a stuck worker.

### Putting it together: one larger prediction

**12. Independent AI Workers in the cloud, measured as Digital FTEs, that talk to each other.** Its four parts stand on different evidence:

- **Deployed in the cloud.** **[Vendor-documented]** Cloud threads "keep going after you close your laptop."[^claude-projects] Self-hosted runners run the same sessions on a company's machines.[^self-hosted] **[Speculative]** The worker will likely stay a series of short sessions. Its continuity lives in memory, files and the business record.
- **Independent in doing the work, not in deciding what it may do.** **[Vendor-documented]** Today, workers start on events, retry and finish alone. Claude Tag acts under its own accounts.[^claude-tag-identity] **[Speculative]** For money and legal commitments, the rule that authority stays outside the worker will likely tighten.
- **Measured as Digital FTEs.** **[Speculative]** FTE stands for full-time equivalent, a way to count work in units of one full-time person. This is our framing. A worker has a role, an identity, a trigger, a budget and an output you can check. But one worker can run many threads at once, or sit idle. So a Digital FTE is a unit of delivered work, not a headcount number.
- **Able to talk to each other.** **[Vendor-documented]** Today, within your own sessions and agent teams.[^cross-session],[^run-agents-in-parallel] **[Assembling]** within one company, once team projects, worker identity and shared environments join up. **[Speculative]** across companies and vendors. Open standards are on the way. One is the Agent2Agent protocol, "an open protocol created by Google for secure agent-to-agent communication and collaboration."[^a2a-linux-foundation] The hard part is trust.

> AI Workers will run in the cloud as persistent, identified workers, measured as Digital FTEs. They will act on their own schedules and events. They will coordinate through messages. Messages will carry information, not authority. Each worker's permissions, records and approvals will stay with the business that deploys it.

The last sentence keeps the prediction safe. If messages could authorize actions, one worker could manipulate another. A supplier's worker could send Brightline a corrected invoice. Only Brightline's own approval could release the payment.

![What comes next, by evidence level. Three columns. Signaled: projects for teams, workers that wake on business events, and workers with their own identity. Assembling: approval and policy as a platform service, worker templates to share and hire, testing workers like software, and desks that work old software. Speculative: workers inside your own network and country, workers that talk across companies, paying for outcomes not seats, and the phone as the manager's desk. A band shows prediction 12 and its parts across the levels. A callout says: the sandbox limits reach, lasting state lives outside it, and the service that acts checks authority.](img/what-comes-next-by-evidence-level.png)

### What does not change

Every prediction still depends on three lines:

- The sandbox limits reach but grants no permission ([Security boundaries](security-boundaries.md)).
- Lasting state lives outside the sandbox ([The sandbox and its state](the-sandbox-and-its-state.md)).
- A person or a system you control decides what may happen ([From personal worker to business worker](from-personal-worker-to-business-worker.md)).

**[Inferred]** The platforms will take over more of the plumbing: identity, rules, triggers and tests. The design work then moves up a level: writing the brief, choosing the environment, setting authority and owning the record. That is the Forward Deployed Engineer's job.

> **Rule to remember:** Features change. The pattern does not. Check what is a signal and what is a guess. Keep authority in the service that acts.

Next, after the appendices, see the first case study, [Case 1: Nisha's AI Team](../case-1-nishas-ai-team/overview.md). It shows these ideas at work in one real evening.

[^projects-redesigned]: Projects redesigned: from folder to conversation, Anthropic, September 17, 2026.
[^claude-projects]: As verified on November 9, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
[^cloud-scheduled-tasks]: As verified on November 9, 2026. Scheduled tasks were in research preview. Automate work with scheduled tasks, Anthropic.
[^claude-tag-identity]: As verified on November 9, 2026. Claude Tag was in public beta. How agent identity works, Claude Tag docs, Anthropic.
[^self-hosted]: As verified on November 9, 2026. Self-hosted environments were in public beta on Team and Enterprise plans. Self-hosted environments, Anthropic.
[^self-hosted-identity]: As verified on November 9, 2026. Verify session identity in self-hosted environments, Anthropic.
[^cloud-environments]: As verified on November 9, 2026. Configure cloud environments, Anthropic.
[^cross-session]: As verified on November 9, 2026. Message your other Claude Code sessions, Anthropic.
[^run-agents-in-parallel]: As verified on November 9, 2026. Agent teams were experimental and off by default. Run agents in parallel, Anthropic.
[^a2a-linux-foundation]: Linux Foundation launches the Agent2Agent Protocol Project to Enable Secure, Intelligent Communication Between AI Agents, Linux Foundation, June 23, 2025.
[^managed-agents]: As verified on November 9, 2026. Claude Managed Agents overview, Anthropic.
# Appendix: reproducing the observations (/claude-and-chatgpt-2/architecture/appendix-reproducing-the-observations)

---
type: Document
title: "Appendix: reproducing the observations"
description: "The five commands behind the observations, what each showed on November 9, 2026, its limits, a reset test you can run, and the sources for the whole section."
status: stable
order: 0.492
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: code-tab
    title: "Claude Desktop: Code tab docs (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop?facet1=pdf
  - id: author-inspection
    title: "Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026"
    resource: "appendix-reproducing-the-observations.md"
  - id: chatgpt-inspection
    title: "ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity"
    resource: "Reported to Panaversity by ChatGPT, November 9, 2026"
  - id: agents-api
    title: "Agents API architecture (OpenAI, verified 2026-11-09)"
    resource: https://developers.openai.com/api/docs/guides/agents-api/architecture
  - id: work-cloud-security
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: managed-agents
    title: "Claude Managed Agents overview (Anthropic, verified 2026-11-09)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: neon-better-auth
    title: "Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2, 2026, verified 2026-11-09)"
    resource: https://neon.com/blog/managed-better-auth-oauth-provider-mcp
  - id: better-auth-mcp
    title: "Better Auth MCP plugin (Better Auth, verified 2026-11-09)"
    resource: https://better-auth.com/docs/plugins/mcp
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: cowork-architecture
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: codex-harness
    title: "Unlocking the Codex harness: how we built the App Server (OpenAI, February 2026, verified 2026-11-09)"
    resource: https://openai.com/index/unlocking-the-codex-harness/
  - id: chatgpt-agent
    title: "Introducing ChatGPT agent (OpenAI, July 2025, verified 2026-11-09)"
    resource: https://openai.com/index/introducing-chatgpt-agent/
  - id: whats-new
    title: "ChatGPT: What's new (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/whats-new
  - id: openai-sandboxing
    title: "ChatGPT sandbox docs (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: new-stack
    title: "OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026, verified 2026-11-09)"
    resource: https://thenewstack.io/openai-codex-work-atlas/
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic blog, September 17, 2026, verified 2026-11-09)"
    resource: https://claude.com/blog/projects-redesigned
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
  - id: cross-session
    title: "Message your other Claude Code sessions (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cross-session-messaging
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
  - id: claude-tag-security
    title: "Security and data handling, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/security-and-data
  - id: claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The commands

Run these commands in the Bash tool of a cloud Claude session. Print only the variables listed. Never print values whose names contain TOKEN, KEY or SECRET, because those are credentials. The run date for this section was November 9, 2026, at 02:45 UTC. Version strings and variable names are a snapshot from that date, and they will change.

```
# 1. Init process and VM uptime
ps -o pid,etime,args -p 1
# 2. Process ancestry of the shell
p=$$; while [ "$p" -gt 1 ]; do ps -o pid=,ppid=,args= -p $p | cut -c1-160; p=$(ps -o ppid= -p $p | tr -d ' '); done
# 3. Claude Code binary and version
which claude; readlink -f "$(which claude)"; claude --version
# 4. Selected environment variables
env | grep -E '^(CLAUDE_CODE_(REMOTE|ENTRYPOINT|SESSION_ORIGIN|VERSION|EXECPATH)|ANTHROPIC_BASE_URL)='
# 5. Working transcript location
ls ~/.claude/projects
```

Here is what each command does, in plain words:

1. Shows the first program the computer started (PID 1) and how long it has been running (its uptime).
2. Follows the chain of programs that started the shell, one parent at a time (its process ancestry).
3. Finds the `claude` program, follows any link to the real file, and prints its version.
4. Prints only the selected environment variables.
5. Lists the folder where Claude Code keeps its working transcripts.

### What each step showed

| Step | Signal seen on November 9 | What it supports | Limit |
| --- | --- | --- | --- |
| 1 | `/process_api --firecracker-init`. Uptime about 19 minutes | A Firecracker microVM. Inferred: started that morning | One VM at one time. Uptime may not count time spent paused |
| 2 | The shell is a child of `/opt/claude-code/bin/claude`, launched by `environment-manager task-run --session-mode resume` | The harness is Claude Code, started for each session | It does not show what other surfaces use |
| 3 | The `claude` command on the PATH reports 2.1.319 | A Claude Code install is present | It is the same file as the running program, `/opt/claude-code/bin/claude` (checked with `readlink -f`) |
| 4 | `REMOTE=true`, `ENTRYPOINT=remote_cowork`, `SESSION_ORIGIN=claude_ai_chat`, `VERSION=2.1.42`, API base `api.anthropic.com` | A remote session started from chat. Model requests go to the configured endpoint | Variable names may change between releases |
| 5 | A `-home-claude` project folder | The transcript is kept in the VM | It is not the durable record |

### A reset experiment

Run step 1 at the start of two turns, with an idle gap between them, and write down both times. In the first turn, also write a small marker file to the VM's own disk, for example `date > /tmp/marker.txt`.

- If the marker is still there in the second turn, the same VM was restored. [The sandbox and its state](the-sandbox-and-its-state.md#when-the-vm-is-paused-restored-or-replaced) quotes the documented pause and restore.
- If the marker is gone, the VM was reclaimed and a fresh one started.
- Do not rely on uptime alone. A restored VM may not count the time it spent paused, so a short uptime does not prove a new machine.

On November 8 and 9, the uptime was short and the demo file came back only as a copy from the conversation. The marker test was not run then. How long a paused VM is kept is still unknown.

### Caveats

Claims in this section carry the labels Observed, Reported by ChatGPT, Tool-documented, Vendor-documented, Inferred or Unknown. The [overview](overview.md) explains each one.

The observations come from one cloud Claude chat session on November 8 and 9, 2026. They may not hold for every plan, account or surface. Beyond Anthropic's published overview, the internal architecture cannot be seen from inside a session. Vendor behavior, feature flags and availability may change.

### Sources

The full details of each source are in this page's source list.

- Claude Desktop, Code tab docs (Anthropic): the environments Local, Cloud, SSH and WSL.
- Panaversity's inspection of a cloud Claude session: a Python test run on November 8, 2026, and a process and environment inspection on November 9, 2026. The method is on this page.
- ChatGPT's inspection of its own Python and terminal environment, November 9, 2026, as reported to Panaversity.
- Agents API architecture (OpenAI API docs): the hosted harness, the environment and the application server as separate parts.
- ChatGPT Work cloud security (ChatGPT docs): Work Cloud's own execution environment.
- Claude Managed Agents overview (Claude Platform docs): the hosted harness and sandbox, sessions, events and beta status.
- Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2026).
- Better Auth MCP plugin (Better Auth docs).
- Schedule recurring tasks in Claude Code Desktop (Claude Code docs): local, cloud and `/loop` tasks, missed runs, permissions and `requiresUserInteraction`.
- Let Claude coordinate ongoing work with Projects (Claude Code docs): the coordinator, threads, standing context, sandbox resume, local threads, limits and beta status.
- Projects redesigned: from folder to conversation (Anthropic blog, September 17, 2026).
- Use Claude Code in the cloud (Claude Code docs): idle sessions, reclaimed VMs and what is restored.
- Configure cloud environments (Claude Code docs): idle VMs pausing and being restored, network access levels, setup scripts and the environment cache, environment variables, network secrets, the GitHub proxy and shared environments.
- Self-hosted environments (Claude Code docs): environments, runners and sessions, leases, what stays on your machines, model routing, availability and limits.
- Verify session identity in self-hosted environments (Claude Code docs): the session token, its claims, what it proves and how to check it.
- Message your other Claude Code sessions (Claude Code docs): how messages travel, what a message can and cannot do, inbound controls and limits.
- How agent identity works, and Security and data handling (Claude Tag docs): service accounts, the credential store, access scope, sandboxes for each thread and availability.
- Automate work with scheduled tasks (Claude Code docs): cloud runs as full Claude Code cloud sessions, fresh copies of repositories, auto mode and limits.
- Claude Cowork architecture overview (Anthropic Help Center): the sandbox for each session, the egress proxy, credentials and plan availability.
- Unlocking the Codex harness: how we built the App Server (OpenAI, February 2026).
- Introducing ChatGPT agent (OpenAI, July 2025).
- ChatGPT: What's new (OpenAI).
- ChatGPT sandbox docs (OpenAI).
- OpenAI is folding Codex into the ChatGPT app (The New Stack, July 2026).
- Work with Claude Tag, overview (Claude Tag docs): Claude in team Slack channels, plans and availability.
- Run agents in parallel (Claude Code docs): subagents, agent view, agent teams, dynamic workflows and projects compared.
- Linux Foundation launches the Agent2Agent protocol project (Linux Foundation, June 23, 2025).
- [Tour of the Apps](../tour/overview.md): the product features this section builds on.
# Appendix: business-layer details (/claude-and-chatgpt-2/architecture/appendix-business-layer-details)

---
type: Document
title: "Appendix: business-layer details"
description: "The details behind the business layer: OAuth tokens and how the MCP server checks them, the reference technology, worker identity, what you build yourself, and runtime limits."
status: stable
order: 0.4925
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00A"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: neon-better-auth
    title: "Managed Better Auth is now an OAuth provider, with MCP support (Neon, November 2, 2026, verified 2026-11-09)"
    resource: https://neon.com/blog/managed-better-auth-oauth-provider-mcp
  - id: better-auth-mcp
    title: "Better Auth MCP plugin (Better Auth, verified 2026-11-09)"
    resource: https://better-auth.com/docs/plugins/mcp
  - id: managed-agents
    title: "Claude Managed Agents overview (Anthropic, verified 2026-11-09)"
    resource: https://platform.claude.com/docs/en/managed-agents/overview
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### What this appendix is for

[From personal worker to business worker](from-personal-worker-to-business-worker.md) explains, in plain words, what a business must build around Claude or ChatGPT. This appendix holds the technical details behind that page. Read it when you start to build the business layer.

### Terms

A few terms first. **OAuth 2.1** is a standard way for an app to get permission to use a service, without sharing a password. An **OAuth provider** (or authorization server) issues **tokens**, short-lived keys that prove what a caller may do. A token has a **signature** that proves it is genuine. It also names an **issuer** (who created it) and an **audience** (which service it is for).

### The reference technology for each requirement

| Requirement | Technology in this reference design | Basis |
| --- | --- | --- |
| Own identity | Better Auth as an OAuth 2.1 provider for your MCP server. Neon's Managed Better Auth issues and refreshes tokens. `createMcpAuth()` checks each token's signature, issuer and audience | Vendor-documented[^neon-better-auth],[^better-auth-mcp] |
| Durable state | Postgres on Neon. Neon's branches let you test a worker against a copy of the data | Vendor-documented. The design is inferred |
| Enforced authority | Your MCP server code | The design is inferred |
| Human approval | A web app that uses Better Auth sign-in. A Claude artifact can display rows, but it is not where approval is recorded | The design is inferred |
| Audit and operations | The MCP server plus Postgres. Managed Agents also keeps each session's event history on the server | The event history is vendor-documented[^managed-agents] |

### Worker identity in detail

Credentials follow a life cycle. Each worker gets its own. They are short-lived and replaced on a schedule (rotated). They are canceled (revoked) when the role changes. Every audit entry names the worker, the tenant, the approver and the approval ID. So you can answer the question: who did what, under whose authority?

An OAuth client identifies an application. It does not identify which running copy of a worker is acting. So a production server should first bind the signed-in client to an explicit worker identity. That binding includes its tenant and its authority. Only then should it allow any action. Signing a connector in as a dedicated worker account is one way to create the worker principal. On its own, it is not a security architecture. The server must also keep proposing separate from approving, and keep the tenant and approver on record for every action.

### What is built in, and what you write

These tables were checked against the documentation available on November 9, 2026. Rows marked "not checked" need checking before you rely on them.

| Component | Built in (documented) | You write | Checked against |
| --- | --- | --- | --- |
| Better Auth on Neon | An OAuth 2.1 authorization server. Token issuing and refreshing. Discovery and JWKS endpoints (the addresses where clients find the server's settings and its public keys). MCP client registration: client ID metadata documents are on by default, and dynamic registration is optional | Sign-in and consent pages. Scopes for each worker. The approval page | Neon's announcement of November 2, 2026[^neon-better-auth] |
| Token checks in the MCP server | `createMcpAuth()` in `@neon/oauth` checks each token's signature, issuer and audience. Adapters for Express, Hono, Next.js and node:http | The tools, the business rules, the approval checks, idempotency and audit logging | The same announcement |
| Approval page and payment rules | Nothing built in | The approval page and the payment rules from the [worked example](worked-example-brightlines-payment-run-as-a-business-ai-worker.md): one exact payment per approval, an expiry, separate scopes and safe retries | Design, not a product |
| Postgres on Neon | The database and its branches | The schema (the design of the tables), transactions and constraints | Neon docs |

| Runtime | How it reaches your MCP server | How approval is requested | Known limits | Status |
| --- | --- | --- | --- | --- |
| Claude app | Connectors you add, and include in each scheduled task | Permission prompts. Desktop tasks add more (see [Scheduled tasks](scheduled-tasks.md)) | Runs as you. See the limits in [Scheduled tasks](scheduled-tasks.md) | Connectors for each task are documented.[^cloud-scheduled-tasks] The connector sign-in flow was not checked |
| Claude Managed Agents | MCP servers listed in the agent definition | Your app sends events into a running session and can interrupt it | Beta (header `managed-agents-2026-04-01`). Not eligible for Zero Data Retention or HIPAA | Documented.[^managed-agents] Credential vaults are named but were not checked |
| Claude Agent SDK | MCP servers set up in your code | Whatever your code implements | You host and operate it | Not checked here |

### Runtime limits

Claude Managed Agents is in beta, and it is not eligible for Zero Data Retention or HIPAA coverage.[^managed-agents] **Zero Data Retention** is an arrangement in which Anthropic does not keep your data after a request. **HIPAA** is a United States law that protects health information.

[^neon-better-auth]: As verified on November 9, 2026. Managed Better Auth is now an OAuth provider, with MCP support, Neon.
[^better-auth-mcp]: Better Auth MCP plugin, Better Auth.
[^managed-agents]: As verified on November 9, 2026. The overview covers the hosted harness and sandbox, sessions, events and beta status. Claude Managed Agents overview, Anthropic.
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic.
# Appendix: runtime details (/claude-and-chatgpt-2/architecture/appendix-runtime-details)

---
type: Document
title: "Appendix: runtime details"
description: "The details behind cloud environments: who can add network secrets, how a self-hosted runner handles a session, and what the session token holds."
status: stable
order: 0.4927
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:53Z
chapter: "F00A"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: self-hosted-identity
    title: "Verify session identity in self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments-identity
generated:
  at: 2026-11-13T06:25:53Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### What this appendix is for

This appendix holds the technical details behind [Cloud environments and self-hosted runners](cloud-environments-and-self-hosted-runners.md). You do not need them to follow the rest of the section.

### Network secrets

| Fact about network secrets | Detail |
| --- | --- |
| Plans | Pro, Max, Ultra, Team and Enterprise |
| Who can add one | On every plan, you can add one to your own environment. On Team and Enterprise, without an organization admin role, the form takes one secret for one host. For a shared environment, an Owner |
| Never attached to | GitHub, the Anthropic API, public package registries, setup script requests and telemetry export |
| Not available | In a self-hosted environment, and for organizations that use customer-managed encryption keys |
| Reachability | The API must accept internet traffic. Requests leave from Anthropic's network |

**Basis:** vendor-documented.[^cloud-environments]

The GitHub proxy rejects branch deletions and pushes of anything other than a branch, such as a tag. It does not limit which branches a push can update. For that, Anthropic points to GitHub's branch protection rules.[^cloud-environments]

### How a runner handles a session

**[Vendor-documented]**[^self-hosted]

1. Anthropic's **control plane**, the service that organizes sessions, places the session on the environment's queue.
2. A runner with free capacity claims it and holds a **lease**, a time-limited claim on the session.
3. The runner clones the repository and starts a Claude Code process for the session.
4. The session streams its events to Anthropic over HTTPS.
5. If the runner stops polling, its lease lapses after about 60 seconds. The session goes back to the queue for another runner.

A runner serves one owner at a time. The first session it claims locks it to that owner. So checked-out code never mixes between owners. For Claude Tag channel sessions, the owner is the Claude Tag agent, not a person. Claude Security and Code Review sessions do not route to self-hosted environments yet.[^self-hosted]

### The self-hosted session token

Every self-hosted session gets a signed token in `CLAUDE_CODE_SESSION_ACCESS_TOKEN`. It is a **JWT**, a signed JSON token. Anthropic publishes the keys that check it at a public **JWKS** (key set) endpoint.[^self-hosted-identity]

| The token | Detail |
| --- | --- |
| Proves | Anthropic issued it for one session in one environment. It also shows who created the session. `user:` in `act.sub` means a person. `agent:` means your organization's service identity, as in Claude Tag channel sessions |
| Does not prove | Which process presents it. "Any code Claude runs, and any tool or MCP server the session starts, can read and present it" |
| Checks | The `sk-ant-cc-` prefix, an `ES256` signature, issuer `ccr`, your environment ID (`ccpool_...`) in the audience, role `session_worker`, and expiry |
| Lifetime | Four hours by default, eight at most. The runner refreshes it. There is no revocation feed |

**Basis:** vendor-documented.[^self-hosted-identity]

Anthropic says not to treat the token as the creator signing in. Limit any credential you derive from it to what one session needs. Make it expire no later than the token. Log it with the session ID and token ID.[^self-hosted-identity]

[^cloud-environments]: As verified on November 9, 2026. The plans for network secrets, and who can add one, were checked again on November 13, 2026, after the page changed. Configure cloud environments, Anthropic.
[^self-hosted]: As verified on November 9, 2026. Self-hosted environments, Anthropic.
[^self-hosted-identity]: As verified on November 9, 2026. Verify session identity in self-hosted environments, Anthropic.
