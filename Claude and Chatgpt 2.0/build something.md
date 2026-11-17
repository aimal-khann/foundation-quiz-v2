# Build Something (/claude-and-chatgpt-2/build-something/overview)

---
type: Document
title: "Build Something"
description: "The fifth section of Claude and ChatGPT 2.0. How to build with Claude's six artifact types, Docs, Slides, Sheets, Design, Data and Whiteboard, and with the ChatGPT tools that do the same jobs, before you use them in the cases."
status: stable
order: 0.45
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T15:26:22Z
chapter: "F00F"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "Artifacts", "Docs", "Slides", "Sheets", "Design", "Data", "Whiteboard" ]
last_verified: 2026-11-11
review_by: 2026-12-11
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-share
    title: "Share artifacts (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: claude-launch
    title: "Introducing Claude Whiteboards, Claude Sheets, and Claude Data (Anthropic, November 10, 2026)"
    resource: https://claude.com/resources/articles/sheets-whiteboards-data
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
generated:
  at: 2026-11-11T15:26:22Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*Six things you can build in Claude, and what ChatGPT offers*

## Where this section fits

The earlier sections showed that an AI Worker gives you finished work, not just an answer. This section shows you how to make that finished work yourself. It covers six kinds, in Claude and in ChatGPT. After this section come the case studies. In them you write, check and share finished work, such as a brief, a draft and a grading sheet. The habits on these pages are the ones the cases need, so do this section first.

> [!NOTE]
> **Words used in this section**
>
> - **Artifact:** a piece of finished work that Claude makes, such as a document or a slide deck. It opens next to your chat. You can change it, come back to it and share it.
> - **Export:** to save a copy as an ordinary file, such as a Word file.
> - **Beta:** a new feature that works but is not finished yet. It may change.
> - **Connected app:** another app you have linked to Claude, such as your calendar or email.
> - **Space and Work:** two parts of the ChatGPT app. **Space** keeps your shared pages and decks. **Work** is where ChatGPT does longer jobs for you.
> - **Plugin:** an add-on that lets ChatGPT do something new.
> - **Formula:** a rule in a spreadsheet cell that calculates something, such as a total.

## Use the desktop apps

This book works in the **Claude desktop app**, on a Mac or a Windows computer, and in the **ChatGPT desktop app** for the ChatGPT parts. [The two apps side by side](../new-way-of-working/the-two-apps.md) listed both under what you need to begin. Every step in this section is written for them.

- **Claude.** The same steps also work in a web browser, because Anthropic gives the web and the desktop app the same artifact tools.[^anthropic-artifacts] But only the desktop app can read a folder on your computer. On a phone, you can ask for a doc, a deck or a design in a chat and look at the result.
- **ChatGPT.** Use the new desktop app, the one with Chat, Work and Codex. Each page says where a tool differs on the desktop.

## Start here: the big idea

When Claude makes an artifact, it saves it in the **Artifacts** tab, in the menu on the left side of the Claude desktop app. It stays there, so you can find it again tomorrow.[^anthropic-artifacts] If you do not see the Artifacts tab, open Settings, then Capabilities, and turn on **Artifacts** and **Create and edit files**.[^anthropic-artifacts]

To start one, open the Artifacts tab. Under **Make something new**, you see one big button, called a **tile**, for each kind:

![Six things you can build. Six colored cards in two rows. Docs: a document people read and edit; in ChatGPT, Pages, in Space. Slides: a deck to present; in ChatGPT, Slides, in Space. Sheets: a shared table with formulas; in ChatGPT, inside Excel and Google Sheets. Design: something judged by how it looks; in ChatGPT, Sites, which are working web pages. Data: charts from your company's data; in ChatGPT, the @Data plugin in Work. Whiteboard: a board for thinking together; in ChatGPT, no built-in board yet. At the foot: build a draft with the AI, improve it together, check it before anyone sees it.](img/six-things-you-can-build.png)

Which tiles you see depends on your plan:[^anthropic-artifacts],[^claude-launch]

| Your Claude plan | What you can build |
| --- | --- |
| Free | Docs, Slides and Design |
| Any paid plan | All six. Sheets and Whiteboards are still in beta, and on Enterprise an owner turns them on |

In ChatGPT, most of these tools need a paid plan. Which plans differs from tool to tool, so each page says.[^openai-space]

One sentence holds the whole idea:

> **Pick the tool that fits the job. Make a draft with the AI. Improve it together. Check it before anyone else sees it.**

## Four habits for every kind

1. **Ask for the kind you need.** Say what you want, who it is for, and what to use. If you need an ordinary file, such as a Word file, make the artifact first, check it, and export it at the end. A file is only a copy: if you fix the artifact later, the file does not change.[^claude-code-artifacts]
2. **Improve it together.** Fix small things yourself. Ask the AI for big changes.
3. **Share it on purpose.** Only you can see a new artifact. You choose who can open it, and what they can do. On the Free plan, sharing may be limited, as the [Docs](docs.md) page explains.[^anthropic-share]
4. **Check it before anyone else sees it.** It looks finished, but it can still be wrong. Check the numbers, the names and the facts. Remove anything private. Ask yourself: would a reader understand it without my chat?

> [!WARNING]
> **Two people can see different data in the same artifact.** Some artifacts read your connected apps. When a colleague opens one, it reads the colleague's own apps, not yours. So each person sees only what they are allowed to see.[^anthropic-share] This protects only what an artifact reads live. Anything already copied into it, such as a number in a doc, everyone who can open it can read. The [Data](data.md) page explains the one exception. Also, open shared artifacts only from people you trust. A page can hide instructions that try to trick an AI, as [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) explained.

## Artifact, file, connected app or website?

Four words in this section sound alike, but they do different jobs. In the examples, Dave is Brightline's controller: the manager in charge of Brightline's money, who approves payments.

| You need | Use | Brightline example |
| --- | --- | --- |
| Work you and Claude keep improving, shared by a link | An **artifact** | The payment-run doc that Dave comments on |
| A fixed copy to send, print or keep | An **exported file** | A PDF of the version of the doc that Dave reviewed |
| Claude to read or change information in another app | A **connected app** | Claude reads this week's invoices from a Google Drive folder |
| A working web page that other people use | A **website**, such as a ChatGPT Site | A page where suppliers check when they will be paid. A real one needs a sign-in, so each supplier sees only its own payments |

A short example: on Thursday, Dave wants to comment on the payment run, so you share the **doc**. On Friday he approves it, so you export a **PDF** of the version he approved. The PDF is a fixed copy, and the doc can keep changing. The PDF does not prove the approval itself. That needs its own record, such as Dave's sign-off in the payment system.

## Build on what you already know

The earlier sections taught you the other parts of an AI Worker: the borrowed desk in the cloud, your own folders, connected apps, skills, projects and scheduled tasks. You do not leave them behind here. They make your artifacts better.

First, one link between them. A cloud job runs on a borrowed desk, and the desk is cleared when the job ends, as [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) showed. An artifact is kept by Anthropic, outside that desk, in your Artifacts tab.[^anthropic-artifacts],[^claude-code-artifacts] So **an artifact is one way finished work leaves the borrowed desk and stays.** A downloaded file, or a file saved to Google Drive, also stays.

![Build on what you already know. On the left, five earlier parts: your folders, read by the desktop app; connected apps, such as Google Drive; a project, your rules written once; a skill, your method; a scheduled task, which decides when the job runs. An arrow leads to a dashed box in the middle, Claude does the job: a cloud job runs on a borrowed desk, a temporary computer that reads, calculates and writes, and the desk is cleared when the job ends. An arrow leads to a box on the right, the artifact stays: a doc, deck, sheet, design, dashboard or board, kept in your Artifacts tab, outside the desk. You keep it, you check it, you share it. At the foot: the earlier parts decide what Claude can reach and when it works.](img/build-on-what-you-know.png)

Each of the next six pages adds one earlier part to its artifact:

| You learned | Add it, and | Practice it on |
| --- | --- | --- |
| **Projects** | You write your rules once, and Claude reads them in every chat in the project | [Docs](docs.md) |
| **Connected apps** | Claude reads an app while it builds. What it read is a snapshot of that moment | [Slides](slides.md) |
| **Your folders,** through the desktop app | Claude builds from files on your computer. The artifact holds a copy | [Sheets](sheets.md) |
| **Skills** | Claude can follow your method when a job matches the skill, and a design system keeps your look | [Design](design.md) |
| **Scheduled tasks** | A job updates a doc you already made, at a set time | [Data](data.md) |
| **Projects, again** | A plan on a board becomes jobs that run side by side | [Whiteboard](whiteboard.md) |

You find each one in a short **Combine it** part, just before the page's **Try it** task. They are optional: the Try it tasks and the final exercise work without them. Some need a paid plan or a connected app. ChatGPT has the same parts under similar names: projects, plugins, skills, scheduled tasks and your own files through its desktop app, as [ChatGPT 2.0](../tour/chatgpt.md) showed.

> **Rule to remember:** the earlier parts decide what Claude can reach and when it works. The artifact is what you keep, check and share.

Start with [Docs](docs.md). The last page, [One job, three deliverables](one-job-three-deliverables.md), puts everything together in one exercise, with an optional part that uses these earlier parts too.

[^anthropic-artifacts]: As verified on November 11, 2026. Anthropic says that on "Claude on the web and Claude Desktop" you can "create, edit, and share artifacts, and start from a template", and that on a phone you can ask for a design, deck or doc in any chat and view the result. Anthropic says artifacts need Create and edit files turned on, and in the app on November 11, 2026, the Artifacts switch said it is required for Create and edit files. On Team and Enterprise plans, an owner turns this on in the organization's settings. On Enterprise plans, Sheets and Whiteboards stay off until an owner turns them on. Some company plans also have Motion, for short animations, which this section does not cover. What are artifacts and how do I use them?, Anthropic.
[^anthropic-share]: As verified on November 11, 2026. Share artifacts, Anthropic.
[^claude-launch]: Sheets and Whiteboards arrived on November 10, 2026, when the older Dashboards tool was renamed Data. Introducing Claude Whiteboards, Claude Sheets, and Claude Data, Anthropic.
[^claude-code-artifacts]: As verified on November 11, 2026, Anthropic's guide to the Code tab also says that to get a file instead of a doc, you can name the format, such as .docx. It says artifact content "is stored on Anthropic-operated infrastructure". Share session output as artifacts, Anthropic.
[^openai-space]: Getting started with Space in ChatGPT, OpenAI.
    # Docs (/claude-and-chatgpt-2/build-something/docs)

---
type: Document
title: "Docs"
description: "How to build a document with Claude Docs: start one, edit it yourself or with Claude, ask Claude in a comment, share and export it, check it, and do the same job with pages in ChatGPT's Space."
status: stable
order: 0.451
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:53Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Docs" ]
last_verified: 2026-11-11
sources:
  - id: claude-docs
    title: "Get started with Claude Docs (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
  - id: claude-projects
    title: "What are projects? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/9517075-what-are-projects
  - id: claude-projects-rebuilt
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: openai-projects
    title: "Projects in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
generated:
  at: 2026-11-13T06:25:53Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A report sent around by email soon has many copies: "final", "final 2", "final final". Nobody knows which one is right. A shared document fixes this. There is one copy, and everyone works on it.

## What it is

**Claude Docs** is a document that you, your colleagues and Claude write together. Use it for a report, a plan or a letter. It is on every plan, including Free.[^claude-docs]

## Build one

In the Claude desktop app, ask for a doc in any chat. You can also pick the Docs tile in the Artifacts tab. Claude may ask you a few questions first. Then it writes a draft. It can use your files and your connected apps.[^claude-docs]

Here is an example from **Brightline**, the small company in this book. Every Friday its team decides which bills, called **invoices**, to pay that week. The book calls this the **payment run**. You met it in [One job, start to finish](../new-way-of-working/one-job.md).

> Write a one-page doc for the manager who approves this Friday's payment run. Explain each invoice marked "ask" and why. Use only the invoice list, notes and rules I pasted below.

You can copy a sample invoice list, notes and rules from [One job, three deliverables](one-job-three-deliverables.md).

## Change it

There are four ways. Pick the one that fits the change:

- **Type in it yourself.** Best for a small fix, like a wrong date.
- **Ask Claude in the chat.** Best for a big change. Claude tells you what it changed.
- **Select some words, then click Edit with Claude.** Claude changes only those words.[^anthropic-artifacts]
- **Write a comment that mentions @Claude.** Claude answers, makes the change and says why.[^claude-docs]

The doc shows who made each change: a person or Claude.[^claude-docs]

## Share it and save a copy

Only you can see a new doc. To let others in, click **Share**. On the Free plan, you may not be able to share at all, or only by link. Check what your Share button shows before you promise anyone a link.[^claude-docs]

- A **Viewer** can read it.
- A **Commenter** can also comment on it.
- An **Editor** can also change it and export it.[^claude-docs]
- Only **you, the owner,** can rename or delete it. Deleting is forever. There is no trash.

Anyone who opens your doc needs a Claude account. To save a copy, export it as a Word, PDF or Markdown file, or send it to Google Docs. Claude can also turn a doc into slides.[^claude-docs]

## Check it before you share it

- **Charts do not update by themselves.** Ask Claude to get the latest numbers first.[^claude-docs]
- **Check each fact** against what you gave Claude.
- **Read it as a stranger would.** Does it make sense without your chat?

## In ChatGPT: pages

ChatGPT has **pages**. A page is a document, like a Claude doc. Pages live in **Space**, ChatGPT's shared area for your work. You make and change them in the ChatGPT desktop app, or on the web.[^openai-space]

1. **Make one.** Ask, for example: "Create a page from this conversation with the goals, decisions and next steps."
2. **Change it.** Type in it yourself, or ask ChatGPT to change one part.
3. **Share it.** Click **Share**. Choose who can view it and who can edit it. Editors can work on it at the same time.

Space needs the Pro, Business or Enterprise plan. It is not on Free or Plus. On a phone, you can read pages but not change them.[^openai-space]

> [!WARNING]
> **What you copy onto a page, everyone can read.** Imagine ChatGPT copies a number from a private file onto a shared page. Now everyone who can read the page can read that number, even if they cannot open the file.[^openai-space] Claude docs work the same way. Check what was copied in before you share.

## Combine it: write the rules once, in a project

In the example above, you paste the rules into the chat every time. A **project** saves you that work. A project keeps files and **instructions**: text that Claude reads in every chat in that project.[^claude-projects]

Claude has two kinds of project. The **classic project**, on every plan, keeps chats, files and instructions together: the Tour describes it as a folder of conversations. The **rebuilt project**, in beta on Pro, Max and Ultra, is the one you met in [Projects: one team lead, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md). Use a classic project here. A rebuilt project is built for bigger jobs, and it may hand back a file in its Library instead of a doc.

1. Make a project called "Brightline payment run".
2. Put the rules and the two notes from [One job, three deliverables](one-job-three-deliverables.md) in its instructions.
3. Start a new chat in the project. Paste only the invoice list, and ask for the doc for the manager. You do not paste the rules again.

The Free plan allows up to five classic projects.[^claude-projects] A rebuilt project also sends its instructions to every new thread.[^claude-projects-rebuilt] Still check the doc: instructions guide Claude, but they are not a lock.

**In ChatGPT:** projects work the same way. A project holds chats, files and instructions, and it is on every plan, including Free.[^openai-projects]

## Try it (10 minutes, any plan)

1. Ask Claude for a one-page plan for a small event. Ask for a table of four costs and a total.
2. Fix one word yourself.
3. Select a paragraph and use **Edit with Claude** to make it shorter.
4. Add a comment that says "@Claude add a checklist".
5. Add up the costs yourself. Does your total match the doc's total?

[^claude-docs]: As verified on November 11, 2026. Anthropic's pages differ on sharing. The Docs page says the Free plan can share a doc with anyone who has the link. The general sharing page says new artifacts cannot be shared on Free. Check what your own Share button offers. The Docs page also says "There's no comment-only access level yet", but in the Claude app on November 11, 2026, a doc's Share menu offered Editor, Commenter and Viewer. If yours has no Commenter, someone who must comment needs Editor. Get started with Claude Docs, Anthropic.
[^anthropic-artifacts]: What are artifacts and how do I use them?, Anthropic.
[^openai-space]: As verified on November 11, 2026, OpenAI says you can create and edit content in Space "with ChatGPT Pro, Business, or Enterprise", and that "Mobile does not support editing pages." Getting started with Space in ChatGPT, OpenAI.
[^claude-projects]: As verified on November 11, 2026. Anthropic says projects "are available to all users, including those with free Claude accounts", that free users can make at most five, and that each project can have its own instructions and files. What are projects?, Anthropic.
[^claude-projects-rebuilt]: As verified on November 11, 2026. Anthropic says "every new thread starts with the project's instructions". The rebuilt projects are in beta on Pro, Max and Ultra plans and are rolling out gradually. The plan list was checked again on November 13, 2026. Anthropic's projects article says select Pro, Max and Ultra subscribers. Let Claude coordinate ongoing work with Projects, Anthropic.
[^openai-projects]: As verified on November 11, 2026, OpenAI says project sharing "is available on ChatGPT Free, Go, Plus, Pro, Business, Enterprise, and Edu", and that "Project instructions apply only within that project". Projects in ChatGPT, OpenAI.
# Slides (/claude-and-chatgpt-2/build-something/slides)

---
type: Document
title: "Slides"
description: "How to build a deck with Claude Slides: start from notes or a doc, edit slides directly or with Claude, present from Claude, share and export it, check it, and do the same job with ChatGPT Slides in Space."
status: stable
order: 0.452
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T15:26:22Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Slides" ]
last_verified: 2026-11-11
sources:
  - id: anthropic-artifacts
    title: "What are artifacts and how do I use them? (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: anthropic-share
    title: "Share artifacts (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: openai-slides
    title: "Creating and collaborating on slides in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001605-creating-and-collaborating-on-slides-in-chatgpt
  - id: openai-space-sharing
    title: "Collaborate in Space (OpenAI, verified 2026-11-05)"
    resource: https://learn.chatgpt.com/docs/space/collaboration
generated:
  at: 2026-11-11T15:26:22Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A good talk has a few clear slides. It does not show every fact you know. Each slide makes one point. The details stay in the report.

## What it is

**Claude Slides** makes a **deck**: a set of slides for a talk. It can start from your notes, a report or your chat. You can change the slides yourself, present them from Claude, and save a copy as a file. It is on every plan, including Free.[^anthropic-artifacts]

## Build one

In the Claude desktop app, ask for a deck in any chat, or pick the Slides tile in the Artifacts tab. Say what it is about, who will watch it, and how many slides you want. If you already have a doc, ask Claude to turn it into a deck. For Brightline:

> Turn this Friday's payment run into a three-slide deck for the manager: the total, the invoices marked "ask", and what the manager must decide. One idea per slide.

People who use the **Code tab**, the part of the Claude app for longer work, can also type `/slides` (a short command that starts with a slash) and a short description.[^claude-code-artifacts]

## Change it and present it

- **Fix a slide yourself:** change a word, move a box, correct a number.
- **Ask Claude for big changes,** such as "Make slide 2 a chart" or "Cut it to five slides".
- **Present it from Claude,** in full screen.[^anthropic-artifacts]

## Share it and save a copy

Only you can see a new deck. Click **Share** and pick a level for each person: **Viewer** (can read it), **Commenter** (can also comment) or **Editor** (can also change it). The buttons say "Can view", "Commenter" and "Can edit".[^anthropic-share] To save a copy, export it as a PowerPoint or PDF file, or open it in Google Slides.[^anthropic-artifacts] Do this at the end. The file does not change when you fix the deck later.

## Check it before you present it

This picture uses Brightline's full rules from [One job, start to finish](../new-way-of-working/one-job.md). The exercise at the end of this section uses a simpler set.

![One idea per slide. Left, in the doc: a paragraph says every invoice due in the next seven days is marked pay, hold or ask, with the rule from version 3 of the payment policy; invoices from a new supplier, invoices large enough to need a manager, and invoices with changed bank details are marked ask; and the total matches the checking program's total. An arrow points right to the slide, titled "Some invoices need your decision", with three short points: each invoice is pay, hold or ask; ask means a new supplier, a large invoice or new bank details; the total matches the checking program. At the foot: check every point on the slide against the doc it came from.](img/one-idea-per-slide.png)

- **Check every number.** A slide shows a number big, without the working behind it. Check each one against where it came from. Do not round it: a rounded number can hide a mistake.
- **One idea per slide.** If a slide needs a paragraph, that paragraph belongs in the doc.
- **Practice once.** Click through it in full screen, as your audience will see it.

## In ChatGPT: Slides

ChatGPT also has **Slides**. Its decks live in **Space**, ChatGPT's shared area for your work.[^openai-slides]

1. **Make one.** In the ChatGPT desktop app, open **Work** and ask ChatGPT to "create ChatGPT slides". Say the topic, the audience and the material to use.
2. **Change it.** Edit text, pictures and charts on the slide yourself, or ask ChatGPT. Teammates can work on it at the same time.
3. **Present or save it.** Present from ChatGPT. On the web, you can also export it to PowerPoint, PDF or Google Slides.

ChatGPT Slides is rolling out to accounts that have Space, on the Pro, Business and Enterprise plans, so your account may not have it yet.[^openai-slides]

**On a Windows computer,** check what you get. On Windows 10, and on some Windows 11 computers, the desktop app makes a PowerPoint file instead of a shared deck. If that happens, make the deck in ChatGPT on the web.[^openai-slides]

> [!NOTE]
> **Ask for "slides", not "a PowerPoint".** If you ask ChatGPT for a PowerPoint file, you get a file, not a deck you can keep working on.[^openai-slides] Also, anyone who can open a space can open the decks in it.[^openai-space-sharing]

## Combine it: build from a connected app

You met connected apps in [Claude 2.0: conversations and artifacts](../tour/claude-conversations.md), which calls them connectors. While Claude builds a deck, it can read a connected app, such as a Google Drive folder of invoices. Anthropic's pages do not say whether a deck reads the app again later, so treat the deck as a **snapshot**: it shows what Claude read at that moment. It is not like the live artifacts in the overview's warning, which read an app each time they open. If someone changes the files in Drive later, assume the deck still shows the old numbers.[^claude-code-artifacts]

So make the snapshot easy to see:

> Read this week's invoices from my Invoices folder in Google Drive. Make a three-slide deck for the manager. On the first slide, write the date and time you read the folder.

On the day you present, ask Claude to read the folder again and update the deck. Then check the numbers again. This needs Google Drive connected to Claude first, in Settings, under Connectors.

**In ChatGPT:** ChatGPT reads your apps through **plugins**, as [ChatGPT 2.0](../tour/chatgpt.md) showed. Keep the same habit: before you present, ask for a fresh read and check the numbers.

## Try it (10 minutes, any plan)

1. Take the doc from the [Docs](docs.md) page, or any short report.
2. Ask Claude to turn it into a four-slide deck.
3. Fix one slide yourself. Ask Claude to turn one list into a chart.
4. Present it in full screen. Which slide would you cut?

[^anthropic-artifacts]: As verified on November 11, 2026. In the presenter, F shows full screen and the arrow keys move between slides. What are artifacts and how do I use them?, Anthropic.
[^anthropic-share]: As verified on November 11, 2026. Anthropic's pages differ on sharing from the Free plan, as the [Docs](docs.md) page notes. Share artifacts, Anthropic.
[^claude-code-artifacts]: `/slides` needs Claude Code version 2.1.265 or later. Anthropic says Claude builds an artifact from what the session can reach, "including your codebase and data it pulls through your connected tools". It describes a page that pulls fresh data each time someone opens it as different from "a snapshot from the session that built it". That guide is about artifacts made in the Code tab. It does not describe Slides decks, so test it once with your own deck. Share session output as artifacts, Anthropic.
[^openai-slides]: As verified on November 11, 2026, OpenAI says Slides "is available on ChatGPT Pro, Business, and Enterprise plans with Space access", and that it is still rolling out. It says that on Windows devices without a required component, slide creation in the desktop app uses PowerPoint (.pptx) files "instead of collaborative Slides", that Windows 10 does not support the component, and that you can use cloud mode or ChatGPT on the web instead. It describes export to PowerPoint, PDF and Google Slides on the web. Creating and collaborating on slides in ChatGPT, OpenAI.
[^openai-space-sharing]: *(Reported.)* Removing one person's invitation to a deck does not stop them if they can still open its space. Collaborate in Space, OpenAI.
# Sheets (/claude-and-chatgpt-2/build-something/sheets)

---
type: Document
title: "Sheets"
description: "How to build a spreadsheet with Claude Sheets: start a tracker or budget, watch each change Claude makes, undo with version history, share and export it, know its beta limits, and do the same job with ChatGPT inside Excel and Google Sheets."
status: stable
order: 0.453
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T15:26:22Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Sheets" ]
last_verified: 2026-11-11
sources:
  - id: claude-sheets
    title: "Get started with Claude Sheets (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: openai-space
    title: "Getting started with Space in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt
  - id: openai-spreadsheets
    title: "ChatGPT for Excel and Google Sheets (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets
generated:
  at: 2026-11-11T15:26:22Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A shopping list on paper is fine for one person. But when five people share a budget, they need one table that everyone can see. And the totals should add up by themselves. That table is a **spreadsheet**.

> [!NOTE]
> **Spreadsheet words**
>
> - **Cell:** one box in the table.
> - **Formula:** a rule in a cell that calculates something, such as a total.
> - **Tab:** one page inside a spreadsheet. A spreadsheet can have several tabs.
> - **Dropdown:** a cell where you pick from a short list, such as pay, hold or ask.

## What it is

**Claude Sheets** is a spreadsheet inside Claude. You, your team and Claude can all change the same cells. It is new and in beta, so it has only the basic features for now. You need a paid plan.[^claude-sheets]

## Build one

In the Claude desktop app, ask for a sheet in any chat, or pick the **Sheets** tile in the Artifacts tab. If you already have numbers, give them to Claude. You can paste them in, or bring in a file from Excel or Google Sheets.[^claude-sheets] This sample uses only pay and ask, like the exercise at the end of this section. For Brightline:

> Make a sheet of the invoices I pasted below, one row each: supplier, invoice, amount, and a dropdown for the decision (pay or ask). Add a total. Add a second tab with the total of the invoices marked pay.

You can copy a sample invoice list from [One job, three deliverables](one-job-three-deliverables.md).

## Change it safely

Claude can add tabs, formulas (including formulas that work across tabs), dropdowns, checkboxes and charts. You can also type in any cell yourself, or select some cells and ask Claude about them.[^claude-sheets]

Two features keep your work safe:[^claude-sheets]

- **You can see each change.** When Claude changes a cell, the cell gets an outline, so you can see what changed.
- **You can go back.** **Version history** lists earlier versions, and you can restore one. But be careful: restoring an old version also removes every change made after it.

![Going back with version history. A timeline of four versions of the invoice sheet. Version 1, by you: 15 invoices, one row each (Brightline's full week, from One job, start to finish). Version 2, by Claude: adds totals and a dropdown. Version 3, by Claude: adds a second tab. Version 4, by you: fixes a supplier name. A red arrow goes from version 4 back to version 2, labeled restore version 2. Versions 1 and 2 are kept. Versions 3 and 4 are marked removed by the restore, including your own fix. At the foot: before you restore, note any good edits you want to keep.](img/going-back-with-version-history.png)

## Share it and save a copy

Only you can see a new sheet. Click **Share** to work on it with others. To save a copy, export it as an Excel file (.xlsx) or a CSV file (a simple table file that most apps can open). On a phone, you can only read it.[^claude-sheets]

## What it cannot do yet

Claude Sheets is for simple sheets. It cannot yet make **pivot tables** (summary tables that group your rows), and it has no macros (small programs that do steps for you) or PDF export. It cannot read live data from your other apps.[^claude-sheets] For a big spreadsheet you already keep in Excel or Google Sheets, Anthropic suggests **Claude for Excel** or **Claude for Google Workspace** instead, which put Claude inside those apps.

## Check it before you share it

- **Click a total and read its formula.** Does it add up every row?
- **Add a new row.** Does the total change to include it? A formula that stops at the old last row is a common mistake.
- **Type a wrong amount on purpose,** such as 10 times too big. The total should go up by exactly as much as that cell went up. If the total does not change, the formula leaves that row out. Then put the right amount back.
- **Work out one row by hand,** with a calculator.
- **Compare with a number you trust.** At Brightline, the sheet's total must match the total from the team's **checking program**, a program that adds up the invoices to the cent. In the exercise, use your own calculator total.

## In ChatGPT: inside Excel and Google Sheets

ChatGPT does this differently. It does not keep a spreadsheet inside ChatGPT. Instead, **ChatGPT for Excel and Google Sheets** opens ChatGPT in a side panel inside your own spreadsheet.[^openai-spreadsheets]

1. **Add it.** In Excel, go to **Home**, then **Add-ins**, and search for ChatGPT. In Google Sheets, install it from Google's add-on store.
2. **Use it.** Ask it to build, change or explain your spreadsheet.
3. **Ask your company first.** At work, your company's IT team (the people who look after computers) may need to turn it on.

It is on every ChatGPT plan, including Free.[^openai-spreadsheets]

OpenAI has said ChatGPT will get its own Sheets too. When this page was checked, it was still "coming soon".[^openai-space]

## Combine it: build from a folder on your computer

Through the Claude desktop app, Claude can read the files in a folder on your computer, once you allow it to use that folder. On Claude, this needs a paid plan, as [Set up the apps](../new-way-of-working/set-up-the-apps.md) says. You met this in [Claude 2.0: conversations and artifacts](../tour/claude-conversations.md). So you can build a sheet from a file you already have:

> Read invoices.csv in my Invoices folder. Make a sheet from it, one row per invoice, with a total.

Two things to know:

- **The sheet holds a copy.** A sheet cannot pull live data from connected apps (see **What it cannot do yet**).[^claude-sheets] Anthropic does not say whether it watches a file on your computer, so treat it as a copy: assume it does not. If the file changes, the sheet stays the same until you ask Claude to update it from the file. Then check the total again.
- **The app must be open.** Claude reads your folders only while the desktop app is open on that computer. A job on the borrowed desk in the cloud cannot reach them, as [Where the work happens](../new-way-of-working/where-the-work-happens.md) explained.

![A sheet holds a copy of your file, in three steps. Step 1, Claude builds the sheet: the file invoices.csv says one invoice is $100.00, and the sheet in Claude shows a total of all invoices of $600.00. The sheet matches the file. Step 2, the file changes: the file now says $110.00, but nothing passes to the sheet, which still shows the old total, $600.00. Step 3, you ask Claude to update it: the file says $110.00 and the sheet now shows $610.00. The total goes up by exactly $10.00. At the foot: after every update, check the total again.](img/a-sheet-holds-a-copy.png)

**In ChatGPT:** ChatGPT for Excel and Google Sheets works inside your own spreadsheet file. So there you change the file itself, not a copy.

## Try it (10 minutes)

**Paid plan:** Ask Claude for a budget sheet: six costs, a category for each, and a total for each category on a second tab. Watch the outlines appear as Claude works. Then change one cost yourself. Does that category's total change?

**Free plan:** Ask Claude for the same budget as a table in a doc. Then add up each category yourself.

[^claude-sheets]: As verified on November 11, 2026. A sheet holds up to 100,000 cells. Some company plans need an owner to turn Sheets on first. Anthropic names Claude for Excel and Claude for Google Workspace as the tools for files you already have. Get started with Claude Sheets, Anthropic.
[^openai-space]: As verified on November 11, 2026, OpenAI says "Sheets are coming soon." Getting started with Space in ChatGPT, OpenAI.
[^openai-spreadsheets]: As verified on November 11, 2026, OpenAI says the tool "is available globally to Business, Enterprise, Edu, and K-12 users, and to ChatGPT Free, Go, Pro, and Plus users". It also says Codex, in the ChatGPT desktop app, can work on a workbook you have open in Microsoft Excel through the same add-in. ChatGPT for Excel and Google Sheets, OpenAI.
# Design (/claude-and-chatgpt-2/build-something/design)

---
type: Document
title: "Design"
description: "How to build visual work with Claude Design: mockups, prototypes, one-pagers and landing pages on a canvas of artboards, edited by chat, comment or hand, in your brand, then exported or handed to other tools, and how ChatGPT Sites does a similar job."
status: stable
order: 0.454
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T15:26:22Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Design" ]
last_verified: 2026-11-11
sources:
  - id: claude-design
    title: "Get started with Claude Design (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/14604416-get-started-with-claude-design
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: claude-skills
    title: "How to create custom skills (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: claude-skill-conversation
    title: "How to create a skill with Claude through conversation (Anthropic, verified 2026-11-11)"
    resource: https://academy.claude.com/tutorials/how-to-create-a-skill-with-claude-through-conversation
  - id: openai-sites
    title: "Creating and using ChatGPT Sites (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites
generated:
  at: 2026-11-11T15:26:22Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** You judge a poster by looking at it, not by reading about it. Design work is like that. You need to see it, point at what is wrong, and move things around.

## What it is

**Claude Design** makes things people look at: posters, one-page handouts, **mockups** (pictures of how a screen or web page will look) and clickable **prototypes** (models you click through to test an idea). It is on every plan, including Free.[^claude-design]

A design has three parts:[^claude-design]

- The **canvas** is the whole work area.
- An **artboard** is one screen, page or poster on the canvas. A canvas can hold several.
- **Layers** are the parts on an artboard, such as a title, a picture or a box.

## Build one

In the Claude desktop app, ask for a design in any chat, or pick the Design tile in the Artifacts tab. Help Claude with two things:[^claude-design]

- **Your brand.** If your company has saved its colors and fonts (styles of letters) in Claude, Claude uses them by itself. This saved style is called a **design system**.
- **Examples.** Add screenshots, pictures or old slides that show what you like.

For Brightline:

> Design a printable one-page guide for Brightline's suppliers: how to send an invoice, what it must include, and when they will be paid. Make two versions: one plain, one with a simple diagram.

People who use the **Code tab** can also type `/design` and a short description.[^claude-code-artifacts]

## Change it

There are three ways. Match the way to the size of the change:[^claude-design]

- **Chat** for big changes, such as a new layout.
- **A comment** for one part. Click the part on the canvas and say what to change.
- **Do it yourself** for quick fixes. Drag, resize and line things up.

![A design: canvas, artboards and layers. Left, a canvas holds two artboards of the supplier guide, one plain and one with a diagram. Each artboard holds layers: a text layer for the title and a text layer for the steps. The plain guide also has a shape layer, a box. The other has an image layer, the diagram. Right, three ways to edit: chat for big changes such as a new layout, a comment for one part, and doing it yourself for quick fixes such as dragging and resizing. At the foot: an artboard is one screen, page or poster, and layers are the parts on it.](img/canvas-artboards-and-layers.png)

## Share it and save a copy

Only you can see a new design. Click **Share** and choose whether each person can view it, comment on it or change it. To save a copy, export it as a PDF or PowerPoint file, among others. You can also send it to other design apps.[^claude-design]

Three things to know, because Design is still growing:[^claude-design]

- **It does not keep old versions yet.** Before a big change, save a copy as a PDF, so you can see how it looked. You cannot load the PDF back into Claude Design, so to go back you must redo the changes.
- **Two people editing at once may not work well.** Take turns.
- **A comment sometimes does not show.** If Claude seems to miss it, type the request in the chat.

## Check it before you share it

- **Look at it at its real size.** Text that looks fine on screen may be too small on paper.
- **Read every word.** In a picture, it is easy to miss a wrong date or price.
- **Check the colors and fonts.** Are they really your company's?

## In ChatGPT: Sites

OpenAI's help pages do not mention a design canvas like this one. Its closest tool is **Sites**, but it makes something different:[^openai-sites]

- **A Claude design shows how something should look.** You use it to look, discuss and decide. Even a clickable prototype, or a design exported as a web page, is a model. It does not save what people type or connect to your company's systems.
- **A ChatGPT Site is a working web page.** People use it: they click, fill in forms and see live information.

So use a design to agree how something should look. Use a site when people need to use it.

1. **Make one.** In the ChatGPT desktop app, choose **ChatGPT**, then **Work**. Describe the web page you want. Use the word "website". ChatGPT shows you a private preview.
2. **Change it.** Ask for changes. Check the new preview each time.
3. **Publish it carefully.** When you publish (the button says **Deploy**), people can see the change right away. So save a version first, check it, and only then publish. Remove anything private before you share.

Sites is on ChatGPT's Plus, Pro, Business and Enterprise plans. It is not in the older desktop app, now called ChatGPT Classic.[^openai-sites]

## Combine it: save your method as a skill

A design system saves how your work **looks**. A **skill** saves how you **do** a job: the steps and rules for Claude to follow. You met skills in [Claude 2.0: conversations and artifacts](../tour/claude-conversations.md).

Take Brightline's supplier guides. The colors and fonts come from the design system. The rules are a skill, for example:

> Every supplier guide gives the payment day, says how to send an invoice and lists what an invoice must include. It never shows a bank account number.

To make the skill, start a chat and say you want a skill for supplier guides. Claude asks about your steps, then writes the skill. Save it and turn it on in Settings. After that, Claude reads the skill's name and description, and uses the skill when a job matches it.[^claude-skill-conversation] Skills are on every plan, when code execution is turned on.[^claude-skills]

Still read the first design made with the skill. Anthropic's Design page does not mention skills, and a skill is a written method, not a check. Look for the payment day, and make sure there is no bank account number.

**In ChatGPT:** skills work in a similar way. You call one by typing @ and its name, as [ChatGPT 2.0](../tour/chatgpt.md) showed.

## Try it (10 minutes, any plan)

1. Ask Claude Design for a poster for an event, in two versions.
2. Fix one thing by dragging it. Fix one thing with a comment. Fix one thing through the chat.
3. Which way was fastest for each fix?
4. Export your favorite as a PDF.

[^claude-design]: As verified on November 11, 2026. Export formats are .zip, PDF, PowerPoint, Google Slides and web page (HTML), and Claude can send a design to tools such as Canva or Miro. The old standalone site, claude.ai/design, closes on December 14, 2026. Get started with Claude Design, Anthropic.
[^claude-code-artifacts]: Share session output as artifacts, Anthropic.
[^openai-sites]: As verified on November 11, 2026, OpenAI says Sites "is available to ChatGPT Plus and Pro accounts, as well as Business and Enterprise workspaces", that deploying a change updates the live Site, so you save a version and deploy it after you review it, and that "Sites is not available in the ChatGPT Classic app." Building or editing a Site counts toward your Codex usage. Creating and using ChatGPT Sites, OpenAI.
[^claude-skill-conversation]: As verified on November 11, 2026. Anthropic's tutorial says to describe the skill in a new chat, answer Claude's questions, save the skill and turn it on under Settings, Capabilities, Skills. Claude reads each skill's name and description to decide when to use it. How to create a skill with Claude through conversation, Anthropic.
[^claude-skills]: As verified on November 11, 2026. Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". How to create custom skills, Anthropic.
# Data (/claude-and-chatgpt-2/build-something/data)

---
type: Document
title: "Data"
description: "How to build with Claude Data: connect a data source, ask a question in plain words, get a dashboard whose every chart shows its query and refresh time, choose carefully how to share it, and do the same job with the Data plugin in ChatGPT Work."
status: stable
order: 0.455
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T07:50:33Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Data" ]
last_verified: 2026-11-11
sources:
  - id: claude-data
    title: "Get started with Claude Data (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/17454700-get-started-with-claude-data
  - id: anthropic-share
    title: "Share artifacts (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/9547008-share-artifacts
  - id: claude-routines
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/routines
  - id: claude-code-artifacts
    title: "Share session output as artifacts (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: openai-scheduled-tasks
    title: "Scheduled tasks in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
  - id: openai-data
    title: "Using the Data plugin in ChatGPT Work and Codex (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001518-using-the-data-plugin-in-chatgpt-work-and-codex
generated:
  at: 2026-11-13T07:50:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A car's dashboard shows a few numbers you need right now, such as your speed. The numbers change as you drive. A business dashboard does the same. It shows a few important numbers, and they stay up to date.

> [!NOTE]
> **Data words**
>
> - **Dashboard:** a page of charts and numbers about a business.
> - **Data warehouse:** the big store where a company keeps its records, such as sales and payments.
> - **Query:** an exact question sent to the warehouse. It says what to count, and for which dates.

## What it is

**Claude Data** turns your questions about company data into dashboards and short reports. It used to be called Claude Dashboards. You need a paid plan, and your company's data must be connected to Claude first.[^claude-data]

## Build one

1. **Connect your data.** This is usually your company's data warehouse, such as Snowflake. Your company's IT team may need to help.
2. **Ask a question in plain words.** In the Claude desktop app, ask in any chat, or pick the **Data** tile in the Artifacts tab.[^claude-data]

For example, if a company kept its paid bills in a warehouse:

> Build a dashboard of payments to suppliers over the last six months: the total paid each week, the ten biggest suppliers, and how many bills were paid late.

## How to trust a number

This is the most important part of this page.

Claude writes a query for each chart. **Each chart shows its query, and when its data was last updated.** If the query counts the wrong thing, ask Claude to change it.[^claude-data]

You do not need to read the query yourself. Ask Claude: "Explain this query in plain words." Then check three things:

1. **What is counted?**
2. **Which dates?**
3. **What is left out?**

For example, "paid late" means nothing until you know what "late" means in the query.

A chart can look right and still be wrong. So before you use a number, **reconcile** it: check it against a number you already trust. For example, a chart says Brightline paid $12,906.40 in one week:

1. **Find the source.** Ask Claude which records the number came from.
2. **Work it out another way.** Add up those records yourself, or compare with the payment report your team already uses.
3. **Explain any difference.** If the two numbers differ, find out why before you use either one.

Your company's data team can also mark some queries as approved. These are called **certified queries**, and they are in beta. A chart that uses one shows a small badge. If anyone changes a certified query, it loses its certification and the badge.[^claude-data]

## Share it: whose data do people see?

Only you can see a new dashboard. Before you click **Share**, choose one of two ways.[^claude-data],[^anthropic-share] With **normal sharing**, each person sees only the data they are allowed to see. With **live sharing**, the people you share with see *your* results for this dashboard's charts, even data they could not see themselves:

![Two ways to share a Data dashboard. Left, normal sharing, the default: each viewer's own connection loads the data, a viewer without access sees an error in that part, and the risk is little, because people see only what they could see anyway. Right, live sharing, in beta: your connection loads the data, a viewer without access sees your results, and the risk is that others see your data, though only in this dashboard's charts. At the foot: live sharing lends your access, so check every chart before you turn it on.](img/two-ways-to-share-a-dashboard.png)

Live sharing is in beta, and it is limited: people see only the answers to this dashboard's own queries. Only people who can edit the dashboard can change those queries. Even so, Anthropic says: check what the dashboard shows before you share it this way.[^claude-data]

## In ChatGPT: the Data plugin

ChatGPT has a similar tool, the **Data plugin**. A **plugin** is an add-on that lets ChatGPT do something new.[^openai-data]

1. **Set it up.** Open the plugin directory, find **Data** and install it. Then connect the data you need. At work, your company decides whether you can do this yourself, or whether IT does it for you.[^openai-data]
2. **Ask.** In the ChatGPT desktop app, open **Work** and type `@Data` and then your question. For example: "@Data Compare sales this quarter with last quarter and explain the biggest changes."
3. **Make a dashboard.** Ask it to turn the answer into a dashboard. You can change it, share it and update it.[^openai-data]

OpenAI's help page does not list which plans include the Data plugin. On a paid Plus account, it was in the plugin directory when this page was checked.[^openai-data]

In both apps the habit is the same: before you trust a number, ask what the query counts.

## Combine it: a dashboard and a scheduled task

A dashboard keeps itself fresh. Claude updates its data when someone opens it and the data is due for an update. It does not update on a schedule.[^claude-data] So you do not need a scheduled task to keep a dashboard up to date.

A scheduled task is for work that must happen at a set time, even when nobody opens anything. You met them in [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md). For example, a short note for the manager every Monday:

> Every Monday at 8 a.m., update the doc at [the doc's link] with last week's total payments to suppliers, from our data warehouse. Do not make a new doc. Only update this one.

Two habits make this work:

- **Give the task the link of an artifact you already made.** Each run usually starts a new session, and a new session makes a new artifact unless you give it the link of an old one. Anthropic says: when a task's job is to keep a page current, give it one you already published.[^claude-routines],[^claude-code-artifacts] Anthropic's guide says this about artifacts made in the Code tab, so run the task once with **Run now** and check that it updated your doc.
- **Use the three rules** from Work that runs while you sleep. Write the task so a stranger could follow it. Keep the result somewhere lasting: here, the doc. And decide which actions need your yes.

To make one, ask in a chat to schedule it, or open **Scheduled** in the Code tab. Scheduled tasks need the Pro, Max, Team or Enterprise plan. Anthropic's page does not list Ultra.[^claude-routines]

**In ChatGPT:** scheduled tasks run once or on a schedule, and they can use apps such as Gmail when your account has them.[^openai-scheduled-tasks]

## Try it (15 minutes)

**Paid plan, with company data connected:** Ask Claude Data a question you already know the answer to, such as last month's total sales. Does it match? Ask Claude to explain the query in plain words.

**Any plan, without company data:** Paste a small table into a chat, such as ten weeks of sales. Ask for a chart. Then ask Claude how it worked out each number. Check two of them yourself.

[^claude-data]: As verified on November 11, 2026. Claude Data is on the Pro, Max, Ultra, Team and Enterprise plans, and connects to warehouses such as Snowflake, BigQuery and Databricks, or to apps such as Salesforce. A query is written in a language called SQL. On Enterprise plans, Data turns on by default on November 19, 2026. Anthropic says Claude refreshes a dashboard's data "when someone opens it and the data is due for a refresh", and that "It doesn't refresh on a schedule". Get started with Claude Data, Anthropic.
[^anthropic-share]: Share artifacts, Anthropic.
[^openai-data]: As verified on November 11, 2026, in OpenAI's help page and in the plugin directory of a ChatGPT Plus account. A workspace admin sets the installation policy, and the plugin offers to install other plugins it needs if the workspace allows them. The plugin also works in Codex, ChatGPT's tool for coding. Using the Data plugin in ChatGPT Work and Codex, OpenAI.
[^claude-routines]: As verified on November 11, 2026, with the plan list checked again on November 13, 2026. Anthropic says scheduled tasks "are available on Pro, Max, Ultra, Team, and Enterprise plans", that each run opens as a new session, and: "When a scheduled task's job is to keep a page current, give it an artifact you already published." Automate work with scheduled tasks, Anthropic.
[^claude-code-artifacts]: As verified on November 11, 2026. Anthropic says that to update an artifact from a different session, you give Claude its link: "Without either, a new session creates a new artifact instead of updating one." Share session output as artifacts, Anthropic.
[^openai-scheduled-tasks]: As verified on November 11, 2026, OpenAI says "Scheduled tasks can use supported apps, including Gmail, Slack, and GitHub, when those apps are available for your account or workspace." Scheduled tasks in ChatGPT, OpenAI.
# Whiteboard (/claude-and-chatgpt-2/build-something/whiteboard)

---
type: Document
title: "Whiteboard"
description: "How to think through ideas on a Claude Whiteboard: talk, type or sketch, let Claude group and order your ideas, review its suggestions, work on the board with your team, then turn it into a doc or deck, and what ChatGPT offers instead."
status: stable
order: 0.456
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T06:25:53Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "Whiteboard" ]
last_verified: 2026-11-11
sources:
  - id: claude-whiteboards
    title: "Get started with Claude Whiteboards (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/18324319-get-started-with-claude-whiteboards
  - id: claude-docs
    title: "Get started with Claude Docs (Anthropic, verified 2026-11-11)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: claude-projects-rebuilt
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-11)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: openai-projects
    title: "Projects in ChatGPT (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - id: openai-site-tools
    title: "Using site tools in the ChatGPT desktop app (OpenAI, verified 2026-11-11)"
    resource: https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app
  - id: openai-community
    title: "Feature Request: A Shared Visual Workspace / Whiteboard Inside ChatGPT (OpenAI Developer Community, verified 2026-11-11)"
    resource: https://community.openai.com/t/feature-request-a-shared-visual-workspace-whiteboard-inside-chatgpt/1394344
generated:
  at: 2026-11-13T06:25:53Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** When a team plans something new, someone picks up a marker. Ideas go on the board in any order. Then the team moves them, groups them and draws arrows between them, until a plan appears. The board is for thinking. It is not the final answer.

## What it is

**Claude Whiteboards** is a shared board where you, your team and Claude think through ideas. You talk, type or draw. Claude puts your ideas in order and groups them. Use a board before you know the final answer, for example when you are choosing between options. You need a paid plan, and it is still in beta.[^claude-whiteboards]

## Build one

In the Claude desktop app, ask for a whiteboard in any chat, or pick the **Whiteboard** tile in the Artifacts tab. Then add your ideas in the easiest way for you:[^claude-whiteboards]

- **Talk.** Press the microphone button and speak. Many languages work.
- **Type or draw** on the board.
- **Add pictures.**

For Brightline:

> Brightline wants to change how its Friday payment run works. Here are my rough notes. Put the steps on a board in order, group the risks, and show which steps depend on which.

## Work on it with Claude

Claude groups ideas that belong together and puts steps in order. It draws arrows between steps that depend on each other. You can ask it to:[^claude-whiteboards]

- group the ideas a different way,
- turn the board into a timeline,
- say what is missing.

When you ask what is missing, Claude adds new ideas to the board. **Check each one.** On the board, Claude's ideas look just like your team's ideas. Decide for each: keep it, change it or remove it.

## Work on it with your team

Everyone on the board can change it at the same time. Click **Share** to invite people.[^claude-whiteboards]

## When the thinking is done

![From board to finished work. Three cards joined by arrows. Whiteboard, step 1, think it through: talk, type or sketch, Claude groups and orders, you check each suggestion. Docs, step 2, write it down: turn the board into a one-page plan, edit it, check every fact. Slides, step 3, show it: turn the doc into a four-slide deck, present it, then export. At the foot: when the plan is clear, ask Claude to turn the board into a doc or a deck.](img/from-board-to-finished-work.png)

A board is not the finished product. When the plan is clear, ask Claude to turn the board into a doc or a deck. Then continue on the [Docs](docs.md) and [Slides](slides.md) pages.[^claude-whiteboards],[^claude-docs] You can also save a picture of the board: click **Share**, then **Export**.[^claude-whiteboards]

**One limit:** Claude uses only what is on the board. It does not look in your other apps. So put on the board every fact it needs.[^claude-whiteboards]

## In ChatGPT: no built-in board yet

- **No whiteboard in ChatGPT, when this page was checked.** On November 11, 2026, OpenAI's help pages did not mention one. When a user asked, OpenAI's support account suggested site tools instead.[^openai-community]
- **Instead, use a whiteboard website.** Open it in the ChatGPT desktop app's own web browser. On some websites, ChatGPT can work on the page for you. OpenAI calls this **site tools**. ChatGPT asks your permission first.[^openai-site-tools]
- **Site tools are not ChatGPT Sites.** Sites, from the [Design](design.md) page, makes web pages. Site tools let ChatGPT work on other companies' websites.

So in ChatGPT, for now, the board lives in another company's app. In Claude, the board is an artifact, saved with your other work.

## Combine it: from a board to a project

A board helps you decide. A project helps you do the work. When your board shows a plan with several jobs, a rebuilt project can run them. You met it in [Projects: one team lead, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md): you describe the work once, and Claude starts a **thread** for each job, side by side, and every thread gets the project's instructions.[^claude-projects-rebuilt]

1. Ask Claude to turn the finished board into a doc: a list of jobs, with what "done" means for each one.
2. Check the list. On the board, Claude's ideas looked just like your team's ideas.
3. Paste the list into the project and ask Claude to start one thread for each job.

The files each thread makes appear in the project's **Library**.[^claude-projects-rebuilt] The rebuilt projects are in beta on the Pro, Max and Ultra plans, and they are reaching accounts gradually. Without them, do the jobs one chat at a time.

**In ChatGPT:** there is no board, but a project keeps the plan's files, instructions and chats together, on every plan.[^openai-projects]

## Try it (10 minutes)

**Paid plan:** Start a whiteboard for a choice you face, such as which of three courses to take. Speak your thoughts for two minutes. Ask Claude to group them and say what is missing. Remove one idea you disagree with. Then ask for a one-page doc.

**Free plan:** Paste the same thoughts into a chat. Ask Claude to group them under headings and say what is missing. What would a board have added?

[^claude-whiteboards]: As verified on November 11, 2026. Whiteboards is on the Pro, Max, Ultra, Team and Enterprise plans, on the web, desktop and phone. You can invite people outside your company by email, and send a board to Lucid, Miro or Zoho Vani. Pictures export as PNG files. You cannot import a board from a file. Get started with Claude Whiteboards, Anthropic.
[^claude-docs]: Claude can also turn a doc into a Slides deck. Get started with Claude Docs, Anthropic.
[^openai-community]: *(Reported.)* When a user asked for a whiteboard in ChatGPT, OpenAI's support account suggested site tools instead, on September 13, 2026. Feature Request: A Shared Visual Workspace / Whiteboard Inside ChatGPT, OpenAI Developer Community.
[^openai-site-tools]: As verified on November 11, 2026, OpenAI says site tools "are available when your account has access and the website provides site tools", and that "Each website decides which tools to provide." It lists no plans. Using site tools in the ChatGPT desktop app, OpenAI.
[^claude-projects-rebuilt]: As verified on November 11, 2026. Anthropic says a project "starts a thread for each task", that "every new thread starts with the project's instructions", and that the Library tab holds "the files you added and the files threads produced". Projects are in public beta on Pro, Max and Ultra plans and rolling out gradually. The plan list was checked again on November 13, 2026. Let Claude coordinate ongoing work with Projects, Anthropic.
[^openai-projects]: As verified on November 11, 2026, OpenAI says project sharing "is available on ChatGPT Free, Go, Plus, Pro, Business, Enterprise, and Edu". Projects in ChatGPT, OpenAI.
# One job, three deliverables (/claude-and-chatgpt-2/build-something/one-job-three-deliverables)

---
type: Document
title: "One job, three deliverables"
description: "The section's final exercise: turn one week of Brightline's invoices into a sheet, a one-page doc and a three-slide summary that agree with each other, find the invoices a person must decide, share and export it safely, and show which record supports every claim."
status: stable
order: 0.457
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-11T15:26:22Z
chapter: "F00F"
part: Front
expert_status: required
concepts: [ "One job" ]
last_verified: 2026-11-11
generated:
  at: 2026-11-11T15:26:22Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

**In everyday life.** A manager rarely wants just one thing. They want the numbers, a short note that explains them, and a few slides for the meeting. If the three say different things, nobody trusts any of them.

This exercise puts the section together. You build three pieces of finished work from the same records, and you make them agree. It takes about 50 minutes, and it works on a free plan. Here is the whole exercise in one picture:

![One job, three deliverables. On the left, the records: 6 invoices, 2 notes, 6 rules and the date. An arrow leads to three boxes. Step 1, the sheet: one row per invoice, the decision and the rule used, the total of all six, and the total marked pay. Step 2, the doc for Dave: both totals, and each ask invoice and why; in step 5 you export it as a PDF, a fixed copy. Step 3, the slides, made from the doc: the total of all six, the ask invoices, and what a person decides. Below, three bands. Same in all three: the total of all six, and the invoices marked ask. Same in the sheet and the doc: the total marked pay. On the slides: every number matches the doc. Beside them: every claim points back to the records, and you check the totals. At the foot: Claude only suggests. A person approves and pays.](img/one-job-three-deliverables.png)

## The records

It is Friday, September 18, 2026. Brightline must decide which invoices to pay this week. Here are six of its invoices. You will see them again later in the book, in the [chapter on markdown](../../how-ai-works/markdown/overview.md). Below the table are two notes and the rules. You will paste all three into a new Claude chat.

| Supplier | Invoice | Amount |
| --- | --- | ---: |
| Midwest Packaging | 4519 | $2,184.60 |
| Buckeye Office Supply | BO-23561 | $312.45 |
| County Freight | 5208 | $6,420.00 |
| Maple Paper | MPL-1187 | $1,058.75 |
| Midwest Packaging | 4526 | $3,977.10 |
| Buckeye Office Supply | BO-23577 | $486.20 |

The two notes:

> **Note 1.** Dave, the controller, must approve every invoice over $5,000.00 himself. (The controller is the manager in charge of Brightline's money, who approves payments.)
>
> **Note 2.** On Monday, September 14, an email arrived that says it is from Maple Paper. It asks Brightline to pay Maple Paper into a new bank account from now on.

## The rules

These are Brightline's rules for this exercise. Give them to Claude word for word.

1. Mark each invoice **pay** or **ask**. "Ask" means a person must decide. "Pay" is only a suggestion: it means no rule here stops the invoice. It does not mean approved, and it does not mean paid.
2. Mark an invoice **ask** if it is over $5,000.00, because Dave must approve it. Look at each invoice on its own.
3. Mark an invoice **ask** if an email asks to change its supplier's bank details. Thieves often send fake bank details. Never change bank details because of an email. A person calls the supplier on a phone number already on file.
4. If neither rule 2 nor rule 3 applies, mark the invoice **pay**.
5. Use only this table, these two notes, these rules and the date in my message. If something is not in them, say "not in the records". Do not guess.
6. Only suggest. Nothing is paid or approved by Claude.

These rules are a simpler version of Brightline's real payment rules, which you met in [One job, start to finish](../new-way-of-working/one-job.md). Here there is no **hold**, and no rule for new suppliers. They check only two risks. So **pay** means only that neither risk applies, not that the invoice passed every check a real accounting team makes. A person still approves the payment run.

**Start like this.** Open a new chat in the Claude desktop app. Type the line below, then paste the table, the two notes and the six rules under it, and send:

> I am preparing Brightline's payment run for Friday, September 18, 2026. Here are the invoices, two notes and the rules. Follow the rules exactly. First, tell me the decision for each invoice and the rule you used. Do not make anything yet.

Read Claude's answer. If a decision looks wrong, say which rule it broke. Then go on to step 1.

## Build the three deliverables

**Step 1. The sheet (10 minutes).** Ask for a sheet with one row per invoice: supplier, invoice, amount, decision and the rule used. Add two totals: the total of all six invoices, and the total of the invoices marked **pay**. On a free plan, ask instead for a separate doc called "Invoice sheet" that holds only this table and the two totals. Treat it as your sheet in the checks below. Its totals are Claude's own arithmetic, not formulas, so check 2 below is a must. This doc is a stand-in for a sheet. It lets you practice the same checks, but it cannot show working formulas, such as a total that updates itself.

**Step 2. The doc for Dave (10 minutes).** Ask for a one-page doc for Dave that gives the total of all six invoices and the total marked **pay**, and explains each **ask** invoice, using only the records. Then read it. Fix anything it says that the records do not.

**Step 3. The slides (10 minutes).** Ask Claude to turn the doc for Dave (not the Invoice sheet) into three slides: the total of all six invoices, the invoices marked **ask**, and what a person must decide or check.

**Step 4. Plan the sharing (5 minutes).** Dave is a character in this book, so do not share the doc with anyone now. Open **Share** and check that only you have access. If your plan shows no Share option, write that down: right now, nobody but you can open the doc. Check the sheet and the slides the same way: only you. Then write down the access you *would* give: Dave, as a **Commenter**, and nobody else. A Commenter can comment but cannot change the doc. (If your Share menu has no Commenter, write Editor, which can also change it.) The doc can still change after Dave reviews it, so in step 5 you will save a fixed copy of the version he reviews.

## Check before you call it done

Answer each question. Write your answers down.

1. **Do the three agree?** Is the total of all six invoices the same in the sheet, the doc for Dave and the slides? Are the same invoices marked **ask** in all three? Does every other number on the slides match the doc?
2. **Are the totals right?** Add up the six amounts yourself, with a calculator. Then add up the four **pay** amounts. Do your two numbers match the totals in the sheet and in the doc for Dave?
3. **Where does each claim come from?** For each sentence in the doc that states a fact, a number or a decision, point to the row, the note, the numbered rule or your opening message that supports it. Underline any such sentence with no source. Sentences that only speak to Dave, such as "Please review", need no source.
4. **What must not happen automatically?** Name two actions that only a person may take.
5. **Is it safe to share?** Does the doc for Dave contain anything Dave should not see, or anything that only makes sense with your chat? Who else could open it?

**Step 5. Export a fixed copy (5 minutes).** When every check above passes, pretend Dave has approved the doc for Dave, and export it as a PDF. The PDF is a fixed copy of the version he reviewed, and it does not change. But it does not prove that he approved it. A real approval needs its own record, with Dave's name and the date, such as his sign-off in the payment system. If you fix the doc later, export a new PDF.

## You are done when

- The sheet, the doc for Dave and the slides show the same total of all six invoices and the same **ask** invoices.
- The sheet and the doc for Dave show the same pay total.
- Every number on the slides matches the doc for Dave.
- Every claim in the doc points to a row of the table, one of the two notes, a numbered rule or your opening message.
- You have checked who can open the doc, the sheet and the slides (only you), and written down the access you would give Dave.
- The doc holds nothing private or chat-only.
- Nothing claims that a payment was made or approved.
- The PDF shows the same two totals as the sheet: all six invoices and the pay total.

## Going further: use the whole platform (optional, about 25 minutes)

Do this part after you finish the checks above. It adds three parts you learned in earlier sections, one at a time. Do any of them, in any order. Each one says what it needs.

**A. Put the rules in a project (any plan, 5 minutes).** Make a project called "Brightline payment run". Put the two notes and the six rules in its instructions, as the [Docs](docs.md) page showed. Start a new chat in the project. Type the opening line from **Start like this** and paste only the invoice table, without the notes and rules. Does Claude give the same six decisions as before?

**B. Build from a folder on your computer (paid plan, the desktop app, 10 minutes).** Make a new folder called Brightline, and allow Claude to use it in the desktop app. Giving Claude a folder needs a paid plan, so on a free plan, skip B. The [Sheets](sheets.md) page explains why this matters.

1. In a desktop-app chat that can use the folder, paste the table of six invoices again. Ask Claude to save it in the folder as a file called invoices.csv.
2. Ask Claude to make a new sheet from invoices.csv, with the total of all six and the pay total.
3. Ask Claude to change one amount in the file, and only in the file: Midwest Packaging 4519 becomes $2,184.70.
4. Look at the new sheet. Did its totals change?
5. Ask Claude to update the sheet from the file. By how much should each total go up? Check it.
6. Ask Claude to put $2,184.60 back, in the file and in the sheet.

**C. Plan a scheduled task (any plan, 10 minutes).** Do not turn anything on. Writing the plan works on any plan; running a task needs Pro, Max, Team or Enterprise. Write the instruction for a task that prepares the payment run every Friday at 9 a.m. Use the [Data](data.md) page and [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md). Your instruction must:

- say where the invoices are,
- update the sheet you already made (or your Invoice sheet doc), by its link, not make a new one. If you ever turn the task on, run it once and check that it updated that sheet,
- follow the six rules, and only suggest.

Then answer two questions. Where must the invoices be, so that a task on the borrowed desk in the cloud can read them? And which connected apps would you give the task?

## Check your answers

Read this only after you finish.

- **The total of all six invoices is $14,439.10.** The total marked **pay** is $6,960.35.
- **Two invoices are ask:**
  - County Freight 5208, for $6,420.00, because it is over $5,000.00.
  - Maple Paper MPL-1187, because of the bank-change email.
- **The other four are pay,** by rule 4. Midwest Packaging has two invoices, but each one is under $5,000.00, so rule 2 does not apply.
- **Actions only a person may take, for check 4.** Any two of these: Dave approves 5208; someone calls Maple Paper on the number already on file; someone changes bank details, and only after that call; someone approves the payment run; someone sends a payment. (And nobody ever uses the bank account in the email.)
- **Sources, for check 3.** Here is how to point each claim to its source:
  - "The total is $14,439.10" comes from all six rows, added up (check 2).
  - "Four invoices are pay" comes from their four rows, Note 2 (the bank email is only about Maple Paper), rules 2 and 3 (neither applies) and rule 4.
  - "The total marked pay is $6,960.35" comes from the four pay rows, added up, and the same note and rules.
  - "Dave approves 5208" comes from Note 1.
  - "A person calls Maple Paper on the number on file" comes from rule 3. The records do not say who makes that call, so do not write that Dave does.
  - "The payment run for Friday, September 18, 2026" comes from your opening message. That counts as a source.
  - "County Freight 5208 needs Dave's approval" comes from row 3, Note 1 and rule 2.
  - "Maple Paper's invoice is marked ask" comes from Note 2 and rule 3.
  - "Never change bank details because of an email" comes from rule 3.
  - Any due date has no source, because the records give none.
- **Safe to share, for check 5.** Nothing here is private from Dave. The risks are phrases that only make sense with your chat, such as "as above" or "the list you gave me", and access for anyone other than Dave.
- **Common mistakes to look for:**
  - The doc gives a due date or a reason that is not in the records.
  - The slides round the total, or show the **pay** total where the total of all six was asked for.
  - The doc calls the Maple Paper email fake. The records cannot prove that. Only a phone call to Maple Paper can.

### Going further answers

- **Part A.** The decisions should be the same: County Freight 5208 and Maple Paper MPL-1187 are **ask**, and the other four are **pay**. If they differ, Claude may not have read the instructions. Check that the chat is inside the project.
- **Part B.** In step 4 the totals did not change: the sheet holds a copy, not the file. In step 5 the total of all six goes up by exactly $0.10, from $14,439.10 to $14,439.20, and the pay total goes up by $0.10 too, to $6,960.45, because 4519 is a **pay** invoice. After step 6, both totals are back to $14,439.10 and $6,960.35.
- **Part C.** A good instruction names the place of the invoices and the link of the sheet, and says "update this sheet, do not make a new one". It repeats the six rules, or says where they are. It says: "Only suggest. Never pay, approve or change bank details."
  - **Where the invoices must be:** somewhere the cloud can reach, such as a Google Drive folder, not only on your laptop. The borrowed desk cannot reach your computer. A desktop task could read your folder, but only while your computer is on and the app is open.
  - **Which apps:** only the ones the task needs to read the invoices and update the sheet. Never an app that can send payments. A scheduled task often runs without asking you, and what it does through your apps appears as you.

Next come the cases. Look back at this page when a case asks you to build, check and share finished work.
