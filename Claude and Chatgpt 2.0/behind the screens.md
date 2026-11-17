# Behind the Screen (/claude-and-chatgpt-2/behind-the-screen/overview)

---
type: Document
title: "Behind the Screen"
description: "The third section of Claude and ChatGPT 2.0. Who does what when an AI Worker works, why the borrowed desk is cleared, and why permissions, not words, keep a job safe. Starts with the big idea: a small team works behind the chat window."
status: stable
order: 0.3
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "The big idea", "One message", "The borrowed desk", "Scheduled tasks", "The payment run", "Staying safe", "Projects", "Setting up the desk", "The same idea", "Helper to AI Worker" ]
last_verified: 2026-11-09
review_by: 2026-12-09
sources:
  - id: claude-and-chatgpt-2
    title: "The New Way of Working, the first section, for AI Workers, the borrowed desk, Brightline's payment run and the four rules"
    resource: "../new-way-of-working/overview.md"
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product detail and its source"
    resource: "../tour/overview.md"
  - id: connectors
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: codex
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: claude-code-harness
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*Who does what when an AI Worker works*

## Where this section fits

This is the third section of Claude and ChatGPT 2.0. [The New Way of Working](../new-way-of-working/overview.md) introduced AI Workers, the borrowed desk and Brightline's Friday payment run. [Tour of the Apps](../tour/overview.md) showed each feature of the two apps.

This section looks behind the screen. It explains who does what when an AI Worker works, why the borrowed desk is cleared, and why permissions, not words, keep a job safe. The fourth section, [The Architecture](../architecture/overview.md), gives the full evidence and detail.

> [!NOTE]
> **Words used on this page**
>
> - **AI Worker:** an AI system you hand a whole job to, inside limits you set. Like a skilled coworker with a clear job.
> - **Model:** the AI that reads text and writes an answer. It remembers nothing between calls. In this section, it is the consultant on the phone.
> - **Harness:** the program that runs the AI step by step. It sends your request to the model, does what the model asks, and keeps notes. In this section, it is the project manager.
> - **Claude Code and Codex:** the two harnesses you will meet. Claude Code is Anthropic's program for long, hands-on work. It runs in Claude's Code tab and in its cloud sessions.[^claude-code-harness] Codex is OpenAI's program of the same kind, and ChatGPT's Work tab uses it for its cloud tasks.[^codex]
> - **Sandbox:** a separate, isolated computer for your work, usually on the company's servers. In this section, it is the borrowed desk. Technical names you may see later are VM and container.
> - **Backend:** the company's servers that store your conversation and connect the pieces. In this section, it is the filing cabinet.
> - **Connector:** a safe link that lets the AI use another app. Most use an open standard called MCP. In this section, it is a key held at reception.

## Start here: the big idea

When you hand Claude or ChatGPT a whole job, like Brightline's payment run, more than one thing is working for you. A small team works behind the chat window. Each member has one job. This picture describes long, hands-on work. Regular chat may work differently, as [Claude and ChatGPT: the same idea](claude-and-chatgpt-the-same-idea.md) explains.

- **The model is a brilliant consultant with no memory.** You reach the consultant by phone. They give excellent answers, but forget everything after each call, so someone must brief them every time.
- **The harness is the project manager.** The project manager calls the consultant, keeps the notes, and does the tasks the consultant asks for.
- **The sandbox is the borrowed desk.** You met it in [Where the work happens](../new-way-of-working/where-the-work-happens.md): a separate computer, usually on the company's servers, set up just for your work. The project manager does the hands-on work there, and the desk is cleared when you stop for a while. Some AI work runs on your own computer instead.
- **The backend is the filing cabinet.** It keeps a copy of your conversation, so you can come back tomorrow, on another device, and continue.
- **Connectors are keys held at reception.** They let the team use your other apps, like email or a calendar. The team asks reception for a key each time, so your password is never handed over.[^connectors]

One sentence holds the whole idea:

> **The model is a smart helper that forgets everything between calls. The harness turns it into a worker that remembers and finishes the job.**

The rest of this section explains each team member, and what this means for the way you manage an AI Worker. Start with [What happens when you send a message](what-happens-when-you-send-a-message.md).

[^connectors]: As verified on November 9, 2026, Anthropic says "Connector authorization tokens never enter the sandbox" and that "connector calls are made on the server side". Claude Cowork architecture overview, Anthropic.
[^claude-code-harness]: As verified on November 9, 2026, Anthropic describes a cloud session as "Claude Code running in the cloud rather than on your machine". Let Claude coordinate ongoing work with Projects, Anthropic.
[^codex]: As verified on November 9, 2026, OpenAI says "Work Cloud uses the Codex task-execution harness". ChatGPT Work cloud security, OpenAI.
# What happens when you send a message (/claude-and-chatgpt-2/behind-the-screen/what-happens-when-you-send-a-message)

---
type: Document
title: "What happens when you send a message"
description: "The team behind one message, step by step: the backend saves it, the harness calls the model and does the tasks on the borrowed desk, and the loop repeats until the job is done."
status: stable
order: 0.31
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "One message" ]
last_verified: 2026-11-09
sources:
  - id: harness-desk
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Say you ask: "Make a chart from this spreadsheet." Here is what happens, step by step:

1. **You type the request.** The app sends it to the company's servers (the backend), which save it in your conversation.
2. **The project manager starts.** The backend hands your request to the harness. In a Claude session the Panaversity team examined, the project manager sat at the borrowed desk itself.[^harness-desk] In other products it may sit somewhere else.
3. **The consultant thinks.** The harness calls the model and gives it the conversation so far, sometimes with older parts summarized. The model answers with a plan, such as "open the file, then run this Python code".
4. **The project manager does the task.** The harness runs the code on the borrowed desk and gets the result, maybe a chart or an error.
5. **Back to the consultant.** The harness calls the model again. The model forgot the last call, so the harness gives it the request, the earlier steps and the new result.
6. **Repeat until done.** Steps 3 to 5 repeat until the model says the job is finished. Then you see the answer and the chart.

![Who does what behind the screen: the project manager does the work, the consultant only thinks. A row of four boxes joined by two-way arrows. You, chatting in the app or on the web. The backend, the filing cabinet that keeps the chat. The harness, the project manager that makes the calls, keeps the notes and does the tasks, shown highlighted inside a larger box labeled borrowed desk (the sandbox). The model, the consultant that thinks, then forgets, called again at every step. Below the borrowed desk, a two-way arrow labeled "does the tasks" leads to desk tools: run code and read and write files. A second arrow leads from the desk to reception, the proxy, which holds the keys and reaches your connected apps. A caption says this is a Claude cloud session as the author examined it. At the foot: the model runs on the company's AI servers, not on the desk.](img/who-does-what-behind-the-screen.png)

The important point: **the model runs on the company's AI servers, not on the desk.** The desk is where the hands-on work happens.

> [!NOTE]
> **Word to know**
>
> - **Tool:** an action the AI can take, like running code, searching the web or reading a file. A tool on the desk.

[^harness-desk]: As verified on November 9, 2026, Anthropic says that in Cowork's cloud sessions "the agent loop and code execution run in an isolated, temporary sandbox on Anthropic-managed infrastructure". The agent loop is the harness's step-by-step work. Claude Cowork architecture overview, Anthropic.
# Why the borrowed desk gets cleared (/claude-and-chatgpt-2/behind-the-screen/why-the-borrowed-desk-gets-cleared)

---
type: Document
title: "Why the borrowed desk gets cleared"
description: "Why Claude and ChatGPT clear the borrowed desk, what survives a cleanup and what is lost, and the rule that follows: keep important things somewhere that lasts."
status: stable
order: 0.32
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "The borrowed desk" ]
last_verified: 2026-11-09
sources:
  - id: anthropic-claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web.md
  - id: claude-memory
    title: "Use Claude's chat search and memory to build on previous context (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/11817273
  - id: account-connectors
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

[Where the work happens](../new-way-of-working/where-the-work-happens.md) showed that cloud work runs on a borrowed desk, and that anything left on it is gone when the work ends. Here is why the companies do this, and what it means for you.

> [!NOTE]
> **Words to know**
>
> - **Cloud:** computers in a company's data center that you use over the internet. The borrowed desk is in the cloud, not on your laptop.
> - **Session:** one stretch of work, with its own desk and its own history. Like one work shift at one desk.

In Claude Code's cloud sessions, if you leave for a while, Anthropic takes the desk back and gives you a fresh one later.[^anthropic-claude-code-cloud] ChatGPT works differently. See [Claude and ChatGPT: the same idea](claude-and-chatgpt-the-same-idea.md).

The likely reasons, in this book's view:

- **Cost.** Keeping a computer running for every quiet session would waste money and power.
- **Safety.** A cleared desk carries nothing over from one piece of work to the next.

So what survives, and what is lost?

![What survives when the desk is cleared: clearing the desk removes what was left on it, and saved things stay. Left, a panel for the borrowed desk, cleared, lists three things marked with an x: programs you installed, programs that were still running, and files kept only on the desk. Its note says these are gone after a quiet period. Right, a panel for things kept safe outside the desk lists four highlighted items: your conversation (the filing cabinet), files the AI gave you, files saved to Drive or GitHub, and your memory and connected apps. Its note says these are still there when you come back. At the foot: the desk gets cleared, so keep important things somewhere that lasts.](img/what-survives-when-the-desk-is-cleared.png)

Your memory and your connected apps also stay. They belong to your Claude account, not to the desk.[^claude-memory],[^account-connectors]

We saw this in a Claude chat. The desk was replaced during a test. A program the AI had given the user as a file was still there, because those files are kept outside the desk. Everything installed on the old desk was gone.

> **Rule to remember:** the desk gets cleared, so keep important things somewhere that lasts: a file you download, Google Drive, or GitHub (an online folder for code). This is why [the Panaversity team](../new-way-of-working/how-the-panaversity-team-works.md) asks for finished work as one zip file to download.

[^anthropic-claude-code-cloud]: As verified on November 9, 2026, Anthropic says cloud sessions "stop after a period of inactivity and the session's VM is reclaimed". Reopening the session provides a fresh VM. The conversation history is restored, but work that was still running is not. Use Claude Code in the cloud, Anthropic.
[^claude-memory]: As verified on November 9, 2026, Anthropic says "Claude can also remember context from your chats and carry it into new conversations and Cowork tasks", and you review and manage memory in your Settings. Use Claude's chat search and memory to build on previous context, Anthropic.
[^account-connectors]: As verified on November 9, 2026, Anthropic describes "the connectors on your claude.ai account", which you connect once at claude.ai/customize/connectors. Let Claude coordinate ongoing work with Projects, Anthropic.
# Work that runs while you sleep (/claude-and-chatgpt-2/behind-the-screen/work-that-runs-while-you-sleep)

---
type: Document
title: "Work that runs while you sleep"
description: "Scheduled tasks: cloud tasks and desktop tasks, why each run usually starts fresh, and three rules for writing a task that a stranger could follow."
status: stable
order: 0.33
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Scheduled tasks" ]
last_verified: 2026-11-09
sources:
  - id: claude-code-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: claude-routines
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

A **scheduled task** is a saved instruction that runs by itself. For example: "Every Friday at 9 a.m., prepare this week's payment run and save the spreadsheet to our shared Drive." Think of it as a job on the project manager's calendar.

There are two kinds:[^claude-code-scheduled-tasks],[^claude-routines]

| Kind | Where it runs | Your computer must be on? |
| --- | --- | --- |
| **Cloud task** | On a borrowed desk in the cloud | No |
| **Desktop task** | On your own computer, through the Claude desktop app | Yes, with the app open and the computer awake |

ChatGPT has scheduled tasks too. The Tour's [Side by side](../tour/side-by-side.md) page compares the two apps.

Each run usually starts a **brand-new session**. It does not remember the chat that created it or the last run.[^claude-code-scheduled-tasks],[^claude-routines] Think of a new project manager who arrives every Friday. They only know the written instructions and what was saved somewhere lasting, like Drive.

![A new desk for every run: each run usually starts fresh, and only what you saved somewhere lasting carries over. At the top, a box for the scheduled task, your written instruction and a time. Arrows lead from it to three boxes, Run 1, Run 2 and Run 3. Each is a fresh session, with no chat and no last run. Each run has a two-way arrow, labeled read and write, to a wide gold box below: saved somewhere lasting, such as Drive, a shared sheet or GitHub. Under it are two boxes. Cloud task: keeps going with your laptop closed. Desktop task: needs the app open and the computer awake. The callout at the bottom says: write the brief for a stranger, and save the results outside the desk.](img/a-new-desk-for-every-run.png)

That gives three practical rules:

1. **Write the instruction so a stranger could follow it.** Say exactly what to do and what "done" looks like.
2. **Save results somewhere lasting,** like Drive or a shared document, so the next run can find them.
3. **Decide which actions need your yes.** A scheduled task runs while you are away. A cloud task usually does not stop to ask you before each step, and its actions through your connectors appear as you.[^claude-routines] So give it connectors and settings that can only draft, not send or pay, and let a person approve the important actions.

Next, [Brightline's payment run, behind the screen](brightlines-payment-run-behind-the-screen.md) puts these rules to work. Later, [Projects](projects-one-team-lead-many-desks.md) shows how several related jobs can run together.

[^claude-code-scheduled-tasks]: As verified on November 9, 2026, Anthropic says a local task "only fires while the app is open and your computer is awake", and a cloud task "runs even when your computer is off". It also says a desktop task "starts a fresh session when a task is due". Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^claude-routines]: As verified on November 9, 2026, Anthropic says a cloud run's session "begins in auto mode unless auto mode is unavailable", that "You don't choose a permission mode when you create the task", and that Claude "can use an included connector during a run, including writes". It says a run still stops for some actions, such as ones that match an ask rule, and that "Anything a scheduled task does through your connected GitHub identity or connectors appears as you." It says each cloud run opens as a new session, and that inside a project a run can continue an existing thread instead, which is why this page says "usually". Automate work with scheduled tasks, Anthropic.
# Brightline's payment run, behind the screen (/claude-and-chatgpt-2/behind-the-screen/brightlines-payment-run-behind-the-screen)

---
type: Document
title: "Brightline's payment run, behind the screen"
description: "Brightline's Friday payment run as a scheduled task: a progress list off the desk, a person who says yes, a payment system that blocks the AI Worker, and one payment ticket per invoice."
status: stable
order: 0.34
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "The payment run" ]
last_verified: 2026-11-09
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

In [One job, start to finish](../new-way-of-working/one-job.md) you read the brief for Brightline Wholesale Supply's Friday payment run. The AI Worker marks each invoice due in the next seven days pay, hold or ask, and its total must match the checking program's total. Now say Brightline turns that brief into a scheduled task that runs every Friday morning. Here is what keeps it safe behind the screen.

![Brightline's payment run, behind the screen: save every step, and let a person say yes before money moves. Four boxes in a row, joined by arrows. 1, Check invoices: on the borrowed desk, one at a time. 2, Suggest payments: a list for a person to review. 3, Person says yes: the second signature, checked by the system, shown highlighted. 4, Pay once: the payment officer pays, each ticket only once. Below step 1, a two-way arrow labeled "saves each result as it goes" leads to a saved progress list kept off the desk. If the desk is replaced while it checks invoice 8, invoices 1 to 7 are on the list, so the work restarts at invoice 8. Below step 4, a two-way arrow leads to payment tickets kept off the desk: one ticket per approved invoice, and a repeat payment is refused. At the foot: the AI Worker does the work, and the record and the final yes live outside it.](img/brightlines-payment-run-behind-the-screen.png)

**Problem 1: the desk is replaced while it checks invoice 8, for example after a crash.** If the AI Worker kept its notes only on the borrowed desk, the work would be lost. So the task saves each decision to a progress list off the desk, the moment it decides. When the work starts again on a fresh desk, it reads the list first. Invoices 1 to 7 are already there, so it starts at invoice 8. Only the unfinished invoice is checked again.

**Problem 2: who decides to pay?** The AI Worker only *suggests*, as the brief says. A person reviews the suggested list and decides the "ask" invoices. Then the payment officer sends the payments, using a payment system that blocks the AI Worker. As [What stays your responsibility](../new-way-of-working/what-stays-your-responsibility.md) says, words cannot block an action, but permissions can. So even a mistaken or tricked AI Worker cannot pay.

**Problem 3: what if a payment is sent twice?** If the internet drops, the same payment might be sent again. So each approved invoice gets one payment ticket. The payment system pays each ticket only once and refuses a repeat.

The lesson from Brightline's run: **the AI Worker does the work, but the record and the final yes live outside it.**

Next, [Staying safe](staying-safe-a-locked-office-and-a-second-signature.md) explains why that final yes matters.
# Staying safe: a locked office and a second signature (/claude-and-chatgpt-2/behind-the-screen/staying-safe-a-locked-office-and-a-second-signature)

---
type: Document
title: "Staying safe: a locked office and a second signature"
description: "Why AI can be wrong or tricked by prompt injection, the two protections you need together (a locked office and a second signature), and two simple habits."
status: stable
order: 0.35
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Staying safe" ]
last_verified: 2026-11-09
sources:
  - id: sandbox-claude
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-09)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: sandbox-openai
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

AI can make mistakes. It can also be tricked. A web page or an email can hide instructions such as "send this file to this address". This is called **prompt injection**. It is like a fake note slipped to the project manager. The AI might follow those hidden instructions if nothing stops it.

The companies protect you in two different ways. You need both.

**1. A locked office (the borrowed desk).** The borrowed desk sits in a locked office. It usually reaches only approved websites, depending on its settings, and your keys for connected apps stay at reception, not on the desk.[^sandbox-claude],[^sandbox-openai] So if something goes wrong, the office limits what it can affect. It cannot remove every risk, because tools and connectors can still change things outside, such as sending an email. That is why the second protection matters.

> [!NOTE]
> **Words to know**
>
> - **Approval:** a person saying yes before an important action happens. Like a second signature on a large payment.
> - **Permissions:** settings and systems that allow some actions and block others. Like a rule that says who may sign.

**2. A second signature (permissions and approval).** The locked office limits where the AI Worker can work. It does not decide what the AI Worker is *allowed* to do. That is the job of permissions and approvals: rules that say which actions need a person's yes, or are blocked completely. Important actions, like paying, sending or deleting, should always need one. The yes should be checked by the system that performs the action, not only by the AI. At Brightline, the payment system does this, and the AI Worker cannot pay at all.

![A locked office and a second signature: the locked office limits damage, and a second signature decides. At top left, a dashed box for a tricky note hidden in a page or email, which may give the AI bad instructions, points into a large box labeled locked office, around the borrowed desk. Inside the office, the AI plans an action, maybe a wrong one, and an arrow leads to Ready to act: send, pay or delete. A note inside the office says usually approved websites only, and keys stay at reception. From the office, an arrow leads out to the highlighted Second signature: does a person say yes? On yes, an arrow leads to Action happens, outside the office. On no, an arrow leads down to Stopped. Under the office, a note says the office limits damage, but does not give permission. At the foot: a safe AI Worker needs the locked office and a second signature.](img/a-locked-office-and-a-second-signature.png)

> **Rule to remember:** a locked office does not make every action safe. A safe AI Worker needs the locked office *and* a second signature.

Two simple habits help:

- Do not paste real passwords or secret keys into a chat. Connect apps through proper connectors instead.
- When you connect Claude to your own computer (for example, through the Claude desktop app), share only the folders the task needs.

Next, [Projects](projects-one-team-lead-many-desks.md) shows how Claude can run several related jobs at once.

[^sandbox-claude]: As verified on November 9, 2026, Anthropic says that from the cloud sandbox "only allow-listed destinations are reachable" and that "Connector authorization tokens never enter the sandbox". Claude Cowork architecture overview, Anthropic.
[^sandbox-openai]: As verified on November 9, 2026, OpenAI says an allowlist "governs network destinations" for Work's cloud tasks, and that "Consequential actions can still require separate confirmation". ChatGPT Work cloud security, OpenAI.
# Projects: one team lead, many desks (/claude-and-chatgpt-2/behind-the-screen/projects-one-team-lead-many-desks)

---
type: Document
title: "Projects: one team lead, many desks"
description: "Claude's rebuilt projects, behind the screen: a team lead conversation that gives each job its own borrowed desk, a shared binder and shelf that outlast every desk, and what a project does not yet do for a business."
status: stable
order: 0.36
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:53Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Projects" ]
last_verified: 2026-11-09
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: projects-redesigned
    title: "Projects redesigned: from folder to conversation (Anthropic, September 17, 2026)"
    resource: https://claude.com/blog/projects-redesigned
generated:
  at: 2026-11-13T06:25:53Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Before, a big job meant running several sessions yourself. You pasted the same background into each one and kept checking which one had finished. Claude's rebuilt **projects** do that coordinating for you. A project is one conversation that starts **threads**, one for each job. It works at claude.ai/code, in the Code tab and, as we observed in November 2026, in chat as well.[^projects-redesigned] Projects are rolling out gradually, so if you do not see them yet, Anthropic offers a waitlist.[^claude-projects]

[Tour of the Apps](../tour/claude-code-tab.md) shows how to set up a project and which settings to check. This page shows what happens behind the screen. Projects are built mainly for code work, but files you upload work too, so the Brightline project here is an illustration.[^claude-projects]

## The team, with a team lead

Use the team picture from this section, with one new person: a **team lead**.

- **The team lead is the project conversation.** It is Claude in a coordinating role: it hands out jobs instead of doing them. It starts a thread for each job and reads what each thread reports, not every step.[^claude-projects]
- **Each thread gets its own borrowed desk.** A thread is usually a full cloud session, with its own sandbox. Three jobs means three desks, working at the same time.[^claude-projects]
- **The shared binder.** **Project instructions** are a written brief sent to every new thread. **Project memory** is a set of notes Claude writes as it works. Cloud threads read it when they start.[^claude-projects]
- **The shared shelf.** The **Library** holds the files you add and the files the threads make.[^claude-projects]

![A project: one team lead, many borrowed desks. You brief the team lead once, and each job gets its own desk. On the left, You send all the work to one conversation. A two-way arrow joins You to the Team lead, the project conversation, which starts a thread for each job and reads their reports. A note says the team lead has no connectors of its own. On the right, a panel called Borrowed desks, one cloud sandbox per thread, holds three threads: check the invoices, draft the owner's summary, and update supplier contacts. A note in the panel says your yes is asked inside each thread. Below, the team lead connects to the Shared binder: project instructions sent to every new thread, and project memory, notes Claude writes and reads at the start. An arrow from the binder to the desks shows that the threads read it. The desks connect to the Shared shelf, the Library: files you add and files the threads make. A callout at the bottom says desks can still be cleared, the binder and the shelf stay, so save work in progress.](img/one-team-lead-many-borrowed-desks.png)

## The desks still get cleared

Each thread's desk is still temporary. If a thread cannot pick up where it stopped, it continues on a fresh copy, and changes that were never saved can be lost. So on long jobs, ask Claude to save its work in progress.[^claude-projects]

The binder and the shelf live outside every desk, so they survive. A correction you ask Claude to remember goes into the binder, and every later cloud thread starts with it.

## Words are not locks

- **Your yes is asked inside each thread,** not in the team lead's chat. [Tour of the Apps](../tour/claude-code-tab.md) shows where.
- **A rule you type in chat is a preference.** Claude follows "run at most two threads at a time", but Anthropic says such rules are "not enforced settings".[^claude-projects]

So the rule from [Staying safe](staying-safe-a-locked-office-and-a-second-signature.md) does not change. For Brightline, a project can prepare the Friday run, but **the payment itself still needs the second signature** that the payment system checks.

> **Rule to remember:** a project gives each job its own desk and carries your brief across all of them. Save work in progress, and keep important approvals in a system that enforces them.

A project belongs to one person and has no organization controls yet, so today it is a tool for **your own** AI Worker.[^claude-projects] [Tour of the Apps](../tour/claude-code-tab.md) has the plan details.

Next, [Setting up the desk](setting-up-the-desk-keys-buildings-and-badges.md) shows how the desk itself can be set up.

[^claude-projects]: As verified on November 9, 2026, with the plan list checked again on November 13, 2026. Anthropic says projects are "in public beta on Pro, Max, and Ultra plans and rolling out gradually", with a waitlist. It says each thread is "usually a cloud session", that "every new thread starts with the project's instructions", that every cloud thread "reads the index file `MEMORY.md` when it starts", and that if a thread's sandbox cannot be resumed, it "continues from a fresh clone, so uncommitted changes can be lost". It says "the project conversation itself has no connectors", that preferences such as a thread limit are "instructions Claude keeps to, not enforced settings", and that a project "belongs to one user". It says cloud threads "work on GitHub repositories and on the files, folders, and Google Drive folders you upload to the project". Let Claude coordinate ongoing work with Projects, Anthropic.
[^projects-redesigned]: Anthropic announced the rebuilt projects on September 17, 2026. It describes a project as having "threads that do the work and a coordinator that directs them". We observed in November 2026 that the rebuilt projects also work in chat. When this page was verified, Anthropic's Projects page did not yet list chat. Projects redesigned: from folder to conversation, Anthropic.
# Setting up the desk: keys, buildings and badges (/claude-and-chatgpt-2/behind-the-screen/setting-up-the-desk-keys-buildings-and-badges)

---
type: Document
title: "Setting up the desk: keys, buildings and badges"
description: "Three newer Claude features that shape the borrowed desk itself: keys held at reception, a desk inside your own building, and a team worker with its own badge."
status: stable
order: 0.37
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Setting up the desk" ]
last_verified: 2026-11-09
sources:
  - id: cloud-environments
    title: "Configure cloud environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/cloud-environments
  - id: self-hosted
    title: "Self-hosted environments (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/self-hosted-environments
  - id: claude-tag
    title: "Work with Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/overview
  - id: claude-tag-identity
    title: "How agent identity works, Claude Tag (Anthropic, verified 2026-11-09)"
    resource: https://claude.com/docs/claude-tag/concepts/agent-identity
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

So far, the borrowed desk has been the same for everyone: a temporary computer on the company's servers. Claude now lets you shape that desk in three ways. This page gives the ideas. The fourth section's [Cloud environments and self-hosted runners](../architecture/cloud-environments-and-self-hosted-runners.md) gives the details.

![Keys, buildings and badges: how the desk is set up decides what it can reach and who it acts as. Three panels. Keys, network secrets: the borrowed desk never sees the key, and reception, the proxy, adds the key on the way out. Building, where the desk stands: Anthropic's building is the usual cloud desk, and your own building means self-hosted, where files and secrets stay on your machines, while the conversation still goes to Anthropic. Badge, Claude Tag in Slack: the team tags Claude in a shared channel, and it works under its own service accounts, not as you, on Team and Enterprise plans in public beta. A band below says network secrets and Claude Tag keys stay at reception. The rule at the bottom: the setup decides what the desk can reach, and approvals still decide what it may do.](img/keys-buildings-and-badges.png)

## Keys held at reception

This is a second kind of key at reception: for a service the desk calls directly, not an app connector. A **network secret** is a password for another service, such as an API key (a password one program uses to call another). You store it once in the desk's settings, called the **cloud environment**. The desk never sees the key. Anthropic's proxy (reception: a gate that every request passes through on its way out) adds it to a request after the request leaves the desk, so "the key itself stays outside the VM".[^cloud-environments] For Brightline, the accounting system's key could be kept this way, as an illustration.

## A desk in your own building

Usually, the borrowed desk stands in Anthropic's building. With **self-hosted environments**, a company runs the same desks on its own computers, inside its own network. The files, the work and the secrets stay on machines the company controls. The conversation itself still goes to Anthropic, and Anthropic says it "never connects into your network". This is in public beta, an early version open for testing, for Team and Enterprise plans, and it is off by default.[^self-hosted]

## A worker with its own badge

A project belongs to one person. **Claude Tag** puts Claude in a team's Slack channels (Slack is a team chat app), where anyone can tag `@Claude` and hand it work.[^claude-tag] In a channel, Claude acts with **its own service accounts**, "rather than as a specific user". A service account is an account made for a program, like a staff badge. An organization Owner or a Claude Tag admin sets up the keys for the team's tools, and they still stay at reception: the proxy adds them on the way out. In a one-to-one message with Claude, it works differently: Claude works as you, with your own connectors.[^claude-tag-identity] Claude Tag is in public beta for Team and Enterprise plans.[^claude-tag]

> **Rule to remember:** the setup decides what the desk can reach and whose badge it wears. Approvals still decide what it may do. Brightline's payment still needs the second signature.

Next, [Claude and ChatGPT: the same idea](claude-and-chatgpt-the-same-idea.md) compares the two apps.

[^cloud-environments]: As verified on November 9, 2026, Anthropic says a network secret lets Claude "call that API from any session in the environment without seeing the key", and that the proxy adds it "after each request leaves the session's VM, so the key itself stays outside the VM". Configure cloud environments, Anthropic.
[^self-hosted]: As verified on November 9, 2026, Anthropic says self-hosted environments run cloud sessions "on infrastructure your organization operates", that "Repository checkouts, build artifacts, secrets, and any files a session creates or modifies stay on the machines you provision", that "The conversation itself, including prompts, responses, and tool results, goes to api.anthropic.com", and that "Anthropic never connects into your network". It is in public beta on Team and Enterprise plans and off by default. Self-hosted environments, Anthropic.
[^claude-tag]: As verified on November 9, 2026, Anthropic says "Anyone in a Slack channel can tag Claude into a problem and hand it work", that Claude Tag "is available on Team and Enterprise plans", and that "Claude Tag is in public beta." Work with Claude Tag, Anthropic.
[^claude-tag-identity]: As verified on November 9, 2026, Anthropic says that in channels "Claude acts with its own service accounts, rather than as a specific user", and that the credentials "are not placed in the sandbox". How agent identity works, Claude Tag, Anthropic.
# Claude and ChatGPT: the same idea (/claude-and-chatgpt-2/behind-the-screen/claude-and-chatgpt-the-same-idea)

---
type: Document
title: "Claude and ChatGPT: the same idea"
description: "How Claude and ChatGPT use the same basic team for long, hands-on work, why both arrived at the same design, and what is confirmed for each."
status: stable
order: 0.38
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "The same idea" ]
last_verified: 2026-11-09
sources:
  - id: sandbox-claude
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web
  - id: sandbox-openai
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-09)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product detail and its source"
    resource: "../tour/side-by-side.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Claude and ChatGPT were built by different companies, but for long, hands-on work they use the same basic team. The Tour's [Side by side](../tour/side-by-side.md) page compares every feature. Here is the team view.

| Part | In Claude | In ChatGPT |
| --- | --- | --- |
| **Project manager (harness)** | Claude Code, on your computer and in Claude Code's cloud sessions | Codex, documented for agent work. OpenAI says ChatGPT's [Work tab](../tour/chatgpt.md) uses it for its cloud tasks.[^sandbox-openai] |
| **Borrowed desk (sandbox)** | A desk for each cloud session, taken back after a quiet period and replaced with a fresh one[^sandbox-claude] | A desk that Work may reuse across tasks, or replace while keeping saved work[^sandbox-openai] |
| **Consultant (model)** | Claude, on Anthropic's servers | GPT, on OpenAI's servers |
| **Scheduled tasks** | Yes | Yes |

Why did both arrive at the same design? Because they face the same problems:

- The model forgets, so something must keep notes and run the steps.
- Real work needs a computer, and that computer must be sealed for safety.
- Work must continue when you close your laptop, so it runs in the cloud.
- The AI can be wrong or tricked, so the final yes must sit outside it.

We examined a Claude borrowed desk directly. For ChatGPT, the picture comes mostly from OpenAI's own documents. Regular ChatGPT chat may work differently. It is not confirmed that every ChatGPT conversation uses the Codex harness. Anthropic does not name the harness behind regular chat, or behind tasks in a conversation, either.

Next, [From helper to AI Worker](from-helper-to-ai-worker.md) shows what a business adds around these apps.

[^sandbox-claude]: As verified on November 9, 2026, Anthropic says "Cloud sessions stop after a period of inactivity and the session's VM is reclaimed", and that reopening the session provisions "a fresh VM". Use Claude Code in the cloud, Anthropic.
[^sandbox-openai]: As verified on November 9, 2026, OpenAI says "Work Cloud uses the Codex task-execution harness", that Work and Codex "share core execution and isolation mechanisms", and that "Work can reuse an environment across tasks or replace it while preserving eligible state". OpenAI's page covers Work's cloud tasks, not regular chat. ChatGPT Work cloud security, OpenAI.
# From helper to AI Worker (/claude-and-chatgpt-2/behind-the-screen/from-helper-to-ai-worker)

---
type: Document
title: "From helper to AI Worker"
description: "What is ready today for personal and team work, the four things a business adds before an AI Worker touches money, customers or important records, and five points to remember."
status: stable
order: 0.39
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: [ "Helper to AI Worker" ]
last_verified: 2026-11-09
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

With a borrowed desk, a project manager, connectors and scheduled tasks, Claude and ChatGPT can now act as **AI Workers**: you hand them a job, and they do it again and again, even while you are away. This is why [The New Way of Working](../new-way-of-working/overview.md) calls these apps **AI Worker platforms**: a workplace for AI Workers, where you are the manager.

For personal and team work, that is ready today. You can set up a weekly report, a daily inbox summary or a research digest yourself. For bigger personal work, a [project](projects-one-team-lead-many-desks.md) adds a team lead that runs many jobs at once and carries your brief and lessons across them.

For work that touches **money, customers or important records**, a business must add four things around the AI. Think of hiring a new employee:

| What a business adds | Why | Like a new employee's |
| --- | --- | --- |
| **Its own identity** | Actions must show they came from the AI Worker, not from whoever set it up. Claude Tag already covers part of this for team channels | Staff ID badge |
| **A lasting record** | Progress and decisions must be saved in a lasting record, such as a database, not only in the chat | Company files |
| **Enforced approvals** | Important actions must be checked by the systems that perform them | Manager's signature |
| **Monitoring** | Someone must see what the worker did, what it cost, and when it failed | Performance review |

In practice, businesses keep the AI as the engine and build these pieces around it, often with their own connector, a login system and a database. The fourth section, [The Architecture](../architecture/overview.md), explains these options.

Some of this is starting to come built in. Claude Tag, for example, gives a team worker its own badge, and self-hosted environments put the desk inside the company's own network. [Setting up the desk](setting-up-the-desk-keys-buildings-and-badges.md) explains both. The approvals and the lasting record are still yours to add.

![From helper to business AI Worker: each step up adds something, and the last step is the part you build. Four boxes climb like stairs from left to right, joined by arrows. Step 1, Helper: one chat, where you ask, it answers and makes files. Step 2, Personal AI Worker: scheduled tasks and a project, so it works while you are away, with many jobs and one brief. Step 3, Team worker: Claude Tag in Slack, with its own identity through service accounts, and team settings. Step 4, in gold, Business AI Worker: you add the business layer, meaning its own identity, approvals, a lasting record and monitoring. A band says steps 1 to 3 come built into Claude, and you build step 4. A note says Claude Tag starts identity for team channels, and step 4 completes it. The callout at the bottom says: the worker does the job, and the approvals and the record live outside it.](img/from-helper-to-business-ai-worker.png)

## What to remember

1. **The model thinks but forgets.** Every call starts from nothing.
2. **The harness runs the job.** It calls the model, does the tasks and keeps the notes.
3. **The borrowed desk is temporary.** Save anything important somewhere that lasts.
4. **Scheduled tasks usually start fresh.** Write a brief a stranger could follow, and save results outside.
5. **A locked office is not enough.** Important actions need permissions, and a person's yes checked by the system that acts.

Next, [Practice: what would you do?](practice-what-would-you-do.md) lets you try the team picture.
# Practice: what would you do? (/claude-and-chatgpt-2/behind-the-screen/practice-what-would-you-do)

---
type: Document
title: "Practice: what would you do?"
description: "Seven short scenarios to solve with the team picture: a lost file, a weekly report, an important email, a cleared desk in the payment run, a company plan, a project rule and a team worker. Answers follow."
status: stable
order: 0.395
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00B"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Here are seven short scenarios. Use the team picture from this section to decide, and write your answer before you read the answers below.

### The scenarios

1. **The lost file.** Yesterday the AI Worker made a chart on its borrowed desk, but it never gave the file to you. Today you ask for it, and it says the file is gone. What happened, and what will you do next time?
2. **The weekly report.** You want a scheduled task to compare this week's payment run with last week's. Where should the task find last week's results?
3. **The important email.** The AI Worker wants to send a message to all your customers. It asks you to approve it. Should you approve without reading? Why or why not?
4. **The payment run.** Brightline's AI Worker is checking the Friday invoices. Its borrowed desk is replaced while it checks invoice 8, after a crash. Where should it have stored its progress, and where will it restart?
5. **The company plan.** A company wants an AI Worker to prepare supplier payments every week. Name two things the company must add before it trusts the AI Worker near money.
6. **The project rule.** You run Brightline's payment run as a Claude project. You tell the team lead: "Never start more than two threads, and never pay a supplier without my yes." Which part of that message is safe to rely on, and what else do you need?
7. **The team worker.** Brightline's finance team wants Claude in its Slack channel. The owner asks two questions: "Will its work look like it came from me? And where should the accounting key go?" What would you answer?

### Answers

1. The desk was cleared after a quiet period, and the file was only kept there. Next time, ask for the file, or have it saved to Drive, as soon as it is made.
2. In a lasting place the task saved to last week, like a Drive file or a shared sheet. The new run does not remember last week's run.
3. No. Your yes is the second signature. Read the message first. The AI Worker can make mistakes or be tricked by hidden instructions.
4. In a lasting record off the desk, such as a progress list in Drive. Drive is fine for this small example. A business would use a database. The model forgets, and the desk is temporary. Because invoices 1 to 7 are on the list, the work restarts at invoice 8.
5. Any two of these: its own identity, a lasting record of its work, permissions and approvals checked by the payment system, and monitoring.
6. Neither part is a lock. The team lead saves both as preferences and follows them, but Anthropic says such rules are not enforced settings. For payments, the yes must be checked by the payment system itself. See [Projects](projects-one-team-lead-many-desks.md).
7. In the channel, Claude Tag works under its own service accounts, so its work usually shows Claude's badge, not the owner's name. The accounting key belongs at reception: an organization Owner or a Claude Tag admin sets it up for Claude Tag, and the proxy adds it, so it is never in the chat or on the desk. The payment still needs the owner's yes, checked by the payment system. One more thing: in a one-to-one message with Claude, it works as the owner, with the owner's own connectors.

### Want to go deeper?

To see each feature in the apps, go back to [Tour of the Apps](../tour/overview.md). For the evidence, the security controls and how to build a business AI Worker, read the fourth section, [The Architecture](../architecture/overview.md).
