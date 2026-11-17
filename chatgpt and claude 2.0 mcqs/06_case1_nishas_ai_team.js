// Section 6: Case 1 - Nisha's AI Team
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["06_case1_nishas_ai_team"] = {
  "sectionId": "06_case1_nishas_ai_team",
  "chapterId": 2,
  "chapterTitle": "The Four Operational Case Studies",
  "title": "Section 6: Case 1 - Nisha's AI Team",
  "totalQuestions": 16,
  "questions": [
    {
      "id": 1,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Pre-Grading Scope Control (Human Check 1)",
      "question": "A senior technical writer asks an AI Worker to draft a book description and chapter outline, receiving an unexpected 2,470-word proposal spanning 25 chapters, six appendices, and a reversed terminology pairing, and considers immediately running a 10-point self-grading rubric on the output. Why must the writer intervene to trim scope, add missing reader context, and correct terminology before triggering the self-grading step?",
      "options": {
        "A": "Grading before cutting scope evaluates unrequested sections instead of measuring the target deliverable",
        "B": "Running a self-grading rubric commits the draft to project memory and blocks subsequent scope cuts",
        "C": "Self-grading prompts require a separate independent model to audit terminology before scoring begins",
        "D": "Adding reader language constraints after grading forces the AI Worker to discard verified web sources"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in Human Check 1, Nisha stopped before moving to Step 2 grading ('If I grade this now, I will be grading something I did not ask for'), cutting the scope to a preface and table of contents, adding ESL reader context, and fixing the inventory/stock reversal first.",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Human check 1: Nisha takes control",
        "source_file": "case1.md",
        "core_concept": "Review and trim scope, add missing reader context, and fix mistakes before grading so grades judge the intended deliverable."
      },
      "why_incorrect": {
        "B": "Self-grading does not lock a draft into project memory or prevent structural edits; it simply wastes effort scoring unwanted content.",
        "C": "In Nisha's six-step method, Claude grades its own draft first (Step 2) before an independent second reviewer (ChatGPT) is consulted in Step 4.",
        "D": "Supplying ESL plain-English constraints refines wording and preserves verified official sources rather than discarding them."
      },
      "full_justification": "Option A is correct because rubric scores are only meaningful when evaluated against the actual scoped deliverable and target audience. Option B falsely claims grading locks project memory. Option C reverses Steps 2 and 4. Option D falsely claims audience constraints discard sources.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 2,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Navigating Conflicting Self-Critique Recommendations (Step 2 & Human Check 2)",
      "question": "During a strict self-critique of a technical accounting outline, an AI reviewer flags contradictory improvement remedies\u2014recommending adding all omitted regulatory standard numbers to raise accuracy while simultaneously cutting standard lists to two or three items to improve beginner readability\u2014and questions an overreaching claim of dual-framework mastery. How must the practitioner resolve these tensions before authorizing autonomous refinement rounds?",
      "options": {
        "A": "Instruct the AI Worker to prioritize accuracy citations first and defer readability edits to a second reviewer",
        "B": "Set hard rules capping lists at two or three standards per side, deferring extras, and softening the claim",
        "C": "Authorize unlimited self-improvement rounds so the AI Worker balances both competing criteria automatically",
        "D": "Move all standard numbers into the preface while keeping chapter lines free of technical regulatory citations"
      },
      "correct": "B",
      "explanation": "Option B succeeds because in Human Check 2, Nisha resolved Claude's conflicting advice before Step 3 by setting clear written rules: no new chapters, only 2\u20133 main standards per side (moving full lists to Appendix A), and softening her credibility claim to 'showing what I have learned.'",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Human check 2: Rules before Claude works alone",
        "source_file": "case1.md",
        "core_concept": "Human Check 2 resolves conflicting self-review advice with explicit caps (2\u20133 standards per side, full list in Appendix A) and honest scope claims before solo rounds."
      },
      "why_incorrect": {
        "A": "Prioritizing full accuracy lists first causes the draft to bloat uncontrollably during autonomous rounds rather than enforcing readable caps upfront.",
        "C": "Leaving conflicting advice unresolved without human selection rules causes autonomous loops to drift or expand scope rather than settling the trade-off.",
        "D": "Standard numbers belong in brackets under each topic chapter (2\u20133 per side) with a short abbreviation key, not dumped into the preface."
      },
      "full_justification": "Option B is correct because the human manager must resolve competing quality criteria with explicit structural rules before delegating multi-round solo improvements. Option A allows unchecked bloat, Option C leaves trade-offs unresolved, and Option D misplaces standard citations.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 3,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Autonomous Iteration Boundaries & Stopping Short of Score Targets (Step 3)",
      "question": "A compliance lead instructs an AI Worker to iteratively refine and self-grade a policy guide across three dimensions (accuracy, quality, and ease of understanding) and \"repeat until every area reaches 9.5\" without setting a round limit, yet the worker halts after three rounds with ease of understanding at 9.3. What operational principle explains why the worker stopped below the 9.5 threshold rather than continuing indefinitely?",
      "options": {
        "A": "Closing the remaining readability gap requires live testing with real human readers that the AI cannot run",
        "B": "Autonomous self-grading loops cap at three rounds by default whenever no numeric round limit is specified",
        "C": "Raising ease of understanding above 9.3 requires simplifying technical terms in ways that lower accuracy scores",
        "D": "Paywalled regulatory databases prevented the worker from verifying the remaining citations needed to reach 9.5"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in Step 3, Claude stopped at 9.5 / 9.5 / 9.3 without inflating its score, explicitly explaining that closing the final gap in ease of understanding required testing the text with real ESL readers, which it could not execute.",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Step 3: Claude improves its own work",
        "source_file": "case1.md",
        "core_concept": "Claude halted at 9.3 for ease of understanding because validating readability for ESL readers requires real human testing rather than artificial score inflation."
      },
      "why_incorrect": {
        "B": "The loop did not stop due to a built-in three-round default; Nisha set no round limit, and Claude stopped on epistemic grounds.",
        "C": "While simplifying wording later reduced accuracy slightly in Version 5 (9.3 to 9.2), Claude halted Step 3 specifically because it could not test with real ESL readers.",
        "D": "Paywalled ASC Codification items held back unverified source checks, whereas the 9.3 ceiling applied specifically to 'ease of understanding.'"
      },
      "full_justification": "Option A is correct because the model recognized an empirical validation boundary\u2014only real target readers can confirm whether ESL readability has reached 9.5. Option B invents a default round limit, Option C confuses Version 5's human edit trade-off with Step 3's halt, and Option D conflates accuracy verification with ease of understanding.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 4,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Unchecked Scope Expansion Across Iterative Revisions (Exhibit 4)",
      "question": "An editorial manager tracks document metrics across six revision stages of a structured book plan: after trimming an initial 2,470-word draft down to 1,531 words in version 2, subsequent AI refinement and review-integration rounds expand the file back to 2,606 words and 15 sources. What drives this recurring upward drift across AI revision loops, and which constraint design keeps the deliverable bounded?",
      "options": {
        "A": "Self-grading rubrics reward citation density, requiring operators to strip source lists before each revision round",
        "B": "Open-ended improvement prompts lack a natural stopping point, requiring hard structural and sentence-length rules",
        "C": "Independent second reviewers replace concise chapter summaries with full appendix text unless threads are isolated",
        "D": "Each refinement round appends prior draft versions into the same file unless earlier text is manually deleted"
      },
      "correct": "B",
      "explanation": "Option B succeeds because as Exhibit 4 and the Teaching Note explain, open-ended instructions like 'improve it' have no natural stopping point\u2014causing drafts to grow back (1,531 to 2,599 words; 4 to 15 sources)\u2014unless bounded by explicit rules ('no new chapters,' '2\u20133 standards per side,' '1\u20132 short sentences per line,' and 'do not add anything I have not accepted').",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Exhibit 4: How the draft changed",
        "source_file": "case1.md",
        "core_concept": "Open-ended improvement prompts naturally expand scope and sources; written structural limits (no new chapters, short lines, explicit accept lists) keep deliverables bounded."
      },
      "why_incorrect": {
        "A": "Nisha intentionally kept and expanded official sources (from 4 to 15) to ground claims rather than stripping source lists between rounds.",
        "C": "ChatGPT did not merge appendices into chapters; it offered 27 dense review points, 4 of which Nisha explicitly deferred ('not now') to later chapters/appendices.",
        "D": "Claude updated the document in place across versions rather than concatenating old draft versions into one file."
      },
      "full_justification": "Option B is correct because iterative 'improve' prompts inherently encourage additive expansion unless constrained by explicit structural and line-length boundaries. Option A misstates source management, Option C misstates ChatGPT's review format, and Option D misstates file versioning.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 5,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Independent Second-Opinion Curation (Step 4 & Human Check 3)",
      "question": "To audit a polished draft produced by a primary AI writer, an operations lead uploads the file to a second, independent AI model for a strict rubric review while withholding the primary writer's identity and prior scores, receiving 27 numbered critique points written in dense regulatory jargon that advise dropping the author's personal background. How should the lead process this second opinion before feeding revisions back to the writer?",
      "options": {
        "A": "Share the primary writer's 9.5 scores with the second reviewer so both models calibrate to identical rubrics",
        "B": "Sort the points into accept, modify, or defer while enforcing plain language, short lines, and fact checks",
        "C": "Apply all 27 critique points verbatim to maximize technical rigor before running a final human fact check",
        "D": "Retain only formatting fixes while rejecting all technical additions to prevent scope expansion in version 4"
      },
      "correct": "B",
      "explanation": "Option B succeeds because in Human Check 3, Nisha preserved independence by withholding Claude's scores, then sorted ChatGPT's 27 points into 20 accept (rewritten plainly), 3 accept with changes (keeping her personal story), and 4 not now (deferred), paired with strict plain-English, line-length, and verification rules.",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Human check 3: Filtering the second opinion",
        "source_file": "case1.md",
        "core_concept": "Triage second-reviewer feedback (accept, change, not now) under strict plain-English, brevity, and source-verification rules rather than adopting jargon verbatim."
      },
      "why_incorrect": {
        "A": "Withholding prior scores and authorship was essential to avoid anchoring bias and secure a genuinely independent review.",
        "C": "Applying all 27 points verbatim would inject dense jargon ('domestic SEC registrants'), delete Nisha's personal story, and add unverified facts.",
        "D": "Rejecting all technical additions would discard valuable catches made by ChatGPT, such as IFRS 18 in Chapter 5's brackets and the US debt standard."
      },
      "full_justification": "Option B is correct because human curation filters useful technical catches from stylistic bloat, unverified claims, and misaligned editorial advice. Option A introduces anchoring bias, Option C imports jargon and unwanted deletions, and Option D discards valid technical fixes.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 6,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Non-Controlled Multi-Model Comparisons & Blind Spots (Exhibit 5)",
      "question": "An audit director compares two AI models' defect-detection logs against a private list of 12 known problems in a technical manuscript: Model A caught 5 issues during early self-review, Model B caught 4 remaining issues when reviewing version 3, and neither model flagged an undefined specialist term introduced in version 4. Why cannot the director conclude from these counts that Model B is a superior reviewer?",
      "options": {
        "A": "Self-reviewing models must withhold low-severity defects until a second model confirms them in later rounds",
        "B": "Private defect notes bias rubric scores whenever an operator tracks errors across more than three versions",
        "C": "Both models inspected different draft versions with different context, making the comparison non-controlled",
        "D": "Second-opinion models only audit external source links rather than checking undefined terms inside chapter text"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Exhibit 5 explicitly warns that comparing catch counts between Claude and ChatGPT was not a controlled test: Claude reviewed its own versions 2 and 3 inside the writing project, while ChatGPT saw only version 3 and never saw version 4 (where 'foreign private issuer' was introduced).",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Exhibit 5: Who caught what",
        "source_file": "case1.md",
        "core_concept": "Not a controlled test: the two reviewers inspected different versions with different information, and both missed or created blind spots."
      },
      "why_incorrect": {
        "A": "Models do not deliberately hold back defects for later reviewers; Claude simply had blind spots in its own draft.",
        "B": "Nisha kept her private notes strictly hidden from both AI models so they could not bias either reviewer's output.",
        "D": "ChatGPT reviewed both the text and all ten source links, catching textual omissions (like unspecified subsidiaries in Chapter 18) while missing others."
      },
      "full_justification": "Option C is correct because unequal exposure across versions and workspaces invalidates head-to-head superiority claims, proving instead that distinct reviewers catch different issues while leaving shared blind spots for humans. Option A, Option B, and Option D misstate model behavior and review scope.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 7,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "False-Negative Source Omissions vs. Unverified Claims (Step 5)",
      "question": "During step 5 revisions, a primary AI writer verifies six new factual claims supplied by a second reviewer against official regulatory web pages, confirms four, and omits two\u2014even though both omitted facts are true\u2014because the short summary pages it opened did not mention them. How should the human manager evaluate this omission when reviewing the updated draft?",
      "options": {
        "A": "Accept the less detailed text because omitting unconfirmed facts is safer than inserting unverified claims",
        "B": "Reinsert both omitted claims immediately because a second reviewer's citation check establishes sufficient proof",
        "C": "Treat the omission from summary web pages as proof that the second reviewer fabricated both regulatory details",
        "D": "Lower the primary writer's accuracy grade until it locates and extracts the full paywalled regulatory texts"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in Step 5, Claude left out two true details (about IFRS 1 and PCAOB) when the summary pages it checked did not mention them; as the case highlights, 'not found on this page' did not mean 'wrong,' and leaving out unconfirmed details kept false claims out of the draft.",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Step 5: Claude uses the review",
        "source_file": "case1.md",
        "core_concept": "False-negative source omissions ('not found on this page' != 'wrong') produce less detailed text but safely prevent unverified claims from entering the draft."
      },
      "why_incorrect": {
        "B": "Human Check 3 explicitly forbade adding any new fact that could not be verified, even when suggested by the second reviewer.",
        "C": "Both omitted facts were actually true in the full official standards; summary pages simply omitted the detail.",
        "D": "Claude could not bypass login walls (such as the FASB Codification), so Nisha collected unverified points into her Step 6 human checklist instead."
      },
      "full_justification": "Option A is correct because conservative filtering against unverified assertions protects deliverable integrity even when summary pages cause false-negative omissions. Option B violates verification rules, Option C misdiagnoses a true claim as a hallucination, and Option D demands inaccessible paywall retrieval.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 8,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Paywalled Reference Verification & Human Sign-Off (Step 6 & Exhibit 6)",
      "question": "Before signing off on a cross-border accounting outline, a chartered accountant reviews a 12-point verification checklist generated from references the AI could not confirm against a login-walled regulatory database, confirming 11 items against official primary texts while evaluating whether plain-English chapter lines still convey accurate rules. What governance boundary does this final step establish?",
      "options": {
        "A": "Official source checks confirm standard numbers, while a second AI rubric settles plain-English equivalence",
        "B": "Login-walled references must be moved to appendices whenever an AI lacks credentials to verify them live",
        "C": "Primary-source checks turn opinions into evidence, while human domain judgment settles plain-language fidelity",
        "D": "Confirming eleven of twelve checklist items allows the AI Worker to finalize and lock the deliverable"
      },
      "correct": "C",
      "explanation": "Option C succeeds because in Step 6 (Exhibit 6), Nisha verified 11 items against official IFRS, FASB, SEC, and PCAOB primary sources\u2014turning AI judgments into evidence\u2014and used her own professional judgment as an accountant for item 12 (confirming that plain-English lines still stated the rules accurately).",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Exhibit 6: Nisha's fact check (step 6)",
        "source_file": "case1.md",
        "core_concept": "Step 6 replaces AI judgment with primary-source evidence (11 verified items) and human domain judgment (12th item on plain-English fidelity)."
      },
      "why_incorrect": {
        "A": "No external source or AI rubric could settle item 12; Nisha's own accounting judgment verified that simplified wording preserved regulatory meaning.",
        "B": "Paywalled references (such as ASC 321 and ASC 835-20) remained in the main chapter brackets once Nisha verified them against the Codification.",
        "D": "Only the human manager decides when the work is finished and locks the final version\u2014never the AI Worker."
      },
      "full_justification": "Option C is correct because primary-source verification provides empirical evidence for factual claims while qualified human expertise validates semantic fidelity after plain-language simplification. Option A, Option B, and Option D delegate final authority or misplace verified standards.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 9,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Simplicity vs. Precision Trade-Offs & Post-Edit Auditing (Step 6, Version 5)",
      "question": "In the final human editing pass of a technical guide, a practitioner replaces specialist regulatory phrases with plain-English equivalents for non-native speakers, asks the AI to audit the edits without altering the text, and observes the AI's accuracy grade dip from 9.3 to 9.2 while challenging one unconfirmed database-access note. Which operational sequence completes this sign-off responsibly?",
      "options": {
        "A": "Restore the specialist terms to recover the 9.3 accuracy grade while deleting the unconfirmed database note",
        "B": "Accept the precision trade-off, delete the unconfirmed note, and lock the file against further AI edits",
        "C": "Keep the plain-English edits and retain the unconfirmed database note until readers verify login access",
        "D": "Instruct the AI Worker to rewrite the simplified lines until both accuracy and ease reach 9.5 together"
      },
      "correct": "B",
      "explanation": "Option B succeeds because in Step 6 (Version 5 to Version 6), Nisha asked Claude to check her edits without changing them, explicitly accepted the small precision trade-off (9.3 to 9.2) for better ESL readability (9.0 to 9.3), deleted the unconfirmed FASB Basic View access note, and prohibited any further edits or re-grading.",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Step 6: The human check",
        "source_file": "case1.md",
        "core_concept": "Consciously accept documented simplicity-vs-precision trade-offs, remove unconfirmed claims, and issue an explicit stop command."
      },
      "why_incorrect": {
        "A": "Reverting plain-English edits sacrifices ESL accessibility just to chase a 0.1 numeric score bump.",
        "C": "Leaving an unconfirmed note in the final Sources list violates the core rule against publishing unverified claims.",
        "D": "Asking the AI to rewrite the lines again risks reintroducing dense jargon and restarting unwanted revision drift."
      },
      "full_justification": "Option B is correct because effective human oversight weighs documented trade-offs, purges unverified claims, and establishes a clear stopping point. Option A chases numeric scores over audience fit, Option C retains unverified claims, and Option D surrenders final control back to AI rewriting.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 10,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Scores as Judgment vs. Evidence as Proof (Exhibit 3 & Diary)",
      "question": "After an AI writer assigns its own version 3 draft a 9.5 for accuracy and 9.5 for quality, an independent AI reviewer grades the exact same version 3 file at 8.0 for accuracy and 7.0 for quality. What fundamental evaluation rule resolves this 1.5-to-2.5-point discrepancy?",
      "options": {
        "A": "A 9.5 score indicates 95% factual accuracy, showing the second reviewer applied stricter formatting rules",
        "B": "A lower numeric score proves the independent reviewer is more reliable when auditing technical sources",
        "C": "Combining both scores produces a calibrated confidence baseline until real readers test the manuscript",
        "D": "Rubric scores are subjective prompt judgments, whereas inspecting reasoning against primary sources proves truth"
      },
      "correct": "D",
      "explanation": "Option D succeeds because Exhibit 3 and Nisha's diary emphasize that every AI grade is a reviewer's subjective judgment against a prompt\u2014not a probability of correctness or test result\u2014so resolving reviewer disagreement requires identifying assumptions, inspecting reasoning, and verifying disputed claims against official sources.",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Exhibit 3: Every grade, from first draft to final version",
        "source_file": "case1.md",
        "core_concept": "A score is a reviewer's judgment, not a probability of correctness; evidence from primary sources makes a judgment defensible."
      },
      "why_incorrect": {
        "A": "Exhibit 3 explicitly warns that a 9.5 does not mean the draft is 95% right.",
        "B": "Exhibit 3 explicitly warns that a lower grade does not make a reviewer more reliable, especially when reviewers saw different information.",
        "C": "Averaging two subjective AI opinions still yields an unverified judgment rather than primary-source proof."
      },
      "full_justification": "Option D is correct because numeric AI grades reflect subjective rubric judgments rather than empirical accuracy, requiring primary-source verification to settle disputes. Option A misinterprets scores as probabilities, Option B equates harshness with reliability, and Option C averages opinions instead of verifying evidence.",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 11,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Rebuilt Projects Role Isolation & Cross-Thread Artifact Hand-Offs (Lab Part 4)",
      "question": "A technical documentation lead upgrades a multi-round chapter drafting workflow into a rebuilt Claude Project by spawning separate writer and reviewer threads, and instructs a newly started reviewer thread to evaluate chapter-7-v2.md immediately after the morning writer thread saves it. Which cross-thread artifact rule governs whether the reviewer thread can inspect that file?",
      "options": {
        "A": "Running threads automatically detect and read any new file saved into the Library by parallel threads mid-session",
        "B": "Starting a new reviewer thread automatically inherits the preceding writer thread's conversation history and local files",
        "C": "Thread-created files must be downloaded and re-uploaded to the Library before a newly spawned thread can read them",
        "D": "Project instructions grant every reviewer thread direct read access to files inside another thread's cloud sandbox"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Lab Part 4 explicitly establishes that threads read files uploaded by the user to the Library\u2014not files generated directly by another thread\u2014and running threads do not see files added after they start, requiring the operator to download the thread's file, add it back to the Library, and start a new thread (or paste its text directly).",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Lab: take Nisha's method to 2.0 (Part 4. The reviewer thread grades, the writer improves)",
        "source_file": "case1.md",
        "core_concept": "Start a new thread for each job, and download any file a thread makes and re-add it to the Library yourself before starting the next thread[cite: 1]."
      },
      "why_incorrect": {
        "A": "Already-running threads do not hot-reload new files added to the Library after they start, which is why Part 4 requires spawning a new thread[cite: 1].",
        "B": "Each thread runs as an isolated Claude session with its own sandbox and does not automatically import another thread's conversation transcript or workspace files[cite: 1, 11].",
        "D": "Project instructions provide standing text rules to new threads[cite: 1], not cross-sandbox filesystem mounts into another thread's cloud session."
      },
      "full_justification": "Option C is correct because cross-thread hand-offs in the lab require explicitly re-adding thread-produced artifacts to the shared Library and launching a fresh thread[cite: 1]. Option A, Option B, and Option D misstate live Library polling, transcript inheritance, or cross-sandbox filesystem access[cite: 1, 11].",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 12,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Standing Briefs in Project Instructions & Project Memory Propagation (Lab Parts 1 & 3)",
      "question": "An operations manager configures a rebuilt Claude Project for standardized chapter production by pasting a four-part brief into Project instructions upfront, and later tells the top-level Project conversation to remember a newly discovered formatting rule (\"every chapter line is one or two short sentences\"). Which threads receive the Project instructions and the saved memory note?",
      "options": {
        "A": "Every new thread reads Project instructions, while saved memory notes reach only cloud threads started afterward",
        "B": "Already-running threads reload saved memory notes mid-turn, while Project instructions apply only to the coordinator",
        "C": "Project instructions reach only the first thread spawned, while saved memory notes apply exclusively to local threads",
        "D": "Saved memory notes update active threads immediately, while Project instructions must be pasted into each new thread"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Project instructions serve as the shared binder sent to every new thread when it starts[cite: 1, 11], while Project memory notes saved by the coordinator are read by every cloud thread upon startup\u2014reaching threads started after the note is saved rather than threads already running[cite: 1, 12].",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Lab: take Nisha's method to 2.0 (Part 2 & Part 3 \u2014 Make the binder learn)",
        "source_file": "case1.md",
        "core_concept": "Project instructions are sent to every new thread; cloud threads read project memory when they start, so new notes reach threads started afterward, not running threads[cite: 1, 11]."
      },
      "why_incorrect": {
        "B": "Already-running threads do not see memory notes added after they started, and Project instructions are sent to every new thread rather than only the coordinator[cite: 1, 4].",
        "C": "Project instructions are sent to every new thread (eliminating repetitive pasting), and local threads do not load project memory files[cite: 1, 6].",
        "D": "Running threads do not pick up newly saved memory notes mid-execution, and Project instructions are attached automatically to every new thread[cite: 1, 4]."
      },
      "full_justification": "Option A is correct because both Project instructions and cloud project memory are injected at thread initialization, requiring a new thread to pick up newly saved memory corrections[cite: 1, 11]. Option B, Option C, and Option D invert thread startup inheritance[cite: 1, 4].",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 13,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Cloud Scheduled Tasks & Default Connector Stripping (Lab Part 3)",
      "question": "A compliance analyst schedules a 1 a.m. cloud task inside a Claude Project to draft a chapter overnight while their laptop is closed, after already turning off outbound email and Drive connectors at the account level earlier in the evening. Which two task-level configuration steps are mandatory before closing the laptop?",
      "options": {
        "A": "Keep default connectors enabled for Library saves, and rely on prior coordinator chat messages for task context",
        "B": "Disable auto-continue on usage-limit resets, and schedule a Desktop task so local disk permissions stay enforced",
        "C": "Strip the scheduled task's default connector list, and write a self-contained prompt needing zero mid-run approvals",
        "D": "Grant the scheduled task temporary Gmail access for morning status alerts, and pause at 1 a.m. for human sign-off"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Lab Part 3 requires two mandatory safeguards before closing the laptop: (1) emptying the scheduled task's connector list (since a new scheduled task includes all connectors by default and can execute writes during a run), and (2) ensuring the prompt stands alone ('as if for a stranger') without needing mid-run approvals, since the firing prompt is not you and cannot approve anything overnight[cite: 1, 4].",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Lab: take Nisha's method to 2.0 (Part 3. The overnight draft)",
        "source_file": "case1.md",
        "core_concept": "Empty the new scheduled task's default connector list and ensure the overnight prompt stands alone without requiring mid-run approvals[cite: 1]."
      },
      "why_incorrect": {
        "A": "Saving to the Project Library needs zero external connectors, and a scheduled prompt runs on its own and must stand alone rather than relying on unwritten chat context[cite: 1, 4].",
        "B": "Auto-continue when usage limits reset should stay enabled so overnight runs resume automatically, and Desktop tasks skip runs while the laptop is asleep[cite: 1, 6].",
        "D": "Re-enabling outbound email violates connector lockdown, and a scheduled prompt cannot pause for interactive user approval while you sleep[cite: 1]."
      },
      "full_justification": "Option C is correct because task-level connector stripping and self-contained, approval-free prompt design prevent unattended external writes and overnight hangs[cite: 1]. Option A, Option B, and Option D reintroduce external connectors, sleep interruptions, or impossible mid-run approvals[cite: 1, 6].",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 14,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Empirical Enforcement Testing vs. Settings Screenshots (Lab Parts 2 & 3)",
      "question": "During a pre-deployment security audit of a Claude Project, an engineer submits screenshots of disabled email/Drive settings and an unlinked GitHub integration as proof that no thread can transmit files externally. Why does the lab's governance standard reject screenshots as sufficient proof, and what empirical verification is required instead?",
      "options": {
        "A": "Screenshots reflect cached UI states; the engineer must re-upload connector JSON manifests into the Project Library",
        "B": "Screenshots show only chosen settings; the engineer must command both a test thread and 1 a.m. thread to send",
        "C": "Account connector locks apply only to interactive threads; scheduled tasks inherit separate permissions unless disabled",
        "D": "Disabled connectors remain active in auto mode until the engineer adds a written \"never share\" rule to instructions"
      },
      "correct": "B",
      "explanation": "Option B succeeds because Lab Parts 2 and 3 state that a screenshot of settings shows only what you chose\u2014only an empirical enforcement test proves what a thread can actually do in auto mode, requiring the operator to command both the Part 2 test thread and the 1 a.m. scheduled thread to email/share lab-test.md and record their refusal[cite: 1].",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Lab: take Nisha's method to 2.0 (Part 2, step 6 & Part 3, step 5)",
        "source_file": "case1.md",
        "core_concept": "A screenshot shows what you chose; only commanding a test thread and the 1 a.m. thread to email/share proves the lock works[cite: 1]."
      },
      "why_incorrect": {
        "A": "The issue is not UI caching or JSON manifests in the Library, but verifying live runtime tool availability inside actual threads[cite: 1].",
        "C": "While scheduled tasks do have their own default connector list (requiring Part 3 stripping), both the Part 2 test thread and the 1 a.m. thread must still be empirically tested[cite: 1].",
        "D": "Written rules in Project instructions are 'only asked' (not enforced), whereas missing connectors enforce the block empirically[cite: 1]."
      },
      "full_justification": "Option B is correct because negative capability testing across both interactive and scheduled threads provides empirical proof of runtime constraints[cite: 1]. Option A, Option C, and Option D misstate why screenshots fall short or confuse written rules with technical locks[cite: 1].",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 15,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "The 'Second Signature' & Local Custody Boundary (Lab Parts 2, 7 & 8)",
      "question": "A practice director designs the final approval architecture for a high-stakes regulatory deliverable built inside a cloud Claude Project, requiring a non-bypassable \"second signature\" before any file is deemed final. Which storage and custody topology enforces this boundary architecturally rather than relying on written prompt prohibitions?",
      "options": {
        "A": "Keep final on a local machine with zero connectors or local tasks pointing to it so only the human copies files in",
        "B": "Create a dedicated final folder inside the cloud Project Library and prohibit threads from writing to it in instructions",
        "C": "Grant the reviewer thread exclusive write access to final once the writer thread reaches a 9.5 self-grading score",
        "D": "Configure a scheduled overnight task to copy verified drafts into final after checking all official source links"
      },
      "correct": "A",
      "explanation": "Option A succeeds because Lab Parts 2, 7, and 8 ('Asked versus enforced') show that written rules in instructions are only requests, whereas keeping the final folder on your own local computer\u2014with no connector reaching it, no local task pointing at it, and no thread running on your computer\u2014ensures only the human can copy the verified file into final[cite: 1].",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "Lab: take Nisha's method to 2.0 (Part 2, step 5; Part 7, step 3; Part 8)",
        "source_file": "case1.md",
        "core_concept": "Keep the final folder on your own computer outside every thread and connector so only you can copy the file there (enforced second signature)[cite: 1]."
      },
      "why_incorrect": {
        "B": "Placing final inside the cloud Project Library and relying on Project instructions is 'only asked,' which a cloud thread could ignore[cite: 1].",
        "C": "Allowing an AI reviewer thread to promote files into final based on a subjective 9.5 score eliminates human sign-off[cite: 1].",
        "D": "Automating final promotion via an overnight task removes the human second signature and relies on unverified AI link checks[cite: 1]."
      },
      "full_justification": "Option A is correct because architectural separation between cloud threads and the local final directory physically enforces human custody and approval[cite: 1]. Option B, Option C, and Option D rely on non-enforced instructions or automated AI promotion[cite: 1].",
      "category": "The Four Operational Case Studies"
    },
    {
      "id": 16,
      "chapter": "The Four Operational Case Studies",
      "chapterId": 2,
      "section": "Case 1: Nisha's AI Team",
      "sourceFile": "case1.md",
      "concept": "Solo Practitioner Strategic Path & Risk Allocation ('A Company of One')",
      "question": "After planning a 25-chapter cross-border accounting book in one evening using two AI subscriptions (costing Rs 60,000/month while existing household bills already exceed salary), a chartered accountant\u2014still actively learning US GAAP\u2014must choose by Monday morning how to spend evenings for the next three months: (1) write all 25 chapters with the same six-step method, (2) redesign the workflow method first, or (3) immediately take paid client work converting financial statements from IFRS to US GAAP. Which risk profile accurately distinguishes taking immediate paid client conversion work from continuing the book?",
      "options": {
        "A": "Paid client work eliminates manual primary-source verification, whereas writing the book requires live Codification checks",
        "B": "Continuing the book generates immediate monthly subscription recovery, whereas client conversion work delays cash flow",
        "C": "Paid client work brings revenue sooner but risks real money and client errors while US GAAP expertise is still maturing",
        "D": "Redesigning the workflow method first produces immediate client billings without requiring additional US GAAP study"
      },
      "correct": "C",
      "explanation": "Option C succeeds because in 'A company of one' and the Teaching Note's Core 5 analysis, offering paid IFRS-to-US GAAP conversion work as the first job for a company of one could bring in money sooner to offset Nisha's expense deficit, but carries real financial and reputational risk from mistakes while US GAAP is still the framework she is learning[cite: 1].",
      "source_reference": {
        "chapter": "F00C: Case 1 - Nisha's AI Team",
        "sub_section": "A company of one & Teaching note (Core 5: What should Nisha do next?)",
        "source_file": "case1.md",
        "core_concept": "Client conversion work may bring money sooner than a 25-chapter book, but involves real money and real mistakes while US GAAP expertise is still growing[cite: 1]."
      },
      "why_incorrect": {
        "A": "Client financial conversions require even stricter primary-source verification because real client money and statutory accuracy are on the line[cite: 1].",
        "B": "Writing a 25-chapter book takes months of evening work without immediate monthly cash flow, whereas client conversion work brings revenue sooner[cite: 1].",
        "D": "Time spent redesigning the method first is time not spent writing or earning revenue[cite: 1]."
      },
      "full_justification": "Option C is correct because it captures the exact cash-flow versus competence/liability trade-off highlighted at the end of Case 1[cite: 1]. Option A, Option B, and Option D invert verification duties, revenue timing, or method-refactoring trade-offs[cite: 1].",
      "category": "The Four Operational Case Studies"
    }
  ]
};
