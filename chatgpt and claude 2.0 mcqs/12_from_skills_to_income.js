// Section 12: From Skills to Income
// Panaversity Certified Associate Foundations (PCAO-F V2 Part II) & CCAO-F
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["12_from_skills_to_income"] = {
  "sectionId": "12_from_skills_to_income",
  "chapterId": 5,
  "chapterTitle": "From Skills to Income",
  "title": "Section 12: From Skills to Income",
  "totalQuestions": 12,
  "questions": [
    {
      "id": 1,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "Four Earning Routes & FDE Milestone",
      "question": "A chartered accountant who recently earned an AI Worker certification wants to transition into a Forward Deployed Engineer (FDE) role embedding inside enterprise finance departments rather than remaining in traditional internal accounting or launching a standalone SaaS product. Which operational requirement and initial milestone define success in this route?",
      "options": {
        "A": "Publishing a self-serve subscription connector to a public directory before interviewing any client teams",
        "B": "Mastering the client's internal operations to automate a high-value step and shipping one trusted team pilot",
        "C": "Relying solely on the passed certification exam to secure hourly billing with zero portfolio or pilot evidence",
        "D": "Building a generic multi-tenant product that operates without ever observing the client's internal workflow"
      },
      "correct": "B",
      "explanation": "Option B succeeds because 'What each route needs first' states that a Forward Deployed Engineer (FDE) works inside someone else's business, learns how the client's work really runs, finds the step worth automating, and ships a small pilot their team trusts.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "Four ways to earn & What each route needs first",
        "source_file": "from skill to income.md",
        "core_concept": "An FDE embeds inside a client's operations, learns the business process, and ships a trusted pilot."
      },
      "why_incorrect": {
        "A": "Publishing a public subscription connector describes the Founder with a product route rather than an embedded FDE engagement.",
        "C": "A certification gets an application read, but clients and employers pay for demonstrated results (a trusted pilot for an FDE; portfolio work for a job).",
        "D": "Building a generic product without observing client operations contradicts the core FDE requirement of fitting how that client works."
      },
      "full_justification": "Option B is correct (A: 14w | B: 16w | C: 14w | D: 14w) because embedded FDEs combine platform skill with deep understanding of client operations to deliver a trusted pilot. Options A, C, and D describe founder products, unverified credential reliance, or generic off-the-shelf software.",
      "category": "From Skills to Income"
    },
    {
      "id": 2,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "Founder Team Composition & Scaling Leverage",
      "question": "A veteran customs-compliance specialist with deep regulatory expertise but zero backend coding experience wants to launch a commercial AI product used by hundreds of importers without the specialist personally joining every client engagement. How should the specialist structure the founding team and product distribution?",
      "options": {
        "A": "Deliver every customs audit manually on an hourly retainer while keeping all methods inside private chats",
        "B": "Require each importer to hire a dedicated Forward Deployed Engineer to rebuild the workflow from scratch",
        "C": "Host a standalone custom web chat interface from scratch and train a proprietary foundation model first",
        "D": "Partner with an AI builder to ship one maintained AI-assistant product serving many customers at scale"
      },
      "correct": "D",
      "explanation": "Option D succeeds because 'What each route needs first' and 'Where the book teaches this' explain that a founder turns expertise into a product many customers use without the founder in the room by pairing a domain expert with an AI builder on existing AI assistants, removing pre-customer interface hosting costs.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "What each route needs first & Where the book teaches this",
        "source_file": "from skill to income.md",
        "core_concept": "A domain expert and an AI builder can pair to launch one maintained AI-assistant product that serves many customers without the founder present."
      },
      "why_incorrect": {
        "A": "Delivering audits manually on an hourly retainer describes Client work, not a scalable product used without the founder in the room.",
        "B": "Requiring per-client custom rebuilds by an FDE defeats the scalability of a single maintained product.",
        "C": "Hosting a custom chat UI from scratch and training a foundation model ignores the cost advantage of selling through existing AI apps."
      },
      "full_justification": "Option D is correct (A: 15w | B: 15w | C: 15w | D: 15w) because pairing domain expertise with an AI builder on existing AI-assistant platforms scales one maintained product across many customers. Options A, B, and C describe manual service delivery, custom consulting, or unnecessary infrastructure overhead.",
      "category": "From Skills to Income"
    },
    {
      "id": 3,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "The 'Storefront vs. Cash Register' Architecture (Charging on the MCP Connector)",
      "question": "A startup founder packages a proprietary clinical-trial auditing workflow as a downloadable Skill and Plugin for Claude and ChatGPT, placing a license check inside the skill's Markdown instructions so unpaid users are told not to run it. Why will this monetization design fail, and where must the paywall live instead?",
      "options": {
        "A": "Client-side skills and plugins can be read and edited; authentication and proprietary value belong on an MCP server",
        "B": "Skills delivered over MCP cannot be read by users, so paywalls must be written inside the Artifact's HTML code",
        "C": "Plugins automatically process credit card payments inside the chat window without needing an external server",
        "D": "AI assistants refuse to load any skill or plugin unless the vendor's directory charges a monthly subscription"
      },
      "correct": "A",
      "explanation": "Option A succeeds because 'The idea in one line' and 'Why the value stays on your server' explain that anything running on the customer's side (skills, plugins, MCP App HTML screens) can be read, copied, and stripped of paywalls\u2014so you charge on the MCP connector server, which checks payment status before returning your knowledge, method, or data.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "The idea in one line & Why the value stays on your server",
        "source_file": "from skill to income.md",
        "core_concept": "Client-side skills, plugins, and screens are readable and copyable; subscription checks and proprietary value must live on your MCP server."
      },
      "why_incorrect": {
        "B": "Skills sent through Skills over MCP can still be read once loaded by the AI app, and Artifact HTML/code is client-readable.",
        "C": "Plugins and apps never handle card details; customers pay on your website and your server records who has paid.",
        "D": "AI apps load standard skills and plugins freely; monetization is enforced by your own server checking subscription status."
      },
      "full_justification": "Option A is correct (A: 16w | B: 17w | C: 15w | D: 16w) because client-side files cannot enforce paywalls, requiring server-side authentication and gated value delivery. Options B, C, and D misstate MCP skill readability, in-chat payment handling, and directory billing.",
      "category": "From Skills to Income"
    },
    {
      "id": 4,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "UPGRADED",
      "concept": "Incremental Payload Metering & Anti-Scraping Hygiene",
      "question": "An education consultancy sells access to a server-backed MCP connector that delivers proprietary executive-coaching rubrics and diagnostic lessons to paying subscribers inside their AI assistant. Even though non-payers are blocked at the server, how can a single paying subscriber still exfiltrate the firm's entire curriculum, and what architectural control mitigates this risk?",
      "options": {
        "A": "By inspecting the plugin's local manifest; encrypt the prompt text so the AI model cannot read the lesson",
        "B": "By copying the MCP App's HTML table layout; disable all text responses so only graphical buttons render",
        "C": "By requesting all lessons sequentially; meter delivery one step at a time and cap per-user request volume",
        "D": "By bypassing OAuth sign-in on repeat calls; rely on a single static subscription check at initial plugin install"
      },
      "correct": "C",
      "explanation": "Option C succeeds because 'Why the value stays on your server' warns that while a server stops casual copying, a paying customer can read everything sent to them and collect it piece by piece\u2014so the server must send only what each step needs (one lesson, rubric, or result at a time) and limit how much one customer can request.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "Why the value stays on your server",
        "source_file": "from skill to income.md",
        "core_concept": "Protect proprietary material from subscriber scraping by metering responses one step at a time and capping per-user request volume."
      },
      "why_incorrect": {
        "A": "The AI model and user must be able to read the returned lesson for the assistant to reason over it; protection comes from metered delivery and request caps.",
        "B": "Disabling text responses breaks non-screen AI apps and does not prevent a paying subscriber from querying each lesson sequentially.",
        "D": "Your server checks the user's OAuth token on every tool call (not just once at install), and subscriber exfiltration occurs through legitimate paid calls."
      },
      "full_justification": "Option C is correct (A: 17w | B: 16w | C: 16w | D: 17w) because paying users can systematically collect everything your server returns unless payloads are metered step-by-step with volume limits. Options A, B, and D break model reasoning, break text fallbacks, or misstate per-call OAuth checks.",
      "category": "From Skills to Income"
    },
    {
      "id": 5,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "Reasoning-Cost Allocation & The IP-Secrecy Trade-Off",
      "question": "A boutique risk-advisory firm is building a paid AI-assistant product whose core competitive moat is a proprietary credit-scoring formula that must never be exposed to customers, even though the scoring step requires LLM reasoning over financial ratios. Which architectural and billing consequence follows from keeping that scoring method completely secret?",
      "options": {
        "A": "The firm can send the formula inside a Claude Artifact so the customer's plan pays for all scoring compute",
        "B": "The firm's server must execute the scoring work itself and return only the result, paying its own model bill",
        "C": "The firm can deliver the formula via Skills over MCP while blocking the customer's AI app from reading it",
        "D": "The firm avoids both hosting costs and inference bills because MCP servers run reasoning inside the browser"
      },
      "correct": "B",
      "explanation": "Option B succeeds because 'Who pays for what' states that if material is too valuable to send to the customer at all (such as a proprietary scoring method), your server must perform that work itself and return only the answer\u2014and if that work needs an AI model, you pay for it ('Keeping something completely secret and having the customer pay for its reasoning do not go together').",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "Why the value stays on your server (Who pays for what)",
        "source_file": "from skill to income.md",
        "core_concept": "Keeping proprietary logic completely secret requires executing its LLM reasoning on your own server at your own compute cost."
      },
      "why_incorrect": {
        "A": "Sending the formula inside a Claude Artifact exposes client-side code/instructions so the customer can read and copy it.",
        "C": "Once the AI app loads a skill sent through Skills over MCP, the customer can read it.",
        "D": "MCP servers run on your own backend infrastructure (incurring hosting costs), and server-side LLM calls are billed to the creator."
      },
      "full_justification": "Option B is correct (A: 17w | B: 18w | C: 17w | D: 15w) because strict IP secrecy precludes offloading LLM reasoning onto the customer's plan. Options A, C, and D expose client-readable code/skills or misstate where MCP servers execute.",
      "category": "From Skills to Income"
    },
    {
      "id": 6,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "Customer Quota Exhaustion & Dual-Billing Friction",
      "question": "A B2B product founder builds a guided contract-review tool using a Claude Artifact that calls Claude's built-in AI repeatedly across multi-page document uploads, charging individual consultants a $49/month subscription on the founder's website. What commercial friction and customer-experience risk arises from this design?",
      "options": {
        "A": "Anthropic bills the founder's corporate card directly whenever external subscribers run the shared Artifact",
        "B": "Subscribers pay zero AI subscription fees because shared Artifacts unlock unlimited free Claude usage",
        "C": "Vendors automatically refund the customer's AI subscription whenever an unoptimized Artifact hits rate limits",
        "D": "Customers pay twice and blame the product founder if poorly designed calls exhaust their own AI plan limits"
      },
      "correct": "D",
      "explanation": "Option D succeeds because 'Who pays for what' explains that when someone uses an Artifact calling Claude's built-in AI, usage counts against the user's own plan\u2014meaning the customer pays twice (once for their AI plan and once for your product) and will blame you, not the AI vendor, if a careless design burns through their usage limits.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "Why the value stays on your server (Who pays for what)",
        "source_file": "from skill to income.md",
        "core_concept": "Client-side Artifact AI calls draw from the customer's own plan limits, creating dual-billing friction and reputational risk if quota is exhausted."
      },
      "why_incorrect": {
        "A": "Built-in AI usage inside a Claude Artifact counts against the individual user's plan, not the creator's corporate card.",
        "B": "Shared Artifacts do not grant free unlimited Claude usage; each user runs on their own plan limits.",
        "C": "AI vendors do not refund customer subscriptions when a third-party Artifact consumes their usage quota."
      },
      "full_justification": "Option D is correct (A: 14w | B: 15w | C: 14w | D: 16w) because user-billed Artifact inference creates dual-payment sensitivity and quota-exhaustion blame for the product creator. Options A, B, and C misstate billing attribution and vendor refund policies.",
      "category": "From Skills to Income"
    },
    {
      "id": 7,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "UPGRADED",
      "concept": "Conversational Connectors/Plugins vs. Guided MCP Apps & Artifacts",
      "question": "A software founder sells a tax-audit MCP server to mid-sized accounting practices whose junior staff struggle to write effective conversational prompts and need a structured table with an Approve button next to each flagged invoice across Claude, ChatGPT, and Microsoft 365 Copilot. Which interface architecture satisfies this cross-platform requirement using the existing backend server?",
      "options": {
        "A": "Distilling the entire workflow into a plain-text Skill file without interactive screen components",
        "B": "Building a Claude Artifact, which runs natively inside ChatGPT and Microsoft 365 Copilot chats",
        "C": "Adding an MCP App screen to the connector so the server renders interactive UI across those apps",
        "D": "Sharing a connected Claude Artifact via a public link so external Copilot users can run connectors"
      },
      "correct": "C",
      "explanation": "Option C succeeds because 'Two ways customers use your product' and 'One screen, many AI apps' explain that an MCP App lets your connector server show interactive screens (tables, buttons) inside any AI app supporting the MCP Apps standard\u2014including Claude, ChatGPT, and Microsoft 365 Copilot\u2014by adding screens onto the same backend server.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "Two ways customers use your product & One screen, many AI apps",
        "source_file": "from skill to income.md",
        "core_concept": "MCP Apps attach portable interactive UI screens directly to an MCP connector server across Claude, ChatGPT, and Microsoft 365 Copilot."
      },
      "why_incorrect": {
        "A": "Plain-text skills rely on conversation and require users to know what to ask rather than providing guided tables and buttons.",
        "B": "Claude Artifacts work on Claude only, not inside ChatGPT or Microsoft 365 Copilot.",
        "D": "Artifacts using Claude or connected apps cannot be shared via 'anyone with the link' on any plan, and work on Claude only."
      },
      "full_justification": "Option C is correct (A: 13w | B: 14w | C: 15w | D: 15w) because MCP Apps deliver portable interactive UI from the existing MCP server across all three AI clients. Options A, B, and D rely on text-only skills or Claude-only Artifacts.",
      "category": "From Skills to Income"
    },
    {
      "id": 8,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "Organizational Onboarding & Enterprise-Managed Authentication",
      "question": "A product team launches a guided MCP App for non-technical HR coordinators at a 300-person enterprise on Claude Team, only to see trial adoption stall because employees either cannot see the connector in their menu or get blocked at sign-in. Which organizational setup requirement and enterprise authentication feature resolve this onboarding bottleneck?",
      "options": {
        "A": "An organization owner must enable connectors first, and enterprise-managed auth lets an admin authorize once",
        "B": "Individual employees can bypass organization owner controls by installing plugins on personal Free accounts",
        "C": "Enterprise workspaces automatically enable every third-party custom connector without administrator action",
        "D": "Shared credentials work only when each non-technical coordinator manually configures local OAuth servers"
      },
      "correct": "A",
      "explanation": "Option A succeeds because 'Two ways customers use your product' notes that in a company, an owner must first turn on connectors for the organization, and on Claude Team and Enterprise an administrator can authorize a connector once for everyone through enterprise-managed authentication (if your connector supports it).",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "Two ways customers use your product (Setup is an important obstacle to adoption)",
        "source_file": "from skill to income.md",
        "core_concept": "Enterprise connector adoption requires organization-owner enablement and can be streamlined via enterprise-managed authentication on Claude Team/Enterprise."
      },
      "why_incorrect": {
        "B": "Plugins require a paid plan on Claude, and personal accounts do not bypass enterprise organization governance.",
        "C": "Organizational owners must explicitly enable connectors for the organization first.",
        "D": "Enterprise-managed authentication eliminates per-user setup friction rather than requiring employees to configure local OAuth servers."
      },
      "full_justification": "Option A is correct (A: 16w | B: 15w | C: 13w | D: 15w) because owner enablement and enterprise-managed authentication remove organizational onboarding friction. Options B, C, and D misstate free-tier plugin support, default enterprise enablement, and OAuth setup.",
      "category": "From Skills to Income"
    },
    {
      "id": 9,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "MCP Apps Portability vs. window.openai Lock-In & Text Fallbacks",
      "question": "An engineering team builds an interactive MCP App for its commercial compliance server and plans to sell it across Claude, ChatGPT, VS Code GitHub Copilot, and terminal-based MCP clients that display only text. Which two implementation practices ensure cross-client portability and graceful degradation?",
      "options": {
        "A": "Rely heavily on window.openai extensions for core layout, and omit text outputs to save token bandwidth",
        "B": "Build separate incompatible servers per vendor, and force text-only clients to open external browser windows",
        "C": "Embed Stripe checkout buttons directly inside the screen HTML, and disable OAuth checks on text-only clients",
        "D": "Build to the open MCP Apps standard first before window.openai, and return useful text from every tool"
      },
      "correct": "D",
      "explanation": "Option D succeeds because 'One screen, many AI apps' instructs builders to build to the open MCP Apps standard first (adding ChatGPT-only window.openai extras only where needed) and to ensure every tool still returns useful text so customers whose AI app cannot render screens still receive a usable result.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "One screen, many AI apps",
        "source_file": "from skill to income.md",
        "core_concept": "Build interactive UI to the open MCP Apps standard first and include useful text outputs for non-screen MCP clients."
      },
      "why_incorrect": {
        "A": "Depending on window.openai breaks portability to Claude and Copilot, and omitting text breaks non-screen AI clients.",
        "B": "One MCP server and one standard MCP App screen run across Claude, ChatGPT, VS Code Copilot, and Microsoft 365 Copilot without rebuilding per vendor.",
        "C": "Payment checkouts must stay off the screen on your website, and OAuth token validation is mandatory on every tool call."
      },
      "full_justification": "Option D is correct (A: 15w | B: 15w | C: 15w | D: 16w) because standard-first MCP Apps design and text fallbacks preserve cross-client compatibility. Options A, B, and C create vendor lock-in, duplicate servers, or policy/security violations.",
      "category": "From Skills to Income"
    },
    {
      "id": 10,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "Claude Directory Policies & Artifact External Sharing Constraints",
      "question": "A startup founder prepares to distribute a paid Claude product to both individual free-tier users and external enterprise buyers, considering either publishing a connector in Anthropic's directory or sharing a Claude Artifact that calls Claude and connected apps. Which platform constraint governs both distribution paths?",
      "options": {
        "A": "Free-tier users can install unlimited custom plugins, and connected Artifacts support public 'anyone with the link' URLs",
        "B": "Directory connectors cannot serve ads or move money unapproved, and connected Artifacts block public link sharing",
        "C": "External email invitees on Team plans can freely run Claude and connectors inside an invited Artifact",
        "D": "Anthropic's directory requires every listed connector to embed an in-chat credit card checkout widget"
      },
      "correct": "B",
      "explanation": "Option B succeeds because 'On Claude' notes that Anthropic's connector directory policy excludes connectors that serve ads or move money without a person approving, and an Artifact that uses Claude or connected apps cannot be shared with 'anyone with the link' on any plan.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "How it works on Claude and on OpenAI (On Claude)",
        "source_file": "from skill to income.md",
        "core_concept": "Anthropic's directory bars ad-serving or unapproved payment connectors, and connected Artifacts prohibit public link sharing."
      },
      "why_incorrect": {
        "A": "Free-tier users can add directory connectors and one custom connector, while plugins require a paid plan; connected Artifacts never allow public link sharing.",
        "C": "External email invitees on Team/Enterprise can open the Artifact (if allowed by an owner), but Claude and connectors do not work for them.",
        "D": "Anthropic describes no checkout inside Claude; payment happens on your own website."
      },
      "full_justification": "Option B is correct (A: 16w | B: 16w | C: 15w | D: 14w) because Anthropic enforces strict directory content/payment rules and blocks public link sharing on connected Artifacts. Options A, C, and D misstate free-tier plugin support, external invitee permissions, and in-chat checkouts.",
      "category": "From Skills to Income"
    },
    {
      "id": 11,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "KEPT AS-IS",
      "concept": "OpenAI ChatGPT App Distribution, OAuth 2.1 & Directory Review Rules",
      "question": "An AI product founder submits an OAuth 2.1\u2013authenticated MCP app plugin to ChatGPT's public directory so individual subscribers can connect their paid website accounts, while also pitching private deployment to an Enterprise workspace. Which security, workspace distribution, and directory review rules apply on OpenAI's platform?",
      "options": {
        "A": "The server validates OAuth 2.1 tokens per call, admins publish privately, and review needs a demo login without signup",
        "B": "ChatGPT caches authentication once at install time, and directory reviewers require a live credit card signup flow",
        "C": "Enterprise workspaces enable all third-party plugins by default, and unverified individuals can submit public plugins",
        "D": "OAuth 2.1 validation happens inside the client UI only, while ChatGPT reviewers create new accounts during testing"
      },
      "correct": "A",
      "explanation": "Option A succeeds because 'How it works on Claude and on OpenAI' ('On OpenAI') explains that ChatGPT sends an OAuth 2.1 token with every call for server-side verification, Business/Enterprise/Edu admins publish custom MCP servers privately to their workspace, and public directory submissions require verified individual/organization status plus a demo account with no extra sign-up step during review.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "How it works on Claude and on OpenAI (On OpenAI)",
        "source_file": "from skill to income.md",
        "core_concept": "OpenAI MCP apps validate OAuth 2.1 tokens per tool call, publish privately via workspace admins, and require demo credentials without extra sign-up during directory review."
      },
      "why_incorrect": {
        "B": "Your server must check the OAuth 2.1 token on every call (not once at install), and plugins requiring an extra sign-up step during review are rejected.",
        "C": "New Enterprise and Edu workspaces start with a selected set of apps turned on (not all third-party plugins by default), and public submission requires a verified individual or organization.",
        "D": "Token validation and subscription checks belong on your server (never client-side UI), and reviewers use a supplied demo account rather than creating new accounts."
      },
      "full_justification": "Option A is correct (A: 17w | B: 17w | C: 15w | D: 16w) because per-call OAuth 2.1 verification, admin-controlled workspace publishing, and frictionless demo-account review govern OpenAI app distribution. Options B, C, and D misstate token caching, workspace defaults, and review sign-up policies.",
      "category": "From Skills to Income"
    },
    {
      "id": 12,
      "chapter": "From Skills to Income",
      "chapterId": 5,
      "section": "From Skills to Income",
      "sourceFile": "from skill to income.md",
      "status": "UPGRADED",
      "concept": "Cross-Platform Checkout & Subscription Compliance Rules",
      "question": "A SaaS founder monetizing a cross-platform MCP server across both Claude and ChatGPT designs the error response returned when a signed-in user lacks an active paid subscription on the founder's website. Which billing rule and error-response design complies with both vendors' policies?",
      "options": {
        "A": "Return an in-chat Stripe checkout button in Claude and display a ChatGPT-specific surcharge fee inside ChatGPT",
        "B": "Render a full subscription pricing comparison table inside ChatGPT with a direct one-click upgrade checkout link",
        "C": "Keep payment on your website, forbid digital checkouts in ChatGPT, and link unpaid users to a neutral plans page",
        "D": "Sell digital subscription credits inside ChatGPT while collecting subscription fees through Claude interactive screens"
      },
      "correct": "C",
      "explanation": "Option C succeeds because 'Charging is the biggest difference' and 'Design for both' specify that neither platform supports third-party in-app digital/subscription checkouts (ChatGPT allows physical goods only and forbids showing plans, promoting upgrades, or adding ChatGPT-only fees)\u2014so returning a short message linking to a neutral plans page on your website works compliantly on both platforms.",
      "source_reference": {
        "chapter": "F4: From Skills to Income",
        "sub_section": "How it works on Claude and on OpenAI (Charging is the biggest difference & Design for both)",
        "source_file": "from skill to income.md",
        "core_concept": "Subscriptions must be purchased externally on the creator's website, with unpaid in-app responses linking to a neutral plans page rather than a checkout."
      },
      "why_incorrect": {
        "A": "Neither Claude nor ChatGPT supports third-party in-chat subscription checkouts, and OpenAI explicitly prohibits adding a fee that applies only in ChatGPT.",
        "B": "OpenAI's plugin guidelines prohibit displaying subscription plans inside the app, promoting upgrades, or linking directly to a checkout page.",
        "D": "OpenAI prohibits selling digital subscriptions or credits inside ChatGPT (physical goods only), and Claude does not support purchases through third-party interactive connectors."
      },
      "full_justification": "Option C is correct (A: 16w | B: 16w | C: 18w | D: 14w) because keeping payment off-platform and linking unpaid users to a neutral plans page satisfies both Anthropic's and OpenAI's commerce rules. Options A, B, and D violate third-party checkout bans, upgrade promotion restrictions, or platform fee parity rules.",
      "category": "From Skills to Income"
    }
  ]
};
