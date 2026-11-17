# Case 4: Nisha's Month-End (/claude-and-chatgpt-2/case-4-nishas-month-end/overview)

---
type: Document
title: "Case 4: Nisha's Month-End"
description: "The fourth case study in the series. Nisha's firm joins a project, a skill, connected files, the cloud computer, artifacts and a scheduled task into one setup for a monthly report. Two days of work become two hours, and the setup catches a late change before the client does."
status: stable
order: 0.8
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:27Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "Two days of copying", "One place", "The run", "Wednesday morning", "What the setup did", "Friday's decision" ]
last_verified: 2026-11-12
review_by: 2026-12-12
sources:
  - id: run-sheet
    title: "Nisha's Month-End: practical run sheet (the practical has not yet been run)"
    resource: "appendix-practical-run-sheet.md"
generated:
  at: 2026-11-13T05:47:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

*A job that took two days now takes about two hours of people's time. The firm did not buy a new tool. It joined the ones it already had.*

Panaversity case study · November 2026

## The case in one minute

A small accounting firm must prepare a report for a client at the end of every month. Done by hand, it takes a junior accountant two days: download the bank's lines, match them against the client's books, then type the result into a sheet, a memo and slides.

The firm's owner, Nisha, already uses Claude. She has always used its features one at a time. For this job she joins them into **one setup**:

- a **project**, a place for one piece of work, holds the client's rules;
- a **skill**, a saved way of doing one kind of job, holds the firm's method;
- Claude reads the files **where they are**. Some are in the firm's **shared drive**, an online folder the whole team uses, such as Google Drive. Claude has been allowed to open it, so it is a **connected app**. Others are in a folder on a computer;
- Claude does the matching as a small program, on a **temporary computer in the cloud**;
- Claude builds the sheet, the memo, the slides and the cover as **artifacts**, pieces of work it keeps and updates, from one result;
- a **scheduled task**, a job that runs at a set time, looks at the bank again each morning. In this story it is called **the morning check**. The firm's AI Worker in Slack (an AI that does whole jobs, inside the firm's team chat) runs it.

On Tuesday the report goes to the client, Dana. On Wednesday the morning check finds that the bank's figures have changed, before any person notices. The firm runs the job again, and a reviewer approves the new figure. Dana hears about it a day before her meeting with her bank.

> **What this case teaches.** Each feature of Claude and ChatGPT is useful alone. Joined together, they become a workplace for a job that comes back every month. The setup reads, computes, builds and repeats. People check, approve and decide. In one line: **build the setup once, and it does the job again. Your judgment is still yours.**

> **Is this not just Google Docs with AI?** No. Writing was never the slow part of this job. [What the setup did](what-the-setup-did.md#is-this-better-than-a-document-tool) compares the two fairly.

## What you will be able to do

After this case you can:

1. choose the right part for each need: a project for rules, a skill for a method, a folder or a connected app for files, the cloud for heavy work, an artifact for the result, a scheduled task for the time;
2. join those parts into one setup for a job that repeats;
3. say what the setup does and what a person must still do: check the result, approve it by name, and tell the client;
4. change the setup, not the result, when something goes wrong, so that every piece stays the same.

## What you will do

- **Read the story,** in six short parts. It takes about 40 minutes.
- **Do the lab,** in 75 to 110 minutes. You build a smaller version of the setup with sample files: a project, a skill, one run that makes three pieces, and a late bank line. On a paid plan you can add a sheet, a folder and a real scheduled task. The core path works on a free plan.
- **Decide.** At the end the client's owner wants the same work for four companies, a month-end pack and four weekly packs each, some sent straight to the bank, for less money. The case does not say what Nisha should answer.

> **What you need.** The Claude desktop app with a free account. A paid plan adds three optional steps: a sheet, a folder on your computer and a real scheduled task. Two to three hours in all. You can do everything alone.

## You do not need the earlier cases

This is the fourth case about the same firm, but you can read it alone. Here is everything you need.

- **The firm.** A small accounting firm in Karachi. It pays for Claude's Team plan. **Nisha** owns it. **Sana** is the senior reviewer. She has fifteen years of experience checking companies' accounts, and works Monday to Thursday. **Hamza** is the junior accountant.
- **The client.** **Lakeshore Supply**, a company in Cleveland, Ohio, that sells goods to shops. **Dana Ruiz** is in charge of its accounts. **Walter Brennan** owns it. **Tom Becker** works at its bank.
- **The worker.** An **AI Worker** is an AI system you hand a whole job to, inside limits you set. The firm has one in Slack, its team chat. It is Claude, running inside Slack. This case calls it **the worker**.
- **The worker's weekly job.** Every week the worker downloads Lakeshore's bank lines, saves them to the firm's shared drive, and prepares a one-page cash file: a draft on Wednesday and the final file on Friday.
- **The morning check.** In this story the worker gets one more job, at a set time each morning. This case calls it **the morning check**. It is a scheduled task. Claude in Slack calls a scheduled task a **routine**.
- **The firm's habit.** Before anything goes to a client, Nisha or Sana approves it, and the approval names the file and its figure. Files go to the client from the firm's shared email address, which starts with `reports@`.
- **The time.** In October, Karachi is 9 hours ahead of Cleveland. When it is 6 p.m. in Karachi, it is 9 a.m. in Cleveland.

> **Words you will meet.** You do not need to know accounting. These ten words are enough.
>
> - **Bank line:** one payment in or out, as the bank records it. A month has thousands of them.
> - **Matching:** pairing each bank line with the same payment in the company's own record. What is left over needs a look.
> - **Deposit:** money paid into a bank account.
> - **Closing balance:** the money in an account at the end of the last day.
> - **Ledger:** a company's own record of the money it paid in and paid out. Accountants also call it the company's **books**.
> - **Check:** a paper order to a bank to pay money, also spelled *cheque*. A check is **cashed** when the bank pays it.
> - **Reconciled cash:** the cash a company really has at month-end. You start from the bank's balance. You add money paid in that the bank has not shown yet. You take away checks that the bank has not paid yet. Here: $201,480.00 + $6,120.00 − $9,300.00 = **$198,300.00**. If the books are right, the ledger shows the same figure.
> - **Timing item:** money on its way, such as a check the bank has not paid yet. It sorts itself out in a few days.
> - **Unrecorded item:** something the bank shows and the company's books do not show yet. Someone must record it.
> - **Artifact:** a piece of finished work in Claude that you can keep, change and share, such as a doc, a deck of slides or a sheet. [Build Something](../build-something/overview.md) teaches these.

One more word is this case's own: the **setup** is the parts joined together for one job. [The case at a glance](the-case-at-a-glance.md#words-to-remember) has all the words in one table.

The story takes place in 2027, a little after this book was written.

## How this case is organized

The story comes first. Read the six parts in order.

1. [Two days of copying](two-days-of-copying.md): the client asks for a monthly report, and Nisha counts what it would cost by hand.
2. [One place for Lakeshore](one-place-for-lakeshore.md): the firm builds the setup in one afternoon.
3. [The run](the-run.md): one request does the job, people check it, and the report goes out.
4. [Wednesday morning](wednesday-morning.md): the morning check finds a change, and the firm runs the job again.
5. [What the setup did](what-the-setup-did.md): Nisha lists what the setup did, what people did, and where it can still go wrong.
6. [Friday's decision](fridays-decision.md): the client's owner asks for more, for less.

**If you do the lab,** you can do it at any point after part 3. The [lab](lab-build-the-month-end.md) says when to stop reading.

After the story come [The case at a glance](the-case-at-a-glance.md), a summary, and the [questions for discussion](questions-for-discussion.md). The [exhibits](exhibits.md) hold the details: the project's instructions, the skill, the request and the tables. [Check yourself](check-yourself.md) has flashcards and a quiz. The [final assessment](final-assessment-four-questions.md) covers this whole part of the book, so it needs the earlier sections too.

Instructors will find a [teaching note](teaching-note-for-instructors.md) and a [practical run sheet](appendix-practical-run-sheet.md).

> **About this case.** It is a fictional teaching case, and it is not accounting advice. The people, the companies, every figure and every time are made up. What each part of Claude can do was checked against Anthropic's help pages in November 2026. Nobody has yet tried this exact setup from start to finish, so the times are examples, not measurements. Until that test is done, treat the case as a teaching draft, not a tested recipe. A few tables are marked *illustrative* for this reason.[^run-sheet] The lab is yours to run. [The exhibits](exhibits.md#about-this-case-in-full) say more.

If you have read Cases 1 to 3, [The case at a glance](the-case-at-a-glance.md#how-this-case-connects-to-the-others) shows how this one connects to them.

[^run-sheet]: The [practical run sheet](appendix-practical-run-sheet.md) says how to run the exercise and record it. It has not yet been run.
# Two days of copying (/claude-and-chatgpt-2/case-4-nishas-month-end/two-days-of-copying)

---
type: Document
title: "Two days of copying"
description: "Lakeshore asks for a month-end pack for its bank. By hand it takes 17 hours, mostly matching and copying. The firm has every part of Claude it needs, and has never used them together."
status: stable
order: 0.81
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:28Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "Two days of copying" ]
last_verified: 2026-11-12
generated:
  at: 2026-11-13T05:47:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

## A new request

> **New words on this page.** **Ledger:** a company's own record of money in and out, also called its **books**. **Reconciled cash:** the cash a company really has at month-end, worked out from the bank's balance (the [overview](overview.md#you-do-not-need-the-earlier-cases) shows how). **Month-end pack:** the firm's name for the monthly report.


Lakeshore Supply had been a weekly client since February. Every week the firm's AI Worker in Slack, the worker, prepared a one-page cash file. A person approved it, and it went to Dana Ruiz from the firm's email address, `reports@`.

In late September 2027 Dana asked for something bigger.

*"Our bank wants a report after every month-end. A cover, a short memo and three slides. They look at one figure most of all: our reconciled cash. Can you do it by the fifth of each month?"*

Reconciled cash is the cash Lakeshore really has on the last day of the month, after the bank's record and Lakeshore's own record are compared.

> **The promise to the bank.** Lakeshore had promised its bank to keep at least **$195,000.00** in cash at the end of every month. If the figure fell below the line, Dana had to tell the bank. The bank's letter put it this way: *"The Borrower shall keep reconciled cash of at least $195,000.00 at each month-end, and shall tell the Bank promptly if it does not."* In this case, reconciled cash means the bank's balance after the timing items.

The firm called the report a **month-end pack**.

## What it would cost by hand

Nisha asked Hamza how long the pack would take if he did it the way he had learned.

Each line is one payment in or out. The same payment should appear once in the bank's record and once in Lakeshore's ledger. **Matching** finds the pairs. What is left over needs a look.

Hamza wrote the steps on paper.

| Step | What Hamza does | Time |
|---|---|---|
| 1 | Download September's bank lines and Lakeshore's ledger (its own record of money in and out). About 3,400 lines each. | 1 hour |
| 2 | Match every bank line to a ledger line, in a spreadsheet | 8 hours |
| 3 | List what is left over, and work out reconciled cash | 1 hour |
| 4 | Type the figure and the leftovers into a memo | 2 hours |
| 5 | Type them again into three slides, and make a cover | 2 hours |
| 6 | Sana reviews, and Hamza fixes what she finds | 3 hours |
| | **Total** | **17 hours** |

*"Two days,"* he said. *"And step 2 is where I make mistakes. By line two thousand I am not reading any more."*

## Why not the worker?

Nisha asked the obvious question. *"The worker already checks Lakeshore's cash every week: a draft on Wednesday and the final file on Friday. Why not ask it?"*

Hamza shook his head. *"It checks one week on one page. The bank wants every line of the month matched, the leftovers listed, a memo in Sana's way and three slides in the bank's layout. That is a sheet, a memo, slides and a cover: four pieces that three of us must open and check. And the worker can send email from our address. I do not want the pack made in a place that can send it before we read it."*

Nisha agreed. The worker would keep its weekly job. It would also do one small daily check, which you will meet later, because it could already read the bank's lines. The month-end pack needed a place of its own.

Nisha had already told Dana a price: **$900.00** for each pack, on top of the $1,500.00 a month for the weekly file. She had based it on two days of work.

## What the firm already had

Nisha looked at Hamza's list for a long time. Then she wrote a second list beside it: the things the firm already used with Claude.

| What the firm had | How the firm used it |
|---|---|
| A **project** | Nisha kept one for her own notes |
| A **skill** | Sana had saved her way of writing a review memo |
| **Connected apps** | The shared drive was connected to Claude |
| **The worker in Slack** | It could read the bank's lines and the drive, and send email from `reports@` |
| The **desktop app** | Hamza used it to ask about files on his computer |
| **Scheduled tasks** | The worker's weekly file ran on one |
| **Artifacts** | Each of them had made a doc or a deck, now and then |

*"We have every part,"* she said. *"We have never used them together. Each of us opens a chat, pastes something in, and copies something out. The copying is the two days."*

Sana agreed, with one condition. *"I do not care how the figure is made. I care that I can check it, and that my name is not on anything I have not read."*

*"That does not change,"* said Nisha. *"It is the only part that should take our time."*

![The old way and the new way. Two panels. On the left, by hand, 17 hours every month: download, 1 hour; match 3,400 lines, 8 hours; work out the figure, 1 hour; type the memo, 2 hours; type the slides and cover, 2 hours; review and fix, 3 hours. On the right, with the setup, about 2 hours of people's time every month: the setup reads, matches, computes and builds in about 25 minutes; Hamza checks, 1 hour; Sana reviews, 45 minutes; an approval, 15 minutes. A band at the foot says the setup is built once, in one afternoon. The times are illustrative.](img/the-old-way-and-the-new-way.png)

## The plan for Monday

They gave themselves one afternoon, Monday, October 4, to build what Nisha called **one place for Lakeshore**. On Tuesday they would run it for the first time, for September.

Nisha set one rule before they began.

*"Claude may read, compute, build and repeat. A person checks, approves and tells the client. If we find ourselves copying a number by hand, we have built it wrong."*
# One place for Lakeshore (/claude-and-chatgpt-2/case-4-nishas-month-end/one-place-for-lakeshore)

---
type: Document
title: "One place for Lakeshore"
description: "In one afternoon the firm builds the setup: a project for the rules, a skill for the method, files where a job can reach them, a borrowed desk for the matching, four artifacts for the result, and a scheduled task for the time."
status: stable
order: 0.82
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:27Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "One place" ]
last_verified: 2026-11-12
sources:
  - id: projects
    title: "Anthropic, What are projects? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/9517075-what-are-projects
  - id: skills
    title: "Anthropic, How to create custom skills (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: local-task
    title: "Anthropic, Schedule recurring tasks in Claude Code Desktop (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: sandbox
    title: "Anthropic, Claude Cowork architecture overview (Claude Help Center)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: deck-export
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: artifact-link
    title: "Anthropic, Share session output as artifacts (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: no-source
    title: "Anthropic, Get started with Claude Sheets (Claude Help Center)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: tag-routine
    title: "Anthropic, Set up routines (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/users/proactivity
  - id: owner-connectors
    title: "Anthropic, Use connectors to extend Claude's capabilities (Claude Help Center)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: docs-outside
    title: "Anthropic, Get started with Claude Docs (Claude Help Center)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: chrome-admin
    title: "Anthropic, Claude in Chrome admin controls (Claude Help Center)"
    resource: https://support.claude.com/en/articles/13065128-claude-in-chrome-admin-controls
generated:
  at: 2026-11-13T05:47:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

## Monday afternoon

> **New words on this page.** **Instructions:** text that Claude reads in every chat in a project. **Skill:** saved instructions that teach Claude one kind of job. **Borrowed desk:** a temporary computer in the cloud that Claude uses for one session. **Run note:** a few lines Claude saves after each run. **The morning check:** a job that looks at the bank's lines each morning.


Nisha, Sana and Hamza sat at one screen, in the Claude desktop app.

Then they built the parts, one at a time. Each part answers one question ([Exhibit 2](exhibits.md#exhibit-2-the-setup-part-by-part)).

## 1. Where do the rules live? In a project

They made a project called **"Lakeshore month-end"**, and shared it among the three of them. It was an ordinary project, the kind on every plan, not the newer kind in beta.[^projects] A **project** keeps files and **instructions** together. Instructions are text that Claude reads in every chat in that project.[^projects]

Nisha wrote the instructions in plain sentences ([Exhibit 3](exhibits.md#exhibit-3-the-projects-instructions)). They said who the client is, what the pack contains, where the files are, what the bank's minimum is, and what Claude must never do: *"Never send anything. Never change a file in the drive that you did not make. If the bank and the books do not agree, say so in the first line."*

*"Now nobody pastes the rules again,"* she said. *"And when a rule changes, we change it in one place."*

## 2. Where does the method live? In a skill

Sana had a way of writing a month-end memo. She had saved it as a **skill**: instructions that teach Claude to do one kind of job her way.[^skills]

She shared it with Hamza and Nisha. Her skill set the memo's first line. The line says **READY** when the bank and the books agree. It says **NOT READY** when they do not. Anything the bank shows and the books do not yet show is listed under it, as an **unrecorded item** ([Exhibit 4](exhibits.md#exhibit-4-sanas-skill)). The line answers one question: do the books agree with the bank? Whether a pack may go out is a second question, and a person answers it in the approval.

*"A project is about one client,"* said Sana. *"A skill is about one kind of work. My memo method is the same for every client, so it is a skill."*

## 3. Where are the files? Where they already are

The job needed two kinds of file.

- **The files that change every month.** The bank's lines and the ledger. The worker already saved the bank's lines to the **shared drive** every Friday, and Lakeshore's ledger was there too, and the drive was connected to Claude. So Claude could read them there.
- **The files that do not change.** Dana had emailed the bank's letter, the layout the bank wanted and last quarter's pack from her old accountant. Hamza had saved them in a folder on his computer. In the desktop app, he let Claude read that folder.

Hamza wanted to keep everything in his folder. Nisha asked one question. *"What can read your folder when your laptop is closed?"*

Nothing reliable. Claude reads a folder on a computer through the desktop app, and only while the app is open and the computer is awake. Some jobs started from the desktop app can use the folder too, but they lose it when the app closes.[^local-task] The worker in Slack cannot reach it at all. The morning check had to run at 9 a.m. every day, whether Hamza's laptop was open or not. So the monthly files stayed in the shared drive. There, any of the three people, and any job, could read them. They also copied Dana's three files into the project, so the setup did not depend on Hamza's laptop.

The folder kept one job. Hamza downloaded the bank's own statement, its official list of the month's lines, into the folder himself. Later he would compare the setup's work with this file. So his test would not depend on the setup's own work.

![Where a file lives decides who can read it. A table with two columns, a folder on your computer and a connected shared drive. You, in the desktop app: yes for both. A job started from the desktop app: only while the app is open for the folder, yes for the drive. The worker's routine in Slack: no for the folder, yes for the drive. When your laptop is closed: no for the folder, yes for the drive. A band at the foot says your folder is for work at your desk, and a connected drive is for work that runs without you.](img/where-a-file-lives.png)

> **Rule to remember:** where a file lives decides which jobs can read it. A folder on your computer is for work you do at your desk. A connected drive is for work that must run without you.

## 4. Where does the heavy work happen? On a borrowed desk

Nobody can match 3,400 lines well by reading them. Claude does it another way. It writes a small program and runs it on a temporary computer in the cloud. This book calls that computer a **borrowed desk**. Claude uses it for one session. Then it is wiped clean.[^sandbox]

*"Then next month it starts from nothing,"* said Hamza.

*"The desk does,"* said Nisha. *"So the method must not live on the desk."* They added one line to the project's instructions: the matching rules, in words, and *"save the matched list to the drive folder for this month"*.

## 5. Where is the result? In four artifacts

The pack would be four artifacts: a **sheet** for the numbers, a **doc** for the memo, a **deck** for the three slides, and a **design** (a one-page picture) for the cover. Hamza made an empty one of each, shared them with Nisha and Sana, and pasted their links into the project's instructions.

Why artifacts, and not ordinary files? Sana could write comments on the memo in Claude. Every run would update the same piece, so there was never a folder of old copies. And the memo, the slides and the cover can each be saved as a PDF file when it is time to send.[^deck-export]

Pasting the links into the instructions matters. A new chat makes a new artifact unless it is given the link of an old one.[^artifact-link] With the links in the instructions, every run should update the same four pieces. If a run ever made a new piece instead, Hamza would change the link in the instructions, so the list always showed which piece was current.

Sana noticed one more thing. A doc or a deck cannot read its numbers from a sheet.[^no-source] *"So the figure is written into the sheet, the memo and the slides. They are three copies."*

*"Written by one run, from one result,"* said Nisha. *"And checked by you. That is your first test: do the pieces agree?"*

## 6. When does it run? On a schedule

The last part was time. A bank does not always finish the month on the first morning of the next one. Late lines can still arrive. So the firm needed **the morning check**: a job that looks at the bank's lines again each morning.

The worker in Slack could already read the bank's lines. So Nisha gave the job to the worker, as one more **routine**. Remember: the worker is Claude running inside Slack, and a routine is a scheduled task that the worker runs.[^tag-routine] Her instruction said:

- Every morning at 9:00 a.m., download the month's bank lines again.
- Start the day after a pack is sent. Stop after Dana's meeting with Lakeshore's bank.
- Compare the bank's closing balance with the one in the latest run note in the drive.
- Post what you find in the firm's channel. *"If something changed, say what. Change nothing in the pack."*

A routine is allowed to do whatever the worker is allowed to do.[^tag-routine]

The worker can send email. Nisha wanted nothing in Claude itself to be able to send the pack. On a Team plan, members can use a connected app only after an Owner turns it on for the firm.[^owner-connectors] Nisha is the Owner. She turned on the shared drive and nothing else: no email, no Slack. So no chat in Claude, in this project or any other, can use a connected app to send an email or reach Slack. A browser extension, such as Claude in Chrome, is a separate route with its own settings, and Nisha, as Owner, keeps it off for the firm.[^chrome-admin] When a run needed new bank lines, a person asked the worker to download them. The worker is set up separately, in its Slack channel.

![One place for Lakeshore: the parts, joined for one job. On the left, three boxes feed the run: the project, the client's rules written once; the skill, the firm's method; the shared drive, the month's files. In the middle, the run, on a borrowed desk in the cloud, where Claude matches the lines with a small program and then builds the pack; the desk is cleared afterward. On the right, four pieces: the sheet, the memo, the slides and the cover. Below, two boxes beside the run: a folder on Hamza's computer, with the bank's statement he downloads himself, for tests the setup never touched; and the worker's routine in Slack, which every morning compares a fresh download with the latest run note. A band at the foot says people check, approve by name and tell the client.](img/one-place-for-lakeshore.png)

## What it cost

The afternoon took the three of them about two hours each. Nothing in it was programming. Every part was a sentence, a file or a setting.

The pack would go to Dana as PDF files, from `reports@`, as everything did.[^docs-outside]

On Monday evening the setup had never run. Nisha did not trust it yet. *"Tomorrow we find out what we forgot."*

[^projects]: As verified on November 11, 2026, Anthropic says projects "are available to all users, including those with free Claude accounts", that free users can make at most five, and that each project can have its own instructions and files. What are projects?, Anthropic.
[^skills]: As verified on November 11, 2026, Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". How to create custom skills, Anthropic.
[^local-task]: As verified on November 9, 2026, Anthropic says a task on your own computer "only fires while the app is open and your computer is awake", and a cloud task "runs even when your computer is off". Whether a cloud session started from the desktop app can also use the folder while the app is open, this case has not checked; the practical run sheet tests it. Reading a folder on your computer needs a paid plan, as [Set up the apps](../new-way-of-working/set-up-the-apps.md) says. Schedule recurring tasks in Claude Code Desktop, Anthropic.
[^sandbox]: As verified on November 9, 2026, Anthropic says that in cloud sessions "the agent loop and code execution run in an isolated, temporary sandbox on Anthropic-managed infrastructure", and that each session's sandbox is "created when the session starts and destroyed when it ends". Claude Cowork architecture overview, Anthropic.
[^deck-export]: As verified on November 12, 2026, Anthropic says "Decks export to PowerPoint and PDF, or go straight to Google Slides as editable files." A doc exports as Word, PDF or Markdown, and a design as a PDF. What are artifacts and how do I use them?, Anthropic.
[^artifact-link]: As verified on November 11, 2026, Anthropic says that to update an artifact from a different session, you give Claude its link: "Without either, a new session creates a new artifact instead of updating one." Anthropic's guide says this about artifacts made in the Code tab. This case assumes the same for a chat in a project, and has not tested it. Share session output as artifacts, Anthropic.
[^no-source]: As verified on November 12, 2026, Anthropic says "Sheets can't pull live data from connected apps, and docs, decks, and dashboards can't use a sheet as a data source." Get started with Claude Sheets, Anthropic.
[^tag-routine]: As verified on November 10, 2026, Anthropic says a routine in Claude Tag "uses that channel's connections with the same permissions as a typed request." [Case 3](../case-3-nishas-firm/overview.md) describes the worker and its channel. Set up routines, Claude Tag docs, Anthropic.
[^owner-connectors]: As verified on November 12, 2026, Anthropic says that on Team and Enterprise plans "an Owner or Primary Owner needs to enable" connectors "for the organization" before members can use them, and that each person still signs in. Owners can also set each connector's actions to Always allow, Needs approval or Blocked, and members cannot override this. Connectors belong to each person's account, not to a project. Use connectors to extend Claude's capabilities, Anthropic.
[^docs-outside]: As verified on November 13, 2026, Anthropic says that on Team and Enterprise plans "You can also share outside your organization when an Owner allows it", and that "Opening a shared doc requires a Claude account." Dana and the bank have no Claude accounts, and sharing outside the firm is an Owner setting that Nisha keeps off. Get started with Claude Docs, Anthropic.
[^chrome-admin]: As verified on November 13, 2026, Anthropic says an Owner can use the **Enable for your team** toggle "to enable or disable Claude in Chrome for your entire organization", in **Organization settings > Claude in Chrome**, and that on Team plans "The extension is enabled by default." Claude in Chrome admin controls, Anthropic.
# The run (/claude-and-chatgpt-2/case-4-nishas-month-end/the-run)

---
type: Document
title: "The run"
description: "One request prepares the pack in 25 minutes. Hamza checks it without Claude, Sana finds what the first run forgot, the firm fixes the instructions and not the slide, and Nisha approves by name and figure."
status: stable
order: 0.825
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-12T13:13:29Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "The run" ]
last_verified: 2026-11-12
sources:
  - id: deck-export
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
generated:
  at: 2026-11-12T13:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

## One request

> **New words on this page.** **Timing item:** money on its way, such as a check the bank has not paid yet. It sorts itself out in a few days. **Approval:** a named person's written yes, which names the pack and its figure. **Export:** to save a copy of an artifact as an ordinary file, such as a PDF.


On Tuesday, October 5, at 10:05 a.m., Hamza opened a new chat in the Lakeshore project and typed one request.

> *"Prepare the September 2027 month-end pack."*

That was all. The rest was already in the setup: the project's instructions told Claude where the files were, what to build and what never to do. Sana's skill told it how to write the memo.

## What Claude did

Claude said what it was doing as it worked ([Exhibit 5](exhibits.md#exhibit-5-the-request-and-the-run-note)).

1. **It read the files.** September's bank lines and the ledger, from the shared drive: 3,395 bank lines and 3,404 ledger lines. The bank file was the one the worker had downloaded on Friday, October 1.
2. **It matched them, with a program.** It wrote a small program and ran it on its borrowed desk in the cloud. The program paired each bank line with a ledger line of the same amount, a date no more than five days apart, and the same name or check number where there was one. It matched 3,395 pairs. It listed two pairs under **Needs a look**, because two payments had the same amount on the same day, and Hamza confirmed them by hand. Nine ledger lines had no bank line yet: two payments in (**deposits**) and seven checks.
3. **It worked out the figure.**

| Line | Amount |
|---|---|
| Bank's closing balance, September 30 | $201,480.00 |
| Add: 2 deposits the bank has not shown yet | $6,120.00 |
| Subtract: 7 checks the bank has not paid yet | $9,300.00 |
| **Reconciled cash** | **$198,300.00** |

4. **It built the four pieces.** It put the lines and the matched list in the sheet. With Sana's skill, it wrote the memo. It filled the three slides and the cover. It used the links in the instructions, so it updated the four pieces that Hamza had made on Monday.
5. **It wrote a run note.** A few lines, saved to the drive: which files it read, how many lines it matched, the figure, and the four pieces it updated.

It finished at 10:30 a.m. Hamza had not copied a single number.

## What people did

Hamza's two days of work were now about two hours of checking, this first time. In a normal month it would be about one hour. He did four **tests**: checks he does by hand. None of them used Claude.

1. **The arithmetic.** With a calculator, using the closing balance in Claude's run note: $201,480.00 plus $6,120.00 minus $9,300.00 is $198,300.00.
2. **The matching.** He chose twenty matched pairs from the sheet at random. He read each pair against the bank's own statement in his folder.
3. **The leftovers.** He read all nine lines and found each one in Lakeshore's ledger. They were **timing items**: money on its way, which sorts itself out in a few days.
4. **The pieces.** He opened the sheet, the memo and slide 2. All three said $198,300.00.

The figure was also the same as the cash in Lakeshore's ledger. So the memo's first line said:

> *Status: READY. Reconciled cash at September 30, 2027 is $198,300.00, the same as the ledger. 9 timing items. Nothing unrecorded.*

It was $3,300.00 above the bank's minimum.

## What the first run got wrong

Sana read the pack at 2 p.m. The figures were right. One thing was missing.

*"Slide 2 shows our figure. It does not show the bank's minimum beside it. The bank will look for that first."*

Hamza reached for the slide. Sana stopped him.

*"If you type it into the slide, it is right this month and wrong next month. Put it in the instructions."*

He added one sentence to the project's instructions: *"Slide 2 shows reconciled cash and the bank's minimum, side by side."* Then he asked Claude to prepare the pack again. Six minutes later slide 2 had both figures, and the other pieces had not changed.

> **Rule to remember:** when the result is wrong, fix the setup and run the job again. A fix made by hand lasts one month. A fix in the setup lasts.

## Approved and sent

At 4:10 p.m. Nisha wrote in the firm's Slack channel:

*"Approved: Lakeshore September month-end pack, reconciled cash $198,300.00."*

Hamza exported the cover, the memo and the slides as PDF files.[^deck-export] At 4:25 p.m. they went to Dana from `reports@`. In Cleveland it was 7:25 a.m.

![The run. Five steps in a row. Step 1, read: bank lines and ledger, from the shared drive. Step 2, match: a small program on a borrowed desk pairs 3,395 lines. Step 3, compute: 201,480 dollars plus 6,120 minus 9,300 is 198,300. Step 4, build: the sheet, the memo, the slides and the cover, from one result. Step 5, note: a run note saved to the drive. Under the steps, a band for people: Hamza checks, Sana reviews, Nisha approves by name and figure, and the PDFs go to Dana from the firm's mailbox. A band at the foot says twenty-five minutes for the setup, and the rest of the day for judgment.](img/the-run.png)

Dana answered within the hour. *"This is exactly what the bank asked for. Thank you."*

Nisha counted the people's time for the day: Hamza two hours, Sana one hour, herself fifteen minutes. This first time, they had also fixed the setup. In a normal month she expected about two hours in all.

[^deck-export]: As verified on November 12, 2026, Anthropic says "Decks export to PowerPoint and PDF, or go straight to Google Slides as editable files." A doc exports as Word, PDF or Markdown, and a design as a PDF. What are artifacts and how do I use them?, Anthropic.
# Wednesday morning (/claude-and-chatgpt-2/case-4-nishas-month-end/wednesday-morning)

---
type: Document
title: "Wednesday morning"
description: "The morning check finds a returned check. Hamza starts to fix one slide by hand, Sana stops him, and the firm runs the job again. Sana approves the new figure, and the client knows a day before her bank asks."
status: stable
order: 0.83
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:28Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "Wednesday morning" ]
last_verified: 2026-11-12
generated:
  at: 2026-11-13T05:47:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

## 9:00 a.m., Wednesday

> **New words on this page.** **Returned check:** a check that the bank of the person who wrote it refused to pay, so the money is taken back. **Unrecorded item:** something the bank shows and the company's books do not show yet.


On Wednesday, October 6, the morning check ran for the first time. At 9:00 a.m. in Karachi, the worker downloaded September's bank lines again. It compared the bank's closing balance with Tuesday's run note. Then it posted in the firm's channel.

> *"The bank's lines for September have changed since Friday's download. There is one new line, dated September 30: a returned check from Erie Street Diner, $3,450.00. Lakeshore deposited that check on September 28. The bank's closing balance is now $198,030.00, not $201,480.00. Reconciled cash would be $194,850.00. That is $150.00 below the bank's minimum of $195,000.00. I have saved the new download to the drive. I have changed nothing in the pack."*

A **returned check** is a check that the bank of the person who wrote it refused to pay. The diner's check had failed, so Lakeshore's bank took the money back. Why had Friday's file not shown it? The worker downloaded that file early on October 1, Cleveland time. The bank had not yet added all of September 30's lines.

In Cleveland it was midnight. Dana was asleep, with Tuesday's pack in her inbox and a meeting with her bank on Thursday at 10 a.m.

## The old habit

Hamza did the sum on paper. $198,030.00 plus $6,120.00 minus $9,300.00 is $194,850.00. The worker was right.

Then he opened the bank's statement in his own folder, the one he had downloaded on Monday. It already showed the returned check. On Tuesday his tests had used it to read twenty pairs, but his arithmetic had used the closing balance from Claude's run note. If he had compared that balance with his statement, he would have found the error a day earlier.

Then he did what he had always done. He opened the deck and began to change slide 2.

Sana was at the next desk. *"Stop. How many places hold that figure?"*

He counted. Besides slide 2, five more places were now wrong. Three showed the figure. Two showed words that depend on it, like READY and *above*. The cover has no figure. Here are the five:

- the sheet;
- the memo's figure;
- the memo's first line, which still said READY;
- the memo's comparison with the bank's minimum, which still said *above*;
- slide 3, which shows the figure and the list of items.

*"You will fix slide 2 and forget one of the others,"* she said. *"I have done it myself, for fifteen years. The setup made the pack. Let the setup make it again."*

## The second run

At 9:40 a.m. Hamza opened a new chat in the Lakeshore project.

> *"The bank's lines for September have changed. Prepare the September 2027 month-end pack again, from the newest download in the drive."*

Claude read the new file, matched the lines again, and found one bank line with no ledger line: the returned check. Lakeshore's books still counted the diner's $3,450.00 as cash, but the bank had taken it back. The books would be wrong until Dana recorded it. Sana's skill had a rule for this. Something the bank shows and the books do not is an **unrecorded item**, and the status is NOT READY.

By 10:00 a.m. the four pieces were updated, and the run note said what had changed since Tuesday.

| | Tuesday's run | Wednesday's run |
|---|---|---|
| Bank's closing balance | $201,480.00 | $198,030.00 |
| Add: deposits the bank has not shown yet | $6,120.00 | $6,120.00 |
| Subtract: checks the bank has not paid yet | $9,300.00 | $9,300.00 |
| **Reconciled cash** | **$198,300.00** | **$194,850.00** |
| Against the bank's minimum | $3,300.00 above | $150.00 below |
| Status | READY | NOT READY, 1 unrecorded item |

Hamza did his four tests again. This time they took forty minutes, because he knew where to look. The sheet, the memo and slide 2 all said $194,850.00.

## A new approval

The new pack was a new piece of work, so it needed its own approval. Nisha was with another client. Sana could also approve, and she works Monday to Thursday.

At 11:15 a.m. she wrote in the channel:

*"Approved to send: Lakeshore September month-end pack, second version. Status NOT READY, one unrecorded item: the returned check, $3,450.00. Reconciled cash $194,850.00. It goes to Dana so that she can record the check and tell her bank. It replaces Tuesday's pack."*

Her approval did not change the status. The books still did not agree with the bank, and only Dana could fix that. Sana did not approve the books. She approved sending this pack, with its open item named, because the client needed it before Thursday. A NOT READY pack leaves the firm only this way: a named person decides, and the approval says what is still open.

At 11:30 a.m. the new PDFs went to Dana from `reports@`, with a short message that Sana wrote herself.

> *"Dana, this replaces the pack we sent on Tuesday. The bank returned a check from Erie Street Diner, $3,450.00, and dated it September 30. Reconciled cash is $194,850.00, not $198,300.00. That is $150.00 below your bank's minimum. Your books do not show the returned check yet. Please use this pack on Thursday, not Tuesday's."*

In Cleveland it was 2:30 a.m.

## Wednesday and Thursday in Cleveland

Dana read the message at 8 a.m. on Wednesday, her time. She recorded the returned check in Lakeshore's books and called Tom Becker, the analyst at her bank, that afternoon.

On Thursday at 10 a.m. she put one pack on the table. Tom already knew the figure.

*"A hundred and fifty dollars under, and you called me before I found it,"* he said. *"Send me a note about the diner's check. That is all I need."*

![Wednesday, two ways. On the left, the old habit: fix one slide by hand. Slide 2 says 194,850 dollars, but the sheet still says 198,300, the memo still says 198,300 and READY, and slide 3 still says 198,300 with no item listed. A red label says the pieces disagree. On the right, the setup: run the job again. The sheet says 194,850, the memo says 194,850 and NOT READY, slide 2 says 194,850, and slide 3 says 194,850 with 1 unrecorded item. A green label says one run, every piece the same. Under both, four times: 9:00 a.m., the check reports the change; 9:40 a.m., the second run; 11:15 a.m., Sana approves 194,850 dollars; 11:30 a.m., the new pack goes to Dana. A band at the foot says Dana's bank meeting is the next day, and she walks in with one pack.](img/wednesday-two-ways.png)

Dana wrote to Nisha that evening. *"My old accountant would have found this in November, a month too late. Lakeshore's owner wants to talk to you."*
# What the setup did (/claude-and-chatgpt-2/case-4-nishas-month-end/what-the-setup-did)

---
type: Document
title: "What the setup did"
description: "Nisha lists what each part did, what only people did, how the setup differs from a document editor, where it can still go wrong, and who should change the method."
status: stable
order: 0.835
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:28Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "What the setup did" ]
last_verified: 2026-11-12
sources:
  - id: google-history
    title: "Google, Find what's changed in a file (Google Docs Editors Help)"
    resource: https://support.google.com/docs/answer/190843
  - id: deck-history
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: owner-connectors
    title: "Anthropic, Use connectors to extend Claude's capabilities (Claude Help Center)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: project-sharing
    title: "Anthropic, How can I create and manage projects? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects
  - id: no-source
    title: "Anthropic, Get started with Claude Sheets (Claude Help Center)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
generated:
  at: 2026-11-13T05:47:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

## Friday morning

On Friday, October 8, Nisha came in early. Lakeshore's owner would call at 6 p.m. Before that, she wanted to understand her own week. *What exactly had made it work?*

She wrote two lists.

## What the setup did

| The part | What it did this week | Without it |
|---|---|---|
| **The project** | Gave every run the same rules. Took one new rule on Tuesday, and kept it. | Someone pastes the rules each time, and forgets one |
| **The skill** | Wrote both memos in Sana's way. Knew that a returned check is an unrecorded item. | The memo depends on who wrote it |
| **The shared drive,** connected | Let every run, and the worker's morning check, read the same files | The files wait on one person's laptop |
| **The folder,** through the desktop app | Let Claude read Dana's three files where they were, before the firm copied them into the project. Held the bank's statement for Hamza's own tests. | Hamza uploads files one by one |
| **The borrowed desk** | Matched 3,400 lines in minutes, the same way each time: in three runs, two on Tuesday and one on Wednesday | Eight hours, and tired eyes |
| **The artifacts** | Held the pack as four pieces that every run updated | New files each time, with old ones left around |
| **The morning check** (the worker's routine) | Looked at the bank on a morning when nobody had asked | The firm finds out from the client |

No part was new. Each one is taught in an earlier section of this book ([Exhibit 1](exhibits.md#exhibit-1-where-the-earlier-sections-appear-in-this-case)). What was new was the joining.

## What people did

| The person | What only a person did |
|---|---|
| **Nisha** | Decided what the setup may and may not do. Approved Tuesday's pack, by name and figure. |
| **Sana** | Wrote the method. Saw what the first run forgot. Stopped a fix by hand. Approved Wednesday's pack. Wrote to Dana herself. |
| **Hamza** | Checked the arithmetic, the matching, the leftovers and the pieces, without Claude. |
| **Dana** | Recorded the returned check, and called her bank |

Nisha looked at the two lists side by side.

*"The setup did the work. We did the judgment. Before this week we spent most of our hours on the first list."*

![What the setup did, and what people did. Two columns. On the left, the setup: read the files, matched 3,400 lines, worked out the figure, built four pieces, ran again on Wednesday, watched the bank each morning. On the right, people: wrote the rules and the method, checked the result without Claude, approved by name and figure, stopped a fix by hand, told the client. A band at the foot says the setup repeats the work, and it does not carry the responsibility.](img/what-the-setup-did.png)

## Is this better than a document tool?

Hamza asked the question a student would ask. *"Dana's old accountant used Google Docs and Slides. Those have AI in them now too. What did we really gain?"*

Nisha answered in two parts.

*"For writing, nothing. Google's editors are very good. They also keep a better record of earlier versions of slides than ours do. If the job were to write a memo, I would not care which one we used."*[^google-history],[^deck-history]

*"But the job was never the memo. The job was the bank lines, the matching, the rule about returned checks, the four pieces that must agree, and the morning check. A document editor starts when someone has the figure. Our setup starts with the bank's file and ends with the pack."*

She added that the comparison has limits. The firm had not tested Google's AI features. And another firm could join other tools into a setup too.

![A document editor and a workplace. Six steps of one month-end pack in a row: read the bank's file, match 3,400 lines, work out the figure, apply the method, write the pieces, do it again next month. Under them, two rows. A document editor, with AI help: a person does steps 1 to 4 and step 6, and AI helps with step 5, writing the pieces; it helps when someone already has the figure. The firm's setup: Claude does all six steps; it starts at the bank's file and runs again next month. A line says that in both, a person checks, approves and tells the client. A band at the foot says the slow part of this job was never the writing.](img/a-document-editor-and-a-workplace.png)

She drew it as a table ([Exhibit 10](exhibits.md#exhibit-10-a-document-editor-and-a-workplace)).

| | A document editor, with AI help (Google's, or Claude's own docs) | The firm's setup |
|---|---|---|
| Where the work starts | When a person brings the figure | At the bank's file |
| Who does the matching | A person, perhaps with AI help in a spreadsheet | Claude, with a program |
| Where the rules are | In people's heads | In the project and the skill |
| Next month | Start again | Run it again |
| A late change | Fix each file by hand | Run it again |
| Who is responsible | People | People |

The last row was the same in both columns. She underlined it.

## Where it can still go wrong

Sana did not work Fridays. On Thursday evening she had left a list on Nisha's desk: what the setup does not do ([Exhibit 12](exhibits.md#exhibit-12-before-you-trust-a-setup)).

- **Instructions only ask.** The project says *"never send anything"*. A rule written in the instructions only asks Claude. A **setting** in the app really stops it. For example, an Owner decides which connected apps the firm's members may use at all.[^owner-connectors] Here a setting does the work: Nisha turned on only the shared drive, so no chat in Claude can send an email through a connected app.
- **The worker is different.** The worker is set up separately, in its Slack channel. If that channel can still reach `reports@`, the worker could send. It also runs the morning check. For the worker, *"change nothing in the pack"* is only a sentence. What protects the firm there is its habit: a named approval before anything leaves.
- **The pieces are still copies.** No piece reads another.[^no-source] One run writes them all, and a person checks that they agree.
- **Hamza's tests missed one thing.** His statement already showed the returned check on Tuesday. But he took the closing balance from Claude's run note, not from the statement. From now on, his first test compares the two.
- **A program can match wrongly.** Two payments of the same amount on the same day can be paired the wrong way round. Hamza's twenty pairs are a sample, not a proof.
- **The morning check only looks where it is told to.** It saw the returned check because it downloaded the bank's lines again. It would not see a mistake in Lakeshore's ledger.
- **The first download was too early.** Tuesday's run used Friday's file, which was four days old. Sana's note asked for a rule, and on Friday morning Nisha added it to the instructions: *"Compare the bank file's closing balance with the bank's statement for the month, in the same folder. If the two differ, or there is no statement yet, stop and say so. If the file is more than a day old, say that too."* The age of a file is only a warning. A file can be an hour old and still be too early. The bank's statement is the test. Before each run, Hamza now asks the worker in Slack for a fresh download himself, and saves a copy of the bank's statement to the month's folder in the drive. He keeps his own copy for his tests.
- **One person can now do a lot, fast.** That is the point of the setup. It is also why the approval must stay with a named person.

At the bottom Sana had written: *"It did two days of work in twenty-five minutes. It can do two days of damage in twenty-five minutes too. I will keep reading everything I sign."*

## What the firm had now

By Friday the firm owned something it had not owned on Monday: a setup that could do Lakeshore's month-end again in October, and in November. Most of it would work for another client with one new project.

Nisha saw that this was worth more than the pack. She also saw the question that Lakeshore's owner was going to ask.

> **Going further: who changes the method?** The project's instructions and Sana's skill are the firm's method. This week the instructions were changed twice, and nothing recorded who changed them, when, or who agreed. A change to the method needs the same care as a change to the pack: one person proposes it, another reviews it, and a record keeps both, with the date and the test run that followed. On a Team plan, the app can enforce part of this. A project is shared as **Can view** or **Can edit**, and only Can edit lets a member change the project's instructions.[^project-sharing] If Hamza has view access, the rule about who changes the method becomes a setting. Then keeping the list of current pieces in the instructions, which is Hamza's job today, must pass to someone who can edit.
>
> Teams that keep their instructions and skills as files can use **version control** for this. Every change is saved with its author and its date, and nothing is lost. A **pull request** is a proposed change with a page where it is described, checked, discussed and approved. It is Nisha's approval of one exact pack, applied to the method itself.
>
> You can work this way from the Claude desktop app's Code tab, which works in a folder on your computer, or with a separate app such as GitHub Desktop. Some desktop apps can open the pull request for you. Later in this book, [15.3 GitHub and the pull request](../../building-ai-workers/code-review/github-and-the-pull-request.md) teaches how.

[^google-history]: As verified on November 12, 2026, Google says "You can see changes that have been made to a document in Google Docs, Sheets, Slides, or Vids." A person with edit access can open an earlier version, name it and restore it. Find what's changed in a file, Google Docs Editors Help.
[^deck-history]: As verified on November 12, 2026, Anthropic says "Decks export to PowerPoint and PDF, or go straight to Google Slides as editable files." The help pages we checked describe no version history for decks. What are artifacts and how do I use them?, Anthropic.
[^owner-connectors]: As verified on November 12, 2026, Anthropic says that on Team and Enterprise plans "an Owner or Primary Owner needs to enable" connectors "for the organization" before members can use them, and that each person still signs in. Owners can also set each connector's actions to Always allow, Needs approval or Blocked, and members cannot override this. Connectors belong to each person's account, not to a project. Use connectors to extend Claude's capabilities, Anthropic.
[^no-source]: As verified on November 12, 2026, Anthropic says "Sheets can't pull live data from connected apps, and docs, decks, and dashboards can't use a sheet as a data source." Get started with Claude Sheets, Anthropic.

[^project-sharing]: As verified on November 13, 2026, Anthropic says "Can edit: Members can modify project instructions and knowledge", and that with Can view, members "cannot edit it". How can I create and manage projects?, Anthropic.
# Friday's decision (/claude-and-chatgpt-2/case-4-nishas-month-end/fridays-decision)

---
type: Document
title: "Friday's decision"
description: "The client's owner wants twenty packs a month, sent straight to the bank, for less money. Nisha must decide how far the setup may run alone, and what the work is worth now that preparing it is cheap. It is the same work a Forward Deployed Engineer does."
status: stable
order: 0.84
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:27Z
chapter: "F00G"
part: Front
expert_status: required
concepts: [ "Friday's decision" ]
last_verified: 2026-11-12
sources:
  - id: tag-routine
    title: "Anthropic, Set up routines (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/users/proactivity
  - id: openai-projects
    title: "OpenAI, Projects in ChatGPT (OpenAI Help Center)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - id: openai-scheduled
    title: "OpenAI, Scheduled tasks in ChatGPT (OpenAI Help Center)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
generated:
  at: 2026-11-13T05:47:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

## The call

At 6 p.m. on Friday, October 8, Nisha took a call from **Walter Brennan**, who owned Lakeshore Supply. In Cleveland it was 9 a.m.

He was friendly and direct.

*"Dana showed me what you did this week. I own three more companies, all smaller than Lakeshore. I want the same pack for each of them. And my bank would like a short one every week, not only at month-end. Send those straight to Tom Becker, so that Dana does not have to forward them."*

Then he asked about the price.

*"Dana says your computer did it in half an hour. So I expect each one costs a good deal less than nine hundred dollars."*

He wanted an answer on Monday.

## Two questions inside one

After the call, Nisha wrote down what he had really asked.

1. **How far may it run alone?** Each of the four companies would get one month-end pack and four **weekly packs** a month: twenty packs in all. A weekly pack is like the weekly cash file Lakeshore gets today. Walter wants the sixteen weekly packs sent straight to the bank. Could the setup prepare and send them with no person in between?
2. **What is the work worth now?** The firm's price had been two days of labor. In a normal month the labor was now about two hours.

## How far may it run alone?

Hamza made the case for letting it send. *"Twenty approvals a month, and most weeks nothing changes. If we read twenty packs in a hurry, we are not really reading them. Let the setup send a pack when the status is READY and the figure is above the minimum. Then we can spend our reading on the ones that are not, and read a few of the others."*

It was a fair argument. Sana did not work Fridays, so Nisha phoned her.

*"Tuesday's pack was READY, above the minimum, and wrong, because the bank's file was not complete yet,"* said Sana. *"Hamza's rule would have sent it."*

She was fair about it. *"Nisha's approval sent it too. The approval did not catch the error. The morning check did. Then a person read the new pack before it went."*

*"That is what I want to keep. When something changes, a person reads it before the bank does. And the bank has a name it can ask. The setup has run three times in its life. Ask me again when it has run thirty."*

*"Then the morning check protects us, not the approval,"* said Hamza.

Nisha wrote down both points. Neither of them was wrong.

Nisha saw one more thing, as an accountant. Tom Becker would rely on these packs. Sending them straight to him raised questions the firm had not yet answered. Did Walter give written permission to send to the bank directly? What did the firm's agreement with Walter cover? And every pack would need a line saying what it is: a prepared reconciliation, not an audit and not an assurance report.

Nisha thought about what a routine is. It runs without anyone watching. It can do whatever the worker can do, including sending email.[^tag-routine]

She drew a line with three places on it. The same line is a table in [Exhibit 11](exhibits.md#exhibit-11-three-answers-for-the-owner).

![How far may it run alone? An arrow runs left to right: the setup does more, and a person reads less, and later. Three cards on the line. Prepare only: the setup may read, match, build and post ready for review; a person must check, approve and send; the firm today. Send if READY: the setup may also send when the status is READY and the figure is above the minimum; a person must review every NOT READY pack and a sample of the others; Hamza proposes. Send always: the setup may prepare and send every pack; a person must read what went out, afterward; Walter asks. A band at the foot says Tuesday's pack was READY, above the minimum, and wrong.](img/how-far-may-it-run-alone.png)

The firm's habit sat in the first place: nothing goes to a client without a named approval. The owner was asking for the third.

## What is the work worth now?

Nisha put numbers on three ways to charge ([Exhibit 11](exhibits.md#exhibit-11-three-answers-for-the-owner)). All figures are made up.

**1. Charge for the hours.** About two hours of people's time for each month-end pack: perhaps $110.00. A weekly pack is smaller: perhaps $40.00. For each company: $110.00 + 4 × $40.00 = $270.00 a month. It is simple, and the owner would agree at once. But if the firm gets faster, it works fewer hours, so it earns less. And nobody would pay for the time spent building the setup.

**2. Charge for the pack.** Keep today's prices for each company: $900.00 for the month-end pack and $1,500.00 a month for the weekly work. That is $2,400.00 a month for each company. The client pays for a checked pack with a name on it, not for hours. The firm would have to explain what the name is worth: the four tests, the review, the correction on Wednesday. Walter had already said he wanted a lower price.

**3. Charge for the service.** One monthly fee for each company, perhaps $1,200.00. It covers the month-end pack, the weekly packs, the morning check and any correction. The firm earns the same in a quiet month and a bad one. It must decide how many clients three people can be responsible for, even when the setup does the work.

Today Lakeshore alone pays the firm $2,400.00 a month. For all four companies, multiply by four: the three answers would bring in about $1,080.00, $9,600.00 or $4,800.00 a month.

![Three answers for the owner. Three cards. Card 1, charge for the hours: about 270 dollars a month for each company; it is simple and cheap; the firm earns less each time it gets better. Card 2, charge for the pack: 2,400 dollars a month for each company; the client pays for a checked result with a name on it; the firm must explain what the name is worth. Card 3, charge for the service: about 1,200 dollars a month for each company; it covers the packs, the morning check and corrections; the firm must decide how many clients it can answer for. A band at the foot says the setup changed the cost of the work, and it did not change who is responsible.](img/three-answers-for-the-owner.png)

## What the setup changed, and what it did not

Nisha counted. Four companies, a month-end pack and four weekly packs each: twenty packs a month. By hand, that was impossible for a firm of three. With the setup, the building was easy: one new project for each company, the same skill, the same kind of schedule.

The reading was not easy. Twenty packs a month meant twenty approvals. Sana worked four days a week. And what if three clients had a problem on the same Friday, when Sana was away? Someone would have to read each one before the bank did.

*"He is right that the work got cheap,"* said Nisha. *"He is wrong about which work. Preparing got cheap. Being responsible for it did not."*

## The same parts in ChatGPT

Dana's own team worked in ChatGPT. Nisha checked whether the answer would be different there. It would not. ChatGPT has the same parts under similar names: projects with instructions, skills, plugins for connected apps, scheduled tasks, and files through its desktop app, as [ChatGPT 2.0](../tour/chatgpt.md) and [Set up the apps](../new-way-of-working/set-up-the-apps.md) show.[^openai-projects],[^openai-scheduled] The questions on her paper did not depend on the product.

## Friday evening

It was seven in the evening in Karachi. Nisha had until Monday.

She had two decisions to make, and they were connected. If the setup did more alone, the price could go down. But an approval means less when nobody has read the pack.

**What should Nisha tell Walter?**

Use the [questions for discussion](questions-for-discussion.md). The case does not say what she chose.

## This is the work you are preparing for

A **Forward Deployed Engineer (FDE)** works inside a company to solve its business problems with AI Workers.

> **It is the same work a Forward Deployed Engineer does.** Look at Nisha's week. A client brought a **real problem**: a report for a bank, every month. There were **real limits**: the bank's minimum, a reviewer who works four days, a Team plan, a deadline in Cleveland. **People wanted different things**: Walter a lower price, Sana her name only on what she had read, Hamza less reading, Dana one pack she could trust. And Nisha had to make **a decision about what to build**, and how far it may run alone.
>
> Every company is a new case like this one. Later in this book, you learn to do this work. The cases prepare you for it, because **an FDE's job is a case that never ends.**

![The work of a Forward Deployed Engineer. Every company is a new case, and Nisha's week had all four parts. A real problem: a report for a bank, every month, that took two days by hand. Real limits: the bank's minimum, a reviewer who works four days, a Team plan, a deadline. People who want different things: Walter a lower price, Sana her name only on what she read, Dana one pack she can trust. A decision about what to build: which parts to join, how far the setup may run alone, and what it is worth. A band at the foot says an FDE's job is a case that never ends.](img/the-work-of-an-fde.png)

This is why this part of the book ends with cases. [How this book teaches](../overview.md#why-cases-fit-this-book-so-well) said it at the start. Each case is one practice run.

[^tag-routine]: As verified on November 10, 2026, Anthropic says a routine in Claude Tag "uses that channel's connections with the same permissions as a typed request." [Case 3](../case-3-nishas-firm/overview.md) describes the worker and its channel. Set up routines, Claude Tag docs, Anthropic.
[^openai-projects]: As verified on November 11, 2026, OpenAI says project sharing "is available on ChatGPT Free, Go, Plus, Pro, Business, Enterprise, and Edu", and that "Project instructions apply only within that project". Projects in ChatGPT, OpenAI.
[^openai-scheduled]: As verified on November 11, 2026, OpenAI says "Scheduled tasks can use supported apps, including Gmail, Slack, and GitHub, when those apps are available for your account or workspace." Scheduled tasks in ChatGPT, OpenAI.

# The case at a glance (/claude-and-chatgpt-2/case-4-nishas-month-end/the-case-at-a-glance)

---
type: Document
title: "The case at a glance"
description: "The whole case in ten sentences, which part to use for which need, four rules, the words to remember, the work of a Forward Deployed Engineer, and how this case connects to the other three."
status: stable
order: 0.845
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-12T13:13:29Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
generated:
  at: 2026-11-12T13:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

## The case in ten sentences

1. Lakeshore Supply asks Nisha's firm for a month-end pack for its bank: a cover, a memo and three slides.
2. By hand the pack takes 17 hours, and most of that is matching about 3,400 bank lines and copying figures.
3. The firm already has every part it needs in Claude, and has never used them together.
4. In one afternoon it joins them: a project for the rules, a skill for the method, a connected drive and a folder for the files, a borrowed desk for the matching, four artifacts for the result, and a scheduled task for the time.
5. On Tuesday one request does the job in 25 minutes. People check it, Nisha approves $198,300.00 by name and figure, and the pack goes out as PDFs.
6. When the first run forgets something, the firm fixes the instructions, not the slide.
7. On Wednesday the morning check finds that the bank took back $3,450.00: a check that was not paid. Reconciled cash is $194,850.00, which is $150.00 under the bank's minimum.
8. The firm runs the job again, so every piece changes together. Sana approves the new figure and tells Dana a day before Dana's bank meeting.
9. The setup read, computed, built and repeated. People checked, approved, decided and told the client.
10. On Friday the client's owner asks for twenty packs a month, sent straight to the bank, for less. Nisha must decide how far the setup may run alone, and what the work is worth.

## Which part for which need

| The need | The part | Why this part |
|---|---|---|
| Rules for one client, the same in every chat | A **project** | Its instructions are read in every chat in the project |
| A method for one kind of work, for any client | A **skill** | Claude uses it when a job matches |
| Files you work on at your desk | A **folder,** through the desktop app | Claude reads them where they are, but only while the app is open |
| Files a job must read without you | A **connected app,** such as a shared drive | A job in the cloud can reach it |
| Heavy work: thousands of lines | The **borrowed desk** in the cloud | Claude runs a program there. The desk is cleared afterward. |
| The result, kept and updated | **Artifacts** | They last, and a run can update them by their links |
| Work at a set time | A **scheduled task**. Here, the worker's routine: the morning check. | It runs when nobody is there |
| Check, approve, tell | **A person** | No part carries the responsibility |

## Four rules from the case

1. **Join the parts.** Each part is useful alone. The time is saved where one part hands work to the next.
2. **Fix the setup, not the result.** A fix by hand lasts one month and reaches one piece. A fix in the instructions lasts, and the next run reaches every piece.
3. **Put files where the job can reach them.** A folder on your computer is for work at your desk. A connected drive is for work that runs without you.
4. **Keep the name with a person.** The setup makes checking faster. It does not make it optional.

## Words to remember

| Word | Meaning |
|---|---|
| Setup | The parts joined for one job: project, skill, files, schedule and artifacts |
| Project | A place that keeps files and instructions for one piece of work |
| Skill | Saved instructions that teach Claude one kind of job |
| Borrowed desk | The temporary computer in the cloud where Claude runs a program. It is cleared afterward. |
| Scheduled task | A job that runs at a set time, with nobody watching |
| Run note | A few lines Claude saves after each run: what it read, the figure, the pieces it updated |
| Month-end pack | The pieces a client needs at the end of a month: here, a cover, a memo and slides |
| Bank line | One payment in or out, as the bank records it |
| Matching | Pairing each bank line with the same payment in the ledger |
| The bank's minimum | The cash Lakeshore promised its bank to keep at month-end: $195,000.00 |
| Shared drive | An online folder the whole team uses, such as Google Drive |
| Connected app | An app, such as a shared drive, that Claude has been allowed to open |
| Deposit | Money paid into a bank account |
| Closing balance | The money in an account at the end of the last day |
| The worker | The firm's AI Worker: Claude, running inside Slack |
| The morning check | The worker's routine that looks at the bank's lines each morning |
| Ledger, or books | A company's own record of the money it paid in and paid out |
| Check | A paper order to a bank to pay money, also spelled cheque |
| Returned check | A check that the payer's bank refused to pay. The money is taken back. |
| Reconciled cash | The bank's balance, plus deposits the bank has not shown yet, minus checks the bank has not paid yet |
| Timing item | Money on its way, such as a check the bank has not paid yet. It sorts itself out. |
| Artifact | A piece of finished work in Claude that you can keep, change and share |
| AI Worker | An AI system you hand a whole job to, inside limits you set |
| Routine | Claude in Slack's name for a scheduled task. Here, the morning check. |
| Approval | A named person's written yes, which names the pack and its figure |
| Unrecorded item | Something the bank shows and the company's books do not show yet |

## The work this prepares you for

Nisha's week is the work of a **Forward Deployed Engineer (FDE)**: someone who solves a company's business problems with AI Workers. [Friday's decision](fridays-decision.md#this-is-the-work-you-are-preparing-for) explains why the cases prepare you for it.

## How this case connects to the others

You can read this case alone. If you have read the other three, this is how they fit.

![Four cases, one ladder. Four steps climb from left to right. Case 1, a helper: Nisha is present and checks each step. The question: is the work good? Case 2, a personal AI Worker: it works while she sleeps, and acts as her. The question: whose name is on it? Case 3, a team AI Worker: it has its own name, and three people can ask it. The question: whose word does it take? Case 4, one workplace: every part is joined for a job that repeats. The question: what stays with people? A band at the foot says each step up adds a question that the step below could not ask.](img/four-cases-one-ladder.png)

- [Case 1](../case-1-nishas-ai-team/overview.md) asked whether the work is good. Here, that is Hamza's four tests.
- [Case 2](../case-2-nishas-first-client/overview.md) asked whose name is on the work. Here, the pack goes from the firm's own mailbox.
- [Case 3](../case-3-nishas-firm/overview.md) asked whose word the worker takes: whose instructions it follows. Here, a named person approves each pack and its figure. That happened twice: on Tuesday and on Wednesday.
- It is the first case that uses the artifacts from [Build Something](../build-something/overview.md), and the first that joins every part of this section in one job. [Exhibit 1](exhibits.md#exhibit-1-where-the-earlier-sections-appear-in-this-case) lists them.
# Questions for discussion (/claude-and-chatgpt-2/case-4-nishas-month-end/questions-for-discussion)

---
type: Document
title: "Questions for discussion"
description: "Six core questions, nine optional questions from the case, and four optional questions that connect the case to the ideas in the series."
status: stable
order: 0.85
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-12T13:13:29Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
generated:
  at: 2026-11-12T13:13:29Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

Use these after you have read the six story pages. The first six are the core. The rest are optional.

## Core questions

1. By hand, the pack took 17 hours. Which of Hamza's six steps did the setup remove, which did it make shorter, and which did it leave as it was? What does that tell you about where the time went?
2. The firm used seven parts (see the table in [What the setup did](what-the-setup-did.md#what-the-setup-did)). Choose two, and say what would have gone wrong on Wednesday without each of them.
3. On Tuesday Sana stopped Hamza from typing the bank's minimum into slide 2. On Wednesday she stopped him from changing the figure on slide 2. What is the rule behind both? When would a fix by hand be the right choice?
4. Claude prepared both packs. Nisha approved one and Sana the other. List what each approver could know about the pack before she wrote her name, and how she knew it.
5. Which of Hamza's tests on Tuesday was designed wrongly? What independent evidence should every reconciliation approval require?
6. It is Friday evening in Karachi. What should Nisha tell Walter on Monday? Choose a place on the line (prepare only, send if READY, send always) and one way to charge. Then say one thing that could still go wrong with your answer, and who would catch it.

## Optional questions

7. Hamza wanted to keep every file in a folder on his computer. Nisha kept the monthly files in the shared drive. What would have happened at 9:00 a.m. on Wednesday if they had been only in his folder?
8. The matching ran on a borrowed desk that was cleared afterward. Where did the firm keep the things that had to last? Name three, and say where each one was.
9. The sheet, the memo and the slides each hold their own copy of the figure. The setup writes them in one run. Is that enough? What check would you add, and who would do it?
10. Hamza checked twenty matched pairs out of 3,395. Is that a good check? What kind of mistake would it miss?
11. Tuesday's run used a download that was four days old. Whose mistake was that: Claude's, Hamza's, or the setup's? How did the firm fix it?
12. Is this just Google Docs with AI? Say what a good document editor with AI help would have done for the firm this week, and what it would not have done. Be fair to both sides.
13. Walter says the computer did the work in half an hour, so the price should fall. Write the three strongest sentences Nisha could say in reply. Then write the strongest answer Walter could give.
14. The setup did two days of work in 25 minutes. Sana says it could do two days of damage as fast. Describe one way that could happen in this firm, and what would stop it.
15. The project's instructions changed twice this week, once on Tuesday and once on Friday. Who should be allowed to change them? Who should review the change, and where would you keep a record of it?

## Optional questions that connect to the series

16. **Where is Nisha on the ladder now?** [From helper to AI Worker](../behind-the-screen/from-helper-to-ai-worker.md) describes steps from a helper to a business AI Worker. Which step is the Lakeshore setup on? What is still missing for the next one?
17. **The desk and what lasts.** [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) says that work must be saved outside the desk. List everything in this case that outlived a desk, and where it was saved.
18. **Words and locks.** [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) says permissions, not words, keep a job safe. Which of the project's rules are only words? Which are backed by something Claude cannot do?
19. **All four cases.** Each case added one question: is the work good, whose name is on it, whose word does the worker take, and what stays with people. Answer all four for a job of your own that comes back every week or month.
# Exhibits (/claude-and-chatgpt-2/case-4-nishas-month-end/exhibits)

---
type: Document
title: "Exhibits"
description: "The details behind the story: where the earlier sections appear, the setup part by part, the project's instructions, the skill, the request and the run notes, the two runs, the week, the hours, the four tests, a document editor and a workplace, three answers for the owner, a checklist for trusting a setup, and Claude and ChatGPT side by side."
status: stable
order: 0.86
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T07:50:33Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
sources:
  - id: run-sheet
    title: "Nisha's Month-End: practical run sheet (the practical has not yet been run)"
    resource: "appendix-practical-run-sheet.md"
  - id: sandbox
    title: "Anthropic, Claude Cowork architecture overview (Claude Help Center)"
    resource: https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
  - id: artifact-link
    title: "Anthropic, Share session output as artifacts (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/artifacts
  - id: tag-routine
    title: "Anthropic, Set up routines (Claude Tag)"
    resource: https://claude.com/docs/claude-tag/users/proactivity
  - id: owner-connectors
    title: "Anthropic, Use connectors to extend Claude's capabilities (Claude Help Center)"
    resource: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
  - id: projects
    title: "Anthropic, What are projects? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/9517075-what-are-projects
  - id: skills
    title: "Anthropic, How to create custom skills (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: plans
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: tag-plans
    title: "Anthropic, Work with Claude Tag"
    resource: https://claude.com/docs/claude-tag/overview
  - id: routines
    title: "Anthropic, Automate work with scheduled tasks (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/routines
  - id: google-history
    title: "Google, Find what's changed in a file (Google Docs Editors Help)"
    resource: https://support.google.com/docs/answer/190843
  - id: sheet-history
    title: "Anthropic, Get started with Claude Sheets (Claude Help Center)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: docs-history
    title: "Anthropic, Get started with Claude Docs (Claude Help Center)"
    resource: https://support.claude.com/en/articles/16923645-get-started-with-claude-docs
  - id: deck-history
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: no-source
    title: "Anthropic, Get started with Claude Sheets (Claude Help Center)"
    resource: https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets
  - id: openai-projects
    title: "OpenAI, Projects in ChatGPT (OpenAI Help Center)"
    resource: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - id: openai-scheduled
    title: "OpenAI, Scheduled tasks in ChatGPT (OpenAI Help Center)"
    resource: https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
generated:
  at: 2026-11-13T07:50:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

These exhibits hold the details behind the story. Read them when a story page points here.

## About this case, in full

- **The story is fiction.** The firm, the client, the bank, the people, the figures and the times are made up.
- **The product facts were checked.** What each part of Claude can do comes from Anthropic's help pages, checked in November 2026 for this case and for the earlier sections it builds on. Each fact has a note with its source.
- **The joining was not replayed.** Nobody ran this exact setup on a Team plan for this case. The run times (25 minutes, 6 minutes) and the line counts are **illustrative**. The [practical run sheet](appendix-practical-run-sheet.md) says how to test it.[^run-sheet]
- **Eight things the story assumes.** A chat in a project can read a connected drive, and save a file there. It runs the matching as a program on the cloud computer.[^sandbox] A run updates existing artifacts when it is given their links.[^artifact-link] Three people on a Team plan can share one project, one skill and the four pieces. The worker in Slack can run one more routine, as it does in [Case 3](../case-3-nishas-firm/overview.md), and read the latest run note in the drive.[^tag-routine] A sheet can hold the month's 6,800 lines. The lab's free path works as written. The run sheet tests each one.
- **The matching rule is simplified.** Real matching also uses reference numbers, payment types and names, and treats every unclear pair as a question for a person.
- **It is not accounting advice.** A real bank reconciliation, and a real promise to a lender, have more detail than one figure. A check deposited late in September can come back by September 30, so the date in the story is realistic. Banks differ in how soon such a line appears in a download. And a real promise to a lender is usually tested in a more detailed way than one adjusted bank balance. The $195,000.00 rule here is made up for the case. So Wednesday's $150.00 is a shortfall under the case's own simple rule. It is not a finding about any real loan.

## Exhibit 1: Where the earlier sections appear in this case

| In this case | You learned it in |
|---|---|
| Handing over a whole job, and checking what comes back | [The New Way of Working](../new-way-of-working/overview.md) |
| A folder on a computer, read through the desktop app | [Set up the apps](../new-way-of-working/set-up-the-apps.md) |
| The temporary computer in the cloud | [Where the work happens](../new-way-of-working/where-the-work-happens.md) and [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) |
| Connected apps and skills | [Claude 2.0: conversations and artifacts](../tour/claude-conversations.md) |
| Scheduled tasks | [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md) |
| Permissions, not words | [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) |
| Projects (the classic kind) | [Docs](../build-something/docs.md) |
| The sheet, the doc, the deck and the design | [Build Something](../build-something/overview.md) |
| A worker in Slack with its own name | [Case 3](../case-3-nishas-firm/overview.md) |

## Exhibit 2: The setup, part by part

| Part | What it holds | Where it lasts | Plan |
|---|---|---|---|
| The project, "Lakeshore month-end" | The client's rules, three files from Dana, the links of the four pieces. It uses the shared drive, the only connected app Nisha turned on for the firm.[^owner-connectors] | In the firm's Claude account | Every plan. Free allows five projects.[^projects] |
| Sana's skill | The memo method: READY, NOT READY, unrecorded items | In Claude's settings | Every plan, with code execution turned on[^skills] |
| The shared drive, connected | The bank's lines, the ledger, the matched list, the run notes. From Friday, a copy of the bank's statement too. | In the drive | A connected app |
| Hamza's folder | Dana's three files, before they were copied to the project, and the bank's statement for Hamza's own tests | On his computer | Needs a paid plan and the desktop app |
| The borrowed desk | Nothing. It runs the matching program and is cleared.[^sandbox] | Nowhere | |
| The four artifacts | The sheet, the memo, the slides, the cover | In the firm's Claude account | Docs, slides and designs on every plan. Sheets need a paid plan.[^plans] |
| The routine (a scheduled task) | One instruction, and a time | With the worker in Slack, in the firm's channel[^tag-routine] | Claude in Slack is on Team and Enterprise plans.[^tag-plans] In Claude itself, scheduled tasks need a paid plan.[^routines] |

## Exhibit 3: The project's instructions

> **Lakeshore month-end.** You prepare the month-end pack for Lakeshore Supply, Cleveland. The pack is for Lakeshore's bank.
>
> **Files.** The month's bank lines and ledger are in the shared drive, in `Lakeshore/` and then the month, for example `2027-09`. Use the newest bank file. Before you start, compare its closing balance with the bank's statement for the month, in the same folder. If the two differ, or there is no statement yet, stop and say so. If the file was downloaded more than a day ago, say that too. In the run note, name the ledger file you used and its date. The bank's letter and the layout the bank wants are in this project's files.
>
> **Method.** Match each bank line to a ledger line with the same amount and a date no more than five days apart. Use the name or check number too, where there is one. If a bank line could match more than one ledger line, pair it with one, and list the pair under Needs a look. List every line that has no match. Work out reconciled cash: the bank's closing balance, plus deposits the bank has not shown yet, minus checks the bank has not paid yet. Save the matched list to the month's folder.
>
> **The pack.** Update these four pieces, and do not make new ones: the sheet [link], the memo [link], the slides [link], the cover [link]. Write the memo with the month-end memo skill. Slide 2 shows reconciled cash and the bank's minimum, side by side. The bank's minimum is $195,000.00.
>
> **Run note.** After every run, save a note to the month's folder: the files you read, the number of lines matched, the lines left over, reconciled cash, and the pieces you updated. If this is not the first run for the month, say what changed.
>
> **Never.** Never send anything to anyone. Never change a file in the drive that you did not make. If the bank and the books do not agree, say so in the first line. Nisha or Sana approves every pack before it leaves the firm.

Sentences were added twice during the week: the one about slide 2, on Tuesday, and the ones about the bank's statement, the age of the bank file and the ledger file, on Friday. From Friday, Hamza saves a copy of the bank's statement to the month's folder before each run.

## Exhibit 4: Sana's skill

> **Month-end memo.** Use this when asked for a month-end memo.
>
> 1. The first line is the status. Write **READY** when reconciled cash agrees with the cash balance in the ledger and nothing is unrecorded. Write **NOT READY** when anything is unrecorded. The status says whether the books agree with the bank. It does not say the pack may go out. A person decides that, in the approval.
> 2. A **timing item** is in the ledger and not yet at the bank: a deposit the bank has not shown yet, or a check it has not paid yet. Count them. Do not list them unless asked.
> 3. An **unrecorded item** is at the bank and not in the ledger: a returned check, a bank fee the company has not entered yet, a payment nobody entered. List each one directly under the status, with its date and amount.
> 4. Then give reconciled cash, and how far it is above or below any minimum the client must keep.
> 5. Never write that the books are correct. Write what was compared, and what agreed.

## Exhibit 5: The request and the run note

**The request, Tuesday, 10:05 a.m.**

> *"Prepare the September 2027 month-end pack."*

**The run note, Tuesday, 10:30 a.m.** (illustrative)

| | |
|---|---|
| Files read | Bank lines, downloaded October 1. Ledger, downloaded October 1. |
| Lines | 3,395 bank lines, 3,404 ledger lines |
| Matched | 3,395 pairs |
| Left over | 9 ledger lines: 2 deposits, $6,120.00, and 7 checks, $9,300.00 |
| Needs a look | 2 pairs with the same amount on the same day. *Added by Hamza afterwards: confirmed both by hand.* |
| Reconciled cash | $198,300.00. Agrees with the ledger. |
| Status | READY |
| Pieces updated | The sheet, the memo, the slides, the cover |

**The run note, Wednesday, 10:00 a.m.** (illustrative)

| | |
|---|---|
| Files read | Bank lines, downloaded October 6. Ledger, downloaded October 1. |
| Lines | 3,396 bank lines, 3,404 ledger lines |
| Matched | 3,395 pairs |
| Left over | 9 ledger lines, as before. 1 bank line: a returned check, Erie Street Diner, $3,450.00, dated September 30. |
| Reconciled cash | $194,850.00. The ledger says $198,300.00. |
| Status | NOT READY, 1 unrecorded item |
| Pieces updated | The sheet, the memo, the slides, the cover |
| Changed since the last run | The bank's closing balance fell by $3,450.00. Reconciled cash fell by $3,450.00. |

## Exhibit 6: Two runs

| | Tuesday's run | Wednesday's run |
|---|---|---|
| Bank's closing balance | $201,480.00 | $198,030.00 |
| Add: deposits the bank has not shown yet | $6,120.00 | $6,120.00 |
| Subtract: checks the bank has not paid yet | $9,300.00 | $9,300.00 |
| **Reconciled cash** | **$198,300.00** | **$194,850.00** |
| The bank's minimum | $195,000.00 | $195,000.00 |
| Above or below the minimum | $3,300.00 above | $150.00 below |
| Status | READY | NOT READY, 1 unrecorded item |
| Approved by | Nisha, 4:10 p.m. | Sana, 11:15 a.m., with the unrecorded item named |
| Sent to Dana | 4:25 p.m. | 11:30 a.m., *"this replaces Tuesday's pack"* |

## Exhibit 7: The week

Cleveland is nine hours behind Karachi in October.

| When, in Karachi | In Cleveland | What happened |
|---|---|---|
| Fri, Oct 1, 4:00 p.m. | 7:00 a.m. | The worker downloads September's bank lines, as it does every Friday |
| Mon, Oct 4, afternoon | early morning | The firm builds the setup |
| Tue, Oct 5, 10:05 a.m. | 1:05 a.m. | Hamza's request. The run ends at 10:30 a.m. |
| Tue, 2:00 p.m. | 5:00 a.m. | Sana's review. One rule is added, and the job runs again. |
| Tue, 4:10 p.m. | 7:10 a.m. | Nisha approves $198,300.00 |
| Tue, 4:25 p.m. | 7:25 a.m. | The pack goes to Dana |
| Wed, Oct 6, 9:00 a.m. | midnight | The morning check reports the returned check |
| Wed, 9:40 a.m. | 12:40 a.m. | The second run. It ends at 10:00 a.m. |
| Wed, 11:15 a.m. | 2:15 a.m. | Sana approves $194,850.00 |
| Wed, 11:30 a.m. | 2:30 a.m. | The new pack goes to Dana |
| Wed, 5:00 p.m. | 8:00 a.m. | Dana reads it, and later calls her bank |
| Thu, Oct 7, 7:00 p.m. | 10:00 a.m. | Dana meets her bank, with one pack |
| Fri, Oct 8, 6:00 p.m. | 9:00 a.m. | Walter Brennan calls Nisha |

## Exhibit 8: By hand, and with the setup

All times are illustrative.

| | By hand | With the setup |
|---|---|---|
| Download the files | 1 hour | The worker does it |
| Match about 3,400 lines | 8 hours | Part of a 25-minute run |
| Work out the figure | 1 hour | Part of the run |
| Write the memo | 2 hours | Part of the run |
| Make the slides and the cover | 2 hours | Part of the run |
| Check and review | 3 hours | Hamza 1 hour, Sana 45 minutes |
| Approve | 15 minutes | 15 minutes |
| **People's time each month** | **About 17 hours** | **About 2 hours** |
| Built once | Nothing | About 6 hours: three people, one afternoon |
| A late change | Most of a day | A second run, and about an hour of checking |

## Exhibit 9: Hamza's four tests

None of them uses Claude.

| Test | How | What it can miss |
|---|---|---|
| The arithmetic | A calculator, three lines | A wrong closing balance. On Tuesday Hamza took it from Claude's run note, not from the bank's statement, and missed the returned check. From now on, he compares the two first. |
| The matching | Twenty pairs, chosen at random, read against the bank's own file | A wrong pair among the other 3,375 |
| The leftovers | Every leftover line, found in the ledger | A line the program wrongly matched, so that it is not left over. The test shows where each line came from. It does not show that each one will clear. For that, he looks for each one in the bank's first October lines, a few days later. |
| The pieces | Open the sheet, the memo and slide 2. Do they say the same? | A figure in a place he did not open |

## Exhibit 10: A document editor and a workplace

| | A document editor, with AI help (Google's, or Claude's own docs) | The firm's setup |
|---|---|---|
| Good for | Writing and editing a document together | A job that starts with files and ends with documents |
| Where the work starts | When a person brings the figure | At the bank's file |
| Who does the matching | A person, perhaps with AI help in a spreadsheet | Claude, with a program on a borrowed desk |
| Where the rules are | In people's heads, or pasted each time | In the project and the skill |
| Next month | Start again | Run it again |
| A late change | Fix each file by hand | Run it again |
| History of a document | Google's editors keep a version history[^google-history] | Sheets have one, and the Docs page speaks of one.[^sheet-history],[^docs-history] Anthropic's pages describe none for decks.[^deck-history] |
| Who is responsible | People | People |

This table is fair only if you read it both ways. A firm can also build a job like this around other tools. We did not test Google's AI features for this case. The point is not which editor is better. It is the difference between a place to write and a setup that does the job.

## Exhibit 11: Three answers for the owner

All figures are made up. Twenty packs a month: four companies, each with one month-end pack and four weekly packs.

| | 1. Charge for the hours | 2. Charge for the pack | 3. Charge for the service |
|---|---|---|---|
| The price | About $110.00 a month-end pack and $40.00 a weekly pack | $900.00 a month-end pack and $1,500.00 a month for the weekly work | About $1,200.00 a month for each company |
| For each company, each month | $270.00 | $2,400.00 | $1,200.00 |
| For all four, each month | $1,080.00 | $9,600.00 | $4,800.00 |
| Today, for Lakeshore alone | $2,400.00 | $2,400.00 | $2,400.00 |
| What the client pays for | People's time | A checked pack with a name on it | The packs, the morning check and corrections |
| Good for the client | Cheap, and easy to understand | A fixed price for a result | One fee, and no bill for a bad month |
| Risk for the firm | It earns less each time it gets better. Nobody pays for building the setup. | It must explain what the name is worth | It must decide how many clients three people can answer for |
| What it still trusts | That hours measure the work | That the client values the tests | That bad months are rare |
| Who relies on the pack | Dana, and through her the bank | The same | The same |

And the line Nisha drew, for how far a task may run alone.

| | The setup may | A person must |
|---|---|---|
| Prepare only | Read, match, build, post *"ready for review"* | Check, approve, send |
| Send if READY | Also send, when the status is READY and the figure is above the minimum | Review every NOT READY pack, and a sample of the others |
| Send always | Prepare and send every pack | Read what went out, afterward |

## Exhibit 12: Before you trust a setup

1. **Can you say what each part is for?** One line for each: the project, the skill, the files, the schedule, the artifacts.
2. **Where does each file live, and which jobs can reach it?** A job that must run without you cannot rely on a folder on your computer: it can be read only while the desktop app is open.
3. **What lasts after the desk is cleared?** The method, the matched list and the run note must be saved somewhere else.
4. **Which rules are sentences, and which are settings?** For example, which connected apps are turned on is a setting. A sentence asks. A setting stops. Know which rules have only a sentence.
5. **Does every run update the same pieces?** Give the run their links, and check that it did not make new ones.
6. **Do the pieces agree?** No piece reads another.[^no-source] Open each one.
7. **Who checks, and without what?** At least one check must not use the AI.
8. **Who approves, by name, and what does the approval name?** The pack, its figure, and anything still open.
9. **What does the morning check do when it finds something?** Reports, and changes nothing, is the safe answer.
10. **How many times has it run?** A setup that has run three times has not been tested by a strange month yet.
11. **Who may change the method, and who reviews the change?** The instructions and the skill are the method. Keep a record of each change: who made it, when, and who agreed. [15.3 GitHub and the pull request](../../building-ai-workers/code-review/github-and-the-pull-request.md) shows one way.

## Exhibit 13: Claude and ChatGPT side by side

Lakeshore works in ChatGPT. The same setup can be built there.

| The need | In Claude | In ChatGPT |
|---|---|---|
| Rules for one piece of work | A project's instructions[^projects] | A project's instructions[^openai-projects] |
| A method | A skill | A skill, called with @ and its name |
| Files on your computer | A folder, through the desktop app | Source folders, through the desktop app |
| Connected apps | Connectors | Plugins |
| Work at a set time | A scheduled task,[^routines] or a routine in Claude in Slack | A scheduled task[^openai-scheduled] |
| The result | Artifacts: a sheet, a doc, a deck, a design | Its own tools for the same jobs, as [Build Something](../build-something/overview.md) shows |

The ChatGPT names come from [ChatGPT 2.0](../tour/chatgpt.md), [Set up the apps](../new-way-of-working/set-up-the-apps.md) and [Build Something](../build-something/overview.md). The names differ, and so do the plans that include each part. The four rules in [The case at a glance](the-case-at-a-glance.md#four-rules-from-the-case) are the same.

[^run-sheet]: The [practical run sheet](appendix-practical-run-sheet.md) says how to run the exercise and record it. It has not yet been run.
[^sandbox]: As verified on November 9, 2026, Anthropic says that in cloud sessions "the agent loop and code execution run in an isolated, temporary sandbox on Anthropic-managed infrastructure", and that each session's sandbox is "created when the session starts and destroyed when it ends". Claude Cowork architecture overview, Anthropic.
[^artifact-link]: As verified on November 11, 2026, Anthropic says that to update an artifact from a different session, you give Claude its link: "Without either, a new session creates a new artifact instead of updating one." Anthropic's guide says this about artifacts made in the Code tab. This case assumes the same for a chat in a project, and has not tested it. Share session output as artifacts, Anthropic.
[^tag-routine]: As verified on November 10, 2026, Anthropic says a routine in Claude Tag "uses that channel's connections with the same permissions as a typed request." [Case 3](../case-3-nishas-firm/overview.md) describes the worker and its channel. Set up routines, Claude Tag docs, Anthropic.
[^owner-connectors]: As verified on November 12, 2026, Anthropic says that on Team and Enterprise plans "an Owner or Primary Owner needs to enable" connectors "for the organization" before members can use them, and that each person still signs in. Owners can also set each connector's actions to Always allow, Needs approval or Blocked, and members cannot override this. Connectors belong to each person's account, not to a project. Use connectors to extend Claude's capabilities, Anthropic.
[^projects]: As verified on November 11, 2026, Anthropic says projects "are available to all users, including those with free Claude accounts", that free users can make at most five, and that each project can have its own instructions and files. What are projects?, Anthropic.
[^skills]: As verified on November 11, 2026, Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". How to create custom skills, Anthropic.
[^plans]: As verified on November 11, 2026, Docs, Slides and Design are on every Claude plan, and Sheets needs a paid plan. What are artifacts and how do I use them?, Anthropic.
[^tag-plans]: As verified on November 10, 2026, Anthropic says "Claude Tag is available on Team and Enterprise plans" and "isn't available on individual plans (Free, Pro, Max, or Ultra)". It was in public beta. Work with Claude Tag, Anthropic.
[^routines]: As verified on November 11, 2026, with the plan list checked again on November 13, 2026, Anthropic says scheduled tasks "are available on Pro, Max, Ultra, Team, and Enterprise plans", that each run opens as a new session, and that Claude "can use an included connector during a run, including writes". Automate work with scheduled tasks, Anthropic.
[^google-history]: As verified on November 12, 2026, Google says "You can see changes that have been made to a document in Google Docs, Sheets, Slides, or Vids." A person with edit access can open an earlier version, name it and restore it. Find what's changed in a file, Google Docs Editors Help.
[^sheet-history]: As verified on November 12, 2026, Anthropic says "Version history shows earlier versions of a sheet and can restore an earlier version", "which also removes edits made after it." Get started with Claude Sheets, Anthropic.
[^docs-history]: As verified on November 12, 2026, Anthropic's Docs page refers to a doc's version history. We have not tested what it keeps or for how long. Get started with Claude Docs, Anthropic.
[^deck-history]: As verified on November 12, 2026, Anthropic says "Decks export to PowerPoint and PDF, or go straight to Google Slides as editable files." The help pages we checked describe no version history for decks. What are artifacts and how do I use them?, Anthropic.
[^no-source]: As verified on November 12, 2026, Anthropic says "Sheets can't pull live data from connected apps, and docs, decks, and dashboards can't use a sheet as a data source." Get started with Claude Sheets, Anthropic.
[^openai-projects]: As verified on November 11, 2026, OpenAI says project sharing "is available on ChatGPT Free, Go, Plus, Pro, Business, Enterprise, and Edu", and that "Project instructions apply only within that project". Projects in ChatGPT, OpenAI.
[^openai-scheduled]: As verified on November 11, 2026, OpenAI says "Scheduled tasks can use supported apps, including Gmail, Slack, and GitHub, when those apps are available for your account or workspace." Scheduled tasks in ChatGPT, OpenAI.
# Teaching note (for instructors) (/claude-and-chatgpt-2/case-4-nishas-month-end/teaching-note-for-instructors)

---
type: Document
title: "Teaching note (for instructors)"
description: "For instructors: learning objectives, a 75-minute discussion plan built on the six core questions, a board plan with a decision layout, notes on each question, takeaways, two objections students raise, what is assumed and not observed, lab grading, and the final assessment."
status: stable
order: 0.87
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:28Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
sources:
  - id: run-sheet
    title: "Nisha's Month-End: practical run sheet (the practical has not yet been run)"
    resource: "appendix-practical-run-sheet.md"
generated:
  at: 2026-11-13T05:47:28Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

This note is for instructors. Students should read the case and the exhibits first.

## What the case is about

A firm of three has every part of the Claude app and uses each one alone. A monthly job forces them to join the parts: a project, a skill, a connected drive, a folder, the temporary computer in the cloud, artifacts and a scheduled task. Two days of work become two hours. When the bank's figures change, the setup notices first and does the job again.

The case is the capstone of this part of the book. Its claim is that the parts are more useful joined than alone, and that joining them moves people's time from doing the work to answering for it. The closing decision asks how far that may go.

## Learning objectives

After this case, a student can:

1. choose the right part for each need, and say why;
2. join the parts into one setup for a job that repeats;
3. say what the setup does and what stays with a person;
4. fix the setup, not the result, when something is wrong;
5. place files where the job that needs them can reach them;
6. weigh how far a setup may run alone, and what the work is worth when preparing it becomes cheap;
7. answer the four questions of the series for a job of their own: is the work good, whose name is on it, whose word does the worker take, and what stays with people.

## Before class

- Students read the six story pages and the exhibits, about 50 minutes. The lab takes 75 to 110 minutes more.
- The case stands alone. The overview's part *You do not need the earlier cases* gives a new reader what they need.
- If students do the lab, they should do it after part 3 and before part 4.

## Discussion plan (75 minutes)

| Minutes | Question | Aim |
|---|---|---|
| 0 to 10 | Core 1. Where did the 17 hours go? | The time was in matching and copying, not in writing. A better editor would not have saved it. |
| 10 to 25 | Core 2. Take one part away. | Each part does one thing. Wednesday needs the schedule, the drive, the skill's rule and the links. |
| 25 to 40 | Core 3. Fix the setup, not the result. | A fix by hand reaches one piece for one month. Students should also find when a fix by hand is right. |
| 40 to 50 | Core 4 and 5. What could each approver know, and which test was wrong? | Approval rests on tests done without the AI. The setup makes them faster, not optional. |
| 50 to 70 | Core 6. What does Nisha tell Walter? | A vote on the line, then on the price. Then: what does your answer still trust? |
| 70 to 75 | Wrap-up | The four rules |

## Board plan

Draw two columns early and keep them up: **the setup did** and **people did**. Fill them from the students' answers to core 1 and 2. By core 4 the right column should hold only checking, approving, deciding and telling.

### Decision layout for core 6

| | Prepare only | Send if READY | Send always |
|---|---|---|---|
| Charge for the hours | | | |
| Charge for the pack | | | |
| Charge for the service | | | |

Ask each student to put a mark in one square. Then ask the students in the most crowded square what they still trust, and the students in the emptiest square to defend it.

## Notes on the core questions

**Core 1.** The setup removed steps 1 to 5 as people's work and shortened step 6. The lesson is that the slow part was before the writing. Students who say *"the AI wrote the memo faster"* have missed where the hours were.

**Core 2.** Good answers are concrete. Without the scheduled task, the firm learns about the returned check from the client. Without the drive, the task cannot read the file at 9:00 a.m. Without the skill's rule, the memo may call a returned check a timing item. Without the links, the second run makes four new pieces and leaves the old ones around.

**Core 3.** The rule: change the thing that makes the result. A fix by hand is right when the setup cannot be run again in time, or when the piece is the only one of its kind. Then the fix should be written down, and the setup changed afterward.

**Core 4 and 5.** These questions separate accountability from error prevention. A named approval says who answers for the figure. It does not find errors. On Tuesday the approval rested on a test that took the closing balance from Claude's run note instead of the bank's statement, so the error got through. Do not let students conclude that the morning check makes up for a weak test. Ask: which of Hamza's tests was designed wrongly, and what independent evidence should every reconciliation approval require? A good answer: the bank's own closing balance, from a file the setup never touched. Nisha knew what Hamza had checked, and how. Sana knew that, and she had read the memo herself. Neither could know that all 3,395 pairs were right. Ask what would raise their confidence: a larger sample, a second matching method, a comparison with the ledger's own balance.

**Core 6.** No answer is right. Point out that Tuesday's pack was READY, above the minimum, and wrong: *send if READY* would have sent it. But so did Nisha's approval. Ask what an approval adds, if it does not find every error: a name that answers for the figure, and a person who reads every correction before the client does. Hamza's reply, that the check protects the firm and not the approval, is a fair point and deserves a vote of its own. Students who choose *send always* should be asked who reads twenty packs afterward, and what happens on the day one is wrong. Students who choose *prepare only* should be asked how three people approve twenty packs a month. Students who charge for the hours should be asked who pays for the next setup. Students who keep $900.00 should say the sentence they would say to Walter.

## Takeaways for the wrap-up

1. Each part is useful alone. Joined, they do a whole job.
2. The time was saved where one part hands work to the next, with no copying in between.
3. Fix the setup, not the result.
4. Where a file lives decides which jobs can read it.
5. The setup changed the cost of the work. It did not change who answers for it.

## When students say "Google Docs does this too"

Take the point seriously (optional question 12). For writing and editing together, Google's editors are as good, and they keep a version history for slides, which Anthropic's pages do not describe for decks. Say so. Then ask where the firm's 17 hours were. They were in reading and matching the bank's lines, and in copying one result into several places. A document editor, with or without AI help, starts when someone has the figure. Do not let the class turn this into a contest between products: a firm could join other tools into a setup too, and ChatGPT has the same parts ([Exhibit 13](exhibits.md#exhibit-13-claude-and-chatgpt-side-by-side)). The lesson is the difference between a place to write and a setup that does the job.

## When students say "then the accountants are not needed"

Ask who found that slide 2 had no minimum on it, who knew that a bank's month is not finished on the first morning, and who wrote to Dana. Then ask what Hamza should be learning now, if not matching. The case's answer is in the right-hand column of the board.

## Running the class with non-accountants

The accounting is three lines and one subtraction. For accountants in the class, say what is simplified: a returned check is an adjustment to the books, the first download was made before the bank had finished posting September 30, and a real lender's test of cash is more detailed than one figure. The case also stops one step early. After Dana records the returned check, a third run would show the books and the bank in agreement again. Ask the class whether the bank needs that final pack, or whether Wednesday's pack and Dana's call are enough. Give non-accountants the two words they need: a timing item clears by itself, and an unrecorded item does not.

## When students ask about versioning the method

Optional question 15 and the *Going further* box in [What the setup did](what-the-setup-did.md#what-the-firm-had-now) raise it. The instructions changed on Tuesday and on Friday, and nothing recorded who changed them or who agreed. Let students see that this is the same problem as approving a pack: a change to the method needs a proposer, a reviewer and a record. Teams that keep instructions and skills as files can use version control and pull requests for this. Do not teach the tool here. [15.3 GitHub and the pull request](../../building-ai-workers/code-review/github-and-the-pull-request.md) teaches it later in the book.

## Notes on the series questions

**Question 16.** The setup is between a team AI Worker and a business AI Worker. It has shared rules, a lasting method and a schedule. It still depends on three named people, and its rules are mostly sentences.

**Question 17.** The rules (in the project), the method (in the skill and the instructions), the matched list and the run notes (in the drive), the four pieces (as artifacts), and the approvals (in Slack). The matching program itself was not kept, and did not need to be.

**Question 18.** *"Never send anything"* is backed by a setting: Nisha, as Owner, turned on only the shared drive as a connected app, so no chat in Claude can send mail. Note that connectors belong to each person's account, not to a project, so the lock is at the firm, not the project. The worker is set up separately: if its channel still holds the firm's mailbox, *"change nothing in the pack"* is only a sentence there. *"Never change a file you did not make"* is only a sentence, unless the drive connection is read-only for those files. *"Update these pieces, do not make new ones"* is only a sentence.

## What is assumed, not observed

The product facts come from Anthropic's help pages. The joined setup was not run for this case, so the run times and line counts are illustrative. Eight assumptions matter: that a chat in a project reads and writes a connected drive; that it runs the matching as a program in the cloud; that a run updates artifacts by their links; that three people can share the project, the skill and the pieces; that the worker in Slack can hold one more routine; that the worker can read the latest run note; that a sheet holds the month's lines; and that the lab's free path works as written. The [practical run sheet](appendix-practical-run-sheet.md) tests each of them.[^run-sheet] If your class finds that one behaves differently, that is a good discussion, and please tell the editors.

## Grading the lab (10 points)

Use the table in the [lab](lab-build-the-month-end.md#how-the-lab-is-graded). Two things to look for.

- In Part 4, the tests must be the student's own. An answer that says *"Claude confirmed it"* earns no points for that check.
- In Part 8, question 3, a student whose run made new pieces and who says so, with a fix, should get full marks. That is the lesson.

## The final assessment

The [final assessment](final-assessment-four-questions.md) covers the whole part, with a new organization. It is graded out of 10, and 7 is a pass. Its grading table is on the page.

## Facts and fiction in the case

| Fact, with a source | Fiction |
|---|---|
| What projects, skills, scheduled tasks, artifacts and the cloud computer do, and on which plans | The firm, the client, the bank and the people |
| That no piece reads another, and that opening a shared doc needs a Claude account | Every figure, time and line count |
| That a new session in the Code tab needs an artifact's link to update it | That this exact setup was run, and that a project chat updates artifacts the same way |

[^run-sheet]: The [practical run sheet](appendix-practical-run-sheet.md) says how to run the exercise and record it. It has not yet been run.
# Lab: build the month-end (/claude-and-chatgpt-2/case-4-nishas-month-end/lab-build-the-month-end)

---
type: Document
title: "Lab: build the month-end"
description: "Build the firm's setup with sample files: a project, a skill and one run that makes three pieces. Check and approve it. Then a late bank line arrives: fix it by hand, see what is left wrong, and run the job again. The core path works on a free plan."
status: stable
order: 0.875
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T07:50:33Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
sources:
  - id: projects
    title: "Anthropic, What are projects? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/9517075-what-are-projects
  - id: skills
    title: "Anthropic, How to create custom skills (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
  - id: plans
    title: "Anthropic, What are artifacts and how do I use them? (Claude Help Center)"
    resource: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
  - id: code-execution
    title: "Anthropic, Create and edit files with Claude (Claude Help Center)"
    resource: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
  - id: skill-how
    title: "Anthropic, How to create a skill with Claude through conversation (Anthropic Academy)"
    resource: https://academy.claude.com/tutorials/how-to-create-a-skill-with-claude-through-conversation
  - id: routines
    title: "Anthropic, Automate work with scheduled tasks (Claude Code Docs)"
    resource: https://code.claude.com/docs/en/routines
generated:
  at: 2026-11-13T07:50:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

In this lab you build a smaller version of the firm's setup, with twenty-nine sample lines in place of 3,400. You make a project and a skill, run the job, check it, and approve it. Then a late bank line arrives. You fix it the old way first, to see what goes wrong, and then you run the job again.

> **Read first.** Read the story up to [The run](the-run.md). Do the lab before you read [Wednesday morning](wednesday-morning.md), if you can. Then you meet Wednesday yourself.

> **A free plan is enough.** You need the Claude desktop app. The web version works too. Projects, skills, docs and decks are on every plan.[^projects],[^skills],[^plans] Three steps are marked **paid plan**: a sheet, a folder on your computer and a real scheduled task. Each has a free path beside it. A free plan has usage limits: if you reach one, wait and go on later. The editors have not yet run the free path from start to finish, so tell us if a step does not work as written.

> **Two levels.** The **core lab** (Parts 1 to 8, on any plan) practises a project, a skill, one reproducible calculation, several pieces and your own tests. The **full lab** adds the three **paid plan** steps: a sheet, a folder on your computer, and a real scheduled task that reads its files from a connected drive. Only the full lab shows that the whole setup in the story works.

## Lab at a glance

| Part | What you do | Time |
|---|---|---|
| 1 | Make the two files | 10 minutes |
| 2 | Build the setup: a project and a skill | 15 minutes |
| 3 | Run the job | 10 minutes |
| 4 | Check and approve | 10 minutes |
| 5 | Write the morning check | 5 minutes |
| 6 | Wednesday: fix it by hand | 5 minutes |
| 7 | Wednesday: run the job again | 10 minutes |
| 8 | What did the setup do? | 10 minutes |
| 9 | Decide as Nisha (stretch) | 10 minutes |

The core path is Parts 1 to 8. The times add up to 75 minutes. Allow up to 110 the first time, most of all if you have never made a skill. Keep your answers in a plain text file called `lab-notes.md` (or `lab-notes.txt`), or on paper.

> **Your app may look a little different.** The names of buttons change from time to time. If you cannot find one, ask Claude in any chat, for example: *"Where do I add instructions to a project?"* Claude can usually tell you where a button is.

## Part 1. Make the two files (10 minutes)

These are Lakeshore's last few days of September. The figures are made up. Both the bank and the ledger start the week at **$186,000.00**. This is the money in the account before these lines. The dates differ by a day or two for the same payment, because the bank often records a payment after the company does.

**The bank's lines.** Save them as `bank-september.csv`. Two deposits of $2,000.00 have no name. Banks sometimes leave the name out.

```csv
date,type,name,amount
2027-09-24,Deposit,Parma Hardware,4210.00
2027-09-24,Check 2291,Great Lakes Freight,-1860.50
2027-09-27,Deposit,Lorain Builders,5125.25
2027-09-27,Check 2292,Ohio Edison,-940.75
2027-09-28,Deposit,,2000.00
2027-09-29,Deposit,,2000.00
2027-09-28,Deposit,Erie Street Diner,3450.00
2027-09-28,Check 2293,Summit Packaging,-2315.00
2027-09-29,Deposit,Medina Farm Supply,2890.00
2027-09-29,Check 2294,Payroll service,-6480.00
2027-09-30,Deposit,Akron Tool Rental,7926.00
2027-09-30,Bank fee,Monthly fee,-525.00
```

**The ledger's lines.** Save them as `ledger-september.csv`.

```csv
date,type,name,amount
2027-09-23,Deposit,Parma Hardware,4210.00
2027-09-22,Check 2291,Great Lakes Freight,-1860.50
2027-09-24,Deposit,Lorain Builders,5125.25
2027-09-24,Check 2292,Ohio Edison,-940.75
2027-09-27,Deposit,Bay Village Bakery,2000.00
2027-09-28,Deposit,Solon Garden Center,2000.00
2027-09-27,Deposit,Erie Street Diner,3450.00
2027-09-27,Check 2293,Summit Packaging,-2315.00
2027-09-28,Deposit,Medina Farm Supply,2890.00
2027-09-28,Check 2294,Payroll service,-6480.00
2027-09-29,Deposit,Akron Tool Rental,7926.00
2027-09-30,Bank fee,Monthly fee,-525.00
2027-09-29,Deposit,Canton Plumbing,4000.00
2027-09-30,Deposit,Elyria Motors,2120.00
2027-09-28,Check 2295,Northcoast Insurance,-5000.00
2027-09-29,Check 2296,Lake Erie Lumber,-2800.00
2027-09-30,Check 2297,City of Cleveland,-1500.00
```

To make each file:

1. Open a plain text editor. On Windows, use Notepad. On a Mac, use TextEdit, and choose **Format**, then **Make Plain Text**.
2. Paste the lines, with the first line `date,type,name,amount`.
3. Save the file with the name above, ending in `.csv`. If your editor adds `.txt`, change the name back.

Or paste the lines into a chat and ask Claude: *"Give me this as a file called bank-september.csv."* Then download the file.

Put both files in a new folder called `Lakeshore`.

## Part 2. Build the setup (15 minutes)

**The project.**

1. In the Claude desktop app, open **Projects** in the menu on the left, and make a new project called "Lakeshore month-end". Use a project in Claude chat, the classic kind. If your projects have been moved to the new version, with threads, the screens will differ: follow the same steps in order, and note what differs.
2. In the project, find the place for files, and add your two `.csv` files. You should see both file names in the project.
3. Find the project's instructions, and paste the text below. Save it.

> You prepare the month-end pack for Lakeshore Supply. The bank's lines and the ledger are in this project's files. Use the newest bank file. Both start at $186,000.00.
>
> Match each bank line to a ledger line with the same amount and a date no more than five days apart. Use the name or check number too, where there is one. If a bank line could match more than one ledger line, pair it with one, and list the pair under **Needs a look**. List every line that has no match. Work out reconciled cash: the bank's closing balance, plus deposits the bank has not shown yet, minus checks the bank has not paid yet.
>
> The pack is three pieces: the numbers doc, the memo, and a deck of three slides. Slide 2 shows reconciled cash and the bank's minimum, side by side. Slide 3 lists the timing items and any unrecorded items. The bank's minimum is $195,000.00.
>
> After every run, write a run note: the files you read, the lines matched, the lines left over, reconciled cash, and the pieces you made or updated.
>
> Never send anything. If the bank and the books do not agree, say so in the first line.

**Paid plan, optional.** In the desktop app, let Claude read your `Lakeshore` folder (ask Claude: *"How do I let you read a folder on my computer?"*), and change the sentence "The bank's lines and the ledger are in this project's files" to name your folder. Then Claude reads your files where they are.

**The skill.**

A skill needs **code execution** turned on. Code execution lets Claude run small programs.[^skills]

1. Open **Settings**, then **Capabilities**. Make sure code execution is turned on. In the updated Settings layout, this switch is called **Create and edit files**.[^code-execution]
2. Start a new chat, outside the project. Type: *"I want to make a skill called month-end memo. Here are its rules."* Then paste these five rules:

> **Month-end memo.** Use this when asked for a month-end memo.
>
> 1. The first line is the status. Write READY when reconciled cash is the same as the cash in the ledger and nothing is unrecorded. Write NOT READY when anything is unrecorded. The status says whether the books agree with the bank. It does not say the pack may go out. A person decides that, in the approval.
> 2. A timing item is in the ledger and not yet at the bank. Count timing items. Do not list them.
> 3. An unrecorded item is at the bank and not in the ledger, such as a returned check. List each one under the status, with its date and amount.
> 4. Then give reconciled cash, and how far it is above or below the bank's minimum.
> 5. Never write that the books are correct. Write what was compared, and what was the same.

3. Answer Claude's questions. When Claude has written the skill, follow its prompt to save it. If you see no prompt, ask: *"Save this skill for me."*
4. Open **Customize**, then **Skills**, and turn the new skill on.[^skills] On older screens, the path is **Settings**, then **Capabilities**, then **Skills**.[^skill-how]

**If you cannot make a skill,** paste the five rules at the end of the project's instructions. The lab works the same way.

In `lab-notes.md`, write one line for each part you built: what it is for.

## Part 3. Run the job (10 minutes)

Start a new chat **inside the project**. Type one request.

> Prepare the September 2027 month-end pack. Match the lines with a program if you can. Make the numbers as a doc with a table, the memo as a doc and the slides as a deck.

On a paid plan, you can ask for the numbers as a sheet.

When Claude has finished, write in `lab-notes.md`:

1. How many pairs did it match? Which lines were left over? Which lines did it list under Needs a look?
2. What is reconciled cash?
3. What does the memo's first line say?
4. The time the run took. Note the clock time when you send the request, and when Claude finishes.

If your figure is not what you expect, see **If something goes wrong** after Part 7.

Then tell the setup which pieces to update next time.

1. Open each piece. You find all three in the **Artifacts** tab in the menu on the left.
2. Click **Share**, and copy the piece's link. If you cannot copy a link, write down the piece's exact name, the title shown at the top of the piece, instead. If Claude still makes new pieces later, that is a finding for Part 8. Then keep a short **current-version list** in the instructions: each piece, its link or name, and the date of the run that made it.
3. Add the three links, or names, to the project's instructions, under a line that says: *"Update these pieces. Do not make new ones."*

## Part 4. Test and approve (10 minutes)

Do these five tests. Do not use Claude for them.

1. **The source balance.** Add the bank's twelve lines to $186,000.00 with a calculator, from `bank-september.csv` itself. That is the bank's closing balance. Compare it with the closing balance Claude used. This test uses the bank's own file, not Claude's work. It catches a figure that Claude read wrongly. You will come back to this test in Part 6.
2. **The arithmetic.** Work out reconciled cash, using the leftover lines Claude listed in Part 3. Your fourth test, below, makes sure those lines are right.
3. **The matching.** Choose three matched pairs, and find each one in your two files. Then find the two $2,000.00 deposits without a name. Could each one be matched to either ledger line? Did Claude list them under Needs a look?
4. **The leftovers.** Find each leftover line in `ledger-september.csv`. Is each one a deposit the bank has not shown yet, or a check the bank has not paid yet?
5. **The pieces.** Open the numbers doc, the memo and slide 2. Do all three show the same figure?

If something is wrong, do not fix the piece. Change the project's instructions and run the job again.

Before you approve, look at the two $2,000.00 deposits under Needs a look. In real work, you would confirm them with the bank first. Here you cannot, so your approval must name them as not yet confirmed.

Then write your approval in `lab-notes.md`, with the date and time. It must name the pack, the figure and the two deposits. Use Nisha's message in [The run](the-run.md) as a model.

Save the memo as a PDF: open the memo, find its export option (in the **Share** menu or the menu next to it), and choose **PDF**. Name the file `memo-1.pdf`. This is what the client gets.

## Part 5. Write the morning check (5 minutes)

Write the instruction for a scheduled task that checks the bank each morning. Write it in `lab-notes.md`. It must say:

- what to read,
- what to compare it with,
- where to report (in this lab, in the chat),
- and what it must not do.

**Paid plan, optional.** Turn it on as a scheduled task, and use **Run now** once.[^routines] A task that runs in the cloud cannot count on a folder on your computer. Keep the files in a connected app, such as Google Drive, and name that place in the instruction.

## Part 6. Wednesday: fix it by hand (5 minutes)

A message arrives.

> *"The bank's lines for September have changed. There is one new line, dated September 30: a returned check from Erie Street Diner, minus $3,450.00."*

Open `bank-september.csv` in your text editor. Add this line at the end. Choose **Save As**, and name the new file `bank-september-2.csv`. The first file stays as it was.

```csv
2027-09-30,Returned check,Erie Street Diner,-3450.00
```

1. Work out the new reconciled cash yourself.
2. Now do what Hamza began to do. Open the deck from the **Artifacts** tab. Change the figure on slide 2 yourself. Or, in the chat where you made the deck, ask Claude: *"Change only slide 2 to the new figure."*
3. Open the other pieces. In `lab-notes.md`, list every place that is now wrong. Check the numbers doc, the memo and slide 3.

How many places did you find?

Then answer one more question in your notes. Your first test passed in Part 4. Why did it not catch this?

## Part 7. Wednesday: run the job again (10 minutes)

1. Add `bank-september-2.csv` to the project. On the paid path, it is already in your folder.
2. Start a new chat inside the project.

> The bank's lines for September have changed. Prepare the September 2027 month-end pack again, from bank-september-2.csv.

3. Do the five tests again. This time, do the first test properly. The bank's statement for September shows a closing balance of $198,030.00. Compare that with the closing balance Claude used.
4. Write a new approval. It must name the new figure, the status, the unrecorded item and the two deposits that are still not confirmed, and say that it replaces the first pack.
5. Save the memo as a PDF again, as in Part 4. Name it `memo-2.pdf`.
6. Write the message to Dana, in five sentences or fewer. Say what changed, why, the old figure, the new figure, and which pack to use.

In `lab-notes.md`, write the time the second run took, and the time your tests took.

> **If something goes wrong.**
>
> - **Your figure is not $198,300.00 (or $194,850.00 in Part 7).** Ask Claude: *"Show me each matched pair and each line left over."* Compare its list with the answers at the end of this page. Then change the instructions, not the pieces, and run again.
> - **Claude made new pieces instead of updating the old ones.** That is a real finding. Write it in your notes. Check that the links or names are in the instructions, and run again.
> - **Claude did not use the skill.** Check that the skill is turned on in **Customize**, then **Skills**. Or paste the five rules at the end of the project's instructions.

## Part 8. What did the setup do? (10 minutes)

Answer in `lab-notes.md`.

1. Make two lists: what the setup did, and what you did.
2. In Part 6 you fixed one slide. In Part 7 you ran the job again. Which was faster? Which left the pieces the same as each other?
3. Did Claude update your three pieces in Part 7, or make new ones? If it made new ones, what would you change in the setup?
4. Name one rule in your instructions that is only a sentence. What could make it a setting? (A setting is a permission in the app, such as which connected apps are turned on. A sentence only asks. A setting stops.)
5. Next month, October's files arrive. What exactly would you have to do?

## Part 9. Decide as Nisha (stretch, 10 minutes)

Read [Friday's decision](fridays-decision.md). In ten lines or fewer, write what you would tell Walter: how far the setup may run alone, how you would charge, and one thing that could still go wrong with your answer, and who would catch it.

## What to hand in

`lab-notes.md`, `memo-1.pdf` and `memo-2.pdf`.

## How the lab is graded

The lab is worth 10 points.

| Part | Points | Full marks for |
|---|---|---|
| 2 | 1 | A project with instructions, and one line on what each part is for |
| 3 | 1 | One run that makes three pieces, with its answers written down |
| 4 | 3 | The bank's own closing balance compared with Claude's, the two $2,000.00 deposits flagged, the other tests done without Claude, and an approval that names the pack, the figure and the two deposits not yet confirmed |
| 5 | 1 | A check that says what to read, what to compare, where to report, and that it changes nothing |
| 6 | 1 | A list of the places that were wrong after the fix by hand |
| 7 | 2 | A second run, a new approval that names the unrecorded item and the two deposits and replaces the first, and a clear message to the client |
| 8 | 1 | Two honest lists, and an answer to question 5 |

Part 9 is not graded.

## Check your answers

**Part 3.** Twelve pairs match. The two $2,000.00 bank deposits have no name, and each could be Bay Village Bakery or Solon Garden Center. A good run lists them under Needs a look. The figure is the same either way, but a person should confirm them with the bank. Five ledger lines are left over: two deposits, $4,000.00 and $2,120.00, which is $6,120.00, and three checks, $5,000.00, $2,800.00 and $1,500.00, which is $9,300.00. The memo's first line says READY.

**Part 4.** The bank's twelve lines add up to $15,480.00, so the bank's closing balance is $201,480.00. If Claude used another closing balance, your first test has caught an error.

| Line | Amount |
|---|---|
| Bank's closing balance | $201,480.00 |
| Add: deposits the bank has not shown yet | $6,120.00 |
| Subtract: checks the bank has not paid yet | $9,300.00 |
| **Reconciled cash** | **$198,300.00** |

That is $3,300.00 above the bank's minimum. The ledger's seventeen lines add up to $12,300.00, so the ledger's balance is $198,300.00 too. The two agree, which is why the status is READY. A good approval reads: *"Approved: Lakeshore September month-end pack, first version, reconciled cash $198,300.00. Two $2,000.00 deposits were matched without a name and are not yet confirmed with the bank."*

**Part 5.** A good check says: read the newest bank file; compare its closing balance with the one in your last run note; report in the chat, or in the firm's channel; change nothing in the pack.

**Part 6.** The bank's closing balance is now $198,030.00, and reconciled cash is $194,850.00. After the fix by hand, slide 2 is right. At least five places are wrong: the numbers, the memo's first line (it still says READY), the memo's figure, the comparison with the minimum (it still says above), and slide 3, if it lists the items. Your first test passed in Part 4 because you checked the bank's file against itself. The file was complete as a file, but the bank had not finished posting September 30. Only the bank's statement could show that.

**Part 7.** The memo's first line now says NOT READY, with one unrecorded item: the returned check, $3,450.00. Reconciled cash is $194,850.00, which is $150.00 below the bank's minimum. The ledger still says $198,300.00, because Lakeshore's books do not show the returned check yet. The closing balance Claude used, $198,030.00, now agrees with the bank's statement. A good approval reads: *"Approved to send: Lakeshore September month-end pack, second version. Status NOT READY, one unrecorded item: the returned check, $3,450.00. Reconciled cash $194,850.00. The two $2,000.00 deposits are still not confirmed with the bank. It replaces the first pack."*

**Part 8.** A good answer to question 5: put October's two files in the project, or in the folder, and type one request. Then check, approve and send. If Claude made new pieces in Part 7, the links were missing from the instructions, or the run did not use them: say so in your notes.

## What you practiced

You chose a part for each need, joined the parts into one setup, and ran a job with one request. You checked the result without the AI and approved it by name. When the figures changed, you saw what a fix by hand leaves behind, and you let the setup do the job again.

[^projects]: As verified on November 11, 2026, Anthropic says projects "are available to all users, including those with free Claude accounts", that free users can make at most five, and that each project can have its own instructions and files. What are projects?, Anthropic.
[^skills]: As verified on November 11, 2026, Anthropic says skills "are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and that this "requires code execution to be enabled". As checked on November 13, 2026, the same page says "Enable the skill in Customize > Skills." How to create custom skills, Anthropic.
[^code-execution]: As verified on November 13, 2026, Anthropic says to turn it on "from **Settings > Capabilities** by toggling **Code execution and file creation** (called **Create and edit files** in the updated Settings layout) on". Create and edit files with Claude, Anthropic.
[^plans]: As verified on November 11, 2026, Docs, Slides and Design are on every Claude plan, and Sheets needs a paid plan. What are artifacts and how do I use them?, Anthropic.
[^skill-how]: As verified on November 11, 2026, Anthropic's tutorial says to describe the skill in a new chat, answer Claude's questions, save the skill and turn it on under Settings, Capabilities, Skills. Claude reads each skill's name and description to decide when to use it. How to create a skill with Claude through conversation, Anthropic.
[^routines]: As verified on November 11, 2026, with the plan list checked again on November 13, 2026, Anthropic says scheduled tasks "are available on Pro, Max, Ultra, Team, and Enterprise plans", that each run opens as a new session, and that Claude "can use an included connector during a run, including writes". Automate work with scheduled tasks, Anthropic.
# Appendix: practical run sheet (/claude-and-chatgpt-2/case-4-nishas-month-end/appendix-practical-run-sheet)

---
type: Document
title: "Appendix: practical run sheet"
description: "How to test the case on the product: the setup on a Team plan, the data, fifteen tests of how the parts join, what to measure, and what to keep. The practical has not yet been run."
status: stable
order: 0.88
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:27Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
generated:
  at: 2026-11-13T05:47:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

This appendix is for the editors, and for an instructor who wants to test the case on the product. **The practical has not yet been run.** Until it is, the run times, the line counts and the run notes in the exhibits are illustrative.

## What the practical is for

The case joins parts that were each checked against Anthropic's help pages. It has not been checked that they join in the way the story says. This sheet tests the joins.

## Setup

- A Claude **Team** plan with three members, standing for Nisha, Sana and Hamza.
- A shared Google Drive folder, `Lakeshore/2027-09`, connected to Claude.
- The Claude desktop app on one computer, with a local folder `Lakeshore` allowed.
- A test Slack workspace with Claude Tag, which is Claude in Slack, in one channel, as in [Case 3's run sheet](../case-3-nishas-firm/appendix-practical-run-sheet.md).
- A test mailbox outside the organization, standing for Dana.

## The data

Make two files of about 3,400 lines each, with the same totals as the case: a bank file that closes at $201,480.00 and a ledger that closes at $198,300.00, with two unmatched deposits of $6,120.00 in all and seven unmatched checks of $9,300.00 in all. Make a second bank file with one more line: a returned check, minus $3,450.00, dated September 30. The lab's small files have the same totals and can be used for a first pass.

## The tests

| Test | Do this | Record |
|---|---|---|
| 1 | Make the project, with the instructions in [Exhibit 3](exhibits.md#exhibit-3-the-projects-instructions) and the skill in [Exhibit 4](exhibits.md#exhibit-4-sanas-skill) | Screens of both |
| 2 | In a chat in the project, ask Claude to list the files in the drive folder | Whether a project chat can read the connected drive |
| 3 | Send the request in [Exhibit 5](exhibits.md#exhibit-5-the-request-and-the-run-note) | The time. Whether Claude ran a program. The number of pairs. The figure. |
| 4 | Look at the four pieces | Whether the run updated the linked pieces or made new ones |
| 5 | Look for the run note and the matched list in the drive | Whether Claude could save them there |
| 6 | Add the sentence about slide 2 and run again | The time. Whether only slide 2 changed. |
| 7 | Give the worker in Slack the morning check as a scheduled task. Put the second bank file in place. | What the worker posts, and whether it changed anything |
| 8 | Send the second request | The time. The memo's first line. Whether all pieces agree. |
| 9 | Export the cover, the memo and the slides as PDFs and email them to the test mailbox | That the files open, and what they show |
| 10 | Share the project, the skill and the four pieces with the two other members. As one of them, send the request. | Whether a second member's run uses the same rules, skill and pieces |
| 11 | Ask the worker to read the latest run note in the drive and compare it with a fresh download | Whether the worker can read it |
| 12 | Make a sheet from the month's 6,800 lines | Whether the sheet holds them, and how long it takes |
| 13 | As Owner, turn on only the Drive connector. As a member, try to send an email from a chat in the project. If your plan has Claude in Chrome, try once with it on and once with it off. | That the chat cannot send through a connected app, and what the browser route allows |
| 14 | Do the lab's core path on a free account | Each step that does not work as written, and the minutes taken |
| 15 | In a desktop chat, read a file from the local folder. Then try to reach the same folder from a scheduled cloud task. | Whether each one can, and whether the cloud task still can with the app closed |

## What to measure

- Minutes for each run, and for each person's checks.
- For test 3, check twenty pairs by hand, and count any wrong ones.
- For tests 4 and 8, the figure in each piece.

## What to keep

- The project's instructions and the skill, as text
- Each run's chat, exported
- The two run notes
- Screens of the four pieces after tests 3, 6 and 8
- The worker's message from test 7
- The PDFs from test 9

## After the practical

Replace each *illustrative* label in the exhibits with what was measured, or correct the story. If a join does not work as the story says, change the story to what the product does, and say in the exhibits what was changed.
    # Final assessment: four questions (/claude-and-chatgpt-2/case-4-nishas-month-end/final-assessment-four-questions)

---
type: Document
title: "Final assessment: four questions"
description: "The final assessment for the whole of Claude and ChatGPT 2.0. A small charity prepares a monthly report for its donors by hand. Design a setup for it, and answer the four questions of the series: is the work good, whose name, whose word, and what stays with people."
status: stable
order: 0.885
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:27Z
chapter: "F00G"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-12
generated:
  at: 2026-11-13T05:47:27Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:fa7d03474981f055aaecee101454be3920c2fd35844adf56f1b95bd254b05da3
dirty: true
ksor_version: 0.0.60
---

This is the final assessment for the whole of Claude and ChatGPT 2.0. It uses a new organization and a new job. You design a setup for it, and you answer the four questions of the series. It takes about 60 minutes, on paper or in any text editor. It is graded out of 10, and 7 is a pass.

You may use Claude and ChatGPT to check your work. Write the design yourself.

## The organization

**Books for All** is a small charity. It has five volunteers and no paid staff. It collects used school books and gives them to forty schools. All names and figures here are made up.

| Person | Role |
|---|---|
| Amara | The chair. She signs every report. |
| Bilal | The treasurer. He keeps the charity's bank account and its books. |
| Chen | She keeps the list of books received and given. |
| Two more volunteers | They drive, sort and pack. |

The charity has twelve donors. One of them is a foundation that gave $30,000.00 this year, with one condition: at least **80 percent** of all money spent must go to buying, moving and giving books. The rest may pay for rent and other costs.

Every month, the charity sends its donors a report: the books given, the money spent, and the share that went to books.

## How they do it now

The volunteers use the Claude desktop app on a Team plan, and they talk in a shared chat app. Each month goes like this.

1. Bilal downloads the bank's lines to his laptop. He sorts about 300 payments into *books* and *other costs*, by hand, in a spreadsheet. It takes him an evening.
2. Chen sends him her list. He pastes both into a chat and asks Claude for a short document. Then he asks, in another chat, for four slides.
3. Amara reads the document and writes *"Approved"* in the chat app.
4. Bilal emails the document and the slides to the donors, as PDF files, from his own address.
5. If someone later finds a mistake, they fix the file where they saw it.

## The month it went wrong

The foundation's grant letter defines the term: moving books means fuel, van hire and drivers' pay. Vehicle repairs are other costs.

By March the charity had spent $40,000.00 this year. The report said that $32,800.00 of it, or 82 percent, went to books. Amara approved it, and it was sent.

A week later Bilal found that a $1,200.00 payment for van repairs had been counted as moving books. He changed the slides: the books figure became $31,600.00, and the share became 79 percent. He emailed the new slides to the foundation. He did not change the document.

The foundation's officer now had a document that said 82 percent and slides that said 79 percent.

## Your task

Design a setup for the monthly report. Answer each part in a few sentences, or with a small table.

### Part A. Is the work good? (2 points)

Name three checks that should happen before Amara approves, and who or what does each one. At least one must be done by a person without the AI. Say which check would have caught the van repairs, or say honestly that none of yours would.

### Part B. Whose name is on it? (1 point)

From which address should the report go? Whose access is used to read the bank's lines, and what may it do there? Say what must be a setting in the tool, not a sentence that asks people to behave.

### Part C. Whose word does the worker take? (2 points)

Write the approval that Amara should give, word for word, for the March report. Then say who else may approve, where, and what happens if nobody who may approve is there on the day.

### Part D. The setup (3 points)

1. Fill in this table for the charity.

| The need | The part you choose | What you put in it |
|---|---|---|
| Rules for this charity | | |
| The method for sorting a payment into *books* or *other costs* | | |
| The month's files | | |
| The sorting and adding of 300 payments | | |
| The report itself | | |
| The time it runs | | |

2. The bank's lines are on Bilal's laptop. Say where they should be, and why, if the job is to run on the first day of each month without him.
3. The van repairs mistake is found a week later. Write what should happen, step by step. Say what is changed, what is run again, who approves, and how the foundation's officer learns that 82 percent became 79 percent.

### Part E. What stays with people? (1 point)

Make two short lists for your design: what the setup does, and what a person must still do. Then say whether you would let the setup send the report by itself, and why.

### Part F. What your design still trusts (1 point)

Name two things your design still trusts. For one of them, say what it would cost to stop trusting it.

## How it is graded

| Part | Points | Full marks for |
|---|---|---|
| A | 2 | Three checks with an owner each, one done without the AI, and an honest answer about the van repairs |
| B | 1 | A mailbox that is the charity's own, access to the bank that can read and cannot pay, and a clear line between a setting and a sentence |
| C | 2 | An approval that names the report, the month and the figure; a second approver; and a plan for the day when neither is there |
| D | 3 | A sensible part for each need; files placed where the job can reach them; and a correction that changes the method, runs the job again, has its own approval and tells the donors |
| E | 1 | Two honest lists, and a reasoned answer about sending |
| F | 1 | Two honest trusts, and a cost for removing one |

For Part D, a strong answer puts the rule *"van repairs are other costs"* into the method, so that April's report is right too. An answer that only corrects March's two files earns at most 2 of the 3 points.

## What this assessment draws on

| Part | Where you learned it |
|---|---|
| A | [Case 1](../case-1-nishas-ai-team/overview.md) and [Build Something](../build-something/one-job-three-deliverables.md) |
| B | [Case 2](../case-2-nishas-first-client/overview.md), and [Setting up the desk](../behind-the-screen/setting-up-the-desk-keys-buildings-and-badges.md) |
| C | [Case 3](../case-3-nishas-firm/overview.md), and [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) |
| D | This case, [Build Something](../build-something/overview.md), and [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) |
| E | This case |
| F | [The Architecture](../architecture/overview.md) |
