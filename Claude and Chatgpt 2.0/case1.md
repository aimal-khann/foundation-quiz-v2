# Case 1: Nisha's AI Team (/claude-and-chatgpt-2/case-1-nishas-ai-team/overview)

---
type: Document
title: "Case 1: Nisha's AI Team"
description: "The first case study in the series. A chartered accountant uses Claude and ChatGPT to plan a book in one evening. The case shows what the AI tools did, what she decided, and where human judgment mattered."
status: stable
order: 0.5
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
part: Front
expert_status: required
objectives: []
word_budget: null
prerequisites: []
build_step: null
artifact: null
field_guides: []
delta_entries: []
concepts: [ "Nisha's problem", "Self-grading", "Second opinion", "Managing AI Workers" ]
last_verified: 2026-11-09
review_by: 2026-12-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "appendix-the-practical-log.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

*How a chartered accountant used Claude and ChatGPT to plan a book, and where human judgment mattered*

Panaversity case study · November 2026

## Where this case fits

This is the fifth section of Claude and ChatGPT 2.0, and the first case study in the Claude and ChatGPT 2.0 series. The first four sections explained the ideas. This case shows them at work in one real evening.

- **The brief.** [The New Way of Working](../new-way-of-working/overview.md) showed that every job starts with a brief. Watch how Nisha's first prompt works as a brief, and what she had to add later.
- **The AI Worker.** [Tour of the Apps](../tour/overview.md) and [Behind the Screen](../behind-the-screen/overview.md) showed what Claude and ChatGPT can do by themselves. Here, one AI Worker writes and grades its own work, and a second one reviews it.
- **The second signature.** [Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) showed that a person makes the final decision. In this case, Nisha is that person at every step.
- **Saving work somewhere lasting.** [The borrowed desk](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md) showed that the desk can be cleared. Nisha saved each version as a file and kept a diary of the whole evening.
- **The architecture.** [The Architecture](../architecture/overview.md) explained how the apps run. You do not need it to follow this case.

This case stays at the first step, a helper used by a person who is present. [The lab](lab-take-nishas-method-to-2-0.md) that follows takes the same work up the ladder.

> **About this case**
>
> This is a fictional teaching case, prepared for class discussion. It is based on a real practical exercise carried out on November 8, 2026, with Claude (claude.ai) and ChatGPT (chatgpt.com).
>
> **Made up for teaching:** Nisha, her background, her money (including the subscription costs), her conversations and her thoughts. These come from the class scenario.
>
> **From the practical:** the prompts, AI replies, grades and drafts. They are recorded in the [practical log](appendix-the-practical-log.md), the six draft files and ChatGPT's review file. Word counts and save times come from those files. The final book file (version 6), with its full list of 15 sources, is in the [resources](appendix-the-practical-log.md#resources) of this case.[^practical-log]
>
> The case follows the style of a Harvard Business School case but is not connected to Harvard. It does not say whether Nisha's choices were right or wrong.

## How this case is organized

The story comes first, in four parts. Read them in order.

1. [Nisha's problem](nishas-problem.md): who Nisha is, why she wants to write a book, and how she sets up her AI team.
2. [Steps 1 to 3: Claude writes and grades its own work](steps-1-to-3-claude-writes-and-grades-its-own-work.md)
3. [Steps 4 to 6: a second opinion and the human check](steps-4-to-6-a-second-opinion-and-the-human-check.md)
4. [A company of one](a-company-of-one.md): what Nisha's diary showed, and what she began to imagine.

Then come the [questions for discussion](questions-for-discussion.md) and the [exhibits](exhibits.md), which give the details: the method, the prompts, every grade, every version, who caught what, the fact check, the final table of contents, the time and cost, and the words to know.

After the discussion, the [lab](lab-take-nishas-method-to-2-0.md) lets you run Nisha's method again for one chapter, with a project, an overnight draft and a second signature.

For instructors, the [teaching note](teaching-note-for-instructors.md) gives a discussion plan. The [practical log](appendix-the-practical-log.md) records every prompt and reply, so a class can run the exercise again.

[^practical-log]: Nisha's AI Team: Practical Log. It records the exercise of November 8, 2026.
# Nisha's problem (/claude-and-chatgpt-2/case-1-nishas-ai-team/nishas-problem)

---
type: Document
title: "Nisha's problem"
description: "Who Nisha is, why she wants to learn US GAAP, why she decides to write a book, and how she sets up a team of AI Workers to help her."
status: stable
order: 0.51
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Nisha's problem" ]
last_verified: 2026-11-09
sources:
  - id: ifrs-roadmap
    title: "IFRS Foundation, Jurisdictional Roadmap Development Tool (March 2025)"
    resource: https://www.ifrs.org/content/dam/ifrs/around-the-world/roadmap-development-tool/jurisdictional-roadmapdevelopmenttool-2025.pdf
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "appendix-the-practical-log.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

> **Recorded on November 8, 2026.** This page tells what Nisha actually did that evening, as the [practical log](appendix-the-practical-log.md) records it. The [lab](lab-take-nishas-method-to-2-0.md) later asks you to try newer features that Nisha did not use.

## A Sunday evening

On a Sunday evening in November 2026, Nisha opened her laptop. She had two browser tabs open: one for Claude and one for ChatGPT. Next to them was an empty Word file. She planned to use it as a diary of everything she did that night.

Nisha was a chartered accountant, and she had won a gold medal in her exams. She was very good at her job. But tonight she was not checking anyone's accounts. Tonight she wanted to plan a book, and she wanted two AI tools to do most of the writing.

One question was on her mind. Could two AI subscriptions do the work of a small team? And if they could, what would her own job be?

## Nisha's problem

Nisha was a member of the Institute of Chartered Accountants of Pakistan (ICAP), the country's best-known accounting body. Chartered accountants (CAs) prepare and check company accounts. These accounts are published so that banks, lenders and investors can see how a company is doing. CAs also give advice on tax and on running a business.

Nisha earned Rs 10 lakh (one million rupees) a month. That is a very good salary in Pakistan. But Nisha liked international brands. She wore them, and she ate at expensive places. Her rent alone was Rs 5 lakh (500,000 rupees) a month. After tax and her other bills, she was spending more than she earned.

There was a second worry. People kept telling her that AI would soon replace accountants.

One day, someone said to her: *"You are working for the Pakistani market. You will never earn much here. Why not work for foreign clients? Try freelancing, or get a remote job."*

## Two languages of accounting

Nisha liked the idea. She set her sights on the "Big 4", the four largest accounting firms in the world: Deloitte, EY, KPMG and PwC. All four have large practices in the United States.

Then she found a problem. Every country needs rules for how to prepare accounts. Each rule document is called a *standard*, and it usually covers one topic, such as inventory. Most of the world, including Pakistan, uses one set of rules called **IFRS** (International Financial Reporting Standards). More than 140 countries and regions require it, mainly for listed companies (companies whose shares are traded on a stock market).[^ifrs-roadmap] The United States uses a different set, called **US GAAP** (US Generally Accepted Accounting Principles).

The two sets are a bit like British and American English. Most of it is the same, but some rules are different, and some words are used differently. For example, the standard accounting word for goods waiting to be sold is "inventory" (IFRS says "inventories"). The everyday word "stock" can mean those goods or shares in a company, depending on the context. British accounts have often used "stock" for goods, while American accounts usually keep "stock" for shares.

Here is one real difference. US GAAP allows a method called LIFO ("last in, first out") for working out the cost of the goods a company has sold. Under LIFO, the cost of the most recently bought goods is counted first, even if older goods actually left the warehouse first. IFRS does not allow LIFO.

People often say that IFRS is *principle-based* (it gives general ideas and asks you to use judgment) while US GAAP is *rule-based* (it gives detailed rules). Nisha knew IFRS very well. She knew much less about US GAAP. So she had two problems:

1. She needed to learn US GAAP properly.
2. Even after learning it, she had to prove it. Why would a US employer believe that an accountant from Pakistan was an expert in US rules?

## The idea: a book written with AI Workers

A mentor gave Nisha an idea: *write a book*. A book comparing IFRS and US GAAP would help other accountants make the same move. Writing it would force her to learn US GAAP. And the finished book would show employers what she knew.

Writing a book alone takes a long time, so Nisha decided to build a team of AI Workers. She bought two subscriptions, Claude and ChatGPT, for about Rs 30,000 a month each: about Rs 60,000 a month in total. (Like her salary, these prices are made up for the case.) Nisha liked to say she had hired "ten AI workers" for the price of two subscriptions. She meant the many jobs she could give the tools, such as writer and reviewer, not that they would do the work of ten people.

Both tools had recently been upgraded. This book calls the upgraded apps Claude 2.0 and ChatGPT 2.0. These are not official product names. The tools could now search the web, read sources and work on a document in several rounds. In the scenario, this was the big change: Claude could improve a draft, grade it and improve it again by itself, where before a user had to ask for each round by hand. In the practical, Claude did run three such rounds in a single reply ([Step 3](steps-1-to-3-claude-writes-and-grades-its-own-work.md#step-3-claude-improves-its-own-work)). Nisha used the upgraded apps in their simplest form: one project in each app, with prompts she typed and replies she read. She did not use separate threads, scheduled tasks or ChatGPT's Work toggle.

Nisha gave each worker a job:

- **Claude** would be the main writer.
- **ChatGPT** would be the second reviewer, a fresh pair of eyes.
- **Nisha** would be the manager and the final checker.

She also wrote a short brief. Her readers would be accountants trained in IFRS who want to work with US GAAP, and the other way round. To keep things simple, she would start with only two parts of the book: the *preface* (the short introduction at the start of a book) and the *table of contents*.

Nisha followed a six-step method ([Exhibit 1](exhibits.md#exhibit-1-nishas-method-six-steps-with-human-checks-in-between)). Claude writes. Claude grades its own work. Claude improves the work by itself, aiming for 9.5 out of 10 in each area. ChatGPT reviews it. Claude improves it again using ChatGPT's review. Finally, a person checks the facts and decides when the work is ready. Nisha added one rule of her own: **she would also review the work herself between the steps.**[^practical-log]

Next, [Steps 1 to 3: Claude writes and grades its own work](steps-1-to-3-claude-writes-and-grades-its-own-work.md).

[^ifrs-roadmap]: The IFRS Foundation's Jurisdictional Roadmap Development Tool (March 2025) states that more than 140 jurisdictions already require the use of IFRS Accounting Standards. Each jurisdiction decides which companies must use them.
[^practical-log]: Nisha's AI Team: Practical Log, section 2 (Method).
# Steps 1 to 3: Claude writes and grades its own work (/claude-and-chatgpt-2/case-1-nishas-ai-team/steps-1-to-3-claude-writes-and-grades-its-own-work)

---
type: Document
title: "Steps 1 to 3: Claude writes and grades its own work"
description: "Claude writes a first draft, Nisha takes control of it, Claude grades its own work, Nisha sets rules, and Claude improves the draft by itself in three rounds."
status: stable
order: 0.52
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Self-grading" ]
last_verified: 2026-11-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "appendix-the-practical-log.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

> **Recorded on November 8, 2026.** This page tells what Nisha actually did that evening, as the [practical log](appendix-the-practical-log.md) records it. The [lab](lab-take-nishas-method-to-2-0.md) later asks you to try newer features that Nisha did not use.

## Step 1: The first draft

Nisha created a Project in Claude (a workspace that keeps one task's chats and files together) and gave it no special instructions. She used the project as one shared workspace and started no threads.

Claude is the app. Inside it, she chose the AI model Claude Sonnet 5.5, on its "High" setting. Then she typed her first prompt ([Exhibit 2](exhibits.md#exhibit-2-nishas-key-prompts)). She introduced herself, explained the IFRS and US GAAP problem, named her readers and asked for two things: a description of the book and an outline of the chapters.

It ended with these lines:

```text
Please draft:
1. A basic concept or description of the book
2. An outline of the chapters
```

Claude's answer was much bigger than she expected: 2,470 words. It suggested the title *The Bilingual Accountant*. According to the version 1 file, it described the market, compared the two groups of readers in a table, planned 25 chapters in three parts, listed six appendices and gave her five decisions to make. It had even searched the web and added four sources.

Two things stood out. First, **Claude disagreed with her.** Nisha had written that IFRS is principle-based and US GAAP is rule-based. Claude said this was "only partly true". In some big areas, like revenue, the two sets of rules are now almost the same. It suggested a whole chapter to explain this.

Second, **Claude was honest about what it had not checked.** It said it had checked some dates on the web, but the chapter-by-chapter differences came "from my knowledge". It had not checked the route from ICAP to a US accounting qualification.

## Human check 1: Nisha takes control

Nisha did not move straight to grading. "If I grade this now," she thought, "I will be grading something I did not ask for." She read the draft carefully, as an accountant, and made her decisions:

- She answered Claude's five questions. The book would lead with the IFRS-to-US GAAP direction, because that was her own path.
- She added what she had forgotten to say: her personal reason for writing the book, and that many readers speak English as a second language, so the writing must be plain and simple.
- She cut the scope to "only two parts", a preface and a table of contents, and told Claude: "Remove everything else."
- She accepted Claude's correction about principles and rules.
- She caught a mistake. Claude's word list paired "inventory" and "stock" the wrong way round. She told Claude that IFRS uses "inventories", that "stock" is British usage, and that in the US "stock" means shares. (Her own wording was a little too strong: Americans also say "in stock" for goods. No reviewer in the practical noticed this.)
- She asked for official sources "where possible", instead of summaries from firms' websites. She named three: the IFRS Foundation, which oversees IFRS, the Financial Accounting Standards Board (FASB), which writes US GAAP, and the US Securities and Exchange Commission (SEC), which regulates US stock markets.
- She chose the title: *The Bilingual Accountant: Moving Between IFRS and US GAAP*.

Version 2 was shorter (1,531 words), written in Nisha's voice and in plain English. Claude asked two small questions: should the preface mention her gold medal, and was the length all right? Nisha said yes to both.

## Step 2: Claude grades its own work

Nisha asked Claude to grade version 2 out of 10 in three areas: **accuracy**, **quality** and **ease of understanding** for her readers. She told it to be strict, and not to change anything yet ([Exhibit 2](exhibits.md#exhibit-2-nishas-key-prompts)). These grades are the AI's own opinion, judged against Nisha's three areas. They are not a test result, and a different reviewer could score the same work differently.

Claude's grades were low: **accuracy 7, quality 6.5, ease 7** ([Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version)). It found real mistakes in its own work. One chapter probably pointed to the wrong US standard. One sentence said that foreign companies in the US "can choose IFRS", which is only true for certain companies. One source was from 2018. Claude even criticized the line it had just added: "I am also a gold medalist." A gold medal for what?

Claude also admitted its limits. It had not checked 19 of its US GAAP references against the official US GAAP database, called the *Codification*. Its topics are numbered, and the numbers start with "ASC" (for example, ASC 330 is the topic on inventory). Claude said it was confident of them "from working knowledge", but the Codification was "behind a login".

Two things worried Nisha. First, some of Claude's advice pulled in opposite directions. To improve accuracy, it said "add the missing standard numbers". To improve ease, it said "cut the lists to two or three". Someone had to choose. Second, Claude asked an uncomfortable question: how could Nisha say she "understands both frameworks" while she was still learning one of them?

## Human check 2: Rules before Claude works alone

Step 3 would let Claude improve the draft by itself, round after round. Nisha knew that without clear rules the draft would grow again. So before she started it, she made her decisions:

- No new chapters. Missing topics go into existing chapters.
- Only the two or three main standards for each side (IFRS and US GAAP), plus a short key that explains the abbreviations.
- The exact wording of her gold medal line.
- A more modest claim: the book is her way of "showing what I have learned", not proof that she is already an expert.
- "Grade accuracy on what you can check, and give me a list of the ASC numbers you could not check. I will check them myself at the end."
- Then improve the draft by yourself and "repeat until every area reaches 9.5", with a table of scores after each round. She set no limit on the number of rounds.

## Step 3: Claude improves its own work

Claude worked through three rounds by itself ([Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version)). Its scores (accuracy / quality / ease) rose from 7 / 6.5 / 7 to **9.5 / 9.5 / 9.3**. Then it stopped, even though ease of understanding was still below the 9.5 target and Nisha had asked it to keep going until every area reached 9.5. It explained that the last gap could only be closed by testing the text with real readers, which it could not do. It did not push its own score up just to reach the target.

Version 3 was clearer. It spelled out every abbreviation, used plain chapter titles and added a key to the short forms. Claude had also checked more facts: the US GAAP topic numbers it could not confirm fell from 19 to 2. It checked them against FASB's published documents, not the Codification itself. Claude also said that confirming a number is not the same as checking that the topic fits the chapter. But the document had grown again, and the sources had gone from 4 to 9 ([Exhibit 4](exhibits.md#exhibit-4-how-the-draft-changed)).

From version 2 onward, Nisha had kept private notes of the problems she noticed. She did not share them with either AI. She wanted to see later which reviewer would catch what ([Exhibit 5](exhibits.md#exhibit-5-who-caught-what)).[^practical-log]

Next, [Steps 4 to 6: a second opinion and the human check](steps-4-to-6-a-second-opinion-and-the-human-check.md).

[^practical-log]: Nisha's AI Team: Practical Log, entries 1 to 4 and Appendix A.
# Steps 4 to 6: a second opinion and the human check (/claude-and-chatgpt-2/case-1-nishas-ai-team/steps-4-to-6-a-second-opinion-and-the-human-check)

---
type: Document
title: "Steps 4 to 6: a second opinion and the human check"
description: "ChatGPT reviews the draft, Nisha filters its points, Claude uses the review, and Nisha makes her own edits, checks the facts and calls the work final."
status: stable
order: 0.53
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Second opinion" ]
last_verified: 2026-11-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "appendix-the-practical-log.md"
  - id: review-file
    title: "ChatGPT's review of version 3: The Bilingual Accountant v3 - Expert Review.md (separate file, not included)"
    resource: "The Bilingual Accountant v3 - Expert Review.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

> **Recorded on November 8, 2026.** This page tells what Nisha actually did that evening, as the [practical log](appendix-the-practical-log.md) records it. The [lab](lab-take-nishas-method-to-2-0.md) later asks you to try newer features that Nisha did not use.

## Step 4: A second opinion from ChatGPT

Next, Nisha created a Project in ChatGPT. As with Claude, ChatGPT is the app. Inside it, she chose the AI model GPT-6 Astra (her plan offered it in a ChatGPT Project, as the log records), on its "medium" setting, which controls how much effort the model puts into thinking. She uploaded version 3 and a review prompt ([Exhibit 2](exhibits.md#exhibit-2-nishas-key-prompts)). She asked for the same three grades, with exact fixes, and listed the decisions she had already made so that ChatGPT would not undo them. She did *not* tell ChatGPT Claude's scores, or that Claude had written the draft. She wanted an independent opinion.

ChatGPT's grades were much lower: **accuracy 8, quality 7, ease 8**. That was 1.3 to 2.5 points below Claude's own grades for the same document. Both sets of grades were judgments against Nisha's prompt, not chances of being correct. The two tools had also seen different information, so the gap did not show which reviewer was better. Only checking the disputed points could show that.

ChatGPT's review was detailed: 27 numbered points, most with exact new wording. According to ChatGPT's review file, it had opened all ten links in the nine sources (one source had two links) and checked each one.[^review-file] It found technical problems that Claude had missed or only partly fixed. Chapter 5's list of standards showed IAS 1, the current standard on presenting accounts, but not IFRS 18, which replaces it from 2027. Claude had added a line about IFRS 18 to the chapter in step 3, but not to its list of standards. A book for readers in 2027 and later needed both. The chapter on debt did not list the main US standard on debt. And one chapter put a new US rule under "presentation" changes, when the rule really adds extra notes to the accounts.

The review had weaknesses too. Its wording was formal and technical, with phrases like "domestic SEC registrants". It suggested adding more content again. It brought in new facts that would need checking. And it suggested that Nisha drop her personal story, because it made the book sound like "a learning portfolio".

## Human check 3: Filtering the second opinion

Nisha did not pass ChatGPT's review straight to Claude. She sorted its 27 points first:

- **20 points: accept**, but rewrite in plain English.
- **3 points: accept with her own changes.** She kept the preface simple. She kept her personal story and added a line about how it helps readers. And she moved dated news out of the chapter list.
- **4 points: not now.** They would be used later, when writing the appendices and chapters.

She also set four rules:

1. Do not copy the reviewer's wording if it is long or technical.
2. Keep each chapter line to one or two short sentences.
3. Do not add anything she had not accepted.
4. Check every new fact before using it, and leave it out if it cannot be checked.

## Step 5: Claude uses the review

Claude produced version 4. It checked ChatGPT's new facts against official web pages, confirmed four of them and left out two details because the pages it opened did not mention them.

Nisha noticed something here. **Both details Claude left out were actually true.** One was about IFRS 1, the standard for companies adopting IFRS for the first time. The other was about the PCAOB, the body that oversees audits of companies listed in the US. Claude had checked short summary pages, not the full standards. "Not found on this page" did not mean "wrong". Nothing false had gone into the draft. It was only less detailed. So Nisha left it as it was.

Claude's grades for version 4 were **9.3 / 8.8 / 9.0**. These were lower than the grades it had given version 3, even though version 4 included fixes from both reviews. One possible reason is that Claude became stricter after seeing ChatGPT's lower grades, but the scores alone cannot prove why. It also said that quality was held back partly by Nisha's own decision to postpone some additions. As she had asked, Claude also gave her a list of 14 facts to check herself.

## Step 6: The human check

The last step belonged to Nisha. She did it in three parts.

**1. Her own edits (version 5).** She made six groups of small edits, touching eight places in the document. The main ones were:

- She shortened three long chapter lines.
- She removed hard terms such as "public accountability" from the chapter list. The exact terms stayed in the sources.
- She noticed that Chapter 22 used the term "foreign private issuer", which the book never explained. Neither AI had spotted this.
- She changed one US reference in Chapter 12 to the standard on equity investments, a key difference between the two systems.
- She added a note about where one FASB rule now sits.

**2. A check on the checker.** Nisha asked Claude to review her edits and tell her about any problems, but not to change anything itself.

Claude agreed with most of the edits. It said some detail was lost when lines were shortened, and that "public companies" was looser than the official term. It also challenged one note Nisha had added, about how to access the US GAAP database, because it could not confirm it.

Claude's final grades, for the record, were **9.2 / 9.0 / 9.3**. Simplifying had made the text easier to read, but slightly less precise.

**3. The fact check.** Nisha turned Claude's list into her own 12-point checklist. She merged two items about US GAAP topic numbers, dropped two (her own ICAP record, and a renamed standard that was not yet in the book), and added one point for her own judgment ([Exhibit 6](exhibits.md#exhibit-6-nishas-fact-check-step-6)). She checked 11 points against official sources and confirmed them. For the twelfth, whether the plain-English lines still said the right thing, she used her own judgment as an accountant and accepted them. She accepted the trade-offs Claude had pointed out and removed the unconfirmed note. Then she wrote: *"This is the final version. Do not make any other changes and do not grade it again."*

Version 6 was saved at 23:49, one hour and forty minutes after the first draft was saved ([Exhibit 8](exhibits.md#exhibit-8-time-and-cost)). [Exhibit 7](exhibits.md#exhibit-7-the-final-result-table-of-contents-version-6) shows the final table of contents.[^practical-log]

Next, [A company of one](a-company-of-one.md).

[^practical-log]: Nisha's AI Team: Practical Log, entries 5 to 8 and Appendix B.
[^review-file]: ChatGPT's review is kept in a separate file, "The Bilingual Accountant v3 - Expert Review.md". It is not included in this package. The practical log records its grades and the count of 27 points (10 for accuracy, 11 for quality, 6 for ease). The details of its points come from that file.
# A company of one (/claude-and-chatgpt-2/case-1-nishas-ai-team/a-company-of-one)

---
type: Document
title: "A company of one"
description: "What Nisha's diary showed at the end of the evening, and the new question it raised about her job."
status: stable
order: 0.54
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Managing AI Workers" ]
last_verified: 2026-11-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "appendix-the-practical-log.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

> **Recorded on November 8, 2026.** This page tells what Nisha actually did that evening, as the [practical log](appendix-the-practical-log.md) records it. The [lab](lab-take-nishas-method-to-2-0.md) later asks you to try newer features that Nisha did not use.

## What Nisha's diary showed

Before going to sleep, Nisha read her diary from the start. She wrote down what she had seen, without deciding yet what it meant:

1. **Size.** She asked for a description and an outline, and the first draft was 2,470 words. She cut it to 1,531 words. By the end it had grown back to 2,599 words, and the sources had grown from 4 to 15.
2. **Scores.** Claude gave its own version 3 a 9.5 for accuracy and quality. ChatGPT gave the same version 8 and 7. Claude then gave version 4 a 9.3 for accuracy and an 8.8 for quality. Each grade was a judgment against her prompt, not a chance of being correct. A 9.5 did not mean the draft was 95% right.
3. **Catches.** Her notes listed 11 problems that existed before ChatGPT's review. Claude's self-review caught 5 of them and partly caught 2 more. ChatGPT caught 4 of the 7 that were still open when it reviewed. **The two reviewers saw different versions and different information, so this was not a controlled test.**
4. **Challenges.** Claude challenged a note that Nisha had added, because it could not confirm it, and she removed it. Claude also left out two true facts because it could not find them on the pages it checked.
5. **The last two grades.** Claude graded version 4 at 9.3 for accuracy and 9.0 for ease. After her edits, it graded version 5 at 9.2 for accuracy and 9.3 for ease.
6. **Limits.** When she asked, Claude listed the facts it could not fully check. Nisha confirmed 11 points against official sources and accepted the plain-English wording after her own review.
7. **The finish.** The draft never reached 9.5 in all three areas. She called it final anyway.

> **Stop and think: a score is not proof.** A score is a reviewer's judgment. Evidence is what makes the judgment defensible. When reviewers disagree, Nisha must identify their assumptions, inspect their reasoning and verify the disputed claims. Claude's 9.5 and ChatGPT's 7 were both judgments. Neither one told Nisha which reviewer was right. Her fact check in step 6 did.

## A company of one

Late that night, Nisha closed her laptop. She had a title, a short preface, a 25-chapter plan and 15 official sources. It had taken six versions, nine prompts and two subscriptions. It was a plan for a book, not the book itself.

She noticed something else. She had not written most of the words. She had *managed*. She had given the brief, made the decisions, said no to extra work, asked for a second opinion, checked the facts and decided when the work was finished. To Nisha, that felt more like a manager's job than a writer's.

People had told her that AI would replace accountants. Tonight it had not replaced her. Had it changed her job instead?

If two AI Workers could help her plan a book in one evening, what else could they do? Review accounts for clients abroad? Convert company accounts from IFRS to US GAAP? Nisha began to dream of a company with one human and many AI Workers, with herself as its CEO. For now, it was only an idea.

She remembered a line from her mentor: *"AI is not about building apps. AI is about solving problems, for people and for businesses."*[^practical-log]

But she could not wait long. Her bills were still higher than her salary, and the two subscriptions now added about Rs 60,000 a month. By Monday morning she had to choose how to spend her evenings for the next three months. She could write all 25 chapters with the same six steps. She could change the method first. Or she could put the book aside and offer to convert a foreign client's accounts from IFRS to US GAAP, the first job for her company of one, which might bring in money sooner. Each path needed the same few hours each night. She could not do all three.

Next, the [questions for discussion](questions-for-discussion.md).

[^practical-log]: The counts in this list come from Nisha's AI Team: Practical Log, sections 3 and 4 and Appendices A to C.
    # Questions for discussion (/claude-and-chatgpt-2/case-1-nishas-ai-team/questions-for-discussion)

---
type: Document
title: "Questions for discussion"
description: "Five core questions, six optional questions from the case, and three optional questions that connect the case to the ideas in the series."
status: stable
order: 0.55
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
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

Use the story and the [exhibits](exhibits.md) to support your answers. There is no single right answer to most of these questions.

## Core questions

1. What problem was Nisha really trying to solve: money, her career or the fear of AI? Can one book solve all three?
2. Claude gave its own work 9.5. ChatGPT gave the same work 8 and 7. Which score would you trust, and why?
3. Which decisions in this case did Nisha make herself? Which of them made the biggest difference to the result?
4. The AI tools kept adding more than Nisha asked for. Why might this happen? How did Nisha keep control?
5. What should Nisha do next: write the whole book with the same method, change the method, or start the company? Use evidence from the case, and name the risks.

## Optional questions

6. Nisha checked Claude's first draft herself before any grading. What would have happened if she had gone straight to step 2?
7. Making the text simpler lowered the accuracy score. When is "simple" more important than "precise"? When is it the other way round?
8. Claude left out two true facts because it could not find them on the page it checked. Is it better for an AI to leave out a true fact or to include an unchecked one?
9. Can a book planned with the help of AI prove that Nisha is an expert? What else might an employer want to see?
10. Nisha now "manages" AI Workers. Is that the same as being a CEO? What other skills would she need?
11. "AI is not about building apps. AI is about solving problems." Do you agree? Give an example from your own field.

## Optional questions that connect to the series

12. **Words or locks?** Which of Nisha's rules were enforced by the tools, and which were only words? For example, she told Claude to "repeat until every area reaches 9.5", and it stopped at 9.3. What does this tell you about rules given in a chat? Compare [Projects: one team lead, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md) and [Security boundaries](../architecture/security-boundaries.md).
13. **Where did the work live?** Which parts of the evening lived only in the chats, and which were saved somewhere lasting? If a chat had been lost halfway through, what could Nisha have rebuilt, and from what? Compare [Why the borrowed desk gets cleared](../behind-the-screen/why-the-borrowed-desk-gets-cleared.md).
14. **A project with threads.** Nisha used one shared workspace and no threads. How might a rebuilt project, with one thread for writing and one for reviewing, change her method? What would she still have to do herself? Compare [Projects: coordination on top of sessions](../architecture/projects-coordination-on-top-of-sessions.md).
# Exhibits (/claude-and-chatgpt-2/case-1-nishas-ai-team/exhibits)

---
type: Document
title: "Exhibits"
description: "The details behind the story: Nisha's method, her key prompts, every grade, how the draft changed, who caught what, the fact check, the final table of contents, the time and cost, and the words to know."
status: stable
order: 0.56
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "appendix-the-practical-log.md"
generated:
  at: 2026-11-09T20:42:36Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

> **Recorded on November 8, 2026.** Every exhibit shows what Nisha actually did in the practical. Nothing here comes from the 2.0 lab, which is your exercise, not hers.

All the facts in these exhibits come from the practical log, the six draft files and ChatGPT's review file.[^practical-log]

## Exhibit 1: Nisha's method: six steps, with human checks in between

![Nisha's method, in two rows. Row one: Step 1, Claude writes a first draft. Human check 1, Nisha reads it, cuts the scope and fixes mistakes. Step 2, Claude grades its own work out of 10. Human check 2, Nisha sets rules before Claude works alone. Step 3, Claude improves by itself, round after round. Row two: Step 4, ChatGPT reviews and grades, with exact fixes. Human check 3, Nisha sorts the points into accept, change and not now. Step 5, Claude uses the review to improve again. Step 6, a person checks the facts and decides when the work is done. The three human checks are shown in gold, and step 6 has a red border as the final human decision. A band explains the colors. A callout says the six steps come from the method taught in class, and the three checks were added by Nisha.](img/nishas-method-six-steps-with-human-checks-in-between.png)

| Stage | Who | What happens | Why it changes the decision |
|---|---|---|---|
| Step 1 | Claude | Writes a first draft. | Gives Nisha something concrete to react to. Her decisions on scope and voice came from reading it. |
| Human check 1 | Nisha | Reads the draft, answers Claude's questions, adds missing context, cuts the scope and fixes mistakes before any grading. | Sets the scope before anyone grades, so later grades judge the book she wants. |
| Step 2 | Claude | Grades the draft out of 10 in three areas: accuracy, quality, and how easy it is for a beginner to understand. | Shows which area is weakest, so she knows what to fix first. |
| Human check 2 | Nisha | Sets clear rules before Claude works alone. | Turns her decisions into written rules, so Claude's solo rounds stay inside them. |
| Step 3 | Claude | Improves the draft, aiming for 9.5 in each area. It improves, grades again and repeats the rounds by itself, without being asked for each one. | Fixes many problems without her, and shows where self-review stops. |
| Step 4 | ChatGPT | Reviews and grades the result and its sources, with specific fixes. | A reviewer that did not write the draft finds different problems, so she does not rely on one judgment. |
| Human check 3 | Nisha | Sorts ChatGPT's points into accept, change and "not now". | Keeps the decision with her, so the review does not choose the changes or grow the work. |
| Step 5 | Claude | Uses ChatGPT's review to improve the work again. | Turns accepted advice into a new version, and lets Claude challenge points it cannot confirm. |
| Step 6 | Nisha | A person checks the facts against their sources, reviews any problems still open, and decides when the work is ready. | Replaces judgments with evidence. Only official sources show which disputed claims are right, and only she decides when to stop. |

Steps 1 to 6 come from the method taught in class. The three extra human checks were Nisha's own addition.

## Exhibit 2: Nisha's key prompts

The prompts below are copied exactly as they were sent.

**a) First prompt to Claude (step 1)**

```text
I am a chartered accountant from Pakistan (ICAP) and a gold medalist. My name is Nisha. I have identified a problem: there are two main sets of accounting rules in the world. The first is IFRS, which is used internationally. The second is US GAAP, which is followed in America. IFRS is principle-based, while US GAAP is rule-based. Chartered accountants around the world are skilled in IFRS, but American companies follow US GAAP.

I want to write a book that helps accountants on both sides of the fence understand the other set of rules and make the move from one to the other.

My readers are:
- IFRS-trained accountants, like chartered accountants in Pakistan, who want to work for US companies or Big 4 firms
- US GAAP-trained accountants who need to work with IFRS

Please draft:
1. A basic concept or description of the book
2. An outline of the chapters
```

**b) Grading prompt to Claude (step 2, sent in the same message as Nisha's answer about the gold medal line)**

```text
Now please review the current version of the document and grade it out of 10 in three areas:
1. Accuracy: Are the facts, dates, rules and standard numbers, correct? Check each standard number in brackets, and tell me if you are unsure about any of them.
2. Quality: Is it well organized, complete and professional? Would a publisher or a Big 4 hiring manager take it seriously?
3. Ease of understanding: Is it easy to follow for my readers? They know basic accounting but are new to the other framework, and many speak English as a second language.

For each area, give:
- The score out of 10
- The reasons for the score
- The specific problems, and where they are (for example, "Preface, paragraph 2" or "Chapter 12")
- What would need to change to reach 9.5

Be strict. Do not give a high score unless the work earns it.

Do not change the document yet. Only grade it.
```

**c) The self-improvement instruction to Claude (end of the step 3 prompt)**

```text
Then improve the document by yourself: grade it again in the same three areas and repeat until every area reaches 9.5. Stay strict. Do not raise a score unless the problem is really fixed.

After each round, show a short table with the round number, the three scores and the main changes. Save the final result as version 3.
```

**d) Review prompt to ChatGPT (step 4, shortened)**

```text
I am Nisha, a chartered accountant from Pakistan (ICAP). I am writing a book called "The Bilingual Accountant: Moving Between IFRS and US GAAP". [...] I have attached the preface and table of contents (version 3). Please review it as a strict expert who knows both IFRS and US GAAP.

Decisions I have already made. Please don't reverse them: [four decisions listed]

Please grade it out of 10 in three areas: accuracy, quality, ease of understanding. Open each source link and check that it supports what the document says.
For each area, give the score and why, each problem and where it is, and the exact fix.
At the end, list any facts or sources you could not check, and anything you are unsure about.
Be strict. Do not rewrite the whole document. Only list the problems and fixes.
```

The full prompts are in the [practical log](appendix-the-practical-log.md).

## Exhibit 3: Every grade, from first draft to final version

![Every grade, two reviewers. A line chart of grades out of 10, with a dashed line at the 9.5 target. Claude's own grades for accuracy, quality and ease start at 7, 6.5 and 7 for version 2. They rise to 8.5, 8.0 and 7.5 in round 1, 9.5, 9.2 and 9.0 in round 2, and 9.5, 9.5 and 9.3 in round 3. A shaded column shows ChatGPT's grades for the same version 3 as hollow marks: accuracy 8, quality 7 and ease 8. After it, Claude's grades for version 4 are 9.3, 8.8 and 9.0, and for version 5 they are 9.2, 9.0 and 9.3. Ease never reaches 9.5 after round 3. A note says all grades are the AI tools' judgments against Nisha's prompt, not probabilities of correctness or test results, that the two reviewers saw different information, and that version 6 was not graded. A label points out that accuracy and quality are both 9.5 at round 3, so one marker sits on top of the other.](img/every-grade-two-reviewers.png)

| Version | Graded by | Accuracy | Quality | Ease | What was happening |
|---|---|---|---|---|---|
| Version 2 | Claude | 7 | 6.5 | 7 | Step 2: Claude grades its own work |
| Version 3, round 1 | Claude | 8.5 | 8.0 | 7.5 | Step 3: Nisha's decisions applied |
| Version 3, round 2 | Claude | 9.5 | 9.2 | 9.0 | Step 3: fixes and fact checks |
| Version 3, round 3 | Claude | 9.5 | 9.5 | 9.3 | Step 3: final polish, and Claude stops |
| Version 3 | ChatGPT | 8 | 7 | 8 | Step 4: independent second opinion |
| Version 4 | Claude | 9.3 | 8.8 | 9.0 | Step 5: after using ChatGPT's review |
| **Version 5** | **Claude** | **9.2** | **9.0** | **9.3** | **Step 6: Claude checks Nisha's edits (last grade)** |

**All grades were given by the AI tools against Nisha's prompt and her three areas. They are judgments, not probabilities of correctness and not test results.** A 9.5 does not mean the draft is 95% right, and a lower grade does not make a reviewer more reliable. The reviewers also saw different information, so their grades are not a fair comparison. The target was 9.5 in every area. Version 6 (the final version) was not graded, on Nisha's instruction.

> A score is a reviewer's judgment. Evidence is what makes the judgment defensible. When reviewers disagree, Nisha must identify their assumptions, inspect their reasoning and verify the disputed claims.

## Exhibit 4: How the draft changed

![The draft grew back. A bar chart of words in the file for each version, with a line for the number of sources. Version 1 by Claude: 2,470 words and 4 sources. Version 2, after human check 1: 1,531 words and 4 sources. Version 3, after steps 2 and 3: 2,247 words and 9 sources. Version 4, after step 5: 2,606 words and 15 sources. Version 5, by Nisha: 2,611 words and 15 sources. Version 6, final: 2,599 words and 15 sources. The bars for versions 2 and 5 are gold, because they came after Nisha decided. The final version is dark. A note says words are counted for the whole file, including the list of sources.](img/the-draft-grew-back.png)

| Version | Made by | What changed | Words | Sources |
|---|---|---|---|---|
| 1 | Claude | Full book concept: market, readers, 25 detailed chapters, open decisions | 2,470 | 4 |
| 2 | Claude, after human check 1 | Cut to preface and table of contents, in Nisha's voice and plain English | 1,531 | 4 |
| 3 | Claude, after steps 2 and 3 | Key to short forms, mistakes fixed, plainer titles | 2,247 | 9 |
| 4 | Claude, after step 5 | 23 of ChatGPT's 27 points used, most of them rewritten | 2,606 | 15 |
| 5 | Nisha | 6 groups of small edits (8 places): shorter lines, fewer hard terms | 2,611 | 15 |
| **6** | **Claude, on Nisha's instruction** | **One unconfirmed note removed: final version** | **2,599** | **15** |

Words are counted for the whole file, including the list of sources.

## Exhibit 5: Who caught what

![Who caught what. A colored grid of the 12 problems in Nisha's private notes, with one column for Claude's self-review and one for ChatGPT's review. Gold means caught, light gold means partly or caught but not fixed, red means missed, gray means already fixed before ChatGPT saw it, and a hatched box means ChatGPT did not see that version. Claude caught problems 1, 2, 3 and 5, caught but did not fix 4, partly caught 7 and 9, and missed 6, 8, 10, 11 and 12. It added problem 8 itself. ChatGPT found 1, 2, 3 and 5 already fixed, caught 4, 6, 7 and 11, partly caught 8, missed 9 and 10 and made both worse, and did not see version 4, where problem 12 was found. A note says notes 1 to 6 came from version 2, notes 7 to 11 from version 3, and note 12 from step 6, and that this was not a controlled test.](img/who-caught-what.png)

> [!WARNING]
> **Not a controlled test.** Claude and ChatGPT saw different versions and different information. Claude reviewed its own drafts inside the project where it wrote them. ChatGPT saw only version 3 and its sources, and never saw version 4. Read the counts below as a record of one evening, not as proof that one reviewer is better.

Nisha's private notes, compared with the two AI reviews.

| # | Problem Nisha noted | Claude's self-review (steps 2 and 3) | ChatGPT's review (step 4) |
|---|---|---|---|
| 1 | The preface said foreign companies in the US can use IFRS. This is too broad, because only some can. | Caught | Already fixed |
| 2 | One source was from 2018. | Caught | Already fixed |
| 3 | Chapter 22 pointed to the wrong US standard. | Caught | Already fixed |
| 4 | Chapter 12 missed the US standard on equity investments. | Caught, not fixed | Caught |
| 5 | The preface said "most books only list differences" without proof. | Caught | Already fixed |
| 6 | Chapter 13 covers debt but missed the main US standard on debt. | Missed | Caught |
| 7 | Chapter 5's brackets listed IAS 1 but not IFRS 18 (the chapter line itself mentioned IFRS 18). | Partly | Caught |
| 8 | Chapter 25 contained news that would soon be out of date. | Missed (Claude added it) | Partly |
| 9 | Several chapter lines were much longer than one line. | Partly | Missed, and its fixes made lines longer |
| 10 | The preface paragraph on foreign companies was too technical for beginners. | Missed | Missed, and its fix made it more technical |
| 11 | Chapter 18 said "some subsidiaries" without saying which ones. | Missed | Caught |
| 12 | Chapter 22 (version 4) used "foreign private issuer", a term the book never explains. Found in step 6. | Missed | Did not see version 4 |

"Already fixed" means Claude had fixed the problem before ChatGPT saw the draft. For note 7, the practical log shows that Claude added a line about IFRS 18 to Chapter 5 in step 3 but did not add it to the chapter's list of standards, so it is marked "Partly". Notes 1 to 6 were made while reading version 2, notes 7 to 11 while reading version 3, and note 12 during step 6. This was not a controlled test, because the two reviewers saw different versions. The notes are recorded in Appendix A of the [practical log](appendix-the-practical-log.md#appendix-a-private-review-notes).

## Exhibit 6: Nisha's fact check (step 6)

| # | Fact in the book | Checked against | Result |
|---|---|---|---|
| 1 | More than 140 countries and regions (jurisdictions) require IFRS | IFRS Foundation, March 2025 roadmap (page 18) | Confirmed |
| 2 | US companies listed in the US use US GAAP, and some foreign companies can use IFRS | SEC concept release 33-11376 (page 10), and the SEC 2007 rule | Confirmed |
| 3 | IFRS 18 replaces IAS 1 from January 1, 2027, and early use is allowed | IFRS Foundation, IFRS 18 page | Confirmed |
| 4 | Start dates of the new US expense disclosure rule (ASU 2024-03) | FASB, ASU 2025-01 | Confirmed |
| 5 | A company that loses foreign private issuer status must switch to US GAAP | SEC Financial Reporting Manual, Topic 6 (6120.2, 6120.4) | Confirmed |
| 6 | Which subsidiaries can use IFRS 19 | IFRS 19, paragraph 7 | Confirmed |
| 7 | IFRS 1 covers adopting IFRS for the first time | IFRS Foundation, IFRS 1 page | Confirmed |
| 8 | What the PCAOB oversees | PCAOB, Oversight page | Confirmed |
| 9 | IFRS S1 and S2 were issued in June 2023 and are separate from the accounting standards | IFRS Foundation, ISSB introduction | Confirmed |
| 10 | The SEC paused its climate rules and proposed to withdraw them on May 29, 2026 | SEC proposal page and press release 2026-49 | Confirmed |
| 11 | US GAAP topic numbers, including ASC 320, 321, 835-20, 360 and 105-10-05-1 | FASB Accounting Standards Codification | Confirmed |
| 12 | The plain-English lines still say the right thing | Nisha's own judgment as an accountant (not an official source) | Accepted after review |

Recorded item by item in Appendix B of the [practical log](appendix-the-practical-log.md#appendix-b-fact-check-step-6). Nisha's final prompt sums up the result as "All confirmed".

## Exhibit 7: The final result: table of contents (version 6)

*The Bilingual Accountant: Moving Between IFRS and US GAAP*, by Nisha

**Part I: Background on the two frameworks**

1. The two frameworks and who uses them
2. Principles-based and rules-based: what the words really mean
3. How to find answers: the standards and the vocabulary
4. US financial reporting: the SEC, auditors and controls

**Part II: The main differences, topic by topic**

5. Presentation of financial statements and cash flows
6. Revenue
7. Inventory
8. Property, plant and equipment, and investment property
9. Intangible assets and research and development
10. Impairment, assets held for sale and discontinued operations
11. Leases
12. Financial instruments I: classification, measurement and credit losses
13. Financial instruments II: derivatives, hedging, debt and equity
14. Provisions, contingencies and events after the reporting period
15. Income taxes
16. Employee benefits and share-based payment
17. Foreign currency and hyperinflation
18. Business combinations and consolidation
19. Earnings per share, segments, interim reporting and related parties
20. Rules for special industries

**Part III: Moving from one framework to the other**

21. Converting financial statements between the frameworks
22. When a company changes its framework
23. Career guide A: from IFRS to US GAAP
24. Career guide B: from US GAAP to IFRS
25. What is changing

**Appendices**

- A. Master differences and reference tables
- B. Terminology dictionary
- C. Journal-entry quick reference
- D. Self-test and interview questions
- E. Reading list
- F. Excel conversion toolkit

The [full version 6 file](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/the-bilingual-accountant-v6.md) also has a short preface, a one-line description and the main standards for each chapter, a key to the short forms, and 15 official sources.

## Exhibit 8: Time and cost

| 1 h 40 min | 6 | 9 | About Rs 60,000 |
|---|---|---|---|
| From the first draft (22:09) to the final version (23:49) | Versions of the document | Prompts: 7 to Claude, 2 to ChatGPT | A month for both subscriptions (about Rs 30,000 each, made up for the case) |

| Saved at | What was finished |
|---|---|
| 22:09 | Version 1: Claude's first draft (step 1) |
| 22:27 | Version 2: after Nisha's first check |
| 22:50 | Version 3: after Claude's grading and three improvement rounds (steps 2 and 3) |
| 23:11 | ChatGPT's review (step 4) |
| 23:29 | Version 4: after Claude used ChatGPT's review (step 5) |
| 23:36 | Version 5: Nisha's own edits (step 6) |
| 23:49 | Version 6: final version (step 6) |

Times are when each file was saved on November 8, 2026. The time spent writing the first prompt, before version 1, is not included.

## Exhibit 9: Words to know

**AI Worker.** An AI tool given a job, a brief and limits, as described in [The New Way of Working](../new-way-of-working/overview.md). In this case, Claude is the writer and ChatGPT is the reviewer.

**Chartered accountant (CA) and ICAP.** A CA is a highly trained, qualified accountant. In Pakistan, CAs qualify through the Institute of Chartered Accountants of Pakistan (ICAP).

**Big 4.** The four largest accounting firms in the world: Deloitte, EY, KPMG and PwC.

**IFRS.** International Financial Reporting Standards, the accounting rules used in most of the world. They are written by the IASB (International Accounting Standards Board).

**US GAAP.** US Generally Accepted Accounting Principles, the accounting rules used in the United States. They are written by the FASB (Financial Accounting Standards Board).

**The Codification (ASC).** The official database of US GAAP rules, organized by topic number. For example, ASC 330 is the topic on inventory.

**SEC.** The US Securities and Exchange Commission, which regulates companies listed on US stock markets.

**Foreign private issuer.** A non-US company listed in the US that meets the SEC's conditions. It may prepare its accounts under IFRS (as issued by the IASB) instead of US GAAP.

**PCAOB.** The Public Company Accounting Oversight Board, the US body that oversees the auditors of companies listed in the US.

**Standard.** One official rule document on one topic, such as IAS 2 (inventories under IFRS).

**IAS 1 and IFRS 18.** IAS 1 is the IFRS standard on how to set out the main financial statements. IFRS 18 replaces it for years starting on or after January 1, 2027.

**IFRS 1.** The IFRS standard for a company that starts using IFRS for the first time.

**Subsidiary.** A company that is controlled by another company, its parent.

**Jurisdiction.** A country or region that makes its own rules, such as which accounting standards its companies must use.

**Listed company.** A company whose shares are traded on a stock market.

**Preface and table of contents.** The preface is the short introduction at the start of a book. The table of contents lists the book's chapters.

**Prompt.** The instruction or question you type to an AI tool.

**Project.** A workspace in Claude or ChatGPT that keeps a task's chats and files together. Rebuilt Claude projects can also start separate threads, but Nisha did not use them.

**Grading and self-improvement.** Asking the AI to score its own work against clear areas, then to improve it and score it again, round after round.

**Source and fact check.** A source is the place a fact comes from. A fact check means opening the source and confirming that it really says what the document says.

**ESL.** English as a second language: readers whose first language is not English.

> This case was prepared for class discussion. It is not meant to show whether the choices described were good or bad, and it is not a source of accounting advice.

[^practical-log]: Nisha's AI Team: Practical Log, with the draft files listed in its Appendix C.
# Lab: take Nisha's method to 2.0 (/claude-and-chatgpt-2/case-1-nishas-ai-team/lab-take-nishas-method-to-2-0)

---
type: Document
title: "Lab: take Nisha's method to 2.0"
description: "Run Nisha's six steps again for one chapter of her book, this time with a project, a writer thread and a reviewer thread, an overnight scheduled draft, ChatGPT Work as the independent reviewer, and a second signature that only you can give."
status: stable
order: 0.565
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T05:47:26Z
chapter: "F00C"
part: Front
expert_status: required
concepts: [ "Method to 2.0" ]
last_verified: 2026-11-09
sources:
  - id: claude-projects
    title: "Let Claude coordinate ongoing work with Projects (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/claude-projects
  - id: cloud-scheduled-tasks
    title: "Automate work with scheduled tasks (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/routines
  - id: desktop-scheduled-tasks
    title: "Schedule recurring tasks in Claude Code Desktop (Anthropic, verified 2026-11-09)"
    resource: https://code.claude.com/docs/en/desktop-scheduled-tasks
  - id: tour-chatgpt
    title: "The Tour: ChatGPT"
    resource: "../tour/chatgpt.md"
  - id: tour-chatgpt-perms
    title: "The Tour: ChatGPT, Permissions and governance"
    resource: "../tour/chatgpt.md#permissions-and-governance"
generated:
  at: 2026-11-13T05:47:26Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

> [!IMPORTANT]
> **Your exercise, not Nisha's.** Nisha did not use threads, scheduled tasks, ChatGPT Work or a `final` folder. Her recorded evening of November 8, 2026 is in the story pages and the [exhibits](exhibits.md). This lab asks *you* to try the newer features, so nothing you record here is part of her case.

In the case, Nisha used two projects, a Claude Project and a ChatGPT Project, with one conversation in each, and stayed at her laptop the whole evening. That is the first step of the ladder in [From helper to AI Worker](../behind-the-screen/from-helper-to-ai-worker.md): a helper, used by a person who is present. In this lab you run her six steps again for **one chapter** of her book. This time you use the features from the earlier sections: a project with a writer thread and a reviewer thread, an overnight scheduled draft, ChatGPT Work as the independent reviewer, and a second signature that only you can give.

This page explains each part, what it is for and the decisions you make. The exact clicks, the fallbacks and the docs' own words are in the **[lab guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md)** in the starter kit. Apps change often, so the guide is kept up to date separately and shows the date it was last checked.

![Evening 1.0 versus lab 2.0. Six parts of the work, before and after. Nisha's evening used two projects with one conversation each, one laptop and one evening. The lab uses one project, two threads, one evening and one morning. Writing: one conversation in a Claude Project becomes a writer thread. Grading: the same conversation grading itself becomes a separate reviewer thread. Overnight: nothing ran while Nisha slept, and in the lab a scheduled task drafts at 1 a.m. Second opinion: one conversation in a ChatGPT Project becomes ChatGPT Work. Record: files she saved and her diary become the Library and your version log. Final yes: her decision written in a conversation becomes a file only you can move to the final folder. The overnight row and the final yes row are gold, because they are the two big changes: work that runs without you, and a rule that is enforced. The callout says your judgment stays in every step, and the tools change where the work lives.](img/evening-1-0-versus-lab-2-0.png)

> [!TIP]
> **Minimum steps, on one screen**
>
> 1. Write a brief and paste it as the project instructions.
> 2. Turn off every connector that can send. Lock GitHub.
> 3. Test the lock: ask a thread to email or share a test file, and record that it cannot.
> 4. Ask for a 1 a.m. draft. Empty the task's connectors.
> 5. In the morning, fix the draft and add it back with **Add**.
> 6. A new reviewer thread grades it. A new writer thread improves it.
> 7. Check the facts yourself. Only you move the last version into `final`.

## Lab at a glance

You need two sittings: one evening (about 1 hour 25 minutes) and the next morning (about 2 hours 40 minutes). Each part below gives its own time.

**Evening checklist (about 1 hour 25 minutes)**

- [ ] Part 1. Write the brief.
- [ ] Part 2. Create the project, paste the brief, upload version 6.
- [ ] Part 2. Turn off every connector that can send. Lock GitHub.
- [ ] Part 2. Run the enforcement test and record the result.
- [ ] Part 3. Ask for the 1 a.m. draft. Empty the scheduled task's connectors. Close your laptop.

**Morning checklist (about 2 hours 40 minutes)**

- [ ] Part 3. Read the 1 a.m. draft. Run the enforcement test on the 1 a.m. thread. Save your edit as version 2. Tell Claude what to remember.
- [ ] Part 4. Start a new reviewer thread. Start a new writer thread. Get version 3.
- [ ] Part 5. ChatGPT Work reviews version 3. Sort its points.
- [ ] Part 6. The writer makes version 4. A new reviewer thread grades it.
- [ ] Part 7. Check the facts. Make version 5. Move it into `final` yourself.
- [ ] Part 8. Reflect and compare.
- [ ] Hand in the files listed at the end, then do the lab quiz at the end of this page.

> [!NOTE]
> **Short path (about 2 hours 50 minutes)**
>
> Short on time? Do Parts 1 to 4 and Part 7 only: the brief (30 minutes), the project, connector check and enforcement test (40), the overnight draft (15 in the evening, 25 in the morning), the reviewer thread (30), and the fact check and second signature (30). You skip ChatGPT's review, the writer's second round and the written reflection, so you practice every Claude 2.0 step but not the independent review. In Part 7, start from `chapter-7-v3.md` instead of version 4, and ask the morning writer thread for its list of unchecked facts first. Hand in the items for those parts, and one line saying you took the short path.

### Words to know

- **Thread:** one job inside a project, done by its own Claude session. The writer and the reviewer are two threads.
- **Project instructions and project memory:** the shared binder from [Projects: one team lead, many desks](../behind-the-screen/projects-one-team-lead-many-desks.md). Instructions are the rules sent to every new thread. This project exists for one job, so they hold your brief for that job too. Memory is notes Claude writes when you ask it to remember something.
- **Library:** the shared shelf. It keeps the files you add and every file the threads make.
- **Cloud scheduled task:** a saved prompt that starts a thread in the cloud at a set time, even with your laptop closed.
- **Connector:** a link from Claude to another app, such as Google Drive or Gmail.
- **Enforcement test:** asking a thread to do the thing you locked, to prove that it cannot. A screenshot of a setting shows what you chose. The test shows what the thread can actually do.

## Before you start

You need:

- **Claude,** with projects if your plan has them, and **ChatGPT,** with the Work toggle if your app has it. The [lab guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#where-to-find-it) says where to find each feature.
- **The starter kit:** download [nisha-lab-case-1.zip](https://github.com/panaversity/agentfactory-v2-resources/releases/latest/download/nisha-lab-case-1.zip). It holds the lab guide, a brief template, a version log, a grading sheet, a fact checklist and a reflection template.
- **Two folders on your own computer:** `versions` for copies you download, and `final`. Only you will put files in `final`.

The chapter you will plan is **Chapter 7, Inventory**, from [Exhibit 7](exhibits.md#exhibit-7-the-final-result-table-of-contents-version-6). The case already explained one difference: US GAAP allows LIFO and IFRS does not. Your job is a chapter plan in the book's own pattern, plus one full worked example.

Use made-up numbers in your worked example, as Nisha did. Do not paste real company data.

**If a feature is missing,** use the fallback in the lab guide's [Which path do you take?](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#which-path-do-you-take) section: two ordinary Claude conversations instead of threads, a Desktop scheduled task or a draft started by hand instead of a cloud task, and a regular ChatGPT conversation instead of Work. Record what you actually used. A fallback run still teaches the lab's main lesson, because the second signature does not depend on any feature.

## Part 1. Write the brief once

**Goal:** turn Nisha's first prompt into a proper brief, so you do not have to add missing context later, as she did in human check 1.
**Time:** 30 minutes.

1. Open `brief-template.md` from the starter kit. Fill in the four parts that [One job, start to finish](../new-way-of-working/one-job.md) teaches, in order: the outcome, ending with a "Done when" sentence (the test that says when the job is finished), the context, the format and the constraints.
2. Add the rules Nisha only set later, in her human checks. Plain English for readers who speak English as a second language, no new chapters, two or three main standards per side and official sources only are content rules, so they go in the constraints. A list of every fact the writer could not check goes in the format.
3. Write the autonomy half of the constraints with care. The writer and reviewer may draft and grade. They may **not** share, send or publish anything.

Nisha wrote her rules into the chat as the evening went on. You put them in once, before any work starts. Compare how often you have to correct the draft with how often she did.

## Part 2. Set up the project, lock the connectors and test the lock

**Goal:** give every thread the same binder and the same shelf, make sure no thread has a connector that can send, and prove it with a test.
**Time:** 40 minutes. Exact clicks: [lab guide, Part 2](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#part-2-set-up-the-project-and-lock-the-connectors).

![Where everything lives in your lab project. On the left, your project in the cloud, opened at claude.ai/code or in the Code tab. A footnote under the figure says projects also work in chat, as the author of this book observed. In it, the project conversation, where you ask and Claude starts threads. It has no connectors. It starts a writer thread and a reviewer thread. Below them, the project instructions (your brief) and project memory. Below that, the Overview pane with three parts: the Library with every version, Scheduled tasks with the 1 a.m. draft, and threads by state, showing who is waiting on you. A dashed box says connectors: none that can send, so check the threads and the task. A dashed red line, labeled the wall that no thread crosses, separates the project from your computer on the right. On your computer are a versions folder for copies you download, and the final folder with a red border: only you move a file there, which is the second signature. Notes say no connector reaches it and no local task points at it. The callout says a missing connection enforces the rule, and a written rule only asks.](img/where-everything-lives-in-your-lab-project.png)

1. **Create the project and paste your brief as the project instructions.** As [the Tour explains](../tour/claude-code-tab.md#projects-one-conversation-that-runs-the-work), project instructions are what every new thread starts from. This project exists for one job, so they hold your brief as well as the standing rules. This is why you write the brief once.
2. **Choose the thread model.** Threads start on Opus at high effort, which uses your plan's limits fastest. To compare your run with Nisha's, choose Claude Sonnet 5.5 at high effort, the setting she used.
3. **Add Nisha's version 6 file,** [the-bilingual-accountant-v6.md](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/the-bilingual-accountant-v6.md), to the **Library**. A project does not need a GitHub repository.[^claude-projects]
4. **Lock the connectors. This is the most important decision in the lab.** Threads run in auto mode when their model supports it, so most actions happen without asking you first.[^claude-projects] That is why what a thread *can* reach matters more than what you ask it to do. Connectors belong to your whole Claude account, not to one project, and every cloud thread can use all of them.[^claude-projects] So turn off every connector that can write somewhere other people can see, such as email, file sharing and chat apps. If your GitHub account is connected, lock GitHub too, because a cloud thread can push to a repository your account can reach.[^claude-projects]
5. **Keep the `final` folder out of reach.** It stays on your own computer. Cloud threads run in the cloud, not on your computer, and files you upload are copies.[^claude-projects] Do not connect any app that can reach `final`, do not point any local task at it, and do not ask the project to run a thread on your computer.
6. **Run the enforcement test.** Ask Claude to start a short **test thread**. In it, ask: "Email the file `lab-test.md` to me at [your own email address]", then "Share `lab-test.md` to my Google Drive" (or any other app you turned off). The file holds one line, such as "Lab test. No real data." Use your own address, so a failed lock harms no one. Record what the thread does, in its own words, in the enforcement test table on the grading sheet.
   - **Passed:** the thread says it has no tool or connector that can email or share, and nothing arrives.
   - **Failed:** the thread sends or shares the file, or offers a tool that can. Turn that connector off, then run the test again in a **new** test thread. Record both runs.
   - A screenshot of your settings alone is **not** proof. It shows what you chose. Only the test shows what the thread can do.

[Staying safe](../behind-the-screen/staying-safe-a-locked-office-and-a-second-signature.md) showed that a written rule is only a request. Here the rule "never share" is enforced as far as the settings allow, and your test shows whether it really is.

## Part 3. The overnight draft

**Goal:** let a draft be written while you are away, then check it in the morning.
**Time:** 15 minutes in the evening, 25 minutes in the morning. Exact clicks: [lab guide, Part 3](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#part-3-the-overnight-draft).

![What runs while you sleep. A timeline runs from 10 p.m. through 1 a.m. to the morning. In the evening, you ask the project for a draft at 1 a.m. and close your laptop. Three rows follow. Cloud task: at 1 a.m. a writer thread starts in the cloud and drafts, and in the morning the draft is in the Library and you read it, which is human check 1. Hits a limit: the scheduled thread waits at the usage limit, and it continues on its own when the limit resets. Desktop task: with the laptop asleep the run is skipped, and when the computer wakes there is one catch-up run for the latest missed time. The callout says the 1 a.m. prompt is not you, and it cannot approve anything during the run.](img/what-runs-while-you-sleep.png)

1. **Ask the project for scheduled work,** for example: "Tonight at 1 a.m., start a writer thread that drafts version 1 of Chapter 7 from the project instructions, and saves it to the Library." Claude creates a cloud scheduled task that runs as threads in the project.[^claude-projects]
2. **Empty the task's connectors.** A new scheduled task includes all of your connectors by default, and it can use them during a run, including writes.[^cloud-scheduled-tasks] The draft needs none, so remove them all. Your Part 2 lock is not enough here, because the task has its own connector list.
3. **Check the prompt.** A scheduled run starts on its own, so the prompt must stand alone. It must say exactly what to do and what done looks like, as if for a stranger. The prompt that fires is not you. It cannot approve or agree to anything during the run.[^cloud-scheduled-tasks] Read the rules in [Work that runs while you sleep](../behind-the-screen/work-that-runs-while-you-sleep.md), and use the overnight prompt in the brief template.
4. **In the morning, find the 1 a.m. writer thread.** If it hit a usage limit, it waits, and by default it continues on its own when the limit resets. The setting is **Auto-continue when usage limits reset**, in **Project settings**, then **General**. If the thread has not continued by the time you check, send it a message.[^claude-projects]
5. **Test the task's lock.** In the 1 a.m. writer thread, ask it to email or share `lab-test.md` as in Part 2, and record the result in the same table. This thread was started by the task, so it shows what the task could reach while you slept.
6. **Morning check (human check 1).** Download version 1 into your `versions` folder. Read it as Nisha did. Cut anything you did not ask for and fix what is wrong, in your own copy. Save it as `chapter-7-v2.md` and add it back to the Library. Now the Library holds your version, not only the AI's. Write each problem you notice in the private notes table on the grading sheet, and do not tell either AI about these notes.
7. **Make the binder learn.** For each correction that should hold for later work, tell Claude in the project conversation to remember it, for example: "Remember: every chapter line is one or two short sentences." Then check that the note is in project memory. Every cloud thread reads project memory when it starts, so your note reaches threads started after it, not threads already running.[^claude-projects] That is why Part 4 starts a new writer thread. Nisha had no binder. She had to repeat her rules in each prompt.
8. Record version 1 and your edited version 2 in `version-log-template.md`: who made it, what changed, words, sources, where it is saved and when.

## Part 4. The reviewer thread grades, the writer improves

**Goal:** separate the writer from the reviewer, and see whether that changes the grades.
**Time:** 30 minutes.

**A rule for this part and Part 6: start a new thread for each new job, and add every file it must read yourself.** The docs say threads read the files you add to the Library. They do not say that other threads can read files a thread produces, or that a running thread sees files or notes added after it started. So do not count on either. When one thread makes a file that another thread must read, download it, add it back to the Library, then start the new thread. Or paste the file's text into the thread yourself.

1. In the project conversation, ask Claude to start a new **reviewer thread** that grades `chapter-7-v2.md` in the Library out of 10 in Nisha's three areas: accuracy, quality and ease of understanding. Use the grading prompt in the brief template. It must not change the draft.
2. **Start a new writer thread and hand it the grades.** Ask for a new **morning writer thread**, not the 1 a.m. one. Because it is new, it starts with the memory notes you saved in Part 3. Threads do not see each other's work, so paste the reviewer thread's grades and its list of problems into the morning writer thread. Tell it to start from `chapter-7-v2.md`, your edited version, not version 1.
3. Ask the morning writer thread to improve `chapter-7-v2.md` in rounds, until every area reaches 9.5 or it can go no further. After each round it grades its own work, as Claude did for Nisha, so these round grades are **self-grades**. Ask for a table of scores after each round, and ask it to save the result in the Library as `chapter-7-v3.md`.
4. Write every grade on the grading sheet. Mark the writer's round grades as self-grades.

Nisha's Claude graded its own work. Here a different thread grades. Both threads still run on the same model with the same binder. Note on your grading sheet whether the reviewer thread's grades look more like Claude's self-grades or ChatGPT's grades in [Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version). Remember that every grade is a judgment against your prompt, not a measure of how correct the draft is.

## Part 5. A second opinion from ChatGPT Work

**Goal:** get an independent review, then decide what to use.
**Time:** 30 minutes. Exact clicks: [lab guide, Part 5](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#part-5-chatgpt-work).

1. Download `chapter-7-v3.md` into your `versions` folder. In ChatGPT, turn on **Work** if you have it, and upload the file with the review prompt from the brief template.[^tour-chatgpt]
2. **Decide what ChatGPT may reach.** Check which plugins ChatGPT can use. The review needs none that can send or share. Not naming a plugin is only a request, because ChatGPT can pick relevant plugins itself.[^tour-chatgpt] In the desktop app, add a lock with the **Ask for approval** permission mode.[^tour-chatgpt-perms] In the web app, the Tour documents no setting you can lock here, so give ChatGPT only a copy of the file and record this rule as **only asked**.
3. **Optional, a ChatGPT 2.0 step.** Keep the review in a **ChatGPT project**, so a second review later starts from the same files.[^tour-chatgpt]
4. Do not tell ChatGPT which tool wrote the draft or what grades it got.
5. **Human check 3.** Sort ChatGPT's points into accept, change and not now, as Nisha did. Add any new problem to your private notes, and mark which reviewer caught each problem. Your reviewers saw different versions too, so this is not a controlled test either.

## Part 6. The writer uses the review

**Goal:** use the review without letting the draft grow out of control.
**Time:** 25 minutes.

1. Paste only the points you accepted into the morning writer thread, with Nisha's four rules from human check 3: plain wording, short chapter lines, nothing you did not accept, and every new fact checked or left out.
2. Ask for a list of every fact the writer could not fully check. Ask it to save the result in the Library as `chapter-7-v4.md`, and record it as version 4 in the version log.
3. Download `chapter-7-v4.md` and add it back to the Library, because a thread made it (see the rule in Part 4). Then ask Claude to start a new reviewer thread to grade `chapter-7-v4.md` with the same prompt. Write the grades in the "4 / Reviewer thread" row of the grading sheet.

## Part 7. The fact check and the second signature

**Goal:** make the final decision yourself, in a place no AI can reach.
**Time:** 30 minutes.

1. Turn the writer's list into your own checklist with `fact-checklist.md` from the starter kit, as in [Exhibit 6](exhibits.md#exhibit-6-nishas-fact-check-step-6). Check each fact against an official source: the IFRS Foundation for IAS 2, and FASB for ASC 330. Mark each one confirmed, changed or removed. This is the step that turns judgments into evidence.
2. Download `chapter-7-v4.md` into your `versions` folder and make your own last edits there. Save it as `chapter-7-v5.md`, add it to the Library, and record it as version 5 in the version log. Now the lasting record holds your final wording too.
3. **The second signature.** Copy `chapter-7-v5.md` from your `versions` folder into your `final` folder yourself. This is the only way a file becomes final in this lab. No thread can do it, because no thread can reach that folder.

## Part 8. Reflect and compare

**Goal:** measure what changed when the work moved up the ladder.
**Time:** 20 minutes.

![Asked versus enforced. Two columns. Only asked, written in the brief or a chat: no new chapters, official sources only, two or three standards per side, repeat until every area reaches 9.5, the reviewer must not change the draft, and "never share or publish". A note says Claude stopped at 9.3 and nothing forced it. Enforced, by a setting or a permission that is missing: no connector that can send is turned on, GitHub is not connected or no repositories are granted to the Claude GitHub App, the scheduled task has no connectors, the final folder is outside every thread, only you move a file into final, and cloud threads run in the cloud, not on your computer. A note says these hold even if a thread ignores the brief. The callout says asking is not enforcing, so lock every rule that can be locked.](img/asked-versus-enforced.png)

Fill in `reflection.md` from the starter kit. Compare your run with the case:

- **Time.** Nisha took 1 hour and 40 minutes from first draft to final file ([Exhibit 8](exhibits.md#exhibit-8-time-and-cost)). How much of your own time did your run take, and how much ran while you were away?
- **Versions and size.** Compare your version log with [Exhibit 4](exhibits.md#exhibit-4-how-the-draft-changed). Did your draft grow as much as hers did?
- **Grades.** Compare your grading sheet with [Exhibit 3](exhibits.md#exhibit-3-every-grade-from-first-draft-to-final-version). Was the reviewer thread stricter than Claude's self-grading? Which disputed claims did your fact check settle?
- **Enforced or asked.** List each rule you set, in two columns like the figure above. A rule counts as enforced only if your enforcement test showed the thread could not break it. Which rules were only words?
- **The ladder.** Which step of [From helper to AI Worker](../behind-the-screen/from-helper-to-ai-worker.md) did you reach? What would the next step need?

## What to hand in

Your instructor uses the same list to grade the lab.

- Your brief, pasted as the project instructions (Part 1)
- Your enforcement test table: what you asked, what each thread said, and whether anything arrived, for the Part 2 test thread and the 1 a.m. thread (Parts 2 and 3). Screenshots of your connector settings may support it, but they are not proof on their own.
- A screenshot of the scheduled task's empty connector list, and of your ChatGPT permission mode if you used the desktop app (Parts 3 and 5)
- A screenshot of project memory showing at least one correction you saved (Part 3)
- Your version log, with where each version was saved (Parts 3 to 7)
- Your grading sheet, with all grades, the writer's self-grades marked, and your private notes (Parts 3 to 6)
- ChatGPT's review and your accept, change and not now list (Part 5)
- Your fact checklist, made with `fact-checklist.md` (Part 7)
- The final file from your `final` folder, and one line saying you moved it there yourself (Part 7)
- Your reflection, with the rules you only asked for and the rules your test showed were enforced (Part 8)
- One line saying which features and which fallbacks you used, and the "last verified" date of the lab guide you followed

## What you practiced

- **Writing the brief once,** as project instructions, instead of adding context after the first draft.
- **Separating roles:** a writer thread, a reviewer thread, and an independent reviewer from another company.
- **Work that runs while you are away,** and checking it when you return.
- **Teaching the binder:** corrections saved in project memory, so later threads start with them.
- **Saving every version somewhere lasting,** in the Library and in your version log.
- **Testing a lock, not trusting it:** asking a thread to break the rule, and recording that it could not.
- **The second signature,** enforced by missing connectors and by where the final folder lives, not only by a written rule.

> [!NOTE]
> **Beyond this lab**
>
> This lab reaches the second step of the ladder: a personal AI Worker that runs while you are away. The next steps need features this lab leaves out on purpose:
>
> - **Cowork** is now part of Claude chat. One conversation can do real work with your files, a browser and your computer. See [the Tour](../tour/claude-conversations.md#two-places-to-work).
> - **Cloud environments** decide what a desk can reach on the web and which keys it can use. See [Setting up the desk](../behind-the-screen/setting-up-the-desk-keys-buildings-and-badges.md).
> - **Claude Tag** gives a team worker its own accounts in a Slack channel. That is the team step of the ladder.
> - **A business AI Worker** adds its own identity, approvals checked by the system that acts, a lasting business record and monitoring. Case 2 shows Nisha starting that climb.

Check what you learned with the lab quiz at the end of this page. Its questions also appear in [Check yourself](check-yourself.md), which mixes questions from the whole case.

Next, [Case 2: Nisha's First Client](../case-2-nishas-first-client/overview.md), where Nisha runs a paid job with an AI Worker that works while she sleeps. After both cases, the [final assessment](../case-2-nishas-first-client/final-assessment-a-new-ai-worker.md) gives you a new job to plan on your own.


[^claude-projects]: Let Claude coordinate ongoing work with Projects, Anthropic, verified November 9, 2026. The usage-limit rule was checked again on November 13, 2026, after Anthropic's page changed. The exact wording is in the [lab guide's Sources section](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#sources-what-the-docs-say-word-for-word).
[^cloud-scheduled-tasks]: Automate work with scheduled tasks, Anthropic, verified November 9, 2026. The exact wording is in the [lab guide's Sources section](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#sources-what-the-docs-say-word-for-word).
[^tour-chatgpt]: The Tour's ChatGPT page. The exact wording is in the [lab guide's Sources section](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md#sources-what-the-docs-say-word-for-word). Check the model picker in your own app.
[^tour-chatgpt-perms]: The Tour's ChatGPT page, Permissions and governance. The available modes depend on the app version, your settings and your organization's rules.
# Teaching note (for instructors) (/claude-and-chatgpt-2/case-1-nishas-ai-team/teaching-note-for-instructors)

---
type: Document
title: "Teaching note (for instructors)"
description: "For instructors: learning objectives, a 75-minute discussion plan built on the five core questions, a board plan, the exhibit evidence for each question, and how to run the exercise again with the practical log."
status: stable
order: 0.57
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-13T07:50:33Z
chapter: "F00C"
part: Front
expert_status: required
concepts: []
last_verified: 2026-11-09
sources:
  - id: practical-log
    title: "Nisha's AI Team: Practical Log recording the exercise of November 8, 2026"
    resource: "appendix-the-practical-log.md"
  - id: us-gaap-new-cost
    title: "PwC, Inventory guide, 3.8 Lower of cost or market considerations when using LIFO (quotes ASC 330-10-35-14)"
    resource: https://viewpoint.pwc.com/dt/us/en/pwc/accounting_guides/inventory/Inventory-Guide/3_chapter_LIFO_inv/38_Low_of_cost1.html
  - id: us-gaap-interim
    title: "FASB, Accounting Standards Update 2015-11, Inventory (Topic 330): Simplifying the Measurement of Inventory (full text on PwC Viewpoint; amends ASC 270-10-45-6)"
    resource: https://viewpoint.pwc.com/dt/us/en/fasb_financial_accou/asus_fulltext/2015/asu_201511inventory_/asu_201511inventory__US/asu_201511inventory__US.html
  - id: ias-2
    title: "IAS 2 Inventories, as published in Commission Regulation (EU) 2023/1803 (Official Journal of the European Union)"
    resource: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1803
  - id: us-gaap-cost-flow
    title: "PwC, Inventory guide, 1.3 Inventory costing"
    resource: https://viewpoint.pwc.com/dt/us/en/pwc/accounting_guides/inventory/Inventory-Guide/Chapter-1-Inventory-costing/1_3_Cost.html
  - id: us-gaap-measurement
    title: "FASB, Accounting Standards Update 2015-11, Inventory (Topic 330): Simplifying the Measurement of Inventory (full text on PwC Viewpoint; ASC 330-10-35-1B and 35-1C)"
    resource: https://viewpoint.pwc.com/dt/us/en/fasb_financial_accou/asus_fulltext/2015/asu_201511inventory_/asu_201511inventory__US/asu_201511inventory__US.html
generated:
  at: 2026-11-13T07:50:33Z
  by: process:panaversity
trust_tier: unverified
build_id: sha256:98c46763cdc45fddc3831be880a24428d275ef6a69fdc8b70e44175d4f41e092
dirty: true
ksor_version: 0.0.60
---

> **For instructors.** Students can read this page, but it works best if they discuss the case first.

## What the case is about

Nisha, a chartered accountant, uses Claude as a writer and ChatGPT as a reviewer to plan a book in one evening. The case follows a six-step method with three extra human checks. It records every grade, every version and every decision. It does not say whether her choices were right.

The case is written for any audience, not only accountants. The accounting content (IFRS and US GAAP) is the setting, not the lesson. Students need no accounting knowledge to discuss it.

## Learning objectives

After the discussion, students should be able to:

1. Explain why an AI's grade of its own work is an opinion, not a measurement, using the gap between Claude's and ChatGPT's grades (Exhibit 3).
2. Name the decisions a person still has to make when AI Workers do most of the writing: scope, rules, which review points to accept, the fact check, and when to stop.
3. Describe how a second, independent reviewer adds value, and where it adds new problems (Exhibit 5, and the review's weaknesses in step 4).
4. Weigh "simple" against "precise", and "leave it out" against "include it unchecked", with evidence from the case.
5. Connect the case to the series: the brief, the AI Worker, the second signature, and saving work somewhere lasting.

## Before class

Ask students to read the four story pages and skim the exhibits. Optionally, ask each student to note one decision Nisha made that they would have made differently.

## Discussion plan (75 minutes)

| Time | Question | Purpose |
|---|---|---|
| 0 to 10 min | Core 1: What problem was Nisha really trying to solve? | Open broadly. Separate the money problem, the career problem and the fear of AI. |
| 10 to 25 min | Core 2: Which score would you trust? | The heart of the case. Use Exhibit 3 and Exhibit 5. |
| 25 to 40 min | Core 3: Which decisions did Nisha make herself? | Build the board plan. |
| 40 to 55 min | Core 4: Why did the AI tools keep adding more? | Use Exhibit 4 (words and sources by version). |
| 55 to 70 min | Core 5: What should Nisha do next? | Ask for a decision and its risks. Take a vote. |
| 70 to 75 min | Close, with series question 12 | Ask which of Nisha's rules were enforced and which were only words. Then return to the opening question: did AI replace her, or change her job? |

For an 80-minute class, replace core 1 with a 5-minute opener and use the time saved for series question 13 or 14 after core 4, about 15 minutes.

## Board plan

Draw three columns and fill them in during core questions 3 and 4.

| What the AI tools did | What Nisha decided | Evidence |
|---|---|---|
| Wrote 2,470 words when asked for a description and an outline | Cut the scope to a preface and a table of contents | Step 1, human check 1, Exhibit 4 |
| Graded its own work and gave conflicting advice | Chose between the conflicting advice and set rules | Step 2, human check 2 |
| Improved the draft in three rounds and stopped at 9.3 | Set the 9.5 target and no round limit | Step 3, Exhibit 3 |
| Gave 27 review points | Sorted them: 20 accept, 3 change, 4 not now | Step 4, human check 3 |
| Left out two true facts it could not confirm | Accepted the less detailed version | Step 5 |
| Challenged her own note | Removed the note | Step 6 |
| Listed facts to check | Checked 11 against sources and judged the 12th | Exhibit 6 |
| (Nothing) | Called the work final below the target | Diary, point 7 |

## Notes on the core questions

**Core 1: What problem was Nisha really trying to solve?**
Students often say "her career". Push them on the money: a book will not pay her rent. Then ask whether her real problem was proof of skill. The case gives her two problems: learning US GAAP, and proving it to a US employer. Optional question 9 develops the proof question.

**Core 2: Which score would you trust?**
Evidence: Claude graded version 3 at 9.5 / 9.5 / 9.3. ChatGPT graded the same version 8 / 7 / 8 (Exhibit 3). ChatGPT caught problems Claude had missed or only partly fixed, such as the US debt standard and the missing IFRS 18 in Chapter 5's list of standards (Exhibit 5, notes 6, 7 and 11). Claude had already added a line about IFRS 18 to the chapter itself. But ChatGPT also missed problems and made two of them worse (notes 9 and 10).
Common answer: "Trust ChatGPT, because it was independent." Push further: ChatGPT was not shown Claude's scores, but it also brought new facts that needed checking, and its wording was more technical. Neither grade was a measurement. Both were judgments against Nisha's prompt, not probabilities of correctness: a 9.5 does not mean the draft is 95% right, and a 7 does not make ChatGPT the more reliable reviewer. The two reviewers also saw different information, so keep that caveat on the board next to the numbers. Ask: what would a trustworthy grade need? Real readers, which Claude itself said in step 3.
Also point out: after seeing ChatGPT's lower grades, Claude graded version 4 lower than version 3, even though version 4 had more fixes. The case says the scores alone cannot prove why.
Close with the reflection box from the diary page and Exhibit 3: "A score is a reviewer's judgment. Evidence is what makes the judgment defensible. When reviewers disagree, Nisha must identify their assumptions, inspect their reasoning and verify the disputed claims." Ask which disputed claim Nisha verified in step 6, and what she found.

**Core 3: Which decisions did Nisha make herself?**
Use the board plan. Ask which one made the biggest difference. Strong candidates: checking the first draft before grading (human check 1), filtering the review (human check 3) and the fact check (step 6). Note that the final decision, to stop below 9.5, was hers alone.

**Core 4: Why did the AI tools keep adding more?**
Evidence: Exhibit 4 shows the draft growing from 1,531 to 2,599 words and the sources growing from 4 to 15. ChatGPT suggested more content again. Claude added dated news to Chapter 25 (Exhibit 5, note 8).
Common answer: "The AI wants to be helpful." Push further: an instruction such as "improve it" has no natural stopping point. Nisha kept control with written rules: no new chapters, two or three standards per side, one or two short sentences per line, and "do not add anything I have not accepted".

**Core 5: What should Nisha do next?**
The case ends with a deadline: by Monday morning she must choose how to spend her evenings for three months, while her bills still exceed her salary. Ask each group for one decision and its main risk. Risks the case supports: the grades are opinions, the fact check depended on her own expertise, the method took one hour and forty minutes for a plan and not a book, and US GAAP is the framework she is still learning. Close with a vote.

### Board layout for core 5

Draw a second board with one row for each option.

| Option | Evidence from the case | Risks |
|---|---|---|
| Write all 25 chapters with the same six steps | One evening produced a plan with 15 checked sources (Exhibits 4 and 6) | A plan is not a book. The grades are opinions. The fact check depended on her own knowledge, and US GAAP is the framework she is still learning. |
| Change the method first | The draft kept growing, and the grades disagreed (Exhibits 3 and 4) | Time spent on the method is time not spent writing or earning. |
| Start the company with a conversion job | The same tools and checks could apply to client work (A company of one) | Client work carries real money and real mistakes. Her own expertise in US GAAP is still growing. |

Let students add rows. Do not mark a winner.

## Takeaways for the wrap-up

- A grade from an AI, even a strict one, is a judgment against the prompt, not a probability of being correct. A second opinion helps, but it is still a judgment. Evidence, such as a fact checked against an official source, is what makes a judgment defensible.
- The AI tools did most of the writing. The person decided the scope, the rules, which advice to take, the fact check and when to stop.
- Left alone, the work tends to grow. Written limits keep it in shape, but they are words, not locks.
- Keep a lasting record. Nisha's saved versions and diary are what made this case possible.

## Running the class with non-accountants

The accounting is the setting, not the lesson. Tell students that they do not need to understand IFRS or US GAAP to discuss the case. Point them to Exhibit 9 for the few terms they need. When a question turns technical, for example whether IFRS 18 belonged in Chapter 5, move it back to the method: who noticed the problem, how, and what Nisha did with it. Ask each student to name a task in their own field that could be planned with the same six steps.

## Notes on the series questions

**Question 12 (words or locks).** None of Nisha's rules were enforced by the tools. They were instructions in a chat. Claude followed most of them. It did not follow "repeat until every area reaches 9.5", and it explained why. This matches the series' point that a rule written in chat is a preference, and only a system that acts can enforce a permission.

**Question 13 (where the work lived).** Nisha saved six versions as files, kept ChatGPT's review as a file, and kept a diary. Those are the lasting record that let the practical log be written. Ask what she would have lost if she had kept everything only in the chats.

**Question 14 (a project with threads).** A rebuilt project could run writing and reviewing as separate threads. Students should notice that Nisha's human checks would not go away. She would still filter the review, check the facts and decide when to stop.

## Running the lab

The [lab](lab-take-nishas-method-to-2-0.md) asks students to run Nisha's method again with the 2.0 features. Make clear that this is their exercise, not Nisha's: she used none of these features, and her recorded evening is in the story pages and exhibits. The lab page explains the parts and decisions. The exact clicks and fallbacks are in the kit's [lab guide](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/README.md), which shows the date it was last verified. Check that date before you run the lab, and walk through it yourself if it is more than a month old. The lab works best in two sittings with one night between them.

**Sitting 1 (about 1 hour 25 minutes, in class or at home).** Parts 1 to 3 in the evening: write the brief (30 minutes), set up the project, lock the connectors and run the enforcement test (40 minutes), and schedule the 1 a.m. draft (15 minutes). End the sitting only when the enforcement test has passed, and the scheduled task is saved with its connectors empty.

**Between sittings.** The task runs while students sleep. Nothing is needed from them.

**Sitting 2 (about 2 hours 40 minutes).** The morning half of Part 3, including the enforcement test on the 1 a.m. thread (25 minutes), then Parts 4 to 8: grade in a reviewer thread (30), get the ChatGPT review and sort it (30), let the writer use it (25), fact-check and give the second signature (30), and write the reflection (20). If class time is short, students do Parts 4 to 7 at home and bring the reflection to class.

**Lab debrief (10 minutes, in the next class).** Draw two columns on the board: asked and enforced. Each student names one rule from their run and says which column it belongs in, and why. Close by asking who reached the second step of the ladder, and what the third step would need.

**What students should hand in.** This is the same list as the lab's.

* Your brief, pasted as the project instructions (Part 1)
* Your enforcement test table: what you asked, what each thread said, and whether anything arrived, for the Part 2 test thread and the 1 a.m. thread (Parts 2 and 3). Screenshots of your connector settings may support it, but they are not proof on their own.
* A screenshot of the scheduled task's empty connector list, and of your ChatGPT permission mode if you used the desktop app (Parts 3 and 5)
* A screenshot of project memory showing at least one correction you saved (Part 3)
* Your version log, with where each version was saved (Parts 3 to 7)
* Your grading sheet, with all grades, the writer's self-grades marked, and your private notes (Parts 3 to 6)
* ChatGPT's review and your accept, change and not now list (Part 5)
* Your fact checklist, made with `fact-checklist.md` (Part 7)
* The final file from your `final` folder, and one line saying you moved it there yourself (Part 7)
* Your reflection, with the rules you only asked for and the rules your test showed were enforced (Part 8)
* One line saying which features and which fallbacks you used, and the "last verified" date of the lab guide you followed

**Common problems and what to do.**

| Problem | What to do |
| :--- | :--- |
| The student cannot find Projects | Look at claude.ai/code or the Code tab, and check under More. If Projects is still missing, use two ordinary Claude conversations, one for writing and one for reviewing, as the lab's first fallback says. Use a Desktop scheduled task only for the overnight draft. |
| Connectors left on | Send it back. The point of Part 2 is that the student checks them, not that nothing went wrong. |
| Only screenshots, no enforcement test | Send it back. A screenshot shows what the student chose, not what a thread could do. Ask for the test table. |
| The enforcement test failed | This is a good result if the student recorded it, turned the connector off and passed a retest. Give full marks for that row. |
| The lab guide's clicks no longer match the app | Ask the student to record what they saw and which fallback they used. Report it so the guide can be updated. |
| The task still has all its connectors | Send it back with the same note. A new task includes every connector by default. |
| A Desktop task did not run | The computer was asleep or the app was closed. The task runs once on wake. Let the student run it then and note it in the log. |
| The overnight thread stopped at a usage limit | This is expected behavior, not a failure. By default the thread waits and continues on its own when the limit resets. If it has not continued, the student sends it a message. Either way, the student notes it in the log. |
| A thread asked a question in the night and waited | The overnight prompt did not stand alone. Ask the student to rewrite it as if for a stranger. |

**Grading the hand-in (10 points).** Grade the 2.0 behaviors, not the quality of the chapter.

| Behavior | Points |
| :--- | :---: |
| The brief is in the project instructions, in Chapter 5's four parts, with a clear "Done when" sentence | 1 |
| Send or share connectors turned off in Claude, and an enforcement test table showing that the test thread and the 1 a.m. thread could not email or share the test file (screenshots alone earn 0). The ChatGPT lock set, or the rule marked as only asked | 1 |
| The scheduled task's connectors emptied, with a screenshot | 1 |
| At least one correction saved to project memory, with the Project settings > Memory screenshot | 1 |
| Every version logged and added to the Library, with all grades on the grading sheet and the self-grades marked | 1 |
| ChatGPT's review sorted into accept, change and not now | 1 |
| A fact checklist with each fact checked against an official source | 1 |
| The final file, moved to `final` by the student, not a thread (second signature) | 1 |
| The reflection names one rule that was asked and one that was enforced, and uses the enforcement test as the evidence for "enforced" | 2 |

**A key for the Part 7 fact checklist.** The Chapter 7 draft will probably state these four facts. An instructor who is not an accountant can grade with this list. Have an accountant confirm it against the current standards before you use it.

- **LIFO.** Not permitted under IFRS (IAS 2.25).[^ias-2] Permitted under US GAAP (ASC 330-10-30-9).[^us-gaap-cost-flow]
- **Measurement.** Both measure inventory at the lower of cost and net realizable value (IAS 2.9, ASC 330-10-35-1B).[^ias-2] Under US GAAP, inventory on LIFO or the retail method stays on the lower of cost or market (ASC 330-10-35-1C).[^us-gaap-measurement]
- **Reversal of a write-down.** Required under IFRS when value recovers (IAS 2.33).[^ias-2] Not allowed under US GAAP for a year-end write-down (ASC 330-10-35-14).[^us-gaap-new-cost] A loss recorded partway through a year can be recovered later in the same year (ASC 270-10-45-6).[^us-gaap-interim]
- **Cost formulas.** FIFO and weighted average under both. Specific identification where IAS 2.23 requires it.[^ias-2] LIFO only under US GAAP.

## Running the exercise again

The [practical log](appendix-the-practical-log.md) records every prompt word for word, with the reply, the save time and the grade. A class can run the exercise again on a topic of its own:

1. Write a first prompt in the style of Exhibit 2(a): who you are, the problem, the readers and two short outputs.
2. Before any grading, read the draft yourself and cut the scope (human check 1).
3. Use the grading prompt in Exhibit 2(b) and the self-improvement instruction in Exhibit 2(c).
4. Keep private notes of the problems you see, as Nisha did. Do not share them with either AI.
5. Get a second review from another AI tool with the prompt in Exhibit 2(d). Do not tell it the first tool's scores.
6. Sort the review points into accept, change and not now. Then fact-check the final version yourself.
7. Compare your notes with both reviews, as in Exhibit 5. Remind students that this is not a controlled test when the two reviewers see different versions.

Use made-up material or public facts only. Do not paste private or client data into either tool.

## Facts and fiction in the case

Nisha, her money, her conversations and her thoughts are made up for teaching. The subscription prices are made up too. The prompts, replies, grades, word counts and save times come from the practical carried out on November 8, 2026.[^practical-log]

[^practical-log]: Nisha's AI Team: Practical Log.
[^us-gaap-new-cost]: As read on November 13, 2026, ASC 330-10-35-14 says: "In the case of goods which have been written down below cost at the close of a fiscal year, such reduced amount is to be considered the cost for subsequent accounting purposes." PwC, Inventory guide, section 3.8.3.
[^us-gaap-interim]: As read on November 13, 2026, ASC 270-10-45-6 says that recoveries of such losses "on the same inventory in later interim periods of the same fiscal year" are "recognized as gains in the later interim period", and that "Such gains shall not exceed previously recognized losses." FASB, Accounting Standards Update 2015-11, which amended the paragraph.
[^ias-2]: As read on November 13, 2026, in the text the European Union publishes. IAS 2 paragraph 9 says "Inventories shall be measured at the lower of cost and net realisable value." Paragraph 23 requires specific identification for items "that are not ordinarily interchangeable". Paragraph 25 says other inventories are costed "by using the first-in, first-out (FIFO) or weighted average cost formula", which leaves LIFO out. Paragraph 33 says that when value recovers, "the amount of the write-down is reversed". IAS 2 Inventories, in Commission Regulation (EU) 2023/1803.
[^us-gaap-cost-flow]: As read on November 13, 2026, PwC's guide says cost "may be determined using a variety of cost flow assumptions, such as first-in, first-out (FIFO), average cost, or last-in, first-out (LIFO)". The paragraph number, ASC 330-10-30-9, was not read at its source. PwC, Inventory guide, section 1.3.
[^us-gaap-measurement]: As read on November 13, 2026, ASC 330-10-35-1B says inventory measured by any method other than LIFO or the retail inventory method "shall be measured at the lower of cost and net realizable value". ASC 330-10-35-1C keeps a separate rule for inventory "measured using LIFO or the retail inventory method", which is stated at market when its usefulness falls below its cost. FASB, Accounting Standards Update 2015-11.
# Appendix: the practical log (/claude-and-chatgpt-2/case-1-nishas-ai-team/appendix-the-practical-log)

---
type: Document
title: "Appendix: the practical log"
description: "The record of the real exercise behind the case: every prompt word for word, every reply, the grades, the save times, the private review notes and the fact check. Use it to check the case or to run the exercise again."
status: stable
order: 0.58
ksor:
  owner: team:panaversity
  audience: [ public ]
  approval:
    by: process:panaversity
    at: 2026-11-09T20:42:36Z
chapter: "F00C"
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

*Nisha's AI Team: Practical Log. Planning a book preface and table of contents with Claude and ChatGPT.*

Panaversity · November 8, 2026

> **About this log**
>
> This log records the practical exercise behind the case study Nisha's AI Team. In the practical, the prompts were written in the voice of Nisha, the fictional chartered accountant in the case.
>
> Prompts and AI replies are copied word for word from the original working log, so they keep their original spelling and punctuation. Only the layout has changed. Short log notes in italics explain what each entry produced.
>
> Appendix A adds the human reviewer's private review notes, and Appendix B adds the item-by-item fact check from Step 6.

## 1. Overview

| Item | Details |
|---|---|
| Date | Sunday, November 8, 2026 |
| Goal | Plan a book, "The Bilingual Accountant: Moving Between IFRS and US GAAP": a preface and a table of contents only |
| Main writer | Claude (claude.ai), model Claude Sonnet 5.5 on the High setting, in a Claude Project with no custom instructions |
| Second reviewer | ChatGPT (chatgpt.com), model GPT-6 Astra on the medium setting, in a ChatGPT Project |
| Prompts | 9 in total: 7 to Claude and 2 to ChatGPT |
| Versions | 6 versions of the book document, plus one ChatGPT review file |
| Result | Version 6: a preface, a 25-chapter table of contents with appendices, a key to short forms and 15 official sources |

## 2. Method

The practical followed the six-step method taught in class, with three extra human checks added between the steps.

| Stage | What happens |
|---|---|
| Step 1 | Claude writes a first draft. |
| Human check 1 | Review the draft before any grading: answer Claude's questions, add missing context, cut the scope, fix mistakes. |
| Step 2 | Claude grades the draft out of 10 for accuracy, quality and ease of understanding. |
| Human check 2 | Set clear rules before Claude works alone. |
| Step 3 | Claude improves the draft by itself, round after round, aiming for 9.5 in each area. |
| Step 4 | ChatGPT reviews and grades the result and its sources, with specific fixes. |
| Human check 3 | Sort ChatGPT's points into accept, change and "not now". |
| Step 5 | Claude uses the review to improve the work again. |
| Step 6 | A person checks the facts against their sources, reviews open problems and decides when the work is ready. |

## 3. Timeline

| Saved at | Stage | File |
|---|---|---|
| 22:09 | Step 1 | Version 1: Claude's first draft |
| 22:27 | Human check 1 | Version 2: preface and table of contents only |
| 22:50 | Steps 2 and 3 | Version 3: after self-grading and three improvement rounds (re-saved 22:57) |
| 23:11 | Step 4 | ChatGPT's review of version 3 |
| 23:29 | Human check 3 and Step 5 | Version 4: after Claude used the review |
| 23:36 | Step 6 | Version 5: human edits |
| 23:49 | Step 6 | Version 6: final version |

*Times are the save times of the files. From the first draft to the final version took 1 hour 40 minutes.*

## 4. Grades at a glance

| Version | Graded by | Accuracy | Quality | Ease | Stage |
|---|---|---|---|---|---|
| Version 2 | Claude | 7 | 6.5 | 7 | Step 2 |
| Version 3, round 1 | Claude | 8.5 | 8.0 | 7.5 | Step 3 |
| Version 3, round 2 | Claude | 9.5 | 9.2 | 9.0 | Step 3 |
| Version 3, round 3 | Claude | 9.5 | 9.5 | 9.3 | Step 3 (Claude stopped) |
| Version 3 | ChatGPT | 8 | 7 | 8 | Step 4 |
| Version 4 | Claude | 9.3 | 8.8 | 9.0 | Step 5 |
| Version 5 | Claude | 9.2 | 9.0 | 9.3 | Step 6 (last grade) |

*All grades are the AI tools' own opinions against the three areas. They are not test results. Version 6 was not graded, on instruction.*

## 5. The log: entries 1 to 8

Each entry shows the prompt as it was sent and the reply as it was received.

### Entry 1. Step 1: First draft

Sent to Claude (model: Claude Sonnet 5.5, High) in a Claude Project with no custom instructions. Output: Version 1, saved 22:09.

**Prompt**

```text
I am a chartered accountant from Pakistan (ICAP) and a gold medalist. My name is Nisha. I have identified a problem: there are two main sets of accounting rules in the world. The first is IFRS, which is used internationally. The second is US GAAP, which is followed in America. IFRS is principle-based, while US GAAP is rule-based. Chartered accountants around the world are skilled in IFRS, but American companies follow US GAAP.

I want to write a book that helps accountants on both sides of the fence understand the other set of rules and make the move from one to the other.

My readers are:
- IFRS-trained accountants, like chartered accountants in Pakistan, who want to work for US companies or Big 4 firms
- US GAAP-trained accountants who need to work with IFRS

Please draft:
1. A basic concept or description of the book
2. An outline of the chapters
```

**Response**

```text
I’ve drafted the concept and the 25-chapter outline in IFRS ↔ US GAAP: Book Concept and Chapter Outline. You can edit it inline, comment on it, or share it.

I refined one of your premises. “Principles vs rules” is a good opening idea, but it’s only partly true. Revenue and fair value are largely converged and principle-based on both sides. US GAAP does carry more industry-specific guidance, but IFRS has bright lines too. Chapter 2 develops this so readers don’t over-simplify in interviews.

The doc also lists open decisions for you. The first two are whether to weight the two reading directions equally, and which chapter to write first as a sample. Before you draft Chapter 23, check the route from ICAP to the US CPA with NASBA and the state boards, because I didn’t verify it.

I checked the IFRS 18 and ASU 2024-03 effective dates and the SEC foreign private issuer points against the cited pages. The topic-by-topic differences in Part II come from my knowledge of the standards, so check each against the current text when you draft that chapter.
```

### Entry 2. Human check 1: Review of the first draft

Sent to Claude. Output: Version 2, saved 22:27.

**Prompt**

```text
Thank you. I have reviewed your draft. Before we go further, here are my answers and some changes.

About me: I am making this move myself. I want to work with US companies and Big 4 firms, so this book is also my way of showing that I understand both frameworks. Please write the preface in my voice, as Nisha.

Your correction: I agree that "principles vs rules" is only partly true. Keep Chapter 2.

Answers to your open decisions:
1. Lead with the IFRS to US GAAP move. Keep US GAAP to IFRS as a shorter second direction.
2. No pilot chapter for now.
3. Keep Chapter 23. I will check the CPA route later.
4. I will review the work myself for now.
5. No update plan for now.

Title: The Bilingual Accountant: Moving Between IFRS and US GAAP

Please change the document so it has only two parts:
1. Preface (about one page): the problem, who the book is for, what makes it different, and how to use it.
2. Table of contents: the parts and chapter titles, with one line under each chapter saying what it covers and the main standards in brackets, for example (IAS 2 / ASC 330). Keep the appendices.

Remove everything else.

Writing style: Use simple, plain English. Many of my readers speak English as a second language.

Terminology: In Chapter 3, "inventory and stock" is the wrong way round. IFRS uses "inventories," "stock" is British usage, and in the US "stock" means shares.

Sources: For any dates or rules you mention, use official sources (IFRS Foundation, FASB, SEC) where possible, and list them at the end.

Please update the same document as version 2.
```

**Response**

```text
Version 2 of The Bilingual Accountant: Moving Between IFRS and US GAAP is in the same document. It now has a preface in your voice and a table of contents. Every chapter has one line and its main standards in brackets, and the appendices are kept. Chapter 3 now says IFRS uses “inventories”, “stock” is British usage, and in the US “stock” means shares. Appendix B has the same fix.

- Sources: I kept a short Sources list at the end, since you asked for sources to be listed. It has four official pages from the IFRS Foundation and the SEC. The IFRS Foundation page behind “IFRS is used in most countries” was last updated in April 2018. The page is dated in the list.
- Gold medal: I left it out of the preface. Tell me if you want it in.
- Length: The preface may run a little over one page. I can trim it if you want.
```

### Entry 3. Step 2: Claude grades its own work

Sent to Claude. The first line answers Claude's two questions about version 2. The rest asks for grades only. No new file: Claude graded version 2 with the gold medal line added.

**Prompt**

```text
Add one short line to the preface saying I am a gold medalist. The length is fine, no need to trim. Keep everything else the same.

Now please review the current version of the document and grade it out of 10 in three areas:
1. Accuracy: Are the facts, dates, rules and standard numbers, correct? Check each standard number in brackets, and tell me if you are unsure about any of them.
2. Quality: Is it well organized, complete and professional? Would a publisher or a Big 4 hiring manager take it seriously?
3. Ease of understanding: Is it easy to follow for my readers? They know basic accounting but are new to the other framework, and many speak English as a second language.

For each area, give:
- The score out of 10
- The reasons for the score
- The specific problems, and where they are (for example, "Preface, paragraph 2" or "Chapter 12")
- What would need to change to reach 9.5

Be strict. Do not give a high score unless the work earns it.

Do not change the document yet. Only grade it.
```

**Response**

```text
I added “I am also a gold medalist.” to Preface paragraph 2. I changed nothing else, and the grading below is only a review.

| Area | Score |
|---|---|
| Accuracy | 7 / 10 |
| Quality | 6.5 / 10 |
| Ease of understanding | 7 / 10 |

1. Accuracy: 7 / 10

Why this score. No standard number is wrong, which is the good news. But one bracket is a poor fit, one factual sentence in the preface is too broad, and many bracket lists are incomplete.

Standard numbers I checked.

- IFRS side: every number is confirmed against IFRS Foundation lists. That covers IAS 1, 2, 7, 10, 12, 16, 19, 21, 23, 28, 29, 32, 33, 34, 36, 37, 38, 40 and 41. It also covers IFRS 1, 2, 3, 5, 6, 8, 9, 10, 11, 13, 15, 16, 17 and 18, plus IFRIC 23, IFRS S1, IFRS S2 and the Conceptual Framework.
- US side, confirmed from FASB documents: ASC 205, 210, 220, 321, 323, 330, 360, 718, 740, 815, 820, 825, 905, 930, 932 and 944.
- US side, not opened today: ASC 205-20, 230, 250, 260, 270, 280, 326, 350, 450, 480, 606, 715, 730, 805, 810, 830, 835-20, 842 and 855. I am confident of these from working knowledge, but the Codification is behind a login and I did not check them against it.

Specific problems.

- Chapter 22, (IFRS 1 / ASC 250): I am unsure ASC 250 is right, and I think it is probably the wrong reference. The SEC Financial Reporting Manual (Topic 6, 6120.4) says a company that stops being a foreign private issuer must recast its statements into US GAAP for all periods. That rule is not in ASC 250. ASC 250 itself covers accounting changes and error corrections, which would belong in a chapter I did not include (see Chapter 5 below).
- Preface, “The problem”, paragraph 1: “Foreign companies listed in the US can choose IFRS” is too broad. The SEC source says this applies to foreign private issuers only, and only to IFRS “as issued by the IASB”. Other foreign filers, and local versions of IFRS, need US GAAP or a reconciliation. The SEC Financial Reporting Manual gives a Canadian example of a foreign company that must use US GAAP.
- Preface, “The problem”, paragraph 1: “IFRS is used in most countries” rests on an IFRS Foundation page last updated in April 2018. The claim is probably still true, but “required for listed companies in most countries” is more precise and the source is old.
- Preface, paragraph 3: “Most books only list the differences” is a claim about other books that I did not check.
- Chapter 5: the brackets leave out ASC 210 (balance sheet) and IAS 8 / ASC 250 (accounting policies, estimates and errors).
- Chapter 12: the brackets leave out ASC 321, which governs equity investments, and IFRS 7 for disclosures.
- Chapter 19: held for sale is in ASC 360-10, which is not listed.
- Chapters 8 and 20: the numbers are right, but the pairings are loose. US GAAP has no investment property topic, so ASC 360 only partly matches IAS 40. ASC 905 does not do what IAS 41 does.
- Chapters 1, 4, 23 and 24: the brackets hold institutions, a law or general names, not standards.

To reach 9.5:
- Replace the Chapter 22 bracket after checking SEC Financial Reporting Manual Topic 6 and ASC 105.
- Fix the preface sentence about foreign companies.
- Complete the missing bracket numbers.
- Add a one-line note on loose pairings.
- Check every ASC number against the Codification.
- Replace the 2018 source, or soften the claim and say how old it is.
2. Quality: 6.5 / 10

Why this score. It follows your instructions, the title is strong, the structure is logical, and the order of chapters makes sense. It is not yet at the level a publisher or a Big 4 manager would trust without questions.

Specific problems.

- Missing topics, Part II: accounting policies, estimates and errors (IAS 8 / ASC 250); related parties (IAS 24 / ASC 850); government grants (IAS 20); equity and treasury shares; separate disclosures (IFRS 7, IFRS 12); and IFRS 19, which applies to subsidiaries of IFRS groups. A Big 4 reader will notice the IAS 8 gap first.
- Private companies: no mention of IFRS for SMEs or the US private-company alternatives, even though many of your readers work with private companies.
- Chapter 13: IFRS 13 / ASC 820 fair value measurement applies across the whole book, so it is crowded into one chapter.
- Chapter 20, “Industry corners”: the title is vague, and the chapter covers four unrelated industries in one line.
- Chapter 25: sustainability is covered only on the IFRS side (S1 and S2), with no US counterpart named.
- Byline: the author chip reads “Panaversity”, not Nisha. I am unsure whether you want that.
- Preface, paragraph 2: “I am also a gold medalist.” has no object, and a reader will ask for what.
- Preface, paragraph 2: it says the book shows you “understand both frameworks” while saying you are still making the move. A hiring manager will want to see evidence of that, such as a CPA stage or relevant work.
- Chapters 1 and 4: “main report forms” is promised in the Chapter 4 line, but the brackets name none of them (10-K, 10-Q, 20-F).
- Part I title versus Chapter 1: “systems” in one and “frameworks” in the other. Pick one word and use it everywhere.
- Chapters 3, 19 and 23: these run past “one line”.
- Titles: the style varies between questions, idioms and plain labels.

To reach 9.5:
- Add the missing topics, or say in the preface why they are left out.
- Add one line on SMEs and private companies.
- Rename Chapter 20.
- Give Chapter 25 a US side.
- Fix the byline.
- Make the gold medalist line complete.
- Back up or soften the credibility claim.
- Standardize the wording and keep each chapter line to one line.
3. Ease of understanding: 7 / 10

Why this score. The preface sentences are short and clear, and the vocabulary is mostly plain. The table of contents is the weak part, because it assumes readers already know the abbreviations.

Specific problems.

- Preface, “The problem”, paragraph 1: IFRS and US GAAP are never spelled out. A reader new to the other framework may not know them.
- Preface, paragraph 2: ICAP and “Big 4” are undefined.
- Table of contents, all brackets: nothing explains ASC, FASB, PCAOB, ISAs, IFRIC, ASU or “S-X”. There is no key saying that IAS and IFRS numbers belong to IFRS and ASC numbers belong to US GAAP. This is the biggest readability gap.
- Preface, “How to use this book”, paragraph 1: one long paragraph holds eight items. A list would be easier for readers working in a second language.
- Idioms and jargon: “Industry corners”, “Making the move”, “Bridge method”, “road map” and “road to qualification” are hard to translate. “Lessees and lessors” and “hedging” are fine for your readers, but “functional currency” and “the equity method” could have a short gloss in the chapters.
- Chapter 2 title: “vs” is an abbreviation. Use “versus” or “and”.
- Chapters 18 and 19: the bracket lists have seven or eight codes, which is dense for a first-time reader.

To reach 9.5:
- Spell out each term at first use in the preface.
- Add a short key under “Table of contents”.
- Turn the how-to-use paragraph into a list.
- Replace idioms with plain titles.
- Trim bracket lists to the two or three main standards per side.

If you want, I can fix these in a version 3.
```

### Entry 4. Human check 2 and Step 3: Decisions, then self-improvement rounds

Sent to Claude. Output: Version 3, saved 22:50.

**Prompt**

```text
Here are my decisions first.

Keep it simple

- Do not add new chapters. If a missing topic matters (for example IAS 8 / ASC 250 on accounting policies and errors), add it to the chapter where it fits best.
- In the preface, say in one line that the book focuses on full IFRS and US GAAP. It does not cover IFRS for SMEs or US private-company options in detail.

Brackets

- Show only the 2 or 3 main standards for each side. The full list will go in Appendix A.
- Add a short key under "Table of contents" that explains the short forms (IAS, IFRS, IFRIC, ASC, FASB, SEC and others) and says which belong to IFRS and which to US GAAP.
- If a chapter is not about specific standards, leave the brackets out.
- Chapter 22: replace ASC 250 with a correct reference, or leave the US side out if you cannot confirm one.

Preface

- Change the gold medal line to: "I qualified as a chartered accountant with a gold medal from ICAP."
- Change "showing that I understand both frameworks" to "showing what I have learned about both frameworks."

Chapter 25: If you add a US side for sustainability, check its current status on the SEC website. If the status is unclear, say so in simple words.

Byline: Leave it as it is. It is my account name, not part of the book.

ASC numbers: I know you cannot open the Codification. Grade accuracy on what you can check, and give me a list of the ASC numbers you could not check. I will check them myself at the end.

Apart from these decisions, make the other changes you suggested.

Then improve the document by yourself: grade it again in the same three areas and repeat until every area reaches 9.5. Stay strict. Do not raise a score unless the problem is really fixed.

After each round, show a short table with the round number, the three scores and the main changes. Save the final result as version 3.
```

**Response**

```text
Version 3 is saved in the same document, now titled “(Version 3)”. It has your decisions and my earlier suggestions applied. I stopped the grading loop at Accuracy 9.5, Quality 9.5 and Ease of understanding 9.3, below your 9.5 target for Ease. The full table is below.

Grading rounds (scores are my own, and I tried to be strict)

| Round | Accuracy | Quality | Ease | Main changes |
|---|---|---|---|---|
| Version 2 (turn 3) | 7 | 6.5 | 7 | Starting point |
| 1: first Version 3 build | 8.5 | 8.0 | 7.5 | Applied all your decisions and my turn-3 suggestions. Added the key under “Table of contents”. Cut the brackets to 2–3 standards per side. Folded the missing topics into existing chapters. Used plain chapter titles. Added the scope line and your two preface edits. |
| 2: fixes and checks | 9.5 | 9.2 | 9.0 | Removed a claim I could not support in Chapter 25. Split and simplified the long first preface paragraph. Replaced “recast” and “reconcile” with plain wording. Shortened long chapter lines. Checked standard numbers and titles against the IFRS Foundation list, plus IFRS 19, IFRS S1/S2 and the PCAOB. |
| 3: final polish | 9.5 | 9.5 | 9.3 | Added a worked bracket example to the key. Added “IFRS 18 replaces IAS 1 from 2027” to Chapter 5. Added a plain gloss for “jurisdictions”. Updated the SEC climate status in Chapter 25 after checking SEC.gov. |

I stopped at 9.3 for Ease because the remaining gap needs a test with real readers, which I cannot run. Two or three ESL colleagues reading the preface and key would settle it.

Your decisions

- Chapter 22: ASC 250 was the wrong reference. It covers accounting changes and error corrections, so I moved it to Chapter 5 with IAS 8. Chapter 22 now uses IFRS 1 and the SEC Financial Reporting Manual, Topic 6, section 6120.4. It says a company that stops being a foreign private issuer must present its statements again in US GAAP for all periods shown.
- Chapter 25: the SEC climate rules were stayed in 2024. The SEC proposed on 29 May 2026 to withdraw them. SEC.gov still showed only a proposal when I checked on 8 November 2026. The chapter says this in plain words.
- Preface: it now says “more than 140 jurisdictions” for IFRS, from the IFRS Foundation’s March 2025 document. This replaces the 2018 page. Terms are spelled out at first use.
- Brackets: I left them out for Chapter 20 (special industries) and the chapters that are not about specific standards. Appendix A will carry the full lists.

ASC numbers I could not check. I could confirm the other ASC topic numbers and titles from FASB’s published documents, not the Codification itself. These two remain, so please check them:
- ASC 320: debt securities, in Chapter 12.
- ASC 835-20: capitalized interest, in Chapter 8.

I also dropped ASC 205-20 from the brackets. Please check it when you write Appendix A. Even for the confirmed numbers, I verified the number and title, not that each topic’s content fits its chapter.

The document is here: https://claude.ai/artifact/JnqxQcRWhYygG31bcbQyaD

Sources:
- IFRS 18
- IFRS Jurisdictional Roadmap Development Tool (March 2025)
- IFRS 19
- ISSB standards
- SEC Financial Reporting Manual, Topic 6
- SEC climate rescission proposal
- SEC press release 2026-49
- FASB, ASU 2024-03
```

### Entry 5. Step 4: Independent review by ChatGPT

Sent to ChatGPT (model: GPT-6 Astra, medium) in a ChatGPT Project, with version 3 attached. Claude's scores and authorship were not mentioned. Output: ChatGPT's review, saved 23:11.

**Prompt 1 of 2**

```text
I am Nisha, a chartered accountant from Pakistan (ICAP). I am writing a book called "The Bilingual Accountant: Moving Between IFRS and US GAAP". It helps IFRS-trained accountants move to US GAAP, and US GAAP accountants move to IFRS.

I have attached the preface and table of contents (version 3). The sources are listed at the end of the document. Please review it as a strict expert who knows both IFRS and US GAAP.

My readers: accountants who know basic accounting but are new to the other framework. Many speak English as a second language.

Decisions I have already made. Please don't reverse them:
- Only a preface and a table of contents for now. No full chapters.
- 25 chapters. No new chapters. Missing topics go into existing chapters.
- Each chapter shows only 2 or 3 main standards per side. The full list will go in Appendix A.
- The book covers full IFRS and US GAAP, not IFRS for SMEs or US private-company options.

If you strongly disagree with one of these, say so separately at the end.

Please grade it out of 10 in three areas:
1. Accuracy: Are the facts, dates, rules and standard numbers correct? Open each source link and check that it supports what the document says.
2. Quality: Is it well organized, complete and professional? Would a publisher or a Big 4 hiring manager take it seriously?
3. Ease of understanding: Is it easy to follow for my readers?

For each area, give:
- The score out of 10, and why
- Each problem, and where it is (for example, "Preface, paragraph 2" or "Chapter 12")
- The exact fix. If it is a wording change, give the new wording.

At the end, list:
- Any facts or sources you could not check
- Anything you are unsure about

Be strict. Do not rewrite the whole document. Only list the problems and fixes.
```

**Prompt 2 of 2**

```text
Create a .md document of this review
```

**Response**

```text
```

*Log note: ChatGPT's review is kept in the separate file “The Bilingual Accountant v3 - Expert Review.md”. Its grades: Accuracy 8, Quality 7, Ease of understanding 8. It lists 27 numbered points (10 for accuracy, 11 for quality, 6 for ease).*

### Entry 6. Human check 3 and Step 5: Filtering ChatGPT's review, and Claude makes version 4

Sent to Claude, with ChatGPT's review attached. Output: Version 4, saved 23:29.

**Prompt**

```text
I asked a second reviewer (ChatGPT) to grade version 3. I have attached its review. It gave Accuracy 8, Quality 7 and Ease of understanding 8.

Please make version 4 using this review. Here are my decisions. The numbers match the review.

Accept these points, but write them in plain English:
- Accuracy 1, 3, 4, 5, 6, 7, 8 and 10
- Quality 2, 3, 5, 6, 7 and 10
- Ease 1 to 6

Accept with my changes:
- Accuracy 2: Fix the meaning, but make the preface simpler, not longer. For example: "US companies listed in the US must use US GAAP. Some foreign companies listed in the US can use IFRS. Chapter 1 explains the rules."
- Quality 1: Keep my personal story. Change the last sentences to: "I am writing this book while I make that move myself. My aim is to help other accountants make the same move with confidence."
- Quality 9: Keep the Chapter 25 line short. Move dated details, such as what the SEC website showed on a given day, to the Sources list.

Not now. Note these for later, when we write Appendix A and the chapters:
- Accuracy 9 (ASU 2025-06 and ASU 2025-10)
- Quality 4, 8 and 11
- The "reporting period" line under Remaining uncertainties

Rules for this version:
- Plain English stays the rule. Do not copy the reviewer's wording if it is long or technical. Rewrite it simply.
- Keep each chapter line to one or two short sentences.
- Do not add anything I have not accepted above.
- Some facts in the review are new, for example ASU 2025-01, IAS 8's new title and FRM 6120.2. Check them before you use them. If you cannot check one, leave it out and tell me.

When you finish:
1. Grade version 4 strictly in the same three areas.
2. Give me a short table of the review points: used, changed or not used, and why.
3. Give me a list of every fact I should check myself in the final step, with its source.

Save it as version 4.
```

**Response**

```text
Version 4 is saved in the same document, now titled “(Version 4)”. I replaced the Version 3 text in place, so I’d check the document’s version history if you want to compare the two.

I checked the review’s new facts against official pages. ASU 2025-01 dates, FRM 6120.2, IFRS 19 eligibility and the IAS 8 title are confirmed. Two details I left out because the pages did not support them:
- IFRS 1: the IFRS Foundation page did not name the “opening statement of financial position” or “transition reconciliations”.
- PCAOB: the PCAOB page did not say “including foreign issuers”.

My grades for version 4

| Area | Version 3 (reviewer) | Version 4 (mine) | What holds it below 9.5 |
|---|---|---|---|
| Accuracy | 8 | 9.3 | The ASC numbers are not checked in the Codification. Two plain-English lines are simpler than their sources (“US companies listed in the US” and “Each place decides…”). |
| Quality | 7 | 8.8 | You deferred points that add scope statements (Quality 4, 8, 11), so Chapters 5, 12–14, 18, 21 and 22 still lack them. The sentences in Chapters 3, 18 and 22 are long. |
| Ease of understanding | 8 | 9.0 | I have not tested it with ESL readers. “Public accountability”, “public business entities” and “stayed” are still hard terms. |

What I did with the review points

| Status | Points | Notes |
|---|---|---|
| Used | Accuracy 1, 3, 4, 5, 7, 8, 10; Quality 2, 3, 5, 6, 7, 10; Ease 1–6 | All rewritten in plain English. |
| Changed | Accuracy 2, Quality 1 | Both follow your wording. |
| Changed | Quality 9 | The Chapter 25 line is short and the dated details are in Sources. |
| Changed | Accuracy 6 | I kept to what the IFRS 1 page confirms. The Chapter 22 line now cites FRM 6120.2 and 6120.4. |
| Not now | Accuracy 9, Quality 4, 8, 11, the reporting-period line | Noted for Appendix A and the chapters. |
| Consequences | Chapters 9, 10 and 18 | Chapter 9 is retitled because it no longer covers goodwill. Chapter 10 is retitled for held-for-sale assets and gets IFRS 5. Chapter 18 now says “including goodwill”. |
| Consequences | ASC 205-20 | It stays out of the brackets. I could not check it, and it would make four US references. |

Facts to check yourself in the final step

| Fact | Source |
|---|---|
| More than 140 jurisdictions require IFRS; “each place decides which companies” is my plain wording | IFRS Foundation roadmap tool, printed page 18 (checked in the earlier session) |
| “US companies listed in the US must use US GAAP” is a simplification of “domestic SEC registrants”. Foreign companies can use IFRS | SEC concept release, page 10, and the 2007 rule |
| IFRS 18 starts 1 January 2027, early use is allowed, and it replaces IAS 1 | IFRS 18 page |
| ASU 2024-03 starts for annual periods after 15 December 2026 and interim periods after 15 December 2027, with early adoption allowed | ASU 2025-01 |
| A company that loses foreign private issuer status follows domestic rules from the first day of its next fiscal year and recasts all periods in US GAAP. Check that “must use US GAAP” in Chapter 22 matches this | SEC FRM Topic 6, 6120.2 and 6120.4 |
| IFRS 19 eligibility: a subsidiary with no public accountability whose parent publishes IFRS statements for public use | IFRS 19, paragraph 7 |
| IFRS 1 covers first-time adoption, with limited exemptions, mandatory exceptions and transition disclosures | IFRS 1 page |
| PCAOB oversees audits of public companies and SEC-registered brokers and dealers, and sets auditing standards | PCAOB oversight page |
| The ASC is the official US GAAP source for non-government organizations. SEC rules also apply to SEC registrants. ASUs are not authoritative on their own. The FASB has been the private-sector standard setter since 1973. These definitions come from the 2009 document, so also check the current Codification | FASB Statement 168 and the FASB 2009 release |
| IFRS S1 and S2 are separate from IFRS Accounting Standards. “Some places require them, some companies use them voluntarily” is my plain wording | ISSB introduction |
| SEC climate rules: stayed 4 April 2024, defense ended 27 March 2025, withdrawal proposed 29 May 2026. Look again on the final day | SEC proposal page and press release 2026-49 |
| All ASC numbers are unchecked in the Codification. The ones I doubt most are ASC 320 (Chapter 12), ASC 835-20 (Chapter 8) and ASC 360 for held-for-sale assets (Chapter 10) | FASB Codification (not reachable from here) |
| IAS 8 was renamed “Basis of Preparation of Financial Statements” (not in the document yet; for Appendix A). The page gives no start date | IAS 8 page |
| Your ICAP qualification and gold medal | Your own record; the reviewer could not check it |

Please update “Last checked on 8 November 2026” in Sources on the final day.
```

### Entry 7. Step 6, part 1: Human edits, checked by Claude

Sent to Claude, with the human-edited version 5 attached (saved 23:36). Output: version 5 placed in the document unchanged.

**Prompt**

```text
I reviewed version 4 myself and made some changes. I have attached my edited file, version 5.

My changes:
1. Shortened the lines for Chapters 3, 18 and 22.
2. Removed hard terms from the chapter lines: "public accountability" (Chapter 18), "public business entities" and "stayed" (Chapter 25). The exact terms stay in the Sources.
3. Chapter 22 no longer uses "foreign private issuer", because the book does not explain that term before Chapter 22.
4. Chapter 12 now lists ASC 321 (equity investments) instead of ASC 825.
5. Sources: added ASC 105-10-05-1 next to FASB Statement 168.
6. "How to use this book": "Each one" is now "Each topic chapter".

Please:
1. Replace the document with my version 5 exactly as it is.
2. Check my changes. If any of them is wrong or less accurate, tell me, but do not change it yourself.
3. Give a final grade in the same three areas, for the record.

Do not make any other changes.
```

**Response**

```text
Your version 5 is now in the document, and the Version 5 line is in. Only eight places differed from version 4: the version line, the Part II bullet, Chapters 3, 12, 18, 22 and 25, and the Statement 168 source. I changed nothing else. I also renamed the document to “(Version 5)” to match, and you can tell me to revert that.

Checks on your changes (I changed none of them)

| Change | Verdict | Note |
|---|---|---|
| 1. Shorter lines, Chapters 3, 18, 22 | Correct, but some detail is lost | Chapter 18 no longer says what makes a subsidiary eligible for IFRS 19. The reviewer point we accepted for that (Accuracy 5) is now only in Sources. Chapter 22 lost the timing and the “all periods” point (Accuracy 6). The SEC part of Chapter 22 now reads as covering any foreign company that “must switch”. The detail is still in Sources (FRM 6120.2 and 6120.4). |
| 2. Hard terms removed | “Paused” is fine. “Public companies that use US GAAP” is looser | The SEC did stay the rules itself, so “paused” is accurate. ASU 2024-03 applies to “public business entities”. The FASB’s definition also covers entities such as conduit bond obligors and companies preparing a public offering. “Public companies” is close but not exact. The exact terms remain in Sources. |
| 3. No “foreign private issuer” in Chapter 22 | Correct | The term now appears only in Sources. |
| 4. ASC 321 instead of ASC 825 in Chapter 12 | Correct, with a trade-off | FASB documents confirm ASC 321 is “Investments—Equity Securities”, added by ASU 2016-01. The line still says “what to disclose about financial instruments”, and ASC 825 is the US counterpart of IFRS 7. It is no longer in the bracket, so Appendix A must carry it. |
| 5. ASC 105-10-05-1 in Sources | The number is right. The access note is unconfirmed | The FASB’s 2009 update, ASU 2009-01, shows that paragraph saying the Codification is the authoritative source and that SEC rules also count for SEC registrants. I could not open the live Codification. “FASB Basic View… after registering” may be out of date: a FASB store page now describes free online access and says the paid “Professional View” no longer exists. This entry also has no link, though the Sources intro says all sources are official pages. |
| 6. “Each topic chapter” | Correct | None. |

Final grades for the record

| Area | Version 4 (mine) | Version 5 (mine) | Reason |
|---|---|---|---|
| Accuracy | 9.3 | 9.2 | The ASC numbers are still unchecked in the Codification. The “public companies” wording is looser, and the ASC 105 access note is unconfirmed. |
| Quality | 8.8 | 9.0 | The chapter lines are shorter and cleaner. The scope statements you deferred are still missing, and Chapters 18 and 22 are less specific. |
| Ease of understanding | 9.0 | 9.3 | The hard terms are gone and the lines are short. I cannot reach 9.5 without testing with ESL readers. |
```

### Entry 8. Step 6, part 2: Fact check and final instruction

Sent to Claude. Output: Version 6 (final), saved 23:49.

**Prompt**

```text
I have checked the facts against the sources. All confirmed

I accept the trade-offs you pointed out. Chapters 18 and 22 stay short, and the exact detail stays in Sources and Appendix A. ASC 825 will go in Appendix A.

One last change: in Sources, delete "(free to read in the FASB Basic View at asc.fasb.org after registering)".

This is the final version. Do not make any other changes and do not grade it again.
```

**Response**

```text
```

*Log note: no reply was recorded. The final file shows the one requested change (the access note removed from Sources) and the version line updated to Version 6. The item-by-item fact check behind “All confirmed” is in Appendix B.*

## Appendix A. Private review notes

The human reviewer kept these notes privately and did not share them with either AI. The aim was to compare, after Step 4, which problems each reviewer caught. Notes 1 to 6 were recorded while reading version 2, notes 7 to 11 while reading version 3 (before Step 4), and note 12 during Step 6.

| # | Problem noted | Noted | Claude's self-review (Steps 2 and 3) | ChatGPT's review (Step 4) | Final status |
|---|---|---|---|---|---|
| 1 | The preface said foreign companies in the US can use IFRS. Too broad: only some can. | Version 2 | Caught | Already fixed | Fixed in version 3 |
| 2 | A source (IFRS Foundation page) was from 2018. | Version 2 | Caught | Already fixed | Fixed in version 3 |
| 3 | Chapter 22 pointed to the wrong US standard (ASC 250). | Version 2 | Caught | Already fixed | Fixed in version 3 |
| 4 | Chapter 12 missed the US standard on equity investments (ASC 321). | Version 2 | Caught, not fixed | Caught | Fixed in version 5 |
| 5 | The preface claimed "most books only list differences" without proof. | Version 2 | Caught | Already fixed | Fixed in version 3 |
| 6 | Chapter 13 covers debt but missed the main US standard on debt (ASC 470). | Version 2 | Missed | Caught | Postponed to Appendix A (human decision) |
| 7 | Chapter 5 listed IAS 1 but not IFRS 18, which replaces it from 2027. | Version 3 | Missed | Caught | Fixed in version 4 |
| 8 | Chapter 25 contained news that would soon be out of date. | Version 3 | Missed (Claude added it) | Partly | Fixed in version 4 |
| 9 | Several chapter lines were much longer than one line. | Version 3 | Partly | Missed, and its fixes made lines longer | Fixed in version 5 |
| 10 | A preface paragraph on foreign companies was too technical for beginners. | Version 3 | Missed | Missed, and its fix made it more technical | Fixed in version 4 |
| 11 | Chapter 18 said "some subsidiaries" without saying which ones. | Version 3 | Missed | Caught | Fixed in version 4 |
| 12 | Chapter 22 used "foreign private issuer", a term the book never explains. | Version 4 (Step 6) | Missed | Did not see version 4 | Fixed in version 5 |

*"Already fixed" means Claude had fixed the problem before ChatGPT saw the draft. This was not a controlled test, because the two reviewers saw different versions.*

*Editor's note on note 7: the notes are kept as recorded. Entry 4 shows that in round 3 Claude added "IFRS 18 replaces IAS 1 from 2027" to Chapter 5, and IFRS 18 was already among the version 3 sources. The gap was in the chapter's list of standards, so Exhibit 5 marks Claude's self-review as "Partly" for this note.*

## Appendix B. Fact check (Step 6)

Before the final instruction in Entry 8, the human reviewer checked these 12 points on November 8, 2026. The list was built from the facts Claude listed for checking in Entry 6, at the reviewer's request. Points 1 to 11 were checked against official sources. Point 12 was a professional judgment. Entry 8 sums up the result as "All confirmed".

| # | Fact in the book | Checked against | Result |
|---|---|---|---|
| 1 | More than 140 jurisdictions require IFRS | IFRS Foundation, Jurisdictional Roadmap Development Tool, March 2025 (page 18) | Confirmed |
| 2 | US companies listed in the US use US GAAP, and some foreign companies can use IFRS | SEC concept release 33-11376 (page 10), and the SEC 2007 final rule | Confirmed |
| 3 | IFRS 18 replaces IAS 1 from January 1, 2027, and early use is allowed | IFRS Foundation, IFRS 18 page | Confirmed |
| 4 | Start dates of ASU 2024-03 (annual periods after December 15, 2026, and interim periods after December 15, 2027) | FASB, ASU 2025-01 | Confirmed |
| 5 | A company that loses foreign private issuer status must switch to US GAAP | SEC Financial Reporting Manual, Topic 6, sections 6120.2 and 6120.4 | Confirmed |
| 6 | Which subsidiaries can use IFRS 19 | IFRS 19, paragraph 7 | Confirmed |
| 7 | IFRS 1 covers adopting IFRS for the first time | IFRS Foundation, IFRS 1 page | Confirmed |
| 8 | What the PCAOB oversees | PCAOB, Oversight page | Confirmed |
| 9 | IFRS S1 and S2 were issued in June 2023 and are separate from the accounting standards | IFRS Foundation, introduction to the ISSB | Confirmed |
| 10 | The SEC paused its climate rules and proposed to withdraw them on May 29, 2026 | SEC proposal page (Release 33-11421) and press release 2026-49 | Confirmed |
| 11 | US GAAP topic numbers: ASC 320, 321, 835-20, 360 (held for sale) and 105-10-05-1 | FASB Accounting Standards Codification | Confirmed |
| 12 | The plain-English chapter lines still say the right thing | Professional judgment (not an official source) | Accepted after review |

## Appendix C. Files produced

| File | What it is | Saved at |
|---|---|---|
| `IFRS ↔ US GAAP Book Concept and Chapter Outline v1.md` | Version 1: Claude's first draft | 22:09 |
| `The Bilingual Accountant Moving Between IFRS and US GAAP v2.md` | Version 2: after human check 1 | 22:27 |
| `The Bilingual Accountant Moving Between IFRS and US GAAP v3.md` | Version 3: after Steps 2 and 3 | 22:50 (re-saved 22:57) |
| `The Bilingual Accountant v3 - Expert Review.md` | ChatGPT's review of version 3 | 23:11 |
| `The Bilingual Accountant Moving Between IFRS and US GAAP v4.md` | Version 4: after Step 5 | 23:29 |
| `The Bilingual Accountant Moving Between IFRS and US GAAP v5.md` | Version 5: human edits | 23:36 |
| `The Bilingual Accountant Moving Between IFRS and US GAAP v6.md` | Version 6: final version | 23:49 |

## Resources

These files come with the case:

- [The original practical log (Word file)](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/practical-log-nishas-ai-team.docx), with the original layout.
- [Version 6 of the book plan](https://github.com/panaversity/agentfactory-v2-resources/blob/main/labs/nisha-lab-case-1/the-bilingual-accountant-v6.md), the final file from the evening, with its preface, table of contents and 15 sources. It is Nisha's document, kept exactly as saved.

Versions 1 to 5 and ChatGPT's review file are listed in Appendix C. They are not included here.
