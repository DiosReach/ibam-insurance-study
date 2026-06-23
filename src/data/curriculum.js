// 15-Chapter Master Study Plan — IBAC Fundamentals of Insurance (Manitoba)
// Aligned to the IBAC textbook Table of Contents.
// Sources verified June 2026:
//   • Insurance Act of Manitoba (C.C.S.M. c.I40) — Statutory Conditions
//   • Manitoba Public Insurance Corporation Act (C.C.S.M. c.P215)
//   • MPI 2026 Guide to Autopac (effective April 1, 2026)
//   • Insurance Council of Manitoba (ICM) licensing & conduct framework

export const chapters = [
  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 1,
    title: 'Introduction to General Insurance',
    category: 'Foundations',
    estMinutes: 90,
    objective:
      'Understand the purpose of insurance, the nature of risk, and how the industry transfers and spreads loss exposures across a large pool of similar insureds.',
    summary: [
      'INSURANCE is a financial mechanism that allows the SPREAD OF RISK across a large group of similar exposures. Each insured contributes a relatively small premium; the insurer pools those premiums and pays the (statistically predictable) losses suffered by the few. The main purpose of insurance is NOT to make people richer than they were before a loss, NOT to provide loans, and NOT (directly) to prevent losses — it is to transfer pure risk from the individual to a large risk-bearing pool. Loss reduction and loss prevention are valuable by-products, but not the core function tested on the exam.',
      'Insurance only addresses PURE RISK — situations where the outcome is either loss or no loss. SPECULATIVE risk (loss, no loss, OR gain) — gambling, stock-market investing, business ventures — is never insurable. A risk must also be definite, accidental, large enough to matter, calculable, drawn from a large group of similar exposures, and not catastrophic to the insurer in order to be insurable. The Law of Large Numbers is the statistical backbone of premium pricing: as the size of a similar exposure group grows, actual losses converge on expected losses, making premiums calculable.',
      'Be precise about three closely-related terms. A PERIL is the CAUSE of a loss (fire, theft, hail, collision). A HAZARD is a condition that increases the likelihood or severity of a loss. Hazards come in three flavours: PHYSICAL (tangible — icy stairs, faulty wiring), MORAL (intentional dishonesty — arson, inflated claims), and MORALE (mere carelessness because insurance exists — leaving keys in the ignition). Underwriters screen prior claims history and credit largely to identify MORAL hazards; physical inspections look for physical hazards.',
      'Insurers come in many forms: STOCK companies (owned by shareholders), MUTUALS (owned by policyholders), RECIPROCALS (members exchanging contracts via an attorney-in-fact), CROWN corporations (MPI, SGI, ICBC), and LLOYD\'S of London (a marketplace of syndicates — NOT a single insurer). Insurance reaches consumers through BROKERS (independent intermediaries representing the CLIENT), AGENTS (representing ONE insurer), direct writers, and bancassurance. REINSURANCE is insurance for insurers — it spreads catastrophic risks across the global market and lets primary insurers write larger policies than their own capital would allow.'
    ],
    secrets: [
      'When the exam asks the "main purpose" of insurance, the correct answer is THE SPREAD OF RISK — not loss reduction, not investment, not employment.',
      'Underwriters use claims history and credit checks chiefly to detect MORAL hazard (not physical hazard, which needs an inspection).',
      'Lloyd\'s is a MARKETPLACE of syndicates — not an insurance company.',
      'A BROKER represents the CLIENT; an AGENT represents the INSURER. This distinction shapes their duties and is tested repeatedly.',
      'Speculative risk (gambling, investing) is never insurable — only pure risk.'
    ],
    flashcards: [
      { term: 'Pure Risk',          definition: 'A risk with only two possible outcomes — loss or no loss. The only kind that is insurable.' },
      { term: 'Speculative Risk',   definition: 'A risk with three possible outcomes — loss, no loss, or gain. Never insurable.' },
      { term: 'Peril',              definition: 'The CAUSE of a loss (e.g., fire, theft, collision).' },
      { term: 'Hazard',             definition: 'A condition that increases the chance or severity of a loss.' },
      { term: 'Physical Hazard',    definition: 'A tangible condition increasing loss likelihood (e.g., icy stairs, faulty wiring).' },
      { term: 'Moral Hazard',       definition: 'Intentional dishonesty by the insured (e.g., arson for profit, inflated claims).' },
      { term: 'Morale Hazard',      definition: 'Carelessness or indifference because insurance exists (e.g., leaving keys in the car).' },
      { term: 'Law of Large Numbers', definition: 'The larger the pool of similar exposures, the more predictable actual losses become.' },
      { term: 'Spread of Risk',     definition: 'The MAIN purpose of insurance — many premiums cover the few who suffer loss.' },
      { term: 'Reinsurance',        definition: 'Insurance purchased by an insurer to transfer part of its risk to another insurer.' },
      { term: 'Broker vs Agent',    definition: 'Broker = independent intermediary representing the CLIENT. Agent = representative of ONE insurer.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 2,
    title: 'Insurance Contracts',
    category: 'Contract Law',
    estMinutes: 120,
    objective:
      'Identify the legal elements of every contract, the additional element unique to insurance, and the principles (indemnity, utmost good faith, insurable interest, subrogation, contribution) that govern claims.',
    summary: [
      'A valid contract requires FIVE elements: (1) Offer and Acceptance, (2) Consideration (exchange of something of value — premium for the insurer\'s promise to pay), (3) Legal Capacity of the parties, (4) Legal Object/Purpose, and (5) Genuine Intention. INSURANCE CONTRACTS require a sixth element unique to the line: INDEMNITY — payment limited to actual loss, no more, no less. This last element is what distinguishes a true insurance contract from a wager or pure investment.',
      'Insurance contracts carry distinctive characteristics. They are ALEATORY (the values exchanged are unequal and depend on chance — the insured may pay a small premium and collect a huge claim, or pay premium for years and never claim). They are CONTRACTS OF ADHESION (drafted by the insurer on a take-it-or-leave-it basis, so AMBIGUITIES are interpreted AGAINST the drafter and in favour of the insured). They are UNILATERAL (only the insurer makes a legally enforceable promise), CONDITIONAL (the insurer pays only if conditions like premium payment and proof of loss are met), and contracts of UTMOST GOOD FAITH (uberrimae fidei) — both parties must voluntarily disclose all MATERIAL facts.',
      'The difference between VOID and VOIDABLE contracts is heavily tested. A VOID contract was never legally valid — it is treated as if it had no effect from the very beginning (e.g., a contract without insurable interest, or one obtained by fraudulent misrepresentation of a material fact under Statutory Condition 1). A VOIDABLE contract is valid until one party chooses to rescind it — e.g., an insurance contract entered into by a minor may be voidable at the minor\'s option. Voidable contracts can be ratified or cancelled; void contracts cannot be saved.',
      'The four pillars of insurance principles are: INSURABLE INTEREST (the insured must stand to suffer a financial loss — required at TIME OF LOSS for property; at TIME OF ISSUE for life), INDEMNITY (restoration to pre-loss financial position, no profit), SUBROGATION (the insurer steps into the insured\'s shoes and pursues the at-fault third party after paying the claim), and CONTRIBUTION (when two or more policies cover the same loss, each insurer pays its proportionate share). Together these principles prevent overpayment, double recovery, and the use of insurance as a wager.'
    ],
    secrets: [
      'INDEMNITY is the legal element UNIQUE to insurance contracts — found nowhere else.',
      'VOID = invalid from inception (e.g., no insurable interest). VOIDABLE = valid until one party chooses to rescind (e.g., contract with a minor).',
      'Insurance is an ALEATORY contract — uneven exchange that depends on chance. This is legal in insurance only.',
      'Insurable interest in PROPERTY is required at TIME OF LOSS; in LIFE insurance, only at TIME OF ISSUE.',
      'Under Adhesion, AMBIGUITY in policy wording is interpreted AGAINST the insurer (the drafter).',
      'Subrogation is the legal process by which the insurer recovers from a third party AFTER paying its insured — not arbitration, restitution, or mediation.'
    ],
    flashcards: [
      { term: 'Consideration',        definition: 'Exchange of something of value — premium for the insurer\'s promise to pay covered losses.' },
      { term: 'Indemnity (element)',  definition: 'Element UNIQUE to insurance contracts — payment limited to actual loss; no profit allowed.' },
      { term: 'Aleatory Contract',    definition: 'A contract where values exchanged are unequal and depend on chance.' },
      { term: 'Contract of Adhesion', definition: 'Drafted by one party on a take-it-or-leave-it basis. Ambiguities interpreted against the drafter.' },
      { term: 'Utmost Good Faith',    definition: 'BOTH parties must voluntarily disclose all material facts (uberrimae fidei).' },
      { term: 'Material Fact',        definition: 'Information that would influence the insurer\'s decision to accept the risk or set the premium.' },
      { term: 'Void',                 definition: 'Invalid from inception — never legally enforceable.' },
      { term: 'Voidable',             definition: 'Valid until one party chooses to rescind (e.g., contracts with minors).' },
      { term: 'Insurable Interest',   definition: 'Financial stake in the subject matter such that the person would suffer loss if it is damaged.' },
      { term: 'Indemnity (principle)',definition: 'Restoring the insured to the same financial position as before the loss — no profit allowed.' },
      { term: 'Subrogation',          definition: 'The insurer\'s right to step into the insured\'s shoes to recover from a negligent third party.' },
      { term: 'Contribution',         definition: 'When multiple policies cover the same loss, each insurer pays its proportionate share.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 3,
    title: 'The Role of Government in the Insurance Industry',
    category: 'Regulation',
    estMinutes: 90,
    objective:
      'Distinguish federal and provincial regulatory responsibilities and the specific Manitoba bodies that oversee insurance.',
    summary: [
      'Insurance in Canada is regulated at BOTH the federal AND provincial levels. The FEDERAL government, through the Office of the Superintendent of Financial Institutions (OSFI), oversees the SOLVENCY of federally-incorporated insurers — making sure they can pay claims. The federal government also enforces PIPEDA (Personal Information Protection and Electronic Documents Act), the Bank Act (including TIED-SELLING prohibitions), and anti-money-laundering rules. Insurance contracts themselves and consumer protection are PROVINCIAL matters.',
      'In Manitoba, the SUPERINTENDENT OF INSURANCE administers the Insurance Act of Manitoba (C.C.S.M. c.I40), supervises insurer market conduct, and approves policy wording. The Superintendent does NOT set premium rates for private insurers — they set their own rates. The exception is Manitoba Public Insurance (MPI), whose AUTOPAC rates must be approved by the PUBLIC UTILITIES BOARD (PUB), making MPI one of the few rate-regulated insurers in the country.',
      'Two separate Manitoba bodies sit at the broker/agent level. The INSURANCE COUNCIL OF MANITOBA (ICM) is the REGULATOR — it licenses agents, brokers and independent adjusters, handles complaints, and disciplines licensees (including suspension or revocation). The INSURANCE BROKERS ASSOCIATION OF MANITOBA (IBAM) is the industry ASSOCIATION — it represents brokers, advocates on policy, and runs the Fundamentals of Insurance (FOI) course you are studying for. Do not confuse the two; this distinction is tested.',
      'Consumer-protection mechanisms include statutory conditions deemed part of every policy (sec. 142 of the Manitoba Insurance Act), licensed-broker errors-and-omissions requirements, a regulated complaints process through ICM, and federally-run protection schemes — PACICC for property and casualty insolvencies, and Assuris for life. Provincial PREMIUM TAXES on insurance contracts (typically 2-4%) also support the system.'
    ],
    secrets: [
      'Provincial governments do NOT set premium rates for private insurers — insurers set their own. Only Crown insurers (MPI rates approved by the PUB) are rate-regulated.',
      'ICM is the REGULATOR (licenses and disciplines). IBAM is the ASSOCIATION (advocacy and education). The exam regularly tries to make you confuse them.',
      'OSFI is the FEDERAL solvency regulator — for FEDERALLY-incorporated insurers only. Provincially-incorporated insurers are supervised by the provincial Superintendent.',
      'PIPEDA is FEDERAL privacy law — applies to all commercial activity, including brokers handling client information.',
      'PACICC protects property-and-casualty policyholders if an insurer fails; Assuris does the same for life policies.'
    ],
    flashcards: [
      { term: 'OSFI',                          definition: 'Office of the Superintendent of Financial Institutions — federal solvency regulator.' },
      { term: 'Superintendent of Insurance',   definition: 'Provincial regulator administering the Insurance Act in Manitoba.' },
      { term: 'Insurance Council of Manitoba (ICM)', definition: 'The licensing & disciplinary REGULATOR for brokers/agents/adjusters in Manitoba.' },
      { term: 'IBAM',                          definition: 'Insurance Brokers Association of Manitoba — broker ASSOCIATION; runs the FOI course.' },
      { term: 'Public Utilities Board (PUB)',  definition: 'Manitoba body that approves MPI Autopac rates.' },
      { term: 'PIPEDA',                        definition: 'Canada\'s federal privacy law — governs collection, use, and disclosure of personal information.' },
      { term: 'PACICC',                        definition: 'Property and Casualty Insurance Compensation Corporation — pays policyholders if a P&C insurer fails.' },
      { term: 'Assuris',                       definition: 'Compensation corporation that protects Canadians\' life-insurance benefits if a life insurer fails.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 4,
    title: 'The Insurance Process',
    category: 'Process',
    estMinutes: 90,
    objective:
      'Walk through the lifecycle of an insurance transaction — from application and underwriting to issuance, endorsement, claims and renewal.',
    summary: [
      'The process begins with an APPLICATION, which the insured must complete truthfully (utmost good faith). The broker collects facts about the risk and submits to UNDERWRITING, the function that decides whether to accept the risk, on what terms, and at what price. Underwriters use rating tools, prior loss history, credit information (to detect MORAL hazard) and physical inspections (for PHYSICAL hazards) to make their decision. If the risk is accepted, a BINDER may be issued — a temporary contract bridging the gap between commitment and formal policy issuance. Binders can be oral or written and are fully effective until the policy is issued or refused.',
      'Once accepted, the policy is issued and delivered to the insured. Coverage commences at 12:01 a.m. STANDARD TIME at the address of the NAMED INSURED — not the location of the risk and not the insurer\'s address. ENDORSEMENTS (also called RIDERS or amendments) are written changes to the policy after issuance — they may add, remove, or modify coverage. CANCELLATION may be initiated by either party under Statutory Condition 5: insurer must give 15 days\' notice by registered mail OR 5 days personal delivery (PRO-RATA refund); insured may cancel at any time on request (SHORT-RATE refund).',
      'The CLAIMS PROCESS has six stages: (1) NOTICE — the insured immediately notifies the insurer in writing of the loss; (2) INVESTIGATION — the insurer/adjuster investigates the cause, extent, and validity of the claim; (3) PROOF OF LOSS — the insured files a sworn, detailed statement of the loss (Statutory Condition 6) — usually within 90 days; (4) NEGOTIATION / SETTLEMENT — payment under SC 12 within 60 days of proof of loss completion; (5) SUBROGATION — if a third party caused the loss, the insurer pursues recovery; (6) SALVAGE — recovery of usable value from damaged property.',
      'Premium calculation considers many factors: amount of insurance, coverage form, perils, deductible, loss history, territory (e.g., Winnipeg vs. rural Manitoba), occupancy and use of the property, construction type, and individual risk characteristics. RETENTION (the insurer\'s share of risk it keeps) is balanced against REINSURANCE (transferring excess to other insurers). Brokers must regularly remit collected premiums to insurers via a trust account — failure is a fiduciary breach that has cost many brokers their licences.'
    ],
    secrets: [
      'A BINDER is a temporary contract — can be ORAL or written. It binds the insurer the moment it is given.',
      'Coverage commences at 12:01 a.m. standard time at the address of the NAMED INSURED.',
      'Insurer cancellation: 15 days registered mail OR 5 days personal delivery. Insured cancellation: anytime on request.',
      'Pro-rata refund (insurer cancels) = no penalty. Short-rate refund (insured cancels) = with penalty.',
      'Brokers must hold premium in a separate TRUST account and remit promptly — a fiduciary duty under the Insurance Act.',
      'Notice to broker is NOT notice to insurer under SC 14 — claims notice must go to the insurer\'s chief agency / head office.'
    ],
    flashcards: [
      { term: 'Application',     definition: 'Insured\'s written request for coverage, made in utmost good faith.' },
      { term: 'Underwriting',    definition: 'Process of selecting, rating, and accepting/declining risks.' },
      { term: 'Binder',          definition: 'Temporary contract created when a broker commits an insurer to a risk — can be oral or written.' },
      { term: 'Endorsement',     definition: 'Written amendment that adds, removes, or modifies policy coverage after issuance.' },
      { term: 'Pro-Rata Refund', definition: 'Exact unused premium portion — refund when the INSURER cancels.' },
      { term: 'Short-Rate Refund', definition: 'Unused portion minus administrative penalty — refund when the INSURED cancels.' },
      { term: 'Notice of Loss',  definition: 'The insured\'s first communication to the insurer that a loss has occurred — must be "forthwith".' },
      { term: 'Proof of Loss',   definition: 'Sworn statement detailing the loss\'s cause, amount, and circumstances — usually within 90 days.' },
      { term: 'Salvage',         definition: 'Damaged property retained by the insurer after settlement to recoup part of the payment.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 5,
    title: 'Property Insurance Policies — Common Characteristics',
    category: 'Property',
    estMinutes: 120,
    objective:
      'Master the components, perils, exclusions, indemnity methods and Statutory Conditions common to all property insurance contracts.',
    summary: [
      'Every property policy is built from six core components: (1) DECLARATIONS (the "who, what, where, when, and how much" — named insured, period, limits, deductible, premium); (2) INSURING AGREEMENT (the insurer\'s promise to pay for covered losses); (3) DEFINITIONS; (4) EXCLUSIONS (perils, property, or situations NOT covered); (5) CONDITIONS (rights and duties of each party — including the Statutory Conditions); and (6) ENDORSEMENTS / RIDERS (written amendments). To read a policy correctly, work Declarations → Insuring Agreement → Exclusions → Conditions — exclusions define the BOUNDARIES of coverage.',
      'Property coverage comes in two architectural forms. A NAMED PERILS policy covers ONLY the perils specifically listed (fire, lightning, explosion, theft, vandalism, etc.). An ALL-RISK (or "comprehensive") policy covers ALL causes of direct physical loss EXCEPT those specifically excluded — this is a much wider grant of coverage but is still LIMITED by the policy\'s exclusion list (war, nuclear, flood, earthquake, settling, wear-and-tear, etc.). Typically excluded PROPERTY includes money and securities, books of account, motor vehicles, aircraft, watercraft above stated limits, and pets. Standard policies also exclude losses while the building is VACANT beyond a stated period (commonly 30 days).',
      'The MANITOBA INSURANCE ACT deems 14 STATUTORY CONDITIONS to be part of every fire/property contract in the province (Sec. 142 / Part V). They cannot be reduced or varied by the insurer. They are: (1) Misrepresentation, (2) Property of Others, (3) Change of Interest, (4) Material Change in Risk, (5) Termination, (6) Requirements After Loss, (7) Fraud, (8) Who May Give Notice and Proof, (9) Salvage, (10) Entry/Control/Abandonment, (11) Dispute Resolution, (12) When Loss Payable (60 DAYS after proof of loss), (13) Repair or Replacement (notice in 30 days / work in 45 days), and (14) Notice (to insurer\'s head office). Memorize the numbered list and the key timings.',
      'INDEMNITY METHODS determine how a loss is valued. ACTUAL CASH VALUE (ACV) = Replacement Cost MINUS Depreciation — the default measure. REPLACEMENT COST waives depreciation but only if the insured actually rebuilds/replaces. A VALUED policy (rare — used for fine art, antiques) pays a stated amount on total loss regardless of actual value. The PAIR & SET clause settles a partial loss as (claimed value) − (value of survivor). The CO-INSURANCE clause penalizes underinsurance on PARTIAL losses: Payment = (Carried / Required) × Loss. The STANDARD MORTGAGE CLAUSE protects the mortgagee\'s interest even when the insured\'s acts would void coverage.'
    ],
    secrets: [
      'SC 12 — Loss payable within 60 DAYS of the COMPLETED PROOF OF LOSS. Memorize.',
      'SC 13 — Insurer must give written notice of election to repair within 30 days; work must begin within 45 days.',
      'CO-INSURANCE only applies to PARTIAL losses — on a total loss, the insured collects the policy limit (subject to ACV/RC).',
      'REPLACEMENT COST settlement reverts to ACV if the insured does NOT actually rebuild or replace.',
      'Smoke from FIREPLACES and from AGRICULTURAL SMUDGING / INDUSTRIAL operations is excluded under most forms.',
      'The STANDARD MORTGAGE CLAUSE protects the mortgagee even when the insured\'s actions would void coverage.',
      'Vacancy beyond 30 days SUSPENDS or VOIDS coverage unless a Vacancy Permit endorsement is added.'
    ],
    flashcards: [
      { term: 'Declarations',             definition: 'The "who, what, where, when, how much" page — names, period, limits, premium.' },
      { term: 'Named Perils Policy',      definition: 'Covers only the specifically listed perils.' },
      { term: 'All Risk / Comprehensive', definition: 'Covers all direct physical loss EXCEPT those specifically excluded.' },
      { term: 'Statutory Conditions',     definition: '14 conditions deemed part of every fire/property contract in Manitoba. Cannot be reduced.' },
      { term: 'SC 12 — When Loss Payable',definition: '60 days after completed proof of loss is delivered to the insurer.' },
      { term: 'SC 13 — Repair or Replacement', definition: 'Written notice within 30 days; work must begin within 45 days.' },
      { term: 'Actual Cash Value (ACV)',  definition: 'Replacement Cost MINUS Depreciation. Default measure of indemnity.' },
      { term: 'Replacement Cost',         definition: 'Cost to replace with new of like kind/quality. Waives depreciation only if rebuilt.' },
      { term: 'Co-insurance Clause',      definition: '(Carried / Required) × Loss. Penalizes under-insurance on PARTIAL losses only.' },
      { term: 'Pair & Set Clause',        definition: 'Settlement = claimed value MINUS value of the surviving item.' },
      { term: 'Standard Mortgage Clause', definition: 'Protects mortgagee\'s interest even if insured\'s acts would void coverage.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 6,
    title: 'Personal Property (Habitational) Insurance',
    category: 'Property',
    estMinutes: 120,
    objective:
      'Identify the standard Homeowners, Tenants and Condominium forms, the structure of Coverages A–G, and the special limits/endorsements.',
    summary: [
      'The Insurance Bureau of Canada (IBC) publishes the standard habitational forms used across the country, including Manitoba. The HOMEOWNERS forms come in three coverage tiers: IBC 1151 BASIC (Named Perils on both building AND contents); IBC 1154 BROAD (All Risk on building, Named Perils on contents); and IBC 1155 COMPREHENSIVE (All Risk on building AND contents). A TENANTS Form covers a renter\'s contents and personal liability without insuring the building. The CONDOMINIUM UNIT OWNERS form (IBC 1132) insures the unit owner\'s personal property, IMPROVEMENTS & BETTERMENTS, and LOSS ASSESSMENT — but NOT the purchase value of the unit (which is covered by the condo corporation\'s policy).',
      'Every homeowner policy contains seven coverages. Section I (PROPERTY): Coverage A — DWELLING; Coverage B — DETACHED PRIVATE STRUCTURES (10% of Coverage A, IN ADDITION to it); Coverage C — PERSONAL PROPERTY (typically 70-80% of Coverage A, worldwide); Coverage D — ADDITIONAL LIVING EXPENSE (the EXTRA costs to maintain normal living — hotel, meals, pet boarding — but NOT continuing expenses like mortgage payments). Section II (LIABILITY): Coverage E — PERSONAL LIABILITY (worldwide, private activities only — excludes business and auto); Coverage F — VOLUNTARY MEDICAL PAYMENTS (no-fault medical for an injured third party, paid up to one year); Coverage G — VOLUNTARY PAYMENT FOR DAMAGE TO PROPERTY (pays for damage caused by insureds, including deliberate acts of MINOR children typically under 13).',
      'Who is an INSURED matters greatly. The named insured plus their SPOUSE or COMMON-LAW PARTNER, dependent relatives in the household, and full-time STUDENTS living away while at school are all insureds. A TENANT renting a basement suite is NOT an insured under the homeowner\'s policy — they need their own tenant\'s policy. SPECIAL LIMITS sub-cap certain categories of personal property: jewellery, furs, watercraft, money/securities, business property on the premises, computers, collectibles, and securities. To cover values above the special limit, items must be SCHEDULED individually (often via a Personal Articles Floater) for an additional premium.',
      'Common endorsements address gaps in the basic form. SEWER BACKUP, EARTHQUAKE, OVERLAND FLOOD, and IDENTITY THEFT are usually OPTIONAL endorsements (not included by default). A HOME BUSINESS endorsement (or a separate commercial liability) is needed for any meaningful business activity at home — standard Section II excludes business pursuits. Outdoor surfaces (fences, sheds, awnings, satellite dishes) are often settled on ACV (not Replacement Cost) regardless of policy form. VACANCY beyond 30 days suspends coverage unless a Vacancy Permit endorsement is added.'
    ],
    secrets: [
      'IBC 1151 = Basic (Named/Named). IBC 1154 = Broad (All-Risk/Named). IBC 1155 = Comprehensive (All-Risk/All-Risk).',
      'A TENANT is NOT an insured under the landlord\'s homeowner policy. They need their own tenant policy.',
      'Coverage B = 10% of Coverage A, IN ADDITION to it (not part of it).',
      'Coverage D does NOT cover mortgage payments (continuing, not "additional" expenses).',
      'Coverage G covers DELIBERATE acts of MINOR children (typically under 13). A 14-year-old\'s vandalism is NOT covered.',
      'Sewer backup, earthquake, and overland flood are usually OPTIONAL endorsements at extra premium.',
      'IBC 1132 (Condo Unit Owners) does NOT cover the unit\'s purchase value — only personal property, improvements/betterments, and loss assessment.'
    ],
    flashcards: [
      { term: 'IBC 1151 — Basic Form',          definition: 'Named Perils on building AND contents.' },
      { term: 'IBC 1154 — Broad Form',          definition: 'All Risk on building, Named Perils on contents.' },
      { term: 'IBC 1155 — Comprehensive Form',  definition: 'All Risk on building AND contents (subject to exclusions).' },
      { term: 'IBC 1132 — Condo Unit Owners',   definition: 'Covers personal property, improvements & betterments, and loss assessment.' },
      { term: 'Coverage A — Dwelling',          definition: 'Main residential structure and attached additions.' },
      { term: 'Coverage B — Detached Structures', definition: '10% of Coverage A, IN ADDITION — for sheds, detached garages, fences.' },
      { term: 'Coverage C — Personal Property', definition: 'Insured\'s contents worldwide. Typically 70-80% of Coverage A.' },
      { term: 'Coverage D — ALE',               definition: 'EXTRA costs to maintain normal living after a covered loss. NOT mortgage.' },
      { term: 'Coverage E — Personal Liability',definition: 'Worldwide coverage for liability arising from PRIVATE activities.' },
      { term: 'Coverage F — Voluntary Medical', definition: 'No-fault medical for injured third parties, up to 1 year from accident.' },
      { term: 'Coverage G — Vol. Property Damage',definition: 'Pays for damage by insureds, incl. deliberate acts of minors under 13.' },
      { term: 'Special Limits',                 definition: 'Sub-limits on jewellery, furs, watercraft, money, business property, etc.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 7,
    title: 'Commercial Property Insurance',
    category: 'Commercial',
    estMinutes: 120,
    objective:
      'Apply Standard vs Broad commercial property forms, the co-insurance formula, and the supporting coverages (BI, Extra Expense, Equipment Breakdown).',
    summary: [
      'The two main commercial property forms are the IBC 4034 STANDARD (Named Perils) and the IBC 4037 BROAD (All-Risk) forms. The Broad Form is the wider grant — covering vehicle impact even when driven by the insured, water escape from pipes, smoke (other than from agricultural smudging or industrial operations), and many incidental perils. Both forms cover BUILDING, EQUIPMENT, and STOCK; both EXCLUDE theft of money (Crime/Money & Securities is a separate line) and typical exclusions (war, nuclear, wear-and-tear, mechanical breakdown). TENANT\'S IMPROVEMENTS & BETTERMENTS (T-IBs) — fixtures the tenant installs in leased space — are insured under the TENANT\'S OWN property policy as BUILDING coverage, NOT under the landlord\'s.',
      'CO-INSURANCE is the most-tested calculation in this chapter. The insured agrees to carry insurance equal to at least a stated percentage (typically 80%, 90%, or 100%) of the property\'s value. If carried < required at the time of a PARTIAL loss, the insurer pays only the proportion: PAYMENT = (CARRIED / REQUIRED) × LOSS. Example: $500,000 building, 80% co-insurance = $400,000 required. Carried = $300,000 (under-insured). $50,000 loss → Insurer pays (300,000 / 400,000) × 50,000 = $37,500; insured absorbs $12,500. Critically — the penalty applies ONLY to PARTIAL losses. On a TOTAL loss the insurer pays the policy limit (capped by ACV/RC). The REINSTATEMENT clause restores the limit after a paid claim with no additional premium.',
      'Property policies pay only for DIRECT damage. Time-related and consequential losses are addressed by separate coverages. BUSINESS INTERRUPTION (BI) pays for loss of income and continuing expenses when a covered property loss halts operations. Two main forms: the EARNINGS form pays until property is restored, capped at 12 months; the PROFITS form pays until profits return to pre-loss level (can extend beyond restoration). EXTRA EXPENSE coverage pays the ADDITIONAL costs incurred to keep operating (temporary rental, contractor bonuses, overtime) — but not continuing expenses like mortgage. EQUIPMENT BREAKDOWN (formerly Boiler & Machinery) covers sudden mechanical or electrical breakdown that property policies exclude.',
      'Specialty commercial lines fill specific gaps. BUILDER\'S RISK — Broad Form covers buildings UNDER CONSTRUCTION (materials, in-place property, certain incidental items), terminating when construction is complete AND the building is occupied. CRIME / MONEY & SECURITIES — separate coverage for theft of cash and securities. INLAND MARINE — "floater" policies for movable property: contractors\' tools, Jeweller\'s Block, fine art. GARAGE / BAILEE policies cover customer property in the insured\'s CARE, CUSTODY, OR CONTROL. SURETY BONDS guarantee performance to a third party; FIDELITY (Employee Dishonesty) bonds protect the employer from embezzlement.'
    ],
    secrets: [
      'Co-insurance: (Carried / Required) × Loss. PARTIAL losses only.',
      'On a TOTAL loss, the insurer pays the FULL POLICY LIMIT — co-insurance does not apply.',
      'Tenant\'s Improvements are insured under the TENANT\'S policy as BUILDING coverage — NOT the landlord\'s.',
      'BUSINESS INTERRUPTION pays lost INCOME and CONTINUING expenses — NOT replacement of damaged equipment.',
      'EARNINGS form: max 12 months. PROFITS form: until profits return to pre-loss level.',
      'EQUIPMENT BREAKDOWN covers internal mechanical/electrical failure that property policies EXCLUDE.',
      'Builder\'s Risk EXCLUDES contractors\' tools and ENDS when the building is complete AND occupied.'
    ],
    flashcards: [
      { term: 'IBC 4034 — Standard',     definition: 'Named Perils commercial property form.' },
      { term: 'IBC 4037 — Broad',        definition: 'All-Risk commercial property form — the widest commercial coverage.' },
      { term: 'Co-insurance Formula',    definition: '(Carried / Required) × Loss = Amount Paid. Applies on PARTIAL losses only.' },
      { term: 'Reinstatement Clause',    definition: 'Restores the policy limit after a paid claim with no additional premium.' },
      { term: 'Business Interruption — Earnings', definition: 'Pays lost income until property restored, max 12 months.' },
      { term: 'Business Interruption — Profits',  definition: 'Pays until profits return to pre-loss level. Can extend past restoration.' },
      { term: 'Extra Expense',           definition: 'Pays ADDITIONAL costs to maintain operations after a loss.' },
      { term: 'Equipment Breakdown',     definition: 'Covers sudden mechanical/electrical breakdown (formerly Boiler & Machinery).' },
      { term: 'Builder\'s Risk',         definition: 'Covers buildings during construction. Ends when complete AND occupied.' },
      { term: 'Surety Bond',             definition: '3-party agreement guaranteeing performance: Principal, Obligee, Surety.' },
      { term: 'Fidelity Bond',           definition: 'Protects the employer from financial loss caused by employee dishonesty.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 8,
    title: 'Principles of Legal Liability',
    category: 'Liability',
    estMinutes: 120,
    objective:
      'Distinguish criminal/civil law; understand negligence, strict liability, vicarious liability, defenses, and occupier\'s duty.',
    summary: [
      'Canadian law has two main branches addressing wrongs. CRIMINAL LAW addresses wrongs against society — the remedy is PUNISHMENT (fines, imprisonment). CIVIL LAW addresses wrongs between parties — the remedy is COMPENSATION (money damages). Civil law itself splits into TORT LAW (wrongs not involving a contract) and CONTRACT LAW. The party bringing suit is the PLAINTIFF; the party being sued is the DEFENDANT. The party who committed the wrong is the TORTFEASOR. Most insurance claims arise out of unintentional torts — specifically, NEGLIGENCE.',
      'NEGLIGENCE has four required elements that the plaintiff must prove on the balance of probabilities. (1) A LEGAL duty of care was owed by the defendant to the plaintiff (a MORAL duty alone is not enough). (2) The defendant BREACHED that duty by failing to act as a reasonable person would. (3) The plaintiff suffered DAMAGES (physical injury, property damage, financial loss). (4) PROXIMATE CAUSE links the breach to the damages — the breach was the dominant, direct cause in an unbroken chain of events. Missing any one element ends the claim.',
      'Several flavours of liability exist beyond ordinary negligence. STRICT LIABILITY arises in inherently dangerous activities (Rylands v. Fletcher — blasting, keeping wild animals) — the defendant is liable without proof of fault. VICARIOUS LIABILITY makes one party responsible for another\'s acts where a relationship exists (employer for employee\'s acts within scope of employment — but NOT generally for independent contractors). INTENTIONAL TORTS (assault, defamation, false imprisonment) are excluded from insurance because they are intentional. CONTRIBUTORY NEGLIGENCE — where the plaintiff is partly at fault — REDUCES damages proportionally in Canada (not bars recovery, as in some U.S. states).',
      'OCCUPIER\'S LIABILITY depends on the entrant\'s status: INVITEES (paying customers — highest duty: prevent harm from any danger the occupier knew or SHOULD HAVE known); LICENSEES (social guests — moderate duty: warn of KNOWN hidden dangers); TRESPASSERS (lowest duty: don\'t wilfully or recklessly cause harm). Common defenses to liability claims include CONTRIBUTORY NEGLIGENCE, VOLUNTARY ASSUMPTION OF RISK (e.g., consenting spectators), ACT OF GOD, and STATUTORY AUTHORITY. Limitation periods (Manitoba: generally 2 years under the Limitations Act) cut off old claims.'
    ],
    secrets: [
      'NEGLIGENCE requires a LEGAL duty of care — a moral duty alone is NOT sufficient.',
      'PROXIMATE CAUSE = the dominant, direct cause in an unbroken chain. Not always the FIRST cause.',
      'CONTRIBUTORY NEGLIGENCE REDUCES damages proportionally in Canada — it does NOT bar recovery entirely (a U.S. distinction).',
      'INDEPENDENT CONTRACTORS generally do NOT create vicarious liability for the hirer (except for inherently dangerous work).',
      'OCCUPIER\'S DUTY varies by entrant: invitee (highest) > licensee > trespasser (lowest).',
      'Manitoba\'s general limitations period is now 2 YEARS under the Limitations Act (not the historical 1-year fire-policy rule).',
      'STRICT LIABILITY applies to inherently dangerous activities (Rylands v. Fletcher) — liable WITHOUT proof of fault.'
    ],
    flashcards: [
      { term: 'Criminal Law',          definition: 'Addresses wrongs against society — remedy is punishment (fines, imprisonment).' },
      { term: 'Civil Law',             definition: 'Addresses wrongs between parties — remedy is monetary compensation.' },
      { term: 'Tort',                  definition: 'A civil wrong (other than breach of contract) for which the law provides a remedy.' },
      { term: 'Plaintiff',             definition: 'The party who files the lawsuit.' },
      { term: 'Defendant',             definition: 'The party being sued.' },
      { term: 'Negligence Elements',   definition: 'Legal duty of care, breach, damages, proximate cause. All four required.' },
      { term: 'Proximate Cause',       definition: 'The dominant, direct cause of a loss in an unbroken chain of events.' },
      { term: 'Vicarious Liability',   definition: 'One person held liable for another\'s wrongful acts (employer for employee).' },
      { term: 'Strict Liability',      definition: 'Liability without proof of fault — applies to inherently dangerous activities.' },
      { term: 'Contributory Negligence', definition: 'Plaintiff\'s own fault reduces damages proportionally (Manitoba apportionment rule).' },
      { term: 'Occupier\'s Liability', definition: 'Duty varies by entrant: invitee (highest) > licensee > trespasser (lowest).' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 9,
    title: 'Introduction to Liability Insurance',
    category: 'Liability',
    estMinutes: 90,
    objective:
      'Identify the structure, triggers, and key coverage features common to all liability insurance policies.',
    summary: [
      'A liability policy has TWO duties to the insured: the DUTY TO INDEMNIFY (pay damages for which the insured is legally responsible) and the DUTY TO DEFEND (provide legal defense). The duty to DEFEND is BROADER than the duty to indemnify — the insurer must defend whenever a claim is even arguably within coverage. Liability policies provide BODILY INJURY (BI), PROPERTY DAMAGE (PD), and (depending on form) PERSONAL INJURY (PI — libel, slander, false arrest, wrongful entry) coverages. PI is NOT bodily injury — the exam tests this distinction relentlessly.',
      'The trigger by which a claim becomes covered is a critical concept. OCCURRENCE-based policies respond when the loss EVENT happens during the policy period, regardless of when the claim is reported. The policy limit applies PER occurrence — available for each occurrence during the period (subject to any annual aggregate). CLAIMS-MADE policies respond when the CLAIM is first made during the policy period, subject to a RETROACTIVE DATE (acts before that date are not covered). Continuous coverage matters in claims-made — TAIL (extended reporting) coverage closes the gap when a policy is not renewed.',
      'Damages come in different flavours and are treated differently by the policy. COMPENSATORY damages — both SPECIAL (measurable: medical bills, lost wages) and GENERAL (intangible: pain and suffering) — restore the plaintiff and are routinely insured. PUNITIVE/EXEMPLARY damages punish the wrongdoer and are GENERALLY NOT COVERED as a matter of public policy (insurance would defeat their punitive purpose). NOMINAL damages (a token amount affirming a technical right) and stigma awards depend on jurisdiction and policy wording.',
      'SUPPLEMENTARY PAYMENTS are amounts paid by the insurer IN ADDITION to the policy limit: defense costs, court costs, premiums on appeal bonds and bonds to release attachments, expenses incurred at the insurer\'s request, and pre-judgment / post-judgment interest on the WITHIN-LIMITS portion of the judgment. Damages awarded above the policy limit are NOT paid by the insurer — the insured is personally exposed for that excess (one common reason to purchase an UMBRELLA policy). Liability policies universally EXCLUDE intentional acts, war, nuclear, owned property, contractual liability assumed beyond ordinary business, and certain insured-vs-insured claims.'
    ],
    secrets: [
      'The DUTY TO DEFEND is BROADER than the DUTY TO INDEMNIFY — the insurer must defend whenever a claim is even arguably within coverage.',
      'PUNITIVE damages are GENERALLY NOT COVERED — public policy.',
      'PERSONAL INJURY (PI) ≠ Bodily Injury (BI). PI covers libel, slander, false arrest, wrongful entry.',
      'OCCURRENCE basis = limit applies PER occurrence in the policy period.',
      'CLAIMS-MADE basis = coverage triggered by when the CLAIM is reported, subject to retroactive date.',
      'SUPPLEMENTARY PAYMENTS (defense costs, court costs, within-limits interest) are paid IN ADDITION to the limit.',
      'Damages AWARDED ABOVE the policy limit are NOT covered — umbrella policies bridge this gap.'
    ],
    flashcards: [
      { term: 'Duty to Defend',          definition: 'Insurer\'s obligation to provide legal defense — BROADER than the duty to indemnify.' },
      { term: 'Duty to Indemnify',       definition: 'Insurer\'s obligation to pay damages for which the insured is legally responsible.' },
      { term: 'Bodily Injury (BI)',      definition: 'Physical injury, sickness, disease, or death.' },
      { term: 'Property Damage (PD)',    definition: 'Physical injury to or destruction of tangible property, including loss of use.' },
      { term: 'Personal Injury (PI)',    definition: 'Non-bodily torts: libel, slander, false arrest, wrongful entry, invasion of privacy.' },
      { term: 'Occurrence Basis',        definition: 'Limit applies PER occurrence during the policy period.' },
      { term: 'Claims-Made Basis',       definition: 'Coverage triggered when the CLAIM is reported, subject to a retroactive date.' },
      { term: 'Compensatory Damages',    definition: 'Damages to make the plaintiff whole — Special (measurable) and General (intangible).' },
      { term: 'Punitive Damages',        definition: 'Damages to punish the wrongdoer. GENERALLY NOT COVERED (public policy).' },
      { term: 'Supplementary Payments',  definition: 'Defense costs, court costs, within-limits interest — paid IN ADDITION to the policy limit.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 10,
    title: 'Liability Insurance Policies (CGL)',
    category: 'Liability',
    estMinutes: 120,
    objective:
      'Distinguish the major Commercial General Liability coverage sections and the specialty liability lines (professional, D&O, auto, garage, umbrella).',
    summary: [
      'The Commercial General Liability (CGL) policy is the cornerstone of business liability insurance. It contains FOUR primary insuring agreements: (1) PREMISES & OPERATIONS — covers BI/PD arising from the insured\'s premises and ongoing operations (a customer slipping on a wet floor); (2) PRODUCTS LIABILITY — covers BI/PD caused by the insured\'s PRODUCTS after they have left the insured\'s possession (a customer breaks a tooth on a chicken bone in a pizza); (3) COMPLETED OPERATIONS — covers BI/PD arising from WORK that has been completed (a roofer\'s leaky roof causes contents damage two years later); (4) PERSONAL & ADVERTISING INJURY — covers libel, slander, false arrest, wrongful entry, copyright infringement in advertising. MEDICAL PAYMENTS may be a separate, no-fault coverage.',
      'Specialty commercial liability policies fill gaps in or replace the CGL. GARAGE Policies handle auto dealers and repair shops — addressing both the CGL exposures and the BAILEE exposure (customer vehicles in care, custody, or control). LIQUOR LIABILITY covers establishments selling alcohol against dram-shop liability. OWNERS & CONTRACTORS PROTECTIVE covers project owners against liability for contractor acts. UMBRELLA / EXCESS LIABILITY sits on top of underlying CGL, Auto, and Employers Liability — providing higher limits and (in true umbrella form) sometimes broader coverage.',
      'PROFESSIONAL LIABILITY responds to allegations of negligent professional services or advice. For brokers, agents, adjusters, accountants, and most professionals it is called ERRORS & OMISSIONS (E&O). For doctors and similar medical professionals it is called MALPRACTICE. DIRECTORS & OFFICERS (D&O) liability protects corporate directors and officers personally against claims alleging wrongful acts in their management roles. Most professional policies are written on a CLAIMS-MADE basis with a retroactive date.',
      'Personal liability is provided through Section II of the HOMEOWNER policy and similar habitational forms. Coverage E (Personal Liability) is WORLDWIDE for activities of the insured as a PRIVATE CITIZEN — but it EXCLUDES business activities, owned-vehicle liability (which is the auto policy\'s job), and most professional services. CROSS-LIABILITY (also called insured-vs-insured) usually prevents insureds on the same policy from suing each other to access the policy. AUTO LIABILITY is addressed under the automobile policy (in Manitoba, through MPI Autopac).'
    ],
    secrets: [
      'Premises & Operations = during ongoing business at the insured\'s site.',
      'PRODUCTS = after the product has left the insured\'s control.',
      'COMPLETED OPERATIONS = after work is completed; damage can show up years later.',
      'PERSONAL INJURY = libel, slander, false arrest, wrongful entry — NOT bodily injury.',
      'E&O = professionals. MALPRACTICE = medical professionals. D&O = corporate directors.',
      'Section II Personal Liability is WORLDWIDE for private activities — EXCLUDES business and auto.',
      'Most professional policies use a CLAIMS-MADE trigger with a retroactive date.'
    ],
    flashcards: [
      { term: 'Premises & Operations',  definition: 'CGL coverage for BI/PD arising from the insured\'s premises and ongoing operations.' },
      { term: 'Products Liability',     definition: 'CGL coverage for harm caused by the insured\'s product after it leaves the insured\'s control.' },
      { term: 'Completed Operations',   definition: 'CGL coverage for BI/PD arising from work that has been completed.' },
      { term: 'Personal & Advertising Injury', definition: 'CGL coverage for non-bodily torts arising from the insured\'s communications.' },
      { term: 'Errors & Omissions (E&O)', definition: 'Professional liability for brokers, agents, accountants — alleging negligent service/advice.' },
      { term: 'Malpractice',            definition: 'Professional liability for doctors and similar medical professionals.' },
      { term: 'Directors & Officers (D&O)', definition: 'Protects corporate D&O against claims alleging wrongful acts in their management roles.' },
      { term: 'Umbrella / Excess',      definition: 'Higher-limit liability that sits over underlying policies; may also broaden coverage.' },
      { term: 'Cross-Liability',        definition: 'Provision that excludes (or in some cases permits) claims between insureds on the same policy.' },
      { term: 'Garage Policy',          definition: 'Combines CGL with bailee coverage for auto dealers/repair shops.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 11,
    title: 'Accident & Sickness Insurance and Travel Insurance',
    category: 'Specialty',
    estMinutes: 90,
    objective:
      'Cover the basics of Accident & Sickness products and the structure of travel medical, trip cancellation, and trip interruption coverages.',
    summary: [
      'ACCIDENT & SICKNESS (A&S) insurance includes Disability Income, Critical Illness, Accidental Death and Dismemberment (AD&D), and supplementary medical/dental products. Disability Income pays a portion of income while the insured is disabled by accident or illness. Critical Illness pays a lump sum on diagnosis of a covered illness (cancer, heart attack, stroke, etc.). AD&D pays on accidental death or specific dismemberment. These products are heavily regulated and Manitoba brokers selling A&S need a specific licence. The exam scope here is general — know the categories and the difference between life and A&S coverage.',
      'TRAVEL MEDICAL INSURANCE covers emergency medical care while travelling outside the home province. The premium depends on: trip LENGTH, DESTINATION, and the AGE and HEALTH of the traveller — but NOT the method of transportation. Provincial health insurance (Manitoba Health) reimburses out-of-country medical only at MB rates — far below U.S. hospital charges — so private travel coverage is essential. Coverage includes hospital, physician, prescription drugs, emergency dental, EMERGENCY MEDICAL EVACUATION (medically necessary transport to an appropriate facility or repatriation to Canada), and return of remains.',
      'The STABILITY CLAUSE governs PRE-EXISTING conditions. The condition is covered only if it has been MEDICALLY STABLE for a stipulated period (typically 90 to 180 days) before departure. Stability means no new symptoms, no change in medication or dosage, no new diagnosis, and no medical appointments related to the condition. A medication DOSAGE CHANGE within the stability period is generally treated as DESTABILIZATION — even if minor. Brokers should review the policy stability period with travellers near departure.',
      'Common EXCLUSIONS include intentional self-harm, suicide, drug overdoses (some policies cover for prescribed medications), criminal acts, HAZARDOUS / ADVENTURE SPORTS (skydiving, scuba below certain depths, mountaineering, racing — unless specifically endorsed), LATE-TERM PREGNANCY (typically within 9 weeks of expected delivery — varies), and pre-existing instability. TRIP CANCELLATION reimburses prepaid non-refundable costs lost when a covered reason forces cancellation BEFORE departure; TRIP INTERRUPTION reimburses unused trip costs and added return costs when an event occurs DURING the trip.'
    ],
    secrets: [
      'Method of TRANSPORT is NOT a travel-insurance premium factor — only length, destination, and age/health are.',
      'STABILITY clause: the pre-existing condition must have been stable (no new symptoms, no med changes, no doctor visits about it) for the stipulated period.',
      'Medication DOSAGE changes within the stability period usually destabilize coverage — even for the same drug.',
      'Provincial health pays at MANITOBA rates for out-of-country medical — leaving most of a U.S. hospital bill uncovered without travel insurance.',
      'Adventure sports (skydiving, scuba, mountaineering) and late-term pregnancy are commonly excluded.',
      'TRIP CANCELLATION = BEFORE departure. TRIP INTERRUPTION = DURING the trip.'
    ],
    flashcards: [
      { term: 'Disability Income',     definition: 'A&S product that replaces income while the insured is disabled.' },
      { term: 'Critical Illness',      definition: 'Pays a lump sum on diagnosis of a covered illness (cancer, heart attack, stroke).' },
      { term: 'AD&D',                  definition: 'Accidental Death and Dismemberment — pays on accidental death/specific dismemberment.' },
      { term: 'Stability Clause',      definition: 'Pre-existing condition covered only if medically stable for the stipulated period.' },
      { term: 'Trip Cancellation',     definition: 'Reimburses prepaid costs lost when a covered reason forces cancellation BEFORE departure.' },
      { term: 'Trip Interruption',     definition: 'Reimburses unused trip costs and added return costs when a covered event happens DURING the trip.' },
      { term: 'Emergency Medical Evacuation', definition: 'Medically necessary transport to appropriate facility or repatriation to Canada.' },
      { term: 'Hazardous Activity Exclusion', definition: 'Skydiving, scuba below limits, mountaineering, racing — excluded unless specifically endorsed.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 12,
    title: 'Introduction to Automobile Insurance (Manitoba MPI)',
    category: 'Automobile',
    estMinutes: 90,
    objective:
      'Understand Manitoba\'s public auto insurance system, the role of MPI, and the Manitoba Public Insurance Corporation Act.',
    summary: [
      'Manitoba uses a hybrid PUBLIC-PRIVATE auto insurance system. MANITOBA PUBLIC INSURANCE (MPI) is a Crown corporation created under the Manitoba Public Insurance Corporation Act (C.C.S.M. c.P215). MPI is the EXCLUSIVE provider of Basic AUTOPAC — compulsory minimum auto coverage for every registered vehicle. Drivers cannot purchase Basic Autopac from a private insurer. EXTENSION coverages (additional liability, lower deductibles, loss-of-use, excess value, replacement-cost endorsements) are also sold by MPI, but they are placed through a network of private brokers acting as MPI agents. Manitoba is one of three Crown auto-insurance provinces along with British Columbia (ICBC) and Saskatchewan (SGI).',
      'MPI\'s rates are not set by the company alone. They must be APPROVED by the PUBLIC UTILITIES BOARD (PUB), an independent provincial body. This rate regulation is unusual — private insurers in Canada set their own rates subject to file-and-use rules. The PUB approves the broader rate structure annually; specific Driver Safety Rating (DSR) discounts and surcharges follow approved formulas. The 2026 PUB-approved structure raised the Basic deductible from $750 to $1,000, expanded the DSR scale to 41 levels (−20 to +20), and increased the top-of-scale discount.',
      'Manitoba is a NO-FAULT province for bodily injury through PIPP (the Personal Injury Protection Plan — covered in detail in Chapter 14). For property damage and bodily-injury liability outside PIPP\'s scope (e.g., property damage caused to others, lawsuits in other provinces or the U.S.), the TORT system still applies — meaning fault matters and lawsuits are possible. Drivers who travel cross-border or to other provinces should consider EXTENSION liability up to $10 million (or Special Risk Extension for higher amounts) to cover damages that would not be paid under Basic.',
      'NEW MANITOBA RESIDENTS have a grace period (typically about 3 months) to register their vehicles with MPI. After that, continued use of an out-of-province plate is illegal. Non-residents (temporary visitors, out-of-province students) generally retain their home-province registration. The federal government has NO role in standard auto insurance; the provincial government and MPI together control the system. The Insurance Council of Manitoba (ICM) licenses BROKERS dealing with Autopac, separately from licensing other lines.'
    ],
    secrets: [
      'MPI is the EXCLUSIVE provider of Basic Autopac — you cannot buy Basic from a private insurer.',
      'Manitoba\'s auto insurance is a HYBRID: public Basic (MPI) + private brokers handling Extension placement.',
      'The Public Utilities Board (PUB) approves MPI rates — making MPI one of the few rate-regulated insurers in Canada.',
      'PIPP is a NO-FAULT scheme for bodily injury; TORT still applies to property damage and out-of-province lawsuits.',
      'New residents have ~3 months to switch to MPI; non-residents (students, tourists) retain home-province coverage temporarily.',
      'Manitoba, BC (ICBC), and Saskatchewan (SGI) are the three Crown auto-insurance provinces.'
    ],
    flashcards: [
      { term: 'Manitoba Public Insurance (MPI)', definition: 'Crown corporation, exclusive provider of compulsory Basic Autopac coverage.' },
      { term: 'Autopac',                        definition: 'The brand name for MPI\'s auto insurance products: Basic, Extension, and SRE.' },
      { term: 'Public Utilities Board (PUB)',   definition: 'Provincial body that approves MPI\'s Autopac rates.' },
      { term: 'No-Fault (Manitoba)',            definition: 'Each insured collects bodily-injury benefits regardless of fault. Implemented through PIPP.' },
      { term: 'Tort System',                    definition: 'Fault-based recovery still applies to property damage and out-of-province injury beyond PIPP.' },
      { term: 'New Resident Grace Period',      definition: 'Approximately 3 months to register a vehicle with MPI after establishing Manitoba residency.' },
      { term: 'Crown Auto Provinces',           definition: 'Manitoba (MPI), British Columbia (ICBC), Saskatchewan (SGI).' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 13,
    title: 'Automobile Insurance — The Policy (Autopac Coverages)',
    category: 'Automobile',
    estMinutes: 120,
    objective:
      'Master the Basic Autopac coverage structure, Extension products, and the Driver Safety Rating (DSR) scale.',
    summary: [
      'BASIC AUTOPAC (effective April 1, 2026) bundles THREE compulsory coverages with every vehicle registration. (1) Personal Injury Protection Plan (PIPP — see Chapter 14) — no-fault bodily-injury benefits. (2) THIRD-PARTY LIABILITY of $500,000 — covers bodily-injury and property-damage you cause to others. (3) ALL-PERILS for the insured\'s OWN vehicle: physical damage from collision, fire, theft, vandalism, hail, hitting an animal, etc., up to a $50,000 limit, subject to a $1,000 DEDUCTIBLE (raised from $750 in 2026). One deductible per claim event, no matter how many components are damaged.',
      'EXTENSION coverages are optional upgrades sold by MPI through licensed Autopac brokers. INCREASED LIABILITY up to $10 million (essential for cross-border driving in the U.S.). LOWER DEDUCTIBLES ($200, $500, $1,500, $2,500 — lower means higher premium). LOSS OF USE (rental car while the insured\'s vehicle is repaired — Basic does NOT include this). EXCESS VALUE for vehicles worth more than the $50,000 Basic cap. REPLACEMENT COST (Vehicle) on new vehicles — replaces a totalled new car with a comparable new car (subject to age conditions). FAMILY PROTECTION covers underinsured-motorist exposures. ENHANCED PIPP improves the no-fault benefits beyond Basic.',
      'SPECIAL RISK EXTENSION (SRE) is MPI\'s division for unusual or high-value risks. SRE handles antique/collector vehicles on an agreed-value basis, exotic and high-value vehicles ($150K+ ACV typically), commercial fleets, certain U.S.-domiciled vehicles, and liability above $10 million. Without SRE, a Lamborghini owner cannot insure to value or a fleet operator cannot get coverage. Brokers should recognize when a risk is outside the standard Autopac box and refer to SRE underwriting.',
      'The DRIVER SAFETY RATING (DSR) is the merit/demerit system that determines vehicle and licence discounts. The 2026 scale has 41 levels — from −20 (worst, highest surcharge) through 0 (base, new driver) to +20 (best, ~53% off vehicle premium + up to $30 off licence). NEW DRIVERS enter at Level 0. Each clean year (no at-fault claims, no convictions, no suspensions) moves the driver UP one level. DEMERITS for serious driving: AT-FAULT CLAIM = −5 levels; HAND-HELD ELECTRONIC DEVICE = −5 levels; SPEEDING 30-49 km/h over = −2; SPEEDING > 49 km/h over = −10; LEAVING SCENE = −10; IMPAIRED DRIVING = −10; IMPAIRED CAUSING DEATH = −15. Demerits stack within the same incident (e.g., impaired + at-fault = −15).'
    ],
    secrets: [
      'Basic Autopac 2026: $500K third-party liability + $50K all-perils + $1,000 deductible + PIPP. Memorize.',
      'You CANNOT buy Basic Autopac from a private insurer. Extension is bought through brokers but underwritten by MPI.',
      'Loss of Use is NOT included in Basic — must be purchased as Extension.',
      'Vehicles over $50,000 ACV need Extension Excess Value; vehicles over ~$150,000 typically need Special Risk Extension (SRE).',
      'DSR 2026: 41 levels (−20 to +20). Top of scale = up to 53% off vehicle premium and $30 off driver\'s licence.',
      'DSR demerits: at-fault claim = −5; cell phone = −5; impaired = −10; impaired causing death = −15.',
      'DSR demerits STACK — an at-fault impaired driver loses 15 levels in a single incident.'
    ],
    flashcards: [
      { term: 'Basic Autopac Liability',  definition: '$500,000 default third-party BI and PD limit.' },
      { term: 'Basic Autopac All-Perils', definition: 'Up to $50,000 for accidental physical damage to the registered vehicle.' },
      { term: 'Basic Autopac Deductible (2026)', definition: '$1,000 default, raised from $750 effective April 1, 2026.' },
      { term: 'Autopac Extension',        definition: 'Optional MPI coverages: higher liability ($10M max), lower deductibles, loss of use, excess value.' },
      { term: 'Special Risk Extension (SRE)', definition: 'MPI division for high-value, antique, or unusual risks outside standard Autopac.' },
      { term: 'Driver Safety Rating (DSR)', definition: 'MPI\'s 41-level (2026) merit scale from −20 to +20.' },
      { term: 'DSR — At-Fault Claim',     definition: '5 levels DOWN per claim.' },
      { term: 'DSR — Cell Phone',         definition: '5 levels DOWN per conviction (hand-held electronic device).' },
      { term: 'DSR — Impaired Driving',   definition: '10 levels DOWN; impaired causing DEATH = 15 levels down.' },
      { term: 'Family Protection',        definition: 'Extension covering underinsured-motorist exposure.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 14,
    title: 'Automobile Insurance — Statutory Conditions, PIPP & No-Fault Rules',
    category: 'Automobile',
    estMinutes: 120,
    objective:
      'Master the PIPP no-fault scheme, its benefits and limits, and the statutory conditions and endorsements specific to auto policies.',
    summary: [
      'The PERSONAL INJURY PROTECTION PLAN (PIPP) is the no-fault bodily-injury scheme included in every Basic Autopac. PIPP applies to ALL Manitoba residents injured in an automobile accident anywhere in Canada or the United States — REGARDLESS of fault and REGARDLESS of whether the at-fault driver is identified (so hit-and-run victims are still covered). PIPP largely replaces the right to sue another driver for bodily-injury damages — although suit is still possible against non-driver defendants (e.g., a defective vehicle component manufacturer) and for property damage. Death benefits, similarly, are paid regardless of fault.',
      'PIPP\'s benefits cover the full range of bodily-injury consequences. INCOME REPLACEMENT pays 90% of NET income, subject to a maximum insurable GROSS yearly income of $123,000 (2026), with a 7-DAY waiting period. MEDICAL AND REHABILITATION benefits are paid immediately for reasonable and necessary care. PERMANENT IMPAIRMENT pays a lump sum based on the degree of permanent injury. NON-EARNER benefits and PERSONAL CARE benefits cover those not employed at the time of accident (students, homemakers). CAREGIVER benefits cover caregiving roles. DEATH BENEFITS pay survivors regardless of fault. STUDENT benefits address interrupted education.',
      'Out-of-province driving is a frequent exam topic. PIPP FOLLOWS the Manitoba resident anywhere in Canada or the U.S. — even when driving a rental vehicle or someone else\'s car. BASIC LIABILITY ($500,000) also applies, but in the U.S. typical hospital and litigation costs vastly exceed this limit; EXTENSION liability up to $10 million is strongly recommended. The TORT system still applies abroad — meaning a Manitoba driver causing damage in Florida can be sued for amounts well above PIPP benefits. PIPP also responds when a Manitoba resident is a PEDESTRIAN injured by a vehicle in Canada or the U.S.',
      'STATUTORY CONDITIONS specific to automobile policies in Manitoba reinforce many of the property-policy principles in adapted form: prompt notice of accident to MPI; cooperation with the investigation; no admission of liability without consent; preservation of evidence; submission to examination under oath. EXEMPLARY/PUNITIVE damages are not covered. The DSR system effectively functions as both an incentive (rewarding clean driving) and as a sanction (surcharging serious offences) for behaviour that PIPP\'s no-fault structure would otherwise neutralize.'
    ],
    secrets: [
      'PIPP is NO-FAULT — pays regardless of fault, including HIT-AND-RUN victims.',
      'PIPP applies in CANADA and the UNITED STATES — anywhere in those countries.',
      'Income replacement: 90% of NET (not gross) income, max insurable gross $123,000 (2026), 7-DAY waiting period.',
      'Tort still applies for PROPERTY DAMAGE and for BI lawsuits OUTSIDE PIPP\'s scope (e.g., U.S. courts).',
      'PIPP includes Non-Earner, Personal Care, Caregiver, Student, Death, Permanent Impairment, and Medical/Rehab benefits.',
      'Basic $500K liability is dangerously low for U.S. travel — recommend Extension liability ($10M Extension; SRE for higher).',
      'PIPP applies to Manitoba PEDESTRIANS injured by vehicles, not just drivers.'
    ],
    flashcards: [
      { term: 'PIPP',                       definition: 'Personal Injury Protection Plan — Manitoba\'s no-fault bodily-injury scheme.' },
      { term: 'PIPP Geographic Scope',      definition: 'Manitoba residents covered anywhere in Canada and the United States.' },
      { term: 'PIPP Income Replacement',    definition: '90% of NET income, max gross $123,000 (2026), 7-day waiting period.' },
      { term: 'PIPP Medical & Rehab',       definition: 'Reasonable and necessary medical care, paid immediately, no waiting period.' },
      { term: 'PIPP Permanent Impairment',  definition: 'Lump-sum payment based on degree of permanent injury.' },
      { term: 'PIPP Death Benefits',        definition: 'Paid to survivors and estate regardless of fault.' },
      { term: 'PIPP Non-Earner Benefit',    definition: 'For those not employed at time of accident (students, homemakers).' },
      { term: 'Tort Survival',              definition: 'Tort still applies for property damage, out-of-province lawsuits, and non-driver defendants.' },
      { term: 'PIPP & Hit-and-Run',         definition: 'PIPP pays the victim regardless of whether the at-fault driver is identified.' }
    ]
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    chapter: 15,
    title: 'Regulation of Brokers',
    category: 'Ethics',
    estMinutes: 120,
    objective:
      'Master the Manitoba broker licensing structure, conduct rules, fiduciary obligations, and prohibited practices.',
    summary: [
      'The INSURANCE COUNCIL OF MANITOBA (ICM) is the regulatory body that LICENSES insurance agents, brokers, and independent adjusters in Manitoba. The ICM handles licensing applications, continuing-education requirements, complaints, investigations, and discipline (including suspension and revocation). The INSURANCE BROKERS ASSOCIATION OF MANITOBA (IBAM) is the broker ASSOCIATION — it advocates for brokers, administers the Fundamentals of Insurance (FOI) course you are studying for, and provides member services. IBAM does NOT license or discipline brokers — that is the ICM. The federal OSFI regulates SOLVENCY of federally-incorporated insurers but has no role in broker licensing.',
      'Manitoba uses a THREE-LEVEL licensing structure for general insurance. LEVEL 1 (entry) — may sell ONLY INSIDE the office of a general insurance agency and only under the supervision of at least a Level 2 broker. The FOI course is the standard education pathway to the Level 1 challenge exam. LEVEL 2 — may sell inside OR outside the office and may MANAGE an agency. Level 2 requires additional courses (e.g., CAIB 2 and 3). LEVEL 3 — must have held Level 2 for at least 2 YEARS. Level 3 permits the broker to OWN an insurance agency. Continuing education credits are required for licence renewal at all levels.',
      'Brokers owe FIDUCIARY duties. They must hold premium funds in a SEPARATE TRUST account and remit promptly to insurers — commingling with operating funds is a textbook violation. They must maintain ERRORS & OMISSIONS (E&O) coverage protecting against negligent-advice claims (the #1 trigger being FAILURE TO IDENTIFY a client\'s loss exposures). They must keep client information confidential under PIPEDA (consent required for disclosure to other insurers when shopping for quotes). They must avoid CONFLICTS OF INTEREST and disclose any compensation arrangement that could appear to bias their advice.',
      'PROHIBITED PRACTICES include: REBATING and INDUCEMENTS — offering gifts, cash, or rewards outside what the insurer has expressly authorized (an iPad for placing business is a textbook violation). TIED SELLING — making purchase of one product a condition of another (federally prohibited; especially relevant to banks pushing affiliate insurance with mortgages). MISREPRESENTATION of policy terms or coverage. MISAPPROPRIATION of premium. OPERATING WITHOUT A LICENCE or beyond licence authority. UNBUNDLED SERVICE FEES are PERMITTED if properly DISCLOSED to the client in advance — they are not rebating. Disciplinary outcomes range from fines and supervision orders to suspension and revocation of licence.'
    ],
    secrets: [
      'ICM = REGULATOR (licenses and disciplines). IBAM = ASSOCIATION (advocacy and education). Do NOT confuse them.',
      'Level 1 = inside office only, under supervision. Level 2 = inside or outside + manage. Level 3 = own an agency (2 yrs at L2 required).',
      'Premium funds must be held in a SEPARATE TRUST account — never commingled with operating funds.',
      'INDUCEMENTS / REBATES outside what the insurer expressly authorizes are PROHIBITED — regardless of value.',
      'TIED SELLING is federally prohibited — a bank cannot require purchase of its affiliate insurance as a condition of a mortgage.',
      'UNBUNDLED SERVICE FEES are ALLOWED if properly disclosed in advance — they are not rebating.',
      'The #1 cause of E&O claims is failure to identify the client\'s loss exposures and offer the right coverage.'
    ],
    flashcards: [
      { term: 'Insurance Council of Manitoba (ICM)', definition: 'Regulator that licenses and disciplines brokers/agents/adjusters in Manitoba.' },
      { term: 'IBAM',                                definition: 'Insurance Brokers Association of Manitoba — broker ASSOCIATION; runs the FOI course.' },
      { term: 'Level 1 Licence',                     definition: 'Entry-level. Sell inside the office only, under Level 2+ supervision.' },
      { term: 'Level 2 Licence',                     definition: 'Sell inside or outside the office; can manage an agency.' },
      { term: 'Level 3 Licence',                     definition: 'Requires 2+ years at Level 2; permits ownership of an agency.' },
      { term: 'Trust Account',                       definition: 'Separate account holding premium funds. Required for fiduciary compliance.' },
      { term: 'E&O Insurance',                       definition: 'Protects brokers from negligent-advice claims. Top trigger: failing to identify loss exposures.' },
      { term: 'Rebating / Inducement',               definition: 'Prohibited offering of gifts/cash/rewards outside what the insurer expressly authorizes.' },
      { term: 'Tied Selling',                        definition: 'Federally prohibited — requiring one product as a condition of another (e.g., bank+insurance).' },
      { term: 'Unbundled Service Fee',               definition: 'Permitted if disclosed in advance — not rebating.' },
      { term: 'PIPEDA',                              definition: 'Federal privacy law governing collection, use, and disclosure of personal information.' }
    ]
  }
]

// Backwards compatibility — the existing UI imports `curriculum` and reads
// `day` on each entry. Re-export under both names with a `day` alias so the
// rest of the app continues to work without invasive changes.
export const curriculum = chapters.map(c => ({
  ...c,
  day: c.chapter
}))
