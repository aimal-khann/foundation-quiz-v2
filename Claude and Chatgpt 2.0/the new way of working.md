    # The New Way of Working (/claude-and-chatgpt-2/new-way-of-working/overview)

---
type: Document
title: "The New Way of Working"
description: "What the rebuilt Claude and ChatGPT apps make possible, what working with them now looks like, how to begin, and what stays your responsibility."
status: stable
order: 0.105
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-10T07:59:44Z
chapter: "F00"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "What changed", "Where work happens", "One job", "The two apps", "Team method", "Your responsibility", "Set up the apps", "No Claude plan" ]
last_verified: 2026-11-05
review_by: 2026-12-05
sources:
  - id: apps
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: openai-ambitious-work
    title: "ChatGPT is now a partner for your most ambitious work (OpenAI, verified 2026-11-05)"
    resource: https://openai.com/index/chatgpt-for-your-most-ambitious-work
  - id: openai-use-chatgpt
    title: "Use ChatGPT: Chat, Work and Codex (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/use-chatgpt
  - id: panaversity-less-prompting
    title: "Less Prompting, Better Briefs: Outcome, Verification and Standing Context for Frontier AI Workers (Panaversity, November 3, 2026), from which the payment-run example (simplified here for beginners) and the four rules are adapted"
    resource: "Panaversity research paper, November 3, 2026"
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product detail and its source"
    resource: "../tour/overview.md"
generated:
  at: 2026-11-10T07:59:44Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*What the new AI Desktop Apps make possible*

## What has changed

Until recently, you asked an AI a question and it wrote an answer. You did the rest: you found the files, copied text between apps, built a spreadsheet and checked it.

In 2026 Anthropic and OpenAI, the companies behind Claude and ChatGPT, rebuilt their apps so that the AI inside them can work as an AI Worker and do whole jobs. You describe the result you want. The app does the job step by step, on its own. It reads your files, uses a web browser and your other apps, and does its math with small programs, which is more reliable than doing it in its head. It can even keep working on Anthropic's or OpenAI's computers after you close your laptop. Jobs that use files on your laptop need the desktop app open. Then it hands back finished work, such as a document, a spreadsheet or a presentation, for you to check.[^apps],[^openai-ambitious-work],[^openai-use-chatgpt]

The AI itself, called the **model**, also improved. But that is not the main change. The main change is that the app can now do a whole job. So the most useful skill is no longer asking good questions. It is handing over work well and checking it well.

What should we call these apps now? You will often hear them called **agentic AI platforms**. *Agentic* means the AI can act on its own, step by step, toward a goal you set. A *platform* is the software that the work runs on. The name is correct, but it puts the focus on the AI. The apps also give the AI a computer to work on, your files and apps to work with, settings that limit what it may do, and ways for you to follow and check its work. That is why this book uses a more exact name: **AI Worker platforms**. An AI Worker platform is a workplace for AI Workers, and you are the manager in that workplace.

[^apps]: As verified on November 5, 2026. What each app can do depends on the plan and, for some features, on the desktop app being open. The tour gives the detail and the sources. Claude Cowork and chat are one Claude, Anthropic.
[^openai-ambitious-work]: ChatGPT is now a partner for your most ambitious work, OpenAI.
[^openai-use-chatgpt]: Use ChatGPT: Chat, Work and Codex, OpenAI.
# Where the work happens (/claude-and-chatgpt-2/new-way-of-working/where-the-work-happens)

---
type: Document
title: "Where the work happens"
description: "Where a job runs when Claude or ChatGPT works on the company's computers, what is kept when it ends, and how your own files are reached."
status: stable
order: 0.11
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T15:14:05Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "Where work happens" ]
last_verified: 2026-11-05
sources:
  - id: sandbox-claude
    title: "Claude Cowork architecture overview (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: sandbox-openai
    title: "ChatGPT Work cloud security (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/enterprise/chatgpt-work-cloud-security
  - id: anthropic-claude-code-cloud
    title: "Use Claude Code in the cloud (Anthropic, verified 2026-11-05)"
    resource: https://code.claude.com/docs/en/claude-code-on-the-web.md
generated:
  at: 2026-11-05T15:14:05Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

When a job runs on Anthropic's or OpenAI's computers, it does not use your laptop. It uses a separate, isolated computer on the company's servers, set up just for your work. Usually this is a virtual computer: a complete computer simulated in software. Think of it as a borrowed desk in someone else's office: you can work there, but it is not your own.

- **Claude** gives each cloud work session (one stretch of work on Anthropic's computers) its own new, temporary computer. Nobody else uses it. When the session ends, that computer is deleted. Your conversation and the files Claude saved to your account are kept. Anything else left on that computer is gone. It is a clean desk every time.[^sandbox-claude],[^anthropic-claude-code-cloud]
- **ChatGPT** also runs this work on separate, protected computers. It may reuse the same computer from one task to the next, or replace it but keep the saved work, so it can pick up unfinished work later.[^sandbox-openai]

![Where cloud work happens: temporary workspaces, saved results, controlled access to your files. Left, Claude, a separate workspace for each cloud session: session 1 and session 2 each get a temporary workspace, and the conversation and files saved to your account are kept. Each temporary workspace is removed when its session ends. Right, ChatGPT, a cloud workspace may be reused: task 1 and task 2 go to a workspace that may be reused or replaced, and eligible saved state can support continued work. A new task does not always mean a new workspace. A band says cloud workspaces are isolated computing environments, not dedicated physical computers. Two boxes: files only on your laptop need your computer online, an approved connection and permission, while copies uploaded to the cloud can stay available after you close your laptop. At the foot: save important results to your account or download them, and do not rely on temporary workspace files.](img/where-work-happens.png)

Two things follow. First, the borrowed computer cannot reach your laptop by itself. Files you attach or upload are copied to the company's servers, so the work can use them after you close your laptop. Files that stay only on your laptop are used through the desktop app, while it is open. With Claude, it reads them from folders you have allowed. With ChatGPT, the steps that need them run on your own computer. Second, anything you want to keep must come back to you as a saved file. Do not expect it to stay on the borrowed computer.

[^sandbox-claude]: As verified on November 5, 2026, Anthropic says each cloud session gets its own sandbox, "created when the session starts and destroyed when it ends", that sandboxes do not share anything, and that a Code tab cloud session left idle has its computer taken back and gets a fresh one when reopened. Anthropic does not say whether each new task inside the same conversation starts a new session. Claude Cowork architecture overview, Anthropic.
[^anthropic-claude-code-cloud]: Use Claude Code in the cloud, Anthropic.
[^sandbox-openai]: As verified on November 5, 2026, OpenAI says Work's cloud tasks run in "VM-backed sandboxes" and that Work "can reuse an environment across tasks or replace it while preserving eligible state", which "doesn't mean every task receives a new container". ChatGPT Work cloud security, OpenAI.

# One job, start to finish (/claude-and-chatgpt-2/new-way-of-working/one-job)

---
type: Document
title: "One job, start to finish"
description: "Brightline's Friday payment run handed to an AI Worker in one brief: the brief's four parts, what comes back, what you check, and what permissions do."
status: stable
order: 0.12
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-10T11:51:48Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "One job" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-10T11:51:48Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

You will follow one small company through this book: Brightline Wholesale Supply, a company in Columbus, Ohio, that buys goods in large amounts and sells them to stores. Its accounting team pays the bills, called **invoices**, that its suppliers send. Every Friday the team decides which invoices to pay that week. This weekly set of payments is called the **payment run**. The invoices are kept in a folder named Invoices. The team follows a written **payment policy**: its rules for which bills to pay. The team also has a **checking program** that adds up this week's invoices to the cent. This week, the folder holds 15 unpaid invoices.

Here is that job, handed to an AI Worker in one message. A message like this is called a **brief**. In it, "pay" means pay this week, "hold" means wait, and "ask" means a person must decide.

> Prepare this Friday's payment run from the Invoices folder, for the manager who approves it. Done when every invoice due in the next seven days is marked pay, hold or ask, and your invoice total matches the checking program's total. Follow version 3 of our payment policy, because version 2 is retired. Return a spreadsheet with one row per invoice, showing the decision and the policy rule you used. Mark these invoices "ask": invoices from a new supplier, invoices large enough to need a manager's approval, and invoices with changed bank details, because thieves often send fake new bank details to steal payments. Only suggest. Never approve or send a payment. Show what you checked, what the checks found and anything you could not verify.

This short brief has four parts, in this order. Every good brief in this book has them, and Chapter 5 teaches each one.

| Part | What it says | In this brief |
| --- | --- | --- |
| **Outcome** | What you want back, ending with a sentence that starts "Done when" | This Friday's payment run. Done when every invoice due in the next seven days is marked pay, hold or ask, and the total matches the checking program's total |
| **Context** | Who it is for, and what to work from | The manager who approves the run. The Invoices folder, version 3 of the payment policy (version 2 is retired), and the checking program's total |
| **Format** | What shape the result takes, and what could not be checked | A spreadsheet with one row per invoice: the decision and the policy rule used, plus a note on what was checked and anything it could not verify |
| **Constraints** | The rules the result must follow, and how far the worker may go without you | Mark risky invoices "ask", with the reason. Only suggest, and never pay |

The outcome ends with one sentence that starts **"Done when"**. Chapter 5 calls it the brief's **success criteria**. It is a test the worker can apply to its own work, so it knows when to stop. But you still check the total yourself, with a program you trust, like the checking program.

What comes back is not just an answer. It is finished work: a spreadsheet of decisions, a short note on the checks the worker ran and what they found, and a list of invoices marked "ask" for a person to decide.

This book teaches what you do next. You look at the checking program's result yourself. You do not just trust what the worker says about it. You decide the "ask" invoices yourself. Then a different person, the one in charge of payments, makes the payments. This person uses a payment system that blocks the AI Worker. Even if the worker tried to pay, the system would say no.

One more idea before the figure. The brief tells the worker what it should do. **Permissions** decide what it is able to do. They are the settings and systems that allow some actions and block others, such as sending a payment.

![One job, start to finish: you start it, the AI works, you check the result. Five steps. 1, You brief: outcome with its "Done when" sentence, context, format, constraints. 2, The AI works: reads files, uses apps and a browser, calculates with code, and asks when it needs help. 3, The AI returns a decision spreadsheet, the results of its checks, and "ask" items for review. 4, You check: compare totals with the checking program, review the decisions, and resolve the "ask" items. 5, A person pays: the authorized person sends payments, and the payment system blocks the AI Worker. Steps 1 and 4 are your part, steps 2 and 3 are the AI Worker's part, and step 5 belongs to the payment officer. A band says: the brief defines what the worker should do, and enforced permissions limit what it can do. At the foot: you can guide the worker while it runs, and you check the evidence before approving the result.](img/one-job.png)

Read the figure from left to right. You start the job with the brief, and you check what comes back. The worker's part is in the middle, and another person, the payment officer, makes the payment. You can also watch and add instructions while the worker is busy, and it may stop to ask you a question or to wait for your OK.


# The two apps side by side (/claude-and-chatgpt-2/new-way-of-working/the-two-apps)

---
type: Document
title: "The two apps side by side"
description: "How Claude and ChatGPT compare on starting and watching a job and on how much they do without asking, and what you need to begin."
status: stable
order: 0.13
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:53Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "The two apps" ]
last_verified: 2026-11-05
sources:
  - id: plans
    title: "Claude Cowork and chat are one Claude (Anthropic, verified 2026-11-05)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-07)"
    resource: https://code.claude.com/docs/en/claude-projects.md
generated:
  at: 2026-11-13T06:25:53Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Both apps can now do this kind of work. They can do similar things. The main difference is where you find each feature.

| | Claude | ChatGPT |
| --- | --- | --- |
| **Starting a job** | Just ask. Claude decides when a request needs a whole job | Normal questions go to **Chat**. For a whole job, turn on **Work**, a switch above the message box |
| **Jobs you want to watch step by step** | The **Code** tab, a separate area of the app. You do not need to know programming | **Codex**, a separate area for the same kind of work |
| **What you get back** | Documents, slides, designs and more, which you can edit and share | Documents, spreadsheets, presentations and simple websites |
| **When you close your laptop** | Cloud jobs keep going, and you can follow them on your phone. Jobs that use your own files need the app open | The same |
| **How much it does without asking** | You choose: it asks before each step, or it works on its own while an automatic safety check reviews each step | You choose how much it may do, and which steps need your OK |

Claude has also rebuilt its **projects**, for big jobs with many parts. You describe the whole job once. Claude splits it into parts, runs each part as its own job, and gives every part the same instructions and memory. It is in beta on Claude's Pro, Max and Ultra plans, and the tour explains how it works.[^projects]

[Set up the apps](set-up-the-apps.md) gets both apps ready, step by step, and the practice lab lets you try them now. For more detail on every feature, and on which model to use, see [Tour of the Apps](../tour/overview.md). Read it now if you are curious, or come back to it later. Open-source AI tools, whose code anyone can read and change, such as OpenCode, are a third option. You can run them on your own computer. Part III covers them.

## What you need to begin

- **The Claude desktop app,** on a Mac or a Windows computer, with a free account. This book starts with Claude, and [Set up the apps](set-up-the-apps.md) shows you how to set it up. A free account is enough for the first exercises.[^plans]
- **The ChatGPT desktop app,** later, when the exercises start comparing the two. Its free plan includes Chat, Work and Codex.
- **A paid plan, later.** Larger jobs, like the payment run above, usually need one. Some features also need one, such as letting the AI use the other apps on your computer. The book tells you when a paid plan becomes worth it.

[^plans]: As verified on November 5, 2026, Anthropic was bringing the single conversation that turns requests into tasks to Pro, Max and Ultra plans first, with Team in beta and Enterprise through an owner setting. A free account may not have it yet. [Set up the apps](set-up-the-apps.md#which-plan-has-what) shows how to start a job if yours does not. Claude Cowork and chat are one Claude, Anthropic.
[^projects]: As verified on November 13, 2026, projects are in public beta on Pro, Max and Ultra plans and are not yet offered on Team or Enterprise. On November 7, 2026, the page named Pro and Max only. Let Claude coordinate ongoing work with Projects, Anthropic.


# How the Panaversity team works (/claude-and-chatgpt-2/new-way-of-working/how-the-panaversity-team-works)

---
type: Document
title: "How the Panaversity team works"
description: "How the Panaversity team uses both apps: zip files in and out, a goal of 9.5 in each area, rounds of improvement, a second AI as reviewer and a person as the final check."
status: stable
order: 0.14
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-10T11:51:50Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "Team method" ]
last_verified: 2026-11-05
sources:
  - id: team-plans
    title: "The Panaversity team's own plans (Panaversity, November 2026)"
    resource: "Panaversity team, November 2026"
  - id: claude-and-chatgpt-2-tour
    title: "Tour of the Apps, for every product detail and its source"
    resource: "../tour/overview.md"
generated:
  at: 2026-11-10T11:51:50Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Panaversity, the team behind this book, uses both apps every day for its own work. Here is how we use them. You do not need to copy it on day one, but it shows the ideas on this page at work.

Everyone on the Panaversity team has a paid plan for both Claude and ChatGPT.[^team-plans] For both Claude and ChatGPT, our default place to work is the desktop app. We do the work in Claude, and we use ChatGPT for one main job: to review what Claude made.

We also use the apps on the web and on our phones, so that work can continue when we leave the desk. A job that runs on Anthropic's or OpenAI's computers keeps going after we close the laptop, and we can follow it on a phone. In the Claude mobile app we can also answer its questions, redirect the work or start something new.[^claude-and-chatgpt-2-tour] So a job that starts at the desk can be guided and continued from anywhere. Jobs that use files kept only on a laptop still need the desktop app open.

We move work in and out of the apps as **zip files**. A zip file packs many files and folders into one file, and keeps each file in its folder. To give Claude or ChatGPT a whole project at once, such as a chapter with its images and data, we upload one zip. When the work is done, we ask for the result as one zip to download, so every file comes back in the right folder, ready to use. This also suits the borrowed computer described above: one zip is an easy way to bring all the work back as saved files.

Our method is simple: set a goal, 9.5 out of 10 in each area, then improve the work in rounds. When we write a book chapter, a blog post or an article, it goes like this:

1. **Claude writes a first draft.**
2. **Claude reviews the draft and grades it out of 10** in three areas: accuracy, quality, and how easy it is for a beginner to understand.
3. **Claude improves the draft until it reaches 9.5 in each area.** It improves, grades again and repeats. Claude now does these rounds by itself. Before, we had to ask for each round by hand.
4. **We give the result and its sources to ChatGPT** and ask it to review and grade the work too, with specific fixes.
5. **We give ChatGPT's review back to Claude,** which uses it to improve the work again.
6. **A person checks the facts against their sources,** reviews any problems still open, and decides when the work is ready.

![How the Panaversity team works: set a goal, improve in rounds, check the evidence. 1, Draft: Claude writes a first draft. 2, Self-review: Claude grades each area out of 10, accuracy, quality and ease for beginners. 3, Check the goal: a self-assessed score of 9.5 in each area? If not yet, Claude improves the draft and grades it again. If yes, 4, Second review: ChatGPT reviews the draft and its sources, and gives grades and specific fixes. 5, Revise: Claude improves the draft using ChatGPT's feedback. 6, Human check: a person checks the facts against their sources, reviews unresolved issues and decides when the work is ready. A band says grades guide improvement, and evidence supports approval. At the foot: a second AI can spot missed problems, and a person makes the final decision.](img/team-loop.png)

Why ask a second AI? Grading your own work is hard, for people and for AI. ChatGPT comes from a different company and was trained differently, so it often notices problems that Claude missed.

The grades are a guide, not proof. A 9.5 does not show that every fact is right. That is why a person checks the facts and makes the final call. The 9.5 goal works like a "Done when" sentence, and the person at the end is the check.

If you try this yourself, two habits keep the rounds honest. Say what each grade means, for example that accuracy means every fact can be found in the sources. And limit the rounds, to three for example, and ask Claude to report any problem it could not fix. Then Claude improves the work, not just the score.

[^team-plans]: About $100 a month for each app, per person, as of November 2026. You do not need these plans to start this book.
[^claude-and-chatgpt-2-tour]: As verified on November 5, 2026. What each app can do depends on the plan. The tour gives the detail and the sources. Tour of the Apps.


# What stays your responsibility (/claude-and-chatgpt-2/new-way-of-working/what-stays-your-responsibility)

---
type: Document
title: "What stays your responsibility"
description: "The four rules that stay yours however the apps change: a short brief that names the rules, checks as evidence, permissions over words, and retesting when the model changes."
status: stable
order: 0.15
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-10T11:51:48Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "Your responsibility" ]
last_verified: 2026-11-05
generated:
  at: 2026-11-10T11:51:48Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

The apps changed how work starts, where it happens and how long it can last. They did not change who is responsible for the result: you are. Four rules you will learn in this book matter even more with the new apps.

1. **Keep the brief short. Keep the full rules in a document the brief names.** Brightline's payment policy applies to every payment run, not just this one. That is why the brief can simply say "follow version 3 of our payment policy". It only works because the policy itself is complete and kept where the worker can always read it.
2. **Passing the checks gives evidence that the work is done. It does not give permission to act, for example to pay.** The payment run can pass every check, but the worker is still not allowed to send a single payment.
3. **Words in a brief cannot block an action. Permissions can.** An instruction in the brief tells the worker what not to do, such as "Never send a payment". Permissions make that action impossible: the payment system simply refuses the worker.
4. **When the model changes, test your briefs again.** AI companies update their models often. A brief that worked well with last month's model may behave differently with this month's. Before you use an old brief again, test it once more and check its "Done when" sentence.

The apps will keep changing. Part II teaches you to write briefs, check the results and set limits. Those skills are how you manage whatever the apps become.
# Set up the apps (/claude-and-chatgpt-2/new-way-of-working/set-up-the-apps)

---
type: Document
title: "Set up the apps"
description: "Install the Claude or ChatGPT desktop app, make two privacy choices before your first message, and make the app ask before it acts."
status: stable
order: 0.155
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T08:18:37Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "Set up the apps" ]
last_verified: 2026-10-29
steps_run:
  # Still to run (the editor approved the page on 11 November 2026 with these open): every step on a free account in both apps, the folder message on the practice lab's folder, and where Settings opens in each desktop app (the words came from the removed Your First Hour chapter, which described the websites).
  # The supplier counts in the folder step's check were counted from office-orders.csv, not taken from a run.
  - { what: "Screens of the Claude app's Chat tab, no task run: the message box's Project or folder and Auto controls. One figure comes from them.", by: "human:mjunaidca", date: 2026-10-29, app_version: "Claude 4.29.0, Max plan" }
  - { what: "The ChatGPT app explored with computer use on the editor's Mac, at the editor's request, no task run: the Chat and Work switch, the permissions menu, Choose project and its Create project window, and the run-location menu. Two figures come from it.", by: "Claude Code, on human:mjunaidca's computer", date: 2026-10-29, app_version: "ChatGPT 26.1016.51333" }
sources:
  - id: anthropic-install-desktop
    title: "Install Claude Desktop (Claude Help Center, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/10065433-installing-claude-for-desktop
  - id: anthropic-pro-plan
    title: "What is the Pro plan? (Claude Help Center, updated 2026-10-13, verified 2026-10-16)"
    resource: https://support.claude.com/en/articles/8325606-what-is-the-pro-plan
  - id: anthropic-privacy
    title: "How do I change my model improvement privacy settings? (Anthropic Privacy Center, updated 2026-08-03, verified 2026-11-11)"
    resource: https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings
  - id: anthropic-memory
    title: "Use Claude's chat search and memory to build on previous context (Claude Help Center, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
  - id: anthropic-incognito
    title: "Use incognito chats (Claude Help Center, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/12260368-use-incognito-chats
  - id: anthropic-one-claude
    title: "Claude Cowork and chat are one Claude (Claude Help Center, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
  - id: anthropic-get-started-tasks-plans
    title: "Get started with Claude Cowork, the plans it reaches first (Claude Help Center, updated 30 October 2026, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
  - id: anthropic-builtin-browser
    title: "Use the built-in browser in Claude Cowork (Claude Help Center, verified 2026-10-28)"
    resource: https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork
  - id: anthropic-builtin-browser-plans
    title: "Use the built-in browser in Claude Cowork, the plans that have it (Claude Help Center, updated 30 October 2026, verified 2026-10-31)"
    resource: https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork
  - id: anthropic-desktop-tour
    title: "Navigating the Claude desktop app (Anthropic Academy, verified 2026-10-28)"
    resource: https://academy.claude.com/tutorials/navigating-the-claude-desktop-app
  - id: openai-pricing
    title: "Plans and Pricing (ChatGPT, verified 2026-10-28)"
    resource: https://chatgpt.com/pricing/
  - id: openai-macos-app
    title: "Downloading the ChatGPT macOS app (OpenAI Help Center, updated 2026-10-28, verified 2026-10-28)"
    resource: https://help.openai.com/en/articles/9275200-downloading-the-chatgpt-macos-app
  - id: openai-windows-app
    title: "Using the ChatGPT Windows app (OpenAI Help Center, updated 2026-10-19, verified 2026-10-28)"
    resource: https://help.openai.com/en/articles/9982051-using-the-chatgpt-windows-app
  - id: openai-data-controls
    title: "Data controls in ChatGPT (OpenAI Help Center, updated 2026-10-27, verified 2026-10-28)"
    resource: https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt
  - id: openai-memory
    title: "Memory in ChatGPT (OpenAI Help Center, updated 2026-09-19, verified 2026-10-16)"
    resource: https://help.openai.com/en/articles/8590148-memory-in-chatgpt
  - id: openai-temporary
    title: "Temporary chat in ChatGPT (OpenAI Help Center, updated 2026-09-19, verified 2026-10-16)"
    resource: https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt
  - id: openai-work-start
    title: "Get started with ChatGPT Work (ChatGPT Learn, verified 2026-10-29)"
    resource: https://learn.chatgpt.com/docs/get-started-with-work
  - id: openai-desktop-app
    title: "ChatGPT desktop app (ChatGPT Learn, verified 2026-10-29)"
    resource: https://learn.chatgpt.com/docs/app
  - id: openai-permissions
    title: "Permissions (ChatGPT Learn, verified 2026-11-11)"
    resource: https://learn.chatgpt.com/docs/permission-modes
  - id: openai-browser
    title: "Using the built-in browser in the ChatGPT desktop app (OpenAI Help Center, updated 2026-10-23, verified 2026-10-28)"
    resource: https://help.openai.com/en/articles/20001277-using-the-built-in-browser-in-the-chatgpt-desktop-app
  - id: openai-moving-desktop
    title: "Moving to the new ChatGPT desktop app (OpenAI Help Center, verified 2026-11-04)"
    resource: https://help.openai.com/en/articles/20001276-moving-to-the-new-chatgpt-desktop-app
generated:
  at: 2026-11-11T08:18:37Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Before the [practice lab](lab.md), get one app ready. Start with Claude, and add ChatGPT when an exercise compares the two. A free account is enough. There are three steps.

## Step 1. Install the app and sign in

### Claude

[Download the Claude app](https://claude.com/download), open it, and sign in. No account yet? Sign up at claude.ai. You must be 18 or older, in a [supported country or region](https://www.anthropic.com/supported-countries).[^anthropic-pro-plan]

It runs on macOS 13 or later, Windows 10 or later and, in beta, Linux (Ubuntu 22.04 or later, Debian 12 or later).[^anthropic-install-desktop]

### ChatGPT

[Download the ChatGPT app](https://chatgpt.com/download/), open it, and sign in. No account yet? Sign up at chatgpt.com.

It runs on macOS 14 or later and Windows 10 or later.[^openai-macos-app],[^openai-windows-app]

## Step 2. Make two choices before your first message

The app keeps a copy of what you type. Two switches decide what happens to that copy.

- **Training:** may the company use your chats to train its later models? If you are not sure, turn it off.
- **Memory:** may the app save notes about you, and use them in later chats?

Choose now, because turning training off later covers only your new chats. It cannot take back what training has already used.

Turning training off does not make a work file safe to upload. Your company's rules decide what may go in, and [Chapter 10](../../managing-ai-workers/governance-and-responsible-use/can-this-data-go-in.md) teaches how to decide.

To find the switches, click your name at the bottom left, then *Settings*.

### Claude

- **Training:** open *Privacy*, and find *Help improve our AI models*.[^anthropic-privacy]
- **Memory:** open *Your Claude*, and find *Generate memory from chats*. In older versions of Settings, it is under *Memory*.[^anthropic-memory]

For one chat you do not want kept in your history, click the ghost icon at the top right of a new chat. Claude calls this an incognito chat. It adds nothing to memory and is not used for training. Anthropic still keeps a copy for a time, 30 days by default.[^anthropic-incognito]

### ChatGPT

- **Training:** open *Data controls*, and find *Improve the model for everyone*.[^openai-data-controls]
- **Memory:** open *Personalization*, and find *Enable memory*.[^openai-memory]

For one chat you do not want kept in your history, choose *Temporary* in a new chat. It adds nothing to memory and is not used for training. OpenAI may still keep a copy for a time, up to 30 days.[^openai-temporary]

## Step 3. Make it ask before it acts

For your first jobs, choose the setting that asks you first.

### Claude

Under the message box, next to the model menu, a setting says *Auto*. Change it to *Manual*.

In Auto, Claude keeps working without asking about each step, and automated safety checks run before it acts. In Manual, it asks before each action, and you allow or deny it.[^anthropic-one-claude]

On a free account you may not see this setting. That is fine, because a free account cannot reach your folders or the browser.

![Claude's message box in the desktop app, as it looked on 29 October 2026. Under the box, two controls are boxed. On the left, Project or folder, where you choose a folder for Claude. On the right, Auto, the setting you change to Manual. Between them is the model menu.](img/desktop-message-box.png)

### ChatGPT

1. At the top left, make sure the menu says *ChatGPT*, not *Codex*.
2. At the top, switch from *Chat* to *Work*. If you see no switch, carry on.[^openai-moving-desktop]
3. Under the message box, open the permissions control, and choose *Ask for approval*. ChatGPT then works inside any folder you give it, and asks before it edits other files or uses the internet.[^openai-permissions]
4. The computer icon at the right of that row sets where the chat runs. Keep *On your computer*.[^openai-work-start]

![ChatGPT's Work message box in the desktop app, as it looked on 29 October 2026, with its permissions menu open. The menu asks how ChatGPT's actions should be approved. It offers Ask for approval, which is boxed, Approve for me and Full access. The control that opens the menu, set here to Full access, is boxed too.](img/desktop-chatgpt-permissions.png)

## You are ready

Go on to the [practice lab](lab.md). The rest of this page is optional.

## Optional: give it a folder, and let it use a browser

The practice lab does not need this. It shows what the desktop app adds: the AI works in a folder on your own computer, and uses a browser inside the app. On Claude, this needs a paid plan.

Download the practice lab's files, [`brightline-lab-f00.zip`](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-f00.zip), and unzip them. Then give the app that folder.

### Claude

Under the message box, open *Project or folder*, and choose the folder you unzipped.[^anthropic-one-claude]

### ChatGPT

1. Under the message box, open *Choose project*, and choose *New project*.
2. Give the project a name. Under *Source folders*, click *Add*, and choose the folder you unzipped.
3. Click *Create project*.[^openai-desktop-app]

![ChatGPT's Create project window, as it looked on 29 October 2026. It has a box for the project's name, and under Source folders, the line "Add a folder on this computer" with an Add button, which is boxed. At the bottom is Create project.](img/desktop-chatgpt-create-project.png)

### Try it

Send this message:

> Read office-orders.csv in this folder. List each supplier, with how many orders it has this week. Save the list in this folder as suppliers.md.

A new file appears in your folder. It should list five suppliers and seven orders in all.

Then try the browser:

> Open claude.com/pricing in the built-in browser, and tell me what the Pro plan costs.

On ChatGPT, use chatgpt.com/pricing and the Plus plan. A browser opens next to the chat, and the AI reads the page while you watch. The app asks for your permission before it uses a new site.[^anthropic-builtin-browser],[^openai-browser] If it asks you to upgrade, skip this.

## Which plan has what

| On a free account | Claude | ChatGPT |
| --- | --- | --- |
| Chat | Yes | Yes |
| Work in your folders | No[^anthropic-desktop-tour] | Some[^openai-pricing] |
| The built-in browser | No[^anthropic-builtin-browser-plans] | OpenAI does not say[^openai-browser] |
| The coding tool (Claude Code or Codex) | No[^anthropic-install-desktop] | Some[^openai-pricing] |

Paid plans include more of these. We checked this table on October 28 and 29, 2026. Plans change often, so trust what your own app shows.

If your Claude message box still shows *Chat* and *Cowork*, your account has not moved to the new app yet. Choose *Cowork* for the folder and the browser.[^anthropic-get-started-tasks-plans]

If ChatGPT's Windows app asks you to upgrade, use chatgpt.com in your browser.[^openai-windows-app]

## Optional: the Claude app without a Claude plan

The Claude app can also run on a model from another company. [The appendix](appendix-the-claude-app-without-a-claude-plan.md) shows how, and what you give up.

[^anthropic-install-desktop]: Install Claude Desktop, Claude Help Center.
[^anthropic-pro-plan]: What is the Pro plan?, Claude Help Center.
[^anthropic-privacy]: How do I change my model improvement privacy settings?, Anthropic Privacy Center.
[^anthropic-memory]: Use Claude's chat search and memory to build on previous context, Claude Help Center.
[^anthropic-incognito]: Use incognito chats, Claude Help Center.
[^anthropic-one-claude]: Claude Cowork and chat are one Claude, Claude Help Center.
[^anthropic-get-started-tasks-plans]: Get started with Claude Cowork, Claude Help Center, accessed 31 October 2026.
[^anthropic-builtin-browser]: Use the built-in browser in Claude Cowork, Claude Help Center.
[^anthropic-builtin-browser-plans]: Use the built-in browser in Claude Cowork, Claude Help Center, accessed 31 October 2026.
[^anthropic-desktop-tour]: Navigating the Claude desktop app, Anthropic Academy.
[^openai-pricing]: Plans and Pricing, ChatGPT.
[^openai-macos-app]: Downloading the ChatGPT macOS app, OpenAI Help Center.
[^openai-windows-app]: Using the ChatGPT Windows app, OpenAI Help Center.
[^openai-data-controls]: Data controls in ChatGPT, OpenAI Help Center.
[^openai-memory]: Memory in ChatGPT, OpenAI Help Center.
[^openai-temporary]: Temporary chat in ChatGPT, OpenAI Help Center.
[^openai-work-start]: Get started with ChatGPT Work, ChatGPT Learn.
[^openai-desktop-app]: ChatGPT desktop app, ChatGPT Learn.
[^openai-permissions]: Permissions, ChatGPT Learn.
[^openai-browser]: Using the built-in browser in the ChatGPT desktop app, OpenAI Help Center.
[^openai-moving-desktop]: Moving to the new ChatGPT desktop app, OpenAI Help Center.


# Practice lab (/claude-and-chatgpt-2/new-way-of-working/lab)

---
type: Document
title: "Practice lab"
description: "Five short tasks on a free account: hand over a job, check a total yourself, see what permissions do, improve work in rounds, and try the same brief in ChatGPT."
status: stable
order: 0.16
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T08:18:15Z
chapter: "F00"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-05
generated:
  at: 2026-11-11T08:18:15Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Here are five short hands-on exercises, 10 to 20 minutes each, that you can do with a free account. Do them in order, because each one builds on the last.

The lab is a first taste. They use small files and short jobs. You will run the full Brightline payment run in Chapter 5, when you have learned to write a brief properly.

### Before you start

You need:

- **The Claude desktop app** with a free account. [Set up the apps](set-up-the-apps.md) shows you how to set it up.
- **A spreadsheet app,** such as Excel, Google Sheets or Numbers, for Task 2.
- **The lab files.** Download [brightline-lab-f00.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/brightline-lab-f00.zip) and unzip it. It holds two lab files and a short README:
  - `payment-policy-v3.md`: Brightline's six payment rules.
  - `office-orders.csv`: this week's office-supply orders.
- **The ChatGPT desktop app,** only for the optional parts of Task 4 and for Task 5.

Brightline is a made-up company, and the suppliers and numbers are invented. Still, do not paste real company data into this lab.

> [!NOTE]
> **If your app looks different**
>
> Apps change every month, and some features differ by plan. If a step does not match your screen, look for the closest option and carry on. If Claude cannot make a file on your plan, ask for the same result as a table in the reply. The idea behind each task still holds.

### Task 1. Ask a question, then hand over a job

**Goal:** see the difference between asking a question and handing over a whole job.
**Time:** 15 minutes.

1. In Claude, start a new conversation and ask a question:

   > What should a small company check before it pays a supplier's bill?

   Read the answer. It is useful, but it is general advice, and you would still have to turn it into something your team can use.

2. Start another new conversation. Attach `payment-policy-v3.md`, using the + or paperclip button next to the message box. Then hand over a job with a four-part brief. The words in parentheses label each part. You can leave them in:

   > Make a one-page checklist for the accounting team to use before each payment run. Done when each numbered rule appears once, with its number, and the last line, about who may send payments, appears as a note without a number (outcome). Work from the attached payment policy (context). Make it a document I can edit, one rule per line (format). Do not share it with anyone (constraints).

3. Wait for the document. Open it.

**Check your work.** Open the policy next to the checklist. Find rules 1 to 6 on the checklist, one by one. Does each rule appear once, with its number? Then look for the policy's last line, about who may send payments. Is it there, as a separate note without a number? This is the "Done when" sentence, and you are the one checking it.

**What to notice:**

- The question gave you an answer. The brief gave you finished work, built from *your* company's rules.
- The last line of the policy has no number, but it may be the most important line on the page. A good checklist keeps both the numbering and the meaning: it does not turn that line into a rule 7, and it does not leave it out. If your checklist gets either wrong, tell Claude exactly what to fix. You just gave feedback on evidence, not on a feeling.
- Close the Claude app and open it again. The conversation is still there, and so is the document if Claude made one, because Claude saves them to your account, not to the borrowed computer.

### Task 2. Check the work, not the claim

**Goal:** check a total yourself, with a program you trust, instead of trusting what the worker says.
**Time:** 15 minutes.

1. Start a new conversation in Claude. Attach `office-orders.csv`. Send this brief:

   > Work out the total cost of this week's office orders and the total for each supplier, doing the math with a small program, not in your head. Done when every row of the file is counted once and the supplier totals add up to the grand total (outcome). Use the attached file of this week's office orders (context). Give me a small table, one sentence with the grand total, and a short note on what you checked, what the checks found and anything you could not verify (format). Only report. Do not change the file (constraints).

2. Write down Claude's grand total. If Claude says it cannot run a program on your plan, carry on. Your spreadsheet is the check either way.

3. Now check it yourself. Open `office-orders.csv` in your spreadsheet app. In Google Sheets, choose File, then Import, then Upload.
   - In cell F1, the first empty column, type the heading `line total`.
   - In cell F2, multiply the quantity by the unit price: type `=D2*E2`. Copy the formula down to row 8, the last order. You can drag the small square at the corner of the cell.
   - Under the last line total, add them up with `=SUM(F2:F8)`.

4. Compare your total with Claude's.

**Check your work.** Your spreadsheet total and Claude's total should be exactly the same, to the cent. If they differ, find the row that causes it before you trust either number.

**What to notice:**

- Look at order O-206. It is a return, so its quantity is negative. A careless total adds it instead of taking it away. Did Claude handle it? Did Claude's note on its checks mention it?
- Claude said what it checked. That note helps, but it is still Claude's account of its own work. Your spreadsheet is the check. In this book, totals are always checked with a program you trust.

### Task 3. Words or permissions?

**Goal:** see that what stops a worker is a permission, not a sentence in the brief.
**Time:** 10 minutes.

Do this task only if no banking or payment app is connected to your Claude account and you have not turned on computer use.

1. In the Task 2 conversation, type:

   > Do not take any action. Just tell me: could you send a $50 payment to a supplier from this conversation? What would you need to be able to do it?

2. Read the reply. Claude will most likely say it cannot. Notice *why*: Claude has no access to any payment system. Your brief in Task 2 said "Only report", but that sentence is not what makes payment impossible. The missing access is.

3. Now look at your own settings. In Claude's settings, find the list of connected apps, called connectors. On a new account, no app is connected yet. Each app you connect adds something Claude is able to do.

4. Go back to your Task 1 conversation. If your plan shows a setting for how much Claude may do without asking, choose the option where it asks first (the tour calls it **Manual**). Then ask Claude to make one small change to the checklist, such as adding a title. Notice that it asks before it acts. If you see no such setting, your plan may not have it yet. Skip to the check.

**Check your work.** Write one sentence in your own words that explains the difference between "Only report" in a brief and having no payment connector.

**What to notice:** the brief tells the worker what it should do. Permissions decide what it is able to do. When the stakes are high, such as money, rely on permissions, not on words.

### Task 4. Set a goal and improve in rounds

**Goal:** try the method the Panaversity team uses for its own writing.
**Time:** 20 minutes.

1. Start a new conversation in Claude and type:

   > Write a short explanation, about 150 words, of what an "AI Worker platform" is, for a friend who has never used AI for work. Use only this text from *The AI Agent Factory* as your source. I will paste it below.

   Below it, in the same message, paste the text of the section "What has changed" from [the first page of this section](overview.md). Then send.

2. When the draft arrives, ask Claude to grade it:

   > Grade this draft out of 10 in three areas: accuracy, quality, and how easy it is for a beginner to understand. Give one reason for each grade.

3. Set the goal:

   > Our goal is 9.5 in each area. Accuracy means every fact can be found in the source I pasted. Improve the draft, grade it again, and repeat until it reaches 9.5 in each area, or until you have done three rounds. Show the grades after each round. At the end, list any problem you could not fix, even if the grade is below 9.5.

   The limit of three rounds keeps the task short and saves your plan's usage.

4. *Optional, if you have the ChatGPT app.* Paste both the final draft and the same source text into ChatGPT, and ask:

   > Below are a short explanation and the source it is based on. Review the explanation for a beginner. List any claim that the source does not support or that contradicts it. Then grade it out of 10 for accuracy, quality and ease of understanding, and list the three most useful changes.

   Paste ChatGPT's review back into the Claude conversation and ask Claude to use it to improve the draft.

5. Now do the last step yourself. Compare each sentence of the final draft with that text. Is every fact really there?

**Check your work.** You can name one change Claude made in the rounds, and one fact you checked against that text.

**What to notice:**

- Claude ran the rounds by itself once you gave it a goal. That goal works like a "Done when" sentence.
- The grades are a guide, not proof. A draft can score 9.5 and still contain a wrong fact. The person at the end, you, is the check.

### Task 5 (optional). The same brief in ChatGPT

**Goal:** see that one good brief works on both apps.
**Time:** 15 minutes.

1. In the ChatGPT desktop app, turn on **Work**, the switch above the message box. If you see no Work switch, your app may already have merged Chat and Work. Just send the brief.
2. Attach `payment-policy-v3.md` and send the same brief you used in Task 1, word for word.
3. Open the document ChatGPT makes.

**Check your work.** Apply the same "Done when" sentence: does every numbered rule appear once, with its number, and is the note about who may send payments there without a number? Compare the two checklists side by side.

**What to notice:** you did not rewrite the brief for ChatGPT. As [the tour](../tour/overview.md) shows, both vendors give the same advice: describe the outcome and how to check it, not the steps. To compare the two apps fairly, give them the same job, the same files, the same "Done when" sentence and the same limits, and check the results yourself. Chapter 5 does this with the full payment run.

### What you practiced

| Task | The idea from this section |
| --- | --- |
| 1 | An AI Worker does a whole job when you give it a four-part brief, and you check it against its "Done when" sentence |
| 2 | Check the work yourself, with a program you trust, not the worker's account of it |
| 3 | Words in a brief cannot block an action. Permissions can |
| 4 | Set a goal, improve in rounds, and keep a person as the final check |
| 5 | One brief works on both apps |

[The Five Horizons](../../five-horizons.md) comes next. It shows where this book is going, from one AI Worker to whole companies and countries built around AI.


# Appendix: the Claude app without a Claude plan (/claude-and-chatgpt-2/new-way-of-working/appendix-the-claude-app-without-a-claude-plan)

---
type: Document
title: "Appendix: the Claude app without a Claude plan"
description: "An optional page: how the Claude desktop app can run on a model from another company, what you give up, and the setup steps for OpenRouter, DeepSeek and Ollama, as checked on 29 October 2026."
status: stable
order: 0.165
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T08:18:37Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "No Claude plan" ]
last_verified: 2026-10-29
steps_run: [] # Still to run (the editor approved the page on 11 November 2026 with this open): each company's steps, once, by a person with their own key, on a computer that is not running an agent's session.
sources:
  - id: anthropic-3p-overview
    title: "Overview, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/overview
  - id: anthropic-3p-features
    title: "Features, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/feature-matrix
  - id: anthropic-3p-install
    title: "Installation and setup, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/installation
  - id: anthropic-3p-gateway
    title: "Deploy Claude Desktop on 3P with an LLM gateway (Claude documentation, verified 2026-10-28)"
    resource: https://claude.com/docs/third-party/claude-desktop/gateway
  - id: anthropic-3p-in-app
    title: "In-app configuration, Claude Desktop on third-party platforms (Claude documentation, verified 2026-10-29)"
    resource: https://claude.com/docs/third-party/claude-desktop/in-app-configuration
  - id: openrouter-claude-desktop
    title: "Claude Desktop integration (OpenRouter documentation, verified 2026-11-11)"
    resource: https://openrouter.ai/docs/cookbook/coding-agents/claude-desktop-integration
  - id: openrouter-providers
    title: "Provider selection (OpenRouter documentation, verified 2026-10-29)"
    resource: https://openrouter.ai/docs/guides/routing/provider-selection
  - id: deepseek-api-docs
    title: "Your first API call (DeepSeek API documentation, verified 2026-10-29)"
    resource: https://api-docs.deepseek.com/
  - id: deepseek-pricing
    title: "Models & Pricing (DeepSeek API documentation, verified 2026-10-29)"
    resource: https://api-docs.deepseek.com/quick_start/pricing
  - id: deepseek-anthropic-api
    title: "Anthropic API (DeepSeek API documentation, verified 2026-10-28)"
    resource: https://api-docs.deepseek.com/guides/anthropic_api/
  - id: ollama-claude-desktop
    title: "Use Ollama models in Claude on macOS (Ollama documentation, verified 2026-10-28)"
    resource: https://docs.ollama.com/integrations/claude-desktop
  - id: ollama-pricing
    title: "Pricing (Ollama, verified 2026-10-28)"
    resource: https://ollama.com/pricing
generated:
  at: 2026-11-11T08:18:37Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

You can skip this page. It is for readers who want the Claude app's folders, browser or Claude Code without paying for a Claude plan.

The Claude app can run on a model from another company. You then need no Claude plan, and you pay that company for what you use.[^anthropic-3p-install] Anthropic's list for this mode includes the folders, the built-in browser and Claude Code.[^anthropic-3p-features]

This page covers three companies, in alphabetical order.

| Company | What it is | What you need first |
| --- | --- | --- |
| DeepSeek | Makes its own models | An account, credit and an API key |
| Ollama | An app that runs a model on your own Mac | Ollama, on a Mac. A model on your own Mac costs nothing[^ollama-pricing] |
| OpenRouter | Passes your messages on to many companies' models | An account, credit and an API key |

An API key is a secret code that lets the Claude app use your account at that company.

> [!WARNING]
> Keep your API key private. Never paste it into a chat, a screenshot or a group message. Anyone who has it can spend your credit.

## What do you give up?

- **What you type goes to that company,** under its terms.[^anthropic-3p-overview] So the two choices you made in [Set up the apps](set-up-the-apps.md#step-2-make-two-choices-before-your-first-message) no longer cover it.
- **The app works on this computer only.** There is no claude.ai and no phone app with it, no sharing and no voice. Your chat history is saved on this computer only.[^anthropic-3p-features]
- **Some features may fail.** Anthropic built this mode for organizations, and describes it with Claude models.[^anthropic-3p-overview] DeepSeek does not support attached documents.[^deepseek-anthropic-api] So do the [practice lab](lab.md) on your free account.

## Set up DeepSeek or OpenRouter

**First, get your API key.**

- For DeepSeek, sign up on the [DeepSeek Platform](https://platform.deepseek.com/), and create a key on its [API keys page](https://platform.deepseek.com/api_keys).[^deepseek-api-docs] Top up your balance there. DeepSeek takes what you use from it, at the prices on its [pricing page](https://api-docs.deepseek.com/quick_start/pricing).[^deepseek-pricing]
- For OpenRouter, add credit at [openrouter.ai/credits](https://openrouter.ai/credits), then create a key at [openrouter.ai/keys](https://openrouter.ai/keys). OpenRouter says this setup is only guaranteed to work when Anthropic itself runs the model.[^openrouter-claude-desktop] So in its [privacy settings](https://openrouter.ai/settings/privacy), allow only Anthropic as a provider.[^openrouter-providers] You then use Claude's models, and you pay OpenRouter.

**Then connect the app.** The steps are the same on Windows and macOS.

1. Open the Claude app. Do not sign in.
2. Turn on Developer Mode. On a Mac, in the menu bar at the top of the screen, open *Help*, then *Troubleshooting*, and click *Enable Developer Mode*. On Windows, open the ☰ menu at the top left of the sign-in screen first, then do the same.[^anthropic-3p-in-app] A new menu called *Developer* appears.
3. Open *Developer*, and click *Configure Third-Party Inference*. A settings window opens on its Connection page.

   ![The Developer menu of the Claude app, as it looked on 29 October 2026. The menu's name, Developer, is boxed in the menu bar. In the open menu, the item Configure Third-Party Inference is boxed.](img/desktop-developer-menu.png)

4. In the first box on the Connection page, choose *Gateway*. A gateway is a service that passes your messages on to a model.
5. Under *Gateway credentials*, fill in these four boxes. Leave every other box as it is.[^anthropic-3p-gateway]

   | Box | DeepSeek[^deepseek-anthropic-api] | OpenRouter[^openrouter-claude-desktop] |
   | --- | --- | --- |
   | Credential kind | Static API key | Static API key |
   | Gateway base URL | `https://api.deepseek.com/anthropic` | `https://openrouter.ai/api` |
   | Gateway API key | Your key | Your key, which starts with `sk-or-v1-` |
   | Gateway auth scheme | x-api-key | Bearer |

   ![The Connection page of the Claude app's settings window, as it looked on 29 October 2026, part of the way through a DeepSeek setup. Above, three parts are boxed. The first box is set to Gateway. Credential kind is still empty. Gateway base URL holds https://api.deepseek.com/anthropic. Below is the bar at the bottom of the same window, where two parts are boxed, the message "Connection needs Credential kind" and the Apply Changes button.](img/desktop-gateway-settings.png)

6. Look at the bar at the bottom of the window. If it names a box, as in "Connection needs Credential kind", that box is still empty, so fill it in. Then click *Apply Changes*. The app restarts.[^anthropic-3p-in-app]
7. On the start screen, choose *Continue with Gateway*. If you do not see it, quit the app fully, not just its window, and open it again.[^openrouter-claude-desktop]
8. Pick a model from the model menu, and send a short message, such as "Hello".

With DeepSeek, the model menu may show Claude's names. Then Opus means DeepSeek V4 Pro, and Sonnet and Haiku mean DeepSeek Flash.[^deepseek-anthropic-api]

## Set up Ollama

Ollama connects the Claude app for you, on a Mac only. Ollama says Windows support is coming.[^ollama-claude-desktop]

1. [Install Ollama](https://ollama.com/download/), and download a model to your Mac. For a cloud model instead, one that runs on Ollama's computers, sign in to Ollama and turn on cloud models. Some cloud models need a paid Ollama plan.
2. In Ollama, open *Apps*, and choose *Connect Claude*.
3. Follow the prompts. They install Claude if you need it, and ask you to restart it.
4. To change the model later, open Ollama's *Settings*, then *Apps*, choose your models, and click *Restart Claude*.

## Check it, change it, or go back

- **To check it worked,** send one short message, then find its charge on the company's usage page. With a model on your own Mac there is no charge, so the reply is your check.
- **To change a setting,** such as a wrong key, you need the Developer menu back. It goes away when the app restarts into this mode. Turn on Developer Mode again, as in step 2, and this time the menu stays.[^anthropic-3p-in-app]
- **To go back to your Claude account,** choose the Anthropic sign-in on the start screen.[^anthropic-3p-install] With Ollama, disconnect Claude in Ollama's Apps, or quit Ollama.[^ollama-claude-desktop]

[^anthropic-3p-overview]: Overview, Claude Desktop on third-party platforms, Claude documentation.
[^anthropic-3p-features]: Features, Claude Desktop on third-party platforms, Claude documentation.
[^anthropic-3p-install]: Installation and setup, Claude Desktop on third-party platforms, Claude documentation.
[^anthropic-3p-gateway]: Deploy Claude Desktop on 3P with an LLM gateway, Claude documentation.
[^anthropic-3p-in-app]: In-app configuration, Claude Desktop on third-party platforms, Claude documentation.
[^openrouter-claude-desktop]: Claude Desktop integration, OpenRouter documentation.
[^openrouter-providers]: Provider selection, OpenRouter documentation.
[^deepseek-api-docs]: Your first API call, DeepSeek API documentation.
[^deepseek-pricing]: Models & Pricing, DeepSeek API documentation.
[^deepseek-anthropic-api]: Anthropic API, DeepSeek API documentation.
[^ollama-claude-desktop]: Use Ollama models in Claude on macOS, Ollama documentation.
[^ollama-pricing]: Pricing, Ollama.


# Check yourself (/claude-and-chatgpt-2/new-way-of-working/check-yourself)

---
type: Document
title: "Check yourself"
description: "Recall and practice for Claude and ChatGPT 2.0: the flashcards, and a final quiz round from all six lessons."
status: stable
order: 0.17
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-05T15:14:05Z
chapter: "F00"
part: Front
expert_status: required
concepts: [ "What changed", "Where work happens", "One job", "The two apps", "Team method", "Your responsibility" ]
chapter_quiz: true
last_verified: 2026-11-05
generated:
  at: 2026-11-05T15:14:05Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

Check what you remember from these pages. Answer each flashcard in your head, then turn it over and choose Got it or Missed it. Cards you do not know yet come back sooner. The quiz mixes the questions from these pages and asks 10 at a time.
