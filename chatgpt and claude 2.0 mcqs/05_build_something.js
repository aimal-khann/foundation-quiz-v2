// Section 5: Build Something
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["05_build_something"] = {
  "sectionId": "05_build_something",
  "chapterId": 1,
  "chapterTitle": "Claude and ChatGPT 2.0",
  "title": "Section 5: Build Something",
  "totalQuestions": 16,
  "questions": [
    {
      "id": 1,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Artifacts Tab Persistence & Plan-Tier Availability",
      "question": "A junior operations analyst on a Claude Free account opens the desktop app to prepare a payment-run package, cannot find the Artifacts sidebar menu, and asks why the Sheets and Whiteboard creation tiles are missing once the menu is enabled. Which configuration and licensing boundary explains both observations?",
      "options": {
        "A": "Artifacts live inside temporary cloud desks that purge on exit, and Free plans unlock Docs, Slides, and Sheets",
        "B": "Enabling Artifacts requires Enterprise owner activation, and Free plans unlock Docs, Design, and Whiteboards",
        "C": "Artifacts persist in the Artifacts tab once enabled in Capabilities, while Sheets and Whiteboards require a paid plan",
        "D": "Artifacts are stored locally on the workstation disk only, while Sheets and Data are unlocked on every free plan"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Claude stores artifacts outside the temporary cloud desk in the Artifacts tab (once Artifacts and Create and edit files are turned on in Settings > Capabilities), and Free accounts unlock Docs, Slides, and Design whereas Sheets, Data, and Whiteboards require a paid plan.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Start here: the big idea",
        "source_file": "build something.md",
        "core_concept": "Artifacts persist in the Artifacts tab (enabled via Settings > Capabilities); Free includes Docs, Slides, Design, while paid plans unlock all six (Sheets/Whiteboards in beta)."
      },
      "why_incorrect": {
        "A": "Artifacts remain saved outside temporary cloud desks in the Artifacts tab, and Sheets requires a paid plan rather than being included on Free.",
        "B": "Individual users turn on Artifacts in their own Capabilities settings (only Team/Enterprise org settings need owner activation), and Whiteboards require a paid plan.",
        "D": "Artifacts are stored on Anthropic-operated infrastructure across web and desktop, and both Sheets and Data require a paid plan."
      },
      "full_justification": "Option C is correct because enabling Artifacts and Create and edit files in Capabilities reveals the persistent Artifacts tab, while Free plans provide Docs, Slides, and Design and paid plans unlock Sheets, Data, and Whiteboards. Option A is incorrect because artifacts persist outside the desk and Sheets is paid-only. Option B is incorrect because Free users enable Capabilities themselves and Whiteboards is paid-only. Option D is incorrect because artifacts reside on Anthropic servers and Sheets/Data are paid-only.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 2,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Artifact vs. Exported File vs. Connected App vs. Website",
      "question": "During Brightline's weekly payment cycle, a controller reviews a living payment-run draft on Thursday, requests a frozen record of that exact reviewed version on Friday, and separately needs an external web portal where suppliers sign in to inspect only their own scheduled payouts. Which tool selection and governance rule governs these three deliverables?",
      "options": {
        "A": "Share a Claude Doc on Thursday, export a PDF on Friday (recording approval separately), and use a website for suppliers",
        "B": "Share a single exported PDF on Thursday, lock the live artifact on Friday, and treat the PDF as formal approval proof",
        "C": "Build a Claude Design prototype for live supplier sign-ins, and use a connected app to freeze Friday's review copy",
        "D": "Use a ChatGPT Site for internal Thursday comments, and export a CSV file to serve as payment-system sign-off proof"
      },
      "correct": "A",
      "explanation": "Option A succeeds because an artifact (Claude Doc) supports iterative Thursday commenting, an exported file (PDF) captures a frozen Friday copy (while formal approval still requires its own payment-system sign-off record), and a functional website (such as a ChatGPT Site with sign-in) serves external suppliers.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Artifact, file, connected app or website?",
        "source_file": "build something.md",
        "core_concept": "Comparison table and Brightline example: artifact for iterative review, exported PDF for fixed copy (approval recorded separately), website with sign-in for suppliers."
      },
      "why_incorrect": {
        "B": "Exporting a static PDF on Thursday prevents collaborative commenting, and a PDF alone never proves formal payment approval.",
        "C": "Claude Design produces visual prototypes rather than live authenticated supplier portals, and connected apps read external data rather than freezing review copies.",
        "D": "ChatGPT Sites are functional web pages rather than internal review docs, and exported files do not replace payment-system sign-off records."
      },
      "full_justification": "Option A is correct because each deliverable matches its proper mechanism: living artifact for Thursday feedback, exported PDF for Friday's fixed snapshot (paired with separate system approval), and a sign-in website for supplier self-service. Option B misorders the workflow and overstates PDF proof. Option C misapplies Design and connected apps. Option D misapplies Sites and CSV exports.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 3,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Shared Artifact Permissions, Static Text & Prompt Injection Risk",
      "question": "A finance lead shares a live-connected Claude artifact with two regional managers\u2014one with Google Drive access to the payroll folder and one without\u2014while having pasted three executive salary figures directly into the artifact's summary paragraph. What data visibility and security risks apply when both managers open this shared artifact?",
      "options": {
        "A": "Live connectors evaluate each viewer's own permissions, while pasted figures stay hidden from unauthorized Drive users",
        "B": "Both managers see identical live Drive records via the creator's token, while Claude strips hidden prompt instructions",
        "C": "Pasted figures remain visible to everyone who opens the artifact, while live connectors use the creator's Drive access",
        "D": "Live connectors check each viewer's own app permissions, while pasted text is visible to all and may hide prompt injections"
      },
      "correct": "D",
      "explanation": "Option D succeeds because when a colleague opens a live-connected artifact, it reads the colleague's own connected apps (so each person sees only what they are allowed to see), whereas anything already copied into the artifact (like pasted numbers) is visible to everyone who can open it\u2014and untrusted shared artifacts can hide prompt-injection instructions.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Four habits for every kind",
        "source_file": "build something.md",
        "core_concept": "Warning: shared artifacts read each colleague's own connected apps, but anything already copied into the artifact is visible to everyone, and untrusted pages can hide prompt injections."
      },
      "why_incorrect": {
        "A": "Correctly notes per-viewer connector evaluation, but falsely claims static pasted figures stay hidden from users lacking Drive access.",
        "B": "Live connectors never lend the creator's Drive token to viewers, and Claude does not automatically sanitize hidden prompt injections inside untrusted shared pages.",
        "C": "Correctly notes that pasted figures are visible to all viewers, but falsely claims live connectors use the creator's Drive access."
      },
      "full_justification": "Option D is correct because per-viewer authorization applies only to live connector reads, whereas static text copied into an artifact is readable by every recipient and shared artifacts from untrusted sources carry prompt-injection risk. Option A and Option C each get half right and invert the other half. Option B misstates token sharing and prompt sanitization.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 4,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Claude Docs Targeted Editing & Classic Projects on Free Plans",
      "question": "A compliance analyst on a Claude Free plan sets up a recurring weekly payment-run memo using Claude Docs, wants Claude to rewrite a single imprecise paragraph without altering the rest of the document, and plans to store standing policy rules across weekly runs. Which editing workflow and project setup fits this requirement?",
      "options": {
        "A": "Delete the draft to recover a cleaner version from Trash, and run the memo inside a rebuilt Project on the Free plan",
        "B": "Select the target paragraph and click Edit with Claude, while storing standing rules inside a classic Project's instructions",
        "C": "Mention @Claude in a sidebar comment to freeze the remaining text, and paste full rules manually into every chat",
        "D": "Grant external reviewers Owner permissions so they can rename the doc, and upgrade to Pro to unlock classic Projects"
      },
      "correct": "B",
      "explanation": "Option B succeeds because highlighting specific words and clicking Edit with Claude modifies only that selection, and storing standing policy rules inside a classic Project's instructions (available on every plan, up to five on Free) avoids pasting rules into every weekly chat.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Docs",
        "source_file": "build something.md",
        "core_concept": "Four ways to change a doc (including Edit with Claude for selected words) and classic Projects on Free plans (up to 5) to hold standing instructions."
      },
      "why_incorrect": {
        "A": "Deleting a Claude Doc is permanent with no trash folder, and rebuilt Projects are beta features on Pro, Max, and Ultra rather than Free.",
        "C": "A comment mentioning @Claude applies targeted edits and explains why rather than freezing surrounding text, and classic Projects eliminate repetitive rule pasting.",
        "D": "Only the document creator/owner can rename or delete a doc, and classic Projects are already available on the Free plan."
      },
      "full_justification": "Option B is correct because Edit with Claude scopes revisions to highlighted text and classic Projects persist standing instructions on Free accounts. Option A fails due to permanent deletion and rebuilt Project plan limits. Option C misstates @Claude comments and ignores classic Projects. Option D misstates Owner rights and classic Project availability.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 5,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "ChatGPT Space Pages Access, Plan Limits & Mobile Constraints",
      "question": "A strategy manager on a ChatGPT Pro plan drafts a quarterly restructuring memo as a Page inside Space, includes compensation figures copied from a restricted HR spreadsheet, and shares the Page with junior coordinators who lack access to the underlying HR file. Which two operational rules govern this Page in ChatGPT's Space?",
      "options": {
        "A": "Anyone who can read the Page sees copied numbers regardless of source file permissions, and mobile users can only read Pages",
        "B": "Junior coordinators cannot view numbers copied from restricted files, and mobile users can edit Pages offline during travel",
        "C": "Space is included on all Free and Plus accounts, and copied spreadsheet numbers dynamically enforce source HR permissions",
        "D": "Space requires Pro, Business, or Enterprise plans, and mobile users can co-edit Pages simultaneously with desktop editors"
      },
      "correct": "A",
      "explanation": "Option A succeeds because in ChatGPT's Space (available on Pro, Business, and Enterprise plans), anything copied onto a shared Page can be read by everyone who can read that Page even if they cannot open the underlying file, and on a phone users can read Pages but cannot change them.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Docs",
        "source_file": "build something.md",
        "core_concept": "In ChatGPT: pages in Space (Pro, Business, Enterprise only); mobile can read pages but not change them; anything copied onto a page can be read by everyone with Page access."
      },
      "why_incorrect": {
        "B": "Static numbers copied onto a Page become readable to everyone with Page access, and mobile apps do not support editing Space Pages.",
        "C": "Space requires Pro, Business, or Enterprise (not Free or Plus), and copied static numbers do not enforce underlying HR file permissions.",
        "D": "Correctly notes the Pro/Business/Enterprise plan requirement, but falsely claims mobile users can co-edit Pages."
      },
      "full_justification": "Option A is correct because copied data on a Space Page inherits the Page's visibility rather than the source file's permissions, and mobile clients are read-only for Space Pages. Option B inverts both rules. Option C misstates plan availability and permission inheritance. Option D misstates mobile editing support.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 6,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Connector-Built Slides Snapshots & Presentation Verification",
      "question": "An accounting lead connects Google Drive to Claude Desktop and prompts Claude to generate a three-slide payment-run presentation from the Invoices folder on Wednesday afternoon for a Friday morning executive meeting. Why must the lead put the read timestamp on slide 1 and re-run the folder read on Friday morning before presenting?",
      "options": {
        "A": "Connector-built decks continuously overwrite slide numbers in real time, causing totals to shift mid-presentation",
        "B": "Claude Slides automatically rounds all currency values to the nearest thousand unless refreshed every 24 hours",
        "C": "Connector-built decks capture a point-in-time snapshot rather than live data, so later Drive edits will not appear",
        "D": "Full-screen presenter mode strips connector citations unless the deck is exported to PowerPoint before every meeting"
      },
      "correct": "C",
      "explanation": "Option C succeeds because a Slides deck built from a connected app (like Google Drive) captures a point-in-time snapshot of what Claude read at creation; if files in Drive change later, the deck still shows the old numbers until you ask Claude to re-read the folder and check the figures again.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Slides",
        "source_file": "build something.md",
        "core_concept": "Combine it: build from a connected app\u2014treat a deck as a snapshot, write the read date/time on slide 1, and ask Claude to re-read and update on presentation day."
      },
      "why_incorrect": {
        "A": "Slides decks do not dynamically live-update when Drive files change; they remain static snapshots.",
        "B": "Practitioners are explicitly warned not to round numbers on slides (since rounding can hide mistakes), and there is no 24-hour auto-rounding rule.",
        "D": "Full-screen presentation works directly inside Claude without requiring PowerPoint export."
      },
      "full_justification": "Option C is correct because connector-built decks reflect a static point-in-time read rather than a live sync, requiring timestamp transparency and a fresh read before presenting. Option A falsely claims real-time overwriting. Option B invents an auto-rounding rule. Option D falsely claims presenter mode requires PowerPoint export.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 7,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "ChatGPT Slides Windows 10 Fallback & Space Access Inheritance",
      "question": "A consultant using the ChatGPT desktop app on a Windows 10 workstation needs a collaborative deck inside Space that teammates can co-edit, and subsequently removes one contractor's direct invitation to that deck without removing the contractor from the parent Space. Which platform constraint and access rule apply?",
      "options": {
        "A": "Asking for \"a PowerPoint\" creates a collaborative Space deck on Windows 10, and removing a direct invite revokes access",
        "B": "ChatGPT Slides is included on all Free and Plus plans, and exported PDF files remain live-linked to Space edits",
        "C": "Windows 10 natively supports collaborative Space decks in desktop mode, while removing a direct invite blocks Space entry",
        "D": "Requesting \"slides\" in Work creates a .pptx file on Windows 10 (requiring web/cloud mode), and Space access persists"
      },
      "correct": "D",
      "explanation": "Option D succeeds because in ChatGPT, requesting 'a PowerPoint' yields a static file instead of collaborative Slides\u2014and on Windows 10 (and some Windows 11 devices), the desktop app generates a .pptx file rather than a Space deck, requiring ChatGPT on the web or cloud mode; additionally, removing a person's direct deck invite does not block them if they can still open its parent Space.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Slides",
        "source_file": "build something.md",
        "core_concept": "In ChatGPT: Slides\u2014ask for 'slides' not 'a PowerPoint'; Windows 10 desktop creates .pptx instead of collaborative Slides (use web/cloud mode); anyone who can open a Space can open decks in it."
      },
      "why_incorrect": {
        "A": "Asking for 'a PowerPoint' produces a static file rather than a Space deck, and parent Space membership still grants access after a direct deck invite is removed.",
        "B": "ChatGPT Slides requires Pro, Business, or Enterprise with Space access (not Free/Plus), and exported PDFs are static copies.",
        "C": "Windows 10 lacks the required desktop component for collaborative Space decks, and removing a direct deck invite does not block Space-level access."
      },
      "full_justification": "Option D is correct because Windows 10 desktop falls back to .pptx generation (requiring web/cloud mode for collaborative Space Slides) and Space-level access overrides individual deck invite removal. Option A, Option B, and Option C each invert these documented platform and sharing behaviors.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 8,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Claude Sheets Destructive Version History & Beta Limitations",
      "question": "While building a 15-row vendor payment tracker in Claude Sheets (beta), an analyst notices Claude added a second summary tab in version 3, manually fixes a supplier spelling in version 4, and then restores version 2 after discovering a formula error in version 3. Which version-history outcome and beta constraint govern this spreadsheet?",
      "options": {
        "A": "Restoring version 2 preserves the manual spelling fix from version 4, and Claude Sheets natively exports formatted PDFs",
        "B": "Restoring version 2 permanently removes versions 3 and 4 (including the manual fix), and Sheets lacks pivot tables and PDF export",
        "C": "Version history blocks rollbacks once a second tab exists, and Claude Sheets supports automated VBA macros up to 100,000 cells",
        "D": "Claude Sheets automatically pulls live updates from connected accounting apps, and restores create non-destructive branches"
      },
      "correct": "B",
      "explanation": "Option B succeeds because in Claude Sheets, restoring an earlier version removes every change made after it (erasing both version 3's tab and version 4's manual spelling fix), and as a beta tool (up to 100,000 cells) Sheets does not yet support pivot tables, macros, PDF export, or live connected-app reads.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Sheets",
        "source_file": "build something.md",
        "core_concept": "Version history removes every change made after the restored version; beta limits include no pivot tables, macros, PDF export, or live data from connected apps."
      },
      "why_incorrect": {
        "A": "Restoring version 2 wipes out version 4's manual edit, and Claude Sheets has no PDF export.",
        "C": "Version history allows restoring across tabs, and Claude Sheets has no macros.",
        "D": "Claude Sheets cannot pull live data from connected apps, and restoring an old version overwrites subsequent versions rather than branching."
      },
      "full_justification": "Option B is correct because Claude Sheets version restoration is destructive to all later versions and the beta lacks pivot tables, macros, and PDF export. Option A misstates edit preservation and PDF export. Option C misstates rollback rules and macro support. Option D misstates live data connections and branching.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 9,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Claude Sheets Static Local Copy vs. ChatGPT Live Spreadsheet Add-In",
      "question": "A financial analyst on a paid Claude plan builds a Claude Sheet directly from invoices.csv stored in an authorized local folder on a MacBook, then updates one invoice amount in the local CSV file while the laptop lid is closed. How does Claude Sheets handle this local file update compared to ChatGPT for Excel and Google Sheets?",
      "options": {
        "A": "Claude Sheets holds a static copy and requires the desktop app open plus a manual update prompt, while ChatGPT edits live",
        "B": "Claude Sheets updates its total automatically in the cloud overnight, whereas ChatGPT edits a disconnected static copy",
        "C": "Both tools maintain continuous two-way file synchronization while the laptop is asleep and disconnected from the network",
        "D": "Claude Sheets caches local CSV changes for background sync on wake, whereas ChatGPT requires exporting a new .xlsx copy"
      },
      "correct": "A",
      "explanation": "Option A succeeds because a Claude Sheet built from a local folder holds a static copy (not a live link) and Claude can access local folders only while the desktop app is open on that computer\u2014requiring you to open the app and prompt Claude to update the Sheet\u2014whereas ChatGPT for Excel and Google Sheets operates directly inside your live spreadsheet file.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Sheets",
        "source_file": "build something.md",
        "core_concept": "Combine it: build from a folder on your computer\u2014Claude Sheet holds a copy and requires the desktop app open plus an update prompt; ChatGPT edits the live file itself."
      },
      "why_incorrect": {
        "B": "Cloud jobs cannot reach a closed laptop's local folder, and ChatGPT's add-in edits the live spreadsheet file rather than a disconnected copy.",
        "C": "Neither tool syncs local files while the laptop is asleep and offline.",
        "D": "Claude Sheets does not auto-sync local CSV edits on wake without an update request, and ChatGPT edits the live spreadsheet directly."
      },
      "full_justification": "Option A is correct because Claude Sheets copies local CSV data and needs an open desktop app plus an explicit refresh prompt, whereas ChatGPT's Excel/Sheets add-in modifies the user's open workbook directly. Option B, Option C, and Option D each misrepresent offline access and live-file synchronization.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 10,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Claude Design Edit Modes, Design Systems & Procedural Skills",
      "question": "A brand manager uses Claude Design to create a two-artboard supplier invoice guide, needs to shift a misaligned logo slightly to the left, and wants every future supplier guide to follow both company brand colors and the rule \"never display a bank account number\". Which editing action and rule architecture fits this workflow?",
      "options": {
        "A": "Chat with Claude to nudge the logo, store brand colors in a Skill, and deploy the design as a live supplier database portal",
        "B": "Restore a previous artboard version from Design history after every edit, and let two designers co-edit layers together",
        "C": "Leave a canvas comment for a minor drag fix, put procedural rules in a design system, and use a Site for static mockups",
        "D": "Drag the logo layer directly on the artboard, save colors/fonts in a design system, and encode procedural rules in a Skill"
      },
      "correct": "D",
      "explanation": "Option D succeeds because in Claude Design, quick spatial adjustments (like dragging or resizing a layer on an artboard) are done directly by hand, visual styling (brand colors and fonts) lives in a design system, and procedural steps/rules ('never display a bank account number') are saved in a Skill.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Design",
        "source_file": "build something.md",
        "core_concept": "Three edit ways (hand drag for quick fixes, comment for one part, chat for big changes); design system holds look (colors/fonts) while a Skill holds method/rules."
      },
      "why_incorrect": {
        "A": "Small spatial nudges are fastest by hand rather than chat, brand colors belong in a design system rather than a Skill, and Claude Design creates visual mockups rather than live database portals.",
        "B": "Claude Design does not keep old versions yet (requiring PDF exports before major edits), and two people editing at once does not work well yet.",
        "C": "Procedural rules belong in a Skill rather than a design system, and ChatGPT Sites builds functional web pages rather than static mockups."
      },
      "full_justification": "Option D is correct because it matches quick direct-manipulation edits with the separation between visual branding (design system) and workflow rules (Skill). Option A misplaces styling and portal functionality. Option B cites non-existent version history and concurrent editing. Option C swaps design systems with Skills and Sites with mockups.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 11,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Claude Data Certified Query Badges & Reconciliation Audit",
      "question": "A financial controller opens a Claude Data dashboard connected to Snowflake showing \"$12,906.40 paid late\" over the last six months, notices a certified-query badge on the chart, and asks an analyst to adjust the query's date filter before presenting the figure to the board. What happens to the badge when the query is edited, and what verification steps must the analyst complete before trusting the updated number?",
      "options": {
        "A": "Editing preserves the certified badge automatically, and reading raw SQL syntax replaces manual reconciliation",
        "B": "Editing strips the certified badge, and the analyst must audit counted/excluded records and reconcile against trusted logs",
        "C": "Editing locks the query against future date changes, and the chart's visual layout confirms mathematical accuracy",
        "D": "Editing triggers an automatic audit by the data team, and refreshing the page validates totals against ledger reports"
      },
      "correct": "B",
      "explanation": "Option B succeeds because modifying a certified query in Claude Data immediately removes its certification and badge; before trusting any dashboard figure, the analyst must ask Claude to explain the query in plain words (checking what is counted, which dates, and what is left out) and reconcile the result against source records or a trusted report.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Data",
        "source_file": "build something.md",
        "core_concept": "How to trust a number: editing a certified query removes its certification and badge; check what is counted, which dates, what is left out, and reconcile against a trusted number."
      },
      "why_incorrect": {
        "A": "Any edit to a certified query strips its certification badge, and reading SQL syntax does not replace reconciling against trusted accounting reports.",
        "C": "Queries remain editable (losing certification on change), and visual presentation never proves numerical accuracy.",
        "D": "Editing does not trigger an automatic data-team audit, and refreshing a page does not reconcile numbers against trusted ledger totals."
      },
      "full_justification": "Option B is correct because changing a certified query revokes its badge and requires auditing the query's inclusion/exclusion logic plus reconciling against a trusted baseline. Option A, Option C, and Option D all misrepresent badge persistence and reconciliation requirements.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 12,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Claude Data Live Sharing vs. Scheduled Doc Updates",
      "question": "A department head builds a Claude Data sales dashboard connected to Salesforce, wants regional leads without direct Salesforce seats to view the dashboard's current chart numbers without granting them broader Salesforce access, and separately needs a weekly summary Doc updated every Monday at 8 a.m. automatically. Which sharing and automation setup meets both requirements?",
      "options": {
        "A": "Use default normal sharing so unlicensed leads see your data, and rely on the dashboard's background cron schedule",
        "B": "Enable live sharing so leads can write custom queries, and let a scheduled task generate a new Doc every Monday",
        "C": "Use normal sharing to lend your Salesforce token globally, and schedule a task without passing any artifact URL",
        "D": "Enable beta live sharing after checking all charts, and schedule a task referencing the standing Doc's link"
      },
      "correct": "D",
      "explanation": "Option D succeeds because beta live sharing lets viewers without underlying data access see the creator's results for that dashboard's fixed queries (requiring the creator to check every chart first), and because dashboards refresh only when opened rather than on a schedule, a Monday scheduled task must be given the existing Doc's link so it updates that Doc instead of creating a new one.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Data",
        "source_file": "build something.md",
        "core_concept": "Share it (normal sharing vs. beta live sharing) and Combine it (dashboards refresh on open, not on a schedule; give a scheduled task an existing artifact's link to update it)."
      },
      "why_incorrect": {
        "A": "Normal sharing evaluates each viewer's own connection (showing an error to unlicensed leads), and Claude Data dashboards do not refresh on a background schedule.",
        "B": "Live sharing restricts viewers to the dashboard's existing queries (only editors can change queries), and omitting the Doc's link creates duplicate Docs every Monday.",
        "C": "Normal sharing never lends the creator's Salesforce token, and omitting the artifact URL causes each scheduled run to create a new artifact."
      },
      "full_justification": "Option D is correct because beta live sharing exposes only pre-audited chart query results to unlicensed viewers while passing the existing Doc's URL ensures scheduled runs update in place. Option A, Option B, and Option C misstate sharing permissions, query mutability, and artifact link persistence.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 13,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Claude Whiteboards Behavior vs. ChatGPT Site Tools",
      "question": "During a product-strategy workshop on a paid Claude plan, a team uses a Claude Whiteboard to brainstorm workflow changes, asks Claude \"what is missing?\", and later uses ChatGPT Desktop to collaborate on a Miro board in the browser. Which operational rules govern Claude Whiteboards and ChatGPT's whiteboard workflow?",
      "options": {
        "A": "Claude's added ideas appear identical to human notes, Whiteboards ignore external apps, and ChatGPT uses site tools",
        "B": "Claude highlights its added ideas in a distinct color, pulls live Drive records automatically, and uses Sites for Miro",
        "C": "Claude's added ideas appear identical to human notes, Whiteboards read Drive folders live, and ChatGPT uses Sites",
        "D": "Claude highlights its added ideas in a distinct color, Whiteboards ignore external apps, and ChatGPT uses site tools"
      },
      "correct": "A",
      "explanation": "Option A succeeds because on a Claude Whiteboard, ideas Claude adds look just like your team's ideas (requiring you to check each one), Claude uses only what is on the board without looking in your other apps, and because ChatGPT has no built-in whiteboard yet, you open a whiteboard website in ChatGPT Desktop's browser and use site tools (with permission).",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "Whiteboard",
        "source_file": "build something.md",
        "core_concept": "Claude's added ideas look just like team ideas; Claude uses only what is on the board (no external apps); ChatGPT has no built-in board yet and uses site tools on external whiteboard websites."
      },
      "why_incorrect": {
        "B": "Claude does not visually color-code its ideas differently on the board, Whiteboards cannot read external apps like Drive, and ChatGPT Sites creates web pages rather than operating Miro.",
        "C": "Whiteboards do not look in external apps like Drive, and ChatGPT uses site tools (not ChatGPT Sites) to interact with third-party whiteboard websites.",
        "D": "Claude's added ideas look identical to your team's ideas rather than appearing in a distinct highlight color."
      },
      "full_justification": "Option A is correct because Claude Whiteboards blend AI suggestions seamlessly with human notes, operate strictly on board-local content, and contrast with ChatGPT's lack of a native board (requiring browser site tools). Option B, Option C, and Option D each misstate visual attribution, external app access, or site tools vs. Sites.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 14,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Cross-Deliverable Reconciliation in Brightline's Capstone",
      "question": "An operations analyst completes Brightline's multi-deliverable payment-run exercise\u2014producing an Invoice Sheet ($14,439.10 total; $6,960.35 pay total), a one-page Doc for Dave, and a three-slide presentation built from the Doc\u2014and runs a pre-submission consistency audit. Which cross-deliverable alignment standard must pass before the package is considered complete?",
      "options": {
        "A": "The Sheet displays $14,439.10, the Doc shows only the $6,960.35 pay total, and slides round figures to $14.4k",
        "B": "The slides are generated directly from the Sheet's raw CSV rows, and the Doc omits the two ask invoices for brevity",
        "C": "All three deliverables show $14,439.10 and the two ask invoices, Sheet and Doc share $6,960.35, and slides match unrounded",
        "D": "All three deliverables display four ask invoices (splitting Midwest Packaging), and the Sheet omits formula totals"
      },
      "correct": "C",
      "explanation": "Option C succeeds because Brightline's completion standard requires all three deliverables to agree: all six invoices total $14,439.10 and the two 'ask' invoices (County Freight 5208 and Maple Paper MPL-1187) appear in all three, the Sheet and Doc for Dave share the $6,960.35 'pay' total, and the slides (built from the Doc) match every number in the Doc without rounding.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "One job, three deliverables",
        "source_file": "build something.md",
        "core_concept": "You are done when: all three show $14,439.10 total and the two ask invoices; Sheet and Doc share $6,960.35 pay total; slides are built from the Doc and match unrounded."
      },
      "why_incorrect": {
        "A": "Both the Doc and the slides must show the $14,439.10 total of all six invoices, and slide numbers must never be rounded.",
        "B": "Step 3 explicitly builds the slides from the Doc for Dave (not the Sheet), and the Doc must explain each ask invoice.",
        "D": "Rule 2 checks each invoice on its own (Midwest Packaging's two invoices are each under $5,000.00 and therefore marked pay), and the Sheet must include both totals."
      },
      "full_justification": "Option C is correct because all three artifacts must reconcile on the $14,439.10 grand total and the two ask items, while Sheet and Doc share the $6,960.35 pay total and slides reflect unrounded Doc figures. Option A, Option B, and Option D violate explicit exercise rules.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 15,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Strict Source Attribution & Avoiding Unverified Claims",
      "question": "While auditing a Claude-generated one-page payment memo for Dave, an analyst finds two sentences: \"County Freight 5208 ($6,420.00) is due September 25 and requires Dave's approval,\" and \"Maple Paper MPL-1187 is marked ask because the September 14 bank-change email is a fraudulent scam\". Which two source-attribution errors invalidate this memo under Brightline's strict record-checking rules?",
      "options": {
        "A": "Note 1 assigns approval to the payment officer rather than Dave, and Note 2 dates the Maple Paper email September 18",
        "B": "Maple Paper MPL-1187 should be marked pay under Rule 4, and Dave must call Maple Paper personally per Note 1",
        "C": "The September 14 email date is absent from the records, and Midwest Packaging's combined invoices exceed $5,000.00",
        "D": "Both the September 25 due date and calling the email a scam exceed the records, since only a phone call verifies it"
      },
      "correct": "D",
      "explanation": "Option D succeeds because under Brightline's source-attribution rules (Check 3 and Common Mistakes), the records give no due dates for any invoice (making 'due September 25' unsupported), and the records cannot prove the Maple Paper email is fake/a scam\u2014only calling Maple Paper on the phone number already on file can verify it.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "One job, three deliverables",
        "source_file": "build something.md",
        "core_concept": "Check your answers (Common mistakes): any due date has no source in the records, and the doc must not call the Maple Paper email fake because only a phone call can prove that."
      },
      "why_incorrect": {
        "A": "Note 1 explicitly assigns approval of invoices over $5,000.00 to Dave (the controller), and Note 2 explicitly dates the Maple Paper email Monday, September 14.",
        "B": "Maple Paper MPL-1187 must be marked ask under Rule 3 due to the bank-change email, and Rule 3 states 'a person' calls on the number on file rather than naming Dave.",
        "C": "Note 2 explicitly includes the September 14 date, and Rule 2 evaluates each invoice individually rather than summing Midwest Packaging's two invoices."
      },
      "full_justification": "Option D is correct because both the invented September 25 due date and the definitive claim that the email is a scam go beyond the six rows, two notes, six rules, and opening message. Option A, Option B, and Option C each misstate explicit facts from the notes or rules.",
      "category": "Claude 2.0 Features & Tooling"
    },
    {
      "id": 16,
      "chapter": "Claude and ChatGPT 2.0",
      "chapterId": 1,
      "section": "Build Something",
      "sourceFile": "build something.md",
      "concept": "Unattended Cloud Scheduled Task Storage & Connector Scoping",
      "question": "An accounting manager drafts instructions for a recurring Friday 9 a.m. scheduled task to prepare Brightline's weekly payment run on a borrowed desk in the cloud without human intervention at run time. Which file-location and connector-permission architecture ensures the unattended task runs reliably and safely?",
      "options": {
        "A": "Store invoices in a local desktop folder, update the linked sheet by URL, and scope connectors to read/write storage",
        "B": "Store invoices in cloud-reachable storage like Google Drive, update the linked sheet, and block payment apps",
        "C": "Store invoices in Google Drive, omit the sheet's link so each Friday archives a fresh copy, and block payment apps",
        "D": "Keep invoices in the prior session's VM directory, update the linked sheet by URL, and limit connectors to read-only"
      },
      "correct": "B",
      "explanation": "Option B succeeds because a scheduled task running on a borrowed desk in the cloud cannot reach a local laptop folder (so invoices must live in cloud-reachable storage like Google Drive), must include the existing sheet's link ('update this sheet, do not make a new one'), and must connect only the apps needed to read invoices and update the sheet\u2014never any app that can send payments.",
      "source_reference": {
        "chapter": "F00F: Build Something",
        "sub_section": "One job, three deliverables",
        "source_file": "build something.md",
        "core_concept": "Going further answers (Part C): invoices must be in cloud-reachable storage like Google Drive, update the linked sheet rather than making a new one, and never connect payment apps."
      },
      "why_incorrect": {
        "A": "Includes updating the linked sheet and scoping storage connectors, but a cloud borrowed desk cannot reach a local desktop folder when the laptop is off or app is closed.",
        "C": "Includes Google Drive storage and blocking payment apps, but omitting the existing sheet's link causes each fresh scheduled session to create a duplicate sheet instead of updating the standing one.",
        "D": "Temporary VM directories are wiped when sessions end, and read-only connectors would prevent the task from updating the target sheet."
      },
      "full_justification": "Option B is correct because unattended cloud scheduled tasks require cloud-accessible source files, an explicit artifact URL to update in place, and strict exclusion of payment-capable connectors. Option A fails on local folder reachability. Option C fails on artifact link continuity. Option D fails on ephemeral VM storage and read-only write blocking.",
      "category": "Claude 2.0 Features & Tooling"
    }
  ]
};
