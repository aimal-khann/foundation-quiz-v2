# Tour of the Apps (/claude-and-chatgpt-2/tour/overview)

---
type: Document
title: "Tour of the Apps"
description: "The full tour behind The New Way of Working: what the rebuilt Claude and ChatGPT desktop apps can do, how they compare, and which model to use for which job. Optional reading, for now or whenever a chapter uses a feature."
status: stable
order: 0.2
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T08:18:15Z
chapter: "F00T"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "Reading the tour", "Claude conversations", "Claude Code tab", "ChatGPT", "Side by side", "Which model" ]
last_verified: 2026-11-05
review_by: 2026-12-05
sources:
  - id: claude-code-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks.md
  - id: osmani-opus
    title: "Getting the most out of Opus 5.5 in Claude and Claude Code (A. Osmani, could not be opened on 2026-11-05)"
    resource: https://claude.dev/blog/getting-the-most-out-of-opus-5-5/
  - id: openai-work-and-codex
    title: "ChatGPT Work and Codex (OpenAI, could not be opened on 2026-11-05)"
    resource: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
  - id: opencode
    title: "OpenCode (opencode.ai, verified 2026-11-05)"
    resource: https://opencode.ai/
generated:
  at: 2026-11-11T08:18:15Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

This is the detailed tour behind the first section, [The New Way of Working](../new-way-of-working/overview.md). That section explains what changed and what stays your responsibility. This one shows each feature, compares the two apps, and advises which model to use for which job.

You do not need to read it all now, or remember it. Skim it to see what the apps can do, and come back when a chapter uses a feature. [Set up the apps](../new-way-of-working/set-up-the-apps.md) walks you through setting up the apps step by step. Words like repository, worktree and pull request belong to software work. You can skip any paragraph that uses them.

This book uses the two desktop apps as its default platforms, because they can do the most for the work it teaches: they work on the files in your own folders, use a built-in browser, control other apps on your computer, and run the coding agents you meet in Part III. The web and phone apps can do much of the same, and the book points out where they differ.

> [!NOTE]
> **Words used on this page**
>
> - **AI Worker platform:** an app, such as the Claude or ChatGPT desktop app, that gives an AI Worker a computer to work on, your files and apps, limits you set, and ways for you to check its work.
> - **Model:** the AI itself, such as Claude Opus 5.5 or GPT-6 Astra. The app is the program around it.
> - **Task:** a job the AI works through on its own, step by step, instead of answering in one reply.
> - **Brief:** what you tell the AI when you hand it a task. Chapter 5 teaches how to write one.
> - **"Done when" sentence:** the last sentence of a brief's outcome, a test the AI can apply to its own work to know it has finished, such as "Done when every invoice has a decision".
> - **Context:** everything the AI holds in mind at once while it works.
> - **Connector:** a link from the AI to another app, such as your email or a database. Most use an open standard called MCP.
> - **Skill:** saved instructions that teach the AI how to do one kind of job your way.
> - **Plugin:** a package of skills and connectors you install together.
> - **Permission setting:** how much the AI may do before it asks you.
> - **Effort:** how hard the model thinks before answering. More effort is slower and uses more of your plan.

> [!NOTE]
> **How to read the product detail on this page**
>
> Product detail changes monthly, and features differ by plan and region. Each vendor section carries one "as verified" date. Facts come from the vendors' own documentation unless marked *(reported)*, which means they come from walkthroughs or news reports and were not found in the vendor's documentation. Rollout dates and plan details are in the footnotes. If your app looks different, the vendor's help page is the authority, and the ideas on this page still hold.
>
> The sources were accessed on November 5, 2026. Sources marked † could not be opened when this page was verified. The facts this page takes from them were confirmed in the other sources named in the same footnote.


# Claude 2.0: conversations and artifacts (/claude-and-chatgpt-2/tour/claude-conversations)

---
type: Document
title: "Claude 2.0: conversations and artifacts"
description: "What one Claude conversation can now do, the Auto and Manual settings, the Code tab, the rebuilt projects, and the new kinds of artifacts."
status: stable
order: 0.21
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:54Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Claude conversations" ]
last_verified: 2026-11-05
sources:
  - id: unified
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: plans-claude
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: defaults
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: artifacts
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: anthropic-unified-enterprise
    title: "Set up and manage the new unified Claude experience for your Enterprise organization (Anthropic, could not be opened on 2026-11-05)"
    resource: https://support.claude.com/en/articles/17444462-set-up-and-manage-the-new-unified-claude-experience-for-your-enterprise-organization
  - id: claude-code-desktop
    title: "Use Claude Code Desktop (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/desktop
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-07)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: projects-chat
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-07)"
    resource: https://code.claude.com/docs/en/claude-projects.md
  - id: projects-video
    title: "Video walkthrough of the new Claude app: projects, side chats, split view and artifacts (YouTube, verified 2026-11-07)"
    resource: https://www.youtube.com/watch?v=KjuANoI8HDw
generated:
  at: 2026-11-13T06:25:54Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*As verified on November 5, 2026.*

### Two places to work

The Claude desktop app has two main places to work.

**Conversations.** One conversation now does everything. You no longer choose between chatting and handing off a task. You describe what you want, and Claude decides whether a quick answer is enough or whether the request needs real work. Anthropic used to call that working mode Cowork. It now happens inside any conversation, and this book calls it simply a task.[^unified],[^anthropic-unified-enterprise] A quick question gets a quick answer. A request for research, a report, a spreadsheet or a presentation becomes a task that searches, reads files, runs code, and returns editable files in the same conversation. Several tasks can run at once.

In a conversation Claude can:

- **Work with your files.** It can read, organize and create files in a folder on your computer that you grant it.
- **Use a browser.** It can open pages, read them, click and fill in forms, in the app's built-in browser or in your own Chrome through Claude in Chrome.
- **Use your computer.** With computer use, it can click, type and move between apps on your screen.[^plans-claude]
- **Use your apps.** Connectors to apps such as Google Drive, Gmail, Microsoft 365 and Slack work during tasks. Skills teach Claude how you want a job done, and plugins bundle skills and connectors for a role.
- **Draw in the conversation.** Charts, diagrams and small interactive visuals appear inside the reply.
- **Keep going without you.** Tasks continue in the cloud if you close your laptop, and recurring tasks can run in the cloud on a schedule. Work that needs your local files, the built-in browser or computer use needs the desktop app open.
- **Follow you to your phone.** Tasks started on the desktop appear in the mobile app, where you can answer questions, redirect the work or start something new.

One setting governs how freely Claude acts in the whole conversation. **Auto** lets Claude work without asking at each step, with automated safety checks before each action. **Manual** asks before each action. You can change it at any time, and you can stop or redirect Claude while it works. By default Claude asks before permanently deleting files.[^defaults],[^claude-code-desktop]

Because Claude now picks the route itself, this setting carries real weight. One request can start a task that uses a connector, then a browser, then your screen, without a separate step where you choose to hand the work over. If you want to see each action before it happens, choose Manual. Chapter 7, [The Authority Envelope](../../managing-ai-workers/the-authority-envelope/overview.md), teaches how to match each permission to what a worker may do.

**Code.** The Code tab is Claude Code inside the desktop app. Despite its name, it is not only for programmers. You talk to it in plain language, and many people who use it never read the code it writes. Many of the newest features appear here, and most of the rest of this section describes it. Part III teaches it properly.

**Projects.** Anthropic has rebuilt projects. A project used to be a folder of conversations with shared files and instructions, and the conversations could not see each other. A rebuilt project is one ongoing conversation that starts a separate thread for each job, gives every thread the same instructions and memory, and keeps track of them all. It began in the Code tab, and the next page describes it in full. It now works in conversations too, as a walkthrough reported and the author confirmed in November 2026. Until the new kind reaches your account, your existing projects keep working as before.[^projects-chat],[^projects-video]

### New artifacts: documents, slides, sheets, designs, data, whiteboards and motion

An artifact is a piece of finished work that gets its own window beside the conversation: something you keep, edit, present or share, not just read once. Artifacts work in conversations and in the Code tab. Seven new kinds join the familiar pages, diagrams and small tools:

| Artifact | What it is | You can export it as |
| --- | --- | --- |
| **Docs** | A living document you and your team write with Claude, like a shared document you can chat with | Word, PDF, Markdown or Google Docs |
| **Slides** | A presentation built from notes, reports or the conversation. Edit the slides directly and present from Claude | PowerPoint, PDF or Google Slides |
| **Design** | Visuals, mockups, prototypes, one-pagers and landing pages, built to your organization's design system | PDF, PowerPoint, HTML, a .zip, or a transfer to other tools |
| **Sheets** | A spreadsheet you, your team and Claude edit in the same cells, with formulas across tabs | Excel (.xlsx) or CSV |
| **Data** | Dashboards, data stories and short videos built from your data platforms and connected apps. Each chart shows its query and when it last refreshed. It used to be called Dashboards | Shared as a link |
| **Whiteboards** | A shared board where your team and Claude lay out and group ideas | A PNG picture, or sent to Lucid, Miro or Zoho Vani |
| **Motion** | Animated explainers, charts and walkthroughs. Change a word, a number or a timing without redoing the rest | MP4 video |

Docs, Slides and Design are on every plan, including the free plan. Sheets, Data and Whiteboards need a paid plan, and Sheets and Whiteboards are in beta. Motion is in beta on Team and Enterprise.[^artifacts],[^anthropic-artifacts] [Build Something](../build-something/overview.md) teaches you to use six of them, each beside the ChatGPT tool that does the same job.

Everything you make is kept in one place, the **Artifacts** tab in the sidebar, where you can find it from any conversation and start a new one from a template. To change part of a document, highlight the text, click **Edit with Claude** and say what you want. You can collect several of these requests and send them together, and Claude applies them in one pass.[^anthropic-artifacts]

Three properties make artifacts more than files:

- **They start private.** You decide whom to share them with.
- **They can be live.** On paid plans an artifact can read from and write to connected apps, and keep its own data between visits. Each person who opens it connects their own apps.
- **They can think.** An artifact can call Claude itself, so a shared tool can answer questions or coach its users. Each person's use counts against that person's own plan, not the creator's. The [From Skills to Income](../../from-skills-to-income/overview.md) page shows why that matters if you want to sell what you build.

[^unified]: Anthropic began moving accounts to the single conversation in stages from September 2026, starting with Pro, Max and Ultra. Team was in beta, and Enterprise organizations receive it through an owner setting that turns on by default on November 16, 2026. An account that moves cannot switch back. The model picker and the Code tab are unchanged. Claude Cowork and chat are one Claude, Anthropic.
[^anthropic-unified-enterprise]: Set up and manage the new unified Claude experience for your Enterprise organization, Anthropic †.
[^plans-claude]: Computer use is in beta on Pro, Max and Ultra plans, as of November 5, 2026. Claude Cowork and chat are one Claude, Anthropic.
[^defaults]: Auto is the default on Pro, Max, Ultra and Team plans, and Manual is the default on Enterprise, as of November 5, 2026. The Code tab has its own, wider set of permission modes, including Plan, Accept edits and Auto. Claude Cowork and chat are one Claude, Anthropic.
[^claude-code-desktop]: Use Claude Code Desktop, Anthropic.
[^artifacts]: As verified on November 7, 2026, Anthropic's artifacts page says the Docs, Slides and Design templates "are available on all plans and are on by default". On Enterprise they turned on by default on October 15, 2026. Motion is in beta on Team and Enterprise. Updated on November 11, 2026: on November 10, Anthropic launched Sheets and Whiteboards in beta on Pro, Max, Ultra, Team and Enterprise, and renamed Dashboards to Data, now generally available on the same plans (Get started with Claude Sheets, Get started with Claude Whiteboards and Get started with Claude Data, Anthropic). Connecting apps to artifacts and storing artifact data need Pro or above. Artifacts require code execution and file creation to be turned on in Settings. What are artifacts and how do I use them?, Anthropic.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Anthropic.
[^projects-chat]: As verified on November 7, 2026, Anthropic documents the rebuilt projects at claude.ai/code, in the Code tab of the desktop app and in the Claude mobile app, in public beta on Pro, Max and Ultra (the plan list was checked again on November 13, 2026). It says projects in conversations "keep working as they do today until the redesigned experience reaches them." That the new kind now works in conversations comes from a video walkthrough and the author's own check in November 2026, not from Anthropic's documentation. Let Claude coordinate ongoing work with Projects, Anthropic.
[^projects-video]: Video walkthrough of the new Claude app: projects, side chats, split view and artifacts. Not confirmed on a first-party page when this page was verified on November 7, 2026.


# Claude 2.0: the Code tab and running work (/claude-and-chatgpt-2/tour/claude-code-tab)

---
type: Document
title: "Claude 2.0: the Code tab and running work"
description: "The rebuilt Code tab, asking without interrupting, keeping work running with /goal and the cloud, running several things at once, projects, mods, and briefing Claude."
status: stable
order: 0.22
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:54Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Claude Code tab" ]
last_verified: 2026-11-05
sources:
  - id: context
    title: "Use Claude Code Desktop (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/desktop
  - id: rewind
    title: "Claude 2.0 full guide: 12 changes in the new Claude desktop app (DEV Community, verified 2026-11-05)"
    resource: https://dev.to/hisashispace/claude-20-full-guide-12-changes-in-the-new-claude-desktop-app-and-the-ones-burning-your-usage-3nk4
  - id: goal
    title: "Keep Claude working toward a goal (`/goal`) (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/goal
  - id: nested
    title: "Video walkthrough of the new Claude desktop app (YouTube, verified 2026-11-05)"
    resource: https://www.youtube.com/watch?v=tM0dwXhOv2o
  - id: coordinate
    title: "Use Claude Code Desktop (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/desktop
  - id: projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-07)"
    resource: https://code.claude.com/docs/en/claude-projects.md
  - id: mods
    title: "Customize Claude Code with mods (Anthropic, verified 2026-11-05)"
    resource: https://claude.com/resources/articles/claude-code-mods
  - id: brief-claude
    title: "Prompting Claude Opus 5.5 (Anthropic, verified 2026-11-05)"
    resource: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5
  - id: cloud-claude
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: claude-code-desktop
    title: "Use Claude Code Desktop (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/desktop
  - id: chatgpt-features-video
    title: "Video walkthrough of ChatGPT's newest features (YouTube, verified 2026-11-05)"
    resource: https://www.youtube.com/watch?v=9l9BVyCQPRk
  - id: anthropic-claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web.md
  - id: projects-video
    title: "Video walkthrough of the new Claude app: projects, side chats, split view and artifacts (YouTube, verified 2026-11-07)"
    resource: https://www.youtube.com/watch?v=KjuANoI8HDw
generated:
  at: 2026-11-13T06:25:54Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

### The Code tab's new layout

The Code tab was rebuilt so you can see what Claude is doing without reading its transcript.

![An illustrative layout of the Code tab, not an exact screenshot, in three columns. 1, Sessions: a pinned coordinator session, then sessions grouped into sections such as Client A and Book, with two nested sessions under Supplier research, marked as a reported feature. 2, Conversation: your brief with its outcome and "Done when" sentence, Claude's plan, progress and results of checks, your follow-up, the message box with a context ring, and buttons for the Terminal, Changes, Browser and Files panes. 3, Session rail: an Environment card showing local or cloud, the folder and a Remote Control switch, a Context card showing how messages, connectors, skills and memory fill the context, and a Changes card listing changed files. Captions: group work by project or client, open panes to inspect the work, and see where it runs, context use and changed files.](img/claude-code-tab-layout.png)

**The session rail** is a column of cards beside the conversation, which you can show or hide. **Environment** shows where the session runs (on your computer, in the cloud, or on a remote machine), which folder it works in, and a switch for Remote Control. **Context** shows how full the session's context is: everything Claude holds in mind at once, meaning your messages plus the connectors, skills, agents and memory files it has loaded. When it fills, older detail is compacted into a summary, so the card helps you spot a connector or memory file crowding out your work. **Changes** lists what the session has changed, so you can open each change and comment on it.[^context]

**Panes** open beside the conversation: a terminal, the list of changes, a browser that previews what Claude is building, the files it is working with, and its plan and background tasks. You may never open most of them. They are there for the moment you want to see for yourself.

**Sections** group the sidebar's sessions by project, client or topic, under names you choose. A walkthrough shows how: open the **⋮** menu next to a session, move it to a new section, name the section, then drag other sessions into it *(reported)*.[^projects-video]

A walkthrough also shows a **Connectors** card and an **Outputs** card, which lists every file the session made or used, and a button on the Context card that compacts the session: Claude summarizes the conversation so far to free up room *(reported)*. When Claude makes a plan, it appears as a to-do list in the conversation, and Claude ticks off each step as it goes *(reported)*.[^projects-video]

Two settings help if you are not technical. In a local session you can open a file in the files pane and edit it yourself. Cloud sessions show files view-only, so ask Claude for the change. And **Ctrl+O** switches the conversation between three views: **Normal**, which folds each step into a short summary, **Thinking**, which adds Claude's thinking, and **Verbose**, which shows every step. Stay in Normal to see what Claude is doing without the technical detail.[^claude-code-desktop]

### Asking without interrupting

Claude often works for minutes at a time, and you will have questions while it does.

- **Side chat.** Open one with `/btw` or a keyboard shortcut. It can read the main conversation up to that point and answer you, but nothing you say there is added back. Side chats are not saved after you close the app. A walkthrough of the new app shows more than Anthropic's documentation describes: a side chat opened from the **⋮** menu at the top right, several side chats at once, side chats that are saved, and a side chat that sends one message back to the main conversation, such as only the fixes that matter from a review *(reported)*. Until Anthropic documents this, assume a side chat is not saved.[^projects-video]
- **Fork.** Copy the conversation from a chosen point into a new session, to try a different direction without disturbing the original.
- **Rewind** *(reported)*. Go back to an earlier point in the session with `/rewind`, like undo.[^rewind]
- **Split view.** Open sessions side by side, from a session's **Open in** menu or by Option-clicking (Alt-clicking on Windows) it in the sidebar. A walkthrough also shows dragging a session from the sidebar into the one you are in *(reported)*.[^projects-video]

### Keeping the work running when you step away

- **Remote Control** connects a session on your computer to the Claude mobile app and the web, so you can read it, answer its questions and approve its requests from your phone. Turn it on per session from the session rail, or in Settings turn on **Connect new sessions to Remote Control**.
- **Keep computer awake** stops your computer from going to sleep from inactivity while the app runs your work. Closing the laptop lid still puts it to sleep.
- **Cloud sessions** run on Anthropic's computers, so they continue with your laptop closed. A cloud session in the Code tab cannot see the files on your computer. It works from what you give it, such as a GitHub repository or uploaded files.
- **Scheduled tasks** start a session at a set time. A local task needs your computer on. A cloud task does not, and can also start on a GitHub event or an API call.

These pair well with **`/goal`**, which keeps Claude working until a condition you set is met. You state the finish line. In the weekly supplier payment run at Brightline Wholesale Supply, the company whose bill payments you follow through this book, it might be "all 15 invoices have a pay, hold or ask decision, and the run total matches the checking program". After each turn, a separate small model reads the conversation and judges whether the condition holds. If not, Claude starts another turn instead of stopping to ask you. The goal also ends if the checker judges the condition impossible, or if a turn fails on an error you have to fix, such as a used-up credit balance. You can clear a goal yourself at any time with `/goal clear`.[^goal]

Two cautions. Write a finish line Claude's own output can show, never "make it great". And the separate model only reads what the conversation shows. It does not open files or rerun anything. It is a second opinion, not an independent check. A met goal is evidence that the work is finished, and it never makes the next action permitted.

![How /goal keeps Claude working: set a finish line, then work, check and continue. 1, Set the goal, such as all 15 invoices have a decision and the total matches the checking program. 2, Claude works one turn, runs the checks and shows the results. 3, The evaluator, a separate small model, reads the conversation and judges whether the evidence shows the goal is met. If not yet met, Claude takes another turn, guided by the reason. If met, the goal clears and you review the evidence. If judged impossible, the goal clears and you review the blocker. An error that needs you to fix it can also clear the goal. Two notes: the checker sees only the conversation, does not open files or rerun checks, and is a second opinion, not independent verification. And completion is not permission: a met goal is evidence of completion, and permissions and required approvals still control what happens next. At the foot: you can clear the goal yourself with /goal clear.](img/goal-loop.png)

Read the figure from left to right, then follow the curved arrow back for each turn that falls short. On the right are the two ways the checker ends a goal: met, or judged impossible. The note in the middle is the third way, an error you must fix. The two notes along the bottom are the cautions above.

### Where the work actually runs

It helps to know what happens behind the screen when Claude "keeps working in the cloud".[^cloud-claude],[^anthropic-claude-code-cloud]

- **A fresh virtual machine for each session.** A cloud session runs on a virtual machine: a complete computer, simulated in software, on Anthropic's servers. Each session gets its own, created when the session starts and deleted when it ends. Sessions never share one, even inside the same company.
- **Idle sessions lose their machine.** In the Code tab, if a cloud session sits idle long enough, Anthropic takes its virtual machine back. When you reopen the session, Claude starts a fresh one. Your conversation comes back. Work that was still running in the background does not, and Claude tells you what stopped so you can rerun it.
- **What survives and what does not.** The conversation and the files saved to your account survive. Anything Claude installed or left on the virtual machine does not. So ask for results as files you keep.
- **What it can reach.** Only websites on an allowed list, through a filter the session cannot change, and nothing inside your company's own network. Enterprise organizations start with no internet access at all. Your keys for GitHub and your connectors stay outside the machine, and Anthropic's servers add them when a request leaves it.
- **Your own files.** A cloud session reaches your computer only through the desktop app, and only folders you have connected. Each request is checked against your permissions. Files read this way are processed on Anthropic's servers, not only on your computer.

Why does it work this way, and what does it mean for an AI Worker? See [Behind the Screen](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md).
- **Local sessions.** A Code tab session set to Local runs on your own computer, in the folder you chose. Older tasks started on the desktop before October 2026 ran inside a virtual machine on your own computer instead.

Anthropic documents a new machine per session. It does not say whether each new task inside the same conversation starts a new session, so do not count on anything carrying over between tasks except your conversation and your files.

### Three ways to run several things at once

**Nested sessions** *(reported)* split one job into side jobs. They are described in walkthroughs of the new app but were not yet in Anthropic's documentation when this page was verified. Claude can start sessions of its own that run in parallel, appear under the main session, and report back to it. Each is a full session you can open and talk to directly: you might have five competitors researched at once, then ask about one of them without cluttering the main conversation. Ask for it ("split this into a separate session for each competitor"), or start one from a card in which Claude suggests related work.[^nested],[^chatgpt-features-video],[^claude-code-desktop] On a Team plan, where projects are not yet offered, a walkthrough reports nested sessions as the same idea in another form: each side session gets a brief from the main session instead of shared memory, and it runs on your computer instead of in the cloud *(reported)*.[^projects-video]

**A coordinating session** manages sessions already running. This is a way of working, not a button. Every Code session can list, read, message, rename and archive your other sessions, so you pin one to the top of the sidebar and use it as a control center. Ask it "what's waiting on me?" and it tells you which sessions have finished, which need approval and which are still working. It sees your 20 most recently active sessions on this computer, not cloud sessions, unless you ask it to look further.[^coordinate]

**Projects** carry ongoing work with shared instructions and memory. A project is one ongoing conversation in which Claude acts as a coordinator: you tell it what needs doing, and it starts a thread for each task. Threads run in the cloud by default, so they keep going with your laptop closed. The next section covers projects in full.[^projects]

![Three ways to run several things at once: split one job, coordinate separate jobs, sustain ongoing work. 1, Nested sessions, a reported feature not yet documented: a main session assigns side jobs 1, 2 and 3, and each side job reports back. You can open a side job and ask it directly. 2, A coordinating session: a pinned coordinator reads, messages and organizes sessions already running, such as Build, Research and Report. Ask it "What's waiting on me?" for one place to review ongoing sessions. 3, A project: one project conversation with shared instructions and memory starts cloud threads. Cloud work can continue with your laptop closed, and the overview shows what needs you. Local resources may still need your computer online. A band says more parallel work uses your plan's limits faster, so start with two sessions.](img/three-ways-parallel.png)

The arrows show who starts the work. In nested sessions the main session starts its side jobs and they report back. A coordinator starts nothing. It watches and steers sessions that already exist. A project starts cloud threads that share its instructions and memory.

| You want to | Use | Context each piece starts with | Runs with your laptop closed |
| --- | --- | --- | --- |
| Split one big job into parallel parts | Nested sessions | What the main session tells it | Only if it runs in the cloud |
| Keep track of sessions already running | A coordinating session | Your other sessions, as it reads them | No |
| Run an ongoing stream of related work | A project | The project's instructions and, in the cloud, its memory | Yes, by default |

Parallel work uses your plan's limits faster, and so does standing context: connectors, skills and memory files load into every new session, and each side-chat question rereads the main conversation. Start with two sessions and add more once you trust the results.

### Projects: one conversation that runs the work

Before, a project was a folder of conversations that could not see each other. On a big job, you ran five conversations yourself and pasted the same background into each one. A rebuilt project does that coordinating for you. You talk to it the way you would brief a team lead.[^projects]

**How work flows.** Suppose you send one message: "Check this week's 15 supplier invoices, draft the payment summary for the owner, and update the supplier contact list." Claude starts three threads, one for each job, and each appears as a card under your message. A thread is a full session with its own context. It shows its plan as it works and reports back to the project conversation when it finishes. A quick question gets an answer in place, and a follow-up goes to the thread already working in that area. If you ask for something unrelated in the middle of a thread, Claude may offer to start a new thread for it *(reported)*. That is a good habit anyway: one thread per job.[^projects-video]

**Steering a thread.** Click a thread's card to read what it did, write to it directly, or stop it. A permission request waits inside its own thread. Telling Claude in the project conversation to go ahead does not reach it, so answer it in the thread.

**The project conversation stays clear.** It sees what threads report, not every step they take. It works from recent messages, recent threads and the project's memory, not its whole history, so it stays sharp for as long as the project runs. Ask it "where are we with everything?" and it answers without you opening a single thread.

**Context goes in once.**

- **Project instructions** are the brief every new thread starts from, up to 16,000 characters: what the project is for, how a thread checks its own work, what to do when something is missing, and what needs your approval.
- **Project memory** holds the requirements, decisions and pitfalls Claude writes down as it works. When you correct one thread, tell Claude to remember the correction, and every later cloud thread starts with it.
- **The Library**, a tab in the **Overview** pane, holds every file you added and every file the threads made, so nothing is lost across many conversations. The pane's **Threads** tab sorts threads by state, such as **Waiting on you**, **Working** and **Ready for review**.

**Cloud by default, your computer when needed.** Cloud threads keep going after you close your laptop, and you can check on them and steer them from your phone. When a job needs files or tools that are only on your computer, choose **Work locally** from the **+** menu beside the message box, then allow the folder. That thread runs on your computer through Remote Control, and only while the computer is awake. It starts with the project's instructions but not its memory.

Check four things before you start a project:

1. **Model and effort.** Every thread starts on Opus at high effort, which uses your plan's limits fastest. Open **Project settings > General** and check **Thread model** and **Thread effort** first.
2. **Connectors.** Cloud threads can use the connectors on your claude.ai account. The project conversation itself has none, so it hands any work that needs a connector to a thread.
3. **Skills and settings.** Cloud threads do not load the skills, plugins, connectors or settings on your own computer. Turn the skills you need on in your claude.ai account, and add plugins in **Project settings > Plugins**.
4. **Your plan.** Projects are in beta on Pro, Max and Ultra plans, and a project belongs to one person. You cannot share it or its threads.

Use a project when a goal outlasts one session and keeps producing tasks, such as a weekly payment run with its follow-up questions. For one task that fits in one session, start a normal session. For work where every task needs your computer, use local sessions.

### Mods: changing the app itself

Mods change how Claude Code looks and behaves. Describe the change, for example "make me a mod that shows my weekly usage above the message box", and Claude writes the mod, installs it, and reloads it in your session. A mod can add a pane or a status line, show a notification, rewrite or block a tool call, answer a permission request, or hide secrets from the screen. Anthropic's examples include a pane that follows your builds, a confirmation step before any command touches production settings, and an audit log of what other mods do.[^mods]

Mods are not sandboxed: they have the same access to your computer as Claude Code itself. Install only mods you have read or that come from a source you trust. In companies, administrators decide which plugin sources are allowed, and a built-in safety mod loads first to block the riskiest changes.

### Briefing Claude 2.0

The new app needs less instruction than most people still give it. Anthropic's guidance for Opus 5.5 is to start at medium effort, the default, and test other levels on your own work. It suggests stating the condition for done up front, and removing instructions that tell Claude to think carefully, because the model decides how much to think and the effort setting is the main control.[^brief-claude] Panaversity's own research adds two habits: give the whole task in one message, and leave out lines such as "double-check everything". A specific condition for done adds far more.

Chapter 5 teaches this as the [Four-Part Brief](../../managing-ai-workers/the-four-part-brief/overview.md): the **outcome** you want, ending with a "Done when" sentence, the **context** (who it is for and what to work from), the **format** of the result, and the **constraints**, the rules the result must follow and how far the worker may go alone. The payment-run brief on the first page shows all four. The new apps shift its emphasis. The outcome's "Done when" sentence is one Claude can check itself. Every brief still covers all four parts, but context, format and constraints can be short when something else already settles them, such as project instructions, approved sources and enforced permissions. End with "Show what you checked and what the checks found, and list anything you could not verify", so that you review evidence, not a claim. When you are not sure what you want, ask Claude to interview you until it could write the brief itself, then start a fresh session from that brief.

[^context]: Type `/context` for a full breakdown of what fills the context. A small context ring next to the model picker shows the same information at a glance. Use Claude Code Desktop, Anthropic.
[^rewind]: Claude 2.0 full guide: 12 changes in the new Claude desktop app, DEV Community. Not confirmed on a first-party page when this page was verified.
[^goal]: `/goal` works in the Code tab, in the terminal and through Remote Control. The evaluator is the small, fast model configured for your account, Haiku by default. Keep Claude working toward a goal (`/goal`), Anthropic.
[^cloud-claude]: As verified on November 5, 2026. Anthropic: "Each session gets its own sandbox, created when the session starts and destroyed when it ends," and sandboxes "don't share state with each other or across organizations." The Code tab's cloud sessions run in "an isolated, Anthropic-managed VM", which is "reclaimed" after a period of inactivity. Local Cowork sessions, which ran code in "a dedicated Linux VM" on the computer, apply on Pro, Max and Ultra only to tasks started before October 6, 2026. Claude Cowork architecture overview, Anthropic.
[^anthropic-claude-code-cloud]: Use Claude Code in the cloud, Anthropic.
[^nested]: Nested sessions are described in the video walkthroughs and in reporting on the desktop app. The desktop documentation describes the cards that suggest related work, which start it in another session, but nested sessions themselves were not confirmed on a first-party page when this page was verified.
[^chatgpt-features-video]: Video walkthrough of ChatGPT's newest features, YouTube.
[^claude-code-desktop]: Use Claude Code Desktop, Anthropic.
[^coordinate]: Claude asks before archiving a session, except in Auto and Bypass permissions modes. Messages to a busy session are held until it finishes its current work. Use Claude Code Desktop, Anthropic.
[^projects]: As verified on November 7, 2026, with the plan list checked again on November 13, 2026. Projects are in public beta on Pro, Max and Ultra plans and rolling out gradually, and are not yet offered on Team or Enterprise. They work at claude.ai/code, in the Code tab of the desktop app and in the Claude mobile app, but not in the terminal or the code editor extensions. Projects in conversations keep working as before until the new kind reaches them. The author confirmed in November 2026 that the new kind also works in conversations. To run a thread on your computer, that computer needs Claude Code v2.1.280 or later and, in the desktop app, **Use this computer from your phone and claude.ai** turned on under **Settings > Claude Code**, with the folder added. The enforced limit is 200 new threads a day across your projects. Let Claude coordinate ongoing work with Projects, Anthropic.
[^projects-video]: Video walkthrough of the new Claude app: projects, side chats, split view and artifacts. Not confirmed on a first-party page when this page was verified on November 7, 2026.
[^mods]: Mods became available in the Claude Code terminal and desktop app on October 1, 2026. They ship inside plugins. Customize Claude Code with mods, Anthropic.
[^brief-claude]: As verified on November 5, 2026, Anthropic: "Start at `medium`, the default on Claude Opus 5.5," and "test several levels against your own evals." It also suggests stating "the completion condition up front". Prompting Claude Opus 5.5, Anthropic. The two habits are from Panaversity's research paper "Less Prompting, Better Briefs" (November 3, 2026). Osmani's article could not be opened.


# ChatGPT 2.0 (/claude-and-chatgpt-2/tour/chatgpt)

---
type: Document
title: "ChatGPT 2.0"
description: "ChatGPT's one app for Chat, Work and Codex: what Work can do, where its work runs, its permission modes, and how to brief it."
status: stable
order: 0.23
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T15:14:05Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "ChatGPT" ]
last_verified: 2026-11-05
sources:
  - id: openai-app
    title: "ChatGPT is now a partner for your most ambitious work (OpenAI, verified 2026-11-05)"
    resource: https://openai.com/index/chatgpt-for-your-most-ambitious-work
  - id: openai-merge
    title: "OpenAI is finally merging ChatGPT's Chat and Work tabs (TechCrunch, verified 2026-11-05)"
    resource: https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/
  - id: openai-models
    title: "Using GPT-6, whose address still says gpt-5.6 (OpenAI, verified 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/gpt-5.6
  - id: openai-browser
    title: "Using cloud browser in ChatGPT (OpenAI, could not be opened on 2026-11-05)"
    resource: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
  - id: openai-slides
    title: "Collaborate in Space (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/space/collaboration
  - id: openai-skills
    title: "Skills in ChatGPT (OpenAI, could not be opened on 2026-11-05)"
    resource: https://help.openai.com/en/articles/20001066-skills-in-chatgpt
  - id: openai-tasks
    title: "Automations (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/automations
  - id: openai-locked
    title: "Using locked chats in ChatGPT (OpenAI, could not be opened on 2026-11-05)"
    resource: https://help.openai.com/en/articles/20001411
  - id: cloud-openai
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: codex-work
    title: "Use ChatGPT: Chat, Work and Codex (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/use-chatgpt
  - id: codex
    title: "ChatGPT is now a partner for your most ambitious work (OpenAI, verified 2026-11-05)"
    resource: https://openai.com/index/chatgpt-for-your-most-ambitious-work
  - id: openai-perms
    title: "ChatGPT is now a partner for your most ambitious work (OpenAI, verified 2026-11-05)"
    resource: https://openai.com/index/chatgpt-for-your-most-ambitious-work
  - id: openai-usage
    title: "OpenAI is finally merging ChatGPT's Chat and Work tabs (TechCrunch, verified 2026-11-05)"
    resource: https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/
  - id: brief-openai
    title: "Using GPT-6, whose address still says gpt-5.6 (OpenAI, verified 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/gpt-5.6
  - id: chatgpt-features-video
    title: "Video walkthrough of ChatGPT's newest features (YouTube, verified 2026-11-05)"
    resource: https://www.youtube.com/watch?v=9l9BVyCQPRk
  - id: analytics-insight-classic
    title: "OpenAI to fold ChatGPT Classic into unified desktop experience (Analytics Insight, verified 2026-11-05)"
    resource: https://www.analyticsinsight.net/news/openai-to-fold-chatgpt-classic-into-unified-desktop-experience
  - id: lds-chat-work-merge
    title: "OpenAI to merge ChatGPT Chat and Work tabs, pool Codex usage (Let's Data Science, verified 2026-11-05)"
    resource: https://letsdatascience.com/news/openai-to-merge-chatgpt-chat-and-work-tabs-pool-codex-usage-a4ede6bc
  - id: openai-prompt-guidance
    title: "Prompt guidance (OpenAI, verified 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/prompt-guidance-gpt-5p6
  - id: notebookcheck-astra
    title: "GPT-6 Astra is on ChatGPT Plus, but only in Work and Codex (Notebookcheck, verified 2026-11-05)"
    resource: https://www.notebookcheck.net/GPT-6-Astra-is-on-ChatGPT-Plus-but-only-in-Work-and-Codex.1391574.0.html
  - id: lds-gpt6
    title: "OpenAI rolls out GPT-6 and Intelligent UI in ChatGPT (Let's Data Science, verified 2026-11-05)"
    resource: https://letsdatascience.com/news/openai-brings-gpt-6-and-intelligent-ui-to-chatgpt-4f0d797c
  - id: openai-desktop-app
    title: "ChatGPT desktop app (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/app
  - id: openai-changelog
    title: "ChatGPT changelog (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/changelog
  - id: beri-slides
    title: "ChatGPT Slides puts your decks under Space's sharing rules (Beri, verified 2026-11-05)"
    resource: https://www.beri.net/article/chatgpt-slides-launch-pro-business-enterprise-space-sharing-powerpoint-google-slides-export-vs-copilot-gemini
  - id: ai-career-lab-skills
    title: "ChatGPT Skills are here (The AI Career Lab, verified 2026-11-05)"
    resource: https://theaicareerlab.com/blog/chatgpt-skills-what-they-are-how-to-enable-2026/
  - id: claude-desktop-video
    title: "Video walkthrough of the new Claude desktop app (YouTube, verified 2026-11-05)"
    resource: https://www.youtube.com/watch?v=tM0dwXhOv2o
  - id: openai-scheduled-tasks
    title: "Scheduled tasks in ChatGPT (OpenAI, could not be opened on 2026-11-05)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
  - id: developers-digest-mcp-events
    title: "ChatGPT MCP events: start Work tasks from Gmail, Slack, GitHub (Developers Digest, verified 2026-11-05)"
    resource: https://www.developersdigest.tech/blog/chatgpt-mcp-event-triggered-automations
  - id: lds-locked-chats
    title: "OpenAI rolls out locked chats with PIN protection (Let's Data Science, verified 2026-11-05)"
    resource: https://letsdatascience.com/news/openai-rolls-out-locked-chats-with-pin-protection-in-chatgpt-5c926e6b
  - id: openai-sandboxing
    title: "Sandboxing (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/sandboxing
  - id: willison-codex-goals
    title: "Codex goals (Simon Willison, verified 2026-11-05)"
    resource: https://simonwillison.net/2026/apr/30/codex-goals/
  - id: gradually-codex-changelog
    title: "Codex app changelog (gradually.ai, verified 2026-11-05)"
    resource: https://www.gradually.ai/changelogs/codex-app/
  - id: openai-cloud-browser
    title: "Using cloud browser in ChatGPT (OpenAI, could not be opened on 2026-11-05)"
    resource: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
  - id: openai-permission-modes
    title: "Permission modes (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/permission-modes
generated:
  at: 2026-11-05T15:14:05Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*As verified on November 5, 2026.*

### One app for Chat, Work and Codex

OpenAI's new desktop app for Mac and Windows brings three experiences into one app, on every plan, including Free.[^openai-app],[^analytics-insight-classic]

- **Chat** is everyday conversation.
- **Work** is an agent for longer jobs. It gathers information from your apps and files, splits a project into steps, works for hours if needed, and returns finished materials.
- **Codex** is OpenAI's coding agent, with its own view and history.

You choose Chat or Work with a toggle above the message box, and switch to Codex separately. Chat and Work conversations share one list of recent chats, and projects hold related files and context for both.[^openai-merge],[^lds-chat-work-merge]

GPT-6 Astra, OpenAI's most capable model, is *(reported)* the model behind Work on Plus and higher plans. In Codex you can choose among the GPT-6 models. Everyday Chat runs on lighter GPT-6 models. Which models you see, and which is the default, depends on your plan and your workspace settings, so check the model picker in your own app. Chat answers can now mix text with interactive charts, forms and small tools when that suits the question.[^openai-models],[^openai-prompt-guidance],[^notebookcheck-astra],[^lds-gpt6]

### What Work can do

- **Work with your files and apps.** On the desktop it can use local files and apps. Work you start in the cloud continues on the web and on your phone.
- **Use a browser.** The desktop app has a built-in browser for research and web tools. A cloud browser runs on a separate remote computer with its own sign-ins, never your own browser's passwords or tabs. ChatGPT in Chrome adds ChatGPT to Chrome's sidebar, and sites can offer ChatGPT their own tools directly through WebMCP.[^openai-browser],[^openai-desktop-app],[^openai-changelog]
- **Use your computer.** Computer use lets ChatGPT click, type and move files across your apps in the background, once or as part of a scheduled task. Record & Replay turns a workflow you demonstrate into a reusable skill.
- **Produce finished work.** Documents, spreadsheets, presentations and web apps, often built to your templates and reference files. **Sites**, in beta, are interactive web apps such as dashboards, trackers and internal portals that you can share with your team or publicly, and that update as their data changes.
- **Build decks with your team.** **Slides** turns a conversation, a file, an outline or a template into a presentation, with speaker notes and sources, in your brand style if you supply it. Ask "create a slide deck from this chat" and the deck opens in a slide editor where you can change text, charts, tables and images yourself. Decks live in **Space**, ChatGPT's shared area for pages and decks. You invite people to view or edit, and teammates can select part of a slide and ask ChatGPT to change it. You can present from ChatGPT, or export a copy to PowerPoint, PDF or Google Slides. The live deck stays in Space.[^openai-slides],[^beri-slides]
- **Use your apps.** Plugins connect ChatGPT to tools such as Slack, Teams, Google Drive, SharePoint, email, calendars and CRMs. ChatGPT picks relevant plugins itself, or you name one by typing "@" and its name.
- **Repeat what worked** *(reported)*. Skills package a way of doing a job so ChatGPT follows the same method each time. The results still need checking. When you like how ChatGPT handled something, ask it to turn that into a skill. You can also describe one to the skill creator, write one in an editor, or upload a skill file. You call a skill by typing "@" and its name, in Chat or in Work.[^openai-skills],[^ai-career-lab-skills],[^claude-desktop-video],[^chatgpt-features-video]
- **Run on a schedule or on an event.** Scheduled tasks run once, on a schedule, or to watch for a change. They can also start when something happens: a new Gmail message, a message in a Slack channel, or activity on a GitHub pull request. Plugin builders can offer their own events through MCP.[^openai-tasks],[^openai-scheduled-tasks],[^developers-digest-mcp-events]
- **Remember.** Memory saves useful preferences and recurring workflows when you turn it on. Opt-in features can also build memories from what you do on screen.
- **Keep some chats private** *(reported)*. You can lock a chat behind a four-digit PIN, or Face ID, Touch ID or device unlock on a phone. A locked chat disappears from your history and search and is found under **Projects > Locked chats**. Locking hides a chat from people using your device. It is not encryption, and a forgotten PIN can only be reset by deleting every locked chat.[^openai-locked],[^lds-locked-chats]

### Where ChatGPT's work actually runs

ChatGPT's cloud work also runs on separate, protected computers, but OpenAI describes a different design from Claude's.[^cloud-openai],[^openai-sandboxing]

- **Machines that can be reused.** Work's cloud tasks run in sandboxes backed by virtual machines on OpenAI's servers. OpenAI says Work can reuse an environment across tasks, or replace it while keeping the state it needs, so not every task gets a new one. Saved state is what lets Work resume an interrupted task and refer back to earlier work.
- **Deleting is not immediate.** Ending a task or deleting a chat does not immediately remove everything stored with it. Your workspace's retention settings decide how long saved state is kept.
- **What it cannot reach.** The cloud environment does not inherit your local files, installed apps, browser sign-ins or company network. The cloud browser is another separate computer with its own sign-ins.
- **Steps on your own computer.** A Work task can run some steps on your connected computer, which must be online. If it is not, an existing task can continue in the cloud, but without your files.
- **Local work in the desktop app and Codex** runs on your own computer, inside your operating system's own sandbox (Seatbelt on a Mac, bubblewrap on Linux, the Windows sandbox on Windows), not in a virtual machine. Your permission mode sets what that sandbox allows.

### Codex in the same app

Codex is to ChatGPT what the Code tab is to Claude. Like the Code tab, it is not only for programmers: OpenAI says you can use it for research, documents, presentations and other knowledge work.[^codex-work] What it adds is developer views and technical detail, which matter most when software gets built, reviewed and tested. In the desktop app it can edit changes inline, review pull requests in a side panel, work across several repositories in one project, give each chat its own copy of a repository (a worktree) so parallel jobs do not collide, and run coding tasks in parallel in Codex Cloud. A goal mode keeps Codex working until it judges a goal complete or a token budget runs out, and Codex Remote lets you follow and steer a session from your phone.[^codex],[^openai-desktop-app],[^openai-changelog],[^willison-codex-goals],[^gradually-codex-changelog]

### Permissions and governance

You control what ChatGPT can reach, when it checks in, and which actions need your approval. In the desktop app you choose a permission mode:

- **Ask for approval** works inside the current workspace and asks before editing files outside it or using the internet.
- **Approve for me** keeps the same limits but sends approval requests to auto-review, a model that checks each action and asks you only about ones it finds risky.
- **Full access** removes the limits on files and internet use.
- **Custom** applies rules from a settings file.

In the cloud browser, permission to visit a website is separate from permission to take a consequential action on it, such as a purchase. In companies, administrators manage access, connected tools and permitted actions, and can see Work conversations and actions through the Compliance API.[^openai-perms],[^openai-cloud-browser],[^openai-permission-modes]

Complex tasks use more of your plan than quick questions, and Codex draws on your ChatGPT plan's usage *(reported)*.[^openai-usage],[^lds-chat-work-merge]

### Briefing ChatGPT 2.0

OpenAI's advice for its GPT-6 models matches Anthropic's closely. State the goal, the relevant context, the constraints, the evidence required, the success criteria and the output format. State each instruction once. Ask for approval only after the worker has prepared a concrete result you can review. Start at medium reasoning effort and raise it only when the gain is worth the time and cost. To shorten a prompt that works, remove one group of instructions at a time and rerun the same tests.[^brief-openai],[^openai-prompt-guidance]

The same Four-Part Brief works on both: the brief you write for Claude is the brief you give ChatGPT Work. That is why this book teaches briefing once, not once per app.

[^openai-app]: OpenAI introduced ChatGPT Work and the combined desktop app on July 9, 2026. The earlier desktop app was renamed ChatGPT Classic and retires on January 30, 2027. Signing in to the new app keeps your chat history. ChatGPT is now a partner for your most ambitious work, OpenAI.
[^analytics-insight-classic]: OpenAI to fold ChatGPT Classic into unified desktop experience, Analytics Insight.
[^openai-merge]: On November 2, 2026, OpenAI told users it will merge the Chat and Work tabs into one experience, first for a small group of users, while Codex stays separate. When that reaches your account, ChatGPT starts work from a single conversation, as Claude does. OpenAI is finally merging ChatGPT's Chat and Work tabs, TechCrunch.
[^lds-chat-work-merge]: OpenAI to merge ChatGPT Chat and Work tabs, pool Codex usage, Let's Data Science.
[^openai-models]: *(Reported.)* GPT-6 Astra was introduced on September 3, 2026. On Plus it is reported as available in Work and Codex, with a limited allowance. OpenAI's model-selection guide describes what each model is for but not the app's defaults by plan, and OpenAI's help page on models could not be opened when this page was verified, so check your own app. Lighter GPT-6 models and the new interactive answers (which OpenAI calls Intelligent UI) reached Chat from October 7, 2026. Using GPT-6, whose address still says gpt-5.6, OpenAI.
[^openai-prompt-guidance]: Prompt guidance, OpenAI.
[^notebookcheck-astra]: GPT-6 Astra is on ChatGPT Plus, but only in Work and Codex, Notebookcheck.
[^lds-gpt6]: OpenAI rolls out GPT-6 and Intelligent UI in ChatGPT, Let's Data Science.
[^openai-browser]: The cloud browser can read pages, click, fill in forms and ask you to sign in securely or confirm an action. Sites can still block automated access. Site tools through WebMCP and cloud browser sign-in were not available for Enterprise or Edu workspaces as of November 5, 2026. Using cloud browser in ChatGPT, OpenAI †.
[^openai-desktop-app]: ChatGPT desktop app, OpenAI.
[^openai-changelog]: ChatGPT changelog, OpenAI.
[^openai-slides]: *(Reported.)* Slides was announced on October 16, 2026 and is rolling out on the web and desktop to Pro, Business and Enterprise accounts with access to Space, as of November 5, 2026. Decks share the access settings of their Space, and removing someone's direct invite does not remove access they inherit from the Space. Collaborate in Space, OpenAI.
[^beri-slides]: ChatGPT Slides puts your decks under Space's sharing rules, Beri.
[^openai-skills]: Skills arrived with ChatGPT Work on July 9, 2026. Reports differ on which plans include them, and on Enterprise and Edu an administrator decides who can create, share and publish skills. Check your own account. Skills in ChatGPT, OpenAI †.
[^ai-career-lab-skills]: ChatGPT Skills are here, The AI Career Lab.
[^claude-desktop-video]: Video walkthrough of the new Claude desktop app, YouTube.
[^chatgpt-features-video]: Video walkthrough of ChatGPT's newest features, YouTube.
[^openai-tasks]: Event triggers were added in August 2026 and plugin events through MCP in September 2026. As of November 5, 2026, event-triggered tasks are created on the web or mobile app, need a Plus plan or higher, and on Enterprise and Edu need an administrator to allow them. Automations, OpenAI.
[^openai-scheduled-tasks]: Scheduled tasks in ChatGPT, OpenAI †.
[^developers-digest-mcp-events]: ChatGPT MCP events: start Work tasks from Gmail, Slack, GitHub, Developers Digest.
[^openai-locked]: Locked chats began rolling out on October 20, 2026 on Free, Go, Plus, Pro, Business, Enterprise and Edu plans. Locking a chat that belongs to a project removes it from the project. Using locked chats in ChatGPT, OpenAI †.
[^lds-locked-chats]: OpenAI rolls out locked chats with PIN protection, Let's Data Science.
[^cloud-openai]: As verified on November 5, 2026. OpenAI: tasks "run in VM-backed sandboxes", and "Work can reuse an environment across tasks or replace it while preserving eligible state. This doesn't mean every task receives a new container." Local sandboxing uses "platform-native enforcement on each OS". OpenAI's sandboxing page does not describe Codex Cloud tasks, so this page does not either. ChatGPT Work cloud security, OpenAI.
[^openai-sandboxing]: Sandboxing, OpenAI.
[^codex-work]: OpenAI: "If you prefer Codex, you can keep using it for research, documents, presentations, and other knowledge work." Codex shows developer views, such as diffs and review, and more technical detail than Work. Use ChatGPT: Chat, Work and Codex, OpenAI.
[^codex]: Codex goal mode began in the Codex terminal app. Codex Remote became generally available in June 2026. ChatGPT is now a partner for your most ambitious work, OpenAI.
[^willison-codex-goals]: Codex goals, Simon Willison.
[^gradually-codex-changelog]: Codex app changelog, gradually.ai.
[^openai-perms]: The available modes depend on the app version, your settings and your organization's rules. ChatGPT is now a partner for your most ambitious work, OpenAI.
[^openai-cloud-browser]: Using cloud browser in ChatGPT, OpenAI †.
[^openai-permission-modes]: Permission modes, OpenAI.
[^openai-usage]: OpenAI said ChatGPT and Codex will share one usage allowance from December 2026 for Plus, Pro and Business, and that most users would not notice a change. OpenAI is finally merging ChatGPT's Chat and Work tabs, TechCrunch.
[^brief-openai]: The guidance is written for the GPT-6 models and carries over the GPT-5.6 advice. Using GPT-6, whose address still says gpt-5.6, OpenAI.


# Side by side (/claude-and-chatgpt-2/tour/side-by-side)

---
type: Document
title: "Side by side"
description: "A feature map of Claude, ChatGPT and OpenCode, what the apps share, where they differ, and what a comparison cannot tell you."
status: stable
order: 0.24
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T15:26:57Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Side by side" ]
last_verified: 2026-11-05
sources:
  - id: openai-merge
    title: "OpenAI is finally merging ChatGPT's Chat and Work tabs (TechCrunch, verified 2026-11-05)"
    resource: https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/
  - id: lds-chat-work-merge
    title: "OpenAI to merge ChatGPT Chat and Work tabs, pool Codex usage (Let's Data Science, verified 2026-11-05)"
    resource: https://letsdatascience.com/news/openai-to-merge-chatgpt-chat-and-work-tabs-pool-codex-usage-a4ede6bc
generated:
  at: 2026-11-11T15:26:57Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*As verified on November 5, 2026.*

### Feature map

The open-source column describes OpenCode, which Part III covers beside Claude Code and Codex. "Not documented" means the feature was not found in the product's documentation, not that it is impossible.

| What you need | Claude | ChatGPT | Open source (OpenCode) |
| --- | --- | --- | --- |
| **Start a delegated job** | Ask in any conversation, and Claude decides when a request becomes a task | Choose Work with the toggle above the message box | Ask the coding agent |
| **Technical work and software** | The Code tab (Claude Code), useful beyond programming | Codex, for software or any job where you want the technical detail | OpenCode, in a terminal, desktop app or editor |
| **Choose the model** | Claude models | OpenAI models | Over 75 providers, including models run on your own computer |
| **Finished work** | Docs, Slides, Sheets, Design, Data, Whiteboard and Motion artifacts, plus files | Documents, spreadsheets, presentations, web apps, Slides and Sites | Files and code |
| **Work on it with your team** | Share Docs and Slides artifacts, which the team edits with Claude | Share pages and Slides in Space, and ask ChatGPT for edits from a comment | Through your own tools, such as GitHub |
| **Shareable live tools** | Artifacts that read your connected apps and can call Claude | Sites that update as their data changes | Not documented |
| **Browser and your computer** | Built-in browser, Claude in Chrome, computer use | Built-in browser, cloud browser, ChatGPT in Chrome, computer use, Record & Replay | Not documented |
| **Your apps and methods** | Connectors, skills and plugins | Plugins, skills (called with "@") and site tools | MCP servers and skills |
| **Work while you are away** | Cloud tasks and sessions, Remote Control, keep-awake | Cloud Work, Codex Cloud, Codex Remote | Not documented |
| **Where cloud work runs** | Its own virtual machine for each session, paused when idle and replaced with a fresh one after it is reclaimed | Virtual-machine-backed sandboxes that can be reused across tasks, with saved state | On your own computer, unless you host it elsewhere yourself |
| **Work toward a finish line** | `/goal`, judged each turn by a separate model | Codex goal mode, bounded by a token budget | Not documented |
| **Parallel work** | Nested sessions, a coordinating session, Projects with cloud threads | Parallel chats and projects, worktrees, Codex Cloud | Several agents in parallel in one project |
| **Scheduled and triggered work** | Scheduled tasks, and cloud tasks that start on GitHub events or API calls | Scheduled tasks, with triggers on Gmail, Slack, GitHub and plugin events | Not documented |
| **Change the app itself** | Mods | Not documented | Open source code you can change |
| **How freely it acts** | Auto or Manual for the whole conversation, with more modes in the Code tab | Ask for approval, Approve for me (auto-review), Full access or Custom | Configurable permissions |

The row on where cloud work runs is explained in plain words in [Behind the Screen](../behind-the-screen/claude-and-chatgpt-the-same-idea.md), and with the evidence in [The Architecture](../architecture/chatgpt-and-codex.md).

### What they now share

The two apps have converged. Both are now AI Worker platforms. Both have moved from answering questions to doing whole jobs: research, files, a browser, your computer, your connected apps, and finished documents, spreadsheets and presentations at the end. Both build presentations you can edit yourself and export to PowerPoint or Google Slides (ChatGPT's Slides is reported and still rolling out). Both draw charts and interactive visuals inside the conversation. Both let you save a way of working as a skill. Both keep a separate, specialist place for software. Both run work in the cloud so it continues with your laptop closed, and let you follow it from your phone. Both run work on a schedule. Both connect to outside tools through MCP, which is why a connector you build in Part III can serve both, and OpenCode too. And both vendors now give the same advice for briefing them: the outcome and how to check it, not the steps.

### Where they differ

![How work begins in each app: two ways to start, and permissions govern the actions. In Claude, your request goes to one conversation, where Claude decides between a quick answer and a task that uses files, a browser, apps and the screen. The task leads to the permission setting, Auto or Manual, which applies to the conversation. In ChatGPT, you choose Chat for an answer or Work for files, a browser, apps and the screen, and Codex provides another workspace for hands-on tasks. Work leads to the permission mode: Ask for approval, Approve for me, Full access or Custom. A band says choosing a task does not grant unlimited authority, and permission settings control what the worker may do. A note says this is an illustrative overview and tools vary by app, plan and version.](img/how-work-begins.png)

The two rows differ in the middle box, who decides that work begins. They end in the same place: a permission setting that decides what the worker may do once it starts. That is why this section begins with permissions.

**How permission is set.** This is the difference that matters most for an AI Worker. Claude sets one level, Auto or Manual, for a whole conversation, and the Code tab adds finer modes. ChatGPT sets a permission mode with a sandbox around the workspace, can route approvals to a reviewing model, and in the cloud browser separates permission to visit a site from permission to act on it. Before you delegate, read what each mode actually allows, not its name.

**Who decides that work begins.** In Claude, the conversation decides. In ChatGPT, you do, by choosing Work. This difference is narrowing *(reported)*, so do not choose an app on it.[^openai-merge],[^lds-chat-work-merge] Whichever app you use, the permission setting is where you control what happens once work begins.

**What surrounds the coding agent.** Claude's Code tab has grown into a workspace for running many sessions at once: nested sessions, a coordinating session and projects with cloud threads. Codex leans toward the software lifecycle: inline diffs, pull-request review, several repositories, worktrees and cloud runs.

**What starts work without you.** ChatGPT can start a task when an email, a Slack message or a pull request arrives. Claude's cloud tasks start on a schedule, a GitHub event or an API call.

**What you can build on top.** Claude's artifacts can call Claude for whoever uses them, at the user's cost. ChatGPT's Sites publish web apps that update from their data. Claude also lets you reshape the app itself with mods.

**Where open source fits.** OpenCode is a coding agent, not a desktop app for everyday delegated work. Its strength is choice: it runs models from many providers, including models on your own computer, which matters where cost, data location or vendor independence comes first. For a non-developer starting out, the two vendor apps remain the easier place to begin.

### What the comparison cannot tell you

Neither vendor's documentation shows which app reasons better, makes fewer spreadsheet errors, finishes more web tasks, or keeps your data safer. An easier interface can reduce friction, but it cannot stand in for a correct result or a sound permission boundary. The only fair comparison is the one this book teaches you to run: the same job, the same inputs, the same "Done when" sentence and the same limits on each, repeated, with the results checked against the files each run left behind, never against the worker's account of its own work.

[^openai-merge]: On November 2, 2026, OpenAI told users it will merge the Chat and Work tabs into one experience, first for a small group of users, while Codex stays separate. When that reaches your account, ChatGPT starts work from a single conversation, as Claude does. OpenAI is finally merging ChatGPT's Chat and Work tabs, TechCrunch.
[^lds-chat-work-merge]: OpenAI to merge ChatGPT Chat and Work tabs, pool Codex usage, Let's Data Science.



# Which model for which job (/claude-and-chatgpt-2/tour/which-model)

---
type: Document
title: "Which model for which job"
description: "Which Claude or ChatGPT model to start with for each kind of job, and what matters more than the model."
status: stable
order: 0.25
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-10T13:28:47Z
chapter: "F00T"
part: Front
expert_status: required
concepts: [ "Which model" ]
last_verified: 2026-11-05
sources:
  - id: models-advice
    title: "Using GPT-6, whose address still says gpt-5.6 (OpenAI, verified 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/gpt-5.6
  - id: fable
    title: "Models overview (Anthropic, verified 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/models/overview
  - id: gpt6-plans
    title: "Using GPT-6, whose address still says gpt-5.6 (OpenAI, verified 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/gpt-5.6
  - id: openai-prompt-guidance
    title: "Prompt guidance (OpenAI, verified 2026-11-05)"
    resource: https://developers.openai.com/api/docs/guides/prompt-guidance-gpt-5p6
  - id: notebookcheck-astra
    title: "GPT-6 Astra is on ChatGPT Plus, but only in Work and Codex (Notebookcheck, verified 2026-11-05)"
    resource: https://www.notebookcheck.net/GPT-6-Astra-is-on-ChatGPT-Plus-but-only-in-Work-and-Codex.1391574.0.html
  - id: lds-gpt6
    title: "OpenAI rolls out GPT-6 and Intelligent UI in ChatGPT (Let's Data Science, verified 2026-11-05)"
    resource: https://letsdatascience.com/news/openai-brings-gpt-6-and-intelligent-ui-to-chatgpt-4f0d797c
  - id: anthropic-models-overview
    title: "Models overview (Anthropic, verified 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/models/overview
  - id: anthropic-choosing-model
    title: "Choosing the right model (Anthropic, verified 2026-11-05)"
    resource: https://platform.claude.com/docs/en/about-claude/models/choosing-a-model
  - id: anthropic-fable-plans
    title: "Claude Fable models on your plan (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan
  - id: openai-model-selection
    title: "Model selection (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/model-selection
  - id: lorka-gpt6-models
    title: "GPT-6 Astra vs. Sol vs. Luna vs. Terra: which model should you choose? (Lorka, verified 2026-11-05)"
    resource: https://www.lorka.ai/knowledge-hub/gpt-6-astra-vs-sol-vs-luna-vs-terra
generated:
  at: 2026-11-10T13:28:47Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*As verified on November 5, 2026.*

Both apps let you pick a model, and both vendors give the same advice about it: the brief and the effort setting usually matter more than the model. Start with the model the vendor recommends for most work. Try a different model only when a job keeps failing its "Done when" sentence at a higher effort setting, or when the job is routine, repeated often, or must be fast.[^models-advice],[^openai-prompt-guidance],[^anthropic-models-overview],[^anthropic-choosing-model]

The models are specialists, not rungs on one ladder. A faster model can beat a more capable one at its own kind of job, so compare models on your own tasks before settling. Three things are also easy to mix up:

- **The default:** the model an app uses unless you choose another.
- **What you can select:** the other models the app lets you pick.
- **What your plan includes:** some models are available only on some plans, or use your limits faster.

The tables below say which is which.

### Claude

| Model | Use it for | Notes |
| --- | --- | --- |
| **Opus 5.5** | Most delegated work: tasks that run for a while, reports and analysis, agentic coding, computer use, work with images and screens | Anthropic's recommended starting point for most work. Default effort is medium |
| **Sonnet 5.5** | Everyday work where speed matters: drafting, summaries, data analysis, routine coding, using tools | Fast and capable, and lighter on your plan's limits |
| **Haiku 5.5** | High-volume, simple, fast jobs: sorting and classifying, pulling fields out of documents, routing requests, helper sessions in a split job | The fastest and cheapest. It also judges `/goal` conditions by default |
| **Fable 5.1** | The hardest work: sessions that run for hours, deep research carried through to a finished document, spreadsheet or deck, and jobs where Opus 5.5 at higher effort still falls short | The most capable model you can choose. It uses your limits much faster, and on some plans it runs only on paid credits[^fable],[^anthropic-choosing-model],[^anthropic-fable-plans] |

### ChatGPT

| Model | Use it for | Notes |
| --- | --- | --- |
| **GPT-6 Luna** | Quick questions, short emails, summaries, triage, frequent automations | The fastest and cheapest. Reported as the default in Chat on Free and Go |
| **GPT-6.1 Terra** | Screen-based work and computer use, visual reasoning, concise writing, scoped code fixes | A specialist: for its kind of job it can beat the larger models |
| **GPT-6.1 Sol** | Complex work where time and cost also matter: reports, analysis, comparing sources, debugging and code review | Reported as the default in Chat on paid plans |
| **GPT-6 Astra** | Ambiguous problems, deep analysis and ambitious deliverables | OpenAI's most capable model. Reported as the model behind Work on Plus and higher, and selectable in Codex where your plan includes it. A pro mode does more work before answering, for when quality matters more than time[^gpt6-plans],[^openai-prompt-guidance],[^openai-model-selection],[^notebookcheck-astra],[^lds-gpt6],[^lorka-gpt6-models] |

### By kind of job

| The job | Claude | ChatGPT | What matters more than the model |
| --- | --- | --- | --- |
| A quick answer, a short email, a summary | Sonnet 5.5 | Luna or Sol in Chat | A clear question |
| Writing you will send as yourself | Opus 5.5 or Sonnet 5.5 | Terra or Sol | Examples of your own writing |
| Research and reports from many sources | Opus 5.5, or Fable 5.1 for the hardest | Work, with Astra where available | Named sources, and which one wins |
| Spreadsheets and numbers | Opus 5.5 | Work, with Astra where available | Calculations done by tested code or formulas, never by the model's own arithmetic |
| A long task you leave running | Opus 5.5, or Fable 5.1 for hours-long sessions | Work, with Astra where available | A "Done when" sentence the worker can check |
| A small, well-specified code fix | Sonnet 5.5 | Codex with Terra or Sol | A test that shows it works |
| A large change across many files | Opus 5.5, or Fable 5.1 | Codex, with Astra where available | Tests, and review of the change |
| Operating a browser or your screen | Opus 5.5 | Work, with Astra or Terra where available | Permission mode and approvals |
| Many small, repeated jobs, or helpers in a split job | Haiku 5.5 | Luna | A checked sample of the results |
| A high-stakes decision | The strongest model you have | The strongest model you have | A person who reviews the evidence and signs off |

Three cautions apply to any choice. A stronger model does not replace a human review: it makes better drafts, not accountable decisions. A model never does the final arithmetic in this book: calculations belong to tested code or formulas. And when you switch models, rerun your reusable briefs against their "Done when" sentences, because a brief tuned for one model may behave differently on another.

## What matters more than any feature

Every feature on this page changes how work begins, where it runs and how long it can continue. None of them changes who is accountable for it. The first section, [The New Way of Working](../new-way-of-working/overview.md), sets out the four rules that matter more than any feature, and Part II teaches them: [the Four-Part Brief](../../managing-ai-workers/the-four-part-brief/overview.md), [the Review Contract](../../managing-ai-workers/the-review-contract/overview.md) and [the Authority Envelope](../../managing-ai-workers/the-authority-envelope/overview.md).

**Try it yourself.** The [practice lab](../new-way-of-working/lab.md) in the first section has five short hands-on tasks, 10 to 20 minutes each, that you can do with a free account.

[The Five Horizons](../../five-horizons.md) comes next. It shows where this book is going, from one AI Worker to AI-native companies and countries.

[^models-advice]: Anthropic: "Tuning effort is often a better lever than switching models." OpenAI: compare settings "on representative tasks instead of assuming that the highest effort is always the best tradeoff." Using GPT-6, whose address still says gpt-5.6, OpenAI.
[^openai-prompt-guidance]: Prompt guidance, OpenAI.
[^anthropic-models-overview]: Models overview, Anthropic.
[^anthropic-choosing-model]: Choosing the right model, Anthropic.
[^fable]: As of November 5, 2026, Fable 5.1 is included on Max and Ultra plans and premium Team and Enterprise seats, where it can use up to half of the weekly limits. On Pro and standard seats it runs only on paid usage credits. Fable models carry extra safeguards, and Claude may switch a conversation on some sensitive topics to another model. Models overview, Anthropic.
[^anthropic-fable-plans]: Claude Fable models on your plan, Anthropic.
[^gpt6-plans]: Model descriptions are from OpenAI's model guidance. Plan access is *(reported)*: as of November 5, 2026, Free and Go have Luna. Plus, Pro and Business have Sol in Chat and Astra in Work and Codex, with Astra in Chat on Pro, Business and Enterprise. Enterprise administrators decide which models are on. Terra was the newest of the four, released in late October 2026. Model access by plan comes from reporting, because OpenAI's help page on models could not be opened.
[^openai-model-selection]: Model selection, OpenAI.
[^notebookcheck-astra]: GPT-6 Astra is on ChatGPT Plus, but only in Work and Codex, Notebookcheck.
[^lds-gpt6]: OpenAI rolls out GPT-6 and Intelligent UI in ChatGPT, Let's Data Science.
[^lorka-gpt6-models]: GPT-6 Astra vs. Sol vs. Luna vs. Terra: which model should you choose?, Lorka.


